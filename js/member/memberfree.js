// 天數切換
$(function(){
    var lightBoxWidth=$(document).width();
    $(window).on('resize',function(){
        lightBoxWidth=$(document).width();
    });
    $(document).on("click",".mW_look",function(event){
        event.preventDefault();
        $('body').css({'overflow-y':'hidden'});   //lightBox出現時不準下滑
        // 圖片位置
        var imgsrc=$(this).parent().find('.mW_tabBox div.mW_imgBox img').attr('src');
        var lightBoxBgImg=$('.plBImg div img');  //找到lightBox放圖片的地方
        // 圖片更換
        if(imgsrc=="" ||imgsrc==null){
            lightBoxBgImg.attr('src','images/city_1.jpg');  //如果行程圖片沒有就帶預設圖片
            // console.log(lightBoxBgImg);
        }
        else{
            lightBoxBgImg.attr('src',imgsrc);  //否則代入實際圖
            // console.log("OK"+lightBoxBgImg);  
        }
        //日期重置
        function resetDay(){
            $('.pchangeDay').children().remove();  //將手機和桌機端的行程天數元素刪除
            $('.phonechangeDay').children().remove();  
        }
        //設定天數樣式等等
        function setDay(){
            resetDay();
            for(var i=1;i<=parseInt(pAllday);i++){
                var day=document.createTextNode(i);
                var dayli=document.createElement('li');
                var dayspan=document.createElement('span');
                dayspan.append(day);
                var x=dayli.append(dayspan);
                if(lightBoxWidth<=960){    //lightBox 大小小於960產生手機端天數
                    pchangeDay.children().remove();
                    phoneday.append(dayli);  
                }
                else{
                    phoneday.children().remove();  //產生桌機端天數
                    pchangeDay.append(dayli); 
                }   
                $('.pchangeDay li').addClass('dayStyle');
                $('.dayStyle span').addClass('pdayNumber');
                $('.phonechangeDay li').addClass('phonedayStyle');
                $('.phonedayStyle span').addClass('phonedayNumber');
                if(lightBoxWidth<=960){
                    pchangeDay.children().remove();
                    phoneday.append(dayli);  
                    $('.phonechangeDay li').removeClass('dayStyle');
                    $('.phonedayStyle span').removeClass('pdayNumber');
                    $('.phonechangeDay li').addClass('phonedayStyle');
                    $('.phonedayStyle span').addClass('phonedayNumber');
                }
                else{
                    phoneday.children().remove();
                    pchangeDay.append(dayli); 
                    $('.pchangeDay li').removeClass('phonedayStyle');
                    $('.dayStyle span').removeClass('phonedayNumber');
                    $('.pchangeDay li').addClass('dayStyle');
                    $('.dayStyle span').addClass('pdayNumber');
                } 
            }
        }  
        // 日期建立
        resetDay();
        var pAllday=$(this).parent().find('.mW_txtBox p.mW_day span').text(); //抓取天數
        var phoneday=$('.phonechangeDay');   //手機
        var pchangeDay=$('.pchangeDay');     //桌機
        setDay();           
        //螢幕尺寸改變時重新設定天數
        $(window).on('resize',function(){
            resetDay();
            setDay();
        }); 

        if($('.pchangeDay,.phonechangeDay').has('li')){
            // console.log("yes");
            // 切換天數動畫
            $(document).on('click','.dayStyle',function(){   
                var x=$('.pchangeDay').find(this).index();   //找到自己的li
                console.log(x);
                $(".dayStyle").css({"backgroundColor":"#075f9b"});
                $(this).css({"backgroundColor":"#35BFB3"});
                $(".pdayNumber").css({"color":"#075f9b"});
                $(this).children().css({"color":"#35BFB3"});
                $('.plBdotCenter').stop(true).fadeOut(500,function(){
                    $('.plBdotCenter').eq(x).stop(true).fadeIn(500); 
                });
                // $('.phonedayTour').stop(true).fadeOut(500,function(){
                //     $('.phonedayTour').eq(x).stop(true).fadeIn(700).css({'display':'inline-flex'}); 
                // });
                
            });
            $(document).on('click','.phonedayStyle',function(){
                var x=$(this).index();
                $('.phonedayTour').stop(true).fadeOut(500).eq(x).stop(true).fadeIn(700).css({'display':'inline-flex'}); 

                // $('.plBdotCenter').stop(true).fadeOut(500,function(){
                //     $('.plBdotCenter').eq(x).stop(true).fadeIn(500); 
                // });
            });
        }
        else{
            console.log('error');
        }
        // lightBox動畫
        $('.plightBox').css({display:"block",width:0}).animate({width:'100%'},function(){
            $('.plightBoxAll').animate({opacity:'1'});
        });
        //抓取標題
        var plBTitle=$('.plBTitle');
        var ptitle=$(this).parent().find('.mW_txtBox p.mW_title').text();
        var titleH2=document.createElement('h2');
        plBTitle.children().remove();
        plBTitle.append(titleH2);
        // console.log(plBTitle);
        // console.log(ptitle);
        if (plBTitle.has('h2')) {
            $('.plBTitle>h2').html(ptitle);
        }
        else{
            titleH2=document.createElement('h2');
            plBTitle.append(titleH2);
            $('.plBTitle>h2').html(ptitle);
        }
    });

    $(document).on('click','.pexit',function(){
        $('body').css({'overflow-y':'auto'});
        $('.plightBox').css({display:"none"});
        $('.plightBoxAll').css({opacity:'0'});
    }); 

    
});