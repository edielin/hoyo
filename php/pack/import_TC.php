<?php
try{
  require_once("connectToHoyo.php");  
  $sql = "select * from tc";
  $tr = $pdo->query( $sql );
  if($tr->rowCount()!=0){
    $data = '\'['; 

    while($trRow = $tr->fetch( PDO::FETCH_ASSOC) ){
    	$data.= '{';
    	$data.= '"MEM_no":'.$trRow['MEM_no'].',';
    	$data.= '"TR_no":'.$trRow['TR_no'].'';

    	$data.= '},';
    }
    $data = substr($data, 0, -1);
    $data.= ']\'';  
    // echo $data;
  }else if($tr->rowCount()==0){
    $data = '\'['; 
      $data.= '{';
      $data.= '"TR_no":null';
      $data.= '},';
    $data = substr($data, 0, -1);
    $data.= ']\'';  
    // echo $data;
  }
}catch(PDOException $ex){
  echo "連線失敗,原因:" , $ex->getMessage() ,"<br>";
  echo "行號 : " , $ex->getLine() ,"<br>";
}

?>  

<script>
	// console.log(<?php echo $data;?>);
	var tc = JSON.parse( <?php echo $data;?> );
	// console.log(tc);
</script>

	
