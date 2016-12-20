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
	<link rel="stylesheet" type="text/css" href="css/member/member.css">
	<link rel="stylesheet" type="text/css" href="css/hoyo_nav.css">
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
			        <a href="index.php">首頁</a> &gt; <a class="bread_active" href="#">會員專區</a>
			    </div>
			</section>
			<!-- 麵包屑end -->
			<div class="headerTitle">
		    	<h2 class="pH2">會員專區</h2>
		    </div>
			<div class="m_leftBox"><!-- 左邊	menu -->
				<div class="userImg" id="userImg">
					<img id="memImg" src=" <?php echo $memImg; ?> ">
				</div>
				<div class="m_nav">	
					<ul>
						<li>
							<a href="memberdata.php" id="go_mem_data">會員資料修改</a>
						</li>
						<li>
							<a href="memberLM.php" id="go_mem_LM">新增推薦地標</a>
						</li>
						<li>
							<a href="memberfree.php" id="go_mem_free">我的行程</a>
						</li>
						<li>
							<a href="memberW.php" id="go_mem_W">我的遊記</a>
						</li>
						<li>
							<a href="memberpack.php" id="go_mem_pack">行程收藏</a>
						</li>
						<li>
							<a href="memberWC.php" id="go_mem_WC">遊記收藏</a>
						</li>
					</ul>	
				</div>
			</div>
			
			<div class="m_rightBox"><!-- 右邊程式編寫區塊 -->
				<p class="m_color">Hello!<br>『 <span id="m_memName"><?php echo $memName; ?></span> 』你好,歡迎進入好遊會員 :)</p>
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
</script>
