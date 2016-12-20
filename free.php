<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>HO YO 好遊 | 行程規劃</title>
<!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.1/vue.min.js"></script> -->
<script type="text/javascript" src="js/free/vue.min.js"></script>

<!-- <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script> -->
<script src="https://unpkg.com/tween.js@16.3.4"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js" ></script>
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<script src="js/free/gmaps.js"></script>
<script src="http://maps.google.com/maps/api/js?key=AIzaSyBi7e8AiTyqWiFt9vlbGqsAzGyRhVWqCsk&sensor=true"></script>
<!-- menu -->
<link rel="stylesheet" type="text/css" href="css/CSS_reset.css">
<link rel="stylesheet" type="text/css" href="css/hoyo_navFree.css">
<!-- <script src="nav/js/jquery-3.1.0.min.js"></script> -->
<!-- end of menu -->
<link rel="stylesheet" type="text/css" href="css/free/common.css">
<link rel="stylesheet" type="text/css" href="css/font-awesome-4.6.3/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="css/fontello.css">
<link rel="stylesheet" type="text/css" href="css/LMcard.css">
<link rel="stylesheet" type="text/css" href="css/free/free.css">
</head>
<body>

	<div id="LC_container"></div>
	

<div id="hoyo_wrapper">
	<header id="hoyo_header">
		<?php include 'hoyo_navFree.php';?>
		<script>
			$(function(){
				$('#nav_mainList li:nth-child(1)').addClass('nav_active');
				$('#nav_hamberUl li:nth-child(1)').addClass('nav_active');
			});
		</script>
	</header>



	<div class="load_cover"></div>
	<div id="f_breadWrapper">
	<!-- 麵包屑 -->
	        <section class="breadcrumb">
	             <a href="index.php">首頁</a> &gt; <a class="bread_active" href="free.php">行程規劃</a>
	        </section>
	
	         <div class="f_title ch">行程規劃</div>
	</div>
	
	<div class="steps">
		<div class="state_bar">
			<p>您正在<span>新增</span>一筆全新的行程</p>
		</div>
		<p class="two_plus">+1</p>
		<p class="two_minus">-1</p>
		<p class="three_plus">+1</p>
		<p class="three_minus">-1</p>
	</div>

	<div id="hoyo_content">



	<div id="outOfW">

		<div id="wrapper" class="ch">
		
		
		<!-- <h1>01</h1> -->
			<div id="block1" class="blockwrapper">
		    <div class="block">
		
				<div class="hint n1_1" v-if="this.newbie" @click="change_hint('1_1')">
					<div class="hintsmall normal red" v-if="hints_switch1_1">
				    	<span class="fa fa-comment-o fa-fw"></span>
				    	<span class="fa fa-exclamation fa-fw"></span>
					</div>
					<div class="hintbig red" v-if="n1_1" @click="deletehintbig($event,'1_1')">
						<p>可以直接選擇上面 4 個步驟的按鈕前往其他步驟</p>
						<p><span class="hs_btw">註：對提示框點左鍵，可以關閉提示框</span></p>
					</div>
				</div>
