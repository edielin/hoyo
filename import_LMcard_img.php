<?php
try{
  require_once("connectToHoyo.php");  
  $sql = "select * from lm where LM_confirm = 1 and LM_no > 1";
  $lm = $pdo->query( $sql );
  
  
  $LMdata = '\'[';

  while($lmRow = $lm->fetch( PDO::FETCH_ASSOC) ){
  	$LMdata.= '{';
  
  	$LMdata.= '"url":"'.'images/LM/'.$lmRow['LM_img01'].'" ';

  	$LMdata.= '},';
  }
  $LMdata = substr($LMdata, 0, -1);
  $LMdata.= ']\'';  

}catch(PDOException $ex){
  echo "連線失敗,原因:" , $ex->getMessage() ,"<br>";
  echo "行號 : " , $ex->getLine() ,"<br>";
}
?>  
	
