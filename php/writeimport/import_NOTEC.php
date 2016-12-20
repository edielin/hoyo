<?php
try{
  require_once("connectToHoyo.php");
  $sql = "select * from NOTEC";
  $notec = $pdo->query($sql);
  
  $data = '\'[';

  while($notecRow = $notec->fetch( PDO::FETCH_ASSOC) ){
    $data.= '{';
    $data.= '"NOTE_no":'.$notecRow['NOTE_no'].', ';
    $data.= '"NOTEC_day":'.$notecRow['NOTEC_day'].', ';
    $txt = json_encode($notecRow['NOTEC_content']);
    $data.= '"NOTEC_content":'.$txt.', ';
    $data.= '"NOTEC_img01":"'.$notecRow['NOTEC_img01'].'", ';
    $data.= '"NOTEC_img02":"'.$notecRow['NOTEC_img02'].'", ';
    $data.= '"NOTEC_img03":"'.$notecRow['NOTEC_img03'].'", ';
    $data.= '"NOTEC_img04":"'.$notecRow['NOTEC_img04'].'" ';

    $data.= '},';
  }
  $data = substr($data, 0, -1);
  $data.= ']\'';  

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
	var notec_data = JSON.parse( with_br );
	// console.log(notec_data);
</script>

