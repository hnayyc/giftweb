package com.hnayyc.giftweb.listener;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

public class MyHttpSessionListener implements HttpSessionListener{

	private String prefix = "[Listener][HttpSessionListener]";
	
	@Override
	public void sessionCreated(HttpSessionEvent event) {
		System.out.println(prefix + "HttpSession对象创建");
	}

	@Override
	public void sessionDestroyed(HttpSessionEvent event) {
		System.out.println(prefix + "[HttpSessionListener]HttpSession对象销毁");
	}

}
