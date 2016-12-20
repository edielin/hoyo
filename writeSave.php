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



		// (NOTE_no, MEM_no, NOTE_title, NOTE_description, NOTE_createDate, NOTE_modifyDate, NOTE_mainimg, NOTE_reportedTimes, NOTE_close)
		$sql_note = "insert into note value(null, :MEM_no, :NOTE_title, :NOTE_description, Now(), Now(), :NOTE_mainimg, 0, 0)";
		$statment = $pdo->prepare($sql_note);
		$newMemImg = mb_convert_encoding($_FILES['NOTE_mainimg']['name'],'utf8','auto');
		$statment->bindValue(":MEM_no", $_REQUEST['MEM_no']);
		$statment->bindValue(":NOTE_title", $_REQUEST['NOTE_title']);
		$statment->bindValue(":NOTE_description", $_REQUEST['NOTE_description']);
		$statment->bindValue(":NOTE_mainimg", $newMemImg);
		$statment->execute();


		$NOTEno = $pdo->lastInsertId();

		// 因為 $NOTEno 必須在上一段程式執行完才會產生, 所以趕緊更新圖片檔名
		$newMemImg = mb_convert_encoding($_FILES['NOTE_mainimg']['name'],'utf8','auto');
		$tr_update = "update note set NOTE_mainimg= :note_mainimg where NOTE_no= $NOTEno";
		$statment = $pdo->prepare($tr_update);
		$statment->bindValue(":note_mainimg", $NOTEno.'__hoyo__'.$newMemImg);
		$statment->execute();		


		$day = $_REQUEST['notec_day'];
		// (NOTEC_no, NOTE_no, NOTEC_day, NOTEC_title, NOTEC_content, NOTEC_img01, NOTEC_img02, NOTEC_img03, NOTEC_img04)

		$sql_notec = "insert into notec value(null, :NOTE_no, :NOTEC_day, '', :NOTEC_content, :NOTEC_img01, :NOTEC_img02, :NOTEC_img03, :NOTEC_img04)";
		$statment = $pdo->prepare($sql_notec);

		for ($i = 0; $i < $day; $i++) {
			$statment->bindValue(":NOTE_no", $NOTEno);
			$statment->bindValue(":NOTEC_day", $i+1);
			$statment->bindValue(":NOTEC_content", $_REQUEST['NOTEC_content0'.($i+1)]);

			$newMemImg = mb_convert_encoding($_FILES['NOTEC_img0'.($i*4+1)]['name'],'utf8','auto');
			$statment->bindValue(":NOTEC_img01", $NOTEno.'_'.($i+1).'_1__hoyo__'.$newMemImg);

			$newMemImg = mb_convert_encoding($_FILES['NOTEC_img0'.($i*4+2)]['name'],'utf8','auto');
			$statment->bindValue(":NOTEC_img02", $NOTEno.'_'.($i+1).'_2__hoyo__'.$newMemImg);

			$newMemImg = mb_convert_encoding($_FILES['NOTEC_img0'.($i*4+3)]['name'],'utf8','auto');
			$statment->bindValue(":NOTEC_img03", $NOTEno.'_'.($i+1).'_3__hoyo__'.$newMemImg);

			$newMemImg = mb_convert_encoding($_FILES['NOTEC_img0'.($i*4+4)]['name'],'utf8','auto');
			$statment->bindValue(":NOTEC_img04", $NOTEno.'_'.($i+1).'_4__hoyo__'.$newMemImg);
			$statment->execute();		    
		} 

		// 修改 tr 資料表, 原本tr綁定遊記1號, 現在要綁定成新增的遊記編號
		$tr_update = "update tr set NOTE_no= :note_no where TR_no= :tr_no";
		$statment = $pdo->prepare($tr_update);
		$statment->bindValue(":note_no", $NOTEno);
		$statment->bindValue(":tr_no", $_REQUEST['TR_no']);
		$statment->execute();		


		if(file_exists('images')===false){	// 不管有沒有傳圖片都先確認有無圖片資料夾
			mkdir('images');
		}

		if(file_exists('images/notewrite')===false){	// 不管有沒有傳圖片都先確認有無圖片資料夾
			mkdir('images/notewrite');
		}

		switch($_FILES['NOTE_mainimg']['error']){
			case 0: 	//圖片上傳成功
				$newMemImg = mb_convert_encoding($_FILES['NOTE_mainimg']['name'],'big5','utf8');
				$from = $_FILES['NOTE_mainimg']['tmp_name'];
				$to = 'images/notewrite/'.$NOTEno.'__hoyo__'.$newMemImg;
				$newMemImgName =  mb_convert_encoding($_FILES['NOTE_mainimg']['name'],'utf8','auto');
				copy($from,$to);
				break;
			case 4:		//沒有上傳圖片 
				break;
			default:
				echo "<script>alert('圖片上傳發生錯誤\n請重新上傳');history.go(-1);</script>";
		}

		$day =  $_REQUEST['notec_day'];

		for ($i = 0; $i < $day; $i++) {
			for ($j = 1; $j <= 4; $j++) {
				switch($_FILES['NOTEC_img0'.($i*4+$j)]['error']){
					case 0: 	//圖片上傳成功
						$newMemImg = mb_convert_encoding($_FILES['NOTEC_img0'.($i*4+$j)]['name'],'big5','utf8');
						$from = $_FILES['NOTEC_img0'.($i*4+$j)]['tmp_name'];
						$to = 'images/notewrite/'.$NOTEno.'_'.($i+1).'_'.$j.'__hoyo__'.$newMemImg;
						$newMemImgName =  mb_convert_encoding($_FILES['NOTEC_img0'.($i*4+$j)]['name'],'utf8','auto');
						copy($from,$to);
						break;
					case 4:		//沒有上傳圖片 
						break;
					default:
						echo "<script>alert('圖片上傳發生錯誤\n請重新上傳');history.go(-1);</script>";
				}
			}    
		}	


	  	//清空購物車
		// unset($_SESSION["myarr"]);
		//確認交易
		$pdo->commit();
		echo "成功";

		header("Location:memberWd_3.php");


	}catch(PDOException $ex){

		//放棄交易
		$pdo->rollBack();

		echo "連線失敗,原因:" , $ex->getMessage() ,"<br>";
		echo "行號 : " , $ex->getLine() ,"<br>";
	}

// } //end of if/else

?>