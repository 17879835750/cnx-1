<?php
include "./datas.php";
//获取传入的数据
$u=$_GET["username"];
$p=$_GET["password"];
//编写sql语句
$sql="select *from tcl1 where name='$u' and pass='$p'";
//执行sql语句
$result=mysqli_query($link,$sql);
//判断当前结果集是否有满足条件的数据
if($row=mysqli_fetch_row($result)){
    echo "1";
}else{
    echo "0";
}
//关闭数据库连接
mysqli_close($link);
?>