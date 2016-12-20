<!-- 從資料庫引入所有遊記 -->
<?php include 'import_Wdata.php';?>

<!DOCTYPE html>
<html lang="en">
<head>
<!-- 

*** 學生作品,無任何商業用途 ***

-->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="imagemode" content="force">
<title>HO YO 好遊 | 鐵路支線任你遊</title>
<link rel="stylesheet" type="text/css" href="css/CSS_reset.css">
<link rel="stylesheet" type="text/css" href="css/hoyo_nav.css">
<link rel="stylesheet" type="text/css" href="css/index_main.css">
<link rel="icon" type="image/gif" href="favicon.ico">
<script src="js/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js" ></script>
<script src="js/index/TweenMax.min.js"></script>
<script src="js/index/ScrollMagic.min.js"></script>
<script src="js/index/animation.gsap.min.js"></script>

<script>
$(document).ready(function(){
	
	// 帶資料進第一個遊記block	
	$('#i_yoZ1 img').attr('src',Wdata[0].url);
	$('#i_yoZ1 input').val(Wdata[0].no);
	$('#i_yoZ1 .i_yoZ_title').text(Wdata[0].title);
	$('#i_yoZ1 .i_yoZ_lorem').text(Wdata[0].desc);

	// 帶資料進第二個遊記block
	$('#i_yoZ2 img').attr('src', Wdata[1].url);
	$('#i_yoZ2 input').val(Wdata[1].no);
	$('#i_yoZ2 .i_yoZ_title').text(Wdata[1].title);
	$('#i_yoZ2 .i_yoZ_lorem').text(Wdata[1].desc);



	var sliderImgSrc = ""; //背景圖來源跑變數 

	if($(window).width()>498){ //手機跟電腦跑不同loading不然太lag

		sliderImgSrc = "images/index/"; 
		$('#slider1').css('backgroundImage','url('+sliderImgSrc+'aliali.jpg)');
		$('#slider2').css('backgroundImage','url('+sliderImgSrc+'gigigi.jpg)');
		$('#slider3').css('backgroundImage','url('+sliderImgSrc+'pincpinc.jpg)');
		$('#slider4').css('backgroundImage','url('+sliderImgSrc+'neiwanwan.jpg)');


		var storage = sessionStorage;

	    $('body').addClass('stop-scrolling');

	    if(storage['helloHOYO']){
	     //第一次進網站才跑loading畫面,storage有helloHOYO代表來過惹...就移掉
	    	$('#i_loading').remove();
	    	$('body').removeClass('stop-scrolling');
	    }


	    // 避免load圖片有圖片死掉的爛方法,load最多跑7秒鐘QQ
	    var mimutines = 0;
	    setInterval(function(){
	    	mimutines++;
	    	if(mimutines==7){
	    		removeLoad();
	    	}
	    },1000);


		function removeLoad(){
			storage.setItem('helloHOYO','hihi');
			$('#i_loading').fadeOut(1000,function(){
			     $('#i_loading').remove();
			});
		}


	    var imgArr = ['images/index/neiwanwan.jpg',
	    			  'images/index/pincpinc.jpg',
	          		  'images/index/gigigi.jpg',
	           		  'images/index/aliali.jpg',
	           		  ];

	    Wdata.map(function(cv,i){
	      imgArr.push(cv.url);
	    });
	  
		for(var i=0 ; i<imgArr.length ; i++){			
			var imgi = new Image();
			imgi.src= imgArr[i];
			imgi.addEventListener('load',checkLoad, false)
		}

		// load完圖片才跑把loading畫面拿掉
	    var imgNum = 0; 
	    function checkLoad(){
	    	imgNum++;
	    	var load_present = Math.floor((imgNum/imgArr.length)*100);
	    	$('#load_present').text(load_present);
	    	// console.log(load_present);
	    	if(imgNum==imgArr.length){
	 			$('body').removeClass('stop-scrolling');
	    		removeLoad();    		
	    	}
	    }


	}else{ //以下手機版
		$('body').addClass('stop-scrolling');

		sliderImgSrc = "images/mobile_index/"; 
		$('#slider1').css('backgroundImage','url('+sliderImgSrc+'aliali.jpg)');
		$('#slider2').css('backgroundImage','url('+sliderImgSrc+'gigigi.jpg)');
		$('#slider3').css('backgroundImage','url('+sliderImgSrc+'pincpinc.jpg)');
		$('#slider4').css('backgroundImage','url('+sliderImgSrc+'neiwanwan.jpg)');

		var imgArr = ['images/mobile_index/neiwanwan.jpg',
	    			  'images/mobile_index/pincpinc.jpg',
	          		  'images/mobile_index/gigigi.jpg',
	           		  'images/mobile_index/aliali.jpg',
	           		  ];

	   for(var i=0 ; i<imgArr.length ; i++){			
			var imgi = new Image();
			imgi.src= imgArr[i];
			imgi.addEventListener('load',mobileCheckLoad, false)
		}

		var imgNum = 0; 
	    function mobileCheckLoad(){
	    	imgNum++;
	    	var load_present = Math.floor((imgNum/imgArr.length)*100);
	    	$('#load_present').text(load_present);
	    	// console.log(load_present);
	    	if(imgNum==imgArr.length){
	 			$('body').removeClass('stop-scrolling');
	    		mobileRemoveLoad();    		
	    	}
	    }

		function mobileRemoveLoad(){
			$('#i_loading').fadeOut(1000,function(){
			     $('#i_loading').remove();
			});
		}
	}

}); // document.ready

