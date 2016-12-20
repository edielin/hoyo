$(function(){
	//lightBox================================
	$('.LM_cancel').click(function(){
		$('.bwcup').css({display:'none'});
		$('body').css('overflow','auto');
	});
	$('.bwadd').click(function(){
		$('.bwcup').css({display:'block'});
		$('body').css('overflow','hidden');
	});
	//lightBox end================================

// 上方限制比數=====================================================
function changepage(page){
	$(".topForm .bwLists tr").not(".firstHead").css({display:"none"});
	var totalLists= $(".topForm .bwLists tr").length; //12
	var startpage=(page==undefined ? 1 : page);  //預設頁數
	//將每頁的標頭刪除並重新加入==================================
	if($(".topForm .bwLists tr").hasClass("firstHead")){ 
		$(".firstHead").remove();
	}
	$(".topForm tr:first-child").before("<tr class='firstHead'><th class='th_No'>遊記編號</th><th class='th_memNo'>會員編號</th><th>遊記標題</th><th class='th_badBad'>被檢舉次數</th><th class='th_Time'>建立日期</th><th class='th_Todo'>行為</th></tr>");
	//=========================================================
	var maxLength=6;   //最大比數
	var xx=(startpage-1)*maxLength;  //開始索引
	if(xx==0){  //如果開始索引是0執行
		for(var i=xx+1; i<=maxLength+1; i++){  //0~7  要讓出0給head
			$(".topForm .bwLists tr:nth-child("+i+")").css({display:"table-row"});
		}
	}else if(xx!=0){  //不是零
		for(var i=(xx+2); i<=maxLength*startpage+1; i++){   //8~13
			$(".topForm .bwLists tr:nth-child("+i+")").css({display:"table-row"});
		}
	}
}
//==================================================================
$(".topForm .bwLists tr").not(".firstHead").css({display:"none"});
changepage();
	//上方跳頁
	$(document).on('click',".topPages span a",function(event){
		event.preventDefault();
		var page=$(this).attr("href").split("page=")[1];
		changepage(page);
	});

// 下方限制比數=====================================================
function changebottompage(page){
	$(".bottomForm .bwLists tr").not(".bottomFirstHead").css({display:"none"});
	var totalLists= $(".bottomForm .bwLists tr").length; //12
	var startpage=(page==undefined ? 1 : page);  //預設頁數
	//將每頁的標頭刪除並重新加入==================================
	if($(".bottomForm .bwLists tr").hasClass("bottomFirstHead")){ 
		$(".bottomFirstHead").remove();
	}
	$(".bottomForm tr:first-child").before("<tr class='bottomFirstHead'><th class='th_No'>遊記編號</th><th class='th_No'>所屬行程</th><th>遊記標題</th><th class='th_Time'>建立日期</th><th class='th_Todo'>行為</th></tr>");
	//=========================================================
	var maxLength=6;   //最大比數
	var xx=(startpage-1)*maxLength;  //開始索引
	if(xx==0){  //如果開始索引是0執行
		for(var i=xx+1; i<=maxLength+1; i++){  //0~7  要讓出0給head
			$(".bottomForm .bwLists tr:nth-child("+i+")").css({display:"table-row"});
		}
	}else if(xx!=0){  //不是零
		for(var i=(xx+2); i<=maxLength*startpage+1; i++){   //8~13
			$(".bottomForm .bwLists tr:nth-child("+i+")").css({display:"table-row"});
		}
	}
}
//==================================================================
$(".bottomPage .bwLists tr").not(".bottomFirstHead").css({display:"none"});
changebottompage();
	//下方跳頁
	$(document).on('click',".bottomPages span a",function(event){
		event.preventDefault();
		var bottomPage=$(this).attr("href").split("listPage=")[1];
		changebottompage(bottomPage);
	});
//跳頁end===========================================================
//封存==========================================================
	$(document).on('click',".closeBtn",function(event){
		var closeValue=$(this);  
		//抓到目前的遊記編號
		var noteNo=$(this).parent().parent().children().first().find('span').html();
		console.log(noteNo);
		event.preventDefault();
		var xhr=new XMLHttpRequest();
		if(closeValue.attr("value")=="封存"){
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					if(xhr.status==200){
						if(xhr.responseText=="1"){
							alert("重複封存");
						}else if(xhr.responseText=="更新完成"){
							closeValue.attr("value","解封");
							closeValue.css('backgroundColor','#aa3535');
							alert("封存成功");
						}
					}else{
						alert("server error");
					}
				}
			}
		}else if(closeValue.attr("value")=="解封"){
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					if(xhr.status==200){
						if(xhr.responseText=="0"){
							alert("重複解封");
						}else if(xhr.responseText=="更新完成"){
							closeValue.attr("value","封存");
							closeValue.css('backgroundColor','#075f9b');
							alert("解封成功");
						}
					}else{
						alert("server error");
					}
				}
			}
		}
		var dataObj={
			"NOTE_type":1,
			"NOTE_close":closeValue.attr("value"),//抓到按鈕的文字
			"NOTE_no":noteNo,
			"selectedValue":"none"
		}
		var data="NOTE_no="+JSON.stringify(dataObj);
		var url="backendWClose.php?";
		xhr.open("post",url,true);
		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
		xhr.send(data);
	});


//封存 end===========================================================

//新增 or 修改====================================================================
$(document).on('click',".bwadd",function(event){
	var changeTarget=$(this);
	var targetValue=changeTarget
	var addxhr=new XMLHttpRequest();
	addxhr.onreadystatechange=function(){
		if(addxhr.readyState==4){
			if(addxhr.status==200){
				$(".bwselect").html(addxhr.responseText);

			}
		}
	}
	var addObj={
		"NOTE_type":3
	}
	var addData="NOTE_no="+JSON.stringify(addObj);
	var url="backendWClose.php?";
	addxhr.open("post",url,true);
	addxhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	addxhr.send(addData);
});


//排序=======================================================================
$(document).on('change','#L_branch',function(){
	var selectedValue=$(this).select()[0].value;
	var sxhr=new XMLHttpRequest();
	sxhr.onreadystatechange=function(){
		if(sxhr.readyState==4){
			console.log(sxhr.status);
			if(sxhr.status==200){
				$('.topForm .bwLists').html(sxhr.responseText);
				changepage();
			}
		}
	}
	var dataObj={
			"NOTE_type":2,
			"selectedValue":selectedValue
	}
	var selectedData="NOTE_no="+JSON.stringify(dataObj);
	var url="backendWclose.php?";
	sxhr.open("post",url,true);
	sxhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	sxhr.send(selectedData);
});
//排序end=======================================================================
//查看==================================================
$(document).on('click','.lookBtn',function(event){
var noteNumber=$(this).parent().parent().children().first().find('span').html();
$(this).attr("href","Wdetail.php?NOTE_no="+noteNumber);

//===========session用法======================================
var storage=sessionStorage;
storage.setItem("noteDetail_note_no",noteNumber);
// location.href="../../../WDetail.php";
//============================================================
});



});