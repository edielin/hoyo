<?php
ob_start(); session_start();

	try{
		require_once("connectToHoyo.php"); 
		//啟用交易管理
		$pdo->beginTransaction();

		$nc_update = "select * from nc where MEM_no=:MEM_no and NOTE_no=:NOTE_no";
		$statment = $pdo->prepare($nc_update);
		$statment->bindValue(":MEM_no", $_REQUEST['MEM_no']);
		$statment->bindValue(":NOTE_no", $_REQUEST['NOTE_no']);
		$statment->execute();

		if( $statment -> rowCount()==0 ){

			if($_REQUEST['type']=='collect'){

				// 如果找不到, 表示尚未收藏過 , 新增資料
				$nc_collect_insert="insert into nc value(null, :MEM_no, :NOTE_no, null, :NC_isCollected, now(), 0)";
				$statment = $pdo->prepare($nc_collect_insert);
				$statment->bindValue(":NC_isCollected", $_REQUEST['NC_isCollected']);

			}elseif($_REQUEST['type']=='rating'){

				$nc_rating_insert="insert into nc value(null, :MEM_no, :NOTE_no, :NC_rating, 0, now(), 0)";
				$statment = $pdo->prepare($nc_rating_insert);
				$statment->bindValue(":NC_rating", $_REQUEST['NC_rating']);

			}elseif($_REQUEST['type']=='report'){

				$nc_report_insert="insert into nc value(null, :MEM_no, :NOTE_no, null, 0, now(), 1)";
				$statment = $pdo->prepare($nc_report_insert);

			}

		}else{ //資料庫已經有該會員對該遊記的資料紀錄

			if($_REQUEST['type']=='collect'){

				// 更新 nc 資料表 , 把 NC_isCollected 變0
				$nc_collect_update = "update nc set NC_isCollected=:NC_isCollected where MEM_no=:MEM_no and NOTE_no=:NOTE_no";
				$statment = $pdo->prepare($nc_collect_update);
				$statment->bindValue(":NC_isCollected", $_REQUEST['NC_isCollected']);

			}elseif($_REQUEST['type']=='rating'){

				$nc_rating_update = "update nc set NC_rating=:NC_rating where MEM_no=:MEM_no and NOTE_no=:NOTE_no";
				$statment = $pdo->prepare($nc_rating_update);
				$statment->bindValue(":NC_rating", $_REQUEST['NC_rating']);
				
			}elseif($_REQUEST['type']=='report'){

				$nc_report_update = "update nc set NC_isReported=:NC_isReported where MEM_no=:MEM_no and NOTE_no=:NOTE_no";
				$statment = $pdo->prepare($nc_report_update);
				$statment->bindValue(":NC_isReported", $_REQUEST['NC_isReported']);
				
			}
			
		}

		$statment->bindValue(":MEM_no", $_REQUEST['MEM_no']);
		$statment->bindValue(":NOTE_no", $_REQUEST['NOTE_no']);
		$statment->execute();		


		//確認交易
		$pdo->commit();
		// echo "成功";










		// 重新撈取 nc 資料表, 傳遞回去
		$sql = "select * from nc";
		$lmtr = $pdo->query( $sql );

		$data = '[';

		while($lmtrRow = $lmtr->fetch( PDO::FETCH_ASSOC) ){

			$data.= '{';
			$data.= '"MEM_no":'.$lmtrRow['MEM_no'].', ';
			$data.= '"NOTE_no":'.$lmtrRow['NOTE_no'].', ';

			// 如果沒有評分資料 就給 null
			if(!$lmtrRow['NC_rating']){
				$data.= '"NC_rating": null, ';
			}else{
				$data.= '"NC_rating":'.$lmtrRow['NC_rating'].', ';
			}

			$data.= '"NC_isCollected":'.$lmtrRow['NC_isCollected'].', ';
			$data.= '"NC_collectTime":"'.($lmtrRow['NC_collectTime']?$lmtrRow['NC_collectTime']:0).'" ';

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