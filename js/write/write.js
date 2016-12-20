var storage = sessionStorage;

var branch_filter = 'all'; //支線選擇
var day_filter = 'all'; //天數選擇
var keyup_filter = 'all'; //輸入過濾


$('#pexDro').on('change',function(){
	var mybranch = ['內灣線','平溪線','集集線','阿里山線'];
	branch_filter = $(this).val()=='all' ? 'all' : mybranch[$(this).val()];
	// console.log(branch_filter);
	re_render(1);

});

$('#pdaysDro').on('change',function(){
	day_filter = $(this).val()=='all' ? 'all' : parseInt($(this).val());
	re_render(1);
});

$('#searchTitle').on('keyup',function(){
	keyup_filter = $(this).val()=='' ? 'all' : $(this).val();
	// console.log(keyup_filter);
	re_render(1);
});




// 選擇支線或天數時, 重新渲染畫面
function re_render(pageNumber){
	var rank_arr = find_rank(branch_filter, day_filter, keyup_filter, nc, memNote_and_noteTr, lmtr_and_LM);
	var rlen = rank_arr.length;

	$('.w_tops').empty();
	if(rlen==0){
		var str="<div class='nodata'>查無資料</div>";
		$('.w_tops').append(str);
	}else{
		for(let i=0; i< (rlen>2?3:rlen); i++){
			dynamic_topBox(rank_arr[i], i+1, nc, memNote_and_noteTr, lmtr_and_LM);
		}
	}



	var sorted_notes = sort_by_date(branch_filter, day_filter, keyup_filter, nc, memNote_and_noteTr, lmtr_and_LM);
	var simple_rankarr = rank_arr.map(cv=>{
		return [parseInt(cv[0].replace("note","")), cv[1]];
	});
	var slen = sorted_notes.length;
	var page_num = Math.ceil(slen/8);
	var limits = 8*pageNumber;
	// console.log(slen);
	// console.log(page_num);

	// 製作分頁第 pageNumber 頁
	$('.w_notes').empty();
	if(slen==0){
		var str="<div class='nodata'>查無資料</div>";
		$('.w_notes').append(str);
	}else{
		sorted_notes.reverse().map((cv,i)=>{
			if( (limits-8)<=i && i<limits ){
				dynamic_btnBox(sorted_notes[i], simple_rankarr, nc, memNote_and_noteTr, lmtr_and_LM);
			}
		});	
	}


	create_pagesbtn(page_num, pageNumber-1);


}

// 重新製作 分頁按鈕
function create_pagesbtn(page_num, index){
	$('.w_pages').empty();
	var page_str = "";

	for(let i=0; i< page_num; i++){
		if(i==index){
			page_str += "<li><a class='pagebtn page-active'>"+(i+1)+"</a></li>";
		}else{
			page_str += "<li><a class='pagebtn'>"+(i+1)+"</a></li>";
		}		
	}
	$('.w_pages').append(page_str);	

	// 分頁選單 a 的 click 事件 
	$('.pagebtn').on('click',function(){
		// console.log($(this).text());
		var n = $(this).text();
		create_pagesbtn(page_num, n-1);
		re_render(parseInt(n));
	});


}

