var storage=sessionStorage;
// storage['MEM_no']=1;
// storage['MEM_email']="HOYO@gmail.com";

if(storage['MEM_email']){
    var MEM_no=storage['MEM_no'];
    // console.log('MEM_no'+MEM_no);
}

$(function(){

    var full_faketr = faketr;
    var full_fakelmtr = fakelmtr;
    var full_data_LMcards = data_LMcards;
    var full_data_tc=tc;

    function createtopbox(TR_no, faketr, fakelmtr, data_LMcards,checkFav){
        var t_faketr = faketr;
        var t_fakelmtr = fakelmtr;
        var t_data_LMcards = data_LMcards;
        var TR_no = TR_no;
        var tr_dayorder = []; //根據 TR_no 過濾的 fakelmtr
        var last_day; //記錄這筆行程的天數
        var haveLike=checkFav;//所有收藏清單
        // ----------------------------------------------------------------------------------
        //產生 .pgridItem 的字符串模板 上半部
        var str = "<div class='beforeChangeTB pgridItem'><div class='pgridItemContent'><div class='pItemCp'>";
        var tr_row;

        t_faketr.map(function(cv,i){
            if(cv.TR_no == TR_no){
                tr_row = cv;
            }
        });
        // console.log(tr_row);
        // console.log(haveLike);
        if(storage['MEM_email']){  //有登入
            if(haveLike[0]!=null){ //且該會員收藏不為空值
                var like_no=[];
                haveLike.map(function(hl){
                    if(tr_row.TR_no==hl.TR_no  && hl.MEM_no==storage['MEM_no']){
                        like_no.push(hl);
                    }
                });
                // console.log(like_no);
                if(like_no.length!=0){
                    str += "<div class='pTool'><div class='memFavi click_heart' value='取消收藏' hovertext='取消收藏'><i class='icon-heart-empty special'></i></div>"; 
                }else if(like_no.length==0){
                    str += "<div class='pTool'><div class='memFavi' value='收藏' hovertext='收藏'><i class='icon-heart-empty'></i></div>";
                }
                
            }else if(haveLike[0]==null){
                str += "<div class='pTool'><div class='memFavi'  value='收藏' hovertext='收藏'><i class='icon-heart-empty'></i></div>";
            }
        }else{
            str += "<div class='pTool'><div class='memFavi' value='收藏' hovertext='收藏'><i class='icon-heart-empty'></i></div>";
        }
        // str += "<div class='ptop'>"+(tr_row.MEM_no == 1 ? '官方':'會員')+"</div>";
        // console.log(str);
        // str += "<div class='pTool'><div class='memFavi' value='0'><i class='icon-heart-empty'></i></div>";
        str += "<div class='peditTour' value='"+TR_no+"'><i class='icon-edit-1'></i></div></div>";
        str += "<div class='pshowImg'><div>";


        //根據 TR_no 過濾 fakelmtr
        // 只篩選出第一天的資料
        t_fakelmtr.map(function(cv,i,arr){
            if(cv.TR_no == TR_no && cv.LMTR_day == 1){
                tr_dayorder.push(cv);
            }

            if(cv.TR_no == TR_no){
                last_day = cv.LMTR_day;
            }

        });

        // console.log(tr_dayorder);

        var showcard; //要秀在卡片上的那筆地標
        var findfirst = false;
        tr_dayorder.map(function(cv,i,arr){
            var lmno = cv.LM_no;
            t_data_LMcards.map(function(el,j){
                if(el.LM_no == lmno && el.type == 'f_landscape' && !findfirst){
                    showcard = el;
                    findfirst = true;
                }
                
            });        
        });

        // 如果第一天的行程裡都沒有景點的地標卡, 那就抓第一筆地標卡放進 showcard
        if(!showcard){
            tr_dayorder.map(function(cv,i){
                if(i==0){
                    var lmno = cv.LM_no;

                    t_data_LMcards.map(function(el,j){
                        if(el.LM_no == lmno){
                            showcard = el;
                        }
                        
                    }); 
                }
            });       
        }
        // console.log(showcard);
        var imgSrcPick = "";

        // 如果為手機螢幕的話跑較小的圖片
        if($(window).width()<=498){
            imgSrcPick = "images/mobile_LM/";
        }else{
            imgSrcPick = "images/LM/";
        }


        str += "<img src='"+imgSrcPick+showcard.url+"'></div></div>";

        // ----------------------------------------------------------------------------------
        // ----------------------------------------------------------------------------------
        //產生 .pdotTour 的字符串模板

        
        str += "<div class='pdotTour'><div class='pdotStart'></div>";



        // console.log(tr_dayorder);

        tr_dayorder.map(function(cv,i,arr){

            //去尋找地標的名稱
            var lmno = cv.LM_no;
            var name = '';
            t_data_LMcards.map(function(ele,j){
                if(ele.LM_no == lmno){
                    name = ele.name;
                }           
            });


            str+="<span class='pextenLine'></span>";
            str+="<div class='pdot"+(i+1)+"'><div class='pstationName'>"+name+"</div></div>";


            if(i == arr.length-1){ //最後一筆
                str+="<span class='pextenLine'></span><div class='pdotEnd'></div></div>";
            }

        });

        // console.log(str);
        // ----------------------------------------------------------------------------------
        // ----------------------------------------------------------------------------------
        //產生 .pgridItem 的字符串模板 上半部

        // console.log(last_day);

        str += "<div class='plist'><div class='ptourDay'><span>"+last_day+"</span>天</div>";
        str += "<div class='ptitle'>"+tr_row.TR_name+"</div>";
        str += "<div class='pshowAllTour'><a class='ptourBtn' href='#' value='"+TR_no+"'>詳細行程</a></div></div></div></div></div>";
        // console.log(str);
        // ----------------------------------------------------------------------------------


        $('.pgridTop').append(str);

    //end of function createtopbox
    }


    //把所有 faketr 存在的 TR_no 都放進 TR_no_Arr
    var TR_no_Arr = [];
    faketr.map(function(cv){
        // console.log(cv);
        TR_no_Arr.push(cv.TR_no);
    });
        // console.log(TR_no_Arr);

    tc_arr=[];
    full_data_tc.map(function(cv){
        tc_arr.push(cv);
    });
    //隨機產生兩個推薦行程
    var len = TR_no_Arr.length;
    var num = [ TR_no_Arr[Math.floor(Math.random()*len)], TR_no_Arr[Math.floor(Math.random()*len)] ];
    // console.log(num[0]);
    // console.log(num[1]); 
    do{
        num = [ TR_no_Arr[Math.floor(Math.random()*len)], TR_no_Arr[Math.floor(Math.random()*len)] ];
    // console.log('while');
    // console.log(num[0]);
    // console.log(num[1]);
    }while(num[0]==num[1])
    if(tc_arr[0]==null){
    $('.pgridTop').empty();
    createtopbox(num[0], faketr, fakelmtr, data_LMcards,tc_arr[0]);
    createtopbox(num[1], faketr, fakelmtr, data_LMcards,tc_arr[0]);
    }else if(tc_arr[0]!=null){
        // console.log("!=null");
        // console.log("所有收藏行程編號清單"+tc_arr);
        var checkFav=[];
        // console.log(tc_arr);
        tc_arr.map(function(tc){
            num.map(function(num){
                if(tc.TR_no==num){
                checkFav.push(tc);
                }
            });
        });
        // console.log(checkFav);
        $('.pgridTop').empty();
        createtopbox(num[0], faketr, fakelmtr, data_LMcards,checkFav);
        createtopbox(num[1], faketr, fakelmtr, data_LMcards,checkFav);
    }
    // 抓取代表行程編號================================================
   
   

    // lightBox產生行程
    function allTour(no){
        var TR_no=no;  //將形成編號抓出來
        var savename=[];
        var changeday=1;   //預設天數
        var savelmtrno=[];
        var savetrNote=[];
        var i=0;    
        var lbstr;   //桌機端
        var phonestr;//手機端
        var lmnoDay=[];
        console.log("傳入行程編號:"+no);
        full_faketr.map(function(trno){
            if(trno.TR_no==no){
                // console.log("我是遊記"+trno.NOTE_no);
                savetrNote.push(trno.NOTE_no);
        }
        });
        full_fakelmtr.map(function(lmno){     //找出所有在lmtr中相同行程編號的編號
            if(lmno.TR_no==no){
                console.log(lmno.LM_no);   //顯示所有該行程地標編號
                savelmtrno.push(lmno.LM_no);  //推入行程編號及代表天數到陣列
                lmnoDay.push(lmno.LMTR_day);
                // console.log(lmnoDay);
            }    
        });
        var tourlen=savelmtrno.length;
        savelmtrno.map(function(datano){  //跑一遍陣列中的所有值
            console.log(datano);
            var card = data_LMcards.find(function(cv){ 
                return cv.LM_no == datano;// 找到地標卡中符合的回傳
            });
            savename.push(card.name);  //將名字推入陣列
            console.log(savename);       
        });
        lbstr="<div class='plightBoxAll ch'><div class='pexit'><i class='icon-cancel'></i></div><div class='plightBoxContent'><div class='plBImg'>";
        lbstr+="<div><img src=''></div></div><div class='plBTitle'><h2></h2></div><div class='plBBtn'><ul>";
        if(savetrNote==1){
        lbstr+="<li class='plBBtnNote' style='background-Color:#aaa;'><a style='cursor:default;'>暫無遊記</a></li>";
        // lbstr+="<li class='plBBtnAdd'><a href='#'>加入收藏</a></li>";
        }else{
        lbstr+="<li class='plBBtnNote'><a href='Wdetail.php?NOTE_no="+savetrNote+"'>瀏覽遊記</a></li>";    
        }
        lbstr+="<li class='plBBtnTool'><a href='"+no+"'>行程編輯</a></li></ul></div>";
        lbstr+="<ul class='pchangeDay'></ul><div class='plBTour'><ul class='plBdotA'>";
        // $('.plBdotA').empty();  //刪掉所有plBTour的子代元素
        lbstr+="<li class='plBdotCenter'>";  //桌機端第一次必定產生
        phonestr="<div class='plBphoneTour'><ul><li class='phonedayTour'>";//手機端第一次必定產生的最外圍
        var namelen=savename.length;
        // console.log("名稱總長度:"+savename.length);
        while(i<namelen){  //當i小於所有的名稱長度陣列時執行
                if(i==namelen-1){//最後一個時執行不增加線條
                    // 桌機端
                    lbstr+="<span class='plBdot'><div class='ptourName'>"+savename[i]+"</div></span></li>";        
                    // 手機端
                    phonestr+="<span class='plBphoneDot'><div class='plBphoneName'>"+savename[i]+"</div></span></li>";
                }else if(i<=namelen-2){ //不是最後一個加入名稱和線條
                    if(lmnoDay[i+1]==changeday){
                        // console.log(lmnoDay[i]);
                        // 桌機端
                         lbstr+="<span class='plBdot'><div class='ptourName'>"+savename[i]+"</div></span><span class='plBline'></span>";
                        // 手機端
                         phonestr+="<span class='plBphoneDot'><div class='plBphoneName'>"+savename[i]+"</div></span><span class='plBphoneLine'></span>";

                    }else if(lmnoDay[i+1]!=changeday){ //當下一筆代表天數不再相等於changeDay時，加入當前這筆並且換行
                        // 桌機端
                        lbstr+="<span class='plBdot'><div class='ptourName'>"+savename[i]+"</div></span></li>";
                        lbstr+="<li class='plBdotCenter'>";
                        // 手機端
                        phonestr+="<span class='plBphoneDot'><div class='plBphoneName'>"+savename[i]+"</div></span></li>";
                        phonestr+="<li class='phonedayTour'>";
                        changeday++;  //將天數增加
                        // console.log("changeDay"+changeday);
                    }                      
                }      
            ++i;
        }
        lbstr +="</ul></div><ul class='phonechangeDay'></ul></div>";
        phonestr+="</ul></div>";  //手機端結尾
        //手機端按鈕
        if(savetrNote==1){
            phonestr+="<div class='plBphoneBtn'><ul class='plBphoneBtnAll'><li class='plBphoneBtnNote'><a style='cursor:default;color:#aaa;'><i class='icon-eye'></i>暫無遊記</a></li>";    
        }else{
            phonestr+="<div class='plBphoneBtn'><ul class='plBphoneBtnAll'><li class='plBphoneBtnNote'><a href='Wdetail.php?NOTE_no="+savetrNote+"'><i class='icon-eye'></i>瀏覽遊記</a></li>";
        }
        
        phonestr+="<li class='plBphoneBtnAdd'><a href='#'><i class='icon-heart'></i>加入收藏</a></li><li class='plBphoneBtnTool'><a href='"+no+"'><i class='icon-edit-1'></i>行程編輯</a></li></ul></div>";
        // console.log(lbstr);   
        $('.plightBox').append(lbstr);      //推入行程卡中
        $('.plightBoxAll').append(phonestr);
    } //end of push tour lightBox
    //當按下詳細行程時
    $(document).on('click','.ptourBtn',function(){
        var num=$(this).attr('value');
        console.log(num);
        // console.log("帶入行程編號:"+num[0]);
        $('.plightBox').empty(); 
        allTour(num);
    });
    // lightBox exit 動畫事件代理
    $(document).on('click','.pexit',function(){
        if(!storage['MEM_email']){
            $('body').css({'overflow-y':'auto'});
            $('.plightBox').css({display:"none"});
            $('.plightBoxAll').css({opacity:'0'});
        }else{
            var checkXhr=new XMLHttpRequest();
            var MEM_no=storage['MEM_no'];
            var TR_no=storage['pack_TR_on'];
            console.log(TR_no);
            console.log("MEM_no"+MEM_no);
            console.log("TR_no"+TR_no);
            checkXhr.onreadystatechange=function(){
                if(checkXhr.readyState==4){
                    if(checkXhr.status==200){
                        if(checkXhr.responseText=="無"){
                            $('body').css({'overflow-y':'auto'});
                            $('.plightBox').css({display:"none"});
                            $('.plightBoxAll').css({opacity:'0'});
                        }else if(checkXhr.responseText=="有"){
                            $('body').css({'overflow-y':'auto'});
                            $('.plightBox').css({display:"none"});
                            $('.plightBoxAll').css({opacity:'0'});
                            console.log(checkXhr.responseText);
                        }
                    }else{
                        alert("server error");
                    }
                }
            }
            var dataObj={
                "Add_type":2,
                "MEM_no":MEM_no,
                "TR_no":TR_no
            }
            var datacheck="NC_no="+JSON.stringify(dataObj);
            var url="packAdd.php?";
            checkXhr.open("post",url,true);
            checkXhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            checkXhr.send(datacheck);
        }
    }); 
    //end ptourBtn==============

// ===================================================================




        
        allTR_no=[]; //儲存符合所有行程
    function createBottomBox(TR_no, faketr, fakelmtr, data_LMcards, branch_index,bottomCheckFav){
        var b_faketr = faketr;
        var b_fakelmtr = fakelmtr;
        var b_data_LMcards = data_LMcards;
        var TR_no = TR_no;
        var tr_dayorder = []; //根據 TR_no 過濾的 fakelmtr
        var last_day; //記錄這筆行程的天數
        var colorstyle = ['changeBBeforeNeiwan','changeBBeforePingc','changeBBeforeGigi','changeBBeforeIlisian','beforeChangeBB'];
        var colorI = branch_index==undefined ? 4 : branch_index;
        var bCheckFav=bottomCheckFav;
        // console.log(branch_index);
        // console.log(colorstyle[colorI]);
        // console.log(bCheckFav);
        // ----------------------------------------------------------------------------------
        //產生 .pgridItem 的字符串模板 上半部
        var str = "<div class='"+colorstyle[colorI]+" pgridItem'><div class='pgridItemContent'><div class='pItemCp'>";
        var tr_row; //目前符合的行程

        b_faketr.map(function(cv,i){
            if(cv.TR_no == TR_no){
                tr_row = cv;
                allTR_no.push(tr_row);   //存取全部行程編號
            }
           
        });
        // console.log(allTR_no);
        // str += "<div class='ptop'>"+(tr_row.MEM_no == 1 ? '官方':'會員')+"</div>";
        // console.log(str);
        if(storage['MEM_email']){   //有登入
            if(bCheckFav[0]!=null){  //且收藏不為空值
                var bottomLike_no=[];
                bCheckFav.map(function(hl){
                    if(tr_row.TR_no==hl.TR_no  && hl.MEM_no==storage['MEM_no']){
                        bottomLike_no.push(hl);
                    }
                });
                // console.log(bottomLike_no);
                if(bottomLike_no.length!=0){
                    str += "<div class='pTool'><div class='memFavi click_heart' value='取消收藏' hovertext='取消收藏'><i class='icon-heart-empty special'></i></div>"; 
                }else if(bottomLike_no.length==0){
                    str += "<div class='pTool'><div class='memFavi' value='收藏' hovertext='收藏'><i class='icon-heart-empty'></i></div>";
                } 
            }else if(bCheckFav[0]==null){
                str += "<div class='pTool'><div class='memFavi' value='收藏' hovertext='收藏'><i class='icon-heart-empty'></i></div>";  
            }
        }else{
             str += "<div class='pTool'><div class='memFavi' value='收藏' hovertext='收藏'><i class='icon-heart-empty'></i></div>";
        }
       
        str += "<div class='peditTour' value='"+TR_no+"'><i class='icon-edit-1'></i></div></div>";
        str += "<div class='pshowImg'><div>";


        //根據 TR_no 過濾 fakelmtr
        // 只篩選出第一天的資料
        b_fakelmtr.map(function(cv,i){
            if(cv.TR_no == TR_no && cv.LMTR_day == 1){
                tr_dayorder.push(cv);
            }

            if(cv.TR_no == TR_no){
                last_day = cv.LMTR_day;
            }

        });

        // console.log(tr_dayorder);

        var showcard; //要秀在卡片上的那筆地標
        var findfirst = false;
        tr_dayorder.map(function(cv,i,arr){
            var lmno = cv.LM_no;

            b_data_LMcards.map(function(el,j){
                if(el.LM_no == lmno && el.type == 'f_landscape' && !findfirst){
                    showcard = el;
                    findfirst = true;
                }
                
            });        
        });
        // console.log(showcard);

        // 如果第一天的行程裡都沒有景點的地標卡, 那就抓第一筆地標卡放進 showcard
        if(!showcard){
            tr_dayorder.map(function(cv,i){
                if(i==0){
                    var lmno = cv.LM_no;

                    b_data_LMcards.map(function(el,j){
                        if(el.LM_no == lmno){
                            // console.log('第一筆');
                            showcard = el;
                        }
                        
                    }); 
                }
            });       
        }
        // console.log(showcard);
        var imgSrcPick = "";

        // 如果為手機螢幕的話跑較小的圖片
        if($(window).width()<=498){
            imgSrcPick = "images/mobile_LM/";
        }else{
            imgSrcPick = "images/LM/";
        }


        str += "<img src='"+imgSrcPick+showcard.url+"'></div></div>";


        // ----------------------------------------------------------------------------------
        // ----------------------------------------------------------------------------------
        //產生 .pgridItem 的字符串模板 上半部

        // console.log(last_day);

        str += "<div class='plist'><div class='ptourDay'><span>"+last_day+"</span>天</div>";
        str += "<div class='ptitle'>"+tr_row.TR_name+"</div>";
        // ==========================改動========================
        str += "<div class='pshowAllTour'><a class='ptourBtn' href='#' value='"+TR_no+"'>詳細行程</a></div></div></div></div></div>";
        //======================================================
        // console.log(str);
        // ----------------------------------------------------------------------------------
        $('.pgridBottom').append(str);
            resizescroll();   //當下方產生出行程卡片時重新計算寬度  
    // end of function createBottomBox
    }


    $('.pgridBottom').empty();
    if(tc_arr[0]==null){
        TR_no_Arr.map(function(cv,i){
            createBottomBox(cv, faketr, fakelmtr, data_LMcards,undefined,tc_arr[0]);
        });
    }else if(tc_arr[0]!=null){
        // console.log("所有收藏行程編號清單"+tc_arr);
        var bottomCheckFav=[];
        tc_arr.map(function(btc){ 
            TR_no_Arr.map(function(alltrno){
                if(btc.TR_no==alltrno && btc.MEM_no==storage['MEM_no']){//找到符合行程編號清單且是該會員
                bottomCheckFav.push(btc);  
                }
            });
        });
        // console.log(bottomCheckFav);
        TR_no_Arr.map(function(cv,i){
            createBottomBox(cv, faketr, fakelmtr, data_LMcards,undefined,bottomCheckFav);
        });
    }
//===========================================================================
// 如果是全部支線時,利用searchTour方法抓取行程含地標行程及地標
//===========================================================================
            function searchTour(filterTR){
                var tr_no=[];
                var lmtr=[];
                // console.log(filterTR);
                if(filterTR==undefined){
                    faketr=full_faketr;    
                }else{
                    faketr=filterTR;
                }
                fakelmtr=full_fakelmtr;
                data=data_LMcards;
                faketr.map(function(cv){  //撈取所有行程編號
                    tr_no.push(cv.TR_no);
                });

                tr_no.map(function(lm,i){  //撈取和行程編號相同之地標編號
                    fakelmtr.map(function(trno){
                        if(trno.TR_no==lm){
                            lmtr.push(trno);
                        }
                    });
                });
                data.map(function(data){    //撈取每筆地標編號之資料 
                    return fakelmtr.TR_no == data.TR_no
                });
                return [tr_no,lmtr,data];
            }
//=======================================================================
var filterTR;
    //改變支線 start --------------------------------------**---------------
    $('#pexDro').on('change',function(event){
        $('.pdaysDro')[0].selectedIndex=0;

        var n = parseInt(event.target.value);
        var branch = ["內灣線","平溪線","集集線","阿里山線","全部支線"];
        if(n==5){
            searchTour(filterTR);
        }else{
        
            //第一筆 lmtr(第一天的第一個行程) 所屬的支線 必須和 選擇的支線相同才要留下, 其他就過濾掉
            faketr = full_faketr.filter(function(cv){
                var cv = cv;
                //找到該行程的第一筆lmtr
                var lmtr = full_fakelmtr.find(function(ele){
                                return ele.TR_no == cv.TR_no;
                            });

                var firstcard = data_LMcards.find(function(ele){
                                return lmtr.LM_no == ele.LM_no;
                            });
                //console.log(branch[(n-1)]+"="+firstcard.branch);
                return branch[(n-1)] == firstcard.branch;
            });
        
            //lmtr 所屬的支線 必須和 選擇的支線相同才要留下, 其他就過濾掉
            fakelmtr = full_fakelmtr.filter(function(cv){
                var cv = cv;
                // console.log(cv);
                var firstcard = data_LMcards.find(function(ele){
                                return cv.LM_no == ele.LM_no;
                            });
                // console.log(firstcard);
                //改動========================
                return firstcard;
                //===========================
                //         return branch[(n-1)] == firstcard.branch;   
            });
        }
        // console.log(fakelmtr);
        // console.log(full_faketr);


        // =================  重新刷新頁面 start  ==================
        //把所有 faketr 存在的 TR_no 都放進 TR_no_Arr
        TR_no_Arr = [];
        faketr.map(function(cv){
            TR_no_Arr.push(cv.TR_no);
        });
             // console.log(TR_no_Arr);
             // console.log(fakelmtr);
        //隨機產生兩個推薦行程
        var len = TR_no_Arr.length;
        var num = [ TR_no_Arr[Math.floor(Math.random()*len)], TR_no_Arr[Math.floor(Math.random()*len)] ];

        do{
            num = [ TR_no_Arr[Math.floor(Math.random()*len)], TR_no_Arr[Math.floor(Math.random()*len)] ];
        }while(num[0]==num[1])
        if(faketr.length!=0){
            if(tc_arr[0]==null){
            $('.pgridTop').empty();
            createtopbox(num[0], faketr, fakelmtr, data_LMcards,tc_arr[0]);
            createtopbox(num[1], faketr, fakelmtr, data_LMcards,tc_arr[0]);
            }else if(tc_arr[0]!=null){
                // console.log("!=null");
                // console.log("所有收藏行程編號清單"+tc_arr);
                var checkFav=[];
                // console.log(tc_arr);
                tc_arr.map(function(tc){
                    num.map(function(num){
                        if(tc.TR_no==num){
                        checkFav.push(tc);
                        }
                    });
                });
                // console.log(checkFav);
                $('.pgridTop').empty();
                createtopbox(num[0], faketr, fakelmtr, data_LMcards,checkFav);
                createtopbox(num[1], faketr, fakelmtr, data_LMcards,checkFav);
            }
        }
        

        $(".noData").remove();
        $('.pgridBottom').empty();
        if(faketr.length==0){
            // 當沒有查到支線行程
            $(".pscroll").width(0);
            $(".pwatch").prepend("<h2 style='font-size:1.25rem; text-align:center;height:240px;line-height:240px;' class='noData'>查無資料</h2>");
        }
        if(faketr.length!=0){
            if(tc_arr[0]==null){
                // console.log("長度"+faketr.length);
                TR_no_Arr.map(function(cv,i){
                    createBottomBox(cv, faketr, fakelmtr, data_LMcards, (n-1),tc_arr[0]);
                });            
            }else if(tc_arr[0]!=null){
                var bottomCheckFav=[];
                tc_arr.map(function(btc){ 
                    TR_no_Arr.map(function(alltrno){
                        if(btc.TR_no==alltrno && btc.MEM_no==storage['MEM_no']){//找到符合行程編號清單且是該會員
                            bottomCheckFav.push(btc); 
                        }
                    });
                });
                TR_no_Arr.map(function(cv,i){
                    createBottomBox(cv, faketr, fakelmtr, data_LMcards, (n-1),bottomCheckFav);
                });    
            }
        }
        // =================  重新刷新頁面 end  ==================


        //===========================================================================
        // 重新將下層 div 的寬度 reset +下方都沒有時直接歸0
        //===========================================================================
        var allWidth=0;
        var x=$('.pgridBottom .pgridItem');
        pscroll=$(".pscroll");
        if(x.length>0){  //如果下方有行程資料時執行
            for(var i=0;i<x.length;i++){
                allWidth=allWidth+x.width()+50;
            }
            pscroll.css({
                width:allWidth  //將計算的總寬度設為pscroll的
            });
        }else if(x.length==0){  //如果沒有時直接將下方設定成寬度0
            pscroll.css({
                width:0
            });
        } //重算下方寬度 end---------------------------------------
            
        //================改動=======================================================
        // 切換支線時重新定位及是否顯示按鈕
        //===========================================================================
        $('.pgridBottom').css({'left':0});//每當切換支線時重置位置
        $(".pline").css({"background-position-x":0,"background-position-y":0});
        total=0;//當選擇支線時支線重置偏移總和
        releft=$('.pgridBottom').css('left');
        releft=releft.split("px");  //字串切割抓值
        // console.log($('.pwatch').width());  
        if(releft[0]==0 && pscroll.width()>$('.pwatch').width()){  //偏移量0內部大於外部
            // console.log('OK');
            // console.log('pscroll'+ $('.pscroll').width());
            // console.log($('.pwatch').width());  
            $('.pRight').css({display:"block"});
            $('.pLeft').css({display:"none"});
            $('.phoneRight').css({display:"inline-block"});
            $('.phoneLeft').css({display:"none"});
        }else if(releft[0]==0 && pscroll.width()<=$('.pwatch').width()){ //偏移0內部小於外部
            // console.log('行程寬度小於等於視窗寬度,隱藏按鈕');
            $('.pRight').css({display:"none"});
            $('.pLeft').css({display:"none"});
            $('.phoneRight').css({display:"none"});
            $('.phoneLeft').css({display:"none"});
        }

    });//改變支線 end -----------------------------------------------------


    //===========================================================================
    //篩選天數
    //===========================================================================
    $('.pdaysDro').on('change',function(event){
         $('#pexDro')[0].selectedIndex=0;
        var line=$('#pexDro');
        var lineStyle=$('.pline');
        var cirStyle=$('.pcir');
        var pgridItemB=$('.pgridBottom .pgridItem');
        lineStyle.css({
                        // backgroundColor: "#aaa"
                        borderColor: "#474747",
                        backgroundImage: "linear-gradient(90deg,#474747 0px,#474747 10px,#474747 25px,#fff 26px)"
                    });
        pgridItemB.removeClass("changeBBeforePingc").removeClass("changeBBeforeGigi").removeClass("changeBBeforeIlisian").removeClass("changeBBeforeNeiwan").addClass("beforeChangeBB");
        cirStyle.css({
                        backgroundColor: "#474747"
                    }).html("<span class='plightText' style='color:#474747';>全部支線</span>");
        var value=parseInt(event.target.value);//取得選到的值
        var faketr=$(document).find('.ptourBtn'); //抓取所有為ptourBtn的a元素
        var getNowTR=[];  //儲存行程編號
        var savelmtr=[];  //儲存地標編號
        var saveday=[];   // 儲存最大天數
        var trIndex=[];   //儲存符合天數的索引
        // for(var i=0;i<faketr.length;i++){ 
        //     getNowTR.push(parseInt(faketr[i].attributes.value.value)); //將所有抓到的行程推入陣列
        // }
        //===========================================================================
        // 計算每個行程編號天數的方法
        //===========================================================================
        function searchDay(){
            //先抓取和目前行程編號相同之行程地標
            full_faketr.map(function(cv){
                // console.log(cv);
                full_fakelmtr.map(function(lmtr){ //抓取所有行程目標的行程地標
                    if(cv.TR_no==lmtr.TR_no){
                        savelmtr.push(lmtr);
                    }
                });    
                
            });
            //計算每一筆行程最大天數
            var maxday=0;  //預設最大天數為0
            var saveindex=0;  //預設行程編號為0
            savelmtr.map(function(day,i){  //跑一次所有行程地標
                if(i==0){   //索引值為0時將得到的行程設定為索引0的行程編號,用來判斷當作初值
                    saveindex=day.TR_no;
                    // console.log(saveindex);
                }else if(i>0){  //索引大於0時則開始判斷行程編號是否為同天以及紀錄同一行程編號的天數最大值
                    // console.log(day.TR_no);
                    // console.log("saveindex"+saveindex);
                     // console.log(i);
                    if(day.TR_no==saveindex){  //行程編號相同時
                        if(day.LMTR_day>maxday){   //當目前的天數大於預設最大天數時
                            maxday=day.LMTR_day;    //更新最大天數
                        }
                        if(i==savelmtr.length-1){
                            saveday.push(parseInt(maxday)); 
                        }
                    }
                    else if(day.TR_no!=saveindex){  //行程編號不同時
                        saveday.push(parseInt(maxday));   //表示取得了行程編號的最大天數,並推入陣列
                        saveindex=day.TR_no;  //重置行程編號為當前的行程編號
                        maxday=0;   //重置最大天數
                    }
                }
            }); 
            return saveday;  //回傳所有行程編號的最大天數
        } 
        //===========================================================================
        // 計算每個行程編號天數的方法   end
        //===========================================================================
        
        //===========================================================================
        // 過濾並找到相同天數之行程編號物件的方法
        //===========================================================================
        function filterDay(value){
            var branch=$(".pexDro").val();  //找到支線的值
            var searchTR=[];//行程編號索引
            var filterTR=[];//抓回來的行程編號物件
            searchDay();  //取得目前頁面上所有行程最大天數
                // saveday=saveday.slice(2);//跳過上方兩個不存天數
                console.log(saveday);
                if(value!=0){
                    saveday.filter(function(data,i){  //過濾天數為1的行程編號索引值
                        if(data==value){
                            trIndex.push(i);  //紀錄天數為1得行程編號索引  
                        }
                    });
                }else if(value==0){
                    saveday.map(function(data,i){
                        trIndex.push(i);
                    });
                    console.log(trIndex);
                }
                if(trIndex.length==0){
                    // 當有行程但沒有符合天數顯示
                    $(".pgridBottom").empty();
                    $(".noData").remove();
                    $(".pscroll").width(0);
                    $(".pwatch").prepend("<h2 style='font-size:1.25rem; text-align:center;height:240px;line-height:240px;' class='noData'>查無資料</h2>");
                }else if(trIndex.length!=0){  //不為0表示有符合這個天數的行程
                    // getNowTR=getNowTR.slice(2);  //跳過上方的兩個不抓取行程編號
                    trIndex.map(function(x){   //利用紀錄的行程編號索引位置去找行程
                        full_faketr.map(function(cv,i){ //篩選出符合索引位置的行程編號
                            if(x!=i){
                                return;  //不是需要的索引位置就跳過
                            }else{
                                searchTR.push(cv);//找到索引將該索引的值推入陣列
                            } 
                        });
                    });
                    searchTR.map(function(cv){   //用符合找到天數的值去抓行程編號物件
                        full_faketr.map(function(o){
                            if(o.TR_no==cv.TR_no){
                                filterTR.push(o);
                            }
                        });   
                    });
                    var dayCheckFav=[];
                    tc_arr.map(function(dtc){ 
                        filterTR.map(function(alltrno){
                            if(dtc.TR_no==alltrno.TR_no && dtc.MEM_no==storage['MEM_no']){//找到符合行程編號清單且是該會員
                                dayCheckFav.push(dtc);  
                            }
                        });
                    });
                    // console.log(tc_arr);
                    console.log(filterTR);
                    // console.log(dayCheckFav);

                    var len = filterTR.length;
                    if(len==1){
                        var num = [ filterTR[Math.floor(Math.random()*len)], filterTR[Math.floor(Math.random()*len)] ];

                        if(num[0]==num[1]){
                            num = [ filterTR[Math.floor(Math.random()*len)], filterTR[Math.floor(Math.random()*len)] ];
                        }//while(num[0]==num[1])
                    }else if(len>1){
                         var num = [ filterTR[Math.floor(Math.random()*len)], filterTR[Math.floor(Math.random()*len)] ];

                        do{
                            num = [ filterTR[Math.floor(Math.random()*len)], filterTR[Math.floor(Math.random()*len)] ];
                        }while(num[0]==num[1])
                    }
                    if(faketr.length!=0){
                        if(tc_arr[0]==null){
                        $('.pgridTop').empty();
                        createtopbox(num[0], filterTR, fakelmtr, data_LMcards,tc_arr[0]);
                        createtopbox(num[1], filterTR, fakelmtr, data_LMcards,tc_arr[0]);
                        }else if(tc_arr[0]!=null){
                            // console.log("!=null");
                            // console.log("所有收藏行程編號清單"+tc_arr);
                            var checkFav=[];
                            // console.log(tc_arr);
                            tc_arr.map(function(tc){
                                num.map(function(num){
                                    if(tc.TR_no==num.TR_no){
                                    checkFav.push(tc);
                                    }
                                });
                            });
                            // console.log(checkFav);
                            $('.pgridTop').empty();
                            createtopbox(num[0].TR_no, filterTR, fakelmtr, data_LMcards,checkFav);
                            createtopbox(num[1].TR_no, filterTR, fakelmtr, data_LMcards,checkFav);
                        }
                    }
                    $(".noData").remove();
                    $('.pgridBottom').empty();
                    searchTR.map(function(cv,i){
                        createBottomBox(cv.TR_no, filterTR, fakelmtr, data_LMcards,branch-1,dayCheckFav);
                    });    
                }
            }
        if(value==1){  //如果是1天
            filterDay(value);
        }else if(value==2){
            filterDay(value);
        }else if(value==3){
            filterDay(value);
        }else if(value==4){
            filterDay(value);
        }else if(value==5){
            filterDay(value);
        }else if(value==6){
            filterDay(value);
        }else if(value==7){
            filterDay(value);
        }else if(value==8){
            filterDay(value);
        }else if(value==0){
            filterDay(value);

        }
           console.log(value);
        var allWidth=0;
        var x=$('.pgridBottom .pgridItem');
        pscroll=$(".pscroll");
        if(x.length>0){  //如果下方有行程資料時執行
            for(var i=0;i<x.length;i++){
                allWidth=allWidth+x.width()+50;
            }
            pscroll.css({
                width:allWidth  //將計算的總寬度設為pscroll的
            });
        }else if(x.length==0){  //如果沒有時直接將下方設定成寬度0
            pscroll.css({
                width:0
            });
        } //重算下方寬度 end---------------------------------------
            
        //================改動=======================================================
        // 切換支線時重新定位及是否顯示按鈕
        //===========================================================================
        $('.pgridBottom').css({'left':0});//每當切換支線時重置位置
        $(".pline").css({"background-position-x": 0,"background-position-y":0});
        total=0;//當選擇支線時支線重置偏移總和
        releft=$('.pgridBottom').css('left');
        releft=releft.split("px");  //字串切割抓值
        // console.log($('.pwatch').width());  
        if(releft[0]==0 && pscroll.width()>$('.pwatch').width()){  //偏移量0內部大於外部
            // console.log('OK');
            // console.log('pscroll'+ $('.pscroll').width());
            // console.log($('.pwatch').width());  
            $('.pRight').css({display:"block"});
            $('.pLeft').css({display:"none"});
            $('.phoneRight').css({display:"inline-block"});
            $('.phoneLeft').css({display:"none"});
        }else if(releft[0]==0 && pscroll.width()<=$('.pwatch').width()){ //偏移0內部小於外部
            // console.log('行程寬度小於等於視窗寬度,隱藏按鈕');
            $('.pRight').css({display:"none"});
            $('.pLeft').css({display:"none"});
            $('.phoneRight').css({display:"none"});
            $('.phoneLeft').css({display:"none"});
        }





    });//.pdaysDro end
        




});


