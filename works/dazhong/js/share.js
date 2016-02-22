// JavaScript Document
var timer=null;
window.onload=function(){
	var oDiv=document.getElementById('share');
	oDiv.onmouseover=function(){
		startMove(0);
		}
		oDiv.onmouseout=function(){
		startMove(-90);
		}
	}
function startMove(iTarget){
	var oDiv=document.getElementById('share');
	clearInterval(timer);
	timer=setInterval(function(){
		var  iSpeed=0;
		if(oDiv.offsetLeft<iTarget){
			  iSpeed=10;
			}
		else{
           iSpeed=-10;
			}
		if(oDiv.offsetLeft==iTarget){
			clearInterval(timer);
			}
			else{
				oDiv.style.left=oDiv.offsetLeft+iSpeed+'px';
			
				}
		},20);
	}
	
/*·ÖÏíµ½*/