<!-- 				<div class="hint n1_2" v-if="this.newbie" @click="change_hint('1_2')">
					<div class="hintsmall reverse" v-if="hints_switch1_2">
				    	<span class="fa fa-comment-o fa-fw"></span>
				    	<span class="fa fa-exclamation fa-fw"></span>
					</div>
					<div class="hintbig" v-if="n1_2" @click="deletehintbig($event,'1_2')">
						<p>系統已為輸入框提供預設值，可依個人喜好修改，此資料會在之後的步驟裡使用，請不要留白</p>
					</div>
				</div>
				<div class="hint n1_3" v-if="this.newbie" @click="change_hint('1_3')">
					<div class="hintsmall normal" v-if="hints_switch1_3">
				    	<span class="fa fa-comment-o fa-fw"></span>
				    	<span class="fa fa-exclamation fa-fw"></span>
					</div>
					<div class="hintbig" v-if="n1_3" @click="deletehintbig($event,'1_3')">
						<p>非初次使用者可以將新手導覽關閉</p>
					</div>
				</div> -->
		
	        	<div class="newbie_box">
		        	<p>新手導覽</p>
		        	<div class="radiobox">
			        	<input type="radio" id="need" :value="true" v-model="newbie">
			        	<label for="need">開啟</label>
			        	<div class="check"><div class="inside"></div></div>		        		
		        	</div>
		        	<div class="radiobox">
			        	<input type="radio" id="neednt" :value="false" v-model="newbie">
			        	<label for="neednt">關閉</label>
			        	<div class="check"><div class="inside"></div></div>
		        	</div>
	        	</div>

		        <div class="f1_title">
		        	<div class="imgbox">
		        		<img src="icon/free/cicLast_img_logo.png">
		        	</div>
		        	<h2>好遊行程規劃系統</h2>
		        </div>
		
		        <div class="f1_cont">
		        	<div class="f1_cont_box">
		        		<p>行程名稱</p>
		        		<input type="text" maxlength="10" v-model="tr_name" placeholder="為你的行程取個名稱吧!" v-on:keyup='validate_str(tr_name)' v-on:change='validate_str(tr_name)'>
		        	</div>
		        	<div class="f1_cont_box sub">
		        		<p>行程副標題</p>
		        		<textarea name="Text1" cols="20" rows="3" maxlength="24" v-model="tr_subtitle" placeholder="可以用一句話描述你的行程" v-on:keyup='validate_str(tr_subtitle)' v-on:change='validate_str(tr_subtitle)'></textarea>
		        	</div>
		        </div>
		
		        <div class="f1_cont">
		        	<div class="f1_cont_box descrip">
		        		<p>行程簡述</p>
		        		<textarea name="Text2" rows="7" maxlength="150" v-model="tr_description" placeholder="可以用一段話描述你的行程" v-on:keyup='validate_str(tr_description)' v-on:change='validate_str(tr_description)'></textarea>
		        	</div>
		        </div>
		        <div class="next_box next01">下一步</div>
		    </div>
		    </div>
		
		
		
		
		
		<!-- <h1>02</h1> -->
		<div id="block2" class="blockwrapper">    
		    <div class="block">
				<div class="hint n2_1" v-if="s1.newbie" @click="s1.change_hint('2_1')">
					<div class="hintsmall reverse red" v-if="s1.hints_switch2_1">
				    	<span class="fa fa-comment-o fa-fw"></span>
				    	<span class="fa fa-exclamation fa-fw"></span>
					</div>
					<div class="hintbig red" v-if="s1.n2_1" @click="s1.deletehintbig($event,'2_1')">
						<p>右邊地標卡的右上角的加號<span class="fa fa-plus fa-fw"></span>，可以將地標卡存放到第 3 步驟<span class="hs_four">排行程</span>的<span class="hs_card">地標卡清單</span>當中</p>
					</div>
				</div>
		
		
		        <div class="miniblock">
		        	<div class="miniblock_c">
		        		<h3>
				        	<div class="checkicon imgbox">
				        		<img src="icon/free/station.png">
				        	</div>選擇車站
		        		</h3>
			        	<ul class="my_tabs branch_tabs">
			        		<li v-for="(branch, $i) in branches" :class="{tabsActive_lg:activeBranches==$i}" @click="branchfilter($i)">{{branch}}</li>
			        	</ul>
		        		<div id="svgwrapper">
		        		</div>
		        	</div>
		        </div>
		        <div class="miniblock">
		        	<div class="miniblock_c">
		        		<h3>
		        			<div class="imgbox checkicon">
		        				<img src="icon/free/railway.png">
		        			</div>{{activeStation}}站
		        		</h3>
			        	<ul class="my_tabs">
			        		<li v-for="(type, $i) in types" :class="{tabsActive_lg:activeTypeIndex==$i}" @click="cardfilter($i)">{{type}}
								<span>{{types_num[$i]}}</span>
			        		</li>
			        	</ul>
		        		<div class="cardwrapper">
		        			<p id="no_data_p" v-if="fcards.length==0">目前查無資料</p>
		        			<div class="lmcard" v-for="card in fcards" @click.stop="lookCardDetail(card)">
		        				<div class="imgbox">
		        					<img v-bind:src="card.url">
		        				</div>
	        					<div class="btn_wrapper">
		        					<div class="btn_selecard" @click.stop="addtomycard(card)">
		        						<span class="fa fa-plus fa-fw"></span>
		        					</div>
	        					</div>
								<div class="line_tab neiWan_tab" v-if="card.branch=='內灣線'">內灣線</div>
								<div class="line_tab pingC_tab" v-if="card.branch=='平溪線'">平溪線</div>
								<div class="line_tab gigi_tab" v-if="card.branch=='集集線'">集集線</div>
								<div class="line_tab ali_tab" v-if="card.branch=='阿里山線'">阿里山線</div>
		        				<h4 class="cardicon">
		        					<div class="imgbox">
		        						<img :src="typeicon_filesourse(card.type)">
		        					</div>
		        					{{card.name}}
		        				</h4>
		        				<p>{{card.subtitle}}</p>
		        			</div>
		        		</div>
		        		<div class="updown">
		        			<div class="btn_up" @click="upcard">
				        		<span class="fa fa-chevron-up fa-fw"></span>
				        	</div>
		        			<div class="btn_down" @click="downcard">
				        		<span class="fa fa-chevron-down fa-fw"></span>
				        	</div>
		        		</div>
		        	</div>	            
		        </div>

		        <div class="next_box next02">下一步</div>
		    </div>
		</div>
		
		
		





		
		<!-- <h1>03</h1> -->
		<div id="block3" class="blockwrapper">    
		    <div class="block">
		    	<transition name="maskAnime">
		    		<div class="gif_mask" v-if="gif_mask"></div>
		    	</transition>
		    	<transition name="gifAnime01">
			    	<div class="hintGIF gif01" v-if="gif01">
			    		<img src="icon/free/tt01.gif">
			    	</div>
		    	</transition>
		    	<transition name="gifAnime02">
			    	<div class="hintGIF gif02" v-if="gif02">
			    		<img src="icon/free/tt02.gif">
			    	</div>
		    	</transition>
		    	<i class="fa fa-question-circle fa-lg gif_i gif01_i" @click.stop="gif_switch('01')"></i>
		    	<p class="explain explain01">操作動畫：地標排入行程/刪除/交換</p>

		    	<i class="fa fa-question-circle fa-lg gif_i gif02_i" @click.stop="gif_switch('02')"></i>
		    	<p class="explain explain02">操作動畫：天數新增/刪除/交換</p>
		    

		    
				<div class="hint n3_1" v-if="s1.newbie" @click="s1.change_hint('3_1')">
					<div class="hintsmall normal red" v-if="s1.hints_switch3_1">
				    	<span class="fa fa-comment-o fa-fw"></span>
				    	<span class="fa fa-exclamation fa-fw"></span>
					</div>
					<div class="hintbig red" v-if="s1.n3_1" @click="s1.deletehintbig($event,'3_1')">
						<p>點擊地標卡的右上角的叉叉<span class="fa fa-times fa-fw"></span>，可以將地標卡從<span class="hs_card">地標卡清單</span>中刪除，並放回到第 2 步驟<span class="hs_four">選地標</span>的車站清單中</p>
					</div>
				</div>
				<div class="hint n3_2" v-if="s1.newbie" @click="s1.change_hint('3_2')">
					<div class="hintsmall normal red" v-if="s1.hints_switch3_2">
				    	<span class="fa fa-comment-o fa-fw"></span>
				    	<span class="fa fa-exclamation fa-fw"></span>
					</div>
					<div class="hintbig red" v-if="s1.n3_2" @click="s1.deletehintbig($event,'3_2')">
						<p>
							<span class="hs_ttl">天數標籤</span>
							<span class="hs_subttl">新增</span>
							<span class="hs_cont">點擊加號新增，上限為 8 天</span>
							<span class="hs_subttl">刪除</span>
							<span class="hs_cont">拖曳至垃圾桶，第 1 天無法刪除</span>
							<span class="hs_subttl">交換</span>
							<span class="hs_cont">拖曳至想要交換的天數標籤</span>
						</p>
					</div>
				</div>
				<div class="hint n3_3" v-if="s1.newbie" @click="s1.change_hint('3_3')">
					<div class="hintsmall normal red" v-if="s1.hints_switch3_3">
				    	<span class="fa fa-comment-o fa-fw"></span>
				    	<span class="fa fa-exclamation fa-fw"></span>
					</div>
					<div class="hintbig red" v-if="s1.n3_3" @click="s1.deletehintbig($event,'3_3')">
						<p>
							<span class="hs_frame">
								<span>拖曳感應區</span>
							</span>
							<span class="hs_ttl">地標標籤</span>
							<span class="hs_subttl">新增</span>
							<span class="hs_cont">將左側地標卡拖曳至右側的連結線段上，每日上限為 7 個</span>
							<span class="hs_subttl">刪除</span>
							<span class="hs_cont">直接點擊標籤，或拖曳至垃圾桶</span>
							<span class="hs_subttl">交換</span>
							<span class="hs_cont">將標籤拖曳至非相鄰的連結線段上</span>
							<span class="hs_btw">註：起點與終點標籤，要從第 1 步驟<span class="hs_four">填資料</span>修改<br>
							註：刪除的標籤會變回地標卡，並放回左側的清單</span>
						</p>
					</div>
				</div>
