<?php
include "./datas.php";
//获取传入的参数
$id=$_GET["id"];
//设置sql语句
$sql="select * from tcl2 where id=$id";
//执行sql语句
$result=mysqli_query($link,$sql);
//获取结果集中的数据
$row=mysqli_fetch_assoc($result);
//把数组转为字符串
echo json_encode($row);
//关闭数据库
mysqli_close($link)

?>