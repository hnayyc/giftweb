package com.hnayyc.giftweb.webapp.controller;

import com.hnayyc.giftweb.webapp.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "book")
public class BookController {

    @Autowired
    private BookService bookService;

    @RequestMapping(value = "favor")
    @ResponseBody
    public Object favor() {
        return bookService.favor();
    }
}
