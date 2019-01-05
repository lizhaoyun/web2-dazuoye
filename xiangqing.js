window.onload = function(){


	// 化妆品净含量
	var ml150 = document.getElementById("ml150");
	var ml200 = document.getElementById("ml200");
	ml150.onclick = function(){
		if(this.getAttribute("class") == "ml"){
			this.setAttribute("class","ml0");
			checkml.innerHTML = "\""+this.innerHTML+"\"";
			ml200.setAttribute("class","ml");	
		}
	}
	ml200.onclick = function(){
		if(this.getAttribute("class") == "ml"){
			this.setAttribute("class","ml0");
			checkml.innerHTML = "\""+this.innerHTML+"\"";
			ml150.setAttribute("class","ml");	
		}
	}
	// var contains = document.getElementsByClassName("ml");
	// var checkml = document.getElementById("checkml");
	// for (var i = 0; i < contains.length; i++) {
	// 	contains[i].index = i;
	// 	contains[i].onclick = function(){
	// 		if(this.getAttribute("class") == "ml"){
	// 			this.setAttribute("class","ml0");
	// 			checkml.innerHTML = "\""+this.innerHTML+"\"";
				
	// 		}
	// 		else{
	// 			this.setAttribute("class","ml");

	// 		}
			
	// 	}
	// }




	// 改变数量
	var decrease =document.getElementById("decrease");
	var add = document.getElementById("add");
	var num = document.getElementById("num");
	var numv = num.value;
	decrease.onclick = function(){
		if(numv == 1){
			this.style.cursor = "not-allowed";
		}else if(numv>1){
			// this.style.cursor = "default";
			if(add.style.cursor == "not-allowed"){
				add.style.cursor = "default";
			}
			this.style.cursor = "default";
			--numv;
			num.innerHTML = numv;
			num.value = numv;
		}
			

	}
	add.onclick = function(){
		if(numv == 5){
			this.style.cursor = "not-allowed";
		}else if(numv<5){
			if(decrease.style.cursor == "not-allowed"){
				decrease.style.cursor = "default";
			}
			this.style.cursor = "default";
			++numv
			num.innerHTML = numv;
			num.value = numv;

		}

	}


	//加入购买
	var addcar = document.getElementById("addcar");
	var buy = document.getElementById("buy");
	// var buy = document.getElementById("buy");
	var addshow = document.getElementsByClassName("addshow")[0];
	var close = document.getElementById("close");
	var cobuy = document.getElementById("cobuy");
	var comesum = document.getElementById("comesum");

	addcar.onclick = function(){
		addshow.style.display = "block";
	}
	addcar.onmouseover = function(){
		addcar.style.color = "white";
		addcar.style.backgroundColor = "#ff0754";
	}
	addcar.onmouseout = function(){
		addcar.style.color = "#ff0754";
		addcar.style.backgroundColor = "white";
	}
	buy.onmouseover = function(){
		buy.style.color = "white";
		buy.style.backgroundColor = "#ff0754";
	}
	buy.onmouseout = function(){
		buy.style.color = "#ff0754";
		buy.style.backgroundColor = "white";
	}
	close.onclick = function(){
		addshow.style.display = "none";
	}
	comesum.onclick = function(){
		addshow.style.display = "none";
	}
	comesum.onmouseover = function(){
		comesum.style.backgroundColor = "#ff0754";
		comesum.style.color = "white";
	}
	comesum.onmouseout = function(){
		comesum.style.backgroundColor = "white";
		comesum.style.color = "#ff0754";
			
	}

	cobuy.onclick = function(){
		addshow.style.display = "none";
		
	}
	cobuy.onmouseover = function(){
		this.style.backgroundColor = "#ff0754";
		this.style.color = "white";
	}
	cobuy.onmouseout = function(){
		this.style.backgroundColor = "white";
		this.style.color = "#ff0754";
	}





	//放大镜
	var one = document.getElementById("one");
	var two = document.getElementById("two");
	var bg = document.getElementById("bg");   //大图
	var mo = document.getElementsByClassName("mo")[0];	//左箭头
	var mf = document.getElementsByClassName("mf")[0];	//右箭头



	var box = document.getElementById("box");
	var img1 = document.getElementById("img1");
	var slider = document.getElementById("slider");
	var img2 = document.getElementById("img2");
	var Bimg = document.getElementById("Bimg");


	
	one.onclick = function(){
		// one.index = 0
		bg.setAttribute("src","./任务所需小图/img/pp0.jpeg");
		this.style.border = "1px solid #ff9003";
		two.style.border = "none";
		Bimg.src = "./任务所需小图/img/pp0.jpeg";
	}
	two.onclick = function(){
		// two.index = 1;
		bg.setAttribute("src","./任务所需小图/img/pp1.jpeg");
		this.style.border = "1px solid #ff9003";
		one.style.border = "none";
		Bimg.src = "./任务所需小图/img/pp1.jpeg";
	}
	mo.onclick = function(){
		if(one.style.border == "none"){
			one.style.border = "1px solid #ff9003";
			bg.setAttribute("src","./任务所需小图/img/pp0.jpeg");
			two.style.border = "none";
			Bimg.src = "./任务所需小图/img/pp0.jpeg";
		}else if(two.style.border == "none"){
			two.style.border = "1px solid #ff9003";
			bg.setAttribute("src","./任务所需小图/img/pp1.jpeg");
			one.style.border = "none";
			Bimg.src = "./任务所需小图/img/pp1.jpeg";
		}else if(one.style.border == "none" && two.border == "none"){
			one.border = "1px solid #ff9003";
			bg.setAttribute("src","./任务所需小图/img/pp0.jpeg");
			Bimg.src = "./任务所需小图/img/pp0.jpeg";

		}
	}
	mf.onclick = function(){
		if(one.style.border == "none"){
			one.style.border = "1px solid #ff9003";
			bg.setAttribute("src","./任务所需小图/img/pp0.jpeg");
			two.style.border = "none";
			Bimg.src = "./任务所需小图/img/pp0.jpeg";

		}else if(two.style.border == "none"){
			two.style.border = "1px solid #ff9003";
			bg.setAttribute("src","./任务所需小图/img/pp1.jpeg");
			one.style.border = "none";
			Bimg.src = "./任务所需小图/img/pp1.jpeg";

		}else if(one.style.border == "none" && two.border == "none"){
			one.style.border = "1px solid #ff9003";
			bg.setAttribute("src","./任务所需小图/img/pp0.jpeg");
			Bimg.src = "./任务所需小图/img/pp0.jpeg";

		}
	}






		

		//2. 给左侧小图添加移入、移出和移动事件
		img1.onmouseover = function(){
			slider.style.display = "block";
			img2.style.display = "block";
		}

		img1.onmouseout = function(){
			slider.style.display = "none";
			img2.style.display = "none";
		}

		img1.onmousemove = function(ev){
			var ev = ev||window.event;
  			var offset = document.documentElement.scrollTop;
			var left = ev.clientX - box.offsetLeft - slider.offsetWidth/2;
			var top = ev.clientY - box.offsetTop - slider.offsetHeight/2 + offset;
			var maxLeft = img1.offsetWidth - slider.offsetWidth;
			var maxTop = img1.offsetHeight - slider.offsetHeight;
			left = left>maxLeft?maxLeft:left<0?0:left;
			top = top>maxTop?maxTop:top<0?0:top;

			slider.style.left = left + "px";
			slider.style.top = top + "px";


			var w = left/maxLeft;
			var h = top/maxTop;


			var BmaxLeft = img2.offsetWidth - Bimg.offsetWidth;
			var BmaxTop = img2.offsetHeight - Bimg.offsetHeight;

			Bimg.style.left = w*BmaxLeft + "px";
			Bimg.style.top = h*BmaxTop + "px";

  		}

}