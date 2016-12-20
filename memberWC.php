<?php
ob_start(); 
session_start();

$memNo = $_SESSION["HOYO_memNo"] ;
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
	<link rel="stylesheet" type="text/css" href="css/member/memberWC.css">
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
		        <a  class="bread_active" href="#">遊記收藏</a>
		    </div>
		</section>
		<!-- 麵包屑end -->
		<div class="headerTitle">
	    	<h2 class="pH2">遊記收藏</h2>
	    </div>
		<div class="m_leftBox"><!-- 左邊	menu -->
			<div class="userImg" id="userImg">
				<!-- <img id="memImg" src="images/member/suwei.jpg"> -->
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
						<a href="memberfree.php" id="go_mem_LM">我的行程</a>
					</li>
					<li>
						<a href="memberW.php" id="go_mem_W">我的遊記</a>
					</li>
					<li>
						<a href="memberpack.php" id="go_mem_pack">行程收藏</a>
					</li>
					<li>
						<a href="memberWC.php" id="go_mem_WC" class="m_nav_active">遊記收藏</a>
					</li>
				</ul>	
			</div>
		</div>
		
		<div class="m_rightBox ch"><!-- 右邊程式編寫區塊 -->
<?php	
require_once('connectToHoyo.php');

// $sql = 'SELECT * FROM nc WHERE MEM_no=:MEM_no AND NC_isCollected=1 ORDER BY nc.NC_collectTime DESC';
$sql = 'SELECT * FROM nc JOIN note ON nc.NOTE_no=note.NOTE_no WHERE nc.MEM_no=:MEM_no AND nc.NC_isCollected=1 AND note.NOTE_close=0 ORDER BY nc.NC_collectTime DESC';
$ncData = $pdo->prepare($sql);
$ncData->bindValue(":MEM_no",$memNo);
$ncData->execute();

while($ncRow = $ncData->fetch(PDO::FETCH_ASSOC)){
	$noteNo = $ncRow['NOTE_no'];
	$note_sql = "SELECT * from note where NOTE_no=$noteNo";
	$noteData = $pdo->query($note_sql);
	$noteRow = $noteData->fetch(PDO::FETCH_ASSOC);

	$noteNo = $noteRow['NOTE_no'];
 	$tr_sql = "SELECT * from tr where NOTE_no=$noteNo";	
 	$trData = $pdo->query($tr_sql);
 	$trRow = $trData->fetch( PDO::FETCH_ASSOC);
 	$trNo = $trRow['TR_no'];	

 	$lmtr_sql = "SELECT * from lmtr where TR_no=$trNo order by LMTR_day desc limit 1";
 	$lmtrData = $pdo->query($lmtr_sql);
 	$lmtrRow = $lmtrData->fetch( PDO::FETCH_ASSOC);
 	$lmNo = $lmtrRow['LM_no'];
 	
 	
 	$lm_sql = "SELECT * from lm where LM_no=$lmNo";
	$lmData = $pdo->query($lm_sql);
	$lmRow = $lmData->fetch( PDO::FETCH_ASSOC);
 	

 	$branch = '';
 	if($lmRow['LM_branch']=='內灣線'){
 		$branch='neiWan_tab';
 	}
 	if($lmRow['LM_branch']=='平溪線'){
 		$branch='pingC_tab';
 	}
 	if($lmRow['LM_branch']=='集集線'){
 		$branch='gigi_tab';
 	}
 	if($lmRow['LM_branch']=='阿里山線'){
 		$branch='ali_tab';
 	}

	echo	'<div class="mWC_bigBox">
				<div class="mWC_delete"><i class="icon-trash"></i></div>
				<div class="mWC_box">
					<input type="hidden" value="'.$noteRow['NOTE_no'].'">
					<div class="mWC_look">查看詳細</div>
					<div class="mWC_tabBox">
						<div class="line_tab '.$branch.'">'.$lmRow['LM_branch'].'</div>
						<div class="mWC_imgBox">
							<img src="images/notewrite/'.$noteRow['NOTE_mainimg'].'">
						</div>
					</div>
					<div class="mWC_txtBox">
						<p class="mWC_day"><span>'.$lmtrRow['LMTR_day'].'</span>天</p>
						<p class="mWC_title">'.$noteRow['NOTE_title'].'</p>
						<p class="mWC_lorem">'.$noteRow['NOTE_description'].'</p>
					</div>
					<div class="clearFix"></div>
				</div>
			</div>';
	}
?>	

			<!-- 每頁最多6筆遊記資料,超過6筆就出現分頁1234那個 -->
			<div class="clearFix"></div>
	
			<!-- 分頁放這邊,款式同遊記頁面的 -->
		</div>
	
	
	
		<div class="clearFix"></div>
	</div>
</div>
	
	<!-- 頁尾 -->
		<footer class="ch" id="hoyo_footer">
			HO YO 好遊 | 鐵路支線任你遊
		</footer>
</div>


<script>

////// 有登入才能進來的頁面 //////
	var storage = sessionStorage;
	if(!storage['MEM_email']){
		location.href ='memlogin.php';	
	}
////// 有登入才能進來的頁面 //////




/////////////// 按下刪除 ////////////////////
	$('.mWC_delete').click(function(){
		var noteNo = $(this).parent().find('input').val();
		var cancelFavW = {'NOTE_no':noteNo};
		$.post('MEM_cancelFavW.php',cancelFavW);

		$(this).parent().find('.mWC_box').css('transform','scale(0)');

		$(this).animate({'opacity':'0'},700,
						 function(){
						 	$(this).remove();
						 });

		$(this).parent('.mWC_bigBox').delay(700).animate({'width':'0'},700,
														 function(){
															$(this).remove()
														 });	
	})
/////////////// 按下刪除 over ////////////////////




/////////////// 按下詳細 ////////////////////
	$('.mWC_look').click(function(){
		var noteNo = $(this).parent().find('input').val();

		location.href = "Wdetail.php?NOTE_no="+noteNo;	
	});
/////////////// 按下詳細 over ///////////////
</script>


</body>
</html>