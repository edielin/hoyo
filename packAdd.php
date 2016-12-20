<?php 
require_once("connectToHoyo.php");
$packAdd=json_decode($_REQUEST["NC_no"]);
try {
	if($packAdd->Add_type==1){
		$sql="SELECT * from tc where MEM_no=:MEM_no and TR_no=:TR_no";  //確認該會員是否有收藏過該筆行程
		$addSql=$pdo->prepare($sql);
		$addSql->bindValue(":MEM_no",$packAdd->MEM_no);
		$addSql->bindValue(":TR_no",$packAdd->TR_no);
		$addSql->execute();
		
		if($addSql->rowCount()==0){  //沒有,執行收藏動作
			// echo("加入成功");
			$pdo->beginTransaction();
			$insertAdd="INSERT into tc VALUES(:MEM_no,:TR_no,NOW())";
			$insertAddItem=$pdo->prepare($insertAdd);
		 	$insertAddItem->bindValue(":MEM_no",$packAdd->MEM_no);
		 	$insertAddItem->bindValue(":TR_no",$packAdd->TR_no);
		 	$insertAddItem->execute();
		 	$pdo->commit();
		 	echo "加入成功";
		}else if($addSql->rowCount()!=0){  //有,取消收藏
			$pdo->beginTransaction();
			$deleteAdd="DELETE FROM tc where MEM_no=:MEM_no and TR_no=:TR_no";
			$deleteAddItem=$pdo->prepare($deleteAdd);
		 	$deleteAddItem->bindValue(":MEM_no",$packAdd->MEM_no);
		 	$deleteAddItem->bindValue(":TR_no",$packAdd->TR_no);
		 	$deleteAddItem->execute();
		 	$pdo->commit();
		 	echo "取消成功";
		 }
	}else if($packAdd->Add_type==2){
			$sql="SELECT * from tc where MEM_no=:MEM_no and TR_no=:TR_no";  //確認該會員是否有收藏過該筆行程
			$addSql=$pdo->prepare($sql);
			$addSql->bindValue(":MEM_no",$packAdd->MEM_no);
			$addSql->bindValue(":TR_no",$packAdd->TR_no);
			$addSql->execute();
			if($addSql->rowCount()!=0){
				echo "有";
			}else if($addSql->rowCount()==0){
				echo "無";
			}
	}
} catch (PDOException $ex) {
	$ex->getLine();
	$ex->getMessage();
}
?>