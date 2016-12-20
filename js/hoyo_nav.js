$(document).ready(function(){

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


	$(window).scroll(function(){
		if($(window).scrollTop()>100 && $(window).width()>970){
			console.log('wwww');
			$(".nav_container").css('backgroundColor','rgba(51,51,51,.9)');

			$(".nav_container").hover(function(){
				$(this).css('backgroundColor','#333');
				},function(){
					$(this).css('backgroundColor','rgba(51,51,51,.9)');
				});

		}else{
				$(".nav_container").css('backgroundColor','#333');

				$(".nav_container").hover(function(){
				$(this).css('backgroundColor','#333');
				},function(){
					$(this).css('backgroundColor','#333');
				});
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
	
});
