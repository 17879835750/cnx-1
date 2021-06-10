<?php
include "./datas.php";
//获取传入的参数
$n=$_GET["username1"];
$p=$_GET["pass1"];
//编写sql语句
$sql="insert into tcl1(name,pass)values('$n',$p)";
$result=mysqli_query($link,$sql);
if($result){
 echo "1";
    
}else{
   echo "0";
}
//关闭数据库
mysqli_close($link);
?>