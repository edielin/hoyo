function dosomething(e){
	var close= document.getElementsByClassName("memCloseBtn");
		for(var i=0;i<close.length;i++){
		close[i].addEventListener('click',closeCheck);
		}
	
}
function closeCheck(event) {
	event.preventDefault();
	var eId=event.target.form.id;
	var x=confirm("確定要刪除?");
	if(x==true){
		document.getElementById(eId).submit();
	}else if(x==false){
		return;
	}
}
window.addEventListener('load',dosomething);