<?php
try{
  require_once("connectToHoyo.php");
  $sql = "select * from re";
  $re = $pdo->query($sql);

  $data = '\'[';

  while($reRow = $re->fetch( PDO::FETCH_ASSOC) ){
    $data.= '{';
    $data.= '"RE_no":'.$reRow['RE_no'].', ';
    $data.= '"MEM_no":'.$reRow['MEM_no'].', ';
    $data.= '"NOTE_no":'.$reRow['NOTE_no'].', ';
    $data.= '"RE_time":"'.$reRow['RE_time'].'", ';
    $txt = json_encode($reRow['RE_content']);
    $data.= '"RE_content":'.$txt.', ';
    $data.= '"RE_reportedTimes":'.$reRow['RE_reportedTimes'].' ';

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
  // console.log(<?php //echo $data;?>;);
  var with_br = <?php echo $data;?>;
  with_br = with_br.replace(/\n/g,'\\n');
  with_br = with_br.replace(/\r/g,'');
	var re_data = JSON.parse( with_br );
	// console.log(re_data);

</script>

