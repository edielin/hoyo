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
	<link rel="stylesheet" type="text/css" href="css/member/memberfree.css">
	<link rel="stylesheet" type="text/css" href="css/hoyo_nav.css">
	<link rel="stylesheet" type="text/css" href="css/fontello.css">
	<script src="js/jquery.min.js"></script>
	<script src="js/member/memberfree.js"></script>
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
		        <a  class="bread_active" href="#">我的行程</a>
		    </div>
		</section>
		<!-- 麵包屑end -->
		<div class="headerTitle">
	    	<h2 class="pH2">我的行程</h2>
	    </div>
		<div class="m_leftBox"><!-- 左邊	menu -->
			<div class="userImg" id="userImg">
				<img id="memImg" src=" <?php echo $memImg; ?> ">
			</div>
			<div class="m_nav">	
				<ul>
					<li>
						<a href="memberdata.php">會員資料修改</a>
					</li>
					<li>
						<a href="memberLM.php">新增推薦地標</a>
					</li>
					<li>
						<a href="memberfree.php" class="m_nav_active">我的行程</a>
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

<?php
require_once('connectToHoyo.php');
$sql = "SELECT * FROM tr WHERE MEM_no=:MEM_no and TR_close=0 ORDER BY TR_modifyDate DESC";
$trData = $pdo->prepare($sql);
$trData->bindValue(":MEM_no",$memNo);
$trData->execute();

while($trRow = $trData->fetch(PDO::FETCH_ASSOC)){
	$trNo = $trRow['TR_no']; //此行程編號
	$trName = $trRow['TR_name']; //此行程名稱

	$lmtr_sql = "SELECT * from lmtr where TR_no=$trNo order by LMTR_day desc limit 1"; //抓最大天數
	$lmtrData = $pdo->query($lmtr_sql);
 	$lmtrRow = $lmtrData->fetch(PDO::FETCH_ASSOC);
 	$lmtrDayNum = $lmtrRow['LMTR_day']; //最大天數(此行程顯示的天數)


 	$lmtr_sql = "SELECT * FROM lmtr JOIN lm ON lmtr.LM_no = lm.LM_no WHERE lmtr.TR_no=$trNo AND lm.LM_type='f_landscape' ORDER BY LMTR_day ASC LIMIT 1"; //抓行程第一筆為景點地標的
	$lmtrData = $pdo->query($lmtr_sql);
 	if($lmtrRow = $lmtrData->fetch(PDO::FETCH_ASSOC)){ 
	  	$lmNo = $lmtrRow['LM_no']; // 行程第一筆的景點地標編號(為了顯示圖片)	

		$lmImg = "images/LM/".$lmtrRow['LM_img01']; // 此行程的封面照(第一天第一筆的地標照片)

		$lm_sql = "SELECT * FROM lm WHERE LM_no=$lmNo";
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
		
 	}else{
	 	$lmtr_sql = "SELECT * from lmtr where TR_no=$trNo order by LMTR_day asc limit 1"; //抓第一天第一筆
		$lmtrData = $pdo->query($lmtr_sql);
	 	$lmtrRow = $lmtrData->fetch(PDO::FETCH_ASSOC);

	 	$lmNo = $lmtrRow['LM_no']; // 第一天第一筆的地標編號(為了顯示圖片)

	 	$lm_sql = "SELECT * FROM lm WHERE LM_no=$lmNo";
		$lmData = $pdo->query($lm_sql);
		$lmRow = $lmData->fetch( PDO::FETCH_ASSOC); 	

		$lmImg = "images/LM/".$lmRow['LM_img01']; // 此行程的封面照(第一天第一筆的地標照片)

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
 	}

	$lmtr_Day1 = "SELECT * FROM lmtr WHERE TR_no=$trNo AND LMTR_day = 1 ORDER BY LMTR_order ASC"; //抓此行程第一天的行程清單 
 	$lmtr_d1_data = $pdo->query($lmtr_Day1);

 	$day1_tr=""; //第一天的地標行程字串
 	while($lmtr_d1_row = $lmtr_d1_data->fetch(PDO::FETCH_ASSOC)){
 		$lmtr_d1_LM_no = $lmtr_d1_row['LM_no'];
 		$day1_sql = "SELECT * FROM lm where LM_no=$lmtr_d1_LM_no";

 		$day1_lm = $pdo->query($day1_sql);
 		$day1_lmNo = $day1_lm->fetch( PDO::FETCH_ASSOC);
 		$day1_tr.=$day1_lmNo['LM_name']." > ";
 	}

 	$day1_tr=substr($day1_tr,0,-3);

echo		'<div class="mW_bigBox">
				<div class="mW_delete"><i class="icon-trash"></i></div>
				<div class="mW_box">
					<input type="hidden" value="'.$trNo.'">
					<div class="mW_look">查看詳細</div>
					<div class="mW_edit">修改行程</div>
					<div class="mW_tabBox">
						<div class="line_tab '.$branch.'">'.$lmRow['LM_branch'].'</div>
						<div class="mW_imgBox">
							<img src="'.$lmImg.'">
						</div>
					</div>
					<div class="mW_txtBox">
						<p class="mW_day"><span>'.$lmtrDayNum.'</span>天</p>
						<p class="mW_title">'.$trName.'</p>
						<p class="mW_lorem">'.$day1_tr.'</p>
					</div>
					<div class="clearFix"></div>
				</div>
			</div>';
	}
