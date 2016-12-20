<?php
try{

  require_once("connectToHoyo.php");
  $sql = "delete from news where NEWS_no=:NEWS_no";
  $news = $pdo->prepare( $sql );
  $news->bindValue(":NEWS_no", $_REQUEST["NEWS_no"]);
  $news->execute();
  
  if( $news->rowCount() == 0 ){   
    echo "{}";
  }else{ 

    echo "刪除成功";    
  }	
  
}catch(PDOException $e){
  echo $e->getMessage();
}
?>