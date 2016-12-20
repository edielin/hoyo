<?php ob_start();session_start();?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>好遊 HO YO | 後端管理平台</title>
<script type="text/javascript" src="js/backend/backendTour/vue.min.js"></script>
<!-- <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script> -->
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<link rel="stylesheet" type="text/css" href="css/CSS_reset.css">
<link rel="stylesheet" type="text/css" href="css/font-awesome-4.6.3/css/font-awesome.min.css">
<!-- <link rel="stylesheet" type="text/css" href="css/backend/backendTour/common.css"> -->
<link rel='stylesheet' href='css/backend/backendIndex.css'>
<link rel="stylesheet" type="text/css" href="css/backend/backendTour/free_mobile.css">
</head>
<body>
<div id="hoyo_wrapper">
    <?php include 'backendIndex_start.php'; ?>
        <script>
            $('.biContentBody li a[href="backendTour.php"]').addClass('here');
        </script>
    <div class="fm_title_wrapper">
        <div class="fm_thetitle">
            <h2 class="PH2"><span id="GObackendTour">行程管理</span> > 官方新增行程 > 新增完成</h2>
        </div>
    </div>

    <!-- <div class="fm_wrapper">
        <div class="fm_title">
            <h2>後端行程管理-行程新增</h2>
        </div>

    
        <div class="fm_steps complete">
            <div class="four_steps"><span>填資料</span></div>
            <div class="four_steps"><span>選地標</span></div>
            <div class="four_steps"><span>排行程</span></div>
            <div class="four_steps"><span>做確認</span></div>
            <div class="last_step active"><span>完成</span></div>
        </div>

    </div>
	 -->
    <div class="fm_wrapper fm_center">
        <div class="fm_title">
        	<h2>新增成功</h2>
        </div>
        <div class="fm1_cont">
        	<div class="fm1_cont_box_complete">
                <p>恭喜您！</p>
                <br>
                <div id="tr_info"></div>
                <p>已新增成功！</p>
                <br>
                <p>您可以 <a href="backend_freeMobile.php">繼續新增</a> 新的官方行程</p>
        	</div>
        </div>
    </div>

    <?php include 'backendIndex_end.php'; ?>

	<script src="js/backend/backendTour/free_mobile.js"></script>
    <script>
        var storage = sessionStorage;
        //產生自由行的資訊給使用者看
        var backend_freeMobile_Save_tr_name = storage['backend_freeMobile_Save_tr_name'] || '我的官方行程';
        var backend_freeMobile_Save_tr_no = storage['backend_freeMobile_Save_tr_no'] || 0;

        $('#tr_info').append("<p>官方行程 <span>#"+backend_freeMobile_Save_tr_no+" "+backend_freeMobile_Save_tr_name+"</span></p>");

        // storage.removeItem("backend_freeMobile_Save_tr_name");
        // storage.removeItem("backend_freeMobile_Save_tr_no");       
    </script>
    
        <script>
            var storage = sessionStorage;

            $('#GObackendTour').click(function(){
                if(storage['backend_modify_tour_by_TRno']){
                     storage.removeItem('backend_modify_tour_by_TRno');
                     location.href='backendTour.php';
                }else{
                     location.href='backendTour.php';
                }
            });
        </script>
</div>
</body>
</html>