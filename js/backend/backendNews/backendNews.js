$(function(){
	$('.LM_cancel').click(function(){
		$('.btCup').css({display:"none"});
		$('body').css('overflow','auto');		
	});
	$('.btAdd').click(function(){
		$('.btCup').css({display:"block"});
		$('body').css('overflow','hidden');
	});


	$('.LM_cancel2').click(function(){
		$('.btCup2').css({display:"none"});
		$('body').css('overflow','auto');		
	});
	$('.btEdit').click(function(){
		$('.btCup2').css({display:"block"});
		$('body').css('overflow','hidden');

		var queryI=$(this).parent().parent().children().first().text();
		queryItem(queryI);	
	});


	$('#NEWS_img').change(function(){
		fileChange();
	});
	$('#NEWS_img2').change(function(){
		fileChange2();
	});
	function fileChange(){
		var file=document.getElementById('NEWS_img').files[0];

		var readFile=new FileReader();
		readFile.readAsDataURL(file);
		readFile.addEventListener('load',function(){
		var image=document.getElementById('imageshow');
		image.src=readFile.result;
		},false);
	}
	function fileChange2(){
		var file=document.getElementById('NEWS_img2').files[0];

		var readFile=new FileReader();
		readFile.readAsDataURL(file);
		readFile.addEventListener('load',function(){
		var image=document.getElementById('imgshow2');
		image.src=readFile.result;
		},false);
	}




	$('.LM_cancel2').on('click',function(){
		console.log($('#imgshow2').attr('src',''));
		$('#imgshow2').attr('src',' ');
        $('#NEWS_img2').val('');

	});



	function queryItem(queryI){

		var xhr = new XMLHttpRequest();
  		xhr.onreadystatechange=function (){
    		if( xhr.readyState == 4){
	     		if( xhr.status == 200 ){
          			postStr(xhr.responseText);
	     		}else{
	        		alert(xhr.status);
	     		}
	 		}
  		}
	
	  var data_info="NEWS_no="+queryI;
	  var url="queryNews.php?";
	  xhr.open("Post",url,true);
	  xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	  xhr.send(data_info);
	}



	function postStr(newsStr){

		var news=JSON.parse(newsStr);
		var NEWS_no=news.NEWS_no;
		var NEWS_title=news.NEWS_title;
		var NEWS_content=news.NEWS_content;		
		var NEWS_time=news.NEWS_time;		
		var NEWS_img=news.NEWS_img;
		var NEWS_img_old=news.NEWS_img;		

		document.getElementById('hiddenNO').value=NEWS_no;
		document.getElementById('NEWS_title2').value=NEWS_title;
		document.getElementById('NEWS_content2').value=NEWS_content;
		document.getElementById('NEWS_time2').value=NEWS_time;
		document.getElementById('NEWS_img_old').value=NEWS_img;
		document.getElementById('newsimg01').src=NEWS_img;
	}




	$('.btdel').click(function(){
		var deleteItem=$(this).parent().parent().children().first().text();

		if(confirm("確定將編號 "+deleteItem+" 消息刪除嗎?")){
			$(this).parent().parent().remove();
			deleteI(deleteItem);
		}
		else{}
	});

	function deleteI(deleteItem){
		// console.log(deleteItem);
		var xhr = new XMLHttpRequest();
  		xhr.onreadystatechange=function (){
    		if( xhr.readyState == 4){
	     		if( xhr.status == 200 ){
          			console.log(xhr.responseText);
	     		}else{
	        		alert(xhr.status);
	     		}
	 		}
  		}
	
	  var data_info="NEWS_no="+deleteItem;
	  var url="deleteNews.php?";
	  xhr.open("Post",url,true);
	  xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	  xhr.send(data_info);
	}


	$('#insertNew').on('click',function(event){
	
		if($('#NEWS_title').val()==''){
			event.preventDefault();
			alert('標題未輸入');
			return;	
		}
		if($('#NEWS_content').val()==''){
			event.preventDefault();
			alert('內容未輸入');
			return;	
		}
		if($('#NEWS_time').val()==''){
			event.preventDefault();
			alert('日期未輸入');
			return;	
		}
		if($('#NEWS_img').val()==''){
			event.preventDefault();
			alert('未選擇圖片');
			return;	
		}

	})


	$('#updateNew').on('click',function(event){
	
		if($('#NEWS_title2').val()==''){
			event.preventDefault();
			alert('標題未輸入');
			return;	
		}
		if($('#NEWS_content2').val()==''){
			event.preventDefault();
			alert('內容未輸入');
			return;	
		}

	})


    //禁止雙引號
    $(document).on('change', 'textarea, input', function(){
        $(this).val($(this).val().replace(/['":*$\\]/g, ''));
        // console.log($(this).val());
    });
    $(document).on('keyup', 'textarea, input', function(){
        $(this).val($(this).val().replace(/['":*$\\]/g, ''));
        // console.log($(this).val());
    });


	//  $.post 到 createNews.php

	// $('#insertNew').on('click',function(event){
 //    	event.preventDefault();

	// 	var NEWS_title = $('#NEWS_title').val();
	// 	var NEWS_content =$('#NEWS_content').val();
	// 	var NEWS_time =$('#NEWS_time').val();
	// 	console.log(NEWS_time);
 //    	var NEWS_img= $('#NEWS_img').val().replace(/C:\\fakepath\\/i, '');

 //    	var news_data = {'NEWS_title': NEWS_title,
 //                    'NEWS_content': NEWS_content,
 //                    'NEWS_time': NEWS_time,
 //                    'NEWS_img': NEWS_img,
 //         };

 //     	console.log(news_data);

	// 	if(NEWS_title && NEWS_content && NEWS_time && NEWS_img){

	//         $.post("createNews.php", news_data, function(data) {
	//             alert('資料輸入成功');
	//         }); 			
	// 	}else{
	//             alert('資料輸入不完全，請輸入資料');
	// 	}

	// });




});



