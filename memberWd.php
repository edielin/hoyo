<?php 
ob_start(); 
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>HO YO 好遊 | 新增遊記 | 選擇行程</title>
	<link rel="icon" type="image/gif" href="favicon.ico">
	<link rel="stylesheet" href="css/CSS_reset.css">
    <link rel="stylesheet" href="css/fontello.css">
	<link rel="stylesheet" href="css/hoyo_nav.css">
    <link rel="stylesheet" href="css/write/memberWd_1.css">
	<link rel="stylesheet" href="css/write/memberWd_2.css">
	<script src="js/jquery-3.1.0.min.js"></script>
    <script>
        var storage = sessionStorage;
        if(!storage['MEM_email']){
            location.href ='write.php';
        }
    </script>
</head>
<body>

<div id="mwd_wrapper">
    <header id="mwd_header">
        <?php include 'hoyo_nav.php';?>
        <script>
            $(function(){
                $('#nav_mainList li:nth-child(3)').addClass('nav_active');
                $('#nav_hamberUl li:nth-child(2)').addClass('nav_active');
            });
        </script>
    </header><!-- /header -->
    
    <!-- =========================================================================== -->
    
    <div id="mwd_content">
        <!-- 麵包屑 -->
           <section class="breadcrumb">
            <div class="container">
                <a href="index.php">首頁</a> &gt; <a href="member.php">會員專區</a> &gt; <a href="memberW.php">我的遊記</a> &gt; <a class="bread_active" href="memberWd_1.php">新增遊記</a>
            </div>
        </section>
        
        
        <!-- =========================================================================== -->
        
        <div class="container">
            <section class="mwd_info">
                <h2 class="mwd_title ch">新增遊記</h2>
                <div class="mwd_step">
                    <p class="mwd_s active">選擇行程</p>
                    <p class="mwd_s">編輯遊記</p>
                    <p class="mwd_s">完成</p>
                </div>
            </section>
        
        
        
        <!-- =========================================================================== -->
        
               <!-- 選擇行程 -->
            <section class="mwd_form">
                <h2><span>&nbsp;我的行程&nbsp;</span> 行程清單</h2>

                <div class="mwd_free">
                    <div class="fr">
                        <!-- <p>選一筆行程來撰寫遊記吧！</p>
                        <p>沒有你想要的行程嗎？馬上開始規劃<a href="free.php">我的自由行</a>吧！</p> -->
                    </div>
                </div>
                
                <div class="mwd_notYet">
                    還沒有規劃過行程或者行程都寫過遊記了哦，趕快去<a href="free.php">行程規劃</a>吧~~
                </div>

                <div class="mwd_selectBox">

                    <!-- <div class="mwd_selectTour">
                        <ul class="mwd_tourList">
                            <li>
                                <input type="radio" name="TR_name" id="TR_name01" value="漫步遊內灣老街">
                                <label class="mwd_TR_radio" for="TR_name01">
                                    <p>
                                        <span class="day">2</span><span class="gon">日</span>
                                        <span class="tr_name">漫步遊內灣老街</span>
                                    </p>
                                    <span class="iBox">
                                        <span class="iBlock">
                                            <i class="icon-ok"></i>
                                        </span>
                                    </span>
                                </label>
                            </li>
                        </ul>
                    </div>
        
        
                    <div class="mwd_formBtn">
                        <input id="mwdNext" class="btn-gray" type="button" value="開始寫遊記">
                    </div> -->

                </div>

            </section>
            
        
        </div> <!-- end of container -->

    </div> <!-- end of #mwd_content -->
    
    
    <!-- =========================================================================== -->
    
        <footer id="mwd_footer">HO YO 好遊 | 鐵路支線任你遊</footer>
</div>





    <?php include 'php/writeimport/import_mytr.php';?>
    <?php include 'php/writeimport/import_LMTRwd.php';?>
    <?php include 'php/writeimport/import_LMcard.php';?>
    <script src="js/write/memberWd.js"></script>


</body>
</html>