<!-- 				<div class="hint n3_4" v-if="s1.newbie" @click="s1.change_hint('3_4')">
					<div class="hintsmall reverse" v-if="s1.hints_switch3_4">
				    	<span class="fa fa-comment-o fa-fw"></span>
				    	<span class="fa fa-exclamation fa-fw"></span>
					</div>
					<div class="hintbig" v-if="s1.n3_4" @click="s1.deletehintbig($event,'3_4')">
						<p>
							<span class="hs_ttl">自定義標籤</span>
							<span class="hs_subttl">新增</span>輸入後按 Enter 鍵新增
							<span class="hs_subttl">使用時機</span>可以當成註解，用來補充本站沒有的地標或是私人其他規劃或事件<br>
							<span class="hs_ex">Ex：朋友的家/中秋節烤肉</span>
							<span class="hs_btw">註：自定義標籤的 刪除/交換 與一般標籤相同</span>
						</p>
					</div>
				</div> -->
		
		 
		        <div class="miniblock">	            
		        	<div class="miniblock_c">
		        		<h3>
				        	<div class="checkicon imgbox">
				        		<img src="icon/free/card.png">
				        	</div>地標卡清單
		        		</h3>
			        	<ul class="my_tabs s3tabs">
			        		<li v-for="(type, $i) in types" :class="{tabsActive_lg:activeTypeIndex==$i}" @click="cardfilter($i)">{{type}}
			        			<span>{{types_num[$i]}}</span>
			        		</li>
			        		<li :class="{tabsActive_lg:activeTypeIndex==5, self_tab:true}" @click="show_selftags">自訂</li>
			        	</ul>
		        		<div class="cardwrapper">
		        		<p id="no_data_p" v-if="fcards.length==0">目前查無資料</p>
	        			<div class="lmcard" v-for="(card, $i) in fcards" draggable="true" @dragstart="carddrag($event,$i,card)" @dragend="stylereset" @click.stop="s2.lookCardDetail(card)">
		        				<div class="imgbox">
		        					<img v-bind:src="card.url">
		        				</div>
	        					<div class="btn_wrapper">
		        					<div class="btn_delcard" @click.stop="addtodatacard(card)">
		        						<span class="fa fa-times fa-fw"></span>
		        					</div>
	        					</div>
								<div class="line_tab neiWan_tab" v-if="card.branch=='內灣線'">內灣線</div>
								<div class="line_tab pingC_tab" v-if="card.branch=='平溪線'">平溪線</div>
								<div class="line_tab gigi_tab" v-if="card.branch=='集集線'">集集線</div>
								<div class="line_tab ali_tab" v-if="card.branch=='阿里山線'">阿里山線</div>
		        				<h4 class="cardicon">
		        					<div class="imgbox">
		        						<img :src="typeicon_filesourse(card.type)">
		        					</div>
		        					{{card.name}}
		        				</h4>
		        				<p>{{card.subtitle}}</p>
		        			</div>
		        		</div>
		        		<div class="updown">
		        			<div class="btn_up" @click="upcard">
				        		<span class="fa fa-chevron-up fa-fw"></span>
				        	</div>
		        			<div class="btn_down" @click="downcard">
				        		<span class="fa fa-chevron-down fa-fw"></span>
				        	</div>
		        		</div>

		        		<div class="selftab_box" v-if="selftab_switch">
					        <div class="f1_cont">
					        	<div class="f1_cont_box">
					        		<p>行程出發地點</p>
					        		<input type="text" maxlength="8" v-model="startpoint" placeholder="請輸入行程出發地點" @dragover.prevent v-on:keyup='s1.validate_str(startpoint)' v-on:change='s1.validate_str(startpoint)'>
					        	</div>
					        	<div class="f1_cont_box">
					        		<p>行程結束地點</p>
					        		<input type="text" maxlength="8" v-model="endpoint" placeholder="請輸入行程結束地點" @dragover.prevent v-on:keyup='s1.validate_str(endpoint)' v-on:change='s1.validate_str(endpoint)'>
					        	</div>
					        	<div class="f1_cont_box" v-if="selfbox">
					        		<p>自訂標籤</p>
					        		<input type="text" v-model='newtag' v-on:keyup.enter='addnewtag' maxlength="8" placeholder="請按 Enter 送出自訂標籤" @dragover.prevent>
					        	</div>
					        </div>

		        		</div>

		        	</div>	       
		        </div>
		
		        <div class="miniblock f3r">
		        	<div class="miniblock_f3c">
		        		<div class="f3r_top">
		        			<h3>
					        	<div class="checkicon imgbox">
					        		<img src="icon/free/sort.png">
					        	</div>行程規劃
					        </h3>
		        		</div>
			        	<ul class="my_tabs day_tabs">
			        		<span class="trash" @dragover="trashcandrop($event)" @drop="deletedayorbox($event)">
			        			<span class="fa fa-trash fa-fw"></span>
			        		</span>
		    				<p class="explain explain03">拖曳天數或地標到此刪除</p>
		        			<li v-for="(day, $i) in days" :class="{daysActive_lg:activeDayIndex==$i, last:day==''}" @click="dayFilterOrAdd(day, $i)" draggable="true" @dragstart="daydrag($event,$i,day)" @dragend="stylereset" @dragover="daycandrop($event)" @drop="changeday($event)">{{day}}</li>
			        	</ul>
			        	<div class="outmarkwrapper">
				        	<div class="markwrapper">
				        		<div class="markwrapper1">
						            <div class='box f_node' v-if="activeDayIndex==0">{{startpoint}}</div>
						            <div class='box f_node' v-if="activeDayIndex!=0">{{days[activeDayIndex]}} 開始</div>
		
						            <div class='line' @dragover="candrop($event)" @drop="empty_drop($event)" v-if="items[activeDayIndex].length==0"></div>
						            <transition-group name="dbbox" tag="p">
						                <div class='box_wrapper' v-for="(item, $i) in items[activeDayIndex]" v-bind:key="item.name">
		
						                    <div class='line' @dragover="candrop($event)" @drop="drop($event,$i)"></div>
		
						                    <div class='box' :class="item.type"
						                    draggable="true" @dragstart="boxdrag($event,$i)" @dragend="stylereset" @click="delete_box(item, $i)">
						                    	{{item.name}}
						                    	<div class="box_typeicon imgbox">
						                    		<img :src="typeicon_filesourse(item.type)">
						                    	</div>
						                    </div>
		
						                    <div class='line' @dragover="candrop($event)" @drop="last_drop($event,$i)" v-if="$i==itemslength-1"></div>
						                </div>
						            </transition-group>
						            <div class='box f_node' v-if="days[days.length-1]=='第8天'?(activeDayIndex==days.length-1):(activeDayIndex==days.length-2)">{{endpoint}}</div>
						            <div class='box f_node' v-if="days[days.length-1]=='第8天'?(activeDayIndex!=days.length-1):(activeDayIndex!=days.length-2)">{{days[activeDayIndex]}} 結束</div>
					            </div>	        		
				        	</div>
				        	<div class="markwrapper">
					        	<div class="markwrapper2">
						            <transition-group name="dbbox" tag="p">
						                <div class='box_wrapper' v-for="(item, $i) in items[activeDayIndex]" v-bind:key="item.name"><!-- 用:key="item"會因為undefined而報錯 -->
		
						                    <div class='line' @dragover="candrop($event)" @drop="drop($event,$i)"></div>
		
						                    <div class='box' :class="item.type"
						                    draggable="true" @dragstart="boxdrag($event,$i)" @dragend="stylereset" @click="delete_box(item, $i)">
						                    	{{item.name}}
						                    	<div class="box_typeicon imgbox">
						                    		<img :src="typeicon_filesourse(item.type)">
						                    	</div>
					                    	</div>
		
						                    <div class='line' @dragover="candrop($event)" @drop="last_drop($event,$i)" v-if="$i==itemslength-1"></div>
						                </div>
						            </transition-group>
						            <div class='box f_node' v-if="days[days.length-1]=='第8天'?(activeDayIndex==days.length-1):(activeDayIndex==days.length-2)">{{endpoint}}</div>
						            <div class='box f_node' v-if="days[days.length-1]=='第8天'?(activeDayIndex!=days.length-1):(activeDayIndex!=days.length-2)">{{days[activeDayIndex]}} 結束</div>
						        </div>	        		
				        	</div>
				        </div>
		
		        	</div><!-- end of miniblock_f3c -->
		        </div><!-- end of miniblock -->

		        <div class="next_box next03">下一步</div>
		    </div>
		</div>
		
		
		
		
		
		<!-- <h1>04</h1> -->
		    <div id="block4" class="blockwrapper">
		    <div class="block">
		
