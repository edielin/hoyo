<?php
try{
  require_once("connectToHoyo.php");
  $sql = "select * from mem";
  $re = $pdo->query($sql);

  $data = '\'[';

  while($memRow = $re->fetch( PDO::FETCH_ASSOC) ){
    $data.= '{';
    $data.= '"MEM_no":'.$memRow['MEM_no'].', ';
    $data.= '"MEM_name":"'.$memRow['MEM_name'].'", ';
    $data.= '"MEM_img":"'.$memRow['MEM_img'].'" ';

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
	var mem_data = JSON.parse( <?php echo $data;?> );
	// console.log(re_data);

</script>

