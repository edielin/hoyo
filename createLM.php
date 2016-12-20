<?php
ob_start(); session_start();
error_reporting(0);
ini_set('display_errors', 0);
// if(!isset($_SESSION["memNo"])){

	// $_SESSION["where"] = $_SERVER["PHP_SELF"]; //設定來源檔案為此自身檔案
	// echo "尚未登入, 請<a href='sessionLogin.html'>登入</a>";
	//改成跳窗
	// echo "<script>alert('尚未登入, 請登入');location.href='sessionLogin.html';</script>";

// }else{

	// try{
	// 	require_once("connectToHoyo.php"); 
	// 	//啟用交易管理
	// 	$pdo->beginTransaction();

	// 	$sql_tr = "insert into lm value(null, 1, 0, :LM_branch, :LM_station, :LM_name, :LM_type, 0, :LM_description, :LM_phone, :LM_cellphone, :LM_address, :LM_longitude, :LM_latitude, :LM_opentime, :LM_avgcost, :LM_staycost1, :LM_staycost2, :LM_staycost4, :LM_staycostadd1, :LM_adultcost, :LM_childcost, :LM_img01, :LM_img02, :LM_img03, :LM_img04, '', '')";
	// 	$statment = $pdo->prepare($sql_tr);
	// 	$statment->bindValue(":LM_branch", $_REQUEST['branch']);
	// 	$statment->bindValue(":LM_station", $_REQUEST['station']);
	// 	$statment->bindValue(":LM_name", $_REQUEST['name']);
	// 	$statment->bindValue(":LM_type", $_REQUEST['type']);

	// 	$statment->bindValue(":LM_description", $_REQUEST['subtitle']);
	// 	$statment->bindValue(":LM_phone", $_REQUEST['phone']);
	// 	$statment->bindValue(":LM_cellphone", $_REQUEST['cellphone']);
	// 	$statment->bindValue(":LM_address", $_REQUEST['address']);
	// 	$statment->bindValue(":LM_longitude", $_REQUEST['longitude']);

	// 	$statment->bindValue("LM_latitude", $_REQUEST['latitude']);
	// 	$statment->bindValue("LM_opentime", $_REQUEST['opentime']);
	// 	$statment->bindValue("LM_avgcost", $_REQUEST['avgcost']);
	// 	$statment->bindValue("LM_staycost1", $_REQUEST['staycost1']);
	// 	$statment->bindValue("LM_staycost2", $_REQUEST['staycost2']);

	// 	$statment->bindValue("LM_staycost4", $_REQUEST['staycost4']);
	// 	$statment->bindValue("LM_staycostadd1", $_REQUEST['staycostadd1']);
	// 	$statment->bindValue("LM_adultcost", $_REQUEST['adultcost']);
	// 	$statment->bindValue("LM_childcost", $_REQUEST['childcost']);
	// 	$statment->bindValue("LM_img01", $_REQUEST['url01']);

	// 	$statment->bindValue("LM_img02", $_REQUEST['url02']);
	// 	$statment->bindValue("LM_img03", $_REQUEST['url03']);
	// 	$statment->bindValue("LM_img04", $_REQUEST['url04']);
	// 	$statment->execute();


	// 	$pdo->commit();
	// 	echo "成功";

	// }catch(PDOException $ex){


	// 	$pdo->rollBack();

	// 	echo "連線失敗,原因:" , $ex->getMessage() ,"<br>";
	// 	echo "行號 : " , $ex->getLine() ,"<br>";
	// }
	
	

	try{
		require_once("connectToHoyo.php"); 

		$pdo->beginTransaction();


		$sql = "SELECT * FROM lm WHERE LM_name=:LM_name";
		$name_check = $pdo->prepare($sql);
		$name_check->bindValue(":LM_name", $_REQUEST['LM_name']);
		$name_check->execute();


		if($name_check->rowCount()!=0){ //地標名稱重複

			$pdo->rollBack();
			echo "<script>window.alert('地標名稱重複'); window.location='memberLM.php';</script>";

		}else{

			$sql_tr = "insert into lm value(null, 1, 0, :LM_branch, :LM_station, :LM_name, :LM_type, 0, :LM_description, :LM_phone, :LM_cellphone, :LM_address, :LM_longitude, :LM_latitude, :LM_opentime, :LM_avgcost, :LM_staycost1, :LM_staycost2, :LM_staycost4, :LM_staycostadd1, :LM_adultcost, :LM_childcost, '', '', '', '', '', '')";
			$statment = $pdo->prepare($sql_tr);

			$statment->bindValue(":LM_branch", $_REQUEST['pexDro']);
			$statment->bindValue(":LM_station", $_REQUEST['pdaysDro']);
			$statment->bindValue(":LM_name", $_REQUEST['LM_name']);
			$statment->bindValue(":LM_type", $_REQUEST['LM_type']);
			$statment->bindValue(":LM_description", $_REQUEST['LM_description'] ?: "");
			$statment->bindValue(":LM_phone", $_REQUEST['LM_phone'] ?: "");
			$statment->bindValue(":LM_cellphone", $_REQUEST['LM_cellphone'] ?: "");
			$statment->bindValue(":LM_address", $_REQUEST['LM_address'] ?: "");
			$statment->bindValue(":LM_longitude", $_REQUEST['LM_longitude'] ?: 0);
			$statment->bindValue(":LM_latitude", $_REQUEST['LM_latitude'] ?: 0);

			$statment->bindValue(":LM_opentime", $_REQUEST['LM_opentime'] ?: "");
			$statment->bindValue(":LM_avgcost", $_REQUEST['LM_avgcost'] ?: 0);
			$statment->bindValue(":LM_staycost1", $_REQUEST['LM_staycost1'] ?: 0);
			$statment->bindValue(":LM_staycost2", $_REQUEST['LM_staycost2'] ?: 0);

			$statment->bindValue(":LM_staycost4", $_REQUEST['LM_staycost4'] ?: 0);
			$statment->bindValue(":LM_staycostadd1", $_REQUEST['LM_staycostadd1'] ?: 0);
			$statment->bindValue(":LM_adultcost", $_REQUEST['LM_adultcost'] ?: 0);
			$statment->bindValue(":LM_childcost", $_REQUEST['LM_childcost'] ?: 0);
			$statment->execute();  

			$lmno = $pdo->lastInsertId();

			if(file_exists('images')===false){	// 不管有沒有傳圖片都先確認有無圖片資料夾
				mkdir('images');
			}

			if(file_exists('images/LM')===false){	// 不管有沒有傳圖片都先確認有無圖片資料夾
				mkdir('images/LM');
			}
			if(file_exists('images/mobile_LM')===false){	// 不管有沒有傳圖片都先確認有無圖片資料夾
				mkdir('images/mobile_LM');
			}	


			switch($_FILES['LM_img01']['error']){
				case 0: 	//圖片上傳成功
					$imgName = mb_convert_encoding($_FILES['LM_img01']['name'],'utf8','auto');
					$imgName = explode(".", $imgName);
					$from = $_FILES['LM_img01']["tmp_name"];
					$LM_img01 = $lmno.".".$imgName[1];
					$to= "images/LM/".$lmno.".".$imgName[1];
					$to2= "images/mobile_LM/".$lmno.".".$imgName[1];

					copy($from,$to);
					copy($from,$to2);	
					break;
				case 1:
					echo "<script>window.alert('圖片太大，檔案不能超過2M'); window.location='memberLM.php';</script>";
					$pdo->rollBack();
					break;	
				case 4:		//沒有上傳圖片 
					break;
				default:
					echo "<script>window.alert('上傳發生錯誤，請重新上傳'); window.location='memberLM.php';</script>";	
			}

			$img_update = "update lm set LM_img01=:LM_img01 where LM_no= :LM_no";
			$statment = $pdo->prepare($img_update);
			$statment->bindValue(":LM_no", $lmno);
			$statment->bindValue(":LM_img01", $LM_img01 ?: "");
			$statment->execute();

			$pdo->commit();
			echo "<script>window.alert('輸入成功'); window.location='landmark.php';</script>";

		} //end of if



	}catch(PDOException $ex){


		$pdo->rollBack();

		echo "連線失敗,原因:" , $ex->getMessage() ,"<br>";
		echo "行號 : " , $ex->getLine() ,"<br>";
	}








// } //end of if/else

?>