<!-- 				<div class="hint n4_1" v-if="s1.newbie" @click="s1.change_hint('4_1')">
					<div class="hintsmall normal" v-if="s1.hints_switch4_1">
				    	<span class="fa fa-comment-o fa-fw"></span>
				    	<span class="fa fa-exclamation fa-fw"></span>
					</div>
					<div class="hintbig" v-if="s1.n4_1" @click="s1.deletehintbig($event,'4_1')">
						<p>標題與副標題，要從第 1 步驟<span class="hs_four">填資料</span>修改</p>
					</div>
				</div> -->
				<div class="hint n4_2" v-if="s1.newbie" @click="s1.change_hint('4_2')">
					<div class="hintsmall reverse red" v-if="s1.hints_switch4_2">
				    	<span class="fa fa-comment-o fa-fw"></span>
				    	<span class="fa fa-exclamation fa-fw"></span>
					</div>
					<div class="hintbig red" v-if="s1.n4_2" @click="s1.deletehintbig($event,'4_2')">
						<p>
							<span class="hs_ttl">其他金額</span>
							<span class="hs_subttl">使用時機</span>
							用來補充記錄本站沒有提供的其他消費金額<br><span class="hs_ex">Ex：伴手禮費用/租車費用</span>
						</p>
					</div>
				</div>
				<div class="hint n4_3" v-if="s1.newbie" @click="s1.change_hint('4_3')">
					<div class="hintsmall reverse red" v-if="s1.hints_switch4_3">
				    	<span class="fa fa-comment-o fa-fw"></span>
				    	<span class="fa fa-exclamation fa-fw"></span>
					</div>
					<div class="hintbig red" v-if="s1.n4_3" @click="s1.deletehintbig($event,'4_3')">
						<p>需要至少一張有消費金額資訊的地標卡，且旅遊人數至少要 1 人，才能計算消費金額</p>
					</div>
				</div>
		
		
		        	<div class="miniblock left">
		        	<div class="miniblock_c">
		        		<h3>
				        	<div class="checkicon imgbox">
				        		<img src="icon/free/check.png">
				        	</div>確認行程
		        		</h3>
			        	<ul class="my_tabs day_tabs" v-if="days_date.length==0">
			        		<li v-for="(day, $i) in days" :class="{daysActive_lg:activeDayIndex==$i}" @click="dayFilter(day, $i)" v-if="day!=''">{{day}}</li>
			        	</ul>
			        	<ul class="my_tabs day_tabs" v-if="days_date.length>0">
			        		<li v-for="(day, $i) in days_date" :class="{daysActive_lg:activeDayIndex==$i}" @click="dayFilter(day, $i)" v-if="day!=''">{{day}}</li>
			        	</ul>
			        	<div class="outmarkwrapper">
				        	<div class="markwrapper">
				        		<div class="markwrapper1">
						            <div class='box f_node' v-if="activeDayIndex==0">{{s3.startpoint}}</div>
						            <div class='box f_node' v-if="activeDayIndex!=0">{{s3.days[activeDayIndex]}} 開始</div>
		
						            <div class='line' v-if="items[activeDayIndex].length==0"></div>
						            <transition-group name="dbbox" tag="p">
						                <div class='box_wrapper' v-for="(item, $i) in items[activeDayIndex]" v-bind:key="item.name">
		
						                    <div class='line'></div>
		
						                    <div class='box' :class="item.type">
						                    	{{item.name}}
						                    	<div class="box_typeicon imgbox">
						                    		<img :src="s3.typeicon_filesourse(item.type)">
						                    	</div>
					                    	</div>
		
						                    <div class='line' v-if="$i==itemslength-1"></div>
						                </div>
						            </transition-group>
						            <div class='box f_node' v-if="s3.days[s3.days.length-1]=='第8天'?(activeDayIndex==s3.days.length-1):(activeDayIndex==s3.days.length-2)">{{s3.endpoint}}</div>
						            <div class='box f_node' v-if="s3.days[s3.days.length-1]=='第8天'?(activeDayIndex!=s3.days.length-1):(activeDayIndex!=s3.days.length-2)">{{s3.days[activeDayIndex]}} 結束</div>
					            </div>	        		
				        	</div>
				        	<div class="markwrapper">
					        	<div class="markwrapper2">
						            <transition-group name="dbbox" tag="p">
						                <div class='box_wrapper' v-for="(item, $i) in items[activeDayIndex]" v-bind:key="item.name"><!-- 用:key="item"會因為undefined而報錯 -->
		
						                    <div class='line'></div>
		
						                    <div class='box' :class="item.type">
						                    	{{item.name}}
						                    	<div class="box_typeicon imgbox">
						                    		<img :src="s3.typeicon_filesourse(item.type)">
						                    	</div>
					                    	</div>
		
						                    <div class='line' v-if="$i==itemslength-1"></div>
						                </div>
						            </transition-group>
						            <div class='box f_node' v-if="s3.days[s3.days.length-1]=='第8天'?(activeDayIndex==s3.days.length-1):(activeDayIndex==s3.days.length-2)">{{s3.endpoint}}</div>
						            <div class='box f_node' v-if="s3.days[s3.days.length-1]=='第8天'?(activeDayIndex!=s3.days.length-1):(activeDayIndex!=s3.days.length-2)">{{s3.days[activeDayIndex]}} 結束</div>
						        </div>	        		
				        	</div>
				        </div>
				    </div>
		        	</div> <!-- end of miniblock -->
		        	<div class="miniblock right">
		        	<div class="miniblock_c">
