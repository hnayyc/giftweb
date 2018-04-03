package com.hnayyc.giftweb.service;

import com.hnayyc.giftweb.utils.DateStrUtils;
import com.hnayyc.giftweb.dao.SqlDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Transactional
@Service
public class DemoService {

    @Autowired
    private SqlDao sqlDao;

    public List<Map<String, Object>> list() {
        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
        for(int i=0; i< 10; i++) {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put(String.format("%d", i), DateStrUtils.getCurrentDateStr());
            list.add(map);
        }
        return list;
    }

    public List<Map<String, Object>> query() {
        String sql = "select t.id, t.name, t.salary, t.ssn from employee t ";
        return sqlDao.createSQLQueryForMap(sql).list();
    }
}
