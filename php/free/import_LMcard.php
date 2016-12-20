<?php
try{
  require_once("connectToHoyo.php");  
  $sql = "select * from lm where LM_confirm = 1 and LM_no > 1";
  $lm = $pdo->query( $sql );
  
  $data = '\'[';

  while($lmRow = $lm->fetch( PDO::FETCH_ASSOC) ){
  	$data.= '{';
  	$data.= '"LM_no":'.$lmRow['LM_no'].', ';
  	$data.= '"MEM_no":'.$lmRow['MEM_no'].', ';
  	$data.= '"branch":"'.$lmRow['LM_branch'].'", ';

  	$data.= '"station":"'.$lmRow['LM_station'].'", ';
  	$data.= '"name":"'.$lmRow['LM_name'].'", ';
  	$data.= '"type":"'.$lmRow['LM_type'].'", ';
  	$data.= '"isFixEvent":'.$lmRow['LM_isFixEvent'].', ';
  	$data.= '"subtitle":"'.$lmRow['LM_description'].'", ';

  	$data.= '"phone":"'.$lmRow['LM_phone'].'", ';
  	$data.= '"cellphone":"'.$lmRow['LM_cellphone'].'", ';
  	$data.= '"address":"'.$lmRow['LM_address'].'", ';
  	$data.= '"longitude":'.$lmRow['LM_longitude'].', ';
  	$data.= '"latitude":'.$lmRow['LM_latitude'].', ';

  	$data.= '"opentime":"'.$lmRow['LM_opentime'].'", ';
  	$data.= '"avgcost":'.$lmRow['LM_avgcost'].', ';
  	$data.= '"staycost1":'.$lmRow['LM_staycost1'].', ';
  	$data.= '"staycost2":'.$lmRow['LM_staycost2'].', ';
  	$data.= '"staycost4":'.$lmRow['LM_staycost4'].', ';

  	$data.= '"staycostadd1":'.$lmRow['LM_staycostadd1'].', ';
  	$data.= '"adultcost":'.$lmRow['LM_adultcost'].', ';
  	$data.= '"childcost":'.$lmRow['LM_childcost'].', ';
  	$data.= '"url":"images/LM/'.$lmRow['LM_img01'].'" ';

  	$data.= '},';
  }
  $data = substr($data, 0, -1);
  $data.= ']\'';  
  // echo $data;

}catch(PDOException $ex){
  echo "連線失敗,原因:" , $ex->getMessage() ,"<br>";
  echo "行號 : " , $ex->getLine() ,"<br>";
}

?>  

<script>
	// console.log(<?php echo $data;?>);
	var data_LMcards = JSON.parse( <?php echo $data;?> );
	// console.log(data_LMcards);
</script>

	
