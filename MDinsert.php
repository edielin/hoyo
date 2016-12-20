<?php
ob_start(); 
session_start();

$MEM_email = $_REQUEST["MEM_email"];
$MEM_psw = $_REQUEST["MEM_psw"];
$MEM_name = $_REQUEST["MEM_name"];


try{
	require_once('connectToHoyo.php');


	//如果姓名資料不為空字串的話,為註冊
	if($MEM_name!=''){
	
		$sql = 'select * from mem where MEM_email=:MEM_email';
		$reMem = $pdo->prepare($sql);
		$reMem->bindParam(":MEM_email",$MEM_email);
		$reMem->execute();
		$reRows = $reMem->fetch();

		if($reRows['MEM_email']==$MEM_email){
			echo '帳號重複';
			// return;
		}else{
			//啟動交易管理
			$pdo->beginTransaction();
			$sql_sign = "INSERT INTO mem(MEM_email,MEM_psw,MEM_name,MEM_phone,MEM_close) VALUES(:MEM_email, :MEM_psw, :MEM_name, '','0')";	
		
			$new_mem = $pdo->prepare($sql_sign);
			$new_mem->bindParam(":MEM_email",$MEM_email);
			$new_mem->bindParam(":MEM_psw",$MEM_psw);
			$new_mem->bindParam(":MEM_name",$MEM_name);
		
			$new_mem->execute();
			$MEM_no = $pdo -> lastInsertId();
			//確認交易
			$pdo->commit();

			$_SESSION["HOYO_memNo"] = $MEM_no;
			$_SESSION["HOYO_memEmail"] = $MEM_email;
			$_SESSION["HOYO_memPsw"] = $MEM_psw;
			$_SESSION["HOYO_memName"] = $MEM_name;
			$_SESSION["HOYO_memPhone"] = "";
			$_SESSION["HOYO_memImg"] = "images/member/mem_default.png";

			$data = '{"MEM_no":"'.$MEM_no.'","MEM_img":"images/member/mem_default.png","goto":"member.php"}';
			echo $data;
		}

	}elseif($MEM_name==''){//姓名資料空字串為登入
	
			$sql_login = "SELECT * FROM mem WHERE MEM_email=:MEM_email AND MEM_psw=:MEM_psw";
			$members = $pdo->prepare($sql_login);

			$members->bindParam(":MEM_email",$MEM_email);
			$members->bindParam(":MEM_psw",$MEM_psw);
			$members->execute();

			$memRow = $members->fetch(PDO::FETCH_ASSOC);
			if($memRow["MEM_email"]!=$MEM_email || $memRow["MEM_psw"]!=$MEM_psw){
				echo "帳密有誤";
				return;
			}else{
					$checkMEM = $memRow["MEM_close"];
					if($checkMEM==1){
						echo "close";
						return;
					}else{
						$_SESSION["HOYO_memNo"] = $memRow["MEM_no"];
						$_SESSION["HOYO_memEmail"] = $memRow["MEM_email"];
						$_SESSION["HOYO_memPsw"] = $memRow["MEM_psw"];
						$_SESSION["HOYO_memName"] = $memRow["MEM_name"];
						$_SESSION["HOYO_memPhone"] = $memRow["MEM_phone"];
						$_SESSION["HOYO_memImg"] = $memRow["MEM_img"];

						$data = '{"MEM_email":"'.$memRow["MEM_email"].'","MEM_name":"'.$memRow["MEM_name"].'","MEM_img":"'.$memRow["MEM_img"].'","MEM_no":"'.$memRow["MEM_no"].'","goto":"member.php"}';
						echo $data;
					}
				}
		}
	
}catch(PDOException $ex){
	//放棄交易
	$pdo->rollBack();
	echo "連線失敗,原因 : ",$ex->getMessage(),"<br>";
	echo "行號 : ",$ex->getLine(),"<br>";
}

?>
