<?php
ob_start(); session_start();

	try{
		require_once("connectToHoyo.php"); 
		//啟用交易管理
		$pdo->beginTransaction();

		// (RE_no, NOTE_no, MEM_no, RE_time, RE_content, RE_reportedTimes)
		$sql_tr = "insert into re value(null, :NOTE_no, :MEM_no, now(), :RE_content, 0)";
		$statment = $pdo->prepare($sql_tr);
		$statment->bindValue(":NOTE_no", $_REQUEST['NOTE_no']);
		$statment->bindValue(":MEM_no", $_REQUEST['MEM_no']);
		$statment->bindValue(":RE_content", $_REQUEST['RE_content']);
		$statment->execute();

		$pdo->commit();
		// echo "成功";


		// 重新抓取 re 的資料
		$sql = "select * from re";
		$re = $pdo->query($sql);

		$data = '[';

		while($reRow = $re->fetch( PDO::FETCH_ASSOC) ){
		$data.= '{';
		$data.= '"RE_no":'.$reRow['RE_no'].', ';
		$data.= '"MEM_no":'.$reRow['MEM_no'].', ';
		$data.= '"NOTE_no":'.$reRow['NOTE_no'].', ';
		$data.= '"RE_time":"'.$reRow['RE_time'].'", ';
		$data.= '"RE_content":"'.$reRow['RE_content'].'", ';
		$data.= '"RE_reportedTimes":'.$reRow['RE_reportedTimes'].' ';

		$data.= '},';
		}
		$data = substr($data, 0, -1);
		$data.= ']';

		echo $data;

	}catch(PDOException $ex){

		//放棄交易
		$pdo->rollBack();

		echo "連線失敗,原因:" , $ex->getMessage() ,"<br>";
		echo "行號 : " , $ex->getLine() ,"<br>";
	}


?>
