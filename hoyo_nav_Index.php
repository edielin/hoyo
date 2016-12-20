
<?php
echo"
<!-- 選單 -->
	<div class='nav_container'>
		<div id='nav_desk' class='ch'>
			<div id='nav_logoBox' class='nav_left'>
				<a href='index.php'>
					<img src='icon/hoyoWhiteSlo.png'>
				</a>
			</div>
			<!-- 970以下hide -->
			<div class='nav_right'>
				<div id='nav_memList'>
					<ul class='nav_memUl'>
						<li class='nav_memLogin'>
							<a id='nva_mem_login' href='memlogin.php'>會員登入
						</li>
						<li style='color: rgba(255,255,255,.7)'>|</li>
						<li class='nav_register'>
							<a id='nav_mem_out' href='memlogin.php'>註冊新帳號</a>
						</li>
					</ul>
				</div>
				<div id='nav_mainList'>
					<ul class='nav_mainUl'>
						<li>
							<a href='free.php' class='nav_hoverTrain nav_D_TRno'>行程規劃</a>
						</li>
						<li>
							<a href='pack.php' class='nav_hoverTrain nav_D_TRno'>好遊行程</a>
						</li>
						<li>
							<a href='write.php' class='nav_hoverTrain nav_D_TRno'>遊記分享</a>
						</li>
						<li>
							<a href='landmark.php' class='nav_hoverTrain nav_D_TRno'>地標介紹</a>
						</li>
						<li>
							<a href='news.php' class='nav_hoverTrain nav_D_TRno'>最新消息</a>
						</li>
<!-- 						<li>
							<a href='contact.php' class='nav_hoverTrain nav_D_TRno'>關於我們</a>
						</li> -->
					</ul>	
				</div>
			</div>

			<div id='nav_trainBar'>
				<div id='nav_train'>
					<img src='icon/train_15h_white.png' id='train_main'>
				</div>				
			</div>


			<!-- 970以下hide over-->
			
			<div id='nav_hamber'>
				<div class='nav_hamberLine'></div>
				<div class='nav_hamberLine'></div>
				<div class='nav_hamberLine'></div>
			</div>
			<div class='clearFix'></div>
		</div>
	</div>
	
	<!-- nav_distance-->
	<div class='nav_distance'></div>
	<!-- nav_distance 結束-->

	<div id='nav_hamberNav'>
		<ul id='nav_hamberUl' class='ch'>
<!--		<li>
				<a href='free.php' class='nav_D_TRno'>行程規劃</a>
			</li> -->

			<li>
				<a href='pack.php' class='nav_D_TRno'>好遊行程</a>
			</li>
			<li>
				<a href='write.php' class='nav_D_TRno'>遊記分享</a>
			</li>
			<li>
				<a href='landmark.php' class='nav_D_TRno'>地標介紹</a>
			</li>
			<li>
				<a href='news.php' class='nav_D_TRno'>最新消息</a>
			</li>
<!-- 			<li>
				<a href='contact.php' class='nav_D_TRno'>關於我們</a>
			</li> -->

			<li calss='nav_memLogin'>
				<a id='hamber_mem_login' href='memlogin.php'>會員登入</a>
			</li>

			<li class='nav_register'>
				<a id='hamber_mem_out' href='memlogin.php'>註冊新帳號</a>
			</li>
		</ul>
		<div class='clearFix'></div>
	</div>	
<!-- 選單結束 -->

";
?>
<script>
var storage = sessionStorage;

