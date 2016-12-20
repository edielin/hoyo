<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" type="image/gif" href="favicon.ico">
	<link rel="stylesheet" type="text/css" href="css/fontello.css">	
	<link rel="stylesheet" href="css/CSS_reset.css"> <!-- 共用css -->
	<link rel="stylesheet" href="css/wistList.css">  <!-- 共用css -->
	<link rel="stylesheet" href="css/hoyo_nav.css">  <!-- 共用css -->
	<link rel="stylesheet" href="css/n_css/n_timelines.css"> <!-- n_timeline.css -->
	<link rel="stylesheet" href="css/n_css/facebox.css">     <!-- 燈箱css -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.3/jquery.min.js"></script>
	<script src="js/n_js/main.js"></script> 	  <!-- Resource jQuery -->
	<script src="js/n_js/modernizr.js"></script> <!-- Modernizr -->
  	<script src="js/n_js/facebox.js"></script>   <!-- 燈箱js -->

  	<script>
		$(document).ready(function(){  
			$.facebox.settings.loadingImage = 'images/n_img/loading.gif';
			$.facebox.settings.closeImage ='images/n_img/closelabel.png';
			$('.cd-read-more').facebox();
		});
	</script>
</head>	
<body>
	<header>
	  <?php include 'hoyo_nav.php';?>
	  <script>
	   $(function(){
	    $('#nav_mainList li:nth-child(5)').addClass('nav_active');
	    $('#nav_hamberUl li:nth-child(4)').addClass('nav_active');
	   });
	  </script>
	 </header>






<div class="n_container">
<!-- 麵包屑 -->
	<section class="breadcrumb">
	    <div class="container">
	        <a href="#">首頁</a> &gt; <a class="bread_active" href="#">最新消息</a>
	    </div>
	</section>
	<!-- 麵包屑 -->

	<div class="n_timeline_tt"><h2>最新消息</h2></div>


	<section id="cd-timeline" class="cd-container">
	
<?php
try{
  require_once("connectToHoyo.php");  
  $sql = "select * from news order by NEWS_time desc";
  $news = $pdo->query( $sql );
  
  // $data = '\'[';

  while($newsRow = $news->fetch( PDO::FETCH_ASSOC) ){
  // 	$data.= '{';
  // 	$data.= '"NEWS_no":'.$newsRow['NEWS_no'].', ';
  // 	$data.= '"LM_no":'.$newsRow['LM_no'].', ';
  // 	$data.= '"NEWS_title":"'.$newsRow['NEWS_title'].'", ';

  // 	$data.= '"NEWS_time":"'.$newsRow['NEWS_time'].'", ';
  // 	$data.= '"NEWS_content":"'.$newsRow['NEWS_content'].'", ';
  // 	$data.= '"NEWS_type":"'.$newsRow['NEWS_type'].'", ';
  // 	$data.= '"NEWS_img":'.$newsRow['NEWS_img'].', ';
  // 	$data.= '},';
  // }

  // $data = substr($data, 0, -1);
  // $data.= ']\'';  
?>

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
				<img src="images/n_img/news.png" alt="Picture">
			</div>

			<div class="cd-timeline-content">
				<h2 class="n_title ch"><?php echo $newsRow["NEWS_title"]?></h2>
				<div class="imgbox">
					<img src="<?php echo $newsRow["NEWS_img"]?>">
				</div>
				<p class="ch"><?php echo $newsRow["NEWS_content"]?></p>
				<span class="cd-date en"><?php echo $newsRow["NEWS_time"]?></span>
			</div>
		</div>


<?php
	}
}catch(PDOException $ex){
  echo "連線失敗,原因:" , $ex->getMessage() ,"<br>";
  echo "行號 : " , $ex->getLine() ,"<br>";
}

?>  
	</section>
</div>	
<footer class="ch">HO YO 好遊 | 鐵路支線任你遊</footer>
</body>
</html>





