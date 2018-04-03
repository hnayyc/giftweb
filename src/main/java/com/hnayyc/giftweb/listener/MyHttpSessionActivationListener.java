package com.hnayyc.giftweb.listener;

import javax.servlet.http.HttpSessionActivationListener;
import javax.servlet.http.HttpSessionEvent;

public class MyHttpSessionActivationListener implements HttpSessionActivationListener{

	private String prefix = "[Listener][HttpSessionActivationListener]";
	
	@Override
	public void sessionDidActivate(HttpSessionEvent event) {
		System.out.println(prefix + "HttpSession对象Activeate（存入存储器）后");
	}

	@Override
	public void sessionWillPassivate(HttpSessionEvent event) {
		System.out.println(prefix + "HttpSession对象Passivate（从存储器加载到JVM中）前");
	}
}
