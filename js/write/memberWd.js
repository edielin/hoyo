$(function (){


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
        var id = '#NOTEC_img'+num;
    	// console.log(id);
    	// console.log( $(id)[0].files[0] );
        $(id).val('');
    	// console.log( $(id));
    }

//  $("body").on("change", ".upl", function (){
//      preview(this);
//  })
    $(document).on('change','.upl', function(){
        preview(this);
    });

    $(document).on('click', '.cancelBtn', function(e){
        // 刪除 input file $('#test').attr('id')
        var n = $(this).parent().parent().find('input').attr('id');
        // console.log( n );
        n = n.replace('NOTEC_img', '');
        remove_input_file(n);

        //清除預覽圖
        $(this).next().remove();

        //清除label樣式
        $(this).parent().parent().find('label').removeClass('success').empty();
        $(this).parent().parent().find('label').append("<i class='icon-picture'></i><span class='file_name'>上傳圖片</span>");

        //清除按鈕
        $(this).remove();


    });


    $(document).on('change','.uploadImg',function(event){
        // console.log('ok');
        var fileName = '';
        if( this.files ){
            fileName = this.files[0].name;
            $(this).next().find('.file_name').text(fileName);
            $(this).next().find('i').attr('class','icon-ok');
            $(this).next().addClass('success');
            // console.log(fileName);
        } 
    });


    // 製作我的自由行程
    var list_data=[];
    mytr.map((cv,i)=>{
        list_data.push([cv.TR_no, cv.TR_name, null]);
        fakelmtr.map(el=>{
            if(el.TR_no==cv.TR_no){
                list_data[i][2] = el.LMTR_day;
            }
        });        
    });
    // console.log(list_data);
    if(list_data){
        var intro_str="";
        intro_str +="<div class='fr'>";
        intro_str +="<p>選一筆行程來撰寫遊記吧！</p>";
        intro_str +="<p>沒有你想要的行程嗎？馬上開始<a href='free.php'>行程規劃</a>吧！</p>";
        intro_str +="</div>";
        $('.mwd_free').append(intro_str);
        $('.mwd_notYet').css('display', 'none');
    }

    $('.mwd_selectBox').empty();
    var list_str = "";
    list_str += " <div class='mwd_selectTour'><ul class='mwd_tourList'>";
    for(let i=0; i<list_data.length; i++){
        list_str += "<li><input type='radio' name='TR_name' id='TR_name"+i+"' value='"+list_data[i][0]+"'>";
        list_str += "<label class='mwd_TR_radio' for='TR_name"+i+"'>";
        list_str += "<p><span class='day'>"+list_data[i][2]+"</span><span class='gon'>日</span>";
        list_str += "<span class='tr_name'>"+list_data[i][1]+"</span></p>";
        list_str += "<span class='iBox'><span class='iBlock'><i class='icon-ok'></i></span></span></label></li>";    
    }
    list_str += "</ul></div>";

    list_str += "<div class='mwd_formBtn'>";
    list_str += "<input id='mwdNext' class='btn-gray' type='button' value='開始寫遊記'>";
    list_str += "</div>";

    $('.mwd_selectBox').append(list_str);


    // 選擇要寫哪一篇自由行行程的遊記
    var tr_to_write = null;
    $(document).on('change', "input[name='TR_name']", function() {
        tr_to_write = $("input[name='TR_name']:checked").val();
    });


    // 進入第二步驟
    $(document).on('click','#mwdNext', function(){

        // 要選擇一篇遊記才可以進入下一步
        if(tr_to_write){
            $('#mwd_content').empty();

            // $.post('memberWd_2in.php',null,function(data){
            //     $('#mwd_content').append(data);
            // });
            $('#mwd_content').append(create_notewrite(tr_to_write));
           
        }else{
            // console.log('請選擇一篇遊記');
            alert('請選擇一篇遊記');
        }        
    });

    function create_notewrite(tr_to_write){
        var trno = tr_to_write;
        var nw_str = "";
        var mylmtr = fakelmtr.filter(cv=>cv.TR_no==trno);
        var daynum = mylmtr[mylmtr.length-1].LMTR_day;

        nw_str +="<section class='breadcrumb'>";
        nw_str +="<div class='container'>";
        nw_str +="<a href='index.php'>首頁</a> &gt; <a href='#'>會員專區</a> &gt; <a href='#'>我的遊記</a> &gt; <a class='bread_active' href='memberWd.php'>新增遊記</a>";
        nw_str +="</div>";
        nw_str +="</section>";

        nw_str +="<div class='container'>";
        nw_str +="<section class='mwd_info'>";
        nw_str +="<h2 class='mwd_title ch'>新增遊記</h2>";
        nw_str +="<div class='mwd_step'>";
        nw_str +="<p class='mwd_s'>選擇行程</p><p class='mwd_s active'>編輯遊記</p><p class='mwd_s'>完成</p>";
        nw_str +="</div></section>";

        nw_str +="<section class='mwd_form'><form id='writeForm' method='post' enctype='multipart/form-data' action='writeSave.php'>";
        nw_str +="<div class='mwd_noteInfo'>";
        nw_str +="<div class='mwd_noTitle'>";
        nw_str +="<p><label for='NOTE_title' class='noteT'>遊記標題：</label><input id='NOTE_title' type='text'id='NOTE_title' name='NOTE_title' required></p>";
        nw_str +="<p class='mwd_desc'><label>簡短描述：</label><textarea name='NOTE_description' id='NOTE_desc' cols='30' rows='3' required></textarea></p>";
        nw_str +="</div>";
        nw_str +="<div class='mwd_mainImg'>";
        nw_str +="<span>新增封面圖：</span>";
        nw_str +="<span class='input-file'>";
        nw_str +="<input class='upl uploadImg' type='file' name='NOTE_mainimg' id='NOTEC_img00'>";
        nw_str +="<label for='NOTEC_img00'>";
        nw_str +="<i class='icon-picture'></i><span class='file_name'>上傳圖片</span></label>";
        nw_str +="</span>";
        nw_str +="<div class='mwd_img_pre'></div></div></div>";

        // 傳送天數資料
        nw_str += "<input type='hidden' name='notec_day' value='"+daynum+"'>";
        nw_str += "<input type='hidden' name='MEM_no' value='"+storage['MEM_no']+"'>";
        nw_str += "<input type='hidden' name='TR_no' value='"+trno+"'>";


        nw_str += "<div class='mwd_content'>";

        for(var i=0;i<daynum;i++){
            nw_str += "<div class='mwd_block'>";
            nw_str += "<p class='mwd_ctDay'>第"+(i+1)+"天：</p>";
            nw_str += "<div class='mwd_tour'><p>";

            var mylmtr_dayarrange = [];

            mylmtr.map((cv,index,arr)=>{

                if(mylmtr_dayarrange[cv.LMTR_day-1]){
                    mylmtr_dayarrange[cv.LMTR_day-1].push(cv);
                }else{
                    mylmtr_dayarrange.push([cv]);
                }

            }); 

            mylmtr_dayarrange.map((cv,index,arr)=>{
                // console.log('cv.LMTR_day:'+cv.LMTR_day);
                // console.log(i+1);

                cv.map((el,index02,arr02)=>{
                    if(el.LMTR_day==(i+1)){
                        var the_el = data_LMcards.find(el2=>{
                            return el.LM_no==el2.LM_no;
                        });
                        nw_str += (index02==arr02.length-1 ? the_el.name : the_el.name + "<span class='arrow'> &gt; </span>");                    
                    }                    
                });

            });

            nw_str += "</p></div>";
            nw_str += " <div class='mwd_ct'><p>內容：</p><textarea id='NOTEC_content0"+(i+1)+"' name='NOTEC_content0"+(i+1)+"' required></textarea></div>";
            nw_str += "<div class='mwd_selectPics'>";
            for(var j=0;j<4;j++){
                nw_str += "<div class='mwd_image'><div class='input-file'>";
                nw_str += "<input class='upl uploadImg' type='file' name='NOTEC_img0"+(i*4+j+1)+"' id='NOTEC_img0"+(i*4+j+1)+"'>";
                nw_str += "<label for='NOTEC_img0"+(i*4+j+1)+"'><i class='icon-picture'></i><span class='file_name'>上傳圖片</span></label></div>";
                nw_str += "<div class='mwd_img_pre'></div></div>";            
            }
            nw_str += "</div></div>";
        }

        nw_str += "<div class='mwd_formBtn'><input id='mwdSubmit' class='btn-gray' type='submit' value='發表遊記'>";
        nw_str += "</div></div></form></section></div>";

        return nw_str;

    }



    //禁止雙引號
    $(document).on('change', 'textarea, input', function(){
        $(this).val($(this).val().replace(/['":*$\\]/g, ''));
        // console.log($(this).val());
    });
    $(document).on('keyup', 'textarea, input', function(){
        $(this).val($(this).val().replace(/['":*$\\]/g, ''));
        // console.log($(this).val());
    });

    // window.onbeforeunload=function(){ return "資料尚未儲存，確定要離開嗎?"; };


    // 進入第三步驟 完成
    // $(document).on('click', '#mwdSubmit', function(){

    //     saveToMyWrite();


    //     var str3 = "";
    //     str3 += "<div id='mwd_content'>";
    //     str3 += "<section class='breadcrumb'><div class='container'>";
    //     str3 += "<a href='index.php'>首頁</a> &gt; <a href='#'>會員專區</a> &gt; <a href='#'>我的遊記</a> &gt; <a class='bread_active' href='memberWd_1.php'>新增遊記</a>";
    //     str3 += "</div></section>";

    //     str3 += "<div class='container'>";
    //     str3 += "<section class='mwd_info'>";
    //     str3 += "<h2 class='mwd_title ch'>新增遊記</h2>";
    //     str3 += "<div class='mwd_step'>";
    //     str3 += "<p class='mwd_s'>選擇行程</p><p class='mwd_s'>編輯遊記</p><p class='mwd_s active'>完成</p>";
    //     str3 += "</div></section>";

    //     str3 += "<section class='mwd_form'>";
    //     str3 += "<div class='mwd3_inform'>";
    //     str3 += "<p>新增遊記完成，可至 <a href='#'>我的遊記</a> 查看！</p>";
    //     str3 += "</div></section></div></div>";


    //     $('#mwd_content').empty();
    //     // $.post('memberWd_3.php',null,function(data){
    //     //     $('#mwd_content').append(data);
    //     // });
    //     $('#mwd_content').append(str3);
        
    // });

    // function saveToMyWrite(){
    //     var storage = sessionStorage;
    //     var trno = tr_to_write;
    //     var mylmtr = fakelmtr.filter(cv=>cv.TR_no==trno);
    //     var daynum = parseInt(mylmtr[mylmtr.length-1].LMTR_day);
    //     var notec_data = [];

    //     // 把資料按照天數, 排放在陣列中
    //     for(let i=0; i<daynum; i++){
    //         notec_data.push({});
    //         notec_data[i]['NOTEC_day'] = (i+1);
    //         notec_data[i]['NOTEC_content'] = $('#NOTEC_content0'+(i+1)).val();
    //         notec_data[i]['NOTEC_img01'] = $('#NOTEC_img0'+(i*4+1)).val();
    //         notec_data[i]['NOTEC_img02'] = $('#NOTEC_img0'+(i*4+2)).val();
    //         notec_data[i]['NOTEC_img03'] = $('#NOTEC_img0'+(i*4+3)).val();
    //         notec_data[i]['NOTEC_img04'] = $('#NOTEC_img0'+(i*4+4)).val();
    //     }

    //     var note_data = {'MEM_no': storage['MEM_no'],
    //                     'NOTE_title': $('#NOTE_title').val(),
    //                     'NOTE_description': $('#NOTE_desc').val(),
    //                     'NOTE_mainimg': $('input[name=NOTE_mainimg]').val().replace("C:\\fakepath\\",""),
    //                     'NOTEc': notec_data
    //                     };


    //     console.log(note_data);
    //     $.post("writeSave.php", note_data, function(data) {
    //         console.log(data);
    //     });
    // }

});

