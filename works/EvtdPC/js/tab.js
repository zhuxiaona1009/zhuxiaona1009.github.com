window.onload=function (){
	var oDiv=document.getElementById('main_left_top_move');
	var aBtn=oDiv.getElementsByTagName('ol')[0].children;
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.children;
	var now=0;
	oUl.innerHTML+=oUl.innerHTML;
	for(var i=0;i<aBtn.length;i++){
		(function (index){
			aBtn[i].onmouseover=function (){
				now=index;
				tab();
			};
		})(i);
	}
	function tab(){
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].className='';
		}
		if(now==2){
			aBtn[0].className='active';
			}else{
				aBtn[now].className='active';
				}
		move(oUl,{top:-(aLi[0].offsetHeight+10)*now},{time:1000,fn:function(){
			if(now==2){
				oUl.style.top=0;
				now=0;
				}
			}});
		}
	function next(){
		now++;
		tab();
	}
	var timer=setInterval(next, 2000);
	oDiv.onmouseover=function (){
		clearInterval(timer);
	};
	oDiv.onmouseout=function (){
		timer=setInterval(next, 2000);
	};
};