?>			
	
		</div>
		<div class="clearFix"></div>
	</div>
	<!-- lightBox -->
		<div class="plightBox ch">
			<div class="plightBoxAll">
				<div class="pexit"><i class="icon-cancel"></i></div>
				<div class="plightBoxContent">
					<div class="plBImg">
						<div>
							<img src="">
						</div>
					</div>
					<div class="plBTitle">
						<h2></h2>
					</div>
					<ul class="pchangeDay">
					</ul>
					<div class="plBTour">	
						<ul class="plBdotA">
						</ul>
					</div>
					<ul class="phonechangeDay">
					</ul>
				</div>
				<!-- 手機端天數-->
				<!-- 手機端行程 -->
				<div class="plBphoneTour">
					<ul>
						<li class="phonedayTour">
						</li>
					</ul>
				</div>
			</div><!--plightBoxAll-->
		</div>
		<!-- lightBox結束--></div>
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
		var answer = confirm('確定要刪除此行程嗎?')
		if(answer==true){
			var trNo = $(this).parent().find('input').val();
			var closeTR = {'TR_no':trNo};
			$.post('MEM_closeTR.php',closeTR,function(data){console.log(data)});

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
	});
/////////////// 按下刪除 ////////////////////



/////////////// 按下修改 ////////////////////
$('.mW_edit').click(function(){
	var trNo = $(this).parent().find('input').val();
	

	storage.setItem('modify_myfree_by_TRno',trNo); //測試用
	location.href ='free.php';
});
/////////////// 按下修改 ////////////////////




/////////////// 按下詳細 ////////////////////
$('.mW_look').click(function(){
	var trNo = $(this).parent().find('input').val();
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				if(xhr.responseText=="error"){
					console.log("sever error");
				}else{
					$(".plBdotA").html(xhr.responseText);
					console.log(xhr.responseText);
				}
			}
		}
	}
	var showTR = {
		"TR_no":trNo,
		"TR_type":5
	};
	var data="TR_no="+JSON.stringify(showTR);
	var url="MEM_lightBox.php?";
	xhr.open("post",url,true);
	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	xhr.send(data);


	//PHONE
	var pxhr=new XMLHttpRequest();
	pxhr.onreadystatechange=function(){
		if(pxhr.readyState==4){
			if(pxhr.status==200){
				if(pxhr.responseText=="error"){
					console.log("sever error");
				}else{
					$(".plBphoneTour ul").html(pxhr.responseText);
					console.log(pxhr.responseText);
				}
			}
		}
	}
	
	var phoneshowTR = {
		"TR_no":trNo,
		"TR_type":5
	};
	var data="pTR_no="+JSON.stringify(phoneshowTR);
	var url="MEM_phonelightBox.php?";
	pxhr.open("post",url,true);
	pxhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	pxhr.send(data);

});
/////////////// 按下再次編輯 ////////////////////


</script>



</body>
</html>
