<?php 
require_once("connectToHoyo.php");
$data=json_decode($_REQUEST["pagedata"]);
try {
	if($data->type==1){  //切換支線
		// $str="<tr><th>圖片</th><th>地標名</th><th>支線</th><th>站點</th><th>類型</th><th>地址</th><th>行為</th></tr>";
		$i=0;
		$sql="SELECT * from lm where LM_confirm=1 and LM_branch=:LM_branch and LM_no!=1 and LM_station=:LM_station order by LM_no DESC";
		$LM_Item=$pdo->prepare($sql);
		$LM_Item->bindValue("LM_branch",$data->LM_branch); //支線
		$LM_Item->bindValue("LM_station",$data->LM_station); //站點
		$LM_Item->execute();
		$allItem=$LM_Item->rowCount();  //所有總和
        $start_page=$data->page;	//起始頁
        $max_pages=6;  //最大比數
        $startRow_records=($start_page-1)*$max_pages; //從索引0開始
        $queryLimit = $sql." LIMIT ".$startRow_records.",".$max_pages;  //限制式
		$LMqueryItem=$pdo->prepare($queryLimit);
		$LMqueryItem->bindValue("LM_branch",$data->LM_branch); //支線
		$LMqueryItem->bindValue("LM_station",$data->LM_station); //站點
		$LMqueryItem->execute();
		$totalPages = ceil($allItem/$max_pages);    //頁數
		while($LM_Row=$LMqueryItem->fetch(PDO::FETCH_ASSOC)){	
			// $str.= "<tr><td><div class='BL_imgbox'><img src='images/LM/".$LM_Row["LM_img01"]."'></div></td>";
   //          $str.="<td>".$LM_Row["LM_name"]."</td>";    
   //          $str.="<td>".$LM_Row["LM_branch"]."</td>";           
   //          $str.="<td>".$LM_Row["LM_station"]."</td>";                   
   //          $str.="<td>";
   //          if($LM_Row["LM_type"] =="f_landscape"){
   //  			$str.="景點";
   //  		}else if($LM_Row["LM_type"] =="f_eat"){
   //  			$str.="美食";
   //  		}else if($LM_Row["LM_type"] =="f_stay"){
   //  			$str.="住宿";
   //  		}else if($LM_Row["LM_type"] =="f_activity"){
   //  			$str.="活動";
   //  		}else{
   //  			$str.="其餘";
   //  		}
			// $str.="</td>";
   //          $str.="<td>".$LM_Row["LM_address"]."</td>";                
   //          $str.="<td>";               
   //          $str.="<input type='button' value='修改' class='blCheckBtn btn-gray fontFamily btn-margin updatebtn'>";               
   //          $str.="</td></tr>";  
			$arr[$i]=$LM_Row;	//推入陣列
			$i++;
		}
		$arr[$i]=$totalPages; //最後一個給所有關於該支線及該站點的總和算出的頁數
		 echo json_encode($arr);   //回傳編譯過的陣列物件
	}else if($data->type==2){		//切換站點
		$i=0;
		$sql="SELECT * from lm where LM_confirm=1 and LM_branch=:LM_branch and LM_no!=1 and LM_station=:LM_station order by LM_no DESC";
		$selectItem=$pdo->prepare($sql);
		$selectItem->bindValue(":LM_branch",$data->LM_branch);
		$selectItem->bindValue(":LM_station",$data->LM_station);
		$selectItem->execute();
		$allItem=$selectItem->rowCount();
        $start_page=1;  //先撈出第一頁6筆
        $max_pages=6;
        $startRow_records=($start_page-1)*$max_pages; //從索引0開始
        $queryLimit = $sql." LIMIT ".$startRow_records.",".$max_pages;
			$LMqueryItem=$pdo->prepare($queryLimit);
		$LMqueryItem->bindValue(":LM_branch",$data->LM_branch);
		$LMqueryItem->bindValue(":LM_station",$data->LM_station);
		$LMqueryItem->execute();
		$totalPages = ceil($allItem/$max_pages); 
		if($allItem!=0){
			while($LM_Row=$LMqueryItem->fetch(PDO::FETCH_ASSOC)){
				$arr[$i]=$LM_Row;	//推入陣列
				$i++;
			}
			$arr[$i]=$totalPages; 
			echo json_encode($arr); 
		}else if($allItem==0){
			$arr[$i]=$totalPages; 
			echo json_encode($arr); 
		}
		//end type=2
	}else if($data->type==3){  //審核地標
		$i=0;
		$sql="SELECT * FROM lm WHERE LM_confirm!=1 and LM_no!=1 order by LM_no DESC";
		$verifyPageItem=$pdo->query($sql);
		$allItem=$verifyPageItem->rowCount();
        $start_page=$data->page;
        $max_pages=6;
        $startRow_records=($start_page-1)*$max_pages; //從索引0開始
        $queryLimit = $sql." LIMIT ".$startRow_records.",".$max_pages;
		$LMqueryItem=$pdo->query($queryLimit);
		$totalPages = ceil($allItem/$max_pages); 
		if($allItem!=0){  //有資料時回傳資料及頁數
			while($LM_Row=$LMqueryItem->fetch(PDO::FETCH_ASSOC)){
				$arr[$i]=$LM_Row;	//推入陣列
				$i++;
			}
			$arr[$i]=$totalPages; 
			echo json_encode($arr); 
		}else if($allItem==0){//沒有資料回傳頁數
			$arr[$i]=$totalPages; 
			echo json_encode($arr); 
		}
	}
} catch (PDOException $ex) {
	$ex->getLine();
	$ex->getMessage();
}

?>