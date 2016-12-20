<?php
try{
  require_once("connectToHoyo.php");  
  $sql = "select * from nc";
  $lmtr = $pdo->query( $sql );
  
  $data = '\'[';

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
    $data.= '"NC_collectTime":"'.($lmtrRow['NC_collectTime']?$lmtrRow['NC_collectTime']:0).'", ';
    $data.= '"NC_isReported":'.$lmtrRow['NC_isReported'].' ';

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
	var nc = JSON.parse( <?php echo $data;?> );
	// console.log(nc);
</script>

	