// 尋找 支線/天數 篩過的條件下的 分數排行
function find_rank(branch, day, keyup, nc, memNote_and_noteTr, lmtr_and_LM){


	var scores = {};

	//如果遊記被close, 那該遊記的 nc 要過濾掉
	closed_notes.map(cv=>{
		nc = nc.filter(el=>{
			return cv.NOTE_no != el.NOTE_no;
		})
	});


	// 用支線過濾 nc
	if(branch!='all'){
		// console.log(nc);
		nc = nc.filter((cv,i)=>{
			var el = memNote_and_noteTr.find(el=>cv.NOTE_no==el.NOTE_no);
			// console.log(el);
			var tr = lmtr_and_LM.find(ele=>el.TR_no==ele.TR_no);
			// console.log(tr);
			return tr.branch == branch;
		});
	}

	// 用天數過濾 nc
	if(day!='all'){
		nc = nc.filter((cv,i)=>{
			var el = memNote_and_noteTr.find(el=>cv.NOTE_no==el.NOTE_no);
			var tr;
				lmtr_and_LM.map(ele=>{if(el.TR_no==ele.TR_no){tr=ele.LMTR_day}});
			return tr == day;			
		});
	}

	// 用文字輸入過濾 nc
	if(keyup!='all'){
		nc = nc.filter((cv,i)=>{
			var el = memNote_and_noteTr.find(el=>cv.NOTE_no==el.NOTE_no);
			return el.NOTE_title.indexOf(keyup) != -1;
		});
	}
	// console.log(nc);

	nc.map((cv,i)=>{
		if(cv.NC_rating!=null){ //有評分才要記錄
			var noteNo = scores['note'+(cv.NOTE_no)];
			if(noteNo){
				scores['note'+(cv.NOTE_no)].push(cv.NC_rating);
			}else{
				scores['note'+(cv.NOTE_no)] = [cv.NC_rating];
			}			
		}

	});

	// console.log(scores);

	for (var property in scores) {
	    if (scores.hasOwnProperty(property)) {
	        // console.log(typeof property);
	        scores[property] = scores[property].reduce((ttl,cv,i,ar)=>{
	        	return ttl = i==ar.length-1 ? ((ttl+cv)/ar.length).toFixed(1) : ttl + cv;
	        },0);
	    }
	}

	// console.log(scores);
	var sort_score = [];
	for (var property in scores){
	      sort_score.push([property, scores[property]]);
	}
	sort_score.sort((a,b)=>{return b[1] - a[1];});

	return sort_score;


}



// 製作第一名~第三名的 box
function dynamic_topBox(rank, ranknum, nc, memNote_and_noteTr, lmtr_and_LM){
	var str = '';
	var note_no = parseInt(rank[0].replace("note", ""));
	var card = memNote_and_noteTr.find(cv=>cv.NOTE_no == note_no);
	var max_day;

		lmtr_and_LM.map(cv=>{
			if(cv.TR_no==card.TR_no){ max_day = cv.LMTR_day; }
		});

	// console.log(card);
	var color = ['neiWan_tab','pingC_tab','gigi_tab','ali_tab'];
	var mybranch = ['內灣線','平溪線','集集線','阿里山線'];
	var thiscard = lmtr_and_LM.find(cv=>{
			return cv.TR_no==card.TR_no;
		});
	var index = mybranch.indexOf(thiscard.branch);	

	// console.log(note_no+'---');
	// console.log(max_day);
	str+="<div class='top_box'><div class='w_top writebox' id='w_top"+note_no+"' onclick=\"location.href='Wdetail.php?NOTE_no="+note_no+"'\">";
	str+="<div class='wrap_img'><img src='images/notewrite/"+card.NOTE_mainimg+"'></div>";
	str+="<div class='line_tab "+color[index]+" ch'>"+mybranch[index]+"</div>";
	str+="<div class='top_crown'><img src='images/write/crown"+ranknum+".png'></div>";
	str+="<div class='top_score'><span class='top_s en'>"+rank[1]+"</span></div>";
	str+="<div class='top_info'><div class='note_days'><p><span class='day'>"+max_day+"</span>天</p></div>";
	str+="<div class='top_txt'><div class='top_title'>"+card.NOTE_title+"</div><div class='top_desc'>"+card.NOTE_description+"</div>";
	str+="<div class='clearfix'></div></div><div class='clearfix'></div></div></div>";
	str+="<div class='infoBox'><div class='w_mem'><div class='memPic'><img src='"+card.MEM_img+"'></div>";
	str+="<div class='w_memId'>"+card.MEM_name+"</div><div class='w_memDate'>"+card.NOTE_createDate+"</div></div>";


	// 如果會員登入, 已經收藏的遊記的愛心要變成紅色
	if(storage['MEM_no']){ //已登入
		var this_nc = nc.find(cv=>cv.MEM_no==storage['MEM_no'] && cv.NOTE_no==note_no);
		if(this_nc && this_nc.NC_isCollected==1){
			str+="<div class='w_memFavi click_heart' id='collect"+note_no+"' value='取消收藏' hovertext='取消收藏'>";
			str+="<i class='icon-heart-empty special'></i>";
		}else{
			str+="<div class='w_memFavi' id='collect"+note_no+"' value='收藏' hovertext='收藏'>";
			str+="<i class='icon-heart-empty'></i>";
		}
	}else{
		str+="<div class='w_memFavi' id='collect"+note_no+"' value='收藏' hovertext='收藏'>";
		str+="<i class='icon-heart-empty'></i>";
	}

	
	str+="</div><div class='clearfix'></div></div></div></div>";


	$('.w_tops').append(str);

}