<!-- 		        		<div>
				        	<div class="myfreeicon imgbox">
				        		<img src="icon/free/cic3_img_story.png">
				        	</div>
				        	<div class="s4_mytitle">
		        				<h3>{{s1.tr_name}}</h3>
		        				<p>{{s1.tr_subtitle}}</p>
				        	</div>
		        		</div> -->
		        		<h3>
				        	<div class="checkicon imgbox">
				        		<img src="icon/free/input.png">
				        	</div>其他選項
		        		</h3>
		        		
		        		<div class="f4_info">	        			
				        	<div class="f4_cont_box">
				        		<p>出發日期</p><!-- {{tr_startDate}} -->
				        		<input class="startdate" type="date" v-model="tr_startDate" @change="input_date()">
				        	</div>
				        	<div class="f4_cont_box">
					        	<p>人數</p><!-- {{adult}}{{child}} -->
					        	大人<input class="pplnum pplnumAdult" type="number" min="0" max="20" @change="input_disable($event,600)" v-on:keyup="validate($event,'adult_num')" v-on:change="update_money($event,'adult_num')">人
					        	小孩<input class="pplnum pplnumChild" type="number" min="0" max="20" @change="input_disable($event,600)" v-on:keyup="validate($event,'child_num')" v-on:change="update_money($event,'child_num')">人
				        	</div>
		        		</div>
		
		        		<div class="f4_calc">
		        			<div class="f4_calcbox f4_svgwrapper">
		        				<h4>消費類型比</h4>
		        				<div class="othercalc">
		        					<input class="othermoney" type="number" min="0" max="99999" step="100" v-on:keyup="validate($event,'othermoney')" v-on:change="update_money($event,'othermoney')"><br>其他金額
		        				</div>
		        			</div>
		        			<div class="f4_calcbox">
		        				<h4>消費明細</h4>
		        				<div class="calc_tabs">
						        	<table>
						        		<tr v-for="(calc, $i) in udcalcs">
						        			<td>{{calc.name}}</td>
						        			<td :class="{f_landscape:calc.type=='門票',f_eat:calc.type=='美食',f_stay:calc.type=='住宿',f_tag:calc.type=='其他'}">{{calc.type}}</td>
						        			<td>{{calc.cost}}</td>
						        		</tr>
						        	</table>	        					
		        				</div>
				        		<div class="updown">
				        			<div class="btn_up" @click="upcalc">
				        				<span class="fa fa-chevron-up fa-fw"></span>
				        			</div>
				        			<div class="btn_down" @click="downcalc">
				        				<span class="fa fa-chevron-down fa-fw"></span>
				        			</div>
				        		</div>
				        		<div class="f4_ttlwrapper">
									<div id="f4_totalMoneyBox">
										<img src="icon/free/icon_5.png">
										<h3 id="f4_ttl">{{calcs_total}}</h3>
									</div>
									<p id="f4_moneyLorem">預估總消費金額</p>
									<div class="clearFix"></div>
				        		</div>				        	
		        			</div>
		        		</div>
		        		<div class="f4_btnbox">
		        			<div class="save black_btn" @click="saveToMyFree">儲存到我的行程</div>
		        		</div>
		        	</div>        		
		        	</div>
		    </div>
		    </div>
		
		    </div>		<!-- end of <div id="wrapper"> -->
		</div>		<!-- end of <div id="outOfW"> -->
	</div>

	<footer id="hoyo_footer" class="ch">HO YO 好遊 | 鐵路支線任你遊</footer>

</div>



	<?php include 'php/free/import_LMcard.php';?>
	<?php include 'php/free/import_LMTR.php';?>
	<?php include 'php/free/import_TR.php';?>
	<script src="js/free/freedata.js"></script>
	<script src="js/free/free.js"></script>


</body>
</html>