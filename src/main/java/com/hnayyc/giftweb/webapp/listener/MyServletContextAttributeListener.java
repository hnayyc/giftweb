package com.hnayyc.giftweb.webapp.listener;

import javax.servlet.ServletContextAttributeEvent;
import javax.servlet.ServletContextAttributeListener;

public class MyServletContextAttributeListener implements ServletContextAttributeListener{
	
	private String prefix = "[Listener][ServletContextAttributeListener]";
	
	@Override
	public void attributeAdded(ServletContextAttributeEvent event) {  
		// 当上下文添加属性时，将调用该方法。这里只是将添加的属性信息打印出来  
		System.out.println(prefix + "增加ServletContext对象的一个属性：attributeAdded('"+event.getName()+"',' "+event.getValue()+"')");  
	}  
	
	@Override
	public void attributeRemoved(ServletContextAttributeEvent event) {  
		// 当把ServletContext中的某个属性删除时，调用该方法  
		System.out.println(prefix + "删除ServletContext对象的某一个属性：attributeRemoved('"+event.getName()+"',')");  
	}  
	
	@Override
	public void attributeReplaced(ServletContextAttributeEvent event) {  
		//TODO 当上下文进行属性值更新时，将调用该方法  
		System.out.println(prefix + "更改ServletContext对象的某一个属性：attributeReplaced('"+event.getName()+"','"+event.getValue()+"')");     
	}          
}
