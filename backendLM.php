<?php 
ob_start();
session_start();
error_reporting(E_ALL || E_NOTICE);
require_once("connectToHoyo.php");
//==============驗證是否登入========================
$count = count($_SESSION["MG_email"]);
if($count==0){
    header("location:backendLogin.php");
}

?>
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
    <title>好遊 HO YO | 後端管理平台</title>
    <link rel="stylesheet" type="text/css" href="css/CSS_reset.css">
    <link rel="stylesheet" type="text/css" href="css/fontello.css">
    <link rel="icon" type="image/gif" href="favicon.ico">
    <link rel='stylesheet' href='css/backend/backendIndex.css'>
    <link rel='stylesheet' href='css/backend/backendLM/backendLM.css'>
    <script src="js/jquery-3.1.0.min.js"></script>
    <script src="js/backend/backendLM/backendLM.js"></script>    
</head>
<body>
<div id="hoyo_wrapper">
        <?php include 'backendIndex_start.php'; ?>
        <script>
            $('.biContentBody li a[href="backendLM.php"]').addClass('here');
        </script>
                <h2 class="PH2">地標管理</h2>
    
                <div class="bL_out">
                    <div class="BL_select">
                        <div class="pextension filterFirst">
                            <select name="pexDro" id="L_branch" class="pexDro drowStyle" style="background-image: url(icon/back_select_branch.png)">
                                <option value="內灣線">內灣線</option>
                                <option value="平溪線">平溪線</option>
                                <option value="集集線">集集線</option>
                                <option value="阿里山線">阿里山線</option>
                            </select>
                        </div>  
                        <div class="pdays filterNth">
                            <select name="pdaysDro" id="pdaysDro" class="pdaysDro drowStyle" style="background-image: url(icon/back_select_station.png)">
                                <option value="新竹">新竹站</option>                  
                                <option value="北新竹">北新竹站</option>
                                <option value="千甲">千甲站</option>
                                <option value="新莊">新莊站</option>                  
                                <option value="竹中">竹中站</option>
                                <option value="上員">上員站</option>                  
                                <option value="榮華">榮華站</option>
                                <option value="竹東">竹東站</option>
                                <option value="橫山">橫山站</option>
                                <option value="九讚頭">九讚頭站</option>
                                <option value="合興">合興站</option>                 
                                <option value="富貴">富貴站</option>
                                <option value="內灣">內灣站</option> 
                            </select>
                        </div>
                    </div>
                    <button type="button" id="LM_insert_btn">新增地標 &nbsp; +</button>
                    <div class="clearFix"></div>
                </div>
    
                 <!-- 地標管理清單開始 -->
                <div class="bi_content">
                    <form action='#'>
                        <table class='blLists'>
                            <tr>
                                <th class="th_Img">圖片</th>
                                <th class="th_who">地標名</th>
                                <th class="th_No">支線</th>
                                <th class="th_No">站點</th>
                                <th class="th_No">類型</th>
                                <th>地址</th>
                                <th class="th_Todo">行為</th>
                            </tr>
                            <?php 
                                $sql="SELECT * from lm where LM_confirm=1 and LM_branch=:LM_branch and LM_no!=1 and LM_station=:LM_station order by LM_no DESC";
                                $LM_sql=$pdo->prepare($sql);
                                $LM_sql->bindValue(":LM_branch","內灣線");
                                $LM_sql->bindValue(":LM_station","新竹");
                                $LM_sql->execute();
                                $allItem=$LM_sql->rowCount();
                                $start_page=1;
                                $max_pages=6;
                                // if(isset($_GET["page"])){
                                //     $start_page=$_GET["page"];  //如果有page就替換
                                // }
                                $startRow_records=($start_page-1)*$max_pages; //從索引0開始
                                $queryLimit = $sql." LIMIT ".$startRow_records.",".$max_pages;
                                  $LMqueryItem=$pdo->prepare($queryLimit);
                                $LMqueryItem->bindValue(":LM_branch","內灣線");
                                $LMqueryItem->bindValue(":LM_station","新竹");
                                $LMqueryItem->execute();
                                $totalPages = ceil($allItem/$max_pages); 
                                while($LM_Row=$LMqueryItem->fetch(PDO::FETCH_ASSOC)){    
                            ?>
                            <tr>
                                <td class="btheadshot">
                                    <div class="BL_imgbox" style="background-image: url(images/LM/<?php echo $LM_Row['LM_img01'] ?>">
                                    </div>
                                </td>
                                <td><?php echo $LM_Row["LM_name"] ?></td>
                                <td><?php echo $LM_Row["LM_branch"] ?></td>
                                <td><?php echo $LM_Row["LM_station"] ?></td>
                                <td><?php 
                                    if($LM_Row["LM_type"] =="f_landscape"){
                                            echo "景點";
                                        }else if($LM_Row["LM_type"] =="f_eat"){
                                            echo "美食";
                                        }else if($LM_Row["LM_type"] =="f_stay"){
                                            echo "住宿";
                                        }else if($LM_Row["LM_type"] =="f_activity"){
                                            echo "活動";
                                        }else{
                                            echo "其餘";
                                        }
                                ?></td>
                                <td><?php echo $LM_Row["LM_address"] ?></td>
                                <td>
                                    <input type='button' id=<?php echo 'lmno'.$LM_Row["LM_no"] ?> value='修改' class='blCheckBtn btn-gray fontFamily btn-margin modify_btn'>
                                </td>
                            </tr>
                            <?php } ?>
                        </table>
                    </form>
                </div>
                       
    
    
                <div class='pages fontFamily topPositionPage'>
                    <span><a href="1" class='btn-gray'>第一頁</a></span>
                    <?php 
                        for($i=0;$i<$totalPages;$i++){
                            echo "<span><a href='".($i+1)."' class='btn-gray'>".($i+1)."</a></span>";
                        }
                    ?>
                    <span><a href="<?php echo $totalPages ?>" class='btn-gray'>最尾頁</a></span>
                </div>
            </section>
            
    
    
            <section class='biRight'>
    
                <h2 class="PH2">會員新增地標管理</h2>
                <div class="bi_content">
                    <form action='#'>
                        <table class='bottomblLists'>
                            <tr>
                                <th class="th_Img">圖片</th>
                                <th class="th_who">地標名</th>
                                <th class="th_No">支線</th>
                                <th class="th_No">站點</th>
                                <th class="th_No">類型</th>
                                <th>地址</th>
                                <th class="th_Todo">行為</th>
                            </tr>
                                <?php 
                                $filterSql="SELECT * from lm where LM_confirm=0 and LM_no!=1 order by LM_no DESC";
                                $filter_LM_sql=$pdo->query($filterSql);
                                $allItem_2=$filter_LM_sql->rowCount();
                                $start_page_2=1;
                                $max_pages_2=6;
                                $startRow_records_2=($start_page_2-1)*$max_pages_2; //從索引0開始
                                $queryLimit_2 = $filterSql." LIMIT ".$startRow_records_2.",".$max_pages_2;
                                  $LMqueryItem_2=$pdo->query($queryLimit_2);
                                $totalPages_2 = ceil($allItem_2/$max_pages_2); 
                                if($allItem_2!=0){
                                while($filter_LM_Row=$LMqueryItem_2->fetch(PDO::FETCH_ASSOC)){     
                                ?>
                            <tr>
                                <td class="btheadshot">
                                    <div class="BL_imgbox" style="background-image: url(images/LM/<?php echo $filter_LM_Row['LM_img01'] ?>">
                                    </div>
                                </td>
                                <td><?php echo $filter_LM_Row["LM_name"]; ?></td>
                                <td><?php echo $filter_LM_Row["LM_branch"]; ?></td>
                                <td><?php echo $filter_LM_Row["LM_station"] ?></td>
                                <td><?php 
                                        if($filter_LM_Row["LM_type"] =="f_landscape"){
                                            echo "景點";
                                        }else if($filter_LM_Row["LM_type"] =="f_eat"){
                                            echo "美食";
                                        }else if($filter_LM_Row["LM_type"] =="f_stay"){
                                            echo "住宿";
                                        }else if($filter_LM_Row["LM_type"] =="f_activity"){
                                            echo "活動";
                                        }else{
                                            echo "其餘";
                                        }
                                ?></td>
                                <td><?php echo $filter_LM_Row["LM_address"]; ?></td>
                                <td>
                                    <input type='button' id=<?php echo 'lmno'.$filter_LM_Row["LM_no"] ?>  value='審核' class='btn-gray fontFamily checkbtn'>
                                </td>
                            </tr>
                            <?php }
                            }else if($allItem_2==0){ ?>
                                <tr><td colspan='7' style='font-size:1rem;'>查無審核資料</td></tr>
                              <?php } ?>
                        </table>
                    </form>
                </div>
                <div class='pages fontFamily verifyPage'>
                    <?php if($totalPages_2!=0){ ?>
                    <span><a href="1" class='btn-gray'>第一頁</a></span>
                    <?php 
                        for($j=0;$j<$totalPages_2;$j++){
                            echo "<span><a href='".($j+1)."' class='btn-gray'>".($j+1)."</a></span>";
                        }
                    ?>
                    <span><a href="<?php echo $totalPages_2 ?>" class='btn-gray'>最尾頁</a></span>
                    <?php } ?>
                </div>
    
     <?php include 'backendIndex_end.php'; ?>
</div>
</body>
</html>