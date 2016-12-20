<!DOCTYPE html>
<html lang="en">
<head>
	<!-- 

	*** 學生作品,無任何商業用途 ***

	-->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta charset="UTF-8">
	<title>HO YO 好遊 | 登入 / 註冊</title>
	<link rel="icon" type="image/gif" href="favicon.ico">
	<link rel="stylesheet" type="text/css" href="css/CSS_reset.css">
	<link rel="stylesheet" type="text/css" href="css/hoyo_nav.css">
	<link rel="stylesheet" type="text/css" href="css/memlogin.css">
	<script src="js/jquery.min.js"></script>
</head>
<body id="mg_body" class="ch en">

<header>
	<?php include "hoyo_nav.php"; ?>
</header>

<!-- 會員登入/註冊表單 開始 -->
<form id="mg_form" name="mg_form">
	<div id="mg_container" class="mg_placeholder">

		<div id="mg_cancelBtn"></div><!-- 右上叉叉 回到上一頁 -->

		<h2 id="mg_title">會員登入</h2>

		<input type="email" name="MEM_email" id="MEM_email" placeholder="* 帳 號 ( Email )">

		<input type="password" name="MEM_psw" id="MEM_psw" placeholder="* 密 碼 ( 4 ~ 8 個字 )">
		
		<div class="mg_login_hide" id="mg_signUp_show"> 
			<input type="password" id="memPswConfirm"  placeholder="* 確 認 密 碼 ( 4 ~ 8 個字 )">

			<input type="text" name="MEM_name" id="MEM_name" placeholder="* 暱稱 ( 最多 8 個字 )" class="ch">
		</div><!-- mg_login_hide mg_signUp_show -->

		<button id="btn_login_signUp" class="ch">確認登入</button>
		
		<div id="btn_change">按此註冊帳號</div>	

	</div><!-- mg_container -->

</form><!-- 會員登入/註冊表單 結束 -->

</div>
</body>
</html>
<script src="js/memlogin/memlogin.js"></script>

