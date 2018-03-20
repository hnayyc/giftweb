package com.hnayyc.giftweb.webapp.listener;

import javax.servlet.http.HttpSessionAttributeListener;
import javax.servlet.http.HttpSessionBindingEvent;

public class MyHttpSessionAttributeListener implements HttpSessionAttributeListener {

	private String prefix = "[Listener][HttpSessionAttributeListener]";
	
	@Override
	public void attributeAdded(HttpSessionBindingEvent event) {
		System.out.println(prefix + "HttpSession对象添加属性");
	}

	@Override
	public void attributeRemoved(HttpSessionBindingEvent event) {
		System.out.println(prefix + "HttpSession对象添加属性");
	}

	@Override
	public void attributeReplaced(HttpSessionBindingEvent event) {
		System.out.println(prefix + "HttpSession对象添加属性");
	}
}
