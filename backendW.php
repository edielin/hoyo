<?php 
ob_start();
session_start();
require_once("connectToHoyo.php");
//==============驗證是否登入========================
$count = count($_SESSION["MG_email"]);
if($count==0){
    header("location:backendLogin.php");
}
//================有檢舉次數的=====================
// $sql="select * from nc,note where nc.NOTE_no=note.NOTE_no and nc.NC_isReported!=0";
$sql="select *,count(nc.NC_isReported) as report_Total from nc join note on note.NOTE_no=nc.NOTE_no where nc.NC_isReported!=0 group by note.NOTE_no order by report_Total DESC";
$note=$pdo->query($sql);
$allPages=$note->rowCount(); //所有欄位長度
//================================================
$num_pages=1;
$pageRow_records=6;
// if(isset($_GET["page"])){
//     $num_pages=$_GET["page"];
// }
// $startRow_records = ($num_pages-1)*$pageRow_records;
// $queryLimit = $sql." LIMIT ".$startRow_records.",".$pageRow_records;
// $result = $pdo->query($queryLimit);
// $totalRecords = $note->fetch(PDO::FETCH_ASSOC);
// $testjson=json_encode($totalRecords);
$totalPages = ceil($allPages/$pageRow_records);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>好遊 HO YO | 後端管理平台</title>
    <link rel="icon" type="image/gif" href="favicon.ico">
    <link rel="stylesheet" type="text/css" href="css/CSS_reset.css">
    <link rel="stylesheet" href="css/backend/backendIndex.css">
    <link rel="stylesheet" type="text/css" href="css/fontello.css">
    <link rel="stylesheet" href="css/backend/backendW/backendW.css">
    <script type="text/javascript" src="js/jquery-3.1.0.min.js"></script>
    <script type="text/javascript" src="js/backend/backendW/backendW.js"></script>
