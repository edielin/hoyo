<?php
ob_start(); session_start();


// if(!isset($_SESSION["memNo"])){

// 	$_SESSION["where"] = $_SERVER["PHP_SELF"]; //設定來源檔案為此自身檔案
// 	echo "尚未登入, 請<a href='sessionLogin.html'>登入</a>";
// 	改成跳窗
// 	echo "<script>alert('尚未登入, 請登入');location.href='sessionLogin.html';</script>";

// }else{


//PHP

	try{
		require_once("connectToHoyo.php"); 

		$pdo->beginTransaction();

		if(isset($_REQUEST["NEWS_title"]) && ($_REQUEST["NEWS_title"]) != ""){
			$NEWS_title = $_REQUEST["NEWS_title"];			
		}
		if(isset($_REQUEST["NEWS_time"]) && ($_REQUEST["NEWS_time"]) != ""){
			$NEWS_time = $_REQUEST["NEWS_time"];			
		}
		if(isset($_REQUEST["NEWS_content"]) && ($_REQUEST["NEWS_content"]) != ""){
			$NEWS_content = $_REQUEST["NEWS_content"];			
		}
		// if(isset($_FILES["NEWS_img"]["name"])){
		// 	$imgName = $_FILES["NEWS_img"]["name"];
		// 	$imgFrom = $_FILES["NEWS_img"]["tmp_name"];
		// 	move_uploaded_file($imgFrom, 'images/news/'.$imgName);
		// 	$NEWS_img = "images/news/".$imgName;
		// }

		 switch($_FILES["NEWS_img"]["error"]){
			case 0:
				$NEWS_img = "images/news/".$_FILES["NEWS_img"]["name"];
				$from = $_FILES["NEWS_img"]["tmp_name"];
				$to = "images/news/".mb_convert_encoding($_FILES["NEWS_img"]["name"],"big5","utf8");
				copy($from , $to);
				
			break;
			case 1:
					echo "<script>window.alert('檔案不能超過2M');
						window.location='backendNews.php';</script>";
			break;
			break;     
			case 3:
					echo "<script>window.alert('上傳過程發生錯誤');
						window.location='backendNews.php';</script>";
			break;
		 }

		$sql = "INSERT into news (LM_no,NEWS_title,NEWS_time,NEWS_content,NEWS_type,NEWS_img) values (null,:NEWS_title,:NEWS_time, :NEWS_content,'news',:NEWS_img)";
		$statment = $pdo->prepare($sql);
		$statment->bindValue(":NEWS_title", $NEWS_title);
		$statment->bindValue(":NEWS_time", $NEWS_time);		
		$statment->bindValue(":NEWS_content",$NEWS_content);
		$statment->bindValue(":NEWS_img",$NEWS_img);

		$statment->execute();

		$pdo->commit();


		echo "<script>window.alert('輸入成功');
			window.location='backendNews.php';</script>";

		// header("Location:backendNews.php");


	}catch(PDOException $ex){


		$pdo->rollBack();

		echo "連線失敗,原因:" , $ex->getMessage() ,"<br>";
		echo "行號 : " , $ex->getLine() ,"<br>";
	}

	//$.post

	// try{
	// 	require_once("connectToHoyo.php"); 
	// 	//啟用交易管理
	// 	$pdo->beginTransaction();

	// 	$sql = "INSERT into news (LM_no,NEWS_title,NEWS_time,NEWS_content,NEWS_type,NEWS_img) values (null,:NEWS_title,:NEWS_time, :NEWS_content,'news',:NEWS_img)";

	// 	$statment = $pdo->prepare($sql);
	// 	$statment->bindValue(":NEWS_title",  $_REQUEST['NEWS_title']);
	// 	$statment->bindValue(":NEWS_time",  $_REQUEST['NEWS_time']);		
	// 	$statment->bindValue(":NEWS_content",  $_REQUEST['NEWS_content']);
	// 	$statment->bindValue(":NEWS_img",  $_REQUEST['NEWS_img']);
		
	// 	$statment->execute();

	// 	//確認交易
	// 	$pdo->commit();
	// 	echo "成功";

	// }catch(PDOException $ex){

	// 	//放棄交易
	// 	$pdo->rollBack();

	// 	echo "連線失敗,原因:" , $ex->getMessage() ,"<br>";
	// 	echo "行號 : " , $ex->getLine() ,"<br>";
	// }


// } //end of if/else

?>