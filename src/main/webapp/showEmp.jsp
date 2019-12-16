<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<!-- 引入三个资源 -->
<link rel="stylesheet" type="text/css" href="/maven_ssm/css/bootstrap.min.css" />
<script type="text/javascript" src="/maven_ssm/js/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="/maven_ssm/js/bootstrap.min.js"></script>


<script type="text/javascript" src="/maven_ssm/loadJs/loadEmpByPage.js"></script>
<!--<script type="text/javascript">
 $(function(){
	$.post(
			"/maven_ssm/api/cust/findCustByLevelOption.action",
			null,
			function(data){
				//把dom对象转jquery对象
				var $da = $(data);
				//获取下拉选择框的位置
				var context = $("#custLevel");
				
				//循环追加option标签及内容
				$da.each(function(index,dom){
					
					context.append("<option value='"+dom+"'>"+dom+"</option>");
				
				
				});
				
				
				
			},
			"json"
		
		
		);
	
	
	
});


</script>
 -->

</head>
<body>

	<form method="post" action="">
		<table class="table table-bordered table-hover">
		
		<tr>
			<td><input type="text" name="custName" id="custName"></td>
			<td>
			<select name="custLevel" id="custLevel">
				<option value="">--&nbsp;请选择&nbsp;--</option>
			</select>
			
			</td>
			<td><input type="button" onclick="loadCustomerByPage(1)" value="提交"></td>
			
			
		</tr>
		<tr>
			<td>编号</td>
			<td>员工姓名</td>
			<td>职位</td>
			<td>领导编号</td>
			<td>入职日期</td>
			<td>薪水</td>
			<td>操作</td>
		</tr>
		<tbody id="myContext">
		
		</tbody>
		
		
		</table>
		<center>
		<div id="myPage">
		
		</div>
		</center>
		
	</form>


</body>
</html>