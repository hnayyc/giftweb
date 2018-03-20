package com.hnayyc.giftweb.webapp.service;

import com.hnayyc.giftweb.webapp.dao.SqlDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DictService {

    @Autowired
    private SqlDao sqlDao;

    public Object publisher() {
        String sql = "select name, salary, ssn from employee";
        return sqlDao.createSQLQueryForMap(sql);
    }
}
