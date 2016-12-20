<?php 
ob_start();
session_start();

//==============驗證是否登入========================
$count = count($_SESSION["MG_email"]);
if($count==0){
    header("location:backendLogin.php");
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>好遊 HO YO | 後端管理平台</title>
    <link rel="icon" type="image/gif" href="favicon.ico">
    <link rel="stylesheet" type="text/css" href="css/fontello.css">
    <link rel="stylesheet" type="text/css" href="css/CSS_reset.css">
    <link rel="stylesheet" href="css/backend/backendIndex.css">
    <link rel="stylesheet" type="text/css" href="css/backend/backendNews/backendNews.css">
    <script src="js/jquery-3.1.0.min.js"></script>
    <script src="js/backend/backendNews/backendNews.js"></script>
</head>
<body>
<div id="hoyo_wrapper">
        <!-- 網頁內容開始 -->
        <?php
            include 'backendIndex_start.php';
        ?>
        <script>
            $('.biContentBody li a[href="backendNews.php"]').addClass('here');
        </script> 
    
        
            <!-- 切換頁面擺放處 -->
            <h2 class="PH2">消息管理</h2>
                <div class='btSearch'>
                        <div class="btCup">  
                            <div class='btPopups'>  
                                <div class="LM_cancel"><i class="icon-cancel cancelbtn"></i></div> 
                                <form action="createNews.php" method="post" enctype="multipart/form-data">
                                    <table>
    
                                        <tr>
                                            <td colspan="2">
                                                <div class="bnTitle">
                                                    <input type="text" placeholder="消息標題" name="NEWS_title" id="NEWS_title">
                                                </div>
                                            </td>
                                        </tr>
    
                                        <tr>
                                            <td>                                        
                                                <label class="bt_title">內文敘述</label>
                                            </td>
                                            <td class="td_left">
                                                <textarea name="NEWS_content" id="NEWS_content" class="textarea"></textarea>
                                            </td>
                                        </tr>
    
                                        <tr>
                                            <td>
                                                <label class="bt_title">發佈日期</label>
                                            </td>
                                            <td class="td_left">
                                                <input type="date" name="NEWS_time" id="NEWS_time" class="NEWS_time">
                                            </td>
                                        </tr>
    
                                        <tr>
                                            <td>
                                                <label class="bt_title" for="">圖片上傳</label>
                                            </td>
                                            <td class="td_left">
                                                <input type="file" name="NEWS_img" id="NEWS_img">
                                                <div class="outimg">
                                                    <img id="imageshow">
                                                </div>
                                            </td>
                                        </tr>
    
                                        <tr>
                                            <td colspan="2">
                                            <button type="submit" class="btn-gray fontFamily btn-margin" name="submit" id="insertNew">確認上傳</button>
                                            </td>
                                        </tr>
    
                                    </table>
                                 </form>
                            </div>
                        </div>
                    <div class='btn-gray fontFamily btAdd'>新增消息 &nbsp; +</div>
    
    
    <!-- update -->
    
    
                        <div class="btCup2">  
                            <div class='btPopups2'>  
                                <div class="LM_cancel2"><i class="icon-cancel cancelbtn"></i></div> 
                                <form action="updateNews.php" method="post" enctype="multipart/form-data">
                                <input type="hidden" name="NEWS_no" id="hiddenNO" value="">
                                <input type="hidden" name="NEWS_img_old" id="NEWS_img_old" value="">
                                    <table>
    
                                        <tr>
                                            <td colspan="2">
                                                <div class="bnTitle">
                                                    <input type="text" placeholder="消息標題" name="NEWS_title" id="NEWS_title2">
                                                </div>
                                            </td>
                                        </tr>
    
                                        <tr>
                                            <td>                                        
                                                <label class="bt_title">內文敘述</label>
                                            </td>
                                            <td class="td_left">
                                                <textarea name="NEWS_content" id="NEWS_content2" class="textarea"></textarea>
                                            </td>
                                        </tr>
    
                                        <tr>
                                            <td>
                                                <label class="bt_title">發佈日期</label>
                                            </td>
                                            <td class="td_left">
                                                <input type="date" name="NEWS_time" id="NEWS_time2" class="NEWS_time">
                                            </td>
                                        </tr>
    
                                        <tr id="tableImgTr">
                                            <td>
                                                <label class="bt_title">原始圖片</label>
                                            </td>
                                            <td class="td_left">
                                                <div class="out_newsimg01">
                                                    <img id="newsimg01" src="">
                                                </div>
                                                <label class="bt_title">更換圖片</label>
                                                <input type="file" name="NEWS_img" id="NEWS_img2">
                                                <div class="outimg2">
                                                    <img id="imgshow2">
                                                </div>
                                            </td>
                                        </tr>
    
                                        <tr>
                                            <td colspan="2">
                                            <button type="submit" class="btn-gray fontFamily btn-margin" name="submit" id="updateNew">確認修改</button>
                                            </td>
                                        </tr>
    
                                    </table>
                                 </form>
                            </div>
                        </div>
    
                </div>
    
                <div>
                    <form>
                        <table class='bnLists'>
                            <tr>
                                <th class="th_No" id="th_memNo">消息編號</th>
                                <th>圖片</th>
                                <th>標題</th>
                                <th>內文</th>
                                <th class="th_Time">建立日期</th>
                                <th class="th_Todo">行為</th>
                            </tr>
    
    <?php
    try{
      require_once("connectToHoyo.php");
      $sql = "select * from news order by NEWS_time DESC";
      $news = $pdo->query( $sql );
      $start_page=1;
      $maxPages=5;
      $totalItem=$news->rowCount();
      if(isset($_GET["page"])){
            $start_page=$_GET["page"];
      }
      $num_page=($start_page-1)*$maxPages;
      $limitsql=$sql." limit ".$num_page." , ".$maxPages;
      $limitNews=$pdo->query($limitsql);
      $totalPage=ceil($totalItem/$maxPages);
      while ($newsRow = $limitNews->fetch( PDO::FETCH_ASSOC) ) {
    ?>
        <tr>
            <td><span class="td_memNo"><?php echo $newsRow["NEWS_no"]?></span></td>
            <td  class="btheadshot">
                <div style="background-image: url(<?php echo $newsRow["NEWS_img"]?>)"></div>
            </td>
            <td>
                <?php echo $newsRow["NEWS_title"]?>
            </td>
            <td>
                <?php echo $newsRow["NEWS_content"]?>
            </td>
            <td>
                <?php echo $newsRow["NEWS_time"]?>
            </td>
            <td>
                <input type="button" value="修改" class="btEdit btn-gray fontFamily btn-margin">
                <input type="button" value="刪除" class="btdel btn-gray fontFamily btn-margin">
            </td>
        </tr>    
    <?php
      }
    }catch(PDOException $ex){
      echo "連線失敗,原因:" , $ex->getMessage() ,"<br>";
      echo "行號 : " , $ex->getLine() ,"<br>";
    }
    ?>
                
                        </table>
                    </form>
                </div>
    
    
                <div class="pages fontFamily">
                    <span>
                        <a href="backendNews.php?page=1" class='btn-gray'>第一頁</a>
                    </span>
                    <?php 
                        for($i=0;$i<$totalPage;$i++){
                            echo " <span><a href='backendNews.php?page=".($i+1)."'>".($i+1)."</a></span>";
                        }
                    ?>  
                    <span>
                        <a href="backendNews.php?page=<?php echo $totalPage; ?>" class='btn-gray'>最尾頁</a>
                    </span>
                </div>
    
        <?php
            include 'backendIndex_end.php';
        ?>
</div>
</body>
</html>