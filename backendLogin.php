<?php 
ob_start();
session_start();
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>好遊 HO YO | 後端管理平台</title>
    <link rel="stylesheet" type="text/css" href="css/CSS_reset.css">
    <link rel="stylesheet" href="css/backend/backendLogin.css">
    <script src="js/backend/backendLogin.js"></script>
</head>
<body class="bBody">
    <section class="bContainer">
        <form action="backendcheck.php" method="post" id="logform">
            <table class="bloginArea">
                <caption class="fW6">好遊 HO YO</caption>
                <tr>
                    <td class="back_Logintitle">
                        後端管理平台
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="email" name="bEmail" id="bEmail" placeholder="Email">
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="password" name="bPassword" id="bPassword" placeholder="Password">
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="submit" value="登 入" class="bButton fontFamily fW6" name="bButton" id="bButton">
                    </td>
                </tr>
            </table>
        </form>
    </section>
</body>
</html>