package com.hnayyc.giftweb.controller;

import com.hnayyc.giftweb.service.DictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/demo")
public class DictController {

    @Autowired
    private DictService dictService;

    @RequestMapping(value = "publisher")
    @ResponseBody
    public Object publisher() {
        return dictService.publisher();
    }
}
