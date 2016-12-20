<?php
try{
  require_once("connectToHoyo.php");  
  $sql = "select n.NOTE_no, t.TR_no, t.TR_name from note n, tr t where n.NOTE_no=t.NOTE_no";
  $lmtr = $pdo->query( $sql );
  
  $data = '\'[';

  while($lmtrRow = $lmtr->fetch( PDO::FETCH_ASSOC) ){
  	$data.= '{';
  	$data.= '"TR_no":'.$lmtrRow['TR_no'].', ';
  	$data.= '"NOTE_no":'.$lmtrRow['NOTE_no'].', ';
  	$data.= '"TR_name":"'.$lmtrRow['TR_name'].'" ';

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
	var noteTr = JSON.parse( <?php echo $data;?> );
	// console.log(noteTr);
</script>

	
