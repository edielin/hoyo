<?php
ob_start(); 
session_start();

$memNo = $_SESSION["HOYO_memNo"] ;
$memEmail = $_SESSION["HOYO_memEmail"];
$memPsw = $_SESSION["HOYO_memPsw"];
$memName = $_SESSION["HOYO_memName"];
$memPhone = $_SESSION["HOYO_memPhone"];
$memImg = $_SESSION["HOYO_memImg"];

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<!-- 

	*** 學生作品,無任何商業用途 ***

	-->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta charset="UTF-8">
	<title>HO YO 好遊 | 會員專區</title>
	<link rel="icon" type="image/gif" href="favicon.ico">
	<link rel="stylesheet" type="text/css" href="css/CSS_reset.css">
	<link rel="stylesheet" type="text/css" href="css/member/memberdata.css">
	<link rel="stylesheet" type="text/css" href="css/hoyo_nav.css">
	<link rel="stylesheet" type="text/css" href="css/fontello.css">
	<script src="js/jquery.min.js"></script>	
</head>
<body>

<div id="hoyo_wrapper">
	<header id="hoyo_header">
		<?php include "hoyo_nav.php"; ?>
	</header>
			
	<!-- ============================================= -->
<div id="hoyo_content">
	<div id="memdata" class="ch">
		<!--麵包屑start-->
		<section class="breadcrumb">
		    <div class="container">
		        <a href="index.php">首頁</a> &gt; <a href="member.php">會員專區</a> &gt; 
		        <a  class="bread_active" href="#">會員資料修改</a>
		    </div>
		</section>
		<!-- 麵包屑end -->
		<div class="headerTitle">
	    	<h2 class="pH2">會員基本資料</h2>
	    </div>
		<div class="m_leftBox"><!-- 左邊	menu -->
			<div class="userImg" id="userImg">
				<!-- <img id="memImg" src="images/member/suwei.jpg"> -->
				<img id="memImg" src=" <?php echo $memImg; ?> ">
			</div>
			<div class="m_nav">	
				<ul>
					<li>
						<a href="memberdata.php" class="m_nav_active">會員資料修改</a>
					</li>
					<li>
						<a href="memberLM.php">新增推薦地標</a>
					</li>
					<li>
						<a href="memberfree.php">我的行程</a>
					</li>
					<li>
						<a href="memberW.php">我的遊記</a>
					</li>
					<li>
						<a href="memberpack.php">行程收藏</a>
					</li>
					<li>
						<a href="memberWC.php">遊記收藏</a>
					</li>
				</ul>	
			</div>
		</div>
		
		<div class="m_rightBox ch"><!-- 右邊程式編寫區塊 -->
			<form action="MDupdate.php" method="post" enctype="multipart/form-data">
				<!-- <input type="hidden" name="MAX_FILE_SIZE" value="204800"> -->
				<div class="md_row">
					<label for="md_MEM_email">帳 號 ( 不可變更 )</label>
					<div class="md_inputBox">
						<i class="md_icon icon-mail-alt"></i>
<!-- 						<input type="email" name="MEM_email" id="md_MEM_email" value="C1600433@gmail.com" disabled> -->
						<input type="email" name="MEM_email" id="md_MEM_email" value=" <?php echo $memEmail; ?> " disabled>
					</div>
				</div>
				<div class="md_row">
					<label for="md_MEM_psw" class="md_required">密碼</label>
					<div class="md_inputBox">
						<i class="md_icon icon-star"></i>
						<input type="password" name="MEM_psw" value="<?php echo $memPsw; ?>" id="md_MEM_psw" maxlength="8" minlength="4" required>
					</div>
				</div>
				<div class="md_row">
					<label for="md_MEM_psw_confirm" class="md_required">欲更換密碼( 4 ~ 8 個字 )</label>
					<div class="md_inputBox">
						<i class="md_icon icon-star-empty"></i>
						<input type="password" name="MEM_psw_confirm" value="" placeholder="如不更換請輸入原先密碼" id="md_MEM_psw_confirm" maxlength="8" minlength="4" required>
					</div>
				</div>
				<div class="md_row">
					<label for="md_MEM_name" class="md_required">暱 稱</label>
					<div class="md_inputBox">
						<i class="md_icon icon-user"></i>
						<input type="text" name="MEM_name" id="md_MEM_name" value="<?php echo $memName; ?>" required placeholder="( 最多 8 個字 )" maxlength="8">
					</div>
				</div>
	
				<div class="md_row">
					<label for="md_MEM_phone">電 話</label>
					<div class="md_inputBox">
						<i class="md_icon icon-phone"></i>
						<input type="text" name="MEM_phone" id="md_MEM_phone" value="<?php echo $memPhone; ?>" maxlength="10" minlength="9" placeholder="例: 0955669487">
					</div>
				</div>
				<div class="md_row">
					<label for="md_MEM_img">更換顯示圖片( 200KB 以下 )</label>
					<div class="md_inputBox">
						<i class="md_icon icon-camera"></i>
						<input type="file" name="MEM_img" id="md_MEM_img">
						<label for="md_MEM_img" id="md_label_file">選擇檔案</label>
					</div>
				</div>
				<div class="md_row">
					<input type="submit" value="送出修改" id="md_submit">
				</div>
			</form> 
		</div>
		<div class="clearFix"></div>
	</div>
</div>
	<!-- 頁尾 -->
	<footer class="ch" id="hoyo_footer">
		HO YO 好遊 | 鐵路支線任你遊
	</footer>
</div>
</body>
</html>
<script>
	var storage = sessionStorage;
	if(!storage['MEM_email']){
		location.href ='memlogin.php';	
	}

	if(storage['MEM_email']=="hoyoTest@gmail.com"){
		alert('體驗帳號不可修改資料!');
		$('#hoyo_content input').attr('disabled','disabled');
	}
</script>
<script> //memberdata.js

	var memPsw = $('#md_MEM_psw').val(); // 先抓本來的密碼
	

	$('#md_MEM_img').change(function(){
		// console.log('change');
		if(this.files){
			// console.log('dsdsds');
			var fileName = this.files[0].name;
			$('#md_label_file').text(fileName);
		}
	});


	$('#md_submit').click(function(event){
		var memPswCheck = $('#md_MEM_psw').val();
		var memPhoneCheck = $('#md_MEM_phone').val();
		var memImg = document.getElementById('md_MEM_img').files[0];

		if(memPswCheck!=memPsw){
			event.preventDefault();
			alert('密碼與原先密碼不同 !');
		}

		if(memPhoneCheck!=null && isNaN(memPhoneCheck)==true){
			event.preventDefault();
			alert('電話格式有誤 !');
		}

		if(memImg.size >= 204800 ){
			event.preventDefault();
			alert('圖片檔案太大(勿大於200KB)\n請重新選擇圖片');
		}
	});


	$('i.icon-camera').click(function(){
		$('#md_MEM_img').click();
	});
</script>