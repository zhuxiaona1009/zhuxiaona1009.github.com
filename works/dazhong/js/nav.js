window.onload=function()
{
	var oDiv=document.getElementById('nav');
	var aStrong=oDiv.getElementsByTagName('strong');
	var aA=oDiv.getElementsByTagName('a');
	var iTarget=oDiv.getElementsByTagName('li')[0].offsetHeight;
 
	for(var i=0; i<aStrong.length; i++)
	{
		aA[i].style.width=aStrong[i].style.width=aStrong[i].getElementsByTagName('span')[0].offsetWidth+'px';
		aStrong[i].style.position='absolute';
		aStrong[i].style.top=aStrong[i].style.left=0;
		
		aStrong[i].onmouseover=function()
		{
			startMove(this, -iTarget);
		};
		aStrong[i].onmouseout=function()
		{
			startMove(this, 0);
		};
	}
};
 
function startMove(obj,target)
{
	clearInterval(obj.iTime);
	obj.iTime=setInterval(function(){
		if(obj.offsetTop==target)
		{
			clearInterval(obj.iTime);
		}
		else
		{
			var iSpeed=(target-obj.offsetTop)/4;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			obj.style.top=obj.offsetTop+iSpeed+'px';
		}
	}, 30);
}
