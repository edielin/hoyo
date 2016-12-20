<?php 
ob_start();
session_start();
error_reporting(E_ALL || E_NOTICE);
$_SESSION["MEM_no"]=json_decode($_REQUEST["MEM_no"]);
try{
	require_once('connectToHoyo.php');
	if($_SESSION["MEM_no"]->check=="正常"){
		$sql="select * from mem where MEM_no=:MEM_no and MEM_close=1";
		$check=$pdo->prepare($sql);
		$MEM_no=$_SESSION["MEM_no"];
		$check->bindValue(":MEM_no",$MEM_no->MEM_no);
		$check->execute();
		if($check->rowCount()==0){  //表示目前該筆沒有被停權
		$pdo->beginTransaction();  //開啟交易管理
		$sql="update mem set MEM_close=1 where MEM_no=:cc";
		$close=$pdo->prepare($sql);
		$close->bindValue(":cc",$MEM_no->MEM_no);
		$close->execute();
		echo "更新成功";  //完成時回傳
		$pdo->commit();   //當整個程式執行沒問題才會真正寫入資料庫
		unset($_SESSION["MEM_no"]);  //不使用session_destroy()的原因是因為他會把整個session砍掉造成會員登入的狀態也被砍掉
		// header('location:backendMem.php');
		}else if($check->rowCount()>0){
			echo "1";
		}
	}else if($_SESSION["MEM_no"]->check=="停權中"){
		$sql="select * from mem where MEM_no=:MEM_no and MEM_close=0";
		$check=$pdo->prepare($sql);
		$MEM_no=$_SESSION["MEM_no"];
		$check->bindValue(":MEM_no",$MEM_no->MEM_no);
		$check->execute();
		if($check->rowCount()==0){  //表示目前該筆沒有被停權
		$pdo->beginTransaction();  //開啟交易管理
		$sql="update mem set MEM_close=0 where MEM_no=:cc";
		$close=$pdo->prepare($sql);
		$close->bindValue(":cc",$MEM_no->MEM_no);
		$close->execute();
		echo "更新成功";  //完成時回傳
		$pdo->commit();   //當整個程式執行沒問題才會真正寫入資料庫
		unset($_SESSION["MEM_no"]);  //不使用session_destroy()的原因是因為他會把整個session砍掉造成會員登入的狀態也被砍掉
		// header('location:backendMem.php');
		}else if($check->rowCount()>0){
			echo "0";
		}
	}
}catch(PDOException $ex){
	$ex->getLine();
	$ex->getMessage();
}
?>