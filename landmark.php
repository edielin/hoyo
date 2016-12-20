<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>HO YO 好遊 | 地標介紹</title>
	<link rel="stylesheet" type="text/css" href="css/CSS_reset.css">
	<link rel="stylesheet" type="text/css" href="css/fontello.css">
	<link rel="icon" type="image/gif" href="favicon.ico">
	<link rel="stylesheet" type="text/css" href="css/hoyo_nav.css">
	<link rel="stylesheet" type="text/css" href="css/filters.css">
	<link rel="stylesheet" type="text/css" href="css/landmark/landmark.css">
	<link rel="stylesheet" type="text/css" href="css/LMcard.css">
	<script src="js/jquery-3.1.0.min.js"></script>
	<script src="js/landmark/gmaps.js"></script>
	<script src="http://maps.google.com/maps/api/js?key=AIzaSyBi7e8AiTyqWiFt9vlbGqsAzGyRhVWqCsk&sensor=true"></script>	

</head>
<body>


	<!-- 從資料庫引入所有地標卡, 並將地標卡存在 data_LMcards 裡面 -->
	<?php include 'import_LMcard.php';?>

	<!-- 地標卡簡介的燈箱效果 -->
	<div id="LC_container"></div>



	<header>
		<?php include 'hoyo_nav.php';?>
		<script>
			$(function(){
				$('#nav_mainList li:nth-child(4)').addClass('nav_active');
				$('#nav_hamberUl li:nth-child(3)').addClass('nav_active');
			});
		</script>
	</header>

<!-- 地標收藏包 -->
	<div id="wishList2">
		<img src="icon/wishList2.png" title="開始規劃行程吧!">
		<span id="wishQty2">0</span>
	</div>
	<div id="wishList_box" class="ch">
		<div class="wishListRow wishListRow_title">
			<div class="what_line">
				支　線
			</div>
			<div class="where_name">
				地標卡名稱
			</div>
		</div>
		<div id="wishListRow_box">

<!-- 			<div class="wishListRow">
					<div class="what_line">
						阿里山線
					</div>
					<div class="where_name">
						十分大大大大大瀑布
					</div>
			</div> -->
		</div>
	</div>
<!-- 地標收藏包結束 -->