</head>
<body>
<div id="hoyo_wrapper">
        <!-- 網頁內容開始 -->
        <?php
            include 'backendIndex_start.php';
        ?>
        <script>
            $('.biContentBody li a[href="backendW.php"]').addClass('here');
        </script>
            <!-- 切換頁面擺放處 -->
                <h2 class="PH2">遊記檢舉管理</h2>
                <div class="biOrder">
                    <div class="pextension filterFirst">
                        <select name="pexDro" id="L_branch" class="pexDro drowStyle">    
                            <option value="L1">排序 - 最多檢舉</option>
                            <option value="L2">排序 - 最少檢舉</option>
                            <option value="L3">排序 - 最新日期</option>
                            <option value="L4">排序 - 較舊日期</option>
                        </select>
                    </div> 
                    <div class="clearfix"></div> 
                </div>
                <div class="bi_content">
                <form action="#" class="topForm">
                    <table class="bwLists">
                     <!--    <tr >
                            <th>遊記編號</th>
                            <th>會員編號</th>
                            <th>標題</th>
                            <th>被檢舉次數</th>
                            <th>建立日期</th>
                            <th>行為</th>
                        </tr>  -->

                        <?php if($note->rowCount()!=0){
                        while($noteRow=$note->fetch(PDO::FETCH_ASSOC)){  ?>
                            <tr>
                                <td>
                                    <span class="td_memNo"><?php echo $noteRow["NOTE_no"]; ?></span>
                                </td>
                                <td><?php echo $noteRow["MEM_no"]; ?></td>
                                <td><?php echo $noteRow["NOTE_title"]; ?></td>
                                <td>
                                   <p>
                                       <?php echo $noteRow["report_Total"]; ?>次
                                   </p>
                                </td>
                                <td><?php echo $noteRow["NOTE_createDate"]; ?></td>
                                <td>
                                    <input type="submit" value="<?php 
                                    if($noteRow['NOTE_close']==1){ echo '解封';}
                                    else if($noteRow['NOTE_close']!=1){ echo '封存';}
                                    ?>" class='closeBtn btn-gray btn-margin'>
                                    <a href="Wdetail.php?NOTE_no=<?php echo $noteRow['NOTE_no'];?>" class="lookBtn lbtn-gray btn-margin" target="_blank">查看</a>
                                </td>
                            </tr>
                        <?php } ?>

                        <?php }else{ ?>
                        <tr><td colspan="6" style="font-size:1rem;">暫無檢舉</td></tr>
                        <?php } ?>
                    </table>
                </form>
                </div>
                <div class="pages fontFamily topPages">
                <?php if($totalPages!=0){ ?>
                    <span>
                        <a href="backendW.php?page=1" class='btn-gray'>第一頁</a>
                    </span>
                    <?php 
                        // if($num_pages>1){ 
                        //     echo "<span><a href='backendW.php?page=".($num_pages-1)."'>上一頁</a></span>";
                        // }
                        for($i=0;$i<$totalPages;$i++){
                            echo "<span><a href='backendW.php?page=".($i+1)."' class='btn-gray'>".($i+1)."</a></span>";
                        }
                        // if($num_pages<$totalPages){
                        //     echo "<span><a href='backendW.php?page=".($num_pages+1)."'>下一頁</a></span>";
                        // }
                    ?>
                    <span>
                        <a href="backendW.php?page=<?php echo $totalPages;?>" class='btn-gray'>最尾頁</a>
                    </span>
                    <?php } ?>
                </div>
            </section>
            <div class="clearfix"></div>
            <section class="biRight">
                <h2 class="PH2">遊記管理</h2>
                <div class="biAddBtn">
                    <input type='checkbox' name='bwAdd' id='bwAdd'>
                        <div class="bwcup">
                            <div class="outbwPopups">
                                <div class='bwPopups'>
                                    <div class="bwstep">
                                        <span>選擇行程</span><i class="icon-right-open"></i>
                                        <span>撰寫遊記</span><i class="icon-right-open"></i>
                                        <span>完成</span>
                                    </div>
                                    <h2 class="PH2">選擇行程</h2>
                                    <form action='#' enctype='' method=''>
                                       <table class="bwselect">
                                           <!-- <tr>
                                                    <td>    
                                                        <input type="radio" name="bwitems" id="tour1" class="tour">                         
                                                        <label for="tour1" class="bwlabel">
                                                                <i class="icon-ok"></i>
                                                            日月潭2日遊
                                                        </label>
                                                    </td>   
                                           </tr>
                                           <tr>
                                                    <td>    
                                                        <input type="radio" name="bwitems" id="tour2" class="tour">                         
                                                        <label for="tour2" class="bwlabel">
                                                            <i class="icon-ok"></i>
                                                            日月潭2日遊
                                                        </label>
                                                    </td>  
                                           </tr>
                                           <tr>
                                                    <td>    
                                                        <input type="radio" name="bwitems" id="tour3" class="tour">                         
                                                        <label for="tour3" class="bwlabel">
                                                            <i class="icon-ok"></i>
                                                            日月潭2日遊
                                                        </label>
                                                    </td>    
                                           </tr> -->
                                           <tr>
                                                <td colspan="2"><input type="button" value="確定" class="fontFamily btn-gray"></td>
                                           </tr>
                                       </table>
                                    </form>    
                                </div>
                                <div class="LM_cancel"><i class="icon-cancel cancelbtn"></i></div>
                            </div>
                        </div>
                        <!-- <div class='bwadd btn-gray fontFamily'>新增</div>       -->
                </div>
                <div class="bi_content">
                <?php
                        // 下方換頁
                        // =================所有郵寄========================
                        $nosql="select * from note join tr on note.NOTE_no = tr.NOTE_no WHERE note.NOTE_NO!=1 ORDER BY note.NOTE_no asc";
                        $noreport=$pdo->query($nosql);
                        $bottomAllPage=$noreport->rowCount();
                        // ================================================
                        $defaultPage=1;
                        $maxLists=6;
                        // if(isset($_GET["listPage"])){
                        //     $defaultPage=$_GET["listPage"];
                        // }
                        // $startList=($defaultPage-1)*$maxLists;
                        $Pages = ceil($bottomAllPage/$maxLists);
                ?>
                 <form action="#" class="bottomForm">
                    <table  class="bwLists">
                    <!--     <tr>
                            <th>遊記編號</th>
                            <th>所屬行程編號</th>
                            <th>遊記標題</th>
                            <th>建立日期</th>
                            <th>行為</th>
                        </tr> -->
                        <?php while($bottom=$noreport->fetch(PDO::FETCH_ASSOC)){ ?>
                        <tr>
                            <td><span class="td_memNo"><?php echo $bottom["NOTE_no"]; ?></span></td> 
                            <td><?php echo $bottom["TR_no"] ?></td>   
                            <td><?php echo $bottom["NOTE_title"]; ?></td>
                            <td><?php echo $bottom["NOTE_createDate"]; ?></td>
                            <td>
                                <input type="button" value="<?php 
                                    if($bottom['NOTE_close']==1){ echo '解封';}
                                    else if($bottom['NOTE_close']!=1){ echo '封存';}
                                    ?>" class="closeBtn btn-gray btn-margin">
    <!--                             <input type="button" value="修改" class="changeBtn btn-gray btn-margin"> -->
                                <a href="#" class="lookBtn lbtn-gray btn-margin" target="_blank">查看</a>
                            </td>
                        </tr>
                        <?php } ?>
                </table>    
                 </form>
            </div>
            <div class="pages fontFamily bottomPages">
                    <span>
                        <a href="backendW.php?listPage=1" class='btn-margin'>第一頁</a>
                    </span>
                    <?php 
                        // if($num_pages>1){ 
                        //     echo "<span><a href='backendW.php?listPage=".($num_pages-1)."'>上一頁</a></span>";
                        // }
                        for($x=0;$x<$Pages;$x++){
                            echo "<span><a href='backendW.php?listPage=".($x+1)."' class='btn-margin'>".($x+1)."</a></span>";
                        }
                        // if($num_pages<$totalPages){
                        //     echo "<span><a href='backendW.php?listPage=".($num_pages+1)."'>下一頁</a></span>";
                        // }
                    ?>
                    <span>
                        <a href="backendW.php?listPage=<?php echo $Pages;?>" class='btn-margin'>最尾頁</a>
                    </span>
                </div>
    
            <!-- 頁尾 -->
        <?php
            include 'backendIndex_end.php';
        ?>
</div>

<script>

var closeBtn = $('.closeBtn');

for(var i =0; i<closeBtn.length; i++){
 
    if(closeBtn[i].value=='解封'){
        closeBtn[i].style.backgroundColor='#aa3535';
    }
}

</script>
</body>
</html>