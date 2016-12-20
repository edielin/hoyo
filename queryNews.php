<?php
try{
	require_once("connectToHoyo.php");
	$sql="select * from news where NEWS_no='{$_REQUEST["NEWS_no"]}'";
	$news = $pdo->query( $sql );

	while ($newsRow =$news->fetch(PDO::FETCH_ASSOC)){
		echo json_encode($newsRow);
	}

}
catch(PDOException $ex){
		echo "資料庫操作失敗,原因：",$ex->getMessage(),"<br>";
		echo "行號：",$ex->getLine(),"<br>";
}

?>
