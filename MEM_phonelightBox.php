<?php 
$trNo=json_decode($_REQUEST["pTR_no"]);
try {
	require_once("connectToHoyo.php");
	if($trNo->TR_type==5){
		$str ="";
		$sql="SELECT * from tr where TR_no=:trNo";  //找出符合的行程編號
		$trItem=$pdo->prepare($sql);
		$trItem->bindValue(":trNo",$trNo->TR_no);
		$trItem->execute();
		while($trRow=$trItem->fetch(PDO::FETCH_ASSOC)){
		//找出所有天數
		$lmtrdaySql="SELECT DISTINCT LMTR_day FROM  lmtr where TR_no=:trNo";
		$lmtrdayItem=$pdo->prepare($lmtrdaySql);
		$lmtrdayItem->bindValue(":trNo",$trNo->TR_no);
		$lmtrdayItem->execute();
		while ($lmtrdayRow=$lmtrdayItem->fetch(PDO::FETCH_ASSOC)){ //第幾天
		$str.="<li class='phonedayTour'>";
		$LMTR_day=$lmtrdayRow["LMTR_day"];
		$lmtrSql="SELECT * from lmtr where TR_no=:trNo and LMTR_day=:LMTR_day order by LMTR_order ASC";//找出符合行程編號的地標行程編號
		$lmtrItem=$pdo->prepare($lmtrSql);
		$lmtrItem->bindValue(":trNo",$trNo->TR_no);
		$lmtrItem->bindValue(":LMTR_day",$LMTR_day);
		$lmtrItem->execute();
		while($lmtrRow=$lmtrItem->fetch(PDO::FETCH_ASSOC)){  //該天的地標行程編號的地標編號
			$LM_no=$lmtrRow["LM_no"];
			$lmNameSql="SELECT * FROM lm where LM_no=:LM_no";
			$lmNameItem=$pdo->prepare($lmNameSql);
			$lmNameItem->bindValue(":LM_no",$LM_no);
			$lmNameItem->execute();
			$lmNameRow=$lmNameItem->fetch(PDO::FETCH_ASSOC);
			$str.="<span class='plBphoneDot'><div class='plBphoneName'>".$lmNameRow["LM_name"]."</div></span>";
			$str.="<span class='plBphoneLine'></span>";
		} //$lmtrRow
			$str=substr($str,0,-29);
			$str.="</li>";
		}//$lmtrdayRow
		echo $str;
		}//$trRow
		
	}else if($trNo->TR_type!=5){
		echo "error";
	}
} catch (PDOException $ex) {
	$ex->getLine();
	$ex->getMessage();
}
?>