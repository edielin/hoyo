<?php
ob_start();
session_start();
	if(isset($_REQUEST['bButton'])===true){  //登入時
		try {
			require_once "connectToHoyo.php";
			$sql="select * from mg where MG_email=:MG_email and MG_psw=:MG_psw";
			$products=$pdo->prepare($sql);
			$products->bindValue(":MG_email",$_REQUEST["bEmail"]);
			$products->bindValue(":MG_psw",$_REQUEST["bPassword"]);
			$products->execute();
			if($products->rowCount()!=0){
				$prodrow=$products->fetch(PDO::FETCH_ASSOC);
				$_SESSION["MG_email"]=$prodrow["MG_email"];
				$_SESSION["MG_psw"]=$prodrow["MG_psw"];
				$_SESSION["MG_name"]=$prodrow["MG_name"];
				header("location:backendMem.php");
			}else{
				echo "<h4 style='text-align:center;'>帳號密碼錯誤,<a href='backendLogin.php'>請重新登入</a></h4>";

			}
		} catch (PDOException $ex) {
			echo "資料庫操作失敗,原因：",$ex->getMessage(),"<br>";
			echo "行號：",$ex->getLine(),"<br>";
		}
	}else if(isset($_REQUEST['logOutbtn'])===true){   //按下登出件時
			session_destroy();
			header("location:backendLogin.php");
	}

?>