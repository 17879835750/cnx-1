var con=document.querySelector(".content"),pagination=document.querySelector(".pagination");!async function(){var e=await promiseAjax({url:"../php/liebiao.php"}),e=JSON.parse(e);console.log(e);var a={pageInfo:{pagenum:1,pagesize:12,totalsize:e.length,totalpage:Math.ceil(e.length/12)},textInfo:{first:"首页",prev:"上一页",next:"下一页",last:"尾页"}};new Pagination(pagination,a,a=>{var a=e.slice(12*(a-1),12*a),n="";a.forEach(a=>{n+=`
            <div class="box1 fl">
            <a href="./xiangqing.html?id=${a.id}"><img src=${a.pic1}></a>
            <p class="p1">${a.name}</p>
            <p class="p2">${a.jg}</p>
            <a href="./xiangqing.html?id=${a.id}"><p class="p3">立即购买</p></a>
        </div>
            
            `}),con.innerHTML=n})}();