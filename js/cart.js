var url,box=document.querySelector(".container"),car4=localStorage.getItem("car4"),name1=getCookie("name1");function show1(){var s;0<car4.length?(s=`
    <div class="container clear-fix">
    <div class="toubu1">
        <ul class="ul1">
            <li><input type="checkbox" name="quan" ${car4.every(n=>1==n.if)?"checked":""}> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;全选&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;商品信息 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </li>
            <li>单价</li>
            <li>数量</li>
            <li>小计</li>
            <li>操作</li>
        </ul>
        
    </div> 
    
    `,car4.forEach(n=>{s+=`
    <div class="content">
       <ul class="ul1">
           <li><input type="checkbox" name="xuan" ${1==n.if?"checked":""} data-id=${n.id}></li>
           <li><img src="${n.pic1}" style="width: 100px; height: 100px;margin-right: 20px;margin-top: 50px;" class="fl">
          <p class="fl title">${n.name}</p> </li>
           <li>${n.jg}</li>
           <li>
               <button ${n.nbid<=1?"disabled":""} data-id=${n.id} >-</button>
               <button>${n.nbid}</button>
               <button data-id=${n.id}>+</button>
           </li>
           <li>小计</li>
           <li data-id=${n.id}>删除</li>
       </ul>
       </div>
    `}),s+=`
   <div class="weibu ">
   <a href="./liebiao.html"><p class="fl p2">继续购物 >></p></a>
   <div class="jiesuan fr">
   <p class="p3 fl">共${car4.length}件商品 已选择${total()[0]}件</p>
   <p class="p4 fl"> 合计（不含运费）： <span>${total()[1]}</span>元</p>
   <p class="p5 fl">去结算</p>
   </div>
   </div>
   </div>   
   `,box.innerHTML=s):box.innerHTML=`
    <div class="con1 fl">
    <img src="https://www.tcl.com/app/images/cart_01.jpg">
    </div>
    <div class="con2 fl">
        <p class="p1">购物车空空的哦~去看看心仪的商品吧~</p>
        <a href="./liebiao.html"><p class="p2">选购商品</p></a>
    </div>   
    `}function total(){var s=0,a=0;return car4.forEach(n=>{1==n.if&&(s+=n.nbid,a+=parseFloat(n.jg)*parseInt(n.nbid))}),[s,a]}name1?(car4=JSON.parse(car4),show1()):(alert("尚未登录，请登录"),url=location.href,location.href="./denglu.html?newURL="+url),box.onclick=function(n){var s,a=(n=n||window.event).target||n.srcElement;console.log(a.innerHTML),"+"==a.innerHTML&&(s=a.getAttribute("data-id"),car4.forEach(n=>{n.id==s&&n.nbid++}),localStorage.setItem("car4",JSON.stringify(car4)),show1()),"-"==a.innerHTML&&(s=a.getAttribute("data-id"),car4.forEach(n=>{n.id==s&&n.nbid--}),localStorage.setItem("car4",JSON.stringify(car4)),show1()),"删除"==a.innerHTML&&(s=a.getAttribute("data-id"),car4=car4.filter(n=>n.id!=s),localStorage.setItem("car4",JSON.stringify(car4)),show1()),"quan"==a.name&&(car4.forEach(n=>{a.checked?n.if=1:n.if=0}),localStorage.setItem("car4",JSON.stringify(car4)),show1()),"xuan"==a.name&&(s=a.getAttribute("data-id"),car4.forEach(n=>{n.id==s&&(1==n.if?n.if=0:n.if=1)}),localStorage.setItem("car4",JSON.stringify(car4)),show1()),"去结算"==a.innerHTML&&(alert("你已支付："+total()[1]),car4=car4.filter(n=>1!=n.if),localStorage.setItem("car4",JSON.stringify(car4)),show1())};