
$(function (){

    function preview(input) {
    	console.log(input);
    	console.log(input.files[0]);

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

	function uploadImg(){
	    var noteImgs = document.querySelectorAll('.uploadImg');

	    Array.prototype.forEach.call(noteImgs, function(noteImg){
	        var label	 = noteImg.nextElementSibling,
	            labelVal = label.innerHTML;

	        noteImg.addEventListener('change', function(e){
	            e? e.preventDefault() : event.returnValue==false;
	            var fileName = '';
	            // if( this.files[0]==undefined ){
	            //     label.innerHTML = labelVal;
	            //     label.className -= 'success';
	            //     label.className = 'LM_label';
	            //     // console.log(label.parentNode.parentNode.childNodes[3].childNodes[1]);
	            // }else{
	            //     fileName = this.files[0].name;
	            //     label.querySelector('.file_name').innerHTML = fileName;
	            //     label.querySelector('.icon-picture').className = "icon-ok";
	            //     label.className += ' success';
	            //     console.log(fileName);
	            // }
	            if(this.files){
	                fileName = this.files[0].name;
	                label.querySelector('.file_name').innerHTML = fileName;
	                label.querySelector('.icon-picture').className = "icon-ok";
	                label.className += ' success';
	                console.log(fileName);
	            }
	        });
	    });
	}

    $("body").on("change", ".upl", function (){
        preview(this);
    });
    
    $("body").on("click", ".cancelBtn", function (){
    	//刪除 input file $('#test').attr('id')
    	var n = $(this).parent().parent().find('input').attr('id');
    	n = n.replace('LM_img',''); //str.replace("Microsoft", "W3Schools");
        remove_input_file( n );
        $(this).next().remove();


		$(this).parent().parent().find('label').removeClass('success').empty();
		$(this).parent().parent().find('label').append("<i class='icon-picture'></i><span class='file_name'>上傳圖片</span>");

        $(this).remove();
    });

///////////////////////////////////////////////////////////////////




    $('#createLM').on('click',function(event){
        if($('#LM_name').val()==''){
          event.preventDefault();
          $('#LM_name').attr('placeholder','地標名稱為必填');
          $('#LM_name').css('outline','1px solid #ff3300');          
        }
        if($('#LM_address').val()==''){
          event.preventDefault();
          $('#LM_address').attr('placeholder','地址為必填');
          $('#LM_address').css('outline','1px solid #ff3300');   
        }
        if($('#LM_description').val()==''){
          event.preventDefault();
          $('#LM_description').attr('placeholder','地標描述為必填');
          $('#LM_description').css('outline','1px solid #ff3300');   
        }
    })




    //換支線 站點改變
    $('#L_branch').on('change',function(event){
        var branch_num = event.target.value;

        $("#pdaysDro").empty();


        if(branch_num=='內灣線'){
            stations=['新竹','北新竹','千甲','新莊','竹中','上員','榮華','竹東','橫山','九讚頭','合興','富貴','內灣'];
            for(var i=0;i<stations.length;i++){
                pdaysDro.add(new Option(stations[i] , stations[i])  );  
            }
        }
        if(branch_num=='平溪線'){
            stations=['瑞芳','猴硐','三貂嶺','大華','十分','望古','嶺腳','平溪','菁桐'];
            for(var i=0;i<stations.length;i++){
                pdaysDro.add(new Option(stations[i] , stations[i])  );  
            }
        }
        if(branch_num=='集集線'){
            stations=['二水','源泉','濁水','龍泉','集集','水里','車埕'];
            for(var i=0;i<stations.length;i++){
                pdaysDro.add(new Option(stations[i] , stations[i])  );  
            }
        }
        if(branch_num=='阿里山線'){
            stations=['嘉義','北門','竹崎','交力坪','奮起湖','神木','阿里山','沼平','祝山'];
            for(var i=0;i<stations.length;i++){
                pdaysDro.add(new Option(stations[i] , stations[i])  );  
            }
        }

    });





    //下拉式選單連動  記得把支線option改0 1 2 3
    // $("#L_branch").on("change", function(event){
    // 	var branch_num = event.target.value;

    // 	var branch = [['新竹','北新竹','千甲','新莊','竹中','上員','榮華','竹東','橫山','九讚頭','合興','富貴','內灣'],
    // 					['瑞芳','猴硐','三貂嶺','大華','十分','望古','嶺腳','平溪','菁桐'],
    // 					['二水','源泉','濁水','龍泉','集集','水里','車埕'],
    // 					['嘉義','北門','竹崎','交力坪','奮起湖','神木','阿里山','沼平','祝山']];
    // 	$("#pdaysDro").empty();


    // 	branch[branch_num].map(function(cv,i){
    // 		$("#pdaysDro").append("<option value="+i+">"+cv+"</option>");
    // 	});
    // });


  //   $('#createLM').on('click',function(event){
  //   	event.preventDefault();

  //   	var branch = ['內灣線','平溪線','集集線','阿里山線'];
  //  		var station = [['新竹','北新竹','千甲','新莊','竹中','上員','榮華','竹東','橫山','九讚頭','合興','富貴','內灣'],
  //   					['瑞芳','猴硐','三貂嶺','大華','十分','望古','嶺腳','平溪','菁桐'],
  //   					['二水','源泉','濁水','龍泉','集集','水里','車埕'],
  //   					['嘉義','北門','竹崎','交力坪','奮起湖','神木','阿里山','沼平','祝山']];


  //   	var branch = branch[$('#L_branch').val()];
  //       var station = station[$('#L_branch').val()][$('#pdaysDro').val()];
  //       var name = $('#LM_name').val();
  //       var type = $('input[name=LM_type]:checked').val();
  //       var subtitle = $('#LM_description').val();
  //       var phone = $('#LM_phone').val();
  //       var cellphone = $('#LM_cellphone').val();
  //       var address = $('#LM_address').val();
  //       var longitude = $('#LM_logitute').val();
  //       var latitude = $('#LM_latitude').val();
  //       var opentime = $('#LM_opentime').val();
  //       var avgcost = $('#LM_avgcost').val();
  //       var staycost1 = $('#LM_avgcost1').val();
  //       var staycost2 = $('#LM_avgcost2').val();
  //       var staycost4 = $('#LM_avgcost4').val();
  //       var staycostadd1 = $('#LM_staycostadd1').val();
  //       var adultcost = $('#LM_adultcost').val();
  //       var childcost = $('#LM_childcost').val();
  //       var url01 = $('#LM_img01').val().replace(/C:\\fakepath\\/i, '');
  //       var url02 = $('#LM_img02').val().replace(/C:\\fakepath\\/i, '');
  //       var url03 = $('#LM_img03').val().replace(/C:\\fakepath\\/i, '');
  //       var url04 = $('#LM_img04').val().replace(/C:\\fakepath\\/i, '');

  //       if(name==''){
  //       	$('#LM_name').attr('placeholder','地標名稱為必填');
  //           $('#LM_name').css('outline','1px solid #ff3300');          
  //       }
  //       if(address==''){
  //       	$('#LM_address').attr('placeholder','地址為必填');
  //           $('#LM_address').css('outline','1px solid #ff3300');  	
  //       }
  //       if(subtitle==''){
  //       	$('#LM_description').attr('placeholder','地標描述為必填');
  //           $('#LM_description').css('outline','1px solid #ff3300');  	
  //       }


  //       var lm_data = {'branch': branch,
  //                       'station': station,
  //                       'name': name,
  //                       'type': type,
  //                       'subtitle': subtitle,
  //                       'phone': phone || "",
  //                       'cellphone': cellphone || "",
  //                       'address': address,
  //                       'longitude': longitude || 0,
  //                       'latitude': latitude || 0,
  //                       'opentime': opentime || "",
  //                       'avgcost': avgcost || 0,
  //                       'staycost1': staycost1 || 0,
  //                       'staycost2': staycost2 || 0,
  //                       'staycost4': staycost4 || 0,
  //                       'staycostadd1': staycostadd1 || 0,
  //                       'adultcost': adultcost || 0,
  //                       'childcost': childcost || 0,
  //                       'url01': url01 || "",
  //                       'url02': url02 || "",
  //                       'url03': url03 || "",
  //                       'url04': url04 || "",
  //                       };

		// if(branch && station && name && type && subtitle && address){
		// 	console.log(lm_data);
	 //        $.post("createLM.php", lm_data, function(data) {

  //            alert('資料輸入成功');
  //            window.location.reload();                
	 //        }); 			
		// }else{
		// 	 alert('資料不完整, 請重新填寫');
		// }
   	
  //   });


});
	

