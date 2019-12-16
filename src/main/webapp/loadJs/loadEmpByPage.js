

/*页面加载事件*/
$(function(){
	loadEmpByPage(1);
});



//毫秒转日期
function turnTime(ms){
	var oDate = new Date(ms),
	oYear = oDate.getFullYear(),
	oMonth = oDate.getMonth()+1,
	oDay = oDate.getDate(),
	oHour = oDate.getHours(),
	oMin = oDate.getMinutes(),
	oSen = oDate.getSeconds(),
	oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay) +' '+ getzf(oHour) +':'+ getzf(oMin) +':'+getzf(oSen);//最后拼接时间
	return oTime;
}
//给时间补上零
function getzf(num){
	if(parseInt(num) < 10){
		num = '0'+num;
	}
	return num;
}

function loadEmpByPage(indexpage){
//获取代码保存位置
	var context = $("#myContext");
	//
	var url = "/maven_ssm/api/emp/findEmpByPage.action";
	var params= {"indexpage":indexpage}; 
	
	
	
	$.post(
	url,
	params,
	function(apiBean){
	//dom对象
		var data = apiBean.datas;
		
		//dom对象转Jquery对象
		var $da = $(data);
		//定义一个总变量保存数据
		var sumData= "";
		
		$da.each(function(index,dom){
			
			var items = "<tr>";
			items += "<td>"+(index+1)+"</td>";
			items += "<td>"+dom.ename+"</td>";
			items += "<td>"+dom.job+"</td>";
			items += "<td>"+dom.mgr+"</td>";
			items += "<td>"+dom.hiredate+"</td>";
			items += "<td>"+dom.sal+"</td>";
			items += "<td><a href=''>编辑</a>&nbsp;<a href=''>删除</a></td>";
			items +="</tr>";
			
			sumData += items;
			
		});
		
		context.html(sumData);
		
		
		
		
		
	
		//======================================
		//使用js封装分页数据	
		
		var pagehtml ="";
	
		pagehtml += "<a onclick='loadEmpByPage(1)' >[首页]</a>&nbsp;";
		if(apiBean.indexpage > 1){
			
			pagehtml += "<a onclick='loadEmpByPage("+(apiBean.indexpage - 1)+")' > 上一页 </a>&nbsp;";
		}else{
			pagehtml +="上一页";
			
		}
		
		
		if(apiBean.totalPage < 4){
			for (var i = 1; i <= apiBean.totalPage; i++) {
				pagehtml +="<a style='text-decoration: none' class='myClass' onclick='loadEmpByPage("+i+")'>&nbsp;<input type='button' value='"+i+"'/>&nbsp;</a>";
			}
			
		}else if(apiBean.indexpage + 4 <= apiBean.totalPage){
			
			for ( var i = apiBean.indexpage; i < apiBean.indexpage + 4; i++) {
				pagehtml += "<a style='text-decoration: none' class='myClass' onclick='loadEmpByPage("+i+")' >&nbsp;<input type='button' value='"+i+"'/>&nbsp;</a>&nbsp;";
			}
		}
		else if(apiBean.indexpage <= 3){
			
			for ( var i = apiBean.indexpage-1; i < apiBean.totalPage; i++) {
				pagehtml += "<a style='text-decoration: none' class='myClass' onclick='loadEmpByPage("+i+")' >&nbsp;<input type='button' value='"+i+"'/>&nbsp;</a>&nbsp;";
			}
		}
		
		else{
			for ( var i = apiBean.totalPage - 3; i <= apiBean.totalPage; i++) {
				pagehtml += "<a style='text-decoration: none' class='myClass'  onclick='loadEmpByPage("+i+")' >&nbsp;<input type='button' value='"+i+"'/>&nbsp;</a>&nbsp;";
			}
		}
		
		
		if(apiBean.indexpage < apiBean.totalPage){
			
			pagehtml += "<a onclick='loadEmpByPage("+(apiBean.indexpage + 1)+")' > 下一页 </a>&nbsp;";
		}else{
			pagehtml +=" 下一页&nbsp;&nbsp;&nbsp;";
		}
		
		pagehtml += "<a onclick='loadEmpByPage("+(apiBean.totalPage)+")' >[尾页]</a>&nbsp;";
		pagehtml += "当前第&nbsp;"+apiBean.indexpage+"&nbsp;页/共&nbsp;"+apiBean.totalPage+"&nbsp;页";
		pagehtml +="</ul>";
		$("#myPage").html(pagehtml);
		
		
	},
	"json"
	
	);
	
	
	
	
	
	
}
