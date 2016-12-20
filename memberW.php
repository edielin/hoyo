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
	<link rel="stylesheet" type="text/css" href="css/member/memberW.css">
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
		<section class="breadcrumb" class="ch">
		    <div class="container">
		        <a href="index.php">首頁</a> &gt; <a href="member.php">會員專區</a> &gt; 
		        <a  class="bread_active" href="#">我的遊記</a>
		    </div>
		</section>
		<!-- 麵包屑end -->
		<div class="headerTitle">
	    	<h2 class="pH2">我的遊記</h2>
	    	 <div class="w_addNoteBtn">
	            <a href="memberWD.php">我要寫遊記</a>
	            <i class="icon-plus"></i>
	        </div>
	        <div class="clearFix"></div>
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
						<a href="memberW.php" id="go_mem_W" class="m_nav_active">我的遊記</a>
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
		
		<div class="m_rightBox ch"><!-- 右邊程式編寫區塊 -->

<?php
require_once('connectToHoyo.php');

$sql = 'SELECT * FROM note WHERE MEM_no=:MEM_no AND NOTE_close=0 AND NOTE_no>1 ORDER BY NOTE_createDate DESC';
$noteData = $pdo->prepare($sql);
$noteData->bindParam(":MEM_no",$memNo);
$noteData->execute();

 while($noteRow = $noteData->fetch(PDO::FETCH_ASSOC)){
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


	echo	'<div class="mW_bigBox">
				<div class="mW_delete"><i class="icon-trash"></i></div>
				<div class="mW_box">
					<input type="hidden" value="'.$noteRow['NOTE_no'].'">
					<div class="mW_look">查看詳細</div>
					<!-- div class="mW_edit">再次編輯</div> -->
					<div class="mW_tabBox">
						<div class="line_tab '.$branch.'">'.$lmRow['LM_branch'].'</div>
						<div class="mW_imgBox">
							<img src="images/notewrite/'.$noteRow['NOTE_mainimg'].'">
						</div>
					</div>
					<div class="mW_txtBox">
						<p class="mW_day"><span>'.$lmtrRow['LMTR_day'].'</span>天</p>
						<p class="mW_title">'.$noteRow['NOTE_title'].'</p>
						<p class="mW_lorem">'.$noteRow['NOTE_description'].'</p>
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
	$('.mW_delete').click(function(){
		var answer = confirm('確定要刪除此篇遊記嗎?')
		if(answer==true){
			var noteNo = $(this).parent().find('input').val();
			var deleteWrite = {'NOTE_no':noteNo};
			$.post('MEM_deleteSelfW.php',deleteWrite);

			$(this).parent().find('.mW_box').css('transform','scale(0)');

			$(this).animate({'opacity':'0'},700,
							 function(){
							 	$(this).remove()
							 });

			$(this).parent('.mW_bigBox').delay(700).animate({'width':'0'},700,
															 function(){
																$(this).remove()
															 });
		}
	})
/////////////// 按下刪除 over ///////////////




/////////////// 按下詳細 ////////////////////
	$('.mW_look').click(function(){
		var noteNo = $(this).parent().find('input').val();
		// storage.setItem('noteDetail_note_no',noteNo);
		location.href = "Wdetail.php?NOTE_no="+noteNo;	
	});
/////////////// 按下詳細 over ///////////////



/////////////// 按下編輯(暫無) ////////////////////
	$('.mW_edit').click(function(){
		var noteNo = $(this).parent().find('input').val();
		// storage.setItem('noteDetail_note_no',noteNo);
		// location.href = 'Wdetail.php';	
	});
/////////////// 按下編輯 over ///////////////

</script>

</body>
</html>