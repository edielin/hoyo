
$(document).ready(function(){


	// 預設選新竹
	$('#L_station_1').next('label').find('.L_station_checkPoint').css({
		'opacity' : '1',
		'backgroundColor': '#298736'
	});

	

	//小圈圈的顏色

	$('.L_station_a').click(function(){
		var branch_id=$(this).parent().parent().attr('id');
		if(branch_id=='L_station_option1'){
			$(this).children().find('.L_station_checkPoint').css('opacity',1)
															.css('background-color','#298736');
		$('.L_station_a').not(this).find('.L_station_checkPoint').css('opacity',0);
		}
		else if(branch_id=='L_station_option2'){
			$(this).children().find('.L_station_checkPoint').css('opacity',1)
															.css('background-color','#CE631B');
		$('.L_station_a').not(this).find('.L_station_checkPoint').css('opacity',0);
		}
		else if(branch_id=='L_station_option3'){
			$(this).children().find('.L_station_checkPoint').css('opacity',1)
															.css('background-color','#075F9B');
		$('.L_station_a').not(this).find('.L_station_checkPoint').css('opacity',0);
		}
		else if(branch_id=='L_station_option4'){
			$(this).children().find('.L_station_checkPoint').css('opacity',1)
															.css('background-color','#AA3535');
		$('.L_station_a').not(this).find('.L_station_checkPoint').css('opacity',0);
		}
	});


	//選支線後 站點(長條的)改變
	$('#L_branch').change(function(){
		var branch=$('#L_branch').val();
		if(branch=='1'){
			$('#L_station_option2').css('display','block');
			$('#L_station_option2').siblings().css('display','none');
			$('.L_station_box').css('background-image','url(images/landmark/testrailway_orange.png)');		
		}else if(branch=='0'){
			$('#L_station_option1').css('display','block');
			$('#L_station_option1').siblings().css('display','none');
			$('.L_station_box').css('background-image','url(images/landmark/testrailway_green.png)');
		}else if(branch=='2'){
			$('#L_station_option3').css('display','block');
			$('#L_station_option3').siblings().css('display','none');
			$('.L_station_box').css('background-image','url(images/landmark/testrailway_blue.png)');
		}else if(branch=='3'){
			$('#L_station_option4').css('display','block');
			$('#L_station_option4').siblings().css('display','none');
			$('.L_station_box').css('background-image','url(images/landmark/testrailway_red.png)');
		}
	});


	//手機板換支線 站點改變
	$('#L_branch').on('change',function(event){
    	var branch_num = parseInt(event.target.value);


		// stationOption=['新竹','北新竹','千甲','新莊','竹中','上員','榮華','竹東','橫山','九讚頭','合興','富貴','內灣',
		// 				'瑞芳','猴硐','三貂嶺','大華','十分','望古','嶺腳','平溪','菁桐',
		// 				'二水','源泉','濁水','龍泉','集集','水里','車埕',
		// 				'嘉義','北門','竹崎','交力坪','奮起湖','神木','阿里山','沼平','祝山'
		// ];

   //  	switch(branch_num){	   		
   //  		case 0:
			// 	for(var i=0;i<13;i++){
	  //   			$("#pdaysDro").append("<option value="+i+">"+stationOption[i]+"</option>");			
			// 	}
			// 	break;
			// case 1:
			// 	for(var i=13;i<22;i++){
	  //   			$("#pdaysDro").append("<option value="+i+">"+stationOption[i]+"</option>");
			// 	}
			// 	break;	
			// case 2:
			// 	for(var i=22;i<29;i++){
	  //   			$("#pdaysDro").append("<option value="+i+">"+stationOption[i]+"</option>");
			// 	}
			// 	break;
			// case 3:
			// 	for(var i=29;i<38;i++){
	  //   			$("#pdaysDro").append("<option value="+i+">"+stationOption[i]+"</option>");
			// 	}
			// 	break;
   //  	}

    	$("#pdaysDro").empty();
    	var stationOption = [ ['新竹','北新竹','千甲','新莊','竹中','上員','榮華','竹東','橫山','九讚頭','合興','富貴','內灣'] ,
    					['瑞芳','猴硐','三貂嶺','大華','十分','望古','嶺腳','平溪','菁桐'] ,
    					['二水','源泉','濁水','龍泉','集集','水里','車埕'],
    					['嘉義','北門','竹崎','交力坪','奮起湖','神木','阿里山','沼平','祝山']] ;
    	var pdaysDro = document.getElementById("pdaysDro");
    	var stations =  stationOption[branch_num];
    	for(var i=0;i<stations.length;i++){
	    	pdaysDro.add(new Option(stations[i] , stations[i])	);	
		}




   	//切換支線預選第一站

	   if(branch_num==0){
			re_render('新竹', 0);
			$('#L_station_1').next('label').find('.L_station_checkPoint').css({
				'opacity' : '1',
				'backgroundColor': '#298736'
			});
	   }

	   if(branch_num==1){
			re_render('瑞芳', 1);
			$('#L_station_14').next('label').find('.L_station_checkPoint').css({
				'opacity' : '1',
				'backgroundColor': '#CE631B'
			});
	   }

	   if(branch_num==2){
			re_render('二水', 2);
			$('#L_station_23').next('label').find('.L_station_checkPoint').css({
				'opacity' : '1',
				'backgroundColor': '#075F9B'
			});		
	   }

	   if(branch_num==3){
			re_render('嘉義', 3);
			$('#L_station_30').next('label').find('.L_station_checkPoint').css({
				'opacity' : '1',
				'backgroundColor': '#AA3535'
			});			
	   }

	});




	// 願望清單hover出現
    $('#wishList2').hover(function(){
        $('#wishList_box').show();
    },function(){
        $('#wishList_box').hide();
    });

    $('#wishList_box').hover(function(){
        $(this).show();
    },function(){
        $(this).hide();
    });
    
    $('#wishList_box').click(function(){
        $(this).hide();
    });
    // 願望清單hover出現


	//依照站點篩選地標卡 手機
	$('#pdaysDro').on('change',function(event){
		var station_name=event.target.value;
		var branchIndex=L_branch.value;

		re_render(station_name, branchIndex);


	});



	//依照站點篩選地標卡 桌機
	$('.L_station').on('change',function(event){
		var station_id = '#'+event.target.id;
		// console.log(station_id);
		var station_name = $(station_id).next().find("p").text();
		// console.log(station_name);
		var branch_id = $(station_id).parent()[0].id;
		var branchIndex = parseInt(branch_id[branch_id.length-1])-1;

		re_render(station_name, branchIndex); //景點 美食 住宿 活動
	});



	function re_render(station_name, branchIndex){

		var selected_cards = [[],[],[],[]];
		var types = ['f_landscape','f_eat','f_stay','f_activity'];
		var color = ['neiWan_tab','pingC_tab','gigi_tab','ali_tab'];

		data_LMcards.map(function(cv,i){
			if(station_name == cv.station){
				selected_cards[types.indexOf(cv.type)].push(cv);
			}
		});
		// console.log(selected_cards);

// 		$('.cardwrapper.landscape').append("\
// 				<div class='lmcard'>\	
// 					<div class='imgboxPadding'>\
// 						<div class='btn_selecard'>\
// 							<img src='images/landmark/addadd_noAdd.png' class='btn_image'>\
// 						</div>\
// 						<div class='imgbox'>\
// 							<img src="card.url">\ 
// 							<div class='LM_zoom'>\
// 								<i class='icon-search'></i>\
// 							</div>\
// 						</div>\
// \
// 						<div class='line_tab neiWan_tab ch'>\
// 							"card.branch"\
// 						</div>\
// 						<div class='lmcard_P'>\
// 							<p class='bigP'>"card.name"</p>\
// 							<p class='smallP'>"card.subtitle"</p>\
// 						</div>\
// 					</div>\
// 				</div>");
		$('.cardwrapper.landscape').empty();
		$('.cardwrapper.eat').empty();
		$('.cardwrapper.stay').empty();
		$('.cardwrapper.activity').empty();

		var imgSrcPick = "";

		// 如果為手機螢幕的話跑較小的圖片
		if($(window).width()<=498){
			imgSrcPick = "images/mobile_LM/";
		}else{
			imgSrcPick = "images/LM/";
		}

		selected_cards.map(function(cv,i){
			if(i==0){ //景點
				cv.map(function(card,j){
					$('.cardwrapper.landscape').append("<div class='lmcard'><div class='imgboxPadding'><div class='btn_selecard' id="+card.name+"><input type='hidden' value="+card.branch+"|"+card.name+"><img src='images/landmark/addadd_noAdd.png' class='btn_image'></div><div class='imgbox'><img id='lm"+card.LM_no+"' class='cardimg' src="+imgSrcPick+card.url+"></div><div class='line_tab "+color[branchIndex]+" ch'>"+card.branch+"</div><div class='lmcard_P'><p class='bigP'>"+card.name+"</p><p class='smallP'>"+card.subtitle+"</p></div></div></div>");
				});
				if(cv.length==0){
					$('.cardwrapper.landscape').append("<div style='font-size:20px;text-align:center;padding:15px 0'>查無資料</div>");
				}
			}else if(i==1){ //美食
				cv.map(function(card,j){
					$('.cardwrapper.eat').append("<div class='lmcard'><div class='imgboxPadding'><div class='btn_selecard' id="+card.name+"><input type='hidden' value="+card.branch+"|"+card.name+"><img src='images/landmark/addadd_noAdd.png' class='btn_image'></div><div class='imgbox'><img id='lm"+card.LM_no+"' class='cardimg' src="+imgSrcPick+card.url+"></div><div class='line_tab "+color[branchIndex]+" ch'>"+card.branch+"</div><div class='lmcard_P'><p class='bigP'>"+card.name+"</p><p class='smallP'>"+card.subtitle+"</p></div></div></div>");
				});
				if(cv.length==0){
					$('.cardwrapper.eat').append("<div style='font-size:20px;text-align:center;padding:15px 0'>查無資料</div>");
				}
			}else if(i==2){ //住宿
				cv.map(function(card,j){
					$('.cardwrapper.stay').append("<div class='lmcard'><div class='imgboxPadding'><div class='btn_selecard' id="+card.name+"><input type='hidden' value="+card.branch+"|"+card.name+"><img src='images/landmark/addadd_noAdd.png' class='btn_image'></div><div class='imgbox'><img id='lm"+card.LM_no+"' class='cardimg' src="+imgSrcPick+card.url+"></div><div class='line_tab "+color[branchIndex]+" ch'>"+card.branch+"</div><div class='lmcard_P'><p class='bigP'>"+card.name+"</p><p class='smallP'>"+card.subtitle+"</p></div></div></div>");
				});
				if(cv.length==0){
					$('.cardwrapper.stay').append("<div style='font-size:20px;text-align:center;padding:15px 0'>查無資料</div>");
				}
			}else if(i==3){ //活動
				cv.map(function(card,j){
					$('.cardwrapper.activity').append("<div class='lmcard'><div class='imgboxPadding'><div class='btn_selecard' id="+card.name+"><input type='hidden' value="+card.branch+"|"+card.name+"><img src='images/landmark/addadd_noAdd.png' class='btn_image'></div><div class='imgbox'><img id='lm"+card.LM_no+"' class='cardimg' src="+imgSrcPick+card.url+"></div><div class='line_tab "+color[branchIndex]+" ch'>"+card.branch+"</div><div class='lmcard_P'><p class='bigP'>"+card.name+"</p><p class='smallP'>"+card.subtitle+"</p></div></div></div>");
				});
				if(cv.length==0){
					$('.cardwrapper.activity').append("<div style='font-size:20px;text-align:center;padding:15px 0'>查無資料</div>");
				}
			}
		});

		var storage = sessionStorage;
		doFirst();

	}

	re_render('新竹', 0);

	//查看地標卡簡介的燈箱效果

	
	$(document).on('click','.cardimg',function(event){
 		var LM_no = $(this).attr('id').replace("lm","");
 		// console.log(LM_no);

		var card = data_LMcards.find(cv=>cv.LM_no==LM_no);
		// console.log(card);
		var data = {};
            data['LM_no'] = card.LM_no;      //data = {'LM_no': card.LM_no}
            data['MEM_no'] = card.MEM_no;
            data['branch'] = card.branch;
            data['station'] = card.station;
            data['name'] = card.name;
            data['type'] = card.type;
            data['isFixEvent'] = card.isFixEvent;
            data['subtitle'] = card.subtitle;
            data['phone'] = card.phone;
            data['cellphone'] = card.cellphone;
            data['address'] = card.address;
            data['longitude'] = card.longitude;
            data['latitude'] = card.latitude;
            data['opentime'] = card.opentime;
            data['avgcost'] = card.avgcost;
            data['staycost1'] = card.staycost1;
            data['staycost2'] = card.staycost2;
            data['staycost4'] = card.staycost4;
            data['staycostadd1'] = card.staycostadd1;
            data['adultcost'] = card.adultcost;
            data['childcost'] = card.childcost;
            data['url'] = card.url;


			// console.log(data);

	        $('#LC_container').empty();
	        $.post("LMcard.php", data, function(data) {
	        	// console.log(data);
	            $('#LC_container').append(data);
	        });


	});


});


