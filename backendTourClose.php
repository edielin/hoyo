<?php 
$TR_Obj=json_decode($_REQUEST["TR_no"]);
require_once("connectToHoyo.php");
try {
	if($TR_Obj->data_Type==1){
		if($TR_Obj->value=="封存"){
			$sql="select * from tr where TR_no=:TR_no and TR_close=1";  //找到該NOTE_no且確認是否已經封存
			$TRRow=$pdo->prepare($sql);
			$TRRow->bindValue(":TR_no",$TR_Obj->TR_no);  //拿物件中的參數當參考
			$TRRow->execute();
			if($TRRow->rowCount()==0){  //如果沒有符合表示沒有被封存
				$pdo->beginTransaction(); //開啟交易管理
				$updata="update tr set TR_close=1 where TR_no=:TR_no";  //更新的SQL語法
				$updataRow=$pdo->prepare($updata); 
				$updataRow->bindValue(":TR_no",$TR_Obj->TR_no);  //拿物件中的參數當參考
				$updataRow->execute();
				echo "更新完成";   //回傳結果字串
				$pdo->commit();
			}else if($TRRow->rowCount()>0){
				echo "1";   //如果有則回傳1
			}
		}else if($TR_Obj->value=="解封"){
			$nosql="select * from tr where TR_no=:TR_no and TR_close=0";
			$changeTrRow=$pdo->prepare($nosql);
			$changeTrRow->bindValue(":TR_no",$TR_Obj->TR_no);
			$changeTrRow->execute();
			if($changeTrRow->rowCount()==0){
				$pdo->beginTransaction();
				$updata="update tr set TR_close=0 where TR_no=:TR_no";
				$updataTrRow=$pdo->prepare($updata);
				$updataTrRow->bindValue(":TR_no",$TR_Obj->TR_no);
				$updataTrRow->execute();
				echo "更新完成";
				$pdo->commit();
			}else if($changeTrRow->rowCount()!=0){
				echo "0";
			}
		}
	}
} catch (PDOException $ex) {
	$ex->getLine();
	$ex->getMessage();
}
?>