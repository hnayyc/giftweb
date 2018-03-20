package com.hnayyc.giftweb.webapp.filter;

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
 * 控制浏览器缓存页面中的静态资源的过滤器
 * 场景：有些动态页面中引用了一些图片或css文件以修饰页面效果，这些图片和css文件经常是不变化的，
 *     所以为减轻服务器的压力，可以使用filter控制浏览器缓存这些文件，以提升服务器的性能。
 * */
public class ExpiresFilter implements Filter {
	
	private String prefix = "[Filter][ExpiresFilter]";
	
	private FilterConfig config;
	
	public void init(FilterConfig filterConfig) throws ServletException {
		System.out.println(prefix + "初始化......");
		this.config = filterConfig;
	}

	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws IOException, ServletException {

		System.out.println(prefix + "doFilter() started ......");
		
		HttpServletRequest request = (HttpServletRequest) req;
		HttpServletResponse response = (HttpServletResponse) resp;

		//1.得到请求的是什么资源  css js jpg
		String uri = request.getRequestURI();
		if(uri.endsWith(".css")){
			long expriesTime = Integer.parseInt(this.config.getInitParameter("css")) * 1000;
			response.setDateHeader("expires", System.currentTimeMillis() + expriesTime);
		}else if(uri.endsWith(".js")){
			long expriesTime = Integer.parseInt(this.config.getInitParameter("js")) * 1000;
			response.setDateHeader("expires", System.currentTimeMillis() + expriesTime);
		}else if(uri.endsWith(".jpg")){
			long expriesTime = Integer.parseInt(this.config.getInitParameter("jpg")) * 1000;
			response.setDateHeader("expires", System.currentTimeMillis() + expriesTime);
		}

		chain.doFilter(request, response);
		System.out.println(prefix + "doFilter() ended ......");
	}

	public void destroy() {
		// TODO Auto-generated method stub
		System.out.println(prefix + "销毁......");
	}
}