// 依照日期排出 NOTE_no
function sort_by_date(branch, day, keyup, nc, memNote_and_noteTr, lmtr_and_LM){
	// 用支線過濾 memNote_and_noteTr
	if(branch!='all'){
		memNote_and_noteTr = memNote_and_noteTr.filter(cv=>{
			var lm = lmtr_and_LM.find(el=>cv.TR_no==el.TR_no);
			return lm.branch == branch;
		});
		// console.log(memNote_and_noteTr);
	}
	// 用天數過濾 memNote_and_noteTr
	if(day!='all'){
		memNote_and_noteTr = memNote_and_noteTr.filter((cv,i)=>{
			var tr;
				lmtr_and_LM.map(ele=>{if(cv.TR_no==ele.TR_no){tr=ele.LMTR_day}});
			return tr == day;			
		});
	}

	// 用文字輸入過濾 memNote_and_noteTr
	if(keyup!='all'){
		memNote_and_noteTr = memNote_and_noteTr.filter((cv,i)=>{
			return cv.NOTE_title.indexOf(keyup) != -1;
		});
	}
	// console.log(memNote_and_noteTr);

	//依照日期排序
	memNote_and_noteTr.sort((a,b)=>{
		return (a.NOTE_createDate > b.NOTE_createDate) ? 1 : ((b.NOTE_createDate > a.NOTE_createDate) ? -1 : 0);
	}); 
	
	return memNote_and_noteTr;
}



// 製作依照日期排序的 box
function dynamic_btnBox(sorted_note, simple_rankarr, nc, memNote_and_noteTr, lmtr_and_LM){
// console.log(simple_rankarr);
	var str = '';
	var note_no = sorted_note.NOTE_no;
	var max_day;

		lmtr_and_LM.map(cv=>{
			if(cv.TR_no==sorted_note.TR_no){ max_day=cv.LMTR_day; }
		});

	var rating = simple_rankarr.find((cv,i)=>cv[0]==note_no);
		// 如果沒人評分, 那就給 0 分
		if(!rating){ rating = ['',0]; }
	// console.log(rating);

	var color = ['neiWan_tab','pingC_tab','gigi_tab','ali_tab'];
	var mybranch = ['內灣線','平溪線','集集線','阿里山線'];
	var thiscard = lmtr_and_LM.find(cv=>{
			return cv.TR_no==sorted_note.TR_no;
		});
	// console.log(thiscard);
	var index = mybranch.indexOf(thiscard.branch);


	str+="<div class='noteBox'><div class='note writebox' id='note"+note_no+"' onclick=\"location.href='Wdetail.php?NOTE_no="+note_no+"'\">";
	str+="<div class='wrap_img'><img src='images/notewrite/"+sorted_note.NOTE_mainimg+"'></div>";
	str+="<div class='line_tab "+color[index]+" ch'>"+mybranch[index]+"</div>";
	str+="<div class='note_score'><span class='top_s en'>"+rating[1]+"</span><i class='icon-star'></i></div>";
	str+="<div class='top_info'><div class='note_days'><p><span class='day'>"+max_day+"</span>天</p></div>";
	str+="<div class='top_txt'><div class='top_title'>"+sorted_note.NOTE_title+"</div><div class='top_desc'>"+sorted_note.NOTE_description+"</div></div>";
	str+="<div class='clearfix'></div></div></div>";
	str+="<div class='infoBox'><div class='w_mem'><div class='memPic'><img src='"+sorted_note.MEM_img+"'></div>";
	str+="<div class='w_memId'>"+sorted_note.MEM_name+"</div><div class='w_memDate'>"+sorted_note.NOTE_createDate+"</div></div>";


	// 如果會員登入, 已經收藏的遊記的愛心要變成紅色
	if(storage['MEM_no']){ //已登入
		var this_nc = nc.find(cv=>cv.MEM_no==storage['MEM_no'] && cv.NOTE_no==note_no);
		// console.log(this_nc);
		if(this_nc && this_nc.NC_isCollected==1){
			// console.log(this_nc);
			str+="<div class='w_memFavi click_heart' id='collect"+note_no+"' value='取消收藏' hovertext='取消收藏'>";
			str+="<i class='icon-heart-empty special'></i>";
		}else{
			str+="<div class='w_memFavi' id='collect"+note_no+"' value='收藏' hovertext='收藏'>";
			str+="<i class='icon-heart-empty'></i>";
		}
	}else{
		str+="<div class='w_memFavi' id='collect"+note_no+"' value='收藏' hovertext='收藏'>";
		str+="<i class='icon-heart-empty'></i>";
	}	
	


	str+="</div><div class='clearfix'></div></div></div>";

	$('.w_notes').append(str);
}


