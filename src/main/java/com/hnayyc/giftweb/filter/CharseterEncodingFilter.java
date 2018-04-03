package com.hnayyc.giftweb.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/*
 * 解决全站乱码问题
 * */
public class CharseterEncodingFilter implements Filter {
	
	private String prefix = "[Filter][CharseterEncodingFilter]";
	
	private FilterConfig config = null;
	private String defaultCharset = "utf-8";

	public void init(FilterConfig filterConfig) throws ServletException {
		System.out.println(prefix + "初始化......");
		this.config = filterConfig;
	}

	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws IOException, ServletException {

		System.out.println(prefix + "doFilter() started ......");
		HttpServletRequest request = (HttpServletRequest) req;
		HttpServletResponse response = (HttpServletResponse) resp;

		String charset = config.getInitParameter("charset");
		if(charset==null){
			charset = defaultCharset;
		}

		req.setCharacterEncoding(charset);

		//有时候response不用设置编码，因为servlet一般不做输出，
		//输出交由jsp来做，所以只要jsp页面设定编码即可
		response.setCharacterEncoding(charset);
		response.setContentType("text/html;charset="+charset);

		chain.doFilter(request, response);
		System.out.println(prefix + "doFilter() ended ......");
	}

	public void destroy() {
		// TODO Auto-generated method stub
		System.out.println(prefix + "销毁......");
	}
}
