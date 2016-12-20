<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>HO YO 好遊 | 新增地標</title>
	<link rel="stylesheet" type="text/css" href="css/CSS_reset.css">
	<link rel="stylesheet" type="text/css" href="css/fontello.css">
	<link rel="icon" type="image/gif" href="favicon.ico">
<!-- 	<link rel="stylesheet" type="text/css" href="css/common.css"> -->
	<link rel="stylesheet" type="text/css" href="css/hoyo_nav.css">
	<link rel="stylesheet" type="text/css" href="css/filters.css">	
	<link rel="stylesheet" type="text/css" href="css/memberLM/memberLM.css">
	<script src="js/jquery-3.1.0.min.js"></script>
	<script src="js/jquery-ui.min.js"></script>
<!-- 	<script src="js/hoyo_nav.js"></script> -->
	<script src="js/memberLM/memberLM.js"></script>

	<script>
		var storage = sessionStorage;
			if(!storage['MEM_email']){
			location.href ='landmark.php';	
		}

		$(document).ready(function(){
			$('.input_all').focus(function(){
				$(this)
				// .css('background-position','0px 0px');
				.animate({'background-position-x':'10px'},1000,'easeOutBounce')
			});
			$('.input_all').blur(function(){
				$(this)
				.animate({'background-position-x':'-40px'},500,'easeInBack')		
			});	

			//radio 被check
			$('.ML_isCheck').click(function(){
				$('.ML_isCheck').not(this).removeClass('LM_gray');			
				$(this).addClass('LM_gray');

			});
		});
	</script>




<head>
<body>

<div id="hoyo_wrapper">
	<header id="hoyo_header">
		<?php include 'hoyo_nav.php';?>
	</header>
	
	
