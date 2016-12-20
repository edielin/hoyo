<?php
try{
  require_once("connectToHoyo.php");  
  $sql = "select * from lmtr";
  $lmtr = $pdo->query( $sql );
  
  $data = '\'[';

  while($lmtrRow = $lmtr->fetch( PDO::FETCH_ASSOC) ){
  	$data.= '{';
  	$data.= '"LM_no":'.$lmtrRow['LM_no'].', ';
  	$data.= '"TR_no":'.$lmtrRow['TR_no'].', ';
  	$data.= '"LMTR_day":'.$lmtrRow['LMTR_day'].', ';
  	$data.= '"LMTR_order":'.$lmtrRow['LMTR_order'].' ';

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
	// console.log(<?php //echo $data;?>);
	var lmtr = JSON.parse( <?php echo $data;?> );
	// console.log(lmtr);
</script>

	
