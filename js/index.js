
$(function(){
	//header搜索切换
	(function()
	{
		var aAdd=[
					'金钱豹、大江南、湘水之珠、德瑀楼 荷棠鱼坊烤鱼',
					'购物天堂，你的衣橱管家 youyou 香奈儿',
					'旅游 途牛 一个人的天涯之路 快乐中国行',
					'烧客空间 你的空间你做主 爱咋滴就咋滴',
					'夜店天堂 你的狂野之路 释放你的激情 ktv'
				 ];
		var aA=$('#seach .mamu li a');
		var oTxt=$('#seach .form .txt').eq(0);
		var oTxtsml=$('#txtsmaill');
		var iNow=0;
		aA.each(function(index)
		{
			$(this).bind('click mouseover',function()
			{
				iNow=index;
				aA.attr('class','gradient');
				$(this).attr('class','active');
				oTxt.val(aAdd[iNow]);
			});
			oTxt.focus(function()
			{	
				if($(this).val()==aAdd[iNow])
				$(this).val('');
			});
			oTxt.blur(function()
			{
				if($(this).val()=="")
				$(this).val(aAdd[iNow]);
			});	
		});	
		switchtm(oTxtsml,'输入关键字');
		function switchtm(obj,str)
		{
			 obj.focus(function()
			{	
				if($(this).val()==str)
				$(this).val('');
			});
			 obj.blur(function()
			{
				if($(this).val()=="")
				$(this).val(str);
			});	
		}
	})();
	//鼠标移入变化
	(function()
	{
		var aLi=$('.forum li');
		aLi.each(function()
		{
			$(this).mouseover(function()
			{
				aLi.removeClass();
				$(this).addClass('active');	
			});
		});
	})();
	//选项卡
	(function(){
		optionka($('#option_a'));
		optionka($('#option_b'));
		optionkb($('#option_c'));
		optionkb($('#option_d'));
		function optionka(obj)
		{
			var aUl=obj.find('ul');
			var aLi=aUl.eq(0).find('li');
			aLi.each(function(index)
			{
				$(this).mouseover(function()
				{
					aLi.removeClass('active').addClass('gradient');
					$(this).removeClass('gradient').addClass('active');
					if($(this).hasClass('fr'))
					{
						$(aLi[index-1]).css('right','0px');
						$(this).css('right','-2px');
					}
					aLi.find('a').attr('class','triangle_down_grey');
					$(this).find('a').attr('class','triangle_down_red');
					for(i=1;i<aUl.length;i++)
					{
						$(aUl[i]).css('display','none');
					}
					//alert($(this).attr('class'));
					$(aUl[index+1]).css('display','block');
				});
			});
		}
		function optionkb(obj)
		{
			var aUl=obj.find('ul');
			var aLi=aUl.eq(0).find('li');
			aLi.each(function(index)
			{
				$(this).mouseover(function()
				{
					aLi.removeClass('active').addClass('gradient');
					$(this).removeClass('gradient').addClass('active');
					aLi.find('a').attr('class','triangle_down_grey');
					$(this).find('a').attr('class','triangle_down_red');
					for(i=1;i<aUl.length;i++)
					{
						$(aUl[i]).css('display','none');
					}
					//alert($(this).attr('class'));
					$(aUl[index+1]).css('display','block');
				});
			});
		}
	})();
	//动态新闻
	(function()
	{
		var oDiv=$('.update .new').eq(0);
		var oUl=$('.update .new ul')[0];
		var aLi=$(oUl).find('li');
		var oA1=$('.new .triangle_up').eq(0);
		var oA2=$('.new .triangle_down_red').eq(0);
		var now=0;
		var timer=setInterval(function(){oA1.click();},2000);
		oA1.click(function()
		{
			now++;
			if(now==aLi.length)
			now=0;
			moveChange();
		});
		oA2.click(function()
		{
			now--;
			if(now==-1)
			now=aLi.length-1
			moveChange();
		});
		function moveChange()
		{	
			n=aLi[0].offsetHeight;
			$(oUl).height(n*aLi.length);
			if(now==aLi.length)
			now=0;
			ChangePerfect(oUl,{top:-n*now});
		};
		oDiv.mouseover(function(){clearInterval(timer);});
		oDiv.mouseout(function(){timer=setInterval(function(){oA1.click();},3000);});
	})();
	//图片轮播效果
	(function()
	{
		var oDiv=$('.small_switch').eq(0);
		var oDt=$('.small_switch dt').eq(0);
		var aDd=$('.small_switch dd');
		var now=0;
		var timer=setInterval(autoClick,2000);
		aDd.click(function()
		{
			aDd.removeClass();
			$(this).addClass('active');
			oDt.html($(this).html());
		});
		function autoClick()
		{	
			now++;
			if(now==aDd.length)
			now=0;
			aDd.eq(now).trigger('click');
		}
		oDiv.mouseover(function(){clearInterval(timer);});
		oDiv.mouseout(function(){timer=setInterval(autoClick,2000);});
	})();
	//鼠标经过图片变化
});