// ==============================================================================================
    //重新抓取pscroll和pwatch的寬度方法
// ==============================================================================================    
     function resizescroll(){
        var allWidth=0;
        var x=$('.pgridBottom .pgridItem');
        pscroll=$('.pscroll');   //計算pgridItem 每個項目的總和寬度
        for(var i=0;i<x.length;i++){
            allWidth=allWidth+x.width()+50;
        }
        pscroll.css({
            width:allWidth
        });
        pwatch=$('.pwatch');   //計算pwatch的寬度
        pwatchWidth=0;
        dw=$('.pArea2').width();
        pwatchWidth=dw;
        pwatch.css({
            width:pwatchWidth
        });
    }//end=====================================================
// ==============================================================================================
    //視窗變化時下方按鈕的出現 
// ==============================================================================================
    $(window).on('resize',function(){
        resizescroll();    //當螢幕寬度變化時重新計算pscroll,pwatch寬度
        releft=$('.pgridBottom').css('left').split('px');//pgridBottom的偏移位置
        test=$('.pwatch').width(); //外部寬度
        shiftOffset=reOffset(test,shiftOffset);  //重新計算偏移量
        lightBoxWidth=$(document).width(); //視窗寬度
        lastLeft=pscroll.width()+parseInt(releft[0]);// 計算最後一個剩餘的偏移量總長度-一次偏移量
       // console.log("pwatch"+pwatch.width());
       console.log("pscroll"+pscroll.width());
       console.log("lastLeft"+lastLeft);
       console.log("re:"+releft);
       console.log("test"+test);
      if(pscroll.width()<=pwatch.width()){  //當內部小於外部寬度表示行程數量不超過3筆
        // console.log("內部小於外部寬度表示行程數量不超過3筆");
        $('.pRight').css({display:'none'});
      }else if(releft[0]==0 && lightBoxWidth>480){  //偏移0且網頁寬度大於480
        // console.log("偏移0且網頁寬度大於480");
        $('.pRight').css({display:'block'});
      }else if(pscroll.width()>pwatch.width() && 690<=lastLeft&&lastLeft<=1035 &&lightBoxWidth>970){  
        //內部寬度大於外部寬度時表示行程>3,且最後偏移量介於690到1035,視窗>970
        // console.log("內部寬度大於外部寬度時表示行程>3,且最後偏移量介於690到1035,視窗>970");
        $('.pRight').css({display:'none'});
        $('.pLeft').css({display:'block'});
      }else if(pscroll.width()>pwatch.width() && lastLeft<690 &&lightBoxWidth>480){
        //內部寬度大於外部寬度時表示行程>3,且最後偏移量<690,視窗>480
        // console.log("內部寬度大於外部寬度時表示行程>3,且最後偏移量<690,視窗>480");
        $('.pRight').css({display:'none'});
        $('.pLeft').css({display:'block'});
      }else if(pscroll.width()>pwatch.width() && pscroll.width()>345 && releft[0]==0 &&lightBoxWidth<=480){
        $('.phoneRight').css({display:'inline-block'});
        // console.log("內部寬度大於外部寬度時表示行程>3,偏移為0,且視窗<=480");
      }else if(pscroll.width()>pwatch.width() && pscroll.width()==345 && releft[0]==0 &&lightBoxWidth<=480) {
        $('.phoneRight').css({display:'none'});
      }else if(pscroll.width()>pwatch.width() && releft[0]!=0 &&lightBoxWidth>480){
        // console.log("內部寬度大於外部寬度時表示行程>3,偏移不為0,視窗>480");
        $('.pRight').css({display:'block'});
        $('.pLeft').css({display:'block'});
      }else if(pscroll.width()>pwatch.width() && releft[0]<=-(pscroll.width()-shiftOffset) &&lightBoxWidth<=480){
        // console.log("內部寬度大於外部寬度時表示行程>3,偏移<=-4485,視窗<=480");
        $('.phoneRight').css({display:'none'});
        $('.phoneLeft').css({display:'block'});
      }else if(pscroll.width()>pwatch.width() && releft[0]!=0 &&lightBoxWidth<=480){
        // console.log("內部寬度大於外部寬度時表示行程>3,偏移不為0,視窗<=480");
        $('.phoneRight').css({display:'block'});
        $('.phoneLeft').css({display:'block'});
      }else if(pscroll.width()>pwatch.width() && releft[0]!=0){
        // console.log("內部寬度大於外部寬度時表示行程>3,偏移不為0");
        $('.pRight').css({display:'block'});
        $('.pLeft').css({display:'block'});
      }
        // console.log(pscroll.width());
    });  //視窗變化時下方按鈕的出現 end================================================

