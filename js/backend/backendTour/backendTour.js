$(function(){
	$('.LM_cancel').click(function(){
		$('.btCup').css({display:"none"});
		$('body').css('overflow','auto');		
	});
	$('.btAdd').click(function(){
		// $('.btCup').css({display:"block"});
		$('body').css('overflow','hidden');
		location.href = "backend_freeMobile.php";
	});
	$('.btlookTour').click(function(){
		$('.btshowTour').not(this).slideUp();
		$(this).parents('tr').next('tr').children('td').children('.btshowTour').stop(true).slideToggle();		
	});



    //radio 被點選
    $('.bt_isCheck').click(function(){
        $('.bt_isCheck').not(this).removeClass('bt_gray');          
        $(this).addClass('bt_gray');
    }); 
    // 封存
    $('.btlookBtn').click(function(){
    	var value=$(this);
    	var TR_no=$(this).parent().parent().children().first().find('span').html();
    	var xhr=new XMLHttpRequest();
    	if(value.val()=="封存"){
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					if(xhr.status==200){
						if(xhr.responseText=="1"){
							alert("重複封存");
						}else if(xhr.responseText=="更新完成"){
							value.attr("value","解封");
							value.css('backgroundColor','#aa3535');
							alert("封存成功");
							console.log(xhr.responseText);
						}
					}else{
						alert("server error");
					}
				}
			}
		}else if(value.val()=="解封"){
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
					if(xhr.status==200){
						if(xhr.responseText=="0"){
							alert("重複解封");
						}else if(xhr.responseText=="更新完成"){
							console.log(xhr.responseText);
							value.attr("value","封存");
							value.css('backgroundColor','#075f9b');
							alert("解封成功");
						}
					}else{
						alert("server error");
					}
				}
			}
		}
    	var dataObj={
    		"data_Type":1,
    		"value":value.val(),
    		"TR_no":TR_no
    	}
    	var data="TR_no="+JSON.stringify(dataObj);
    	var url="backendTourClose.php?";
    	xhr.open("post",url,true);
    	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    	xhr.send(data);
    });


    //修改
    $(document).on('click','.btnModify',function(){
    	var TR_no = parseInt($(this).parent().parent().children().first().find('span').html());
    	// console.log(TR_no);

		// 修改行程
		var storage = sessionStorage;
		storage.setItem('backend_modify_tour_by_TRno',TR_no);

		location.href = "backend_freeMobile.php";

    });


});