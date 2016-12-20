$(function(){

	// 跳轉業面============================================================
	$(document).on('click','.brbtn',function(){
		var Note_no=$(this).parent().parent().children("td:nth-child(2)").text();
		// console.log(Note_no);
		$(this).attr("href","Wdetail.php?NOTE_no="+Note_no);
		window.scrollTo(0,document.body.scrollHeight);  //保留
	});
	//=====================================================================

	$(document).on('click','.closeBtn',function(){
		var re_no=$(this).parent().parent().children("td:nth-child(1)").children("span").text();
		// console.log(re_no);
		var x=confirm("確定將編號 "+re_no+" 的回覆刪除嗎?");
		if(x==true){
		var listthis=$(this).parent().parent();
		// console.log(listthis);
		
		// var re_no=$(this).parent().parent().children("td:nth-child(1)").text();
		var Note_no=$(this).parent().parent().children("td:nth-child(2)").text();
		// console.log(Note_no);
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				console.log(xhr.readyState);
				if(xhr.status==200){
					console.log(xhr.responseText);
					if(xhr.responseText=="更新完成"){
						$(listthis).remove();
						alert("刪除完成");
					}else if(xhr.responseText=="0"){
						alert("查無該筆資料");
					}
				}
			}
		}
		var noteObj={
			"NOTE_type":4,
			"NOTE_re":re_no,
			"NOTE_no":Note_no
		}
		// console.log(noteObj);
		console.log("asdfsadf");
		var noteData="NOTE_no="+JSON.stringify(noteObj);
		var url="backendReplyClose.php?";
		xhr.open("post",url,true);
		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
		xhr.send(noteData);
		}
		else if(x==false){
			return;
		}
	});



});