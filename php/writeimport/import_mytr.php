<?php

try{
  require_once("connectToHoyo.php");  
  $memno = $_SESSION["HOYO_memNo"];
  $sql = "select * from tr where tr.MEM_no = :memno and tr.NOTE_no=1 and tr.TR_close=0";
  $tr = $pdo->prepare($sql);
  $tr->bindParam(":memno",$memno);
  $tr->execute();
  
  $data = '\'[';

  while($trRow = $tr->fetch( PDO::FETCH_ASSOC) ){
    $data.= '{';
    $data.= '"TR_no":'.$trRow['TR_no'].', ';
    $data.= '"MEM_no":'.$trRow['MEM_no'].', ';
    $data.= '"TR_name":"'.$trRow['TR_name'].'" ';

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
	// console.log(<?php //echo $data;?>);
	var mytr = JSON.parse( <?php echo $data;?> );
	// console.log(mytr);
</script>

