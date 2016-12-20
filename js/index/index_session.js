var storage = sessionStorage;


///////////////// 體驗帳號 //////////////////
$('#i_memNo_test').click(function(){
	storage.setItem('hoyo_testId','hoyoTest@gmail.com');
	storage.setItem('hoyo_testPsw','1234');
	location.href='memlogin.php';
});
///////////////// 體驗帳號 over //////////////////




/////////////// 點按新增卡片 看是不是會員 ////////////////
$('#i_addLocation').click(function(){
	if(storage['MEM_email']==null){
		alert('請先登入好遊會員!');
		return;
	}else{
		location.href ='memberLM.php';
	}
});
///////////// 點按新增卡片 看是不是會員 over /////////////





////////////////  地標卡相關  ////////////////////
//////////////// 進頁面 地標卡 ////////////////////
if(!storage['wishList']){ 
	storage.setItem('wishList','');
}else{
		var check = document.querySelectorAll('.i_cards');
		for(var i=0; i<check.length;i++){
			if(storage['wishList'].includes(check[i].id)){ 
				var addToList = document.querySelector('#'+check[i].id+' .i_addToList img');
				addToList.src = 'images/index/addadd_Add.png';//如果清單已有資料的話要打勾勾
			}
		}

		////// 加到願望清單條列 //////
		var listValue = storage.getItem('wishList');
		var listArr = listValue.substr(0,listValue.length-1).split(',')
		for(var i=0; i<listArr.length; i++){
			var locationName = listArr[i];

			var wishRow = document.createElement('div');
			wishRow.className = 'wishListRow';
			wishRow.setAttribute('id',locationName+'1'); //因為ID不能重複所以隨便加個1

			var lineName = document.createElement('div');
			lineName.className = 'what_line';
			lineName.innerText = storage.getItem(listArr[i]);
			wishRow.appendChild(lineName);

			var where = document.createElement('div');
			where.className = 'where_name';
			where.innerText = locationName;
			wishRow.appendChild(where);

			document.getElementById('wishListRow_box').appendChild(wishRow);
		}
		////// 加到願望清單條列 over //////	
	}
//////////////// 進頁面 地標卡over ////////////////////





	///////// wishList數字顯示 //////////

	var listValue = storage.getItem('wishList');
	
	if(listValue.length==0){
		document.getElementById('wishQty2').innerText = 0;
	}else{
		var listQty = listValue.substr(0,listValue.length-1).split(',');
		document.getElementById('wishQty2').innerText = listQty.length;
	} 
	///////// wishList數字顯示 over//////////





	///////// 地標卡按下要執行 //////////

	var cards = document.querySelectorAll('.i_cards');
	for(var i =0; i<cards.length; i++){
		cards[i].addEventListener('click',function(e){
			var clientX = e.clientX;
			var clientY = e.clientY;
			var addCheck = document.querySelector('#' + this.id + ' .i_addToList img');
			var cardsInfo = document.querySelector('#'+ this.id +' input').value;
			addWishList(cardsInfo, this.id, addCheck, clientX, clientY);
			reGetList(); 
		},false);
	}


	function addWishList(cardsInfo,locationName,addCheck,clientX,clientY){
		var clientX = clientX;
		var clientY = clientY;

		if(storage[locationName]){
			addCheck.src='images/index/addadd_noAdd.png';
			storage.removeItem(locationName);
			storage['wishList'] = storage['wishList'].replace(locationName+',','');	

			var removeList = document.getElementById(locationName+'1');
			document.getElementById('wishListRow_box').removeChild(removeList);	

		}else{
			////// 按下卡片出現加號跑去收藏包 //////
			$('body').append('<div class="i_cards_addDot" id="cards_addDot"></div>');
			$('#cards_addDot').css({
				'top':clientY,
				'left':clientX,
				'opacity':'1'
			});
			$('#cards_addDot').animate({
				'top':'90%',
				'left':'30px'
			},700).animate({'opacity':'0'},0);
			////// 按下卡片出現加號跑去收藏包 over //////

			storage[locationName] = cardsInfo.split('|')[0];
			storage['wishList'] += locationName+',';

			addCheck.src='images/index/addadd_Add.png';  // 卡片右上改成打勾圖示

			////// 加到願望清單條列 //////
			var wishRow = document.createElement('div');
			wishRow.className = 'wishListRow';
			wishRow.setAttribute('id',locationName+'1');
			
			var lineName = document.createElement('div');
			lineName.className = 'what_line';
			lineName.innerText = cardsInfo.split('|')[0];
			wishRow.appendChild(lineName);

			var where = document.createElement('div');
			where.className = 'where_name';
			where.innerText = cardsInfo.split('|')[1];
			wishRow.appendChild(where);

			document.getElementById('wishListRow_box').appendChild(wishRow);
			///// 加到願望清單條列 over //////
		}

		///////// wishList數字顯示 //////////
		var listValue = storage.getItem('wishList');
			if(listValue.length==0){
				document.getElementById('wishQty2').innerText = 0;
			}else{
				var listQty = listValue.substr(0,listValue.length-1).split(',');
				document.getElementById('wishQty2').innerText = listQty.length;
		} 
		///////// wishList數字顯示 over //////////

	} // addWishList() end



	function reGetList(){ // click之後重抓清單資料 為了hover改圖示Q_Q
		listValue = storage.getItem('wishList');

		for(var j =0; j<cards.length; j++){
		if(listValue.includes(cards[j].id)==false){
			cards[j].addEventListener('mouseover', function(){
					document.querySelector('#'+this.id+' .i_addToList img').src="images/index/addadd_hover.png";
				},false);

			cards[j].addEventListener('mouseleave', function(){
				document.querySelector('#'+this.id+' .i_addToList img').src="images/index/addadd_noAdd.png";	
			},false);
		}else{
			cards[j].addEventListener('mouseover', function(){
					document.querySelector('#'+this.id+' .i_addToList img').src="images/index/addadd_Add.png";
				},false);

			cards[j].addEventListener('mouseleave', function(){
					document.querySelector('#'+this.id+' .i_addToList img').src="images/index/addadd_Add.png";	
				},false);
			}
		}
	}//reGetList() end



	for(var j =0; j<cards.length; j++){ // hover改變圖示
		if(listValue.includes(cards[j].id)==false){
			cards[j].addEventListener('mouseover', function(){
					document.querySelector('#'+this.id+' .i_addToList img').src="images/index/addadd_hover.png";
				},false);

			cards[j].addEventListener('mouseleave', function(){
				document.querySelector('#'+this.id+' .i_addToList img').src="images/index/addadd_noAdd.png";	
			},false);
		}else{
			cards[j].addEventListener('mouseover', function(){
					document.querySelector('#'+this.id+' .i_addToList img').src="images/index/addadd_Add.png";
				},false);

			cards[j].addEventListener('mouseleave', function(){
				document.querySelector('#'+this.id+' .i_addToList img').src="images/index/addadd_Add.png";	
			},false);
		}
	}// hover改變圖示 end

////////////////  地標卡相關 over////////////////////


////////////////// 遊記按下 ////////////////////
$('.i_yoZ').click(function(){
	var note_no = $(this).find('input').val();

	location.href = 'Wdetail.php?NOTE_no='+note_no;	
});

////////////////// 遊記按下 over ////////////////////