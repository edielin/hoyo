<?php 
ob_start();
session_start();
$noteObj=json_decode($_REQUEST["NOTE_no"]);  //將JSON轉換成物件
try {
	require_once('connectToHoyo.php');
	if($noteObj->NOTE_type==1){
		if($noteObj->NOTE_close=="封存"){  //如果按鈕為封存
			$sql="select * from note where NOTE_no=:NOTE_no and NOTE_close=1";  //找到該NOTE_no且確認是否已經封存
			$noteRow=$pdo->prepare($sql);
			$noteRow->bindValue(":NOTE_no",$noteObj->NOTE_no);  //拿物件中的參數當參考
			$noteRow->execute();
			if($noteRow->rowCount()==0){  //如果沒有符合表示沒有被封存
				$pdo->beginTransaction(); //開啟交易管理
				$updata="update note set NOTE_close=1 where NOTE_no=:NOTE_no";  //更新的SQL語法
				$updataRow=$pdo->prepare($updata); 
				$updataRow->bindValue(":NOTE_no",$noteObj->NOTE_no);  //拿物件中的參數當參考
				$updataRow->execute();
				echo "更新完成";   //回傳結果字串
				$pdo->commit();
			}else if($noteRow->rowCount()>0){
				echo "1";   //如果有則回傳1
			}

		}else if($noteObj->NOTE_close=="解封"){
			$nosql="select * from note where NOTE_no=:NOTE_no and NOTE_close=0";
			$changenoteRow=$pdo->prepare($nosql);
			$changenoteRow->bindValue(":NOTE_no",$noteObj->NOTE_no);
			$changenoteRow->execute();
			if($changenoteRow->rowCount()==0){
				$pdo->beginTransaction();
				$updata="update note set NOTE_close=0 where NOTE_no=:NOTE_no";
				$updatanoteRow=$pdo->prepare($updata);
				$updatanoteRow->bindValue(":NOTE_no",$noteObj->NOTE_no);
				$updatanoteRow->execute();
				echo "更新完成";
				$pdo->commit();
			}else if($changenoteRow->rowCount()!=0){
				echo "0";
			}
		}
	}else if($noteObj->NOTE_type==2){
		if($noteObj->selectedValue=="L1"){
			$sql="select *,count(nc.NC_isReported) as report_Total from nc join note on note.NOTE_no=nc.NOTE_no where nc.NC_isReported!=0 group by note.NOTE_no order by report_Total DESC";
			$sqlOutput=$pdo->query($sql);
			$str="";
			while($sqlReturn=$sqlOutput->fetch(PDO::FETCH_ASSOC)){
			$str .="<tr>";
			$str .="<td><span class='td_memNo'>".$sqlReturn['NOTE_no']."</span></td>";
            $str .="<td>".$sqlReturn['MEM_no']."</td>";
            $str .="<td>".$sqlReturn['NOTE_title']."</td>";
            $str .="<td><p>".$sqlReturn['report_Total']."次</p></td>";
            $str .="<td>".$sqlReturn['NOTE_createDate']."</td>";
            $str .="<td><input type='submit' value='".($sqlReturn['NOTE_close']==1 ? '解封':'封存')."' class='closeBtn btn-gray btn-margin'><a href='Wdetail.php?NOTE_no=".$sqlReturn['NOTE_no']."' class='lookBtn lbtn-gray btn-margin' target='_blank'>查看</a></td></tr>";
        	}
            echo $str; 
		}else if($noteObj->selectedValue=="L2"){
			$sql="select *,count(nc.NC_isReported) as report_Total from nc join note on note.NOTE_no=nc.NOTE_no where nc.NC_isReported!=0 group by note.NOTE_no order by report_Total ASC";
			$sqlOutput=$pdo->query($sql);
			$str="";
			while($sqlReturn=$sqlOutput->fetch(PDO::FETCH_ASSOC)){
			$str .="<tr>";
			$str .="<td><span class='td_memNo'>".$sqlReturn['NOTE_no']."</span></td>";
            $str .="<td>".$sqlReturn['MEM_no']."</td>";
            $str .="<td>".$sqlReturn['NOTE_title']."</td>";
            $str .="<td><p>".$sqlReturn['report_Total']."次</p></td>";
            $str .="<td>".$sqlReturn['NOTE_createDate']."</td>";
            $str .="<td><input type='submit' value='".($sqlReturn['NOTE_close']==1 ? '解封':'封存')."' class='closeBtn btn-gray btn-margin'><a href='Wdetail.php?NOTE_no=".$sqlReturn['NOTE_no']."' class='lookBtn lbtn-gray btn-margin' target='_blank'>查看</a></td></tr>";
        	}
            echo $str;                     
		}else if($noteObj->selectedValue=="L3"){
			$sql="select *,count(nc.NC_isReported) as report_Total from nc join note on note.NOTE_no=nc.NOTE_no where nc.NC_isReported!=0 group by note.NOTE_no order by note.NOTE_createDate DESC";
			$sqlOutput=$pdo->query($sql);
			$str="";
			while($sqlReturn=$sqlOutput->fetch(PDO::FETCH_ASSOC)){
			$str .="<tr>";
			$str .="<td><span class='td_memNo'>".$sqlReturn['NOTE_no']."</span></td>";
            $str .="<td>".$sqlReturn['MEM_no']."</td>";
            $str .="<td>".$sqlReturn['NOTE_title']."</td>";
            $str .="<td><p>".$sqlReturn['report_Total']."次</p></td>";
            $str .="<td>".$sqlReturn['NOTE_createDate']."</td>";
            $str .="<td><input type='submit' value='".($sqlReturn['NOTE_close']==1 ? '解封':'封存')."' class='closeBtn btn-gray btn-margin'><a href='Wdetail.php?NOTE_no=".$sqlReturn['NOTE_no']."' class='lookBtn lbtn-gray btn-margin' target='_blank'>查看</a></td></tr>";
        	}
            echo $str;         
		}else if($noteObj->selectedValue=="L4"){
			$sql="select *,count(nc.NC_isReported) as report_Total from nc join note on note.NOTE_no=nc.NOTE_no where nc.NC_isReported!=0 group by note.NOTE_no order by note.NOTE_createDate ASC";
			$sqlOutput=$pdo->query($sql);
			$str="";
			while($sqlReturn=$sqlOutput->fetch(PDO::FETCH_ASSOC)){
			$str .="<tr>";
			$str .="<td><span class='td_memNo'>".$sqlReturn['NOTE_no']."</span></td>";
            $str .="<td>".$sqlReturn['MEM_no']."</td>";
            $str .="<td>".$sqlReturn['NOTE_title']."</td>";
            $str .="<td><p>".$sqlReturn['report_Total']."次</p></td>";
            $str .="<td>".$sqlReturn['NOTE_createDate']."</td>";
            $str .="<td><input type='submit' value='".($sqlReturn['NOTE_close']==1 ? '解封':'封存')."' class='closeBtn btn-gray btn-margin'><a href='Wdetail.php?NOTE_no=".$sqlReturn['NOTE_no']."' class='lookBtn lbtn-gray btn-margin' target='_blank'>查看</a></td></tr>";
        	}
            echo $str;         
		}
	}else if($noteObj->NOTE_type==3){  //選擇行程
		$sql="select * from tr where NOTE_no=1 and MEM_no=1";
		$addsql=$pdo->query($sql);
		$str="<tr><th>行程選擇</th></tr>";
		while($addRow=$addsql->fetch(PDO::FETCH_ASSOC)){
			$str .="<tr><td><input type='radio' name='bwitems' id='tour1' class='tour' value='".$addRow['TR_no']."'>";
			$str .="<label for='tour1' class='bwlabel'><i class='icon-ok'></i>".$addRow['TR_name']."</label></td></tr>";
		}
		echo $str;
	}
} catch (PDOException $ex) {
	$ex->getLine();
	$ex->getMessage();
}

?>
