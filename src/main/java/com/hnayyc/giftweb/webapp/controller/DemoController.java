package com.hnayyc.giftweb.webapp.controller;

import com.hnayyc.giftweb.webapp.service.DemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping(value = "/demo")
public class DemoController {

    @Autowired
    private DemoService demoService;

    @RequestMapping(value = "list")
    @ResponseBody
    public Object list() {
        return demoService.list();
    }

    @RequestMapping(value = "query")
    @ResponseBody
    public Object query() {
        return demoService.query();
    }
}