<div id="hoyo_content">
		
		<div class="ML_container LM_ch">
		
		
		<!-- 麵包屑 -->
		<section class="breadcrumb">
		    <div class="container">
		        <a href="index.php">首頁</a> &gt; <a href="member.php">會員專區</a>
				&gt; <a class="bread_active" href="#">新增地標</a>    
		    </div>
		</section>
		<!-- 麵包屑 -->
		
		
		
		
		
		<section>
			<div class="container">
				<div class="headerTitle">
					<h2 class="pH2">新增地標</h2>
				</div>
		
			</div>
		
		</section>
		
		<section class="ml_w">
		
			<form id="myForm" action="createLM.php" method="post" enctype="multipart/form-data">
		
				<div class="pextension filterFirst">
		 				<select name="pexDro" id="L_branch" class="pexDro drowStyle ch" style="background-image: url(icon/mem_select_branch.png)">
						<option value="內灣線">內灣線</option>
						<option value="平溪線">平溪線</option>
						<option value="集集線">集集線</option>
						<option value="阿里山線">阿里山線</option>
					</select>
				</div>	
		
				<div class="pdays filterNth ch">
		         		<select name="pdaysDro" id="pdaysDro" class="pdaysDro drowStyle ch" style="background-image: url(icon/mem_select_station.png)">
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
				
		
				<div class="ml_type">
					<div class="ml_type_T">分類</div>
					<div class="ml_type_C">
						<label class="ML_isCheck LM_gray">
							景點<input class="landscape_btn" type="radio" name="LM_type" value="f_landscape" checked>
						</label>
						<label class="ML_isCheck">
							美食<input class="eat_btn" type="radio" name="LM_type" value="f_eat">
						</label>
						<label class="ML_isCheck">
							住宿<input class="stay_btn" type="radio" name="LM_type" value="f_stay">
						</label>				
					</div>
				</div>
		
				<div class="ml_name">
					<input type="text" name="LM_name" maxlength="8" id="LM_name" placeholder="＊ 地標名稱" class="input_all">
				</div>
			
		
		
		
				<div class="out1">
					<div class="ML_phone">
						<input type="text" name="LM_phone" id="LM_phone" placeholder="電話" class="input_all">
					</div>
					<div class="ML_cellphone pl9">
						<input type="text" name="LM_cellphone" id="LM_cellphone" placeholder="手機" class="input_all">
					</div>				
					<div class="ML_opentime pl9">
						<input type="text" name="LM_opentime" id="LM_opentime" placeholder="營業時間" class="input_all">
					</div>
				</div>
		
		
		
				<div class="ML_address">
					<input type="text" name="LM_address" id="LM_address" placeholder="* 地址" class="input_all">
				</div>
		
		
		
				<div class="clear_wrapper clear_wrapper_1">
		<!-- 				<div class="ml_stay">
						<div class="ml_stay_T">住宿平均消費</div>
					</div>			
					<div class="ml_stay_C">
						<div class="ml_stay_item">
							<input type="number" name="LM_staycost1" id="LM_avgcost1" placeholder="1人" class="ml_stay_all input_all ml9">
						</div>
						<div class="ml_stay_item">			
							<input type="number" name="LM_staycost2" id="LM_avgcost2" placeholder="2人" class="ml_stay_all input_all ml9">
						</div>	
						<div class="ml_stay_item">			
							<input type="number" name="LM_staycost4" id="LM_avgcost4" placeholder="4人" class="ml_stay_all input_all ml9">
						</div>
						<div class="ml_stay_item">
							<input type="number" name="LM_staycostadd1" id="LM_staycostadd1" placeholder="加床/人" class="ml_stay_all input_all ml9">
						</div>	
					</div> -->
				</div>
		
				<div class="clear_wrapper clear_wrapper_2">
		<!-- 				<div class="ml_eat">
						<div class="ml_eat_T">餐廳平均消費</div>
					</div>
					<div class="ml_eat_C">
						<input type="number" name="LM_avgcost" id="LM_avgcost" placeholder="每人平均消費" class="input_all ml9">
					</div> -->
				</div>
		
		
		
				<div class="clear_wrapper clear_wrapper_3">
					<div class="ml_ticket">
						<div class="ml_ticket_T">景點消費</div>
					</div>
					<div class="ml_ticket_C">
						<div class="ML_adultcost">
							<input type="number" name="LM_adultcost" id="LM_adultcost" placeholder="大人消費" class="input_all ml9">
						</div>
						<div class="ML_childcost">
							<input type="number" name="LM_childcost" id="LM_childcost" placeholder="小孩消費" class="input_all ml9">
						</div>	
					</div>
				</div>
		
			
		
				
				<div class="longi">
					<div class="ml_long">
						<div class="ml_long_T">經緯度</div>
					</div>
					<div class="ml_long_C">
						<div class="ML_adultcost">
							<input type="number" name="LM_longitude" id="LM_longitude" placeholder="經度" class="input_all ml9" step="0.000001">
						</div>
						<div class="ML_childcost">
							<input type="number" name="LM_latitude" id="LM_latitude" placeholder="緯度" class="input_all ml9" step="0.000001">
						</div>	
					</div>
				</div>
		
		
		
				<br>
				<div class="ml_textarea">
					<div class="ml_textarea_T">* 地標描述</div>
				</div>
				<textarea name="LM_description" id="LM_description"></textarea>
		
		
				<div class="LM_image_out">
		
					<div class="LM_image">
						<div class="LM_file">
							<input type="file" id="LM_img01" class="upl uploadImg" name="LM_img01"> 
							<label for="LM_img01" class="LM_label">
								<i class="icon-picture"></i>
								<span class="file_name">上傳圖片</span>
							</label>
						</div>
					    <div class="LM_img_pre">
					    </div>
					</div>
		
					<div class="LM_image">
						<div class="LM_file">
							<input type="file" id="LM_img02" class="upl uploadImg" name="LM_img02"> 
							<label for="LM_img02" class="LM_label">
								<i class="icon-picture"></i>
								<span class="file_name">上傳圖片</span>
							</label>
						</div>
					    <div class="LM_img_pre">
					    </div>
					</div>
		
					<div class="LM_image">
						<div class="LM_file">
							<input type="file" id="LM_img03" class="upl uploadImg" name="LM_img03"> 
							<label for="LM_img03" class="LM_label">
								<i class="icon-picture"></i>
								<span class="file_name">上傳圖片</span>
							</label>
						</div>
					    <div class="LM_img_pre">
					    </div>
					</div>
		
					<div class="LM_image">
						<div class="LM_file">
							<input type="file" id="LM_img04" class="upl uploadImg" name="LM_img04"> 
							<label for="LM_img04" class="LM_label">
								<i class="icon-picture"></i>
								<span class="file_name">上傳圖片</span>
							</label>
						</div>
					    <div class="LM_img_pre">
					    </div>
					</div>
				</div>
		
		
				<div class="LM_form">
					<div class="out_ok" id="okok">
						<i class="icon-ok icon"></i>
						<input type="submit" value="送出審查" class="LM_btn" id="createLM">
					</div>
					<div class="out_ok out_cancel">
		<!-- 					<i class="icon-cancel icon canbtn"></i> -->
						<img src="images/memberLM/cancel.png" class="canbtn">
						<input type="button" value="取消" class="LM_btn">
					</div>	
				</div>
			</form>
		</section>
		
		
	</div>
</div>
	
	<footer class="ch" id="hoyo_footer">HO YO 好遊 | 鐵路支線任你遊</footer>	
</div>

</body>
</html>




