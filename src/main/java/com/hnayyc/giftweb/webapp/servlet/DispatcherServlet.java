package com.hnayyc.giftweb.webapp.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import java.util.ResourceBundle;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//import com.dl.utils.StringUtils;
//import com.smartreal.RtDbConnection;

public class DispatcherServlet extends HttpServlet {
	private static final long serialVersionUID = -8107337208824508083L;
	private static final String controllerPrefix  = "com.dl.controller.";
	private static final String controllerPostfix = "Controller";
	
//	private Object dataSource;
//	private RtDbConnection rtdbConn;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		handleRequest(request, response);
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		handleRequest(request, response);
	}

	@Override
	public void init() throws ServletException {
		super.init();
		
		try {
			Context envContext = (Context)new InitialContext().lookup("java:/comp/env");
//			dataSource = envContext.lookup("jdbc/myoracle");
		} catch (Exception e) {
			throw new ServletException(e.getMessage());
		}
		
		try {
			ResourceBundle bundle = ResourceBundle.getBundle("config");
			String url = String.format("%s:%s", bundle.getString("host"), bundle.getString("port"));
			String user = bundle.getString("username");
			String password = bundle.getString("password");
			
//			rtdbConn = new RtDbConnection();
//			if (!rtdbConn.init(url, user, password)) throw new Exception("init failed.");
		} catch (Exception e) {
			throw new ServletException("rtdb initialized failed.");
		}
	}
	
	@Override
	public void destroy() {
		super.destroy();
		
		try {
//			rtdbConn.close();
		} catch (Exception e) {
		}
	}

	private void handleRequest(HttpServletRequest request, HttpServletResponse response) 
		throws ServletException, IOException {
//		String c = StringUtils.controllerName(request.getParameter("c"));
//		String a = StringUtils.actionName(request.getParameter("a"));

		String c = "controller";
		String a = "action";
		
		request.removeAttribute("c");
		request.removeAttribute("a");
		
		if (c != null && a != null) {
			Class<?> klass = null;
			Method method = null;
			Object instance = null;
			
			try {
				klass = Class.forName(controllerPrefix + c + controllerPostfix);
				method = klass.getMethod(a);
				
				Constructor<?> constructor = 
						klass.getConstructor(HttpServletRequest.class, HttpServletResponse.class);
				instance = constructor.newInstance(request, response);
			} catch (Exception e) {
				response.setStatus(HttpServletResponse.SC_NOT_FOUND);
				PrintWriter writer = response.getWriter();
				writer.write("cannot not find specified resource.");
				writer.close();
				return;
			}
			
			try {
//				request.setAttribute("ds", dataSource);
//				request.setAttribute("rt", rtdbConn);
				method.invoke(instance);
			} catch (Exception e) {
				response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
				PrintWriter writer = response.getWriter();
				e.printStackTrace(writer);
				writer.close();
				return;
			} finally {
				request.removeAttribute("ds");
				request.removeAttribute("rt");
			}
		} else {
			response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			PrintWriter writer = response.getWriter();
			writer.write("invalid request.");
			writer.close();
		}
	}
}
