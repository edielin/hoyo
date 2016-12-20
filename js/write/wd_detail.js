$(function (){

// ======================================================
    var storage = sessionStorage;
    // var note_no = storage["noteDetail_note_no"];
    
    // 用網址所傳的NOTE_no抓遊記編號
    var note_no = location.search.replace('?NOTE_no=','');
    // console.log(note_no);
    
    var this_memNote = memNote.find(cv=>note_no==cv.NOTE_no && cv.NOTE_close==0);
    var this_noteTr = noteTr.find(cv=>note_no==cv.NOTE_no);


    var this_TR_no = this_noteTr.TR_no;
    var this_lmtr = lmtr.filter(cv=>this_TR_no==cv.TR_no);
    var daynum = parseInt(this_lmtr[this_lmtr.length-1].LMTR_day);


    //麵包屑
    $('.breadcrumb .container').empty();
    var str_bread = "";
    str_bread += "<a href='index.php'>首頁</a> &gt; <a href='write.php'>遊記分享</a> &gt; ";
    str_bread += "<a href='Wdetail.php?NOTE_no="+note_no+"' class='bread_active'>"+this_memNote.NOTE_title+"</a>";

    $('.wd_content').empty(); //清空遊記內文

    //遊記基本資訊
    var str_main = "";
    str_main += "<div class='wd_info'><div class='wd_title'>"+this_memNote.NOTE_title+"</div>";
    str_main += "<div class='ti'><div class='wd_mem'><div class='memPic'><img src='"+this_memNote.MEM_img+"'>";
    str_main += "</div><span class='memName'>"+this_memNote.MEM_name+"</span></div>";
    str_main += "<div class='wd_time'>"+this_memNote.NOTE_createDate+"</div></div><div class='clearfix'></div></div>";

    str_main += "<div class='mainPic'><div class='picBox'>";
    str_main += "<img src='images/notewrite/"+this_memNote.NOTE_mainimg+"'>";
    str_main += "</div></div><div class='wd_desc'>"+this_memNote.NOTE_description.replace(/\n/g, "<br />")+"</div>";


    //第 n 天遊記
    var str_note = "";
    for(let i=0; i< daynum; i++){
        str_note += "<section class='noteContent'><div class='wd_tour'><div class='container'>";
        str_note += "<div class='days'>第 "+(i+1)+" 天</div><div class='tourDetail'>";

            var mylmtr_dayarrange = [];

            this_lmtr.map((cv,index,arr)=>{

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
                        str_note += (index02==arr02.length-1 ? the_el.name : the_el.name + "<span class='arrow'> &gt; </span>");                    
                    }                    
                });

            });


            var this_notec = notec_data.find(cv=>note_no==cv.NOTE_no && (i+1)==cv.NOTEC_day);

        str_note += "</div></div></div>";

        str_note += "<div class='dayContent'><div class='container'><div class='sideImg'>";
        if(this_notec.NOTEC_img01.indexOf("__hoyo__")==5?this_notec.NOTEC_img01.substr(13):this_notec.NOTEC_img01.substr(14)){str_note += "<div class='picCover'><img src='images/notewrite/"+this_notec.NOTEC_img01+"'></div>";}
        str_note += "</div><div class='article'><p>"+this_notec.NOTEC_content.replace(/\n/g, "<br />")+"</p></div><div class='clearfix'></div></div>";
        str_note += "<div class='imgBoxs'><div class='container'>";

        if(this_notec.NOTEC_img02.indexOf("__hoyo__")==5?this_notec.NOTEC_img02.substr(13):this_notec.NOTEC_img02.substr(14)){str_note += "<div class='imgBox'><div class='imgCover'><img src='images/notewrite/"+this_notec.NOTEC_img02+"'></div></div>";}
        if(this_notec.NOTEC_img03.indexOf("__hoyo__")==5?this_notec.NOTEC_img03.substr(13):this_notec.NOTEC_img03.substr(14)){str_note += "<div class='imgBox'><div class='imgCover'><img src='images/notewrite/"+this_notec.NOTEC_img03+"'></div></div>";}
        if(this_notec.NOTEC_img04.indexOf("__hoyo__")==5?this_notec.NOTEC_img04.substr(13):this_notec.NOTEC_img04.substr(14)){str_note += "<div class='imgBox'><div class='imgCover'><img src='images/notewrite/"+this_notec.NOTEC_img04+"'></div></div>";}

        str_note += "</div></div></div></section>";
    }



    $('.wd_reply').empty(); //清空遊記回覆

    function create_replys(re_data){

        var this_re_data = re_data.filter(cv=>note_no==cv.NOTE_no);
        //依照日期排序
        this_re_data.sort((a,b)=>{
            return (a.RE_time > b.RE_time) ? 1 : ((b.RE_time > a.RE_time) ? -1 : 0);
        }); 

    // console.log(this_re_data);
        //遊記回覆
        var str_re = "<div class='container'>";
        for(let i=0; i< this_re_data.length; i++){

            var the_memNote = mem_data.find(cv=>cv.MEM_no==this_re_data[i].MEM_no);

            str_re += "<div class='reply_mem'>";
            str_re += "<div class='re_memInfo'>";
            str_re += "<div class='re_memPic'><img src='"+the_memNote.MEM_img+"'></div>";
            str_re += "<div class='re_memName'>"+the_memNote.MEM_name+"</div></div>";

            str_re += "<div class='memRE'>";
            str_re += "<p class='reTxt'>"+this_re_data[i].RE_content.replace(/\n/g, "<br />")+"</p>";
            str_re += "<p class='reTime'>"+this_re_data[i].RE_time+"<span class='report_times'>已檢舉"+this_re_data[i].RE_reportedTimes+"次</span></p>";

            str_re += "<div class='reportBtn'>";
            str_re += "<form action='#' method='>";
            str_re += "<input type='hidden' name='NOTE_no' value='"+this_re_data[i].NOTE_no+"'>";
            str_re += "<input id='msg"+this_re_data[i].RE_no+"' class='btn-gray msg_report' type='button' value='檢舉'>";
            str_re += "</form>";
            str_re += "</div><div class='clearfix'></div></div></div>";
        }

        str_re += "<div class='reply_form'>";
        str_re += "<div class='re_memInfo'>";

        if(storage["MEM_no"]){ //已登入

            var reply_mem = mem_data.find(cv=>cv.MEM_no==storage["MEM_no"]);
            str_re += "<div class='re_memPic'><img src='"+reply_mem.MEM_img+"'></div>";
            str_re += "<div class='re_memName'>"+reply_mem.MEM_name+"</div></div>";
        }else{ //尚未登入

            str_re += "<div class='re_memPic'><img src='images/member/mem_default.png'></div>";
            str_re += "<div class='re_memName'>訪客</div></div>";
        }

        str_re += "<form action='#' method=''>";
        str_re += "<textarea id='new_msg' rows='3' placeholder='我想留言...'></textarea>";
        str_re += "<div class='re_btn'><input id='save_msg' class='btn-gray' type='button' value='送出'></div>";
        str_re += "<div class='clearfix'></div></form>";
        str_re += "<div class='clearfix'></div></div></div>";

        return str_re;
    }


    $('.breadcrumb .container').append(str_bread);
    $('.wd_content').append(str_main);
    $('.wd_content').append(str_note);
    $('.wd_reply').append(create_replys(re_data));
    if(this_memNote!=null){
        $('.reply_title').css('display', 'block');
    }




    $(document).on('click','#save_msg',function(){
        var storage = sessionStorage;
        if(storage["MEM_no"]){ //已登入

            var data = {};
                data['NOTE_no'] = note_no;
                data['MEM_no'] = storage["MEM_no"];
                data['RE_content'] = $('#new_msg').val();

            $.post('replySave.php', data, function(re_data){

                var with_br = re_data;
                with_br = with_br.replace(/\n/g,'\\n');
                with_br = with_br.replace(/\r/g,'');

                var re_data = JSON.parse( with_br );
                $('.wd_reply').empty();
                $('.wd_reply').append(create_replys(re_data));            
            });

        }else{ //尚未登入

            // ============================================
            var storage = sessionStorage;
            alert('請先登入好遊會員!');

            // 儲存來源資訊:
            storage.setItem('G1_whereAmIFrom', location.href);
            storage.setItem('msg_prepare_until_login',$('#new_msg').val());
            location.href ='memlogin.php';  //有需要轉頁面再加這行

        }
    });


    //先留言, 再登入, 所以登入回來之後, 要幫他儲存留言
    if(storage["msg_prepare_until_login"]){ 
        storage.removeItem("msg_prepare_until_login");

        var data = {};
            data['NOTE_no'] = note_no;
            data['MEM_no'] = storage["MEM_no"];
            data['RE_content'] = storage["msg_prepare_until_login"];
            console.log(data);

        $.post('replySave.php', data, function(re_data){

            var with_br = re_data;
            with_br = with_br.replace(/\n/g,'\\n');
            with_br = with_br.replace(/\r/g,'');

            var re_data = JSON.parse( with_br );
            $('.wd_reply').empty();
            $('.wd_reply').append(create_replys(re_data));

            //直接到頁面底部
            window.scrollTo(0,document.body.scrollHeight);
        });
    }    


    function update_nc_table(update_type, datum){
        var storage = sessionStorage;
        if(storage["MEM_no"]){ //已登入
            // 把 nc 資料帶到 collectUpdate.php 做新增或更新
            var data = {};
                data['NOTE_no'] = note_no;
                data['MEM_no'] = storage["MEM_no"];

            if(update_type=='collect'){
                data['type'] = 'collect';
                data['NC_isCollected'] = datum=='收藏遊記' ? 1 : 0;

            }else if(update_type=='rating'){
                data['type'] = 'rating';
                data['NC_rating'] = datum;

            }else if(update_type=='report'){
                data['type'] = 'report';
                data['NC_isReported'] = datum=='檢舉' ? 1 : 0;

            }else if(update_type=='msg_report'){
                data['type'] = 'msg_report';
                data['RE_no'] = datum;

                $.post('php/write/msgReport.php', data, function(nc_data){
                    // console.log(nc_data);
                    // nc = JSON.parse( nc_data );
                    location.reload();
                });
                return;
            }
            
            $.post('php/write/collectUpdate.php', data, function(nc_data){
                // console.log(nc_data);
                // nc = JSON.parse( nc_data );
                location.reload();
            });


        }else{ //尚未登入

            // ============================================
            var storage = sessionStorage;
            alert('請先登入好遊會員!');

            // 儲存來源資訊: 從遊記首頁來的, 所以登入完成之後, 要回遊記首頁
            storage.setItem('G1_whereAmIFrom', location.href);
            location.href ='memlogin.php';  //有需要轉頁面再加這行

        } 
    }

    // 愛心收藏效果
    $(document).on('click','#addToFav', function(){
        var collect_val = $(this).attr('value');

        update_nc_table('collect', collect_val);
        // var favCount = $(this).attr('value');
        // if( favCount == '收藏' ){
        //     $(this).attr('value','取消收藏').find('.funcIcon').addClass('click_heart');
        //     $(this).find('span').text('取消收藏');
        // }else if( favCount == '取消收藏' ){
        //     $(this).attr('value','收藏').find('.funcIcon').removeClass('click_heart');
        //     $(this).find('span').text('收藏');
        // }

    });

    //星星評分
    $('#point').click(function(){
        var star_val = $(this).attr('value');
        if(star_val=='評分'){
            $('.starBox').css('display', 'block');
        }
    });

    //取消星星評分
    $('.starBox button').click(function(){
        // console.log('cancel');
        $('.starBox').css('display', 'none');
        $('.starIcon').empty();
        $('.starIcon').append("<input type='radio' name='NC_rating' id='rating-5' value='5'><label for='rating-5'>5</label><input type='radio' name='NC_rating' id='rating-4' value='4'><label for='rating-4'>4</label><input type='radio' name='NC_rating' id='rating-3' value='3'><label for='rating-3'>3</label><input type='radio' name='NC_rating' id='rating-2' value='2'><label for='rating-2'>2</label><input type='radio' name='NC_rating' id='rating-1' value='1'><label for='rating-1'>1</label>");
    });

    //確認星星評分
    $('#rating_btn').click(function(){
        var rating = $(this).parent().parent().find("input[name=NC_rating]:checked").val();

        // console.log(rating);
            update_nc_table('rating', rating);

    });


    //檢舉遊記
    $('#report').click(function(){
        var report_val = $(this).attr('value');
        // 檢舉過就不能再檢舉
        if(report_val=='檢舉'){
            update_nc_table('report', report_val);
        }
        // if( report_val == '檢舉' ){
        //     $(this).attr('value','已檢舉').find('.funcIcon').addClass('click_block');
        //     $(this).find('span').text('已檢舉');
        // }else if( report_val == '已檢舉' ){
        //     $(this).attr('value','檢舉').find('.funcIcon').removeClass('click_block');
        //     $(this).find('span').text('檢舉');
        // }        
    });
    
    //檢舉留言
    $(document).on('click', '.msg_report', function(){
        var RE_no = parseInt($(this).attr('id').replace('msg',''));
        // console.log(RE_no);
 
        update_nc_table('msg_report', RE_no);

        // if( report_val == '檢舉' ){
        //     $(this).attr('value','已檢舉').find('.funcIcon').addClass('click_block');
        //     $(this).find('span').text('已檢舉');
        // }else if( report_val == '已檢舉' ){
        //     $(this).attr('value','檢舉').find('.funcIcon').removeClass('click_block');
        //     $(this).find('span').text('檢舉');
        // }        
    });

    // 引用行程, 將該遊記的 TR_no 帶到自由行做編輯
    $('#addTr').click(function(){
        // console.log(this_TR_no);
        var storage = sessionStorage;
        if(storage["MEM_no"]){
            storage.setItem('transfer_to_free_by_TRno', this_TR_no);
            // location.href ='free.php';
            window.open('free.php','_blank');
        }else{
            alert('請先登入好遊會員!');
            storage.setItem('G1_whereAmIFrom', location.href);
            location.href ='memlogin.php';
        }
    });

    //　顯示收藏遊記人數
    var this_note_collect = nc.filter(cv=>cv.NOTE_no==note_no && cv.NC_isCollected!=0);
    // console.log(this_note_collect);
    collect_note_count = this_note_collect.length;
    var collect_str="";
    if(collect_note_count!=0){
        collect_str += "共有"+collect_note_count+"人收藏";
    }else{
        collect_str += "尚無人收藏";
    }
    $('#favCount').append(collect_str);

    // 顯示評分人數
    var this_note_pointC = nc.filter(cv=>cv.NOTE_no==note_no && cv.NC_rating!=null);
    point_count = this_note_pointC.length;
    // console.log(this_note_pointC);
    var star_str="";
    if(point_count!=0){
        star_str += "共有"+point_count+"人評分";
    }else{
        star_str += "尚無人評分";
    }
    $('#starCount').append(star_str);

    // 計算該遊記分數
    var total_score =[];
    var this_note_score=0;
    this_note_pointC.map((cv,i)=>{
        total_score.push(cv.NC_rating);
    });
    if(total_score.length!=0){
        var total=0;
        for(var i=0; i<total_score.length; i++){
            total +=total_score[i];
        }
        this_note_score = (total/point_count).toFixed(1);
        // console.log(this_note_score);
    }

    // 顯示檢舉人數
    var this_nc_reported = nc.filter(cv=>cv.NOTE_no==note_no && cv.NC_isReported!=0);
    reported_count = this_nc_reported.length;
    // console.log(reported_count);
    var report_str="";
    if(reported_count!=0){
        report_str += "共有"+reported_count+"人檢舉";
    }else{
        report_str += "尚無人檢舉";
    }
    $('#reportCount').append(report_str);


    // 收藏遊記的css樣式
    if(storage['MEM_no']){
        var this_nc = nc.find(cv=>cv.MEM_no==storage['MEM_no'] && cv.NOTE_no==note_no);
        if(this_nc && this_nc.NC_isCollected==1){
            $('#addToFav').attr('value','取消收藏').find('.funcIcon').addClass('click_heart');
            $('#addToFav').find('span').text('取消收藏');
        }else{
            $('#addToFav').attr('value','收藏遊記').find('.funcIcon').removeClass('click_heart');
            $('#addToFav').find('span').text('收藏遊記');
        }
    }else{
        $('#addToFav').attr('value','收藏遊記').find('.funcIcon').removeClass('click_heart');
        $('#addToFav').find('span').text('收藏遊記');
    }


    // 檢舉的css樣式
    if(storage['MEM_no']){
        var this_nc = nc.find(cv=>cv.MEM_no==storage['MEM_no'] && cv.NOTE_no==note_no);
        if(this_nc && this_nc.NC_isReported==1){
            $('#report').attr('value','已檢舉').find('.funcIcon').addClass('click_block');
            $('#report').find('span').text('您已檢舉');
            $('#report').css('cursor', 'default');
        }else{
            $('#report').attr('value','檢舉').find('.funcIcon').removeClass('click_block');
            $('#report').find('span').text('檢舉');
        }
    }else{
        $('#report').attr('value','檢舉').find('.funcIcon').removeClass('click_block');
        $('#report').find('span').text('檢舉');
    }

    // 評分的css樣式
    if(storage['MEM_no']){
        var this_nc = nc.find(cv=>cv.MEM_no==storage['MEM_no'] && cv.NOTE_no==note_no);
        if(this_nc&&this_nc.NC_rating!=null){
            $('#point').attr('value','已評分').find('.funcIcon').addClass('click_star');
            $('#point').find('.star_score').text(this_nc.NC_rating);
            $('#point').find('.memStar').text("您已評分");
            $('#point').css('cursor', 'default');
        }else{
            $('#point').attr('value','評分').find('.funcIcon').removeClass('click_star');
            $('#point').find('.memStar').text('評分');
        }
    }else{
        $('#point').attr('value','評分').find('.funcIcon').removeClass('click_star');
        $('#point').find('.memStar').text('評分');
    }



    


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