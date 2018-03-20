package com.hnayyc.giftweb.webapp.service;

import com.hnayyc.giftweb.webapp.dao.SqlDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    @Autowired
    private SqlDao sqlDao;

    public Object favor() {
        return null;
    }

}
