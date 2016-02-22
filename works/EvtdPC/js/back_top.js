// JavaScript Document
window.onload=function(){
	var oBtn=document.getElementById('btn1');
	var bSys=true;
	var timer=null;
	if(navigator.userAgent.indexOf("MSIE 6")!=-1){
		oBtn.style.position="absolute";
		}
	window.onscroll=function(){
		if(!bSys){
			clearInterval(timer);
		}
		
		bSys=false;
		
	};
	oBtn.onclick=function(){
		timer=setInterval(function(){
			
							 
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;				 
			var iSpeed=Math.floor(-scrollTop/8);
			
			
			if(scrollTop==0){
				clearInterval(timer);				
			}
			bSys=true;
			
			document.documentElement.scrollTop=document.body.scrollTop=scrollTop+iSpeed;
								
								},30);
		
		
	};
	
	
};