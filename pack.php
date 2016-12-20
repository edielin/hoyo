<?php 
ob_start();
session_start();

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>HO YO 好遊 | 好遊行程</title>
	<link rel="icon" type="image/gif" href="favicon.ico">
	<link rel="stylesheet" type="text/css" href="css/CSS_reset.css">
	<link rel="stylesheet" type="text/css" href="css/pack/common.css">
	<link rel="stylesheet" type="text/css" href="css/hoyo_nav.css">
	<link rel="stylesheet" type="text/css" href="css/filters.css">
    <link rel="stylesheet" type="text/css" href="css/fontello.css">
    <link rel="stylesheet" type="text/css" href="css/pack/pack.css">
    <script src="js/jquery-3.1.0.min.js"></script>
</head>
<body>
    <!-- menu start -->
	<!-- 選單 連結部分之後改php-->
	<header>
	<?php 
		include 'hoyo_nav.php';
	?>
	<script>
		$(function(){
			$('#nav_mainList li:nth-child(2)').addClass('nav_active');
			$('#nav_hamberUl li:nth-child(1)').addClass('nav_active');
		});
	</script>
	</header>
	<!-- 選單結束 -->
	<!-- menu結束 -->
	<div class="pBody">
	<!--麵包屑start-->
	<section class="breadcrumb">
	    <div class="container">
	        <a href="index.php">首頁</a> &gt; <a class="bread_active" href="#">好遊行程</a>
	    </div>
	</section>
	<!-- 麵包屑end -->

	<h2 class="w_title ch">好遊行程</h2>
	 <!-- 搜尋BAR開始 -->
                <div class="pconditionBar ch">
                    <form action="#">
                        <div class="psequence">
