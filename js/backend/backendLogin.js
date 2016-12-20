function bcheckContent() {
    bBtn=document.getElementById('bButton');
    bBtn.addEventListener('click',bClickBtn);
}
// 帳號密碼驗證
function bClickBtn(e){
    var bEmail=document.getElementById('bEmail').value;
    var bPassword=document.getElementById('bPassword').value;
    var bPA=document.getElementById('bpromptArea');
    // 帳號數量
    if(bEmail.length<6){
        e ?e.preventDefault():e.returnValue=false;
        document.getElementById('bEmail').focus();
        document.getElementById('bEmail').select();
        alert('帳號少於6個字');
        return;
    }
    // 密碼數量
    else if(bPassword.length<6){
        e ?e.preventDefault():e.returnValue=false;
        document.getElementById('bPassword').focus();
        document.getElementById('bPassword').select();
        alert('密碼少於6個字');
        return;
    }
    // 帳號信箱格式驗證是否正確
    else if(bEmail.length>=6){
        if(bEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/)!=-1){
            // e ?e.preventDefault():e.returnValue=false;
            // var session=sessionStorage;   //帳號格式正確開啟session紀錄
            // session.setItem("MG_email",bEmail);
            // session.setItem("MG_psw",bPassword);
            // document.getElementById("logform").submit();
            
        }else{   
            alert("信箱格式錯誤!");
            e ?e.preventDefault():e.returnValue=false;
            document.getElementById('bEmail').focus();  
            return;      
        }
    }
};
window.addEventListener('load',bcheckContent);