// ==============================================================================================
// 切換支線改變中間線顏色方法
// ==============================================================================================
$(function(){
    var line=document.getElementById('pexDro');
    var lineStyle=$('.pline');
    var cirStyle=$('.pcir');
    var pgridItemT=$('.pgridTop .pgridItem');
    var pgridItemB=$('.pgridBottom .pgridItem');
    // console.log("line.length"+line.length);
    $('#pexDro').on('change',function(){
        for(var i=0;i<line.length;i++){
            if(line.options[i].selected==true){
                if(line.options[i].text=="阿里山線"){
                    lineStyle.css({
                        // backgroundColor: "#aa3535"
                        border:"2px solid #b24949",
                        backgroundImage: "linear-gradient(90deg,#b24949 0px,#b24949 10px,#b24949 25px,#fff 26px)"
                    });
                    pgridItemB.removeClass("beforeChangeBB").removeClass("changeBBeforeNeiwan").removeClass("changeBBeforeGigi").removeClass("changeBBeforePingc").addClass("changeBBeforeIlisian");
                    pgridItemT.removeClass("beforeChangeTB").removeClass("changeTBeforeNeiwan").removeClass("changeTBeforeGigi").removeClass("changeTBeforePingc").addClass("changeTBeforeIlisian");
                    cirStyle.css({
                        backgroundColor: "#aa3535"
                    }).html("<span class='plightText' style='color:#aa3535;'>"+line.options[i].text+"</span>");
                }else if(line.options[i].text=="集集線"){
                    lineStyle.css({
                        // backgroundColor: "#075f9b"
                        border:"2px solid #1f6fa5",
                        backgroundImage: "linear-gradient(90deg,#1f6fa5 0px,#1f6fa5 10px,#1f6fa5 25px,#fff 26px)"
                    });
                    // 改變偽元素顏色
                    pgridItemB.removeClass("beforeChangeBB").removeClass("changeBBeforeNeiwan").removeClass("changeBBeforeIlisian").removeClass("changeBBeforePingc").addClass("changeBBeforeGigi");
                    pgridItemT.removeClass("beforeChangeTB").removeClass("changeTBeforeNeiwan").removeClass("changeTBeforeIlisian").removeClass("changeTBeforePingc").addClass("changeTBeforeGigi");
                    
                    cirStyle.css({
                        backgroundColor: "#075f9b"
                    }).html("<span class='plightText' style='color:#075f9b;'>"+line.options[i].text+"</span>");
                }else if(line.options[i].text=="內灣線"){
                    lineStyle.css({
                        // backgroundColor: "#298736"
                        border: "2px solid #3e934a",
                        backgroundImage: "linear-gradient(90deg,#3e934a 0px,#3e934a 10px,#3e934a 25px,#fff 26px)"
                    });
                    pgridItemB.removeClass("beforeChangeBB").removeClass("changeBBeforeGigi").removeClass("changeBBeforeIlisian").removeClass("changeBBeforePingc").addClass("changeBBeforeNeiwan");
                    pgridItemT.removeClass("beforeChangeTB").removeClass("changeTBeforeGigi").removeClass("changeTBeforeIlisian").removeClass("changeTBeforePingc").addClass("changeTBeforeNeiwan");
                    cirStyle.css({
                        backgroundColor: "#298736"
                    }).html("<span class='plightText' style='color:#298736';>"+line.options[i].text+"</span>");
                }else if(line.options[i].text=="平溪線"){
                    lineStyle.css({
                        // backgroundColor: "#ce631b"
                        border: "2px solid #d27231",
                        backgroundImage: "linear-gradient(90deg,#d27231 0px,#d27231 10px,#d27231 25px,#fff 26px)"
                    });
                    pgridItemB.removeClass("beforeChangeBB").removeClass("changeBBeforeGigi").removeClass("changeBBeforeIlisian").removeClass("changeBBeforeNeiwan").addClass("changeBBeforePingc");
                    pgridItemT.removeClass("beforeChangeTB").removeClass("changeTBeforeGigi").removeClass("changeTBeforeIlisian").removeClass("changeTBeforeNeiwan").addClass("changeTBeforePingc");
                    cirStyle.css({
                        backgroundColor: "#ce631b"
                    }).html("<span class='plightText' style='color:#ce631b';>"+line.options[i].text+"</span>");
                }else{
                    lineStyle.css({
                        // backgroundColor: "#aaa"
                        borderColor: "#474747",
                        backgroundImage: "linear-gradient(90deg,#474747 0px,#474747 10px,#474747 25px,#fff 26px)"
                    });
                    pgridItemB.removeClass("changeBBeforePingc").removeClass("changeBBeforeGigi").removeClass("changeBBeforeIlisian").removeClass("changeBBeforeNeiwan").addClass("beforeChangeBB");
                    pgridItemT.removeClass("changeTBeforePingc").removeClass("changeTBeforeGigi").removeClass("changeTBeforeIlisian").removeClass("changeTBeforeNeiwan").addClass("beforeChangeTB");
                    cirStyle.css({
                        backgroundColor: "#474747"
                    }).html("<span class='plightText' style='color:#474747';>"+line.options[i].text+"</span>");
                }
            }
        }
        

    });
});//end=======================

