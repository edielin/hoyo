<?php
error_reporting(0);
ini_set('display_errors', 0);
try{
	require_once("connectToHoyo.php"); 

	$pdo->beginTransaction();

	$NEWS_no=$_REQUEST["NEWS_no"];
	$NEWS_title=$_REQUEST["NEWS_title"];
	$NEWS_time=$_REQUEST["NEWS_time"];
	$NEWS_content=$_REQUEST["NEWS_content"];


	// if($_FILES["NEWS_img"]["error"]==4){
	// 	$NEWS_img = $_REQUEST["NEWS_img_old"];
	// }
	// else{
		// $imgName = $_FILES["NEWS_img"]["name"];
		// $imgFrom = $_FILES["NEWS_img"]["tmp_name"];
	 //    move_uploaded_file($imgFrom, 'images/news/'.$imgName);
	 //    $NEWS_img = "images/news/".$imgName;
	
		 switch($_FILES["NEWS_img"]["error"]){
			case 0:
				$NEWS_img = "images/news/".$_FILES["NEWS_img"]["name"];
				$from = $_FILES["NEWS_img"]["tmp_name"];
				$to = "images/news/".mb_convert_encoding($_FILES["NEWS_img"]["name"],"big5","utf8");
				copy($from , $to);
				
			break;
			case 1:
					$NEWS_img = $_REQUEST["NEWS_img_old"];
					echo "<script>window.alert('檔案不能超過2M');
						window.location='backendNews.php';</script>";
			break;
			break;     
			case 3:
					$NEWS_img = $_REQUEST["NEWS_img_old"];
					echo "<script>window.alert('上傳過程發生錯誤');
						window.location='backendNews.php';</script>";
			break;
			case 4;
				$NEWS_img = $_REQUEST["NEWS_img_old"];
				$from = $_FILES["NEWS_img"]["tmp_name"];
				$to = "images/news/".mb_convert_encoding($_FILES["NEWS_img"]["name"],"big5","utf8");
				copy($from , $to);
			break;
		 }
	// }

	$sql="UPDATE news SET NEWS_title='{$NEWS_title}',NEWS_time='{$NEWS_time}',NEWS_content='{$NEWS_content}',NEWS_img='{$NEWS_img}' WHERE NEWS_no='{$NEWS_no}'";

	$pdo->exec($sql);
	

	$pdo->commit();


	echo "<script>window.alert('修改成功');
		window.location='backendNews.php';</script>";




}catch(PDOException $ex){


	$pdo->rollBack();

	echo "連線失敗,原因:" , $ex->getMessage() ,"<br>";
	echo "行號 : " , $ex->getLine() ,"<br>";
}

?>