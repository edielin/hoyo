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
    
    <div id='mwd_content'>
        <!-- 麵包屑 -->
           <section class='breadcrumb'>
            <div class='container'>
                <a href='index.php'>首頁</a> &gt; <a href='member.php'>會員專區</a> &gt; <a href='memberW.php'>我的遊記</a> &gt; <a class='bread_active' href='memberWd_1.php'>新增遊記</a>
            </div>
        </section>
        
        
        <!-- =========================================================================== -->
        
            <div class='container'>
                <section class='mwd_info'>
                    <h2 class='mwd_title ch'>新增遊記</h2>
                    <div class='mwd_step'>
                        <p class='mwd_s'>選擇行程</p>
                        <p class='mwd_s'>編輯遊記</p>
                        <p class='mwd_s active'>完成</p>
                    </div>
                </section>
        
        
        
        <!-- =========================================================================== -->
        
               <!-- 選擇行程 -->
            <section class='mwd_form'>

                <div class='mwd3_inform'>
                    <p>新增遊記完成，可至<a href='memberW.php'>我的遊記</a>查看！</p>
                </div>      

            </section>
            
        
            </div>
    </div>
    
    <!-- =========================================================================== -->
    
        <footer id="mwd_footer">HO YO 好遊 日| 鐵路支線任你遊</footer>
</div>





    <?php include 'import_mytr.php';?>
    <?php include 'import_LMTR.php';?>
    <?php include 'import_LMcard.php';?>
    <script src="js/write/memberWd.js"></script>


</body>
</html>
