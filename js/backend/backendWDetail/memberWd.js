window.onload=function(){

        $(function (){
            function preview(input) {
                // console.log(input);

                if (input.files && input.files[0]) {
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        // $(input).parent().next().find('.preview').attr('src', e.target.result);
                        $(input).parent().next().children().remove();
                        $(input).parent().next().append("<div class='cancelBtn'><i class='icon-cancel'></i></div>");
                        $(input).parent().next().append("<img class='preview' src='"+ e.target.result +"'>");
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            }
            function remove_input_file(num){
                var id = '#NOTEC_img'+num;
    	    	// console.log(id);
    	    	// console.log( $(id)[0].files[0] );
                $(id).val('');
    	    	// console.log( $(id));
            }

		//  $("body").on("change", ".upl", function (){
		//      preview(this);
		//  })
            $('.upl').on('change', function(){
                preview(this);
            });

            $('body').on('click', '.cancelBtn', function(e){
                // 刪除 input file $('#test').attr('id')
                var n = $(this).parent().parent().find('input').attr('id');
                // console.log( n );
                n = n.replace('NOTEC_img', '');
                remove_input_file(n);

                //清除預覽圖
                $(this).next().remove();

                //清除label樣式
                $(this).parent().parent().find('label').removeClass('success').empty();
                $(this).parent().parent().find('label').append("<i class='icon-picture'></i><span class='file_name'>上傳圖片</span>");

                //清除按鈕
                $(this).remove();


            });


        });

}
function uploadImg(){
    var noteImgs = document.querySelectorAll('.uploadImg');
    Array.prototype.forEach.call(noteImgs, function(noteImg){
        var label	 = noteImg.nextElementSibling,
            labelVal = label.innerHTML;

        noteImg.addEventListener('change', function(e){
            e? e.preventDefault() : event.returnValue==false;
            var fileName = '';
            // if( this.files[0]==undefined ){
            //     label.innerHTML = labelVal;
            //     label.removeAttribute('class','success');
            //     // label.parentNode.parentNode.childNodes[3].childNodes[1].removeAttribute('src','');
            //     $('.preview').removeAttr('src');
            // }else{
            //     fileName = this.files[0].name;
            //     label.querySelector('.file_name').innerHTML = fileName;
            //     label.querySelector('.icon-picture').className = "icon-ok";
            //     label.setAttribute('class','success');
            //     console.log(fileName);
            // }
            if( this.files ){
                fileName = this.files[0].name;
                label.querySelector('.file_name').innerHTML = fileName;
                label.querySelector('.icon-picture').className = "icon-ok";
                label.setAttribute('class','success');
                // console.log(fileName);
            }
        });
    });
}

window.addEventListener('load', uploadImg, false);




// function doFirst(){
//     var mwdSubmit = document.getElementById('mwdSubmit');
//     mwdSubmit.addEventListener('click', checkIfEmpty, false);
// }

// function selectMainImg(){
//     var mainImg = document.getElementById('mainimg');
//     mainImg.addEventListener('change', function(){
//         if( this.files[0]==undefined ){


//             var pTxt = document.getElementsByClassName('mwd_mainImg')[0];
//             var warnTxt = document.createElement('span');
//             warnTxt.setAttribute('class','warn');
//             warnTxt.innerHTML = ' 請選擇封面照';
//             warnTxt.style.color='red';
//             warnTxt.style.fontSize = '14px';
//             pTxt.appendChild(warnTxt);
//             return false;
//         }else{
//             var warn = document.getElementsByClassName('warn')[0];
//             if( warn ){
//                 $('.mwd_mainImg').find('.warn').remove();
//                 console.log('delete warn');
//             }
//             $('.mwd_mainImg').find('.warn').remove();
//             console.log(this.parentNode.parentNode.childNodes[6]);
//             // console.log('hey~~ you select and kill the word');
//             return true;
//         }
//     });
// }

// function checkIfEmpty(){
//     var mainImg = document.getElementById('mainimg');
//     if( mainImg.files.length == 0 ){
//         var pTxt = document.getElementsByClassName('mwd_mainImg')[0];
//         var warnTxt = document.createElement('span');
//         warnTxt.setAttribute('class','warn');
//         warnTxt.innerHTML = ' 請選擇封面照';
//         warnTxt.style.color='red';
//         warnTxt.style.fontSize = '14px';
//         pTxt.appendChild(warnTxt);
//         alert('尚有欄位未填寫');
//         return false;
//     }else{
//         // mainImg.parentNode.parentNode.removeChild(this.parentNode.parentNode.childNodes[6]);
//         // console.log(this.parentNode.parentNode.childNodes[6]);
//         return true;
//     }
// }


// window.addEventListener('load', doFirst, false);
// window.addEventListener('load', selectMainImg, false);
