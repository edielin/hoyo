<?php
ob_start(); session_start();
//隱藏錯誤訊息
error_reporting(0);
ini_set('display_errors', 0);

	try{
		require_once("connectToHoyo.php"); 

		$pdo->beginTransaction();


		$sql = "SELECT * FROM lm WHERE LM_name=:LM_name and LM_no!=:LM_no ";
		$name_check = $pdo->prepare($sql);
		$name_check->bindValue(":LM_name", $_REQUEST['LM_name']);
		$name_check->bindValue(":LM_no", $_REQUEST['LM_no']);
		$name_check->execute();



		if($name_check->rowCount()!=0){ //地標名稱重複

			$pdo->rollBack();
			echo "<script>window.alert('地標名稱重複'); window.location='backendLM.php';</script>";

		}else{

			$lmno = $_REQUEST['LM_no'];
			$no_img = true;

			if(file_exists('images')===false){
				mkdir('images');
			}
			if(file_exists('images/LM')===false){
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

					$filename = $lmno.".".$imgName[1];
					$LM_img01 = $filename;
					$to= "images/LM/".$filename;
					$to2= "images/mobile_LM/".$filename;

					//檢查是否已經有同名檔案
					$sql = "SELECT * FROM lm WHERE LM_img01=:LMimg01";
					$file_check = $pdo->prepare($sql);
					$file_check->bindValue(":LMimg01", $filename);
					$file_check->execute();					

					if($file_check->rowCount()!=0){ //圖片檔案名稱重複
						$no_img = false;
						unlink("images/LM/".$filename); //刪除照片
						unlink("images/mobile_LM/".$filename);	
					}

					copy($from,$to);
					copy($from,$to2);				

					break;
				case 1:
					echo "<script>window.alert('圖片太大，檔案不能超過2M'); window.location='backendLM.php';</script>";
					$no_img = false;
					break;
					
				case 4:		//沒有上傳圖片 
					$no_img = false;
					break;
				default:
					echo "<script>window.alert('上傳發生錯誤，請重新上傳'); window.location='backendLM.php';</script>";
					break;
			}


			
			$lm_update = "update lm set LM_confirm=1, LM_branch=:LM_branch, LM_station=:LM_station, LM_name=:LM_name, LM_type=:LM_type, LM_description=:LM_description, LM_phone=:LM_phone, LM_cellphone=:LM_cellphone, LM_address=:LM_address, LM_longitude=:LM_longitude, LM_latitude=:LM_latitude, LM_opentime=:LM_opentime, LM_avgcost=:LM_avgcost, LM_staycost1=:LM_staycost1, LM_staycost2=:LM_staycost2, LM_staycost4=:LM_staycost4, LM_staycostadd1=:LM_staycostadd1, LM_adultcost=:LM_adultcost, LM_childcost=:LM_childcost where LM_no= :LM_no";
			$statment = $pdo->prepare($lm_update);
			$statment->bindValue(":LM_no", $lmno);

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


			//如果照片已經存在, 那麼如果不上傳照片, 也會保留原來存在的照片
			if($no_img){ // 如果沒有照片存在, 才要更新照片
				$img_update = "update lm set LM_img01=:LM_img01 where LM_no= :LM_no";
				$statment = $pdo->prepare($img_update);
				$statment->bindValue(":LM_no", $lmno);
				$statment->bindValue(":LM_img01", $LM_img01 ?: "");
				$statment->execute();
			}


			$pdo->commit();
			echo "<script>window.alert('輸入成功'); window.location='backendLM.php';</script>";

		} //end of if



	}catch(PDOException $ex){


		$pdo->rollBack();

		echo "連線失敗,原因:" , $ex->getMessage() ,"<br>";
		echo "行號 : " , $ex->getLine() ,"<br>";
	}

?>