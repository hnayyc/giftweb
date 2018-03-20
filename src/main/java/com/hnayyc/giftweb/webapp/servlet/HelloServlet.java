package com.hnayyc.giftweb.webapp.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HelloServlet extends HttpServlet {
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) {
		
		try{
			String name = request.getParameter("name");
			String title="HelloServlet";
			String heading="HelloServlet的doGet方法的输出：";
			
			// 从上下文环境中通过属性名获取属性值  
			ServletContext servletContext = getServletConfig().getServletContext();   
	        String testName = servletContext.getAttribute("testName").toString();   
	        String testPwd = servletContext.getAttribute("testPwd").toString();
			String testAge = servletContext.getAttribute("testAge").toString();
			String testSex = servletContext.getAttribute("testSex").toString();
	        
	        
			//生成HTTP响应结果
			//set content type
			response.setContentType("text/html;charset=GB2312");
			//write html page
			PrintWriter out = response.getWriter();
			out.print("<HTML><HEAD><TITLE>"+title+"</TITLE>");
			out.print("</HEAD><BODY>");
			out.print(heading);
			out.println("<h1><p>"+name+":您好</h1>");
			out.println("<h1><p>" + testName + "</h1>");
			out.println("<h1><p>" + testPwd + "</h1>");
			out.println("<h1><p>" + testAge + "</h1>");
			out.println("<h1><p>" + testSex + "</h1>");
			out.print("</BODY></HTML>");
			out.close();
		}
		catch(IOException e) {
			e.printStackTrace();
		}
	}
	
	public void doPost(HttpServletRequest request, HttpServletResponse response) {
		this.doGet(request, response);
	}
}
