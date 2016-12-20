<?php
try{
  require_once("connectToHoyo.php");  
  $sql = "select * from tr where TR_close=0 order by TR_no desc";
  $tr = $pdo->query( $sql );
  
  $data = '\'['; 

  while($trRow = $tr->fetch( PDO::FETCH_ASSOC) ){
  	$data.= '{';
  	$data.= '"TR_no":'.$trRow['TR_no'].',';
  	$data.= '"MEM_no":'.$trRow['MEM_no'].',';
    $data.= '"NOTE_no":'.$trRow['NOTE_no'].',';  //額外加入
  	$data.= '"TR_name":"'.$trRow['TR_name'].'"';

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
	var faketr = JSON.parse( <?php echo $data;?> );
	// console.log(data_LMcards);
</script>

	
