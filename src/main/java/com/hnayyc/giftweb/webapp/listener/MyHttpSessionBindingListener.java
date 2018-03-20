package com.hnayyc.giftweb.webapp.listener;

import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionBindingListener;

public class MyHttpSessionBindingListener implements HttpSessionBindingListener{

	private String prefix = "[Listener][HttpSessionBindingListener]";
	
	@Override
	public void valueBound(HttpSessionBindingEvent event) {
		System.out.println(prefix + "某个HttpSession对象绑定属性数据");
	}

	@Override
	public void valueUnbound(HttpSessionBindingEvent event) {
		System.out.println(prefix + "某个HttpSession对象解绑属性数据");
	}

}
