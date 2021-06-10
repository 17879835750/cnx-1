var box=document.querySelector(".content"),box3=document.querySelector(".content2"),search1=location.search,dt,ar1,id;search1?(ar1=search1.split("="),"?id"==ar1[0]&&(id=ar1[1],async function(){dt=await promiseAjax({url:"../php/xiangqing.php",data:"id="+id}),dt=JSON.parse(dt),console.log(dt);var t=`    
            <div class="content clear-fix">
    <div class="content1">
        <img src="${dt.pic1}" class="img1">
        <div class="fdj1">
        </div>
       <div class="fdj2">
         <img src="${dt.pic1}">
       </div>  
    </div>
    <ul class="ul1 clear-fix">
    <li class="bg">
        <img src="${dt.pic1}">
    </li>
    <li>
        <img src="${dt.pic2}">
    </li>
    <li>
        <img src="${dt.pic3}">
    </li>
    <li>
        <img src="${dt.pic4}">
    </li>
    <li>
        <img src="${dt.pic5}">
    </li>
</ul>
 <div class="content2">
   <div class="box1 clear-fix">
    <p class="p1 fl">
        ${dt.name}
    </p>
    <span class="fr">
        ★ 收藏
    </span>
   </div>
  <div class="box2  clear-fix">
    <p class="p1 fl">
        商 城 价 ：<span class="span1">${dt.jg}</span> <span class="span2">元</span>
    </p>
    <p class="p2 fr">
        <img src="https://www.tcl.com/app/images/qrcode.png"> 手机购买
    </p>
  </div>
  <div class="box3 clear-fix">
      <div class="an1 fl">
        <div class="left1 fl">
            1
        </div>
        <div class="right1 fl">
            <div class="top1">
                ∧
            </div>
            <div class="button">
                ∨
            </div>
        </div>
      </div>
      <a href="#"><div class="an2 fl">立即购买</div></a>
      <a href="#"><div class="an3 fl">加入购物车</div></a>
      
  </div>
  <p class="p3">服务：全国联保 | 7天退换货 | 包邮(偏远地区除外)</p>
 </div>
 
</div>               
            `;box.innerHTML=t;var r=document.querySelector(".content1"),n=document.querySelector(".fdj2"),o=document.querySelector(".fdj1"),d=box.querySelectorAll("li");r.onmouseover=function(){n.style.display="block",o.style.display="block"},r.onmouseout=function(){n.style.display="none",o.style.display="none"},r.onmousemove=function(t){var e=(t=t||window.event).pageX-$(".content1").offset().left-$(".fdj1").width()/2,i=t.pageY-$(".content1").offset().top-$(".fdj1").height()/2,a=r.offsetWidth-o.offsetWidth,t=r.offsetHeight-o.offsetHeight,e=e<=0?(o.style.left="0px",0):a<=e?(o.style.left=a+"px",a):(o.style.left=e+"px",e),t=i<=0?(o.style.top="0px",0):t<=i?(o.style.top=t+"px",t):(o.style.top=i+"px",i),i=n.lastElementChild;i.style.left=-2*e+"px",i.style.top=-2*t+"px";for(var l=r.querySelector("img"),s=n.querySelector("img"),c=0;c<d.length;c++)d[c].onclick=function(){for(var t=0;t<d.length;t++)d[t].className="";this.className="bg";var e=this.lastElementChild.getAttribute("src");l.setAttribute("src",e),s.setAttribute("src",e)}}}())):(alert("非法进入，请选择商品"),location.href="./liebiao.html"),box.onclick=function(){var e=e||window.event,tar=e.target||e.srcElement,inp1,inp1,car4,car4,bool;"top1"==tar.className&&(inp1=tar.parentNode.previousElementSibling.innerHTML,inp1++,tar.parentNode.previousElementSibling.innerHTML=inp1),"button"==tar.className&&(inp1=tar.parentNode.previousElementSibling.innerHTML,inp1--,inp1<=1&&(inp1=1),tar.parentNode.previousElementSibling.innerHTML=inp1),"加入购物车"==tar.innerHTML&&(car4=localStorage.getItem("car4")||[],0<car4.length?(car4=eval("("+car4+")"),bool=!0,car4.forEach(t=>{dt.id==t.id&&(t.nbid++,localStorage.setItem("car4",JSON.stringify(car4)))}),bool?(dt.nbid=1,car4.push(dt),localStorage.setItem("car4",JSON.stringify(car4))):alert("请勿重复添加该商品")):(dt.nbid=1,car4.push(dt),localStorage.setItem("car4",JSON.stringify(car4)))),"立即购买"==tar.innerHTML&&(location.href="./cart.html")};