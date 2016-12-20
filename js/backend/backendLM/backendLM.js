 
$(function (){

    //=============================================================
    //上半部改變的欄位
    //=============================================================
 	function changeObj(val){
 		var LM=JSON.parse(val);
 		rePage(val); 
 		// console.log(LM);
	 	var str="<tr><th class='th_Img'>圖片</th><th class='th_who'>地標名</th><th class='th_No'>支線</th><th class='th_No'>站點</th><th class='th_No'>類型</th><th>地址</th><th class='th_Todo'>行為</th></tr>";
	 	if(LM.length!=1){	
	 		for (var i=0 ;i<LM.length-1;i++){
	 			str+= "<tr><td class='btheadshot'><div class='BL_imgbox' style='background-image:url(images/LM/"+LM[i].LM_img01+")'></div></td>";
	            str+="<td>"+LM[i].LM_name+"</td>";    
	            str+="<td>"+LM[i].LM_branch+"</td>";           
	            str+="<td>"+LM[i].LM_station+"</td>";                   
	            str+="<td>";
	            if(LM[i].LM_type =="f_landscape"){
	    			str+="景點";
	    		}else if(LM[i].LM_type =="f_eat"){
	    			str+="美食";
	    		}else if(LM[i].LM_type =="f_stay"){
	    			str+="住宿";
	    		}else if(LM[i].LM_type =="f_activity"){
	    			str+="活動";
	    		}else{
	    			str+="其餘";
	    		}
				str+="</td>";
	            str+="<td>"+LM[i].LM_address+"</td>";                
	            str+="<td>";               
	            str+="<input type='button' id='"+'lmno'+LM[i].LM_no+"' value='修改' class='blCheckBtn btn-gray fontFamily btn-margin modify_btn'>";               
	            str+="</td></tr>";  

                // console.log(LM[i].LM_no);
	 		}
 		}else if(LM.length==1){
 			str+="<tr><td colspan='7'>查無地標資料</td></tr>";
 		}
 		$(".blLists").empty();
		$(".blLists").html(str);


    	//重新綁定修改	
        $('.modify_btn').on('click',function(){

        });
 	}
	//上半部改變欄位end======================================================
 	//上半部重算頁數=========================================================
 	function rePage(val){
 		var page=JSON.parse(val);
 		var length=page.length-1;  //抓取索引位置
 		var j=0;
 		var str="";
 		page=page[length];  //抓取頁數
 		// console.log(length);
 		if(length!=0){
	 		str+="<span><a href='1' class='btn-gray'>第一頁</a></span>";
		 		while(j<page){
		 			str+="<span><a href='"+(j+1)+"' class='btn-gray'>"+(j+1)+"</a></span>";
		 			j++;
		 		}
	 		str+="  <span><a href="+page+" class='btn-gray'>最尾頁</a></span>";
	 		$(".topPositionPage").empty();
	 		$(".topPositionPage").html(str);
 		}else if(length==0){
 		 	$(".topPositionPage").empty();
 			$(".topPositionPage").html(str);
 		}
 	}
 	//上半部重算頁數 end=====================================================




	//======================================================================
	//下半部改變欄位
	//======================================================================

 	function bottomChangeObj(val){
 		var LM=JSON.parse(val);
 		bottomRePage(val); 
 		// console.log(LM);
	 	var str="<tr><th class='th_Img'>圖片</th><th class='th_who'>地標名</th><th class='th_No'>支線</th><th class='th_No'>站點</th><th class='th_No'>類型</th><th>地址</th><th class='th_Todo'>行為</th></tr>";
	 	if(LM.length!=1){	
	 		for (var i=0 ;i<LM.length-1;i++){
	 			str+= "<tr><td class='btheadshot'><div class='BL_imgbox' style='background-image:url(images/LM/"+LM[i].LM_img01+")'></div></td>";
	            str+="<td>"+LM[i].LM_name+"</td>";    
	            str+="<td>"+LM[i].LM_branch+"</td>";           
	            str+="<td>"+LM[i].LM_station+"</td>";                   
	            str+="<td>";
	            if(LM[i].LM_type =="f_landscape"){
	    			str+="景點";
	    		}else if(LM[i].LM_type =="f_eat"){
	    			str+="美食";
	    		}else if(LM[i].LM_type =="f_stay"){
	    			str+="住宿";
	    		}else if(LM[i].LM_type =="f_activity"){
	    			str+="活動";
	    		}else{
	    			str+="其餘";
	    		}
				str+="</td>";
	            str+="<td>"+LM[i].LM_address+"</td>";                
	            str+="<td>";               
	            str+=" <input type='button' id='"+'lmno'+LM[i].LM_no+"' value='審核' class='btn-gray fontFamily checkbtn'>";               
	            str+="</td></tr>";  
	 		}

            // console.log(LM[i].LM_no);
 		}else if(LM.length==1){
 			str+="<tr><td colspan='7'>查無審核資料</td></tr>";
 		}
 		$(".bottomblLists").empty();
		$(".bottomblLists").html(str);

    	//重新綁定修改	
        $('.checkbtn').on('click',function(){

        });

 	}
	//下半部改變欄位end======================================================
 	//下半部重算頁數=========================================================

 	function bottomRePage(val){
 		var page=JSON.parse(val);
 		var length=page.length-1;  //抓取索引位置
 		var j=0;
 		var str="";
 		page=page[length];  //抓取頁數
 		// console.log(length);
 		if(length!=0){
	 		str+="<span><a href='1' class='btn-gray'>第一頁</a></span>";
		 		while(j<page){
		 			str+="<span><a href='"+(j+1)+"' class='btn-gray'>"+(j+1)+"</a></span>";
		 			j++;
		 		}
	 		str+="  <span><a href="+page+" class='btn-gray'>最尾頁</a></span>";
	 		$(".verifyPage").empty();
	 		$(".verifyPage").html(str);
 		}else if(length==0){
 		 	$(".verifyPage").empty();
 			$(".verifyPage").html(str);
 		}
 	}

 	//下半部重算頁數 end=====================================================

    //=============================================================
    //改變的欄位 end
    //=============================================================




    function preview(input) {
    	// console.log(input);
    	// console.log(input.files[0]);

        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                // $(input).parent().next().find('.preview').attr('src', e.target.result);
                $(input).parent().next().children().remove();
                $(input).parent().next().append("<div class='cancelBtn'><i class='icon-cancel'></i></div>");
                $(input).parent().next().append("<img class='preview' src='"+e.target.result+"'>");

            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    function remove_input_file(num) {
    	var id = '#LM_img'+num;
    	// console.log( id );
    	// console.log($( id )[0].files[0]);
    	$( id ).val("");
    	// console.log($( id ));
    }
    //廢棄=========================================================
	// function uploadImg(){
	//     var noteImgs = document.querySelectorAll('.uploadImg');

	//     Array.prototype.forEach.call(noteImgs, function(noteImg){
	//         var label	 = noteImg.nextElementSibling,
	//             labelVal = label.innerHTML;

	//         noteImg.addEventListener('change', function(e){
	//             e? e.preventDefault() : event.returnValue==false;
	//             var fileName = '';
	//             // if( this.files[0]==undefined ){
	//             //     label.innerHTML = labelVal;
	//             //     label.className -= 'success';
	//             //     label.className = 'LM_label';
	//             //     // console.log(label.parentNode.parentNode.childNodes[3].childNodes[1]);
	//             // }else{
	//             //     fileName = this.files[0].name;
	//             //     label.querySelector('.file_name').innerHTML = fileName;
	//             //     label.querySelector('.icon-picture').className = "icon-ok";
	//             //     label.className += ' success';
	//             //     console.log(fileName);
	//             // }
	//             if(this.files){
	//                 fileName = this.files[0].name;
	//                 label.querySelector('.file_name').innerHTML = fileName;
	//                 label.querySelector('.icon-picture').className = "icon-ok";
	//                 label.className += ' success';
	//                 console.log(fileName);
	//             }
	//         });
	//     });
	// }
	//以上廢棄=============================================================

    //==================================================================
    //換頁
    //==================================================================
    //上半部Ajax
    function changepage(page,LM_branch,LM_station){
    	var xhr=new XMLHttpRequest();
    	xhr.onreadystatechange=function(){
    		if(xhr.readyState==4 && xhr.status==200){
    			if(xhr.responseText!="error"){
    				// console.log(xhr.responseText);
    				changeObj(xhr.responseText)
    			}else if(xhr.responseText=="error"){
    				// console.log("return false");
    			}
    		}
    	}
    	// console.log("LM_station"+LM_station);
    	// console.log("LM_branch"+LM_branch);
    	var dataObj={
    		"type":1,
	    	"page":parseInt(page),
	    	"LM_branch":LM_branch,
	    	"LM_station":LM_station
	    }
	    // console.log(dataObj);
	    var data="pagedata="+JSON.stringify(dataObj);
	    var url="backendLMchangePage.php?";
	    xhr.open("post",url,true);
	    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	    xhr.send(data);
    }
    //上半部Ajax end==================================

    //下半部Ajax
    function botChangePage(page){
    	var xhr=new XMLHttpRequest();
    	xhr.onreadystatechange=function(){
    		if(xhr.readyState==4 && xhr.status==200){
    			if(xhr.responseText!="error"){
    				// console.log(xhr.responseText);
    				bottomChangeObj(xhr.responseText)
    			}else if(xhr.responseText=="error"){
    				// console.log("return false");
    			}
    		}
    	}
    	var dataObj={
    		"type":3,
	    	"page":parseInt(page)
	    }
	    // console.log(dataObj);
	    var data="pagedata="+JSON.stringify(dataObj);
	    var url="backendLMchangePage.php?";
	    xhr.open("post",url,true);
	    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	    xhr.send(data);
    }

    //下半部Ajax end==================================

    //上半部
    $(document).on("click",".topPositionPage span a",function(event){
    	event.preventDefault();
    	var LM_branch=$("#L_branch").select()[0].value;  //抓支線
    	var LM_station=$("#pdaysDro").select()[0].value;  //抓站點
    	var evtThis=$(this);  //按鈕位置
    	// console.log(evtThis.attr("href"));
    	changepage(evtThis.attr("href"),LM_branch,LM_station);
    });


    //下半部
    $(document).on("click",".verifyPage span a",function(event){
    	event.preventDefault();
    	var evtThis=$(this); 
    	botChangePage(evtThis.attr("href"));
    });
    //==================================================================
    //換頁 end
    //==================================================================
    




    //==================================================================
    //上傳圖片
    //==================================================================
    
	function uploadImg(){
        var noteImgs = document.querySelectorAll('.uploadImg');
        Array.prototype.forEach.call(noteImgs, function(noteImg){
            var label  = noteImg.nextElementSibling,
                labelVal = label.innerHTML;

            noteImg.addEventListener('change', function(e){
                e? e.preventDefault() : event.returnValue==false;
                var fileName = '';
                if( this.files ){
                        fileName = this.files[0].name;
                        label.querySelector('.file_name').innerHTML = fileName;
                        label.querySelector('.icon-picture').className = "icon-ok";
                        label.className += ' success';
                    // console.log(fileName);
                }
            });
        });
    }
    uploadImg();


    function preview(input) {
        // console.log(input);

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                // $(input).parent().next().find('.preview').attr('src', e.target.result);
                $(input).parent().next().children().remove();
                $(input).parent().next().append("<div class='cancelBtn'><i class='icon-cancel'></i></div>");
                $(input).parent().next().append("<img class='preview' src='"+ e.target.result +"'>");
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    function remove_input_file(num){
        var id = '#LM_img'+num;
        $(id).val('');
    }

      //  $("body").on("change", ".upl", function (){
      //      preview(this);
      //  })
    $('.upl').on('change', function(){
        preview(this);
    });

    $('body').on('click', '.cancelBtn', function(e){
        // 刪除 input file $('#test').attr('id')
        var n = $(this).parent().parent().find('input').attr('id');
        // console.log( n );
        n = n.replace('LM_img', '');
        remove_input_file(n);

        //清除預覽圖
        $(this).next().remove();

        //清除label樣式
        $(this).parent().parent().find('label').removeClass('success').empty();
        $(this).parent().parent().find('label').append("<i class='icon-picture'></i><span class='file_name'>上傳圖片</span>");

        //清除按鈕
        $(this).remove();


    });


////////////////////////////////////////////////////////////





  //   $("body").on("change", ".upl", function (){
  //       preview(this);
  //   });
    
  //   $("body").on("click", ".cancelBtn", function (){
  //   	//刪除 input file $('#test').attr('id')
  //   	var n = $(this).parent().parent().find('input').attr('id');
  //   	n = n.replace('LM_img',''); //str.replace("Microsoft", "W3Schools");
  //       remove_input_file( n );
  //       $(this).next().remove();


		// $(this).parent().parent().find('label').removeClass('success').empty();
		// $(this).parent().parent().find('label').append("<i class='icon-picture'></i><span class='file_name'>上傳圖片</span>");

  //       $(this).remove();
  //   });

//新增==活動跳列=========================================

   //radio 被點選
    $('.ML_isCheck').click(function(){
        $('.ML_isCheck').not(this).removeClass('LM_gray');          
        $(this).addClass('LM_gray');
    });   

    //活動被click要出現經常活動和短時活動
    $('.ML_isCheck').click(function(){
        var typename=$(this).children().attr('id');
        if(typename=='LM_type3'){
           $('.LM_type_action').css('opacity','1');
        }
        else{
          $('.LM_type_action').css('opacity','0');
        }
    });
    //活動被點選
    $('.action_check').click(function(){
        $('.action_check').not(this).removeClass('LM_gray');          
        $(this).addClass('LM_gray');
    });


////////////////////////////////////////////////////////////


//lightBox==================================================
    //點新增
    $(document).on('click','#LM_insert_btn',function(){
        location.href="backend_createLM.php";
    });

    //點修改
    $(document).on('click','.modify_btn',function(){
        var lmno = parseInt($(this).attr('id').substr(4));
        // console.log(lmno);

        var storage = sessionStorage;
        storage.setItem('backendLM_modify',lmno);

        location.href="backend_createLM.php";
    });

    //點審核
    $(document).on('click','.checkbtn',function(){
        var lmno = parseInt($(this).attr('id').substr(4));
        // console.log(lmno);

        var storage = sessionStorage;
        storage.setItem('backendLM_check',lmno);

        location.href="backend_createLM.php";
    });

    ////////////////////////////////////////////////////////////

    //換支線=====================================================
    //換支線 站點改變  option 值為站名 (篩選)
    $('#L_branch').on('change',function(event){
        var branch_num = event.target.value;   //抓支線
    	// var LM_branch=$("#L_branch").select()[0].value;  //抓支線
    	var LM_station=$("#pdaysDro").select()[0].value;  //抓站點
        $("#pdaysDro").empty();

        if(branch_num=='內灣線'){
            stations=['新竹','北新竹','千甲','新莊','竹中','上員','榮華','竹東','橫山','九讚頭','合興','富貴','內灣'];
            for(var i=0;i<stations.length;i++){
                pdaysDro.add(new Option(stations[i] , stations[i])  );  
            }
            LM_station=$("#pdaysDro").select()[0].value;  //抓站點
            // console.log(LM_station);
        }
        if(branch_num=='平溪線'){
            stations=['瑞芳','猴硐','三貂嶺','大華','十分','望古','嶺腳','平溪','菁桐'];
            for(var i=0;i<stations.length;i++){
                pdaysDro.add(new Option(stations[i] , stations[i])  );  
            }
            LM_station=$("#pdaysDro").select()[0].value;  //抓站點
            // console.log(LM_station);
        }
        if(branch_num=='集集線'){
            stations=['二水','源泉','濁水','龍泉','集集','水里','車埕'];
            for(var i=0;i<stations.length;i++){
                pdaysDro.add(new Option(stations[i] , stations[i])  );  
            }
            LM_station=$("#pdaysDro").select()[0].value;  //抓站點
            // console.log(LM_station);
        }
        if(branch_num=='阿里山線'){
            stations=['嘉義','北門','竹崎','交力坪','奮起湖','神木','阿里山','沼平','祝山'];
            for(var i=0;i<stations.length;i++){
                pdaysDro.add(new Option(stations[i] , stations[i])  );  
            }
            LM_station=$("#pdaysDro").select()[0].value;  //抓站點
            // console.log(LM_station);
        }
        //以下REN code==========================================================
        var changeXhr=new XMLHttpRequest();
		changeXhr.onreadystatechange=function(){
			if(changeXhr.readyState==4&&changeXhr.status==200){
				if(changeXhr.responseText=="error"){
					// console.log("error");
				}else if(changeXhr.responseText!="error"){
					// console.log(changeXhr.responseText);
					changeObj(changeXhr.responseText)
				}
			}
		}
        // console.log("LM_station"+LM_station);
    	// console.log("LM_branch"+branch_num);
    	var dataObj={
    		"type":2,
	    	"LM_branch":branch_num,
	    	"LM_station":LM_station
	    }
	    // console.log(dataObj);
	    var data="pagedata="+JSON.stringify(dataObj);
	    var url="backendLMchangePage.php?";
	    changeXhr.open("post",url,true);
	    changeXhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	    changeXhr.send(data);

    });
    //站點改變  option 值為站名 (篩選)
    $("#pdaysDro").on("change",function(){
    	var branch_num = event.target.value;   //抓站點
    	var LM_branch=$("#L_branch").select()[0].value;  //抓支線
    	var changeXhr=new XMLHttpRequest();
		changeXhr.onreadystatechange=function(){
			if(changeXhr.readyState==4&&changeXhr.status==200){
				if(changeXhr.responseText=="error"){
					// console.log("error");
				}else if(changeXhr.responseText!="error"){
					// console.log(changeXhr.responseText);
					changeObj(changeXhr.responseText)
				}
			}
		}
        // console.log("LM_station"+branch_num);
    	// console.log("LM_branch"+LM_branch);
    	var dataObj={
    		"type":2,
	    	"LM_branch":LM_branch,
	    	"LM_station":branch_num
	    }
	    // console.log(dataObj);
	    var data="pagedata="+JSON.stringify(dataObj);
	    var url="backendLMchangePage.php?";
	    changeXhr.open("post",url,true);
	    changeXhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
	    changeXhr.send(data);
    });



    //換支線 站點改變  option 值為站名 (新增)
    $('#L_branch2').on('change',function(event){
        var branch_num = event.target.value;

        $("#pdaysDro2").empty();

        if(branch_num=='內灣線'){
            stations=['新竹','北新竹','千甲','新莊','竹中','上員','榮華','竹東','橫山','九讚頭','合興','富貴','內灣'];
            for(var i=0;i<stations.length;i++){
                pdaysDro2.add(new Option(stations[i] , stations[i])  );  
            }       
        }
        if(branch_num=='平溪線'){
            stations=['瑞芳','猴硐','三貂嶺','大華','十分','望古','嶺腳','平溪','菁桐'];
            for(var i=0;i<stations.length;i++){
                pdaysDro2.add(new Option(stations[i] , stations[i])  );  
            }
        }
        if(branch_num=='集集線'){
            stations=['二水','源泉','濁水','龍泉','集集','水里','車埕'];
            for(var i=0;i<stations.length;i++){
                pdaysDro2.add(new Option(stations[i] , stations[i])  );  
            }
        }
        if(branch_num=='阿里山線'){
            stations=['嘉義','北門','竹崎','交力坪','奮起湖','神木','阿里山','沼平','祝山'];
            for(var i=0;i<stations.length;i++){
                pdaysDro2.add(new Option(stations[i] , stations[i])  );  
            }
        }
    });

    //換支線 站點改變  option 值為站名 (修改)
    $('#L_branch3').on('change',function(event){
        var branch_num = event.target.value;

        $("#pdaysDro3").empty();

        if(branch_num=='內灣線'){
            stations=['新竹','北新竹','千甲','新莊','竹中','上員','榮華','竹東','橫山','九讚頭','合興','富貴','內灣'];
            for(var i=0;i<stations.length;i++){
                pdaysDro3.add(new Option(stations[i] , stations[i])  );  
            }       
        }
        if(branch_num=='平溪線'){
            stations=['瑞芳','猴硐','三貂嶺','大華','十分','望古','嶺腳','平溪','菁桐'];
            for(var i=0;i<stations.length;i++){
                pdaysDro3.add(new Option(stations[i] , stations[i])  );  
            }
        }
        if(branch_num=='集集線'){
            stations=['二水','源泉','濁水','龍泉','集集','水里','車埕'];
            for(var i=0;i<stations.length;i++){
                pdaysDro3.add(new Option(stations[i] , stations[i])  );  
            }
        }
        if(branch_num=='阿里山線'){
            stations=['嘉義','北門','竹崎','交力坪','奮起湖','神木','阿里山','沼平','祝山'];
            for(var i=0;i<stations.length;i++){
                pdaysDro3.add(new Option(stations[i] , stations[i])  );  
            }
        }
    });

    //換支線 站點改變  option 值為站名 (審核)
    $('#L_branch4').on('change',function(event){
        var branch_num = event.target.value;

        $("#pdaysDro4").empty();

        if(branch_num=='內灣線'){
            stations=['新竹','北新竹','千甲','新莊','竹中','上員','榮華','竹東','橫山','九讚頭','合興','富貴','內灣'];
            for(var i=0;i<stations.length;i++){
                pdaysDro4.add(new Option(stations[i] , stations[i])  );  
            }       
        }
        if(branch_num=='平溪線'){
            stations=['瑞芳','猴硐','三貂嶺','大華','十分','望古','嶺腳','平溪','菁桐'];
            for(var i=0;i<stations.length;i++){
                pdaysDro4.add(new Option(stations[i] , stations[i])  );  
            }
        }
        if(branch_num=='集集線'){
            stations=['二水','源泉','濁水','龍泉','集集','水里','車埕'];
            for(var i=0;i<stations.length;i++){
                pdaysDro4.add(new Option(stations[i] , stations[i])  );  
            }
        }
        if(branch_num=='阿里山線'){
            stations=['嘉義','北門','竹崎','交力坪','奮起湖','神木','阿里山','沼平','祝山'];
            for(var i=0;i<stations.length;i++){
                pdaysDro4.add(new Option(stations[i] , stations[i])  );  
            }
        }
    });
});
////////////////////////////////////////////////////////////////////////////////
