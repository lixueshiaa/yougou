function myAddEvent(obj,ev,fun)   //事件绑定兼容性函数
{
	if(obj.attachEvent)
	obj.attachEvent('on'+ev,fun);
	else
	obj.addEventListener(ev,fun,false);
}
function getPos(ev)
{
	var scrollleft=document.documentElement.scrollLeft||document.body.scrollLeft;
	var scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
	return {x:ev.clientX+scrollleft,y:ev.clientY+scrolltop};
}
function getByClass(oParent,sClass)
{
	var aEle=oParent.getElementsByTagName('*');
	var aResult=[];
	for(i=0;i<aele.length;i++)
	{
	if(aEle[i].className==sClass)
	{
		aResult.push(aEle[i]);
	}	
	}
	return aResult;
}
function getStyle(obj, name)   //获取对象外样式
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj,false)[name];
	}
}
function Change(obj,name,value,fuend)  //多用途运动框架
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function()
	{
		var cur=0;
		if(name == 'opacity')
		{
			cur=Math.round(parseFloat(getStyle(obj,name))*100);
		}
		else
		{
			cur=parseInt(getStyle(obj,name));
		}
		var speed=(value-cur)/8;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(value==cur)
		{
			clearInterval(obj.timer);
			if(fuend)fuend();
		}
		else
		{
			if(name=='opacity')
			{
				obj.style.filter="alpha(opacity="+(cur+speed)+")";
				obj.style.opacity=(cur+speed)/100;
			}
			else
			{
			    obj.style[name]=cur+speed+"px";
			}
		}
	},30)
}
function ChangePerfect(obj,json,fuend)  //完美运动框架
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function()
	{
		bStop=true;    //假设所有的值都到了
		for(var name in json)
		{
			var cur=0;
			if(name == 'opacity')
			{
				cur=Math.round(parseFloat(getStyle(obj,name))*100);
			}
			else
			{
				cur=parseInt(getStyle(obj,name));
			}
			var speed=(json[name]-cur)/10;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(cur!=json[name])
			bStop=false;
			if(name=='opacity')
			{
				obj.style.filter="alpha(opacity="+(cur+speed)+")";
				obj.style.opacity=(cur+speed)/100;
			}
			else
			{
				obj.style[name]=cur+speed+"px";
			} 
		}
		if(bStop)
		  {
			  clearInterval(obj.timer);
			  if(fuend)fuend();
		  }
	},30)
}
