// JavaScript Document





addReadyMap();
function addReadyMap(){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',function(){

		var map = new BMap.Map("baidu_map");    
		var point = new BMap.Point(121.4363,31.1465);  
		map.centerAndZoom(point, 19);   
		var marker = new BMap.Marker(point);
		map.addOverlay(marker); 
	
	map.enableScrollWheelZoom(true);
	map.disableDragging();     //禁止拖拽
	setTimeout(function(){
	   map.enableDragging();   //两秒后开启拖拽
	   //map.enableInertialDragging();   //两秒后开启惯性拖拽
	}, 2000);
	
	   
	var local = new BMap.LocalSearch(map, {      
		  renderOptions:{map: map}      
	});      
	
	//var oBtn = document.getElementById("btn1");
	//var oText = document.getElementById("txt1");
	
	var walking = new BMap.WalkingRoute(map, {renderOptions:{map: map, autoViewport: true}});
	
	//walking.search(oText.value,"上海市徐汇区老沪闵路777号");
	//oBtn.onclick = function(){
		//local.search(oText.value);	
		
	//};
			
		},false);	
	}else{
		document.onreadystatechange=function(){	
			if(document.readyState=='complete'){
			}
		};
	}	
}













			
			
			
