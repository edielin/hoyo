
<?php

// $thedata = '{';


// $thedata.= '"LM_no":'.$_REQUEST['LM_no'].', ';
// $thedata.= '"MEM_no":'.$_REQUEST['MEM_no'].', ';
// $thedata.= '"branch":"'.$_REQUEST['branch'].'", ';

// $thedata.= '"station":"'.$_REQUEST['station'].'", ';
// $thedata.= '"name":"'.$_REQUEST['name'].'" ';

// $thedata.= '"type":"'.$_REQUEST['type'].'", ';
// $thedata.= '"isFixEvent":'.$_REQUEST['isFixEvent'].', ';
// $thedata.= '"subtitle":"'.$_REQUEST['subtitle'].'", ';

// $thedata.= '"phone":"'.$_REQUEST['phone'].'", ';
// $thedata.= '"cellphone":"'.$_REQUEST['cellphone'].'", ';
// $thedata.= '"address":"'.$_REQUEST['address'].'", ';
// $thedata.= '"longitude":'.$_REQUEST['longitude'].', ';
// $thedata.= '"latitude":'.$_REQUEST['latitude'].', ';

// $thedata.= '"opentime":"'.$_REQUEST['opentime'].'", ';
// $thedata.= '"avgcost":'.$_REQUEST['avgcost'].', ';
// $thedata.= '"staycost1":'.$_REQUEST['staycost1'].', ';
// $thedata.= '"staycost2":'.$_REQUEST['staycost2'].', ';
// $thedata.= '"staycost4":'.$_REQUEST['staycost4'].', ';

// $thedata.= '"staycostadd1":'.$_REQUEST['staycostadd1'].', ';
// $thedata.= '"adultcost":'.$_REQUEST['adultcost'].', ';
// $thedata.= '"childcost":'.$_REQUEST['childcost'].', ';
// $thedata.= '"url":"'.$_REQUEST['url'].'" ';

// $thedata.= '}';
// echo $thedata;
$data = "";
$data .= "
	<div id='LMcardShortDescription' class='lc'>
		<div class='lc_contframe'>
			<div id='lc_emptyBtn'><i class='icon-cancel'></i></div>
			<div class='lc_cont'>
				<h2>".$_REQUEST['name']."</h2>
				<div class='lc_contc imgbox' style='background-image:url(images/LM/".$_REQUEST['url'].")'>
					<div class='lc_info'>
						<div class='lc_infobox'>
							<p>".$_REQUEST['subtitle']."</p>
						</div>
						<div class='lc_infobox'>";

							$data .= $_REQUEST['phone'] ? "<p>電 話 : ".$_REQUEST['phone']."</p>" : "";

							// <p>電 話 : ".$_REQUEST['phone']."</p>

							$data .= $_REQUEST['cellphone'] ? "<p>手 機 : ".$_REQUEST['cellphone']."</p>" : "";
							
							$data .= "<p>地 址 : ".$_REQUEST['address']."</p>
						</div>
						<div class='lc_infobox'>";

					if($_REQUEST['type']=='f_landscape'){
						$data .= "<p>開放時間 : ".($_REQUEST['opentime'] ? $_REQUEST['opentime'] : "全年開放")."</p>";
					}elseif($_REQUEST['type']=='f_activity'){
						$data .= "<p>活動時間 : ".($_REQUEST['opentime'] ? $_REQUEST['opentime'] : "未提供活動時間")."</p>";
					}else{
						$data .= "<p>營業時間 : ".($_REQUEST['opentime'] ? $_REQUEST['opentime'] : "未提供營業時間")."</p>";
					}
							
					if($_REQUEST['type']=='f_landscape'){

						$data .= $_REQUEST['adultcost'] ? "<p>大人消費 : ".$_REQUEST['adultcost']."</p>" : "";
						$data .= $_REQUEST['childcost'] ? "<p>小孩消費 : ".$_REQUEST['childcost']."</p>" : "";						

					}elseif($_REQUEST['type']=='f_eat'){
						$data .= "<p>平均消費 : ".$_REQUEST['avgcost']." 元</p>";
					}elseif($_REQUEST['type']=='f_stay'){
						$data .= $_REQUEST['staycost1']==$_REQUEST['staycost2']?"<p>單人房 : 未提供單人房</p>":"<p>單人房 : ".$_REQUEST['staycost1']."元</p>";
						$data .= "<p>雙人房 : ".$_REQUEST['staycost2']." 元</p>";
						$data .= "<p>四人房 : ".$_REQUEST['staycost4']." 元</p>";
						$data .= "<p>加床 : ".$_REQUEST['staycostadd1']." 元</p>";
					}

$data .= "
						</div>
					</div>
					<div id='lc_gmap'></div>
					<div id='lc_googleText'>google map</div>	
				</div>
			</div>			
		</div>

	</div> 
";
echo $data;
?>
<script>
$(function(){

	// var LMcsd = new Vue({
	//     el: '#LMcardShortDescription',
	//     data: {
	//     	LMcard: carddata
	//     }
	// });

	var map, map2;
    map = new GMaps({
            div: '#lc_gmap',
            zoom: 15,
            lat: <?php echo $_REQUEST['latitude'] ?>,
            lng: <?php echo $_REQUEST['longitude'] ?>,
            // width: '250px',
            // height: '250px',
    });
    //移除 markers
    // map.removeMarkers();
    //製作 markers 
    map.addMarker({
        lat: <?php echo $_REQUEST['latitude'] ?>,
        lng: <?php echo $_REQUEST['longitude'] ?>,
        title: <?php echo '"'.$_REQUEST['name'].'"' ?>,
        icon:'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
        click: function(e) {
        }
    });


    //清空燈箱效果
    $('#LMcardShortDescription').on('click',function(){
        $('#LC_container').empty();
    });
    $('#lc_emptyBtn').on('click',function(){
        $('#LC_container').empty();
    });

    // click  .lc_cont 區塊 不要關掉燈箱
    $('.lc_cont').on('click',function(e){
        e.stopPropagation();
    });
});


</script>



