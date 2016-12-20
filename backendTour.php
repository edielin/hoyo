<?php 
ob_start();
session_start();
require_once("connectToHoyo.php");
//==============驗證是否登入========================
$count = count($_SESSION["MG_email"]);
if($count==0){
    header("location:backendLogin.php");
}
//=================================================


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
    <link rel="stylesheet" type="text/css" href="css/backend/backendTour/backendTour.css">
    <script src="js/jquery-3.1.0.min.js"></script>
    <script type="text/javascript" src="js/backend/backendTour/backendTour.js"></script>
</head>
<body>
<div id="hoyo_wrapper">
        <!-- 網頁內容開始 -->
        <?php
            include 'backendIndex_start.php';
        ?>
        <script>
            $('.biContentBody li a[href="backendTour.php"]').addClass('here');
        </script>
            <!-- 切換頁面擺放處 -->
            <h2 class="PH2">行程管理</h2>
                <div class='btSearch'>
                        <!-- <div class="btCup">
                             <div class="outbtPopups">
                                    <div class='btPopups'>
                                        <form action='#' enctype='' method=''>
                                            <div class="title">   
                                                <div class="penImg">
                                                    <i class="icon-pencil"></i> 
                                                </div>
                                                <div class="btTitle">
                                                    <input type='text' name='btTitle' placeholder="行程標題">
                                                </div>
                                            </div>
                                            <div>
                                                <div class="bt-inbl">
                                                    <label class="bt_title">
                                                        類型 :
                                                    </label>  
                                                    <label class="bt_isCheck">
                                                        官方<input type='radio' value='0' name='btType'>
                                                    </label>  
                                                    <label class="bt_isCheck">                                   
                                                        會員<input type='radio' value='1' name='btType'>
                                                    </label>
    
                                                </div>
                                                <div class="pextension filterFirst bt-inbl">
                                                    <img src="https://api.fnkr.net/testimg/30x30/bbb/FFF/?text=img+placeholder">
                                                    <select name="pexDro" id="L_branch" class="pexDro drowStyle">
                                                        <option value="L0">所屬支線</option>   
                                                        <option value="內灣線">內灣線</option>      
                                                        <option value="平溪線">平溪線</option>
                                                        <option value="集集線">集集線</option>
                                                        <option value="阿里山線">阿里山線</option>
                                                    </select>
                                                </div> 
                                                <div class="bt-inbl">
                                                    <label class="bt_title">
                                                        起始日
                                                    </label>
                                                    <label>
                                                        <input type="date" name="btDay" id="btDay" class="btDay">
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="line"></div>
                                            <div>
                                                <label class="bt_title">第一天</label>
                                                <label class="bt_lm">
                                                   地標1
                                                </label>
                                                <label>
                                                    <select class="drowStyle2">
                                                        <option value="">地標1</option>
                                                        <option value="">地標2</option>
                                                        <option value="">地標3</option>
                                                        <option value="">地標4</option>
                                                        <option value="">地標5</option>
                                                        <option value="">地標6</option>
                                                        <option value="">地標7</option>
                                                        <option value="">地標8</option>
                                                        <option value="">地標9</option>
                                                        <option value="">地標10</option>
                                                    </select>
                                                </label>
                                                <label class="bt_lm">
                                                   地標2
                                                </label>
                                                <label>
                                                    <select  class="drowStyle2">
                                                        <option value="">地標1</option>
                                                        <option value="">地標2</option>
                                                        <option value="">地標3</option>
                                                        <option value="">地標4</option>
                                                        <option value="">地標5</option>
                                                        <option value="">地標6</option>
                                                        <option value="">地標7</option>
                                                        <option value="">地標8</option>
                                                        <option value="">地標9</option>
                                                        <option value="">地標10</option>
                                                    </select>
                                                </label>
                                                <label>
                                                    <input type="button" value="新增地標" class='btn-gray btn-margin'>
                                                </label>
                                                <label>
                                                    <input type="button" name="" value="刪除地標" class='btn-gray btn-margin'>
                                                </label>
                                                <label>
                                                    <input type="button" name="" value="刪除" class='btn-gray btn-margin'>
                                                </label>
                                            </div>
                                            <div>
                                                <label class="bt_title">第二天</label>
                                                <label class="bt_lm">
                                                   地標1
                                                </label>
                                                <label>
                                                    <select class="drowStyle2">
                                                        <option value="">地標1</option>
                                                        <option value="">地標2</option>
                                                        <option value="">地標3</option>
                                                        <option value="">地標4</option>
                                                        <option value="">地標5</option>
                                                        <option value="">地標6</option>
                                                        <option value="">地標7</option>
                                                        <option value="">地標8</option>
                                                        <option value="">地標9</option>
                                                        <option value="">地標10</option>
                                                    </select>
                                                </label>
                                                <label class="bt_lm">
                                                   地標2
                                                </label>
                                                <label>
                                                    <select  class="drowStyle2">
                                                        <option value="">地標1</option>
                                                        <option value="">地標2</option>
                                                        <option value="">地標3</option>
                                                        <option value="">地標4</option>
                                                        <option value="">地標5</option>
                                                        <option value="">地標6</option>
                                                        <option value="">地標7</option>
                                                        <option value="">地標8</option>
                                                        <option value="">地標9</option>
                                                        <option value="">地標10</option>
                                                    </select>
                                                </label>
                                                <label>
                                                    <input type="button" value="新增地標" class='btn-gray btn-margin'>
                                                </label>
                                                <label>
                                                    <input type="button" name="" value="刪除地標" class='btn-gray btn-margin'>
                                                </label>
                                                <label>
                                                    <input type="button" name="" value="刪除" class='btn-gray btn-margin'>
                                                </label>
                                            </div>
                                            <div>
                                                <input type="button" name="btAddDay" value="新增天數" class="btn-gray btAddDay">
                                            </div>
                                            <div>
                                                <input type="reset" value="清除" class="btn-gray btn-margin">
                                                <input type='submit' value='送出' class="btn-gray btn-margin">
                                            </div>
                                        </form>    
                                    </div>
                                    <div class="LM_cancel"><i class="icon-cancel cancelbtn"></i></div>
                            </div>
                        </div> --> <!-- btCup end -->
                        <div class='btn-gray fontFamily btAdd'>官方新增行程 &nbsp; +</div>
                </div>
                <div>
                    <form action='#'>
                        <table class='btLists'>
                            <tr>
                                <th class="th_No">行程編號</th>
                                <th class="th_Img">圖片</th>
                                <th>標題</th>
                                <th>天數</th>
                                <th>類型</th>
                                <th class="th_Time">建立日期</th>
                                <th class="th_Todo">行為</th>
                            </tr>
                        <?php   $sql="SELECT * from tr ORDER BY TR_no ASC";
                                $trsql=$pdo->query($sql);
                                $allItem=$trsql->rowCount();
                                $start_page=1;
                                $max_pages=10;
                                if(isset($_GET["page"])){
                                    $start_page=$_GET["page"];  //如果有page就替換
                                }
                                $startRow_records=($start_page-1)*$max_pages; //從索引0開始
                                $queryLimit = $sql." LIMIT ".$startRow_records.",".$max_pages;  //限制比數
                                $result = $pdo->query($queryLimit);
                                while($trRow=$result->fetch(PDO::FETCH_ASSOC)){  //將所有行程撈出來
                                    $totalPages = ceil($allItem/$max_pages);  //計算總頁數
                                    $tr_reference=$trRow["TR_no"];  //37
                        ?>
                            <tr>
                                <td>
                                    <span class="td_memNo"><?php echo $trRow["TR_no"]; ?>
                                    </span>
                                </td>
                                <td class="btheadshot">
                                    <div style="background-image: url(images/LM/<?php 
                                        $LMTR_typeSql="SELECT * FROM lmtr,lm where lmtr.TR_no={$tr_reference} and lm.LM_no=lmtr.LM_no limit 1";
                                        $LMTR_typeItem=$pdo->query($LMTR_typeSql);
                                        while($LMTR_Row=$LMTR_typeItem->fetch(PDO::FETCH_ASSOC)){
                                            echo trim($LMTR_Row['LM_img01']);
                                        }
                                    ?>)">
                                    
                                    </div>
                                </td>
                                <td>
                                    <?php echo $trRow["TR_name"]; ?>
                                </td>
                                <td>
                                    <?php
                                    $nosql="SELECT * from lmtr where TR_no=".$tr_reference." order by LMTR_day DESC LIMIT 1";
                                    $trnosql=$pdo->query($nosql);
                                    while($tr_referenceRow=$trnosql->fetch(PDO::FETCH_ASSOC)){  // 將行程地標撈出來並且只留最大天數
                                    echo $tr_referenceRow["LMTR_day"];
                                    }
                                    ?>
                                </td>
                                <td>
                                    <?php echo $trRow["MEM_no"]==1 ? "官方" : "會員";  ?> 
                                </td>
                                <td>
                                    <?php echo $trRow["TR_createDate"]; ?> 
                                </td>
                                <td>
                                    <input type="button" value="修改" class="btn-gray fontFamily btnModify btn-margin">
                                    <input type="button" value="查看" class="btn-gray fontFamily btlookTour btn-margin">
                                    <input type="button" value="<?php if($trRow['TR_close']==0){
                                        echo '封存';
                                    }else if($trRow['TR_close']==1){
                                        echo '解封';
                                        } ?>" class="btn-gray fontFamily btn-margin btlookBtn">
                                </td>
                            </tr>
                            <tr>
                                <td colspan="7">
                                    <div  class="btshowTour">
                                        <?php 
                                         $lmtrsql="SELECT DISTINCT LMTR_day from lmtr where TR_no={$tr_reference}";
                                         $lmtr_items=$pdo->query($lmtrsql);
                                         while($lmtrRow=$lmtr_items->fetch(PDO::FETCH_ASSOC)){
    
                                        ?>
                                        <div class="bttour">
                                            <div class="bttourDay">
                                                第<?php
                                                 echo $lmtrRow["LMTR_day"]; 
                                                ?>天
                                            </div>
                                           <?php 
                                            $lmtr_Sql="SELECT * from lmtr where TR_no={$tr_reference} and LMTR_day={$lmtrRow['LMTR_day']}";
                                            $lmtrItems=$pdo->query($lmtr_Sql);
                                            while($lmtrlmRow=$lmtrItems->fetch(PDO::FETCH_ASSOC)){
                                                $lm=$lmtrlmRow["LMTR_day"];
                                                $lmsql="SELECT * FROM lm where LM_no={$lmtrlmRow['LM_no']}";
                                                $lmsqlItem=$pdo->query($lmsql);
                                            ?>
                                            <div class="bttourList">
                                                <?php while($lmRow=$lmsqlItem->fetch(PDO::FETCH_ASSOC)){
                                                        echo "<div>{$lmRow['LM_name']}<i class='icon-right'></i></div>";
                                            ?>
                                                <?php } ?>
                                            </div>
                                           <?php } ?>
                                        </div>
                                    <?php } ?>
                                </td> 
                            </tr>
                        <?php } ?>
                        </table>
                    </form>
                </div>
                <div class="pages fontFamily">
                    <span>
                        <a href="backendTour.php?page=1" class='btn-gray'>第一頁</a>
                    </span>
                    <?php for($i=0 ; $i<$totalPages;$i++){ 
                    echo "<span>
                        <a href='backendTour.php?page=".($i+1)."'>".($i+1)."</a>
                    </span>";
                    }?>
                    <span>
                        <a href="backendTour.php?page=<?php echo $totalPages; ?>" class='btn-gray'>最尾頁</a>
                    </span>
                </div>
            <!-- 頁尾 -->
        <?php
            include 'backendIndex_end.php';
        ?>
</div>
<script>

var closeBtn = $('.btlookBtn');

for(var i =0; i<closeBtn.length; i++){
 
    if(closeBtn[i].value=='解封'){
        closeBtn[i].style.backgroundColor='#aa3535';
    }
}

</script>
</body>
</html>