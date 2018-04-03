package com.hnayyc.giftweb.listener;

import javax.servlet.ServletRequestAttributeEvent;
import javax.servlet.ServletRequestAttributeListener;

public class MyServletRequestAttributeListener implements ServletRequestAttributeListener {

	private String prefix = "[Listener][ServletRequestAttributeListener]";
	
	@Override
	public void attributeAdded(ServletRequestAttributeEvent event) {
		System.out.println(prefix + "request对象添加属性");
	}

	@Override
	public void attributeRemoved(ServletRequestAttributeEvent event) {
		System.out.println(prefix + "request对象移除属性");
	}

	@Override
	public void attributeReplaced(ServletRequestAttributeEvent event) {
		System.out.println(prefix + "request对象置换属性");
	}
}
