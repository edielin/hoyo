<?php 
ob_start();
session_start();
require_once('connectToHoyo.php');
//==============驗證是否登入===================
if(count($_SESSION["MG_email"])==0){
    header("location:backendLogin.php");
}
//============================================
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>好遊 HO YO | 後端管理平台</title>
    <link rel="icon" type="image/gif" href="favicon.ico">
    <link rel="stylesheet" type="text/css" href="css/backend/CSS_reset.css">
    <link rel="stylesheet" href="css/backend/backendIndex.css">
    <link rel="stylesheet" href="css/backend/backendReply/backendReply.css">
    <script type="text/javascript" src="js/jquery-3.1.0.min.js"></script>
    <script type="text/javascript" src="js/backend/backendReply/backendReply.js"></script>
</head>
<body>
<div id="hoyo_wrapper">
        <!-- 網頁內容開始 -->
            <?php
                include 'backendIndex_start.php';
            ?>
        <script>
            $('.biContentBody li a[href="backendReply.php"]').addClass('here');
        </script> 
                <!-- 切換頁面擺放處 -->
                    <h2 class="PH2">回覆檢舉管理</h2>
<!--                     <div class="brSearch">
                        <form action='#'>
                            <input type='text' class="brtext">
                            <input type='submit' value='搜尋' class='btn-gray brsubmit'>
                        </form>
                    </div> -->
                    <div>
                        <table class="brLists">
                            <tr>
                                <th class="th_No">回覆編號</th>
                                <th class="th_No">遊記編號</th>
                                <th class="th_who">回覆會員</th>
                                <th>回覆內容</th>
                                <th class="th_badBad">被檢舉次數</th>
                                <th class="th_Time">時間</th>
                                <th class="th_Todo">行為</th>
                            </tr>
                            <?php 
                                $sql="SELECT * FROM re where RE_reportedTimes!=0 ORDER BY RE_reportedTimes DESC";
                                $reItem=$pdo->query($sql);
                                $start_page=1;
                                $max_page=10;
                                $total_Item=$reItem->rowCount();
                                if(isset($_GET["page"])){
                                    $start_page=$_GET["page"];
                                }
                                  $start_record=($start_page-1)*$max_page;
                                $allPage=ceil($total_Item/$max_page);
                                $queryLimit = $sql." LIMIT ".$start_record.",".$max_page;
                                $result = $pdo->query($queryLimit);
                                while($reRow=$result->fetch(PDO::FETCH_ASSOC)){
        
                            ?>
                            <tr>
                                <td>
                                    <span class="td_memNo"><?php echo $reRow["RE_no"]?></span>
                                </td>
                                <td class="RE_NOTE_no"><?php echo $reRow["NOTE_no"] ?></td>
                                <td><?php 
                                $nameSql="SELECT * FROM mem WHERE MEM_no={$reRow['MEM_no']}";
                                $nameItem=$pdo->query($nameSql);
                                $nameRow=$nameItem->fetch(PDO::FETCH_ASSOC);
                                echo $nameRow["MEM_name"];
                                ?></td>
                                <td class="brcontent">
                                    <p>
                                        <?php echo $reRow["RE_content"]; ?>
                                    </p>
                                </td>
                                <td><?php echo $reRow["RE_reportedTimes"] ?></td>
                                <td><?php echo $reRow["RE_time"]; ?></td>
                                <td>
                                    <input type="submit" value="刪除" class="closeBtn btn-gray btn-margin">
                                    <a href="#" target="_blank" class="btn-gray brbtn btn-margin">查看</a>
                                </td>
                            </tr>
                            <?php } ?>
                        </table>
                    </div>
                    <div class="pages fontFamily">
                        <span>
                            <a href="backendReply.php?page=1" class="btn-gray">第一頁</a>
                        </span>
                        <?php for($i=0;$i<$allPage;$i++){
                                echo "<span><a href='backendReply.php?page=".($i+1)."'>".($i+1)."</a></span>";
        
                            } ?>
                        <span>
                            <a href="backendReply.php?page=<? echo $allPage?>" class="btn-gray">最尾頁</a>
                        </span>
                    </div>
                <!-- 頁尾 -->
        
    
            <?php
                include 'backendIndex_end.php';
            ?>
</div>
</body>
</html>