// ==============================================================================================
//重新設定偏移量方法
// ==============================================================================================
function reOffset(test,shiftOffset){
    if(test>=1035){ 
        shiftOffset=1035;
    }else if(test<1035 && test>970){
        shiftOffset=690;
    }
    else if(test<=970){
        shiftOffset=345;   
    }
    return shiftOffset;
}//end
//===============================
var lightBoxWidth=$(document).width();
var test=$('.pwatch').width();
var shiftOffset=1035;
var leftOffset=-shiftOffset;  //1035
var rightOffset= shiftOffset;
total=0;
var phoneRDisplay=$('.phoneRight').css("display");
var phoneLDisplay=$('.phoneLeft').css("display");
var pRDisplay=$('.pRight').css("display");
var pLDisplay=$('.pLeft').css("display");
//end================================

$(function(){
    shiftOffset=reOffset(test,shiftOffset);
    // var ce=test;
    // console.log("原寬度"+test);
    // console.log("原寬度"+shiftOffset);
    $(window).on('resize',function(event){

        // console.log("lightBoxWidth"+lightBoxWidth);
        // console.log(shiftOffset);
    });
    // position=$('.pgridBottom').position();
    // console.log("pgridBottom"+position.left);
    //左偏移方法
    function pleft(shiftOffset){
        leftOffset=-shiftOffset;  //1035
        rightOffset= shiftOffset;
        total=total+leftOffset;
        $('.pgridBottom').stop().animate({left:-total},1000);
        $(".pline").stop().animate({"background-position-x": -total},1000);
        console.log(total);
        // console.log("pgridBottom"+position.left);

        if(total<=0 &&lightBoxWidth>=480){
            total=0;
            if(pscroll.width()<=pwatch.width()){
                $('.pgridBottom').stop().animate({left:0},1000);
                $('.pRight').css({display:"none"});
                $('.pLeft').css({display:"none"});
                $('.phoneRight').css({display:"inline-block"});
                $('.phoneLeft').css({display:"none"});    
            }else{
                $('.pgridBottom').stop().animate({left:0},1000);
                $('.pRight').css({display:"block"});
                $('.pLeft').css({display:"none"});
                $('.phoneRight').css({display:"inline-block"});
                $('.phoneLeft').css({display:"none"});
            }
        }else if(total>pscroll.width()&&lightBoxWidth>=480){
            $('.pRight').css({display:"block"});
            $('.pLeft').css({display:"none"});
            $('.phoneRight').css({display:"inline-block"});
            $('.phoneLeft').css({display:"none"});
        }else if(lightBoxWidth>=480){
            $('.pRight').css({display:"block"});
            $('.pLeft').css({display:"block"});
            $('.phoneRight').css({display:"inline-block"});
            $('.phoneLeft').css({display:"inline-block"});
        }else if(total<=0 &&lightBoxWidth<480){  //手機端
            total=0;
            $('.pgridBottom').stop().animate({left:0},1000);
            $('.phoneRight').css({display:"inline-block"});
            $('.phoneLeft').css({display:"none"});
            $('.pRight').css({display:"block"});
            $('.pLeft').css({display:"none"});
        }else if(total>pscroll.width()&&lightBoxWidth<480){
            $('.phoneRight').css({display:"inline-block"});
            $('.phoneLeft').css({display:"none"});
            $('.pRight').css({display:"block"});
            $('.pLeft').css({display:"none"});
        }else if(lightBoxWidth<480){
            $('.phoneRight').css({display:"inline-block"});
            $('.phoneLeft').css({display:"inline-block"});
            $('.pRight').css({display:"block"});
            $('.pLeft').css({display:"block"});
        }
    }
    //右偏移方法
    function pright(shiftOffset){
        leftOffset=-shiftOffset;  //1035
        rightOffset= shiftOffset;
        total=total+rightOffset;
        $('.pgridBottom').stop().animate({left:-total},1000);
        $(".pline").stop().animate({"background-position-x": -total},1000);
        // console.log("total"+total);
        // console.log("pgridBottom"+position.left);
        if(total==0&&lightBoxWidth>=480){
            $('.pRight').css({display:"block"});
            $('.pLeft').css({display:"none"});
            $('.phoneRight').css({display:"inline-block"});
            $('.phoneLeft').css({display:"none"});
        }else if(total>=(pscroll.width()-shiftOffset)&&lightBoxWidth>=480){
            $('.pRight').css({display:"none"});
            $('.pLeft').css({display:"block"});
            $('.phoneRight').css({display:"none"});
            $('.phoneLeft').css({display:"inline-block"});
        }else if(lightBoxWidth>=480){
            $('.pRight').css({display:"block"});
            $('.pLeft').css({display:"block"});
            $('.phoneRight').css({display:"inline-block"});
            $('.phoneLeft').css({display:"inline-block"});
        }else if(total==0&&lightBoxWidth<480){  //手機端
            $('.pRight').css({display:"block"});
            $('.pLeft').css({display:"none"});
            $('.phoneRight').css({display:"inline-block"});
            $('.phoneLeft').css({display:"none"});            
        }else if(total>=(pscroll.width()-shiftOffset)&&lightBoxWidth<480){
            $('.pRight').css({display:"none"});
            $('.pLeft').css({display:"block"});
            $('.phoneRight').css({display:"none"});
            $('.phoneLeft').css({display:"inline-block"});            
        }else if(lightBoxWidth<480){
            $('.pRight').css({display:"block"});
            $('.pLeft').css({display:"block"});
            $('.phoneRight').css({display:"inline-block"});
            $('.phoneLeft').css({display:"inline-block"});            
        }     
    } 
    // $(window).on('resize','.phonebtn,.pbtn',function(){
    //     if(lightBoxWidth>480){
    //         $('.phonebtn').css({display:"none"});
    //         $('.pbtn').css({display:"block"}); 
    //         console.log(">=480");   
    //     }else if(lightBoxWidth<480){
    //         $('.pbtn').css({display:"none"});
    //         $('.phonebtn').css({display:"block"});
    //     }
    // }); 

    $(document).on('click','.pLeft,.phoneLeft',function(){
        resizescroll();
        pleft(shiftOffset);
    });
    $(document).on('click','.pRight,.phoneRight',function(){
        resizescroll();
        pright(shiftOffset);
    });
});

