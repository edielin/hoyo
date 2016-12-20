<?php
try{
  require_once("connectToHoyo.php");  
  $sql = "select n.MEM_no, m.MEM_name, m.MEM_img, n.NOTE_no, n.NOTE_title, n.NOTE_description, n.NOTE_createDate, n.NOTE_mainimg, n.NOTE_close from mem m, note n where m.MEM_no = n.MEM_no and n.NOTE_no>1";
  $memNote = $pdo->query( $sql );
  
  $data = '\'[';

  while($noteRow = $memNote->fetch( PDO::FETCH_ASSOC) ){
  	$data.= '{';
  	$data.= '"MEM_no":'.$noteRow['MEM_no'].', ';
  	$data.= '"MEM_name":"'.$noteRow['MEM_name'].'", ';
  	$data.= '"MEM_img":"'.$noteRow['MEM_img'].'", ';
  	$data.= '"NOTE_no":'.$noteRow['NOTE_no'].', ';
    $data.= '"NOTE_title":"'.$noteRow['NOTE_title'].'", ';
    $txt = json_encode($noteRow['NOTE_description']);
    $data.= '"NOTE_description":'.$txt.', ';
    $data.= '"NOTE_createDate":"'.$noteRow['NOTE_createDate'].'", ';
    $data.= '"NOTE_mainimg":"'.$noteRow['NOTE_mainimg'].'", ';
    $data.= '"NOTE_close":'.$noteRow['NOTE_close'].' ';

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
  // JSON 不能接受換行, 需要將換行換成 \n 或 \r
  var with_br = <?php echo $data;?>;
  with_br = with_br.replace(/\n/g,'\\n');
  with_br = with_br.replace(/\r/g,'');
	// console.log(with_br);
	var memNote = JSON.parse( with_br );
	console.log(memNote);
</script>

	
