package com.hnayyc.giftweb.webapp.listener;

import javax.servlet.ServletRequestEvent;
import javax.servlet.ServletRequestListener;

public class MyServletRequestListener implements ServletRequestListener{

	private String prefix = "[Listener][ServletRequestListener]";
	
	@Override
	public void requestInitialized(ServletRequestEvent event) {
		System.out.println(prefix + "request对象创建");
	}
	
	@Override
	public void requestDestroyed(ServletRequestEvent event) {
		System.out.println(prefix + "request对象销毁");
	}
}
