var storage = sessionStorage;

$(window).ready(function(){

	memCount = 2; //判斷登入或是註冊用

	//抓nav是按登入還是註冊鈕進此頁
	if(storage['hoyo_Iwantlogin']){
		storage.removeItem('hoyo_Iwantlogin');

		memCount++;
		$('#mg_signUp_show').slideDown();
		$('#btn_change').text('按此登入會員');
		$('#mg_title').text('註冊帳號');
		$('#btn_login_signUp').text('送出註冊');

		console.log('login');
	}

	//抓有沒有從首頁進來的測試帳號資料
	if(storage['hoyo_testId']!=null){
		$('#MEM_email').val(storage['hoyo_testId']);
		$('#MEM_psw').val(storage['hoyo_testPsw']);
		storage.removeItem('hoyo_testId');
		storage.removeItem('hoyo_testPsw');
	}//放完之後就刪除測試帳號資料
	
	// 右上叉叉按下回上一頁面
	$('#mg_cancelBtn').click(function(){
		window.history.back();
	});

///////////////////////////////////////////////////////

	$('#btn_change').click(function(){ // 按下轉換登入或註冊
		$('#mg_container input').val(''); //清空input裡的資料
		memCount++;
		if(memCount%2==0){	// 會員登入狀態
			$('#mg_signUp_show').slideUp();
			$('#btn_change').text('按此註冊帳號');
			$('#mg_title').text('會員登入')
			$('#btn_login_signUp').text('確認登入');
		}else{				// 註冊帳號狀態
			$('#mg_signUp_show').slideDown();
			$('#btn_change').text('按此登入會員');
			$('#mg_title').text('註冊帳號');
			$('#btn_login_signUp').text('送出註冊');
		}
	});

function checkcheck(event){
	if(memCount%2==0){ // 會員登入	
		event.preventDefault();
		var email = $('#MEM_email').val();
		var psw = $('#MEM_psw').val();

		if(email && psw){
			var memData = { 'MEM_email' : email ,
							'MEM_psw' : psw ,
							'MEM_name' : ''
							};

			$.post('MDinsert.php', memData, function(data){
				if(data=='帳密有誤'){
					alert('帳密有誤,請重新輸入');
				}else if(data=='close'){
					alert('此會員帳號已被封存,請重新申請會員');
				}else{
					// console.log(data);
					var mem_data = JSON.parse(data); //將後端資料轉為物件
					// console.log(mem_data);
					// console.log(mem_data.MEM_email);
					// console.log(mem_data.MEM_name);
					// console.log(mem_data.MEM_img);
					// console.log(mem_data.goto);

					storage.setItem('MEM_email',mem_data.MEM_email);
					storage.setItem('MEM_name',mem_data.MEM_name);
					storage.setItem('MEM_no',mem_data.MEM_no);
					// storage.setItem('MEM_img',mem_data.MEM_img);
					
					if(storage['G1_whereAmIFrom']){
						var goBack = storage.getItem('G1_whereAmIFrom');
						storage.removeItem('G1_whereAmIFrom');
						window.location.href = goBack;
					}else{
						window.location.href = mem_data.goto;
					}
				}
			});
		}else{
			alert('請填寫帳號及密碼 !');
			return;
		} // 會員登入 over

	}else{ // 註冊帳號
		event.preventDefault();
		var email = $('#MEM_email').val();
		var psw = $('#MEM_psw').val();
		var pswConfirm = $('#memPswConfirm').val();
		var name =$('#MEM_name').val();

		if(!email || !psw || !pswConfirm || !name){
			alert('有資料未填寫噢 !');
			return;

		}else if( email.search(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/) == -1){
			alert('請填寫正確的email格式 !');
			return;

		}else if((psw.length < 4) || (psw.length > 8)){
			alert('請填寫 4 ~ 8 個密碼字數 !');
			return;

		}else if(psw!=pswConfirm){
			alert('密碼與確認密碼不相同噢 !');
			return;

		}else if(name.length>8){
			alert('暱稱請勿超過 8 個字 !');
			return;

		}else{
			var memData = { 'MEM_email' : email ,
							'MEM_psw' : psw ,
							'MEM_name' : name
							};
			$.post('MDinsert.php', memData, function(data){
				if(data=='帳號重複'){
					alert('帳號重複,請輸入其他帳號');
				}else{

					var mem_data = JSON.parse(data);
					storage.setItem('MEM_email',email);
					storage.setItem('MEM_name',name);
					storage.setItem('MEM_no',mem_data.MEM_no);

					if(storage['G1_whereAmIFrom']){
						var goBack = storage.getItem('G1_whereAmIFrom');
						storage.removeItem('G1_whereAmIFrom');
						window.location.href = goBack;
					}else{
						window.location.href = mem_data.goto;
					}
				}
			});				
		}
	} // 註冊帳號 over

} // checkcheck()

$('#btn_login_signUp').click(checkcheck);

}); //ready function()