$(document).ready(function(){

	if(!storage["MEM_email"]){ //會員沒登入時
		// console.log('not');
		$('#nva_mem_login').text('會員登入');
		$('#nva_mem_login').attr('href','memlogin.php');

		$('#hamber_mem_login').text('會員登入');
		$('#hamber_mem_login').attr('href','memlogin.php');

		$('#nav_mem_out').text('註冊新帳號');
		$('#nav_mem_out').attr('href','#');

		$('#hamber_mem_out').text('註冊新帳號');
		$('#hamber_mem_out').attr('href','#');

		$('#nav_mem_out').click(function(event){
			event.preventDefault();
			storage.setItem('hoyo_Iwantlogin','yes');
			location.href='memlogin.php';
		});

		$('#hamber_mem_out').click(function(event){
			event.preventDefault();
			storage.setItem('hoyo_Iwantlogin','yes');
			location.href='memlogin.php';
		});


	}else{ //會員已登入
		var memName =storage['MEM_name'];

		$('#nva_mem_login').text(memName+',會員專區');
		$('#nva_mem_login').attr('href','member.php');

		$('#hamber_mem_login').text('會員專區');
		$('#hamber_mem_login').attr('href','member.php');

		$('#nav_mem_out').text('登　出');
		$('#nav_mem_out').attr('href','#');
		$('#nav_mem_out').click(function(evevnt){
			evevnt.preventDefault();
			storage.removeItem('MEM_email');
			storage.removeItem('MEM_name');
			storage.removeItem('MEM_no');

			// alert('您已登出!');
			location.reload();
		});

		$('#hamber_mem_out').text('登　出');
		$('#hamber_mem_out').attr('href','#');
		$('#hamber_mem_out').click(function(evevnt){
			evevnt.preventDefault();
			storage.removeItem('MEM_email');
			storage.removeItem('MEM_name');
			storage.removeItem('MEM_no');
			
			// alert('您已登出!');
			location.reload();
		});

	}

	
	//跑火車開始
	$('.nav_hoverTrain').mouseover(function(){
		var railPosition = $('#nav_trainBar').offset().left;
		var listPosition = $(this).offset().left;
		var trainWidth = $('#nav_train').width();
		var listWidth = $(this).width();
		$('#nav_train').css({
			left : ( listPosition - railPosition + listWidth/2 - trainWidth/2 ) +'px',
			opacity : 1
		});
	});

	$('.nav_hoverTrain').mouseout(function(){
		$('#nav_train').css({
			left : '60px',
			opacity : 0
		});
	}); //跑火車結束

	var s1_height = $('#i_s1').offset().top;
	$(window).scroll(function(){

		if($(window).scrollTop()>s1_height-100 && $(window).width()>970){
			
			$(".nav_container").css('backgroundColor','rgba(51,51,51,.9)');

			$(".nav_container").hover(function(){
				$(this).css('backgroundColor','#333');
				},function(){
					$(this).css('backgroundColor','rgba(51,51,51,.9)');
				});

		}else{
				if($(window).width()<970){
					$(".nav_container").css('backgroundColor','#333');
				}

				if($(window).width()>970){
					$(".nav_container").css('backgroundColor','rgba(0,0,0,.3)');
					$(".nav_container").hover(function(){
					$(this).css('backgroundColor','#333');
					},function(){
						$(this).css('backgroundColor','rgba(0,0,0,.3)');
					});
				}
			}
	}); 
	// $(window).scroll


	// hambeger 
	var hamberNum = 0;
	$("#nav_hamber").click(function(){
		hamberNum++;
		$(this).toggleClass('nav_hamAct'); // 漢堡變化
		$('body').toggleClass('stop-scrolling'); // 不要滾輪 有點失敗的方式
		
		if(hamberNum%2 == 0){
			$('#nav_hamberNav').css({
				'left':'100%','opacity':'0'
			});
			$('#nav_hamberUl').css({
				'height':'0'
			});
		}else{
			$('#nav_hamberNav').css({
				'left':'0%','opacity':'1'
			});
			$('#nav_hamberUl').css({
				'height':'100vh'
			});
		}	
	}); //hambeger over



	$('.nav_D_TRno').click(function(event){
	    event.preventDefault();
	    var gogo = $(this).attr('href');

	    if(storage['modify_myfree_by_TRno']){
	        storage.removeItem('modify_myfree_by_TRno');
	        location.href=gogo;
	    }else{
	        location.href=gogo;
	    };
	});
	
});
</script>