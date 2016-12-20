<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HO YO 好遊 | 遊記分享</title>
    <link rel="icon" type="image/gif" href="favicon.ico">
	<link rel="stylesheet" href="css/CSS_reset.css">
    <link rel="stylesheet" href="css/fontello.css">
	<link rel="stylesheet" href="css/hoyo_nav.css">
    <link rel="stylesheet" href="css/filters.css">
    <link rel="stylesheet" href="css/write/write.css">
	<script src="js/jquery-3.1.0.min.js"></script>
</head>
<body>

<div id="hoyo_wrapper">

    <header id="hoyo_header">
        <?php include 'hoyo_nav.php';?>
        <script>
            $(function(){
                $('#nav_mainList li:nth-child(3)').addClass('nav_active');
                $('#nav_hamberUl li:nth-child(2)').addClass('nav_active');
            });
        </script>
    </header>
    <!-- /header -->
    
    
    <!-- =========================================================================== -->
    
    <div id="hoyo_content">
        <!-- 麵包屑 -->
        <section class="breadcrumb">
            <div class="container">
                <a href="index.php">首頁</a> &gt; <a class="bread_active" href="write.php">遊記分享</a>
            </div>
        </section>
        
        <!-- =========================================================================== -->
        
        <div class="container ct_pad">
            <h2 class="w_title ch">遊記分享</h2>
            <div class="w_addNoteBtn">
                <a id="WantTOWrite">我要寫遊記</a>
                <i class="icon-plus"></i>
            </div>
            <!-- 搜尋BAR開始 -->
            <div class="pconditionBar ch">
                <div class="psequence">
                <!--<div class="pseItem" id="pseItem">
                        <div>
                            <a href="#" class="pseIChecked">依熱門排序</a>
                        </div>  
                        <div>
                            <a href="#" >依日期排序</a>
                        </div>
                    </div> -->               
                </div>
                <div class="pdropdown ch">
                
                    <div class="pextension filterFirst">
                        <select name="pexDro" id="pexDro" class="pexDro drowStyle ch" style="background-image: url(icon/select_branch.png)">
                            <option value="all">全部支線</option>
                            <option value="0">內灣線</option>
                            <option value="1">平溪線</option>
                            <option value="2">集集線</option>
                            <option value="3">阿里山線</option>
                        </select>
                    </div>
                
                    <div class="pdays filterNth ch">
                        <select name="pdaysDro" id="pdaysDro" class="pdaysDro drowStyle ch" style="background-image: url(icon/select_day.png)">
                            <option value="all">不限天數</option>
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
                
                    <div class="psearch filterLast ch">
                        <input id="searchTitle" type="search" value="" placeholder="搜尋標題 ..." class="searchStyle ch" name="keyword">
                        <button class="searchBtn"></button>
                        <script>
                            $('.searchBtn').click(function(event){
                                event.preventDefault();
                            });
                        </script>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            <!-- 搜尋BAR結束 -->
        
        </div>
        
        
        <!-- =========================================================================== -->
        
        <section class="w_space">
            <div class="container">


                <div class="w_grid">
                    <!-- <div id="showMsg"></div> -->
                    <div class="topTitle">
                        <h3 class="ch">
                            <i class="icon-crown"></i>
                            <span>人氣排行榜</span>
                        </h3>
                    </div>
                        <div id="showTxt"></div>
                    <!-- ============ 排名前三的遊記 ===============-->
                    <div class="w_tops">

                        <!--<div class="top_box">
                            <div class="w_top" onclick="location.href='Wdetail.php'">
                                <div class="wrap_img">
                                    <img src="images/write/w_top1.jpg">
                                </div>
                                <div class="line_tab neiWan_tab ch">
                                    內灣線
                                </div>
                                <div class="top_crown">
                                    <img src="images/write/crown1.png">
                                </div>
                                <div class="top_score">
                                    <span class="top_s">5.0</span>
                                </div>
                                <div class="top_info">
                                    <div class="note_days">
                                        <p><span class="day">2</span>天</p>
                                    </div>
                                    <div class="top_txt">
                                        <div class="top_title">漫步遊內灣老街</div>
                                        <div class="top_desc">第一次來內灣。還沒來內灣之前，對內灣已有所謂的「刻板印象」。內灣是熱門的景點，在網路上已瀏覽過不少內灣照片。</div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div class="infoBox">
                                <div class="w_mem">
                                    <div class="memPic">
                                        <img src="images/write/member.png">
                                    </div>
                                    <div class="w_memId">Yuki</div>
                                    <div class="w_memDate">2016-05-21</div>
                                </div>
                                <div class="w_memFavi" value="收藏">
                                    <i class="icon-heart-empty"></i>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        
                        
                        <div class="top_box">
                            <div class="w_top" onclick="location.href='Wdetail.php'">
                                <div class="wrap_img">
                                    <img src="images/write/note_2.jpeg">
                                </div>
                                <div class="line_tab gigi_tab ch">
                                    集集線
                                </div>
                                <div class="top_crown">
                                    <img src="images/write/crown2.png">
                                </div>
                                <div class="top_score">
                                    <span class="top_s">5.0</span>
                                </div>
                                <div class="top_info">
                                    <div class="note_days">
                                        <p><span class="day">1</span>天</p>
                                    </div>
                                    <div class="top_txt">
                                        <div class="top_title">全台灣最美的車站</div>
                                        <div class="top_desc">順著集集小火車的軌道前進，來到擁有七十幾年歷史的－集集火車站，跟著我來品嚐集集車站的復古味吧！</div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div class="infoBox">
                                <div class="w_mem">
                                    <div class="memPic">
                                        <img src="images/write/member.png">
                                    </div>
                                    <div class="w_memId">肥宅5566</div>
                                    <div class="w_memDate">2016-07-10</div>
                                </div>
                                <div class="w_memFavi" value="收藏">
                                    <i class="icon-heart-empty"></i>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        
                        <div class="top_box">
                            <div class="w_top" onclick="location.href='Wdetail.php'">
                                <div class="wrap_img">
                                    <img src="images/write/note_3.jpg">
                                </div>
                                <div class="line_tab pingC_tab ch">
                                    平溪線
                                </div>
                                <div class="top_crown">
                                    <img src="images/write/crown3.png">
                                </div>
                                <div class="top_score">
                                    <span class="top_s">4.9</span>
                                </div>
                                <div class="top_info">
                                    <div class="note_days">
                                        <p><span class="day">1</span>天</p>
                                    </div>
                                    <div class="top_txt">
                                        <div class="top_title">一起向天祈願吧</div>
                                        <div class="top_desc">這幾年內去過平溪線這幾站次數多到我無法想像，但一直沒好好寫下過這個新北郊外的小祕境。</div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div class="infoBox">
                                <div class="w_mem">
                                    <div class="memPic">
                                        <img src="images/write/member.png">
                                    </div>
                                    <div class="w_memId">bean413</div>
                                    <div class="w_memDate">2016-09-08</div>
                                </div>
                                <div class="w_memFavi" value="收藏">
                                    <i class="icon-heart-empty"></i>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div> -->
        
                    </div>
                    <!-- ============ //end of排名前三的遊記 ===============-->
                    
                    <div class="noteTitle">
                        <h3 class="ch">
                            <i class="icon-clock"></i>
                            <span>最新發表</span>
                        </h3>
                    </div>

                    <!-- =================== 一般遊記 ==================== -->
                    <div class="w_notes">
                        <!-- <div class="noteBox">
                            <div class="note" onclick="location.href='Wdetail.php'">
                                <div class="wrap_img">
                                    <img src="images/write/note_4.jpg">
                                </div>
                                <div class="line_tab pingC_tab ch">
                                    平溪線
                                </div>
                                <div class="note_score">
                                    <span class="top_s">4.3</span>
                                    <i class="icon-star"></i>
                                </div>
                                <div class="top_info">
                                    <div class="note_days">
                                        <p><span class="day">1</span>天</p>
                                    </div>
                                    <div class="top_txt">
                                        <div class="top_title">平溪找尋那些年</div>
                                        <div class="top_desc">那些年錯過的大雨，那些年錯過的愛情，我們擦肩而過，懵懵懂懂之間闖進了彼此的生活。</div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div class="infoBox">
                                <div class="w_mem">
                                    <div class="memPic">
                                        <img src="images/write/member.png">
                                    </div>
                                    <div class="w_memId">沈加一</div>
                                    <div class="w_memDate">2016-07-18</div>
                                </div>
                                <div class="w_memFavi" value="收藏">
                                    <i class="icon-heart-empty"></i>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        
                        <div class="noteBox">
                            <div class="note" onclick="location.href='Wdetail.php'">
                                <div class="wrap_img">
                                    <img src="images/write/note_5.jpg">
                                </div>
                                <div class="line_tab ali_tab ch">
                                    阿里山線
                                </div>
                                <div class="note_score">
                                    <span class="top_s">4.3</span>
                                    <i class="icon-star"></i>
                                </div>
                                <div class="top_info">
                                    <div class="note_days">
                                        <p><span class="day">1</span>天</p>
                                    </div>
                                    <div class="top_txt">
                                        <div class="top_title">嘉義美食走透透</div>
                                        <div class="top_desc">阿里山森林遊樂園區的規劃還算簡單明瞭，旅館集中一區，餐飲集中一區</div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                        
                            </div>
                            <div class="infoBox">
                                <div class="w_mem">
                                    <div class="memPic">
                                        <img src="images/write/member.png">
                                    </div>
                                    <div class="w_memId">綠豆與薏仁</div>
                                    <div class="w_memDate">2016-06-21</div>
                                </div>
                                <div class="w_memFavi" value="收藏">
                                    <i class="icon-heart-empty"></i>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        
                        <div class="noteBox">
                            <div class="note" onclick="location.href='Wdetail.php'">
                                <div class="wrap_img">
                                    <img src="images/write/note_6.jpg">
                                </div>
                                <div class="line_tab neiWan_tab ch">
                                    內灣線
                                </div>
                                <div class="note_score">
                                    <span class="top_s">4.1</span>
                                    <i class="icon-star"></i>
                                </div>
                                <div class="top_info">
                                    <div class="note_days">
                                        <p><span class="day">3</span>天</p>
                                    </div>
                                    <div class="top_txt">
                                        <div class="top_title">你我的夢幻國度</div>
                                        <div class="top_desc">一直想去薰衣草森林，這次趁著休假終於到了！</div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                        
                            </div>
                            <div class="infoBox">
                                <div class="w_mem">
                                    <div class="memPic">
                                        <img src="images/write/member.png">
                                    </div>
                                    <div class="w_memId">angelababy</div>
                                    <div class="w_memDate">2016-09-08</div>
                                </div>
                                <div class="w_memFavi" value="收藏">
                                    <i class="icon-heart-empty"></i>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        
                        <div class="noteBox">
                            <div class="note" onclick="location.href='Wdetail.php'">
                                <div class="wrap_img">
                                    <img src="images/write/note_7.jpg">
                                </div>
                                <div class="line_tab gigi_tab ch">
                                    集集線
                                </div>
                                <div class="note_score">
                                    <span class="top_s">4.0</span>
                                    <i class="icon-star"></i>
                                </div>
                                <div class="top_info">
                                    <div class="note_days">
                                        <p><span class="day">2</span>天</p>
                                    </div>
                                    <div class="top_txt">
                                        <div class="top_title">集集小火車初體驗</div>
                                        <div class="top_desc">連續假期出遊最怕塞車，如何避開人潮，真的讓人費思量，這次要帶小豆子去『集集』搭「小火車」到『車埕』，選擇這段是要試看看小豆子搭火車的反應</div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                        
                            </div>
                            <div class="infoBox">
                                <div class="w_mem">
                                    <div class="memPic">
                                        <img src="images/write/member.png">
                                    </div>
                                    <div class="w_memId">windboy</div>
                                    <div class="w_memDate">2016-10-10</div>
                                </div>
                                <div class="w_memFavi" value="收藏">
                                    <i class="icon-heart-empty"></i>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        
                        
                        <div class="noteBox">
                            <div class="note" onclick="location.href='Wdetail.php'">
                                <div class="wrap_img">
                                    <img src="images/write/note_8.jpg">
                                </div>
                                <div class="line_tab gigi_tab ch">
                                    集集線
                                </div>
                                <div class="note_score">
                                    <span class="top_s">3.6</span>
                                    <i class="icon-star"></i>
                                </div>
                                <div class="top_info">
                                    <div class="note_days">
                                        <p><span class="day">2</span>天</p>
                                    </div>
                                    <div class="top_txt">
                                        <div class="top_title">集集小火車初體驗</div>
                                        <div class="top_desc">連續假期出遊最怕塞車，如何避開人潮，真的讓人費思量，這次要帶小豆子去『集集』搭「小火車」到『車埕』，選擇這段是要試看看小豆子搭火車的反應</div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                        
                            </div>
                            <div class="infoBox">
                                <div class="w_mem">
                                    <div class="memPic">
                                        <img src="images/write/member.png">
                                    </div>
                                    <div class="w_memId">windboy</div>
                                    <div class="w_memDate">2016-03-29</div>
                                </div>
                                <div class="w_memFavi" value="收藏">
                                    <i class="icon-heart-empty"></i>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        
                        <div class="noteBox">
                            <div class="note" onclick="location.href='Wdetail.php'">
                                <div class="wrap_img">
                                    <img src="images/write/note_9.jpg">
                                </div>
                                <div class="line_tab pingC_tab ch">
                                    平溪線
                                </div>
                                <div class="note_score">
                                    <span class="top_s">3.7</span>
                                    <i class="icon-star"></i>
                                </div>
                                <div class="top_info">
                                    <div class="note_days">
                                        <p><span class="day">1</span>天</p>
                                    </div>
                                    <div class="top_txt">
                                        <div class="top_title">平溪找尋那些年</div>
                                        <div class="top_desc">那些年錯過的大雨，那些年錯過的愛情，我們擦肩而過，懵懵懂懂之間闖進了彼此的生活。</div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                            <div class="infoBox">
                                <div class="w_mem">
                                    <div class="memPic">
                                        <img src="images/write/member.png">
                                    </div>
                                    <div class="w_memId">沈加一</div>
                                    <div class="w_memDate">2016-07-18</div>
                                </div>
                                <div class="w_memFavi" value="收藏">
                                    <i class="icon-heart-empty"></i>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        
                        <div class="noteBox">
                            <div class="note" onclick="location.href='Wdetail.php'">
                                <div class="wrap_img">
                                    <img src="images/write/note_5.jpg">
                                </div>
                                <div class="line_tab ali_tab ch">
                                    阿里山線
                                </div>
                                <div class="note_score">
                                    <span class="top_s">3.2</span>
                                    <i class="icon-star"></i>
                                </div>
                                <div class="top_info">
                                    <div class="note_days">
                                        <p><span class="day">2</span>天</p>
                                    </div>
                                    <div class="top_txt">
                                        <div class="top_title">嘉義美食走透透</div>
                                        <div class="top_desc">阿里山森林遊樂園區的規劃還算簡單明瞭，旅館集中一區，餐飲集中一區。</div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                        
                            </div>
                            <div class="infoBox">
                                <div class="w_mem">
                                    <div class="memPic">
                                        <img src="images/write/member.png">
                                    </div>
                                    <div class="w_memId">綠豆與薏仁</div>
                                    <div class="w_memDate">2016-10-01</div>
                                </div>
                                <div class="w_memFavi" value="收藏">
                                    <i class="icon-heart-empty"></i>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        
                        <div class="noteBox">
                            <div class="note" onclick="location.href='Wdetail.php'">
                                <div class="wrap_img">
                                    <img src="images/write/note_6.jpg">
                                </div>
                                <div class="line_tab neiWan_tab ch">
                                    內灣線
                                </div>
                                <div class="note_score">
                                    <span class="top_s">3.0</span>
                                    <i class="icon-star"></i>
                                </div>
                                <div class="top_info">
                                    <div class="note_days">
                                        <p><span class="day">1</span>天</p>
                                    </div>
                                    <div class="top_txt">
                                        <div class="top_title">你我的夢幻國度</div>
                                        <div class="top_desc">一直想去薰衣草森林，這次趁著休假終於到了！</div>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                        
                            </div>
                            <div class="infoBox">
                                <div class="w_mem">
                                    <div class="memPic">
                                        <img src="images/write/member.png">
                                    </div>
                                    <div class="w_memId">angelababy</div>
                                    <div class="w_memDate">2016-04-23</div>
                                </div>
                                <div class="w_memFavi" value="收藏">
                                    <i class="icon-heart-empty"></i>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div> -->

                        
                    </div>
                </div>
            </div>
        </section>
        
        
        <!-- ============ 頁碼 ============================================= -->
        
        <section class="w_pageList">
            <div class="container">
                <ul class="w_pages">
                    <!-- <li><a class="chPages" href="#">上一頁</a></li> -->
<!--                     <li><a class="page-active page">1</a></li>
                    <li><a class="pagebtn">2</a></li>
                    <li><a class="pagebtn">3</a></li>
                    <li><a class="pagebtn">4</a></li>
                    <li><a class="pagebtn">5</a></li>
                    <li><a class="chPages pagebtn">下一頁</a></li> -->
                </ul>
                <div class="clearfix"></div>
            </div>
        </section>
    </div>
    
    
    <!-- =========================================================================== -->
    
        <footer id="hoyo_footer">HO YO 好遊 | 鐵路支線任你遊</footer>
</div>




    <?php include 'php/writeimport/import_memNote.php';?>
    <?php include 'php/writeimport/import_noteTr.php';?>
    <?php include 'php/writeimport/import_LMcard.php';?>
    <?php include 'php/writeimport/import_LMTR.php';?> 
    <?php include 'php/writeimport/import_NC.php';?>  
    <script src="js/write/writedata.js"></script>
    <script src="js/write/write.js"></script>

</body>
</html>