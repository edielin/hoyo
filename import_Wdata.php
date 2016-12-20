<?php
try{
  require_once("connectToHoyo.php");  
  $sql = "select * from note where NOTE_no>1 && NOTE_close=0 order by note.NOTE_createDate desc";
  $note = $pdo->query( $sql );
  
  $noteData = '\'[';

  while($noteRow = $note->fetch( PDO::FETCH_ASSOC) ){

  	$noteData.= '{';
    $noteData.= '"no":"'.$noteRow['NOTE_no'].'", ';
    $noteData.= '"title":"'.$noteRow['NOTE_title'].'", ';
    $txt = json_encode($noteRow['NOTE_description']);
    $noteData.= '"desc":'.$txt.', ';
  	$noteData.= '"url":"'.'images/notewrite/'.$noteRow['NOTE_mainimg'].'" ';

  	$noteData.= '},';
  }
  $noteData = substr($noteData, 0, -1);
  $noteData.= ']\'';  

}catch(PDOException $ex){
  echo "連線失敗,原因:" , $ex->getMessage() ,"<br>";
  echo "行號 : " , $ex->getLine() ,"<br>";
}
?>  

<script>
  // JSON 不能接受換行, 需要將換行換成 \n 或 \r
  var with_br = <?php echo $noteData;?>;
  with_br = with_br.replace(/\n/g,'\\n');
  with_br = with_br.replace(/\r/g,'');

  //將遊記資料轉成js
  var Wdata = JSON.parse( with_br );

</script>
