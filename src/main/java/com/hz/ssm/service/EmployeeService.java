package com.hz.ssm.service;

import com.hz.ssm.pojo.Employee;
import com.hz.ssm.utils.PageBean;

public interface EmployeeService {

	PageBean<Employee> findEmpByPage(Integer indexpage);

}
