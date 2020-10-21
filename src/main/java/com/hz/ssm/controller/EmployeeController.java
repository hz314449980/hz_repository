package com.hz.ssm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hz.ssm.pojo.Employee;
import com.hz.ssm.service.EmployeeService;
import com.hz.ssm.utils.PageBean;


@Controller
@RequestMapping("/api/emp")
public class EmployeeController {
	@Autowired
	private EmployeeService employeeService;

	@ResponseBody
	@RequestMapping("/findEmpByPage")
	public PageBean<Employee> findEmpByPage(Integer indexpage){


		System.out.println("=======================");
	
		PageBean<Employee>  pageBean = employeeService.findEmpByPage(indexpage);
		
		
		
		return pageBean;
	}

}
