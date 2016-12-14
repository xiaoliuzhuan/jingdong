// JavaScript Document


var jaon={
	
	//固定侧边栏
	float:
		function(){
			var fu=document.getElementById('fu');
			var oUl=fu.getElementsByTagName('ul')[0];
			var oLi1=oUl.getElementsByTagName('li');
			var Ol=fu.getElementsByTagName('ol')[0];
			var aLi=Ol.getElementsByTagName('li');
			
			for(var i=0;i<oLi1.length;i++){
				oLi1[i].index=i;
				oLi1[i].onmouseover=function(){
					clearTimeout(timer);
					for(var j=0;j<oLi1.length;j++){
						oLi1[j].className='';
						aLi[j].className='';
					};
					var _this=this;
					var timer=setTimeout(function(){
						_this.className='ac';
						aLi[_this.index].className='ac';
						aLi[_this.index].style.marginRight=20+'px';
					},300);
					
				};
				oLi1[i].onmouseout=function(){
					var _this=this;
					var ime=setTimeout(function(){
						_this.className='';
						aLi[_this.index].className='';
						aLi[_this.index].style.marginRight=-150+'px';
					},300);
				};
				
			};
		},
		
	menu:
	function(){//菜单动效-----------------------------------------------------
		var jdMenu=document.getElementById('jdMenu');
		var oUl=jdMenu.getElementsByTagName('ul')[0];
		var aLi=oUl.getElementsByTagName('li');
		
		
		var menuCont=document.getElementById('menuCont');
		var oDiv=menuCont.getElementsByClassName('section');
		
		var show_t;//显示弹框计算器
		var hide_t;//隐藏弹框计算器
		var move_t;//鼠标从弹框移入菜单延迟用计时器
		
		
		//删除所有li上的ac
	/*	function del_li_ac(){
			for(var i=0; i<aLi.length; i++){
				aLi[i].className="";
				
			};
		};*/
		
		//绑定事件---------------------------------
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;//给每一个aLi发上拍照
			aLi[i].onmouseover=function(){
				clearTimeout(hide_t);//清除关闭
				clearTimeout(move_t);//清除鼠标移动
				
				var _this=this;//计时器中的this是window，所以要先声明一个_this变量，用这个变量传入计时器 
				show_t=setTimeout(function(){
					menuCont.style.display='block';	
					//先让所有的弹框隐藏 再让自己显示
					for(var i=0;i<oDiv.length;i++){
						oDiv[i].style.display='none';
					};
					/*del_li_ac();//删除所有li上的ac  */
					/*_this.className='ac';*/
					oDiv[_this.index].style.display="block";
				},200);
			};
			
			//绑定鼠标移开事件
			aLi[i].onmouseout=function(){
				clearTimeout(show_t);
				clearTimeout(hide_t);
				var _this=this;  
				hide_t=setTimeout(function(){
					menuCont.style.display="none"; //oMenuCont弹框 隐藏
					/*del_li_ac();*/
				},200);	
				
			};
		};
		
		//绑定鼠标移到menuCont上让自己显示事件
		menuCont.onmouseover=function(){
			clearTimeout(hide_t);
			clearTimeout(move_t);
			this.style.display="block"; //让自己显示
		};
		
		menuCont.onmouseout=function(){
			var _this=this;
			move_t=setTimeout(function(){//延时隐藏
				_this.style.display="none";
				/*del_li_ac();//删除所有li上的ac  */
			},100);
		}
	},
	
	carousel://轮播图-----------------------------------------------------------------
		function(){
			var oBox=document.getElementById('slideBox');
			var aBtn=oBox.getElementsByTagName('ol')[0].children;
			var oUl=oBox.getElementsByTagName('ul')[0];
			var aLi=oUl.children; 
			var iNow=0;
			var pBtn=prevBtn
			var nBtn=nextBtn	
			
			//得到每一张图片在初始值宽度
			var li_w=hxsd_tools.getStyle(aLi[0],"width");
			
			//算出ul总的宽度
			oUl.style.width=li_w*aLi.length+'px';
			
			//切换所有按钮 并让对应在图片显示---------------------------------------------
			for(var i=0;i<aBtn.length;i++){
				aBtn[i].index=i;//发牌照
				aBtn[i].onclick=function(){
					for(var j=0;j<aBtn.length;j++){//清除所有的ac属性给自己加上
						aBtn[j].className='';
						
					};	
					this.className='ac';
					iNow=this.index;
					//oUl移动
					hxsd_tools.move(oUl,{"left":-li_w*this.index});
				};
			};
			function changeBtn(n){//切换左右按钮时让aBtn也跟着切换
				for(var k=0;k<aBtn.length;k++){
					aBtn[k].className='';
				};
				aBtn[n].className='ac';
			};
			
			
			//切换左右按钮--------------------------------------------
			pBtn.onclick=function(){//左按钮减
				iNow--;
				if(iNow<0){//限制范围
					iNow=0;
				};
				hxsd_tools.move(oUl,{"left":-li_w*iNow});	
				changeBtn(iNow);//调用链接函数并传参数
			};
			
			nBtn.onclick=function(){
				iNow++;
				if(iNow>=aLi.length-1){
					iNow=aLi.length-1
				};
				hxsd_tools.move(oUl,{"left":-li_w*iNow});	
				changeBtn(iNow);//调用链接函数并传参数
			};
		},
		
		tab://选项卡切换--------------------------------------------------------------------------
		function(afloor){

			var clear1=afloor.getElementsByClassName('clear1')[0];
			var aLi1=clear1.getElementsByTagName('li');
			var boxBot1=afloor.getElementsByClassName('boxBot1');
			
			for(var i=0;i<aLi1.length;i++){
				aLi1[i].index=i;
				aLi1[i].onmouseover=function(){
					for(var j=0;j<aLi1.length;j++){
						boxBot1[j].style.display='none';
					};	
					boxBot1[this.index].style.display='block';
				};
			};
		},
	
	
	kl:
	function(){
	var LocationFloorList=document.getElementsByClassName('LocationFloorList')[0];
	var aLi=LocationFloorList.getElementsByTagName('li');
	var aFloor=document.getElementsByClassName('floor');
	var arr=[];
		
	//-------------------------------------------------
		
	for(var i=0; i<aFloor.length; i++){
		var json={};
		json.name=i;
		json.offsetTop=aFloor[i].offsetTop;
		arr.push(json);
	};
	
	//console.log(arr);
	
	window.onscroll=function(){
		//显示楼层编号-------------------------------------------------
		var scrolltop=document.documentElement.scrollTop || document.body.scrollTop;
		if(scrolltop>100){
			LocationFloorList.style.display='block';
		}else{
			LocationFloorList.style.display='none';
		};
		
		// 根据楼层滚动位置，定位编号------------------------------------------------
		var last_arr=[];
		
		for(var j=0; j<arr.length; j++){
			if(arr[j].offsetTop<scrolltop+400){
				last_arr.push(arr[j].name);
			}
		};
		
		var li_index=last_arr[last_arr.length-1];

		for(var l=0; l<aFloor.length; l++){
			aLi[l].className='';
		};
		aLi[li_index].className='ac';
	};
	
	//点击编号，跳转到相对楼层-----------------------------------------------
	for(var i=0; i<aFloor.length; i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			var start=document.documentElement.scrollTop || document.body.scrollTop;
			var end=arr[this.index].offsetTop;
			move(start,end)
		}
	};
	//move-------------------------------------------------------
	var timer;
	function move(start,end){
		var dis=end-start;
		var count=parseInt(1500/30);
		var n=0;
		clearInterval(timer);
		timer=setInterval(function(){
			n++;
			var a=1-n/count;
			var step_dis=start+dis*(1-a*a*a*a);
			window.scrollTo(0,step_dis);
			if(n==count){
				clearInterval(timer);
			};
		},30)
	};
		
		
	},
};