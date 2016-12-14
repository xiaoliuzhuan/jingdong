// JavaScript Document
function documentReady(fn){
	if(document.addEventListener){//w3c
		document.addEventListener('DOMContentLoaded', fn, false);
	}else{//ie8一下
		document.attachEvent('onreadystatechange', function (){//IE兼容
			if(document.readyState=='complete'){
				fn && fn();
			}
		});
	}
};



var hxsd_tools={
	//屏幕中心显示
	"showCenter":function (obj){
		obj.style.display="block";
		var l=(document.documentElement.clientWidth-obj.offsetWidth)/2;
		var t=(document.documentElement.clientHeight-obj.offsetHeight)/2
		obj.style.left=l+'px';
		obj.style.top=t+'px';
		window.onresize=function(){
			showCenter(obj);
		}
	},
	
	
	//拖拽
	"drag":function (obj,title){
		title=title || obj;
		title.onmousedown=function(ev){
			ev=ev||window.event;
			
			//记录偏移 鼠标坐标--div.offsetLeft
			var disX=ev.clientX-obj.offsetLeft; //distance 距离
			var disY=ev.clientY-obj.offsetTop;
			
			
			document.onmousemove=function(ev){
				ev=ev||window.event;
				var x=ev.clientX-disX;//鼠标横坐标
				var y=ev.clientY-disY;//鼠标纵坐标
				
				//判断屏幕范围
				if(x<0){
					x=0;
				};
				if(y<0){
					y=0;
				};
				var screen_w=document.documentElement.clientWidth-obj.offsetWidth;
				var screen_h=document.documentElement.clientHeight-obj.offsetHeight;
				
				if(x>screen_w){
					x=screen_w
				};
				if(y>screen_h){
					y=screen_h
				}
				
				//赋值
				obj.style.left=x+'px';
				obj.style.top=y+'px';
			};
			//鼠标抬起,停止拖拽
			document.onmouseup=function(){
				document.onmousemove=null;	
			};
			return false;
		};
	},
	

	//增加class
	"addClass":function (elm,newCls){
			var newClass=elm.className+' '+newCls;
			return newClass;
		},
		
		
	//过滤文本和空格
	"get_firstChild":function (elm){
		var x=elm.firstChild;
			while (x.nodeType!=1){
				x=x.nextSibling;//把自己变成节点，while继续向前查找
			}
			return x;
		},
		
		
	"get_lastChild":function (elm){
		var x=elm.lastChild;
		while (x.nodeType!=1){
			x=x.previousSibling;//把自己变成节点，while继续向前查找
		}
		return x;
	},

	"get_previousSibling":function (elm){
		var x=elm.previousSibling;
		while (x.nodeType!=1){
			x=x.previousSibling;//把自己变成节点，while继续向前查找
		}
		return x;
	},


	"get_nextSibling":function (elm){
		var x=elm.nextSibling;
		while (x.nodeType!=1){
			x=x.nextSibling;
		}
		return x;
	},


	//事件监听
	"addEvent":function (obj,ev,fn){//对象  事件  回调函数
		obj.attachEvent? obj.attachEvent('on'+ev,fn):obj.addEventListener(ev,fn,false);
	},
	
	
	
	//获取初始值
	"getStyle":function (obj,styleName){
		var value=obj.currentStyle? obj.currentStyle[styleName]:getComputedStyle(obj,false)[styleName];
		if(styleName=="opacity"){
			value=Math.round(parseFloat(value)*100); //
		}else{
			value=parseInt(value);
		}
		return value;
	},
	
	
	
	//运动
	"move":function (obj,modeJson,time,fn){// 对象 运动json 时间 回调函数
		
		//预设动画速度
		var speed={
			"veryslow":2000,
			"slow":1200,
			"normal":700,
			"fast":400,
			"veryfast":200
		};
		
		
		//事件判断
		if(time){//如果传入时间
			if(typeof time=="string"){//如果是字符串
				time=speed[time];
			}
		}else{//没有输入time
			time=speed.normal;
		};
		
		//-------------------------------------------
	
		var start={};//起始值
		
		var dis={};//距离   end-start
		
		//遍历modeJson对象
		for(var key in modeJson){
			start[key]=this.getStyle(obj,key);
			dis[key]=modeJson[key]-start[key];
		};
		
		
		
		//--------------------------------------------
		
		var count=parseInt(time/30); //时间分段
		
		var n=0;
		
	
		
		clearInterval(obj.timer);
		
		//obj.timer 用obj的自定义属性存储计数器id
		obj.timer=setInterval(function(){
			n++;
			var a=1-n/count;
			
			//-------------------------------------
			for(var key2 in modeJson){
			
				var step_dis=start[key2]+ dis[key2]*(1-a*a*a)//每次要运动距离
				
				
				//透明度判断
				if(key2=="opacity"){
					obj.style.opacity=step_dis/100;
					obj.style.filter='alpha(opacity:'+step_dis +')';
				}else{
					obj.style[key2]=step_dis+'px';
				};
			
			}
			//--------------------------------------
			
			
			if(n==count){//走完所有分段
				clearInterval(obj.timer);
				fn && fn();//如果传入回调函数  就运行这个函数
			}
		
		},30)
	
	}
	
	
};