</script>

</head>
<body id="i_stellar">
	
	<div id="i_loading">
	  <div id="i_loadingBox">
	    	<span class="jumpball"></span>
	    	<p class="load_lorem ch">規劃行程、遊記分享 | 鐵路支線任你遊</p>
	    	<p class="loading_text en">
	    		<span class="load_L">L</span>
	    		<span class="load_O">O</span>
	    		<span class="load_A">A</span>
	    		<span class="load_D">D</span>
	    		<span class="load_I">I</span>
	    		<span class="load_N">N</span>
	    		<span class="load_G">G</span>
	    		<span class="load_dot1">…</span>
	    		<span class="load_dot2" id="load_present">0</span>
	    		<span class="load_dot3">%</span>
	    		<div class="clearFix"></div>
	    	</p>
	  </div>
	</div>

	<header>
		<?php include "hoyo_nav_Index.php"; ?>
	</header>
	
	<!-- 地標收藏包 -->
		<div id="wishList2" class="en">
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
			<!-- 假裝 
				<div class="wishListRow">
						<div class="what_line">
							阿里山線
						</div>
						<div class="where_name">
							十分大大大大大瀑布
						</div>
				</div> 
			-->
			</div>
		</div>
	<!-- 地標收藏包結束 -->
	
	
	<!-- slider -->
	
	<div id="fakeSliderr" class="ch">
		<div id="svgWrapper"></div>
		<div id="i_control_1" class="i_control">
			<p>阿里山線</p>
		</div>
		<div id="slider1" class="i_slider">
			<div id="slider1Back" style="background-image: url(images/index/aliline.png);"></div>
		</div>
	
		<div id="i_control_2" class="i_control">
			<p>集集線</p>
		</div>
		<div id="slider2" class="i_slider">
			<div id="slider2Back" style="background-image: url(images/index/ggline.png);"></div>
		</div>
	
		<div id="i_control_3" class="i_control">
			<p>平溪線</p>
		</div>
		<div id="slider3" class="i_slider">
			<div id="slider3Back" style="background-image: url(images/index/pinxiline.png);"></div>
		</div>
	
		<div id="i_control_4" class="i_control">
			<p>內灣線</p>
		</div>
		<div id="slider4" class="i_slider">
			<div id="slider4Back" style="background-image: url(images/index/neiwanline.png);"></div>
		</div>
		
		<p id="scroll_down" class="en">scroll</p>
	</div>
	
	<!-- slider over -->
	
	
		<div class="i_container">
			<div class = "i_container_bg"></div>
	<!-- index_section1 -->
			<section id="i_s1">
				<!-- 印章飛飛嘉義 -->
				<img src="images/index/seal_ali.png" class="i_flyImgs" id="i_ali_seal" data-stellar-ratio="1.7">
	
				<div class="i_color4_mobile_center">
					<div class="i_color4_cic">
	
						<div class="i_cic_hidden i_cic_S_tr"></div> 
						<div class="i_cic_hidden i_cic_S_br"></div>
						<div class="i_cic_hidden i_cic_S_bl"></div>
						<div class="i_cic_hidden i_cic_S_tl"></div>
	
						<div id="i_cic_show1"> <!-- for JQ -->
							<img src="images/index/cic1_img_logo.png" class="i_color4_icon">
							<h3 class="i_color4_title ch">
								在好遊 自由遊
							</h3>
							<p class="i_color4_sub en">
								travel freely
							</p>
						</div>
	
					</div>
				</div>
	
				<div class="i_textBox ch">
					<div class="i_h2Box" id="i_h2Box1">
						<div class="i_title_dot">
							<h2>隨心所欲</h2>
							<h2>隨心所欲</h2>
						</div>
						<div class="i_title_smile">
							<h2>專屬於你的旅遊行程！</h2>
							<h2>專屬於你的旅遊行程！</h2>
						</div>
					</div>	
					<p class="i_text_lorem" id="i_s1_lorem">
						好遊收集台灣鐵路四大支線 - 景點 / 美食 / 住宿 / 活動等地標，挑選喜愛的地標卡片，你可將卡片隨心所欲組合成自己的好遊行程 。
						<br><br>
						火車，永遠有著其他交通工具無法比擬的旅遊魅力，安排一趟台灣鐵道之旅絕對不會讓你失望 。
						<br><br>
					</p>
					<div class="i_btnBox ch" id="i_s1_btn">
						<div class="i_btn" id="i_goFree" onclick="self.location.href='free.php'">
							一起來行程規劃
						</div>
						<p class="i_btnDir">
							馬上開始規劃自己的旅遊行程 
						</p>
					</div>
				</div>
	
				<div class="clearFix"></div>
			</section>
	<!-- index_section1 結束-->
	
	
	<!-- index_section2 -->
			<section id="i_s2"> 
	
				<img src="images/index/seal_neiWan.png" class="i_flyImgs" id="i_neiWan_seal" data-stellar-ratio="1.7">
	
				<div class="i_color4_mobile_center">
					<div class="i_color4_cic">
	
						<div class="i_cic_hidden i_cic_S_tr"></div> 
						<div class="i_cic_hidden i_cic_S_br"></div>
						<div class="i_cic_hidden i_cic_S_bl"></div>
						<div class="i_cic_hidden i_cic_S_tl"></div>
	
						<div id="i_cic_show2"><!-- for jQ-->
							<img src="images/index/cic2_img_card.png" class="i_color4_icon">
							<h3 class="i_color4_title ch">
								哪裡玩 任你挑
							</h3>
							<p class="i_color4_sub en">
								choose you love
							</p>
						</div>
	
					</div>
				</div>
	
	
				<div class="i_textBox ch">
					<div class="i_h2Box" id="i_h2Box2">
						<div class="i_title_dot">
							<h2>搭配組合</h2>
							<h2>搭配組合</h2>
						</div>
						<div class="i_title_smile">
							<h2>選擇自己喜愛的地標卡！</h2>
							<h2>選擇自己喜愛的地標卡！</h2>
						</div>
					</div>	
					<p class="i_text_lorem" id="i_s2_lorem">
						點選自己感興趣的地標卡片便可將卡片加入願望清單，再直接點選願望清單，方便你快速安排自己的行程規劃！
						<br><br>
					</p>
					<div class="i_btnBox ch">
						<div class="i_btn_row" id="i_s2_btn1">
							<div class="i_btn" id="i_goLocation" onclick="self.location.href='landmark.php'">
								查看更多地標卡
							</div>
							<p class="i_btnDir">
								更多更詳細的地標資訊 
							</p>
						</div>
						<div class="i_btn_row" id="i_s2_btn2">
							<div class="i_btn" id="i_addLocation">
								新增自己的地標
							</div>
							<p class="i_btnDir">
								有獨家地標卡片要新增
							</p>
						</div>
					</div>
				</div>
				<div class="clearFix"></div>
			</section>	
	<!-- index_section2 結束-->	
		</div>
	
	
		<div class="i_container">
	<!-- index_section3 地標卡-->	
			<section id="i_s3">
				
				<div class="i_cardsRow i_cardsRow1">
					<div class="i_cardsBox_left">
						<div class="i_cards i_row1_LeftCards" id="沼平公園">
							<img src="images/index/ali_沼平公園w.png" class="i_cards_img">
							<div class="i_addToList">
								<img src="images/index/addadd_noAdd.png">
							</div>
							<input type="hidden" value="阿里山線|沼平公園">
						</div>
						
						<div class="i_cards i_row1_RightCards" id="靜安吊橋">
							<img src="images/index/pingC_靜安吊橋w.png" class="i_cards_img">
							<div class="i_addToList">
								<img src="images/index/addadd_noAdd.png">
							</div>
							<input type="hidden" value="平溪線|靜安吊橋">
						</div>
					</div>
	
					<div class="i_cardsBox_right">
						<div class="i_cards i_row1_LeftCards" id="內灣戲院">
							<img src="images/index/neiWan_內灣戲院w.png" class="i_cards_img">
							<div class="i_addToList">
								<img src="images/index/addadd_noAdd.png">
							</div>
							<input type="hidden" value="內灣線|內灣戲院">
						</div>
						
						<div class="i_cards i_row1_RightCards" id="猴硐貓村">
							<img src="images/index/pingC_侯硐貓村w.png" class="i_cards_img">
							<div class="i_addToList">
								<img src="images/index/addadd_noAdd.png">
							</div>
							<input type="hidden" value="平溪線|猴硐貓村">
						</div>
					</div>
				</div><!-- .i_cardsRow end-->
	
				<div class="i_cardsRow i_cardsRow2" id="i_s3_row2">
					<div class="i_cardsBox_left">
						<div class="i_cards i_row2_LeftCards" id="內灣派出所">
							<img src="images/index/neiWan_內灣派出所w.png" class="i_cards_img">
							<div class="i_addToList">
								<img src="images/index/addadd_noAdd.png">
							</div>
							<input type="hidden" value="內灣線|內灣派出所">
						</div>
						
						<div class="i_cards i_row2_RightCards" id="菁桐情人橋">
							<img src="images/index/pingC_菁桐情人橋w.png" class="i_cards_img">
							<div class="i_addToList">
								<img src="images/index/addadd_noAdd.png">
							</div>
							<input type="hidden" value="平溪線|菁桐情人橋">
						</div>
					</div>
	
					<div class="i_cardsBox_right">
						<div class="i_cards i_row2_LeftCards" id="車埕火車站">
							<img src="images/index/gigi_車埕火車站w.png" class="i_cards_img">
							<div class="i_addToList">
								<img src="images/index/addadd_noAdd.png">
							</div>
							<input type="hidden" value="集集線|車埕火車站">
						</div>
						
						<div class="i_cards i_row2_RightCards" id="十分大瀑布">
							<img src="images/index/pingC_十分大瀑布w.png" class="i_cards_img">
							<div class="i_addToList">
								<img src="images/index/addadd_noAdd.png">
							</div>
							<input type="hidden" value="平溪線|十分大瀑布">
						</div>
					</div>
				</div> <!-- .i_cardsRow end-->
	
			</section>
	<!-- index_section3 地標卡 結束-->
		</div>
	

	
		<div class="i_container">
			 <div class="i_container_bg2"></div>
	<!-- index_section4 遊記 -->
			<section id="i_s4">
	
				<img src="images/index/seal_pingC.png" class="i_flyImgs" id="i_pingC_seal" data-stellar-ratio="1.7">
	
				<div class="i_color4_mobile_center">
					<div class="i_color4_cic">
						
						<div class="i_cic_hidden i_cic_S_tr"></div> 
						<div class="i_cic_hidden i_cic_S_br"></div>
						<div class="i_cic_hidden i_cic_S_bl"></div>
						<div class="i_cic_hidden i_cic_S_tl"></div>
	
						<div id="i_cic_show4"> <!-- for jQ-->
							<img src="images/index/cic3_img_story.png"  class="i_color4_icon">
							<h3 class="i_color4_title ch">
								愛分享 看遊記
							</h3>
							<p class="i_color4_sub en">
								share stories
							</p>
						</div>
	
					</div>
				</div>
	
	
				<div class="i_textBox ch">
					<div class="i_h2Box" id="i_h2Box4">
						<div class="i_title_dot">
							<h2>遊記分享</h2>
							<h2>遊記分享</h2>
						</div>
						<div class="i_title_smile">
							<h2>交流彼此間的旅遊故事！</h2>
							<h2>交流彼此間的旅遊故事！</h2>
						</div>
					</div>	
	
					<div class="i_yoZbox" id="i_s4_yoZ">
					<!-- 抓資料(2筆) -->
						<div class="i_yoZ" id="i_yoZ1">
							<input type="hidden" value="">
							<img src="images/index/yoZ_02.jpg">
							<p class="i_yoZ_title">
								鐵道與天燈
							</p>
							<p class="i_yoZ_lorem">
								早早規畫好的行程，終於盼到晴天囉! 會想來這起因是因為Garu喜歡火車與軌道
							</p>
						</div>
	
						<div class="i_yoZ" id="i_yoZ2">
							<input type="hidden" value="">
							<img src="images/index/yoZ_01.jpg" class="i_color4_icon">
							<p class="i_yoZ_title">
								徹夜不眠只為這道光
							</p>
							<p class="i_yoZ_lorem">
								這次的阿里山觀日出行程，我們打算來點特別的，以全台最高的7-11為家
							</p>						
						</div>
					<!-- - - - - - - - - -->
					</div>
	
					<div class="i_btnBox ch" id="i_s4_btn">
						<div class="i_btn" id="i_goYoZ" onclick="self.location.href='write.php'">
							查看更多的遊記
						</div>
						<p class="i_btnDir">
							更多篇精彩遊記故事 
						</p>
					</div>
				</div>
				<div class="clearFix"></div>
			</section>
	<!-- index_section4 遊記 結束-->
	
	
	<!-- index_section5 -->
			<section id="i_s5">
				<img src="images/index/seal_gg.png" class="i_flyImgs" id="i_gg_seal" data-stellar-ratio="1.7">
	
				<div class="i_color4_mobile_center">
					<div class="i_color4_cic">
	
						<div class="i_cic_hidden i_cic_S_tr"></div> 
						<div class="i_cic_hidden i_cic_S_br"></div>
						<div class="i_cic_hidden i_cic_S_bl"></div>
						<div class="i_cic_hidden i_cic_S_tl"></div>
	
						<div id="i_cic_show5"> <!-- for jQ-->
							<img src="images/index/cic4_img_plan.png" class="i_color4_icon">
							<h3 class="i_color4_title ch">
								好行程 再進化
							</h3>
							<p class="i_color4_sub en">
								add to your plan
							</p>
						</div>
	
					</div>
				</div>
	
				<div class="i_textBox ch">
					<div class="i_h2Box" id="i_h2Box5">
						<div class="i_title_dot"">
							<h2>調整既有行程</h2>
							<h2>調整既有行程</h2>
						</div>
						<div class="i_title_smile">
							<h2>修改組成全新行程規劃！</h2>
							<h2>修改組成全新行程規劃！</h2>
						</div>
					</div>	
					<p class="i_text_lorem" id="i_s5_lorem">
						從已配置完成的好遊行程或遊記中行程，修改新增成自己的行程規劃。
						<br><br>
					</p>
					<div class="i_btnBox ch">
						<div class="i_s5_line"></div>
						<div class="i_s5_cic1" id="i_s5_cic_yz">
							<p>好遊<br>行程</p>
						</div>
						<div class="i_s5_cic1" id="i_s5_cic_suit">
							<p>遊記<br>分享</p>
						</div>
						<div class="i_s5_cic2" id="i_s5_cic_free">
							<p>我的<br>行程規劃</p>
						</div>
						<div class="clearFix"></div>
					</div>
				</div>
				<div class="clearFix"></div>
			</section>	
	<!-- index_section5 結束-->	
		</div>
	
	
		<div class="i_container">
	<!-- index_section6 最後-->	
			<section id="i_s6">
					<div class="i_last_cic ch">
	
						<div class="i_cic_hidden i_cic_S_tr"></div> 
						<div class="i_cic_hidden i_cic_S_br"></div>
						<div class="i_cic_hidden i_cic_S_bl"></div>
						<div class="i_cic_hidden i_cic_S_tl"></div>
	
						<img src="images/index/color4_cic_456.png" class="i_s6_trainCic">
	
						<div id="i_cic_show6"> <!-- for jQ-->
							<img src="images/index/cicLast_img_logo.png" class="i_s6_cic_logo">
							<h3 class="i_last_cic_title">
								規劃行程 盡在好遊
							</h3>
						</div>
	
							<p class="i_last_cic_lorem" id="i_s6_lorem">
								歡迎加入好遊會員，體驗更多豐富功能！
							</p>
	
						<div class="i_btnBox">
							<div id="i_memNo_test"> <!-- 寫在aboutSession.js裡 -->
								使用體驗帳號登入會員
							</div>
						</div>
					</div>
			</section>
	<!-- index_section6 結束-->
		</div>
	
		<footer class="ch">HO YO 好遊 | 鐵路支線任你遊</footer>



<script src="js/index/index_slider.js"></script>
<script src="js/index/index_scroll.js"></script>
<script src="js/index/index_session.js"></script>

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

<!-- 滾動視差 -->
<script src="js/index/jquery.stellar.min.js"></script> 
<script>

    $('#i_stellar').stellar({
    	scrollProperty: 'scroll'
    });
</script>
<!-- 滾動視差 -->

</body>
</html>

