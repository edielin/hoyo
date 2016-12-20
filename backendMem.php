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
//=====================================
?>
<?php
//頁數
$queryRec = "select * from mem order by MEM_no asc";
$Rec = $pdo->query($queryRec);
//總比數
$allPages=$Rec->rowCount();
//分頁開始
//預設每頁顯示幾筆
$pageRow_records = 10;
//預設頁數
$num_pages = 1;
//如果換頁時,重新記錄頁數
if(isset($_GET["page"])){
    $num_pages = $_GET["page"];
} 
//按下第一頁時重第0筆開始撈所以-1  (目前的頁數)*顯示多少筆
$startRow_records = ($num_pages-1)*$pageRow_records;
//限制顯示的比數
$queryLimit = $queryRec." LIMIT ".$startRow_records.",".$pageRow_records;

$result = $pdo->query($queryLimit);
$totalRecords = $Rec->fetch(PDO::FETCH_ASSOC);
//計算所有比數除每頁顯示比數之後無條件進位
$totalPages = ceil($allPages/$pageRow_records);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>好遊 HO YO | 後端管理平台</title>
    <link rel="icon" type="image/gif" href="favicon.ico">
    <link rel="stylesheet" type="text/css" href="css/backend/CSS_reset.css">
    <link rel="stylesheet" href="css/backend/backendIndex.css">
    <link rel="stylesheet" href="css/backend/backendMem/backendMem.css">
    <script src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/backend/backendMem/backendMemClose.js"></script>
</head>
<body>
<div id="hoyo_wrapper">
        <!-- 網頁內容開始 -->
    
        <?php
            include 'backendIndex_start.php';
        ?>
        <script>
            $('.biContentBody li a[href="backendMem.php"]').addClass('here');
        </script>
    
            <!-- 切換頁面擺放處 -->
            <h2 class="PH2">會員管理</h2>
<!--                 <div class="bmSearch">
                    <form action='memSearch.php'>
                        <input type='text' class='bmtext' name="email" placeholder="email..." id="bmValue">
                        <input type='submit' value='搜尋' class='btn-gray bmsubmit' id="bmemsearch">
                    </form>
                </div> -->
                <div class="bmshowList">
                    <table class="bmLists">
                        <tr>
                            <th class="th_No">會員編號</th>
                            <th>頭像</th>
                            <th class="th_who">姓名</th>
                            <th>email</th>
                            <th class="th_Time">電話</th>
                            <th class="th_Todo">會員狀態</th>
                        </tr>
                         <?php
                            while($memRow = $result->fetch(PDO::FETCH_ASSOC)){
                        ?>
                        <form action="memclose.php" id="closeForm<?php echo $memRow['MEM_no'];?>">
                        <input type="hidden" name="MEM_no" value="<?php echo $memRow['MEM_no'];?>">
                        <input type="hidden" name="MEM_name" value="<?php echo $memRow['MEM_name'];?>">
                        <input type="hidden" name="MEM_email" value="<?php echo $memRow['MEM_email'];?>">
                        <input type="hidden" name="MEM_phone" value="<?php
                                $MEM_phone = "";
    
                                if($memRow['MEM_phone']){
                                    $MEM_phone = $memRow['MEM_phone'];
                                }else{
                                    $MEM_phone = "0";
                                };
    
                                echo $MEM_phone;
                            ?>">
                        <tr>
                            <td class="MEM_no">
                                <span class="td_memNo"><?php echo $memRow["MEM_no"] ?><span>
                            </td>
                            <td class="bmheadshot">
                                <div>
                                    <img src="<?php echo $memRow['MEM_img']; ?>">
                                </div>
                            </td>
                            <td><?php echo $memRow["MEM_name"]; ?></td>
                            <td><?php echo $memRow["MEM_email"] ?></td>
                            <td>
                                <?php 
                                    $MEM_phone = "";
    
                                    if($memRow['MEM_phone']){
                                        $MEM_phone = $memRow['MEM_phone'];
                                    }else{
                                        $MEM_phone = "尚未填寫";
                                    };
    
                                    echo $MEM_phone;
                                ?>
                            </td>
                            <td>
                            <?php  //0=解鎖,1=停權
                                if($memRow["MEM_close"]==0){
                                    echo  "<input type='button' value='正常' name='memCloseBtn' class='memCloseBtn btn-gray'>";   
                                }else if($memRow["MEM_close"]==1){
                                    echo  "<input type='button' value='停權中' name='memCloseBtn' class='memCloseBtn btn-gray'>"; 
                                }
                            ?>
                            </td>
                        </tr>
                        
                        </form>
                        <?php } ?>
                    </table>                
                </div>
                <div class='pages fontFamily'>
                    
                    <span>
                        <a href="backendMem.php" class="btn-gray">第一頁</a>
                    </span>
                    <!--當page大於一時顯示上一頁 -->
                    <?php if($num_pages>1){
                        echo " <span>
                        <a href='backendMem.php?page=".($num_pages-1)."' class='btn-gray'>上一頁</a>
                    </span>";
                    } 
                    ?>
                    <!-- 迴圈產生所有頁數 -->
                    <?php for($i=0; $i<$totalPages;$i++){
                    echo "<span>
                        <a href='backendMem.php?page=".($i+1)."'>".($i+1)."</a>
                    </span>";
                    } ?>
                    <?php 
                        if($num_pages<$totalPages){
                            echo "  <span>
                                        <a href='backendMem.php?page=".($num_pages+1)."' class='btn-gray'>下一頁</a>
                                    </span>";        
                        }
                    ?>
                    <span>
                        <a href='backendMem.php?page=<?php echo $totalPages;?>' class="btn-gray">最尾頁</a>
                    </span>
                </div>
            <!-- 頁尾 -->
        <?php
            include 'backendIndex_end.php';
        ?></div>
</body>

<script>

var closeBtn = $('.memCloseBtn');

for(var i =0; i<closeBtn.length; i++){
 
    if(closeBtn[i].value=='停權中'){
        closeBtn[i].style.backgroundColor='#aa3535';
    }
}

</script>
</html>