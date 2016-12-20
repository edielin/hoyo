<?php
ob_start(); session_start();

	try{
		require_once("connectToHoyo.php"); 
		//啟用交易管理
		$pdo->beginTransaction();


		// 先刪除 lmtr 中, 所有該行程編號的紀錄
		$sql_tr = "DELETE FROM lmtr WHERE TR_no=:TR_no";
		$statment = $pdo->prepare($sql_tr);
		$statment->bindValue(":TR_no", $_REQUEST['TR_no']);
		$statment->execute();



		// 更新 tr
		// (TR_no, MEM_no, NOTE_no, TR_name, TR_subtitle, TR_description, TR_createDate, TR_modifyDate, TR_startDate, TR_startTag, TR_endTag, TR_adultNumber, TR_childNumber, TR_otherMoney, TR_close)
		$sql_tr = "UPDATE tr SET TR_name=:TR_name, TR_subtitle=:TR_subtitle, TR_description=:TR_description, TR_modifyDate=Now(), TR_startDate=:TR_startDate, TR_startTag=:TR_startTag, TR_endTag=:TR_endTag, TR_adultNumber=:TR_adultNumber, TR_childNumber=:TR_childNumber, TR_otherMoney=:TR_otherMoney WHERE TR_no=:TR_no";
		$statment = $pdo->prepare($sql_tr);
		$statment->bindValue(":TR_no", $_REQUEST['TR_no']);
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
		$TRno = $_REQUEST['TR_no'];
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


?>