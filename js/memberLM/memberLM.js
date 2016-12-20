$(function(){



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
        // console.log(id);
        // console.log( $(id)[0].files[0] );
        $(id).val('');
        // console.log( $(id));
    }



    $('.upl').on('change', function(){
        preview(this);
    });

    $('body').on('click', '.cancelBtn', function(e){
        // 刪除 input file $('#test').attr('id')
        var n = $(this).parent().parent().find('input').attr('id');
        // console.log( n );
        n = n.replace('LM_img', '');
        remove_input_file(n);
        console.log(n);
        //清除預覽圖
        $(this).next().remove();

        //清除label樣式
        $(this).parent().parent().find('label').removeClass('success').empty();
        $(this).parent().parent().find('label').append("<i class='icon-picture'></i><span class='file_name'>上傳圖片</span>");

        //清除按鈕
        $(this).remove();

    });




    $('#okok').on('click',function(event){
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
        }else{
            $( "#createLM" ).submit();
        }
    })



    //換支線 站點改變  option 值為站名
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
    //  var branch_num = event.target.value;

    //  var branch = [['新竹','北新竹','千甲','新莊','竹中','上員','榮華','竹東','橫山','九讚頭','合興','富貴','內灣'],
    //          ['瑞芳','猴硐','三貂嶺','大華','十分','望古','嶺腳','平溪','菁桐'],
    //          ['二水','源泉','濁水','龍泉','集集','水里','車埕'],
    //          ['嘉義','北門','竹崎','交力坪','奮起湖','神木','阿里山','沼平','祝山']];
    //  $("#pdaysDro").empty();


    //  branch[branch_num].map(function(cv,i){
    //    $("#pdaysDro").append("<option value="+i+">"+cv+"</option>");
    //  });
    // });


    // $('#createLM').on('click',function(event){
    //  event.preventDefault();

    //  var branch = ['內灣線','平溪線','集集線','阿里山線'];
    //    var station = [['新竹','北新竹','千甲','新莊','竹中','上員','榮華','竹東','橫山','九讚頭','合興','富貴','內灣'],
    //          ['瑞芳','猴硐','三貂嶺','大華','十分','望古','嶺腳','平溪','菁桐'],
    //          ['二水','源泉','濁水','龍泉','集集','水里','車埕'],
    //          ['嘉義','北門','竹崎','交力坪','奮起湖','神木','阿里山','沼平','祝山']];


    //  var branch = branch[$('#L_branch').val()];
    //     var station = station[$('#L_branch').val()][$('#pdaysDro').val()];
    //     var name = $('#LM_name').val();
    //     var type = $('input[name=LM_type]:checked').val();
    //     var subtitle = $('#LM_description').val();
    //     var phone = $('#LM_phone').val();
    //     var cellphone = $('#LM_cellphone').val();
    //     var address = $('#LM_address').val();
    //     var longitude = $('#LM_logitute').val();
    //     var latitude = $('#LM_latitude').val();
    //     var opentime = $('#LM_opentime').val();
    //     var avgcost = $('#LM_avgcost').val();
    //     var staycost1 = $('#LM_avgcost1').val();
    //     var staycost2 = $('#LM_avgcost2').val();
    //     var staycost4 = $('#LM_avgcost4').val();
    //     var staycostadd1 = $('#LM_staycostadd1').val();
    //     var adultcost = $('#LM_adultcost').val();
    //     var childcost = $('#LM_childcost').val();
    //     var url01 = $('#LM_img01').val().replace(/C:\\fakepath\\/i, '');
    //     var url02 = $('#LM_img02').val().replace(/C:\\fakepath\\/i, '');
    //     var url03 = $('#LM_img03').val().replace(/C:\\fakepath\\/i, '');
    //     var url04 = $('#LM_img04').val().replace(/C:\\fakepath\\/i, '');

    //     if(name==''){
    //      $('#LM_name').attr('placeholder','地標名稱為必填');
    //         $('#LM_name').css('outline','1px solid #ff3300');          
    //     }
    //     if(address==''){
    //      $('#LM_address').attr('placeholder','地址為必填');
    //         $('#LM_address').css('outline','1px solid #ff3300');   
    //     }
    //     if(subtitle==''){
    //      $('#LM_description').attr('placeholder','地標描述為必填');
    //         $('#LM_description').css('outline','1px solid #ff3300');   
    //     }


    //     var lm_data = {'branch': branch,
    //                     'station': station,
    //                     'name': name,
    //                     'type': type,
    //                     'subtitle': subtitle,
    //                     'phone': phone || "",
    //                     'cellphone': cellphone || "",
    //                     'address': address,
    //                     'longitude': longitude || 0,
    //                     'latitude': latitude || 0,
    //                     'opentime': opentime || "",
    //                     'avgcost': avgcost || 0,
    //                     'staycost1': staycost1 || 0,
    //                     'staycost2': staycost2 || 0,
    //                     'staycost4': staycost4 || 0,
    //                     'staycostadd1': staycostadd1 || 0,
    //                     'adultcost': adultcost || 0,
    //                     'childcost': childcost || 0,
    //                     'url01': url01 || "",
    //                     'url02': url02 || "",
    //                     'url03': url03 || "",
    //                     'url04': url04 || "",
    //                     };

    // if(branch && station && name && type && subtitle && address){
    //  console.log(lm_data);
    //       $.post("createLM.php", lm_data, function(data) {

    //          alert('資料輸入成功');
    //          window.location.reload();                
    //       });      
    // }else{
    //   alert('資料不完整, 請重新填寫');
    // } 




    $(document).on('click','.stay_btn',function(event){
        $('.clear_wrapper').empty();
        $('.clear_wrapper_1').append("<div class='ml_stay'><div class='ml_stay_T'>住宿平均消費</div></div><div class='ml_stay_C'><div class='ml_stay_item'><input type='number' name='LM_staycost1' id='LM_avgcost1' placeholder='1人' class='ml_stay_all input_all ml9'></div><div class='ml_stay_item'><input type='number' name='LM_staycost2' id='LM_avgcost2' placeholder='2人' class='ml_stay_all input_all ml9'></div><div class='ml_stay_item'><input type='number' name='LM_staycost4' id='LM_avgcost4' placeholder='4人' class='ml_stay_all input_all ml9'></div><div class='ml_stay_item'><input type='number' name='LM_staycostadd1' id='LM_staycostadd1' placeholder='加床/人' class='ml_stay_all input_all ml9'></div></div>");
        
        console.log('3');
    });

    $(document).on('click','.eat_btn',function(event){
        $('.clear_wrapper').empty();
        $('.clear_wrapper_2').append("<div class='ml_eat'><div class='ml_eat_T'>餐廳平均消費</div></div><div class='ml_eat_C'><input type='number' name='LM_avgcost' id='LM_avgcost' placeholder='每人平均消費' class='input_all ml9'></div>");
        console.log('2');
    });    
    $(document).on('click','.landscape_btn',function(event){
        $('.clear_wrapper').empty();
        $('.clear_wrapper_3').append("<div class='ml_ticket'><div class='ml_ticket_T'>景點消費</div></div><div class='ml_ticket_C'><div class='ML_adultcost'><input type='number' name='LM_adultcost' id='LM_adultcost' placeholder='大人消費' class='input_all  ml9'></div><div class='ML_childcost'><input type='number' name='LM_childcost' id='LM_childcost' placeholder='小孩消費' class='input_all ml9'></div></div>");
        console.log('1');
    });

     

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

    //$('.cancel_btn').on('click',function(){});

    $(document).on('click','.out_cancel',function(){
        location.href='landmark.php';
    });



    //禁止雙引號
    $(document).on('change', 'textarea, input', function(){
        $(this).val($(this).val().replace(/['":*$\\]/g, ''));
        // console.log($(this).val());
    });
    $(document).on('keyup', 'textarea, input', function(){
        $(this).val($(this).val().replace(/['":*$\\]/g, ''));
        // console.log($(this).val());
    });


});