re_render(1);



// ============================================

// 紀錄會員登入前來自哪一個頁面
$('#WantTOWrite').on('click',function(event){
	event.preventDefault();

	if(!storage['MEM_email']){ 	//判定是不是會員登入狀態
		alert('請先登入好遊會員!'); 	//先跳窗警告

		// 儲存來源資訊: 從遊記首頁來的, 所以登入完成之後, 要去寫遊記的頁面
		storage.setItem('G1_whereAmIFrom','memberWd.php');
		location.href ='memlogin.php';	//有需要轉頁面再加這行
	}else{
		location.href ='memberWd.php';
	}
});


// ============================================

// 抓到點選的遊記的 note_no, 然後將 note_no 存入 session, 帶去遊記詳細頁面
function gotoDetail(){
	var note_no = $(this).attr('id').replace('w_top','').replace('note','');
	// console.log(note_no);
	var storage = sessionStorage;
	storage.setItem('noteDetail_note_no',note_no);
	window.location.assign("Wdetail.php");

}
// $(document).on('click','.writebox',gotoDetail);





// ============================================
// 紅色愛心收藏 click 事件
$(document).on('click','.w_memFavi',function(){
	var note_no = $(this).attr('id').replace('collect', '');
	var collect_val = $(this).attr('value');
	// console.log(note_no);
	// console.log(collect_val);

    var storage = sessionStorage;
    if(storage["MEM_no"]){ //已登入

		// 把 nc 資料帶到 collectUpdate.php 做新增或更新
		var data = {};
			data['NOTE_no'] = note_no;
			data['MEM_no'] = storage["MEM_no"];
            data['type'] = 'collect';
			data['NC_isCollected'] = collect_val=='收藏' ? 1 : 0;

		$.post('php/write/collectUpdate.php', data, function(nc_data){
			// console.log(nc_data);
			nc = JSON.parse( nc_data );
			re_render(1);
		});


    }else{ //尚未登入

        // ============================================
        var storage = sessionStorage;
        alert('請先登入好遊會員!');

        // 儲存來源資訊: 從遊記首頁來的, 所以登入完成之後, 要回遊記首頁
		storage.setItem('G1_whereAmIFrom','write.php');
		location.href ='memlogin.php';	//有需要轉頁面再加這行

    }
    // var favCount = $(this).attr('value');
    // // console.log(favCount);
    // if( favCount == '收藏' ){
    //     $(this).attr('value','取消收藏').addClass('click_heart');
    // }else if( favCount == '取消收藏' ){
    //     $(this).attr('value','收藏').removeClass('click_heart');
    // }

});



    // 提示文字
    $(document).on('mousemove','.w_memFavi',function(e){
    	var hoverText=$(this).attr('hovertext');
    	$('#showTxt').html(hoverText).show();
        $('#showTxt').css({
            'left': e.pageX +15,
            'top': e.pageY -135
        });
    }).on('mouseout','.w_memFavi',function(){
    	// var hoverText=$(this).attr('hovertext');
    	$('#showTxt').hide();
    });






