<?php
ob_start(); session_start();

// if(!isset($_SESSION["memNo"])){

	// $_SESSION["where"] = $_SERVER["PHP_SELF"]; //設定來源檔案為此自身檔案
	// echo "尚未登入, 請<a href='sessionLogin.html'>登入</a>";
	//改成跳窗
	// echo "<script>alert('尚未登入, 請登入');location.href='sessionLogin.html';</script>";

// }else{

	try{
		require_once("connectToHoyo.php"); 
		//啟用交易管理
		$pdo->beginTransaction();

		// (TR_no, MEM_no, NOTE_no, TR_name, TR_subtitle, TR_description, TR_createDate, TR_modifyDate, TR_startDate, TR_startTag, TR_endTag, TR_adultNumber, TR_childNumber, TR_otherMoney, TR_close)
		$sql_tr = "insert into tr value(null, :MEM_no, 1, :TR_name, :TR_subtitle, :TR_description, Now(), Now(), :TR_startDate, :TR_startTag, :TR_endTag, :TR_adultNumber, :TR_childNumber, :TR_otherMoney, 0)";
		$statment = $pdo->prepare($sql_tr);
		$statment->bindValue(":MEM_no", $_REQUEST['MEM_no']);
		$statment->bindValue(":TR_name", $_REQUEST['tr_name']);
		$statment->bindValue(":TR_subtitle", $_REQUEST['tr_subtitle']);
		$statment->bindValue(":TR_description", $_REQUEST['tr_description']);
		$statment->bindValue(":TR_startDate", $_REQUEST['tr_startDate']);
		$statment->bindValue(":TR_startTag", $_REQUEST['startpoint']);
		$statment->bindValue(":TR_endTag", $_REQUEST['endpoint']);
		$statment->bindValue(":TR_adultNumber", $_REQUEST['adult']);
		$statment->bindValue(":TR_childNumber", $_REQUEST['child']);
		$statment->bindValue(":TR_otherMoney", $_REQUEST['other_money']);
		$statment->execute();


		$items = $_REQUEST['items'];
		// (LMTR_no, LM_no, TR_no, LMTR_day, LMTR_order, LMTR_tagName)
		$TRno = $pdo->lastInsertId();
		$sql_lmtr = "insert into lmtr value(null, :LM_no, $TRno, :LMTR_day, :LMTR_order, :LMTR_tagName)";
		$statment = $pdo->prepare($sql_lmtr);

		foreach ( $items as $i => $item) {
			$statment->bindValue(":LMTR_day", $i+1);
			foreach ( $item as $j => $lmcard) {
				$statment->bindValue(":LM_no", $lmcard['LM_no']);
				$statment->bindValue(":LMTR_order", $j+1);

				// tag = {"name":this.newtag, "type":"f_tag"}
				if($lmcard['type']=="f_tag"){
					$statment->bindValue(":LMTR_tagName", $lmcard['name']);
				}else{
					$statment->bindValue(":LMTR_tagName", NULL);
				}
				
				$statment->execute();
			}
		}

		//確認交易
		$pdo->commit();
		echo '{"TR_no": '.$TRno.', "TR_name": "'.$_REQUEST['tr_name'].'"}';

	}catch(PDOException $ex){

		//放棄交易
		$pdo->rollBack();

		echo "連線失敗,原因:" , $ex->getMessage() ,"<br>";
		echo "行號 : " , $ex->getLine() ,"<br>";
	}

// } //end of if/else

?>