window.onload = function(){

	//导航
	var cover  = document.getElementsByClassName("hup")[0];
	var changecolor = document.getElementById("changecolor");
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>150){
			cover.style.position = "fixed";	
		}else{
			cover.style.position = "static";
			
		}
		if(st>50){
			changecolor.style.backgroundColor = "#f8f7f6";
		}else{
			changecolor.style.backgroundColor = "white";
		}
	}


	// 充值
	var select = document.getElementById("select");
	var money = document.getElementById("money");
	select.onclick = function(){
		var node = document.createTextNode("¥"+select.value);
		money.replaceChild(node,money.firstChild);
		
	}


	// //右侧固定框
	var ff = document.getElementsByClassName("ff")[0];
	var fo = document.getElementsByClassName("fo")[0];
	var fpp = document.getElementsByClassName("fpp")[0];
	var ft = document.getElementsByClassName("ft")[0];
	var biger = document.getElementById("biger");
	var small = document.getElementById("small");

	ff.onmouseover = function(){
		animate(ff,{right:0});
	}
	ff.onmouseout = function(){
		animate(ff,{right:-75});
	}
	
	fo.onmouseover = function(){
		animate(fo,{right:0});
	}
	fo.onmouseout = function(){
		animate(fo,{right:-85});
	}

	fpp.onmouseover = function(){
		animate(this,{right:0});
		small.style.display = "none";
		biger.style.display = "block";
	}
	fpp.onmouseout = function(){
		animate(fpp,{right:-85});
		small.style.display = "block";
		biger.style.display = "none";
	}
	ft.onmouseover = function(){
		animate(this,{right:-5});
	}
	ft.onmouseout = function(){
		animate(ft,{right:-85});
	}

	


	// 轮播图
		var box = document.getElementById('box');
		var oNavlist = document.getElementById('nav').children;
		var slider = document.getElementById('slider');
		var left = document.getElementById('left');
		var right = document.getElementById('right');
		var index = 1;
		var timer;
		var isMoving = false;
		box.onmouseover = function(){
			animate(left,{opacity:100})
			animate(right,{opacity:100})
			clearInterval(timer)
		}
		box.onmouseout = function(){
			animate(left,{opacity:0})
			animate(right,{opacity:0})
			timer = setInterval(next, 3000);
		}
		right.onclick = next;
		left.onclick = prev;
		for( var i=0; i<oNavlist.length; i++ ){
			(function(i){
				oNavlist[i].onclick = function(){
					index = i+1;
					navmove();
					animate(slider,{left:-801*index});
				}
			})(i);
		}
		function next(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index++;
			navmove();
			animate(slider,{left:-801*index},function(){
				if(index==7){
					slider.style.left = '-801px';
					index = 1;
				}
				isMoving = false;
			});
		}
		function prev(){
			if(isMoving){
				return;
			}
			isMoving = true;
			index--;
			navmove();
			animate(slider,{left:-801*index},function(){
				if(index==0){
					slider.style.left = '-4806px';
					index = 6;
				}
				isMoving = false;
			});
		}
		function navmove(){
			for( var i=0; i<oNavlist.length; i++ ){
				oNavlist[i].className = "";
			}
			if(index >6 ){
				oNavlist[0].className = "active";
			}else if(index<=0){
				oNavlist[5].className = "active";
			}else {
				oNavlist[index-1].className = "active";
			}
		}
		timer = setInterval(next, 3000);




		// 弹幕
		var boxd = document.getElementById('box0');
		var sliderd = document.getElementById('slider0');
		var indexd = 0;
		var timerd;
		boxd.onmouseover = function(){
			clearInterval(timerd)
		}
		boxd.onmouseout = function(){
			timerd = setInterval(nextd, 500);
		}
		function nextd(){
			indexd++;
			if(indexd==14){
					sliderd.style.top = '0px';
					indexd = 1;
			}
			
			animate(sliderd,{top:-30*indexd});
		}
		timerd = setInterval(nextd, 500);
}