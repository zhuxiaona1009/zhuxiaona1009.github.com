// JavaScript Document
window.onload=function(){
	if(window.navigator.userAgent.indexOf("MSIE 6")!=-1){
		oBtn.style.position='absolute';
		}
	var oBtn=document.getElementById('btn1');
	var timer=null;
	var 用户滚的=true;
	oBtn.onclick=function(){
		move(0,1000);
		
		function move(iTarget,time){
			var start=document.documentElement.scrollTop||document.body.scrollTop;
			var dis=iTarget-start;
			var count=Math.round(time/30);
			var n=0;
			
			clearInterval(timer);
			timer=setInterval(function(){
				n++;
				var a=1-n/count;
				var cur=start+dis*(1-a*a*a);
				document.documentElement.scrollTop=cur;
				document.body.scrollTop=cur;
				用户滚的=false;
				if(n==count){
					clearInterval(timer);	
				}
			},30);
		}
	};	
	
	window.onscroll=function(){
		//console.log(用户滚的);
		if(用户滚的){
			clearInterval(timer);	
		}
		用户滚的=true;
		
		var scrTop=document.documentElement.scrollTop||document.body.scrollTop;
		
		if(scrTop>=300){
			oDiv.style.display='block';	
		}else{
			oDiv.style.display='none';	
		}
	
	
	
	
	};
};