// 取消aTag事件
// function atag(e){
//     e.preventDefault();
// }
// var aTag=document.querySelectorAll('a');
// for(var i=0;i<aTag.length;i++){
//     aTag[i].addEventListener('click',atag);
// }

// 做天數切換、產生圖片更換等
$(function(){
 



   $(document).on('click','.ptourBtn',function(event){
        event.preventDefault();
        FaviBtn=$(this).parent().parent().parent().children(".pTool").find("div.memFavi");
        if(!storage['MEM_email']){  //判定是不是會員登入狀態
            $(".plBBtnNote").after("<li class='plBBtnAdd'><a href='#'>加入收藏</a></li>");
        }else{
            var checkXhr=new XMLHttpRequest();
            var MEM_no=storage['MEM_no'];
            var TR_no=$(this).attr("value");
            // console.log(TR_no);
            storage.setItem("pack_TR_on",TR_no);
            // console.log("MEM_no"+MEM_no);
            // console.log("TR_no"+TR_no);
            checkXhr.onreadystatechange=function(){
                if(checkXhr.readyState==4){
                    if(checkXhr.status==200){
                        if(checkXhr.responseText=="無"){
                            if($(".plBBtnAdd")){
                                $(".plBBtnAdd").empty(); 
                                $(".plBBtnNote").after("<li class='plBBtnAdd'><a href='"+TR_no+"'>加入收藏</a></li>");
                           }else{
                                $(".plBBtnNote").after("<li class='plBBtnAdd'><a href='"+TR_no+"'>加入收藏</a></li>");
                           }
                            $(".plBphoneBtnAdd").empty();
                            $(".plBphoneBtnAdd").html("<a href='"+TR_no+"'><i class='icon-heart'></i>加入收藏</a>");
                        }else if(checkXhr.responseText=="有"){
                            if($(".plBBtnAdd")){
                                $(".plBBtnAdd").empty(); 
                                $(".plBBtnNote").after("<li class='plBBtnAdd'><a href='"+TR_no+"'>取消收藏</a></li>");
                            }else{
                                $(".plBBtnNote").after("<li class='plBBtnAdd'><a href='"+TR_no+"'>取消收藏</a></li>");
                            }
                            $(".plBphoneBtnAdd").empty();
                            $(".plBphoneBtnAdd").html("<a href='"+TR_no+"'><i class='icon-heart'></i>取消收藏</a>");
                            // console.log(checkXhr.responseText);
                        }
                    }else{
                        alert("server error");
                    }
                }
            }
            var dataObj={
                "Add_type":2,
                "MEM_no":MEM_no,
                "TR_no":TR_no
            }
            var datacheck="NC_no="+JSON.stringify(dataObj);
            var url="packAdd.php?";
            checkXhr.open("post",url,true);
            checkXhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            checkXhr.send(datacheck);
        }


        $('body').css({'overflow-y':'hidden'});   //lightBox出現時不準下滑
        // 圖片位置
        var imgsrc=$(this).parent().parent().parent().find('.pshowImg div img').attr('src');
        // console.log(imgsrc);
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
                    console.log(pchangeDay);
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
        var pAllday=$(this).parent().parent().find('div:first-child span').html(); //抓取天數
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
                // console.log(x);
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
                // console.log(x);
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
        var ptitle=$(this).parent().prev().html();
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
      







    });//.ptourBtn===============
//自由行編輯行程==========================================

    // 卡片上
    $(document).on("click",".peditTour",function(){
        var editTR_no=$(this).attr("value");
        storage.setItem("transfer_to_free_by_TRno",editTR_no);
        location.href="free.php";
    });
    // 桌機端lightBox
    $(document).on("click",".plBBtnTool a",function(event){
        event.preventDefault();
        var editLBTR_no=$(this).attr("href");
        storage.setItem("transfer_to_free_by_TRno",editLBTR_no);
        location.href="free.php";
    });
    //手機端lightBox
    $(document).on("click",".plBphoneBtnTool a",function(event){
        event.preventDefault();
        var editLBTR_no=$(this).attr("href");
        storage.setItem("transfer_to_free_by_TRno",editLBTR_no);
        location.href="free.php";
    });


//加入收藏===============================================

$(document).on("click",".plBBtnAdd,.plBphoneBtnAdd",function(event){
    event.preventDefault();
    // if($(this).hasClass("plBphoneBtnAdd")){
    //     var btn=$(this);
    //     var Pbtn=$(this).parent().parent().prev().prev().find("div.plBBtn ul li.plBBtnAdd"); 
    // }else if($(this).hasClass("plBBtnAdd")){
    //     var btn=$(this);
    //     var Pbtn=$(this).parent().parent().parent().next().next().find("ul li.plBphoneBtnAdd");
    // }
    var btn=$(this);
    if(!storage['MEM_email']){  //判定是不是會員登入狀態
        alert('請先登入好遊會員!');     //先跳窗警告
        storage.setItem('G1_whereAmIFrom','pack.php');
        location.href ='memlogin.php';
    }else if(storage['MEM_email']){
        var addXhr=new XMLHttpRequest();
        // var TR_no=$(this).next().children().attr("href");
        var TR_no=storage['pack_TR_on'];
        var MEM_no=storage['MEM_no'];
        // console.log(TR_no);
        // console.log(btn.hasClass("plBBtnAdd"));
        addXhr.onreadystatechange=function(){
            if(addXhr.readyState==4){
                if(addXhr.status==200){
                    if(addXhr.responseText=="取消成功"){
                        if(btn.hasClass("plBBtnAdd")){
                            btn.html("<a href='"+TR_no+"'>加入收藏</a>");
                            $(".plBphoneBtnAdd").html("<a href='"+TR_no+"'><i class='icon-heart'></i>加入收藏</a>");
                            FaviBtn.removeClass('click_heart').attr('value','收藏').attr('hovertext','收藏');
                            FaviBtn.find("i").removeClass("special");
                        }else if(btn.hasClass("plBphoneBtnAdd")){
                            btn.html("<a href='"+TR_no+"'><i class='icon-heart'></i>加入收藏</a>");
                            $(".plBBtnAdd").html("<a href='"+TR_no+"'>加入收藏</a>");  
                            FaviBtn.removeClass('click_heart').attr('value','收藏').attr('hovertext','收藏');     //刪除卡片上的愛心樣式
                            FaviBtn.find("i").removeClass("special");
                        }
                        // console.log(addXhr.responseText);
                    }else if(addXhr.responseText=="加入成功"){
                        if(btn.hasClass("plBBtnAdd")){
                           btn.html("<a href='"+TR_no+"'>取消收藏</a>");
                            $(".plBphoneBtnAdd").html("<a href='"+TR_no+"'><i class='icon-heart'></i>取消收藏</a>");
                            FaviBtn.addClass('click_heart').attr('value','取消收藏').attr('hovertext','取消收藏');
                            FaviBtn.find("i").addClass("special");
                        }else if(btn.hasClass("plBphoneBtnAdd")){
                            $(".plBBtnAdd").html("<a href='"+TR_no+"'>取消收藏</a>");
                            btn.html("<a href='"+TR_no+"'><i class='icon-heart'></i>取消收藏</a>");  
                            FaviBtn.addClass('click_heart').attr('value','取消收藏').attr('hovertext','取消收藏');  //加入卡片上的愛心樣式
                            FaviBtn.find("i").addClass("special");
                        }
                        // console.log(addXhr.responseText);
                    }
                }else{
                    alert("server error");
                }
            }
        }
        var dataObj={
            "Add_type":1,
            "MEM_no":MEM_no,
            "TR_no":TR_no
        }
        var dataAdd="NC_no="+JSON.stringify(dataObj);
        var url="packAdd.php?";
        addXhr.open("post",url,true);
        addXhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        addXhr.send(dataAdd);
    }
});
//卡片愛心收藏效果========================================
    // 愛心收藏效果
$(document).on("click",".memFavi",function(){
    if(!storage['MEM_email']){  //判定是不是會員登入狀態
        alert('請先登入好遊會員!');     //先跳窗警告
        storage.setItem('G1_whereAmIFrom','pack.php');
        location.href ='memlogin.php';
    }else if(storage['MEM_email']){
        var favCount = $(this).attr('value');
        // console.log(favCount);
        var favBtn=$(this);
        var MEM_no=storage['MEM_no'];
        var TR_no=$(this).parent().find(".peditTour").attr("value");
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                    if(xhr.status==200){
                        if(xhr.responseText=="取消成功"){
                            // console.log(xhr.responseText);
                            favBtn.removeClass('click_heart').attr('value','收藏').attr('hovertext','收藏');
                            favBtn.find("i").removeClass("special");
                        }else if(xhr.responseText=="加入成功"){
                            // console.log(xhr.responseText);
                            favBtn.addClass('click_heart').attr('value','取消收藏').attr('hovertext','取消收藏');
                            favBtn.find("i").addClass("special");
                        }
                    }else{
                        alert("server error");
                    }
                }
        }
        var dataObj={
                "Add_type":1,
                "MEM_no":MEM_no,
                "TR_no":TR_no
            }
        var dataAdd="NC_no="+JSON.stringify(dataObj);
        var url="packAdd.php?";
        xhr.open("post",url,true);
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send(dataAdd);
    }
}).on('mousemove','.memFavi',function(e){   //加入文字到提示文字中
        var hoverText=$(this).attr('hovertext');
        var Fwidth=$(document).width(); 
        if(Fwidth<960){     //在平板下不用執行
            $('#showTxt').hide();
        }else{
            $('#showTxt').html(hoverText).show();
            $('#showTxt').css({
                'left': e.pageX +15,
                'top': e.pageY +15
            });
        }
}).on('mouseout','.memFavi',function(){
    $('#showTxt').hide();
});




});




