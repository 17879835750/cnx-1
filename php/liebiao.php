<?php
include "./datas.php";
//编写sql语句
$sql="select * from tcl2";
//执行sql语句
$result=mysqli_query($link,$sql);
$arr=[];
//遍历结果集每条数据
while($row=mysqli_fetch_assoc($result)){
    //吧遍历的数据添加到数组中
    array_push($arr,$row);
}
//把数组转为字符串
echo json_encode($arr);
//关闭数据库
mysqli_close($link)
?>