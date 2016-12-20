function dosomething(e){
	var close= document.getElementsByClassName("memCloseBtn");
		for(var i=0;i<close.length;i++){
		close[i].addEventListener('click',closeCheck);
		}

	// var memsearch=document.getElementById("bmemsearch");
	// 	memsearch.addEventListener('click',emailSearch);
}
// 停權及解鎖動作============================
function closeCheck(event) {
	// event.preventDefault();
	var eId=event.target.form.id;
	var MEM_no=document.getElementById(eId).elements[0].value; //編號
	var btnText = document.getElementById(eId).elements[4];//按鈕位置
	var btnValue = btnText.value;
	if(btnValue=='正常'){
		x=confirm("確定將 編號 "+MEM_no+" 號 會員停權嗎?");
	}else{
		x=confirm("確定將 編號 "+MEM_no+" 號 會員解鎖嗎?");
	}
	
	if(x==true && btnText.value=="正常"){
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					if(xhr.responseText=="1"){   //如果已經是停權狀態時
						alert("重複停權");
					}else if(xhr.responseText=="更新成功"){
						btnText.value="停權中"; //將按鈕文字改成解鎖
						btnText.style.backgroundColor='#aa3535';
						alert("已停權");
						return;
					}
				}else{
					console.log("Server error");
				}
			}
		}
		var MEMObj={
			"MEM_no":MEM_no,
			"check":btnText.value
		};
		console.log("停權中");
		var data="MEM_no="+JSON.stringify(MEMObj);
		var url="backendMemClose.php?";
		xhr.open("post",url,true);
		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
		xhr.send(data);
		// document.getElementById(eId).submit();
	}else if(x==true && btnText.value=="停權中"){
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					if(xhr.responseText=="1"){   //如果已經是停權狀態時
						alert("重複解鎖");
					}else if(xhr.responseText=="更新成功"){
						btnText.value="正常"; //將按鈕文字改成解鎖
						btnText.style.backgroundColor='#075f9b';
						alert("已解鎖");
						return;
					}
				}else{
					console.log("Server error");
				}
			}
		}
		var MEMObj={
			"MEM_no":MEM_no,
			"check":btnText.value
		}
		console.log("解鎖中");
		var data="MEM_no="+JSON.stringify(MEMObj);
		var url="backendMemClose.php?";
		xhr.open("post",url,true);
		xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
		xhr.send(data);
	}else if(x==false){
		return;
	}
}
//=====================================================
// function emailSearch(event){
// 	var emailText=document.getElementById("bmValue").value;
// 	if(emailText!=""){
// 		var xhr=new XMLHttpRequest();
// 		xhr.onreadystatechange=function(){
// 			if(xhr.readyState==4){
// 				if(xhr.status==200){
// 					if(xhr.responseText==""){
// 						alert("查無該帳號");
// 					}else if(xhr.resposneText!=""){
// 						var bmtable=document.createElement("bmshowLists");
//						bmtable.removeChild(tbody);

// 					}
// 				}else{

// 				}
// 			}
// 		}
// 	var searchObj={"MEM_email":emailText};
// 	var data=JSON.stringify(searchObj);
// 	var url="memSearch.php?";
// 	xhr.open("post",url,true);
// 	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
// 	xhr.send(data);	
// 	}else if(emailText=="" ||emailText==null){
// 		alert("請輸入信箱");
// 	}
// }



window.addEventListener('load',dosomething);