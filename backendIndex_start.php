

<?php
echo "
    <!-- 網頁內容開始 -->
        <div id='hoyo_content' class='biBody'>               
            <header class='bimenu'>
                <span class='biLogo'>
                    <img src='icon/hoyoblackSlo.png'>
                </span>
                <span class='biLogOut'>
                    <form action='backendcheck.php'>
                        <span class='biName'>{$_SESSION["MG_name"]} 管理者你好</span>
                        <input type='submit' value='登出' class='fontFamily logOutbtn' name='logOutbtn'>
                    </form>
                </span>
            </header>
            <section class='biContentBody'>
                <nav class='biLeft'>
                    <ul>
                        <li>
                            <a href='backendMem.php'>會員管理</a>
                        </li>
                        <li>
                            <a href='backendNews.php'>消息管理</a>
                        </li>
                        <li>
                            <a href='backendReply.php'>回覆檢舉管理</a>
                        </li>
                        <li>
                            <a href='backendTour.php'>行程管理</a>
                        </li>
                        <li>
                            <a href='backendW.php'>遊記管理</a>
                        </li>
                        <li>
                            <a href='backendLM.php'>地標管理</a>
                        </li>
                    </ul>        
                </nav>
                <section class='biRight'>

";
?>
<script>
var storage = sessionStorage;
// storage.setItem('backend_modify_tour_by_TRno','123');
$('.biLeft ul a').click(function(event){
    event.preventDefault();
    var gogo = $(this).attr('href');

    if(storage['backend_modify_tour_by_TRno']){
        storage.removeItem('backend_modify_tour_by_TRno');
        location.href=gogo;
    }else{
        location.href=gogo;
    };
});
</script>