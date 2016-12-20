<?php
try{
  require_once("connectToHoyo.php");  
  $sql = "select * from tr";
  $tr = $pdo->query( $sql );
  
  $data = '\'['; 

  while($trRow = $tr->fetch( PDO::FETCH_ASSOC) ){
  	$data.= '{';
  	$data.= '"TR_no":'.$trRow['TR_no'].', ';
  	$data.= '"MEM_no":'.$trRow['MEM_no'].', ';
  	$data.= '"TR_name":"'.$trRow['TR_name'].'", ';
    $data.= '"TR_subtitle":"'.$trRow['TR_subtitle'].'", ';
    $txt = json_encode($trRow['TR_description']);
    $data.= '"TR_description":'.$txt.', ';
    $data.= '"TR_startDate":"'.$trRow['TR_startDate'].'", ';
    $data.= '"TR_startTag":"'.$trRow['TR_startTag'].'", ';

    $data.= '"TR_endTag":"'.$trRow['TR_endTag'].'", ';
    $data.= '"TR_adultNumber":'.$trRow['TR_adultNumber'].', ';
    $data.= '"TR_childNumber":'.$trRow['TR_childNumber'].', ';
    $data.= '"TR_otherMoney":'.$trRow['TR_otherMoney'].' ';

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
  var with_br = <?php echo $data;?>;
  with_br = with_br.replace(/\n/g,'\\n');
  with_br = with_br.replace(/\r/g,'');
	var faketr = JSON.parse( with_br );
	// console.log(data_LMcards);
</script>

	
