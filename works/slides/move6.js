//版权 北京智能社©, 保留所有权利

function getStyle(obj, name)
{
	if(obj.currentStyle)
		return obj.currentStyle[name];
	else
		return getComputedStyle(obj, false)[name];
}

//var timer=null;	//?

function move(obj, name, target, time)
{
	var start=parseFloat(getStyle(obj, name));
	var dis=target-start;
	
	var count=Math.round(time/30);
	var n=0;
	
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		n++;
		
		var cur=start+dis*n/count;
		if(name=='opacity')
		{
			obj.style.opacity=cur;
			obj.style.filter='alpha(opacity:'+cur*100+')';
		}
		else
		{
			obj.style[name]=cur+'px';
		}
		
		if(n==count)
		{
			clearInterval(obj.timer);
		}
	}, 30);
}





