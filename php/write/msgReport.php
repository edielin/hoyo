<?php
ob_start(); session_start();

	try{
		require_once("connectToHoyo.php"); 
		//啟用交易管理
		$pdo->beginTransaction();

		$find_reportedTimes="select RE_reportedTimes from re where RE_no=:RE_no ";
		$statment = $pdo->prepare($find_reportedTimes);
		$statment->bindValue(":RE_no", $_REQUEST['RE_no']);
		$statment->execute();

		$reportRow = $statment->fetch( PDO::FETCH_ASSOC);
		$reportedTimes= $reportRow['RE_reportedTimes'];
	

		$note_report = "update re set RE_reportedTimes=:RE_reportedTimes where RE_no=:RE_no";
		$statment = $pdo->prepare($note_report);
		$statment->bindValue(":RE_no", $_REQUEST['RE_no']);
		$statment->bindValue(":RE_reportedTimes", $reportedTimes+1);
		$statment->execute();

	
		//確認交易
		$pdo->commit();
		echo "成功";


	}catch(PDOException $ex){

		//放棄交易
		$pdo->rollBack();

		echo "連線失敗,原因:" , $ex->getMessage() ,"<br>";
		echo "行號 : " , $ex->getLine() ,"<br>";
	}

?>