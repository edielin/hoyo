<?php
ob_start();
session_start();

$memNo = $_SESSION["HOYO_memNo"] ;
$memEmail = $_SESSION["HOYO_memEmail"];
$memNewPsw = $_REQUEST['MEM_psw_confirm'];
$memNewName = $_REQUEST['MEM_name'];
$memNewPhone = $_REQUEST['MEM_phone'];

try{
	require_once('connectToHoyo.php');

	if(file_exists('images')===false){	// 不管有沒有傳圖片都先確認有無圖片資料夾
		mkdir('images');
	}

	if(file_exists('images/member')===false){	// 不管有沒有傳圖片都先確認有無圖片資料夾
		mkdir('images/member');
	}

	switch($_FILES['MEM_img']['error']){
		case 0: 	//圖片上傳成功
			$newMemImg = mb_convert_encoding($_FILES['MEM_img']['name'],'big5','utf8');
			$from = $_FILES['MEM_img']['tmp_name'];
			$to = 'images/member/'.$memNo.$newMemImg;
			$newMemImgName =  mb_convert_encoding($_FILES['MEM_img']['name'],'utf8','auto');
			copy($from,$to);

			$sql = 'UPDATE mem SET MEM_psw=:memNewPsw,MEM_name=:memNewName,MEM_phone=:memNewPhone,MEM_img=:memNewImg WHERE MEM_email=:MEM_email';

			$newMemData = $pdo->prepare($sql);
			$newMemData->bindValue(':MEM_email',$memEmail);
			$newMemData->bindValue(':memNewPsw',$memNewPsw);
			$newMemData->bindValue(':memNewName',$memNewName);
			$newMemData->bindValue(':memNewPhone',$memNewPhone);
			$newMemData->bindValue(':memNewImg','images/member/'.$memNo.$newMemImgName);

			$newMemData->execute();

			$_SESSION["HOYO_memPsw"] = $memNewPsw;
			$_SESSION["HOYO_memName"] = $memNewName;
			$_SESSION["HOYO_memPhone"] = $memNewPhone;
			$_SESSION["HOYO_memImg"] = 'images/member/'.$memNo.$newMemImgName;

			echo "<script>alert('資料更新成功 !');history.go(-1);</script>";
			break;

		case 4:		//沒有上傳圖片 
			$sql = 'UPDATE mem SET MEM_psw=:memNewPsw,MEM_name=:memNewName,MEM_phone=:memNewPhone WHERE MEM_email=:MEM_email';

			$newMemData = $pdo->prepare($sql);
			$newMemData->bindValue(':MEM_email',$memEmail);
			$newMemData->bindValue(':memNewPsw',$memNewPsw);
			$newMemData->bindValue(':memNewName',$memNewName);
			$newMemData->bindValue(':memNewPhone',$memNewPhone);

			$newMemData->execute();

			$_SESSION["HOYO_memPsw"] = $memNewPsw;
			$_SESSION["HOYO_memName"] = $memNewName;
			$_SESSION["HOYO_memPhone"] = $memNewPhone;

			echo "<script>alert('資料更新成功 !');history.go(-1);</script>";
			break;

		default:
			echo "<script>alert('圖片上傳發生錯誤\n請重新上傳');history.go(-1);</script>";
	}  
	// switch($_FILES['MEM_img']['error'])

}catch(PDOException $ex){
	echo "連線失敗,原因 : ",$ex->getMessage(),"<br>";
	echo "行號 : ",$ex->getLine(),"<br>";
}

?>