<!--                             <div class="pseItem" id="pseItem">
                                <div>
                                    <a href="#" class="pseIChecked">依熱門排序</a>
                                </div>  
                                <div>
                                    <a href="#" >依日期排序</a>
                                </div>
                            </div>    -->               
                        </div>
                        <div class="pdropdown ch">

                            <div class="pextension filterFirst">
                                <select name="pexDro" id="pexDro" class="pexDro drowStyle ch" style="background-image: url(icon/select_branch.png)">
                                    <option value="5">全部支線</option>
                                    <option value="1">內灣線</option>
                                    <option value="2">平溪線</option>
                                    <option value="3">集集線</option>
                                    <option value="4">阿里山線</option>
                                </select>
                            </div>

                            <div class="pdays filterNth ch">
                                <select name="pdaysDro" id="pdaysDro" class="pdaysDro drowStyle ch" style="background-image: url(icon/select_day.png)">
                                    <option value="0">不限天數</option>
                                    <option value="1">1天</option>
                                    <option value="2">2天</option>
                                    <option value="3">3天</option>
                                    <option value="4">4天</option>
                                    <option value="5">5天</option>
                                    <option value="6">6天</option>   
                                    <option value="7">7天</option>
                                    <option value="8">8天</option>
                                </select>
                            </div>

                  <!--           <div class="precommend filterNth ch">
                                <select name="precDro" id="precDro" class="precDro drowStyle ch" style="background-image: url(icon/select_mem.png)">
                                    <option value="0">官方/會員</option>
                                    <option value="1">官方</option>
                                    <option value="2">會員</option>
                                </select>
                            </div> -->

                         <!--    <div class="psearch filterLast ch">
                                <input type="search" value="" placeholder="搜尋 ..." class="searchStyle ch" name="keyword">
                                <button class="searchBtn"></button>
                                <script>
                                    $('.searchBtn').click(function(event){
                                        event.preventDefault();
                                    });
                                </script>
                            </div> -->
                            <div class="clearfix"></div>
                        </div>
                    </form>
                </div>
                <!-- 搜尋BAR結束 -->
	<!-- 套裝行程開始 -->
	<section class="pArea2">
		<div class="container">
			<div class="row">
				<div class="pgrid">
					<div class="pgridTop">
						<div class="beforeChangeTB pgridItem">
							<div class="pgridItemContent">
								<div class="pItemCp">
									<div class="ptop">官方</div>
									<div class="pTool">
										<div class="memFavi"  value='收藏' hovertext='收藏'>
        									<i class="icon-heart-empty"></i>
    									</div>
    									<div class="peditTour" value="1">
    										<i class="icon-edit-1"></i>
    									</div>
									</div>
									<div class="pshowImg">
										<div>
											
										</div>
									</div>
									<div class="pdotTour">
										<div class="pdotStart"></div>
										<span class="pextenLine"></span>
										<div class="pdot1"><div class="pstationName">行程加載中</div></div>

										<span class="pextenLine">內灣站</span>
										<div class="pdot2"><div class="pstationName">行程加載中</div></div>
										<span class="pextenLine"></span>
										<div class="pdot3"><div class="pstationName">行程加載中</div></div>
										<span class="pextenLine"></span>
										<div class="pdot4"><div class="pstationName">行程加載中</div></div>
										<span class="pextenLine"></span>
										<div class="pdot5"><div class="pstationName">行程加載中</div></div>
										<span class="pextenLine"></span>
										<div class="pdot6"><div class="pstationName">行程加載中</div></div>
										<span class="pextenLine"></span>
										<div class="pdot6"><div class="pstationName">行程加載中</div></div>
										<span class="pextenLine"></span>
										<div class="pdotEnd"></div>
									</div>
									<div class="plist">
										<div class="ptourDay"><span>2</span>天</div>
										<div class="ptitle">行程加載中</div>
										<div class="pshowAllTour">
											<a class="ptourBtn" href="#">詳細行程</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="beforeChangeTB pgridItem">
							<div class="pgridItemContent">
								<div class="pItemCp">
									<div class="pTool">
										<div class="memFavi" value="0">
        									<i class="icon-heart-empty"></i>
    									</div>
    									<div class="peditTour" value="1">
    										<i class="icon-edit-1"></i>
    									</div>
									</div>
									<div class="pshowImg">
										<div>
											
										</div>
									</div>
									<div class="pdotTour">
										<div class="pdotStart"></div>
										<span class="pextenLine"></span>
										<div class="pdot1"><div class="pstationName">行程加載中</div></div>
										<span class="pextenLine"></span>
										<div class="pdot2"><div class="pstationName">行程加載中</div></div>
										<span class="pextenLine"></span>
										<div class="pdot3"><div class="pstationName">行程加載中</div></div>
										<span class="pextenLine"></span>
										<div class="pdot4"><div class="pstationName">行程加載中</div></div>
										<span class="pextenLine"></span>
										<div class="pdotEnd"></div>
									</div>
									<div class="plist">
										<div class="ptourDay"><span>1</span>天</div>
										<div class="ptitle">行程加載中</div>
										<div class="pshowAllTour">
											<a class="ptourBtn" href="#">詳細行程</a>
										</div>
									</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="pgridCenter">
							<div class="pcir"><span class="plightText">全部支線</span></div>
							<div class="pline"></div>
						</div>
					<div class="pwatch">
						<div class="pscroll">
							<div class="pgridBottom" id="pgridBottom">
	
							</div>
						</div>
					<div class="pbtn">	
						<button class="pLeft">
							<i class=" icon-left-open"></i>
						</button>
						<button class="pRight">
							<i class="icon-right-open"></i>
						</button>
					</div>	
					</div>
				</div>
			</div>	
			<div class="phonebtn">
				<button class="phoneLeft">
					<i class=" icon-left-open"></i>
				</button>
				<button class="phoneRight">
					<i class="icon-right-open"></i>
				</button>
			</div>
		</div>
		<div id="showTxt" class="ch"></div>
	</section>
	<!-- 套裝行程結束 -->
	<!-- lightBox -->
	<div class="plightBox">
		<div class="plightBoxAll">
			<div class="pexit"><i class="icon-cancel"></i></div>
			<div class="plightBoxContent">
				<div class="plBImg">
					<div>
					
					</div>
				</div>
				<div class="plBTitle">
					<h2></h2>
				</div>
				<div class="plBBtn">
					<ul>
						<li class="plBBtnNote">
							<a href="#">瀏覽遊記</a>
						</li>
						<li class="plBBtnAdd">
							<a href="#">加入收藏</a>
						</li>
						<li class="plBBtnTool">
							<a href="#">行程編輯</a>
						</li>
					</ul>
				</div>
				<ul class="pchangeDay">
				<!--<li class="dayStyle">
						<span class="pdayNumber">1</span>
					</li>
					<li class="dayStyle">
						<span class="pdayNumber">2</span>
					</li>
					<li class="dayStyle">
						<span class="pdayNumber">3</span>
					</li> -->
				</ul>
				<div class="plBTour">	
					<ul class="plBdotA">
				
					</ul>
				</div>
				<ul class="phonechangeDay">
					<li class="phonedayStyle">
						<span class="phonedayNumber">1</span>
					</li>
					<li class="phonedayStyle">
						<span class="phonedayNumber">2</span>
					</li>
				</ul>
			</div>
			<!-- 手機端天數-->
			<!-- 手機端行程 -->
			<div class="plBphoneTour">
				<ul>
					<li class="phonedayTour">
						<span class="plBphoneDot">
							<div class="plBphoneName">小野日式餐館</div>
						</span>
						<span class="plBphoneLine"></span>
						<span class="plBphoneDot">
							<div class="plBphoneName">小野日式餐館將江</div>
						</span>
						<span class="plBphoneLine"></span>
						<span class="plBphoneDot">
							<div class="plBphoneName">小野日式餐館</div>
						</span>
						<span class="plBphoneLine"></span>
						<span class="plBphoneDot">
							<div class="plBphoneName">小野日式餐館</div>
						</span>
						<span class="plBphoneLine"></span>
						<span class="plBphoneDot">
							<div class="plBphoneName">小野日式餐館</div>
						</span>
						<span class="plBphoneLine"></span>
						<span class="plBphoneDot">
							<div class="plBphoneName">小野日式餐館</div>
						</span>
						<span class="plBphoneLine"></span>
						<span class="plBphoneDot">
							<div class="plBphoneName">小野日式餐館</div>
						</span>
						<span class="plBphoneLine"></span>
						<span class="plBphoneDot">
							<div class="plBphoneName">小野日式餐館</div>
						</span>
						<span class="plBphoneLine"></span>
						<span class="plBphoneDot">
							<div class="plBphoneName">小野日式餐館</div>
						</span>
					</li>
					<li class="phonedayTour">
						<span class="plBphoneDot">
							<div class="plBphoneName">小野日式餐館</div>
						</span>
						<span class="plBphoneLine"></span>
						<span class="plBphoneDot">
							<div class="plBphoneName">小野日式餐館將江</div>
						</span>
						<span class="plBphoneLine"></span>
						<span class="plBphoneDot">
							<div class="plBphoneName">小野日式餐館</div>
						</span>
						<span class="plBphoneLine"></span>
						<span class="plBphoneDot">
							<div class="plBphoneName">小野日式餐館</div>
						</span>
						<span class="plBphoneLine"></span>
						<span class="plBphoneDot">
							<div class="plBphoneName">小野日式餐館</div>
						</span>
					</li>
				</ul>
			</div>
			<div class="plBphoneBtn">
				<ul class="plBphoneBtnAll">
					<li class="plBphoneBtnNote">
						<a href="#"><i class="icon-eye"></i>瀏覽遊記</a>
					</li>
					<li class="plBphoneBtnAdd">
						<a href="#"><i class="icon-heart"></i>加入收藏</a>
					</li>
					<li class="plBphoneBtnTool">
						<a href="#"><i class="icon-edit-1"></i>行程編輯</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<!-- lightBox結束-->
	</div>
	<!-- 頁尾 -->
	<footer class="ch">
		HO YO 好遊 | 鐵路支線任你遊
	</footer>

	<!-- script -->
	<?php include 'php/pack/import_TR.php'; ?>
	<?php include 'php/pack/import_LMTR.php'; ?>
	<?php include 'php/pack/import_LMcard.php'; ?>
	<?php include 'php/pack/import_TC.php' ?>
	<script src="js/pack/packdata.js"></script>
	<script src="js/pack/pack.js"></script>

</body>
</html>
