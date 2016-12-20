    var section1_top = $('#i_s1').offset().top;
    var section2_top = $('#i_s2').offset().top;
    var section3_top = $('#i_s3').offset().top;
    var section4_top = $('#i_s4').offset().top;
    var section5_top = $('#i_s5').offset().top;
    var section6_top = $('#i_s6').offset().top;


    $(window).scroll(function(){
        var window_height = $(window).height();
        var window_top_position = $(window).scrollTop();
        var window_bottom_position = (window_top_position + window_height); 

            if(window_bottom_position-window_height/4 >= section1_top){
                $('.i_container_bg').addClass('i_bg_hight51'); //跑一號鐵軌

                $('#i_s1 .i_cic_S_tr').addClass('i_cic_showAni_tr');
                $('#i_s1 .i_cic_S_br').addClass('i_cic_showAni_br');
                $('#i_s1 .i_cic_S_bl').addClass('i_cic_showAni_bl');
                $('#i_s1 .i_cic_S_tl').addClass('i_cic_showAni_tl');
            }

            if(window_bottom_position-window_height/4 >= section2_top){
                $('#i_s2 .i_cic_S_tr').addClass('i_cic_showAni_tr');
                $('#i_s2 .i_cic_S_br').addClass('i_cic_showAni_br');
                $('#i_s2 .i_cic_S_bl').addClass('i_cic_showAni_bl');
                $('#i_s2 .i_cic_S_tl').addClass('i_cic_showAni_tl');
                $('#wishList2').hover(function(){
                    $('#wishList_box').show();
                },function(){
                    $('#wishList_box').hide();
                });
                $('#wishList_box').hover(function(){
                    $(this).show();
                },function(){
                    $(this).hide();
                });
                $('#wishList_box').click(function(){
                    $(this).hide();
                });
            }

            if(window_bottom_position-window_height/4 >= section4_top){
                $('.i_container_bg2').addClass('i_bg_hight51'); //跑二號鐵軌
                $('#i_s4 .i_cic_S_tr').addClass('i_cic_showAni_tr');
                $('#i_s4 .i_cic_S_br').addClass('i_cic_showAni_br');
                $('#i_s4 .i_cic_S_bl').addClass('i_cic_showAni_bl');
                $('#i_s4 .i_cic_S_tl').addClass('i_cic_showAni_tl');
            }

            if(window_bottom_position-window_height/4 >= section5_top){
                $('#i_s5 .i_cic_S_tr').addClass('i_cic_showAni_tr');
                $('#i_s5 .i_cic_S_br').addClass('i_cic_showAni_br');
                $('#i_s5 .i_cic_S_bl').addClass('i_cic_showAni_bl');
                $('#i_s5 .i_cic_S_tl').addClass('i_cic_showAni_tl');
            }

            if(window_bottom_position-window_height/4 >= section6_top){
                $('#i_s6 .i_cic_S_tr').addClass('i_cic_showAni_tr');
                $('#i_s6 .i_cic_S_br').addClass('i_cic_showAni_br');
                $('#i_s6 .i_cic_S_bl').addClass('i_cic_showAni_bl');
                $('#i_s6 .i_cic_S_tl').addClass('i_cic_showAni_tl');
            }
    }); // function scroll() end




    //######//###// scrollMagic //###//######//
    var controller = new ScrollMagic.Controller(); 
      
    // s1 /////////////////////////

    var s1_cic_content = new TimelineMax().staggerFromTo("#i_cic_show1", 1, {
            opacity: 0,
        }, {
            opacity: 1,
            delay: 0.5,
        });

    var scene1_cic = new ScrollMagic.Scene({
            triggerElement: "#i_s1", // 觸發點物件   
            offset: 0,          //位置可以再調整
            reverse: false   // 要不要來回觸發
        }).setTween(s1_cic_content).triggerHook(0.75).addTo(controller);

    //////

    var s1_h2Box = new TimelineMax().staggerFromTo("#i_h2Box1", 1, {
            opacity: 0,
            x : 30,
        }, {
            opacity: 1,
            x : 0,
            delay: 0.5,
        });

    var scene1_h2Box = new ScrollMagic.Scene({
            triggerElement: "#i_s1",   
            offset: 0,          
            reverse: false   
        }).setTween(s1_h2Box).triggerHook(0.75).addTo(controller);

    //////

    var s1_lorem = new TimelineMax().staggerFromTo("#i_s1_lorem", 1, {
            opacity: 0,
            x : 30,
        }, {
            opacity: 1,
            x : 0,
            delay: 0.5,
        });

    var scene1_lorem = new ScrollMagic.Scene({
            triggerElement: "#i_s1",   
            offset: 0,          
            reverse: false   
        }).setTween(s1_lorem).triggerHook(0.75).addTo(controller);

    //////

    var s1_btn = new TimelineMax().staggerFromTo("#i_s1_btn", 1, {
            opacity: 0,
            x : 30,
        }, {
            opacity: 1,
            x : 0,
            delay: 0.5,
        });

    var scene1_btn = new ScrollMagic.Scene({
            triggerElement: "#i_s1",   
            offset: 0,          
            reverse: false   
        }).setTween(s1_btn).triggerHook(0.75).addTo(controller);
    // s1 over /////////////////////////



    // s2/////////////////////////
    var s2_cic_content = new TimelineMax().staggerFromTo("#i_cic_show2", 1, {
            opacity: 0,
        }, {
            opacity: 1,
            delay: 0.5,
        });

    var scene2_cic = new ScrollMagic.Scene({
            triggerElement: "#i_s2",   
            offset: 0,          
            reverse: false   
        }).setTween(s2_cic_content).triggerHook(0.75).addTo(controller);

    //////

    var s2_h2Box = new TimelineMax().staggerFromTo("#i_h2Box2", 1, {
            opacity: 0,
            x : 30,
        }, {
            opacity: 1,
            x : 0,
            delay: 0.5,
        });


    var scene2_h2Box = new ScrollMagic.Scene({
            triggerElement: "#i_s2",    
            offset: 0,         
            reverse: false   
        }).setTween(s2_h2Box).triggerHook(0.75).addTo(controller);

    //////

    var s2_lorem = new TimelineMax().staggerFromTo("#i_s2_lorem", 1, {
            opacity: 0,
            x : 30,
        }, {
            opacity: 1,
            x : 0,
            delay: 0.5,
        });

    var scene2_lorem = new ScrollMagic.Scene({
            triggerElement: "#i_s2",    
            offset: 0,         
            reverse: false   
        }).setTween(s2_lorem).triggerHook(0.75).addTo(controller);

    //////

    var s2_btn1 = new TimelineMax().staggerFromTo("#i_s2_btn1", 1, {
            opacity: 0,
            x : 30,
        }, {
            opacity: 1,
            x : 0,
            delay: 0.5,
        });

    var scene2_btn1 = new ScrollMagic.Scene({
            triggerElement: "#i_s2",    
            offset: 0,         
            reverse: false   
        }).setTween(s2_btn1).triggerHook(0.75).addTo(controller);

    //////

    var s2_btn2 = new TimelineMax().staggerFromTo("#i_s2_btn2", 1, {
            opacity: 0,
            x : 30,
        }, {
            opacity: 1,
            x : 0,
            delay: 0.5,
        });

    var scene2_btn2 = new ScrollMagic.Scene({
            triggerElement: "#i_s2",    
            offset: 0,         
            reverse: false   
        }).setTween(s2_btn2).triggerHook(0.75).addTo(controller);

    /// ///

    var i_wishList = new TimelineMax().staggerFromTo("#wishList2", .5,{
            opacity : 0,
            x : 0,
        },{
            opacity : 1,
            x : 85,
        });

    var scene2_listShow = new ScrollMagic.Scene({
                triggerElement: "#i_s2",   
                offset: 0,        
                reverse: true   
            }).setTween(i_wishList).triggerHook(1).addTo(controller);

    // s2 over /////////////////////////





    // s3 地標卡片/////////////////////////

    if($(window).width()>=970){

        var s3_cardsLeft = new TimelineMax().staggerFromTo(".i_row1_LeftCards", 1, {
                x : 0,
                rotation: 0,
            }, {
                x : -150,
                rotation : -5,
            });

        var scene3_cardsLeft = new ScrollMagic.Scene({
                triggerElement: "#i_s3",   
                offset: 0,        
                reverse: false   
            }).setTween(s3_cardsLeft).triggerHook(0.75).addTo(controller);

        //////

        var s3_cardsRight = new TimelineMax().staggerFromTo(".i_row1_RightCards", 1, {
                x : 0,
                rotation: 0,
            }, {
                x : 150,
                rotation :5,
            });

        var scene3_cardsRight = new ScrollMagic.Scene({
                triggerElement: "#i_s3",   
                offset: 0,         
                reverse: false   
            }).setTween(s3_cardsRight).triggerHook(0.75).addTo(controller);


        //////

        var s3_row2_cardsLeft = new TimelineMax().staggerFromTo(".i_row2_LeftCards", 1, {
                x : 0,
                rotation: 0,
            }, {
                x : -150,
                rotation : 5,
            });

        var scene3_row2_cardsLeft = new ScrollMagic.Scene({
                triggerElement: "#i_s3_row2",   
                offset: 0,         
                reverse: false   
            }).setTween(s3_row2_cardsLeft).triggerHook(0.75).addTo(controller);

        //////

        var s3_row2_cardsRight = new TimelineMax().staggerFromTo(".i_row2_RightCards", 1, {
                x : 0,
                rotation: 0,
            }, {
                x : 150,
                rotation : -5,
            });

        var scene3_row2_cardsRight = new ScrollMagic.Scene({
                triggerElement: "#i_s3_row2",   
                offset: 0,         
                reverse: false   
            }).setTween(s3_row2_cardsRight).triggerHook(0.75).addTo(controller);

            $('.i_row1_LeftCards,.i_row2_LeftCards').hover(function(){
                $(this).addClass('i_leftCardsHover');
                $(this).parent('div').css({
                    'z-index' : '7',
                });

            },function(){
                $(this).removeClass('i_leftCardsHover');
                // console.log($(this).parent('div').parents('.i_cardsRow'));
                $(this).parent('div').css({
                    'z-index' : '1'
                });
            });


            $('.i_row1_RightCards,.i_row2_RightCards ').hover(function(){
                $(this).addClass('i_rightCardsHover');
                $(this).parent('div').css({
                    'z-index' : '7'
                });
            },function(){
                $(this).removeClass('i_rightCardsHover');
                $(this).parent('div').css({
                    'z-index' : '1'
                });
            });// hover 卡片效果 over

            $('.i_cards').hover(function(){
                $('.i_cards').not(this).css({
                    'filter': 'blur(0.7px)',
                    'transition':'.5s'
                });

            },function(){
                   $('.i_cards').css({
                    'filter':'blur(0px)',
                    'transition':'.5s'
                });
            });
     
    } // $(window).width()>970 over


    if( $(window).width()>479 && $(window).width()<970){

        var s3_cardsLeft = new TimelineMax().staggerFromTo(".i_row1_LeftCards", 1, {
                x : 0,
                rotation: 0,
            }, {
                x : -100,
                rotation : -4,
            });

        var scene3_cardsLeft = new ScrollMagic.Scene({
                triggerElement: "#i_s3",   
                offset: 0,        
                reverse: false   
            }).setTween(s3_cardsLeft).triggerHook(0.75).addTo(controller);

        //////

        var s3_cardsRight = new TimelineMax().staggerFromTo(".i_row1_RightCards", 1, {
                x : 0,
                rotation: 0,
            }, {
                x : 100,
                rotation :4,
            });

        var scene3_cardsRight = new ScrollMagic.Scene({
                triggerElement: "#i_s3",   
                offset: 0,         
                reverse: false   
            }).setTween(s3_cardsRight).triggerHook(0.75).addTo(controller);


        //////

        var s3_row2_cardsLeft = new TimelineMax().staggerFromTo(".i_row2_LeftCards", 1, {
                x : 0,
                rotation: 0,
            }, {
                x : -100,
                rotation : 4,
            });

        var scene3_row2_cardsLeft = new ScrollMagic.Scene({
                triggerElement: "#i_s3_row2",   
                offset: 0,         
                reverse: false   
            }).setTween(s3_row2_cardsLeft).triggerHook(0.75).addTo(controller);

        //////

        var s3_row2_cardsRight = new TimelineMax().staggerFromTo(".i_row2_RightCards", 1, {
                x : 0,
                rotation: 0,
            }, {
                x : 100,
                rotation : -4,
            });

        var scene3_row2_cardsRight = new ScrollMagic.Scene({
                triggerElement: "#i_s3_row2",   
                offset: 0,         
                reverse: false   
            }).setTween(s3_row2_cardsRight).triggerHook(0.75).addTo(controller);
     
    }// $(window).width()>479 over




    if($(window).width()<=479){

        var s3_cardsLeft = new TimelineMax().staggerFromTo("#內灣戲院", 1, {
                x : 0,
                y: 0,
                rotation: 0,
            }, {
                x : -50,
                y: 50,
                rotation : -5,
            });

        var scene3_cardsLeft = new ScrollMagic.Scene({
                triggerElement: "#i_s3",   
                offset: 0,         
                reverse: false   
            }).setTween(s3_cardsLeft).triggerHook(0.75).addTo(controller);

        //////

        var s3_cardsRight = new TimelineMax().staggerFromTo("#猴硐貓村", 1, {
                x : 0,
                rotation: 0,
            }, {
                x : 50,
                rotation : 5,
            });

        var scene3_cardsRight = new ScrollMagic.Scene({
                triggerElement: "#i_s3",   
                offset: 0,         
                reverse: false   
            }).setTween(s3_cardsRight).triggerHook(0.75).addTo(controller);


        //////

        var s3_row2_cardsLeft = new TimelineMax().staggerFromTo("#車埕火車站", 1, {
                x : 0,
                y :　0,
                rotation: 0,
            }, {
                x : -50,
                y : 100,
                rotation : -5,
            });

        var scene3_row2_cardsLeft = new ScrollMagic.Scene({
                triggerElement: "#i_s3_row2",   
                offset: 0,         
                reverse: false   
            }).setTween(s3_row2_cardsLeft).triggerHook(0.75).addTo(controller);

        //////

        var s3_row2_cardsRight = new TimelineMax().staggerFromTo("#十分大瀑布", 1, {
                x : 0,
                y : 0,
                rotation: 0,
            }, {
                x : 50,
                y : 30,
                rotation : 5,
            });

        var scene3_row2_cardsRight = new ScrollMagic.Scene({
                triggerElement: "#i_s3_row2",   
                offset: 0,         
                reverse: false   
            }).setTween(s3_row2_cardsRight).triggerHook(0.75).addTo(controller);

    }// $(window).width()<=479 over
    // s3 over /////////////////////////



    // s4 /////////////////////////
    var s4_cic_content = new TimelineMax().staggerFromTo("#i_cic_show4", 1, {
            opacity: 0,
        }, {
            opacity: 1,
            delay: 0.5,
        });

    var scene4_cic = new ScrollMagic.Scene({
            triggerElement: "#i_s4",    
            offset: 0,          
            reverse: false   
        }).setTween(s4_cic_content).triggerHook(0.75).addTo(controller);

    //////

    var s4_h2Box = new TimelineMax().staggerFromTo("#i_h2Box4", 1, {
            opacity: 0,
            x : 30,
        }, {
            opacity: 1,
            x : 0,
            delay: 0.5,
        });

    var scene4_h2Box = new ScrollMagic.Scene({
            triggerElement: "#i_s4",    
            offset: 0,         
            reverse: false   
        }).setTween(s4_h2Box).triggerHook(0.75).addTo(controller);

    //////

    var s4_yoZ = new TimelineMax().staggerFromTo("#i_s4_yoZ", 1, {
            opacity: 0,
            x : 30,
        }, {
            opacity: 1,
            x : 0,
            delay: 0.5,
        });

    var scene4_yoZ = new ScrollMagic.Scene({
            triggerElement: "#i_s4",    
            offset: 0,         
            reverse: false   
        }).setTween(s4_yoZ).triggerHook(0.75).addTo(controller);

    //////

    var s4_btn = new TimelineMax().staggerFromTo("#i_s4_btn", 1, {
            opacity: 0,
            x : 30,
        }, {
            opacity: 1,
            x : 0,
            delay: 0.5,
        });

    var scene4_btn = new ScrollMagic.Scene({
            triggerElement: "#i_s4",    
            offset: 0,         
            reverse: false   
        }).setTween(s4_btn).triggerHook(0.75).addTo(controller);

    // s4 over /////////////////////////




    // s5 /////////////////////////
    var s5_cic_content = new TimelineMax().staggerFromTo("#i_cic_show5", 1, {
            opacity: 0,
        }, {
            opacity: 1,
            delay: 0.5,
        });

    var scene5_cic = new ScrollMagic.Scene({
            triggerElement: "#i_s5", 
            offset: 0,          
            reverse: false   
        }).setTween(s5_cic_content).triggerHook(0.75).addTo(controller);

    //////

    var s5_h2Box = new TimelineMax().staggerFromTo("#i_h2Box5", 1, {
            opacity: 0,
            x : 30,
        }, {
            opacity: 1,
            x : 0,
            delay: 0.5,
        });

    var scene5_h2Box = new ScrollMagic.Scene({
            triggerElement: "#i_s5", 
            offset: 0,          
            reverse: false   
        }).setTween(s5_h2Box).triggerHook(0.75).addTo(controller);


    //////

    var s5_lorem = new TimelineMax().staggerFromTo("#i_s5_lorem", 1, {
            opacity: 0,
            x : 30,
        }, {
            opacity: 1,
            x : 0,
            delay: 0.5,
        });

    var scene5_lorem = new ScrollMagic.Scene({
            triggerElement: "#i_s5", 
            offset: 0,          
            reverse: false   
        }).setTween(s5_lorem).triggerHook(0.75).addTo(controller);

    //////

    var s5_cic1 = new TimelineMax().staggerFromTo(".i_s5_cic1", 1, {
            opacity: 0,
        }, {
            opacity: 1,
            delay: 1.5,
        });

    var scene5_cic1 = new ScrollMagic.Scene({
            triggerElement: "#i_s5", 
            offset: 0,          
            reverse: false   
        }).setTween(s5_cic1).triggerHook(0.75).addTo(controller);


    //////

    var s5_line = new TimelineMax().staggerFromTo(".i_s5_line", 1, {
            opacity: 0,
            x : -20,
        }, {
            opacity: 1,
            x : 0,
            delay: 2,
        });

    var scene5_cic1 = new ScrollMagic.Scene({
            triggerElement: "#i_s5", 
            offset: 0,          
            reverse: false   
        }).setTween(s5_line).triggerHook(0.75).addTo(controller);


    //////

    var s5_cic2 = new TimelineMax().staggerFromTo(".i_s5_cic2", 1, {
            opacity: 0,
            x : -100,
        }, {
            opacity: 1,
            x : 0,
            delay: 2,
        });

    var scene5_cic1 = new ScrollMagic.Scene({
            triggerElement: "#i_s5", 
            offset: 0,          
            reverse: false   
        }).setTween(s5_cic2).triggerHook(0.75).addTo(controller);

    // s5 over /////////////////////////




    // s6/////////////////////////
    var s6_cic_content = new TimelineMax().staggerFromTo("#i_cic_show6", 1, {
            opacity: 0,
            y : -20,
        }, {
            opacity: 1,
            y : 0,
            delay: 0.5,
        });

    var scene6 = new ScrollMagic.Scene({
            triggerElement: "#i_s6",   
            offset: 0,          
            reverse: false   
        }).setTween(s6_cic_content).triggerHook(0.75).addTo(controller);

    /////////////////////

    var s6_lorem = new TimelineMax().staggerFromTo("#i_s6_lorem", 1, {
            opacity: 0,
            y : -20,
        }, {
            opacity: 1,
            y : 0,
            delay: 0.5,
        });

    var scene6_lorem = new ScrollMagic.Scene({
            triggerElement: "#i_s6",   
            offset: 0,          
            reverse: false   
        }).setTween(s6_lorem).triggerHook(0.75).addTo(controller);

    /////////////////////

    var s6_btn = new TimelineMax().staggerFromTo("#i_memNo_test", 1, {
            opacity: 0,
        }, {
            opacity: 1,
            delay: 1,
        });

    var scene6_btn = new ScrollMagic.Scene({
            triggerElement: "#i_s6",   
            offset: 0,          
            reverse: false   
        }).setTween(s6_btn).triggerHook(0.75).addTo(controller);

    // s6 over /////////////////////////
    // .addIndicators()



// 拉視窗改變大小就重整頁面
function reloadPage(){
    var web_window = $(window);
    var web_width = web_window.width();

    $(window).resize(function(){
        if($(window).width()!=web_width){
            web_width = $(window).width();
            location.reload();
        }
    });
}
window.addEventListener('load',reloadPage,false);