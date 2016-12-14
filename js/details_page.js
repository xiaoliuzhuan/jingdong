// JavaScript Document
	
var jaon={
	
		
	magnify:	//放大镜 ：绑定鼠标移动事件-------------------------------------------------
		
			//找对象
			//放大镜对象
		function(){
			//上半部：放大镜
			var wreb=document.getElementById('wreb');
			var oBox=document.getElementById('box');
			var oBox1=document.getElementById('box1');
			var img=oBox1.getElementsByTagName('img')[0];
			var oBox2=document.getElementById('box2');
			var oSpan=oBox1.getElementsByTagName('span')[0];
			var daImg=document.getElementById('dImg');
			var aImg=['57e396a1Na0fb1ed9.jpg','57e396a8Na7f7fc12.jpg','57e396c0Na646de83.jpg','57e396c8N96d5795a.jpg','57e396ceN918b22b1.jpg'];
			
			
			//下半部 ：切换图片
			var slideBox=document.getElementById('slideBox');
			var oUl=slideBox.getElementsByTagName('ul')[0];
			var aLi=oUl.getElementsByTagName('li');
			var aA=slideBox.getElementsByTagName('a');
			var n=0;
			
			
			//上半部：放大镜
			oBox1.onmousemove=function(ev){
				ev=ev||event;
				//滚动条兼容性
				var scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
				var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
				
					
				//oSpan和oBox2显示出来
				oSpan.style.display=oBox2.style.display='block';
				
				//算出oSpan的offsetLeft和offsetTop
				var l=ev.clientX+scrollLeft-wreb.offsetLeft-oBox.offsetLeft-oBox1.offsetLeft-oSpan.offsetWidth/2;
				var t=ev.clientY+scrollTop-wreb.offsetTop-oBox.offsetTop-oBox1.offsetTop-oSpan.offsetHeight/2;
				
				
				//判断oSpan的移动范围
				if(l<0){l=0};
				if(l>oBox1.offsetWidth-oSpan.offsetWidth){
					l=oBox1.offsetWidth-oSpan.offsetWidth
				};
				if(t<0){t=0};
				if(t>oBox1.offsetHeight-oSpan.offsetHeight){
					t=oBox1.offsetHeight-oSpan.offsetHeight
				};
				
				//计算oSpan的移动比率
				var rate_l=l/(oBox1.offsetWidth-oSpan.offsetWidth);
				var rate_t=t/(oBox1.offsetHeight-oSpan.offsetHeight);
				
				//oSpan的定位值
			
				oSpan.style.top=t+'px';
				oSpan.style.left=l+'px';
				
				//计算大图片移动的比率
				daImg.style.top=-(daImg.offsetHeight-oBox2.offsetHeight)*rate_t+'px';
				daImg.style.left=-(daImg.offsetWidth-oBox2.offsetWidth)*rate_l+'px';
			};
			//鼠标移出后
			oBox1.onmouseout=function(){
				oSpan.style.display=oBox2.style.display='none';
			};
			
			
			
			//下半部 ：切换图片
			//绑定鼠标滑过事件 并清除所有类 再给自己加上类
			for(var i=0;i<aLi.length;i++){
				aLi[i].index=i;
				aLi[i].onmousemove=function(){					
					for(var j=0;j<aLi.length;j++){
						aLi[j].className='';		
					};
					this.className='xian';
					n=this.index;
					img.src='images/'+aImg[n];
					daImg .src='images/'+aImg[n];
					
				};
			};
			aA[0].onclick=function(){
					n--;
					if(n<0){
						n=aLi.length-1;
					};
					for(var j=0;j<aLi.length;j++){
						aLi[j].className='';	
					};
					aLi[n].className='xian';
					img.src='images/'+aImg[n];
					daImg .src='images/'+aImg[n];
			
				};
				aA[1].onclick=function(){
					n++;
					if(n>aLi.length-1){
						n=0;
					};
					for(var j=0;j<aLi.length;j++){
						aLi[j].className='';	
					};
					aLi[n].className='xian';
					img.src='images/'+aImg[n];
					daImg .src='images/'+aImg[n];
			
				};
		},
		
		
		
	cut:	//切换ac----------------------------------------------------------------------------------------
	  function(){
		var oSize=document.getElementById('size');
		var oUl=oSize.getElementsByTagName('ul')[0];
		var aLi=oUl.getElementsByTagName('li')[0];
		var oA=aLi.getElementsByTagName('a');
		
		for(var i=0;i<oA.length;i++){
			//绑定点击事件并清除所有ac 让自己加上ac
			oA[i].onclick=function(){
				for(var j=0;j<oA.length;j++){
					oA[j].className='';
				};
				this.className='ac';	
			};
		};
		
	  },
	  
   appreciation: 	//增加value值------------------------------------------------------------------------
	  function(){
		var oNumber=document.getElementById('number');
		var input=oNumber.getElementsByTagName('input')[0];
		var ja=oNumber.getElementsByTagName('a');
		var n=1;
		
		
		ja[0].onclick=function(){
			n++;
			input.value=n;	
		};
		ja[1].onclick=function(){
			n--;
			if(n<=0){
				n=1;
				
			}else{
				input.value=n;
			};
				
		};
	  },
		
	TabControl://选项卡 ：-----------------------------------------------------------------------
	  function(){
		//选项卡对象
		var option=document.getElementById('option');
		var aA=option.getElementsByTagName('a');
		var oLunb=document.getElementById('lunb');
		var aUl=oLunb.getElementsByTagName('ul');
		
		
		//给所有aLi绑定点击事件 给每个发上牌照 并清除所有ac 再给自己加上ac
		for(var i=0;i<aA.length;i++){
			aA[i].index=i;
			//绑定点击事件
			aA[i].onmousemove=function(){
				//清除ac
				for(var j=0;j<aA.length;j++){
					aA[j].className='';
					aUl[j].style.display='none';
				};
				//给自己加上ac
				this.className='ac';
				aUl[this.index].style.display='block';
			};
		};
	
	  },

	
	
	
};
	
	
