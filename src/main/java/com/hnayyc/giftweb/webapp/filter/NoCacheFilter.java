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
 * 禁止缓存所有动态页面的过滤器
 * */
public class NoCacheFilter implements Filter {
	
	private String prefix = "[Filter][NoCacheFilter]";
	
	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		// TODO Auto-generated method stub
		System.out.println(prefix + "初始化......");
	}
	
	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws IOException, ServletException {

		System.out.println(prefix + "doFilter() started ......");
		HttpServletRequest request = (HttpServletRequest) req;
		HttpServletResponse response = (HttpServletResponse) resp;

		/* 
		 * 有 3 个 HTTP 响应头字段都可以禁止浏览器缓存当前页面
		 * 并不是所有的浏览器都能完全支持上面的三个响应头，因此最好是同时使用上面的三个响应头。
		 */
		//Expires数据头：值为GMT时间值，为-1指浏览器不要缓存页面
		response.setDateHeader("expires",-1);
		//Cache-Control响应头有两个常用值：no-cache指浏览器不要缓存当前页面；max-age:xxx指浏览器缓存页面xxx秒。
		response.setHeader("Cache-Control","no-cache");
		response.setHeader("Pragma","no-cache");
	      
		chain.doFilter(request, response); 
		System.out.println(prefix + "doFilter() ended ......");
	}

	public void destroy() {
		// TODO Auto-generated method stub
		System.out.println(prefix + "销毁......");
	}
}
