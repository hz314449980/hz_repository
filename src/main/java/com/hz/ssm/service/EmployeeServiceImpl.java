package com.hz.ssm.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.hz.ssm.dao.EmployeeMapper;
import com.hz.ssm.pojo.Employee;
import com.hz.ssm.pojo.EmployeeExample;
import com.hz.ssm.pojo.EmployeeExample.Criteria;
import com.hz.ssm.utils.PageBean;
@Service
public class EmployeeServiceImpl implements EmployeeService {
	@Autowired
	private EmployeeMapper employeeMapper;

	@Override
	public PageBean<Employee> findEmpByPage(Integer indexpage) {
		//防止pageBean空指针,如果没传，默认首页
		
		if (indexpage == null) {
			indexpage = 1;
		}
		//pagehelper分页初始化
		PageHelper.startPage(indexpage, 5);
		EmployeeExample example = new EmployeeExample();
		
		Criteria criteria = example.createCriteria();
		//获得当前页的数据
		List<Employee> list = employeeMapper.selectByExample(example);
		//封装到PageInfo中
		PageInfo<Employee> pageInfo = new PageInfo<Employee>(list);
		//封装pagebean中
		PageBean<Employee> pageBean = new PageBean<Employee>(pageInfo.getPageSize(), pageInfo.getTotal());
		pageBean.setIndexpage(indexpage);
		//把当前页的数据保存到pagebean
		pageBean.setDatas(list);
		
		return pageBean;
	}
	
}