<div class="LM_container LM_ch">


	<!-- 麵包屑 -->
	<section class="breadcrumb">
	    <div class="container">
	        <a href="index.php">首頁</a> &gt; <a class="bread_active" href="#">地標介紹</a>
	    </div>
	</section>
	<!-- 麵包屑 -->


	<section>
		<div class="container">
			<div class="headerTitle">
				<h2 class="pH2">地標介紹</h2>
				<div class="w_addNoteBtn" id="w_addNoteBtn">
		            <a href="#">我要新增地標</a>
		            <i class="icon-plus"></i>
	       		</div>
			</div>
		</div>

	</section>


	<section>
	<form>
		<div class="pextension filterFirst">
            <select name="pexDro" id="L_branch" class="pexDro drowStyle ch" style="background-image: url(icon/select_branch.png)">
				<option value="0" selected>內灣線</option>
				<option value="1">平溪線</option>
				<option value="2">集集線</option>
				<option value="3">阿里山線</option>
			</select>
		</div>	
		<div class="pdays filterNth ch">
         	<select name="pdaysDro" id="pdaysDro" class="pdaysDro drowStyle ch" style="background-image: url(icon/select_day.png)">
					<option value="新竹">新竹</option>
					<option value="北新竹">北新竹</option>
					<option value="千甲">千甲</option>
					<option value="新莊">新莊</option>
					<option value="竹中">竹中</option>
					<option value="上員">上員</option>
					<option value="榮華">榮華</option>
					<option value="竹東">竹東</option>
					<option value="橫山">橫山</option>
					<option value="九讚頭">九讚頭</option>
					<option value="合興">合興</option>
					<option value="富貴">富貴</option>
					<option value="內灣">內灣</option>
				</select>
		</div>	

		<div class="L_station_box">
				<!-- ============內灣各站點================= -->
				<div class="L_station" id="L_station_option1">

				    <input type="radio" name="L_station" id="L_station_1" checked>
					<label for="L_station_1">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>新竹</p>
						</div>
					</label>

				    <input type="radio" name="L_station" id="L_station_2">
					<label for="L_station_2">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>北新竹</p>
						</div>
					</label>

				    <input type="radio" name="L_station" id="L_station_3">
					<label for="L_station_3">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>千甲</p>
						</div>
					</label>
			
				    <input type="radio" name="L_station" id="L_station_4">
					<label for="L_station_4">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>新莊</p>
						</div>
					</label>

					<input type="radio" name="L_station" id="L_station_5">
					<label for="L_station_5">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>竹中</p>
						</div>
					</label>

					<input type="radio" name="L_station" id="L_station_6">
					<label for="L_station_6">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>上員</p>
						</div>
					</label>			

					<input type="radio" name="L_station" id="L_station_7">
					<label for="L_station_7">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>榮華</p>
						</div>
					</label>	

					<input type="radio" name="L_station" id="L_station_8">
					<label for="L_station_8">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>竹東</p>
						</div>
					</label>	

					<input type="radio" name="L_station" id="L_station_9">
					<label for="L_station_9">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>橫山</p>
						</div>
					</label>	

					<input type="radio" name="L_station" id="L_station_10">
					<label for="L_station_10">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>九讚頭</p>
						</div>
					</label>	

					<input type="radio" name="L_station" id="L_station_11">
					<label for="L_station_11">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>合興</p>
						</div>
					</label>	

					<input type="radio" name="L_station" id="L_station_12">
					<label for="L_station_12">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>富貴</p>
						</div>
					</label>	

					<input type="radio" name="L_station" id="L_station_13">
					<label for="L_station_13">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>內灣</p>
						</div>
					</label>	

				</div>
			<!-- ============平溪各站點================= -->	
				<div class="L_station" id="L_station_option2">

					<input type="radio" name="L_station" id="L_station_14">
					<label for="L_station_14">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>瑞芳</p>
						</div>
					</label>

					<input type="radio" name="L_station" id="L_station_15">
					<label for="L_station_15">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>猴硐</p>
						</div>
					</label>

					<input type="radio" name="L_station" id="L_station_16">
					<label for="L_station_16">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>三貂嶺</p>
						</div>
					</label>

					<input type="radio" name="L_station" id="L_station_17">
					<label for="L_station_17">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>大華</p>
						</div>
					</label>

					<input type="radio" name="L_station" id="L_station_18">
					<label for="L_station_18">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>十分</p>
						</div>
					</label>

					<input type="radio" name="L_station" id="L_station_19">
					<label for="L_station_19">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>望古</p>
						</div>
					</label>

					<input type="radio" name="L_station" id="L_station_20">
					<label for="L_station_20">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>嶺腳</p>
						</div>
					</label>

					<input type="radio" name="L_station" id="L_station_21">
					<label for="L_station_21">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>平溪</p>
						</div>
					</label>

				    <input type="radio" name="L_station" id="L_station_22">
					<label for="L_station_22">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>菁桐</p>
						</div>
					</label>

				</div>
			
				<!-- ============集集各站點================= -->
				<div class="L_station" id="L_station_option3">


					<input type="radio" name="L_station" id="L_station_23">
					<label for="L_station_23">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>二水</p>
						</div>
					</label>	

					<input type="radio" name="L_station" id="L_station_24">
					<label for="L_station_24">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>源泉</p>
						</div>
					</label>	

					<input type="radio" name="L_station" id="L_station_25">
					<label for="L_station_25">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>濁水</p>
						</div>
					</label>	

					<input type="radio" name="L_station" id="L_station_26">
					<label for="L_station_26">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>龍泉</p>
						</div>
					</label>	

					<input type="radio" name="L_station" id="L_station_27">
					<label for="L_station_27">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>集集</p>
						</div>
					</label>	

					<input type="radio" name="L_station" id="L_station_28">
					<label for="L_station_28">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>水里</p>
						</div>
					</label>	

					<input type="radio" name="L_station" id="L_station_29">
					<label for="L_station_29">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>車埕</p>
						</div>
					</label>	

				</div>

				<!-- ============阿里山各站點================= -->
				<div class="L_station" id="L_station_option4">

					<input type="radio" name="L_station" id="L_station_30">
					<label for="L_station_30">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>嘉義</p>
						</div>
					</label>	

					<input type="radio" name="L_station" id="L_station_31">
					<label for="L_station_31">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>北門</p>
						</div>
					</label>	

					<input type="radio" name="L_station" id="L_station_32">
					<label for="L_station_32">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>竹崎</p>
						</div>
					</label>	

					<input type="radio" name="L_station" id="L_station_33">
					<label for="L_station_33">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>交力坪</p>
						</div>
					</label>	

					<input type="radio" name="L_station" id="L_station_34">
					<label for="L_station_34">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>奮起湖</p>
						</div>
					</label>	

					<input type="radio" name="L_station" id="L_station_35">
					<label for="L_station_35">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>神木</p>
						</div>
					</label>

					<input type="radio" name="L_station" id="L_station_36">
					<label for="L_station_36">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>阿里山</p>
						</div>
					</label>


					<input type="radio" name="L_station" id="L_station_37">
					<label for="L_station_37">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>沼平</p>
						</div>
					</label>

					<input type="radio" name="L_station" id="L_station_38">
					<label for="L_station_38">		
						<div class="L_station_a">
							<div class="L_station_check">
								<div class="L_station_checkPoint"></div>
							</div>
							<p>祝山</p>
						</div>
					</label>
				</div>	
			</div> <!-- end of L_station_box -->
			<div class="clearFix"></div>
		</form>	
	</section>

	<section class="L_card">
			<div class="L_type">
				<p class="L_typeTxt">
					<i class="icon-landmark"></i>
					<span>景 點</span>
				</p>
			</div>
			<div class="L_type_line"></div>
	<!-- 		<div class="L_type_shortline"></div>	 -->	

					<!-- ============地標卡================= -->		
			<div class="cardwrapper landscape"></div> 			
	</section>



	<section class="L_card">
			<div class="L_type">
				<p class="L_typeTxt">
					<i class="icon-eat"></i>
					<span>美 食</span>
				</p>
			</div>
			<div class="L_type_line"></div>
					<!-- ============地標卡================= -->			
			<div class="cardwrapper eat"></div>     
		
	</section>

	<section class="L_card">
			<div class="L_type">
				<p class="L_typeTxt">
					<i class="icon-stay"></i>
					<span>住 宿</span>
				</p>
			</div>
			<div class="L_type_line"></div>
					<!-- ============地標卡================= -->			
			<div class="cardwrapper stay"></div>   	
	</section>
	<section class="L_card">
			<div class="L_type">
				<p class="L_typeTxt">
					<i class="icon-activity"></i>
					<span>活 動</span>
				</p>
			</div>
			<div class="L_type_line"></div>
					<!-- ============地標卡================= -->				
			<div class="cardwrapper activity"></div>   	
	</section>

</div>
	<footer class="ch">HO YO 好遊 | 鐵路支線任你遊</footer>



	<script src="js/landmark/landmark_session.js"></script>
	<script src="js/landmark/landmark.js"></script>



</body>
</html>
<script>
var storage = sessionStorage;
	$('#wishList2').click(function(){
		var listNum = document.getElementById('wishQty2').innerText;
		if(listNum==0){
			alert('還沒有將地標卡片加入願望清單裡噢!');
		}else{
			storage.setItem('free_move_to_step',3);
			location.href='free.php';
		}
	});
</script>