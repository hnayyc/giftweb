package com.hnayyc.giftweb.webapp.listener;

import javax.servlet.ServletContext;   
import javax.servlet.ServletContextEvent;  
import javax.servlet.ServletContextListener;  

public class MyServletContextListener implements ServletContextListener {

	private String prefix = "[Listener][ServletContextListener]";
	
	@Override
	public void contextInitialized(ServletContextEvent event) {  
		
		//TODO 该方法实现了ServletContextListener接口定义的方法，对ServletContext进行初始化  
		ServletContext context = event.getServletContext();  
		context.setAttribute("testName", "YangCheng");
		context.setAttribute("testPwd", "111111");
		context.setAttribute("testAge", "31");
		context.setAttribute("testSex", "man");
		
		System.out.println(prefix + "ServletContext初始化......");  //打印出该方法的操作信息  
	}  
	
	@Override
	public void contextDestroyed(ServletContextEvent event) {  
		//TODO 该方法实现了ServletContextListener接口类定义方法，用于释放ServletContext对象  
		System.out.println(prefix + "ServletContext被释放......");  
	}  
}
