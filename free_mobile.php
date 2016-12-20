<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Examples</title>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.1/vue.min.js"></script>
<!-- <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script> -->
<script src="https://unpkg.com/tween.js@16.3.4"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js" ></script>
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/free/common.css">
<link rel="stylesheet" type="text/css" href="css/free/free_mobile.css">
</head>
<body>

	
    <div id="fm_block1" class="fm_wrapper"><h1>01</h1>
    	<div class="fm_steps">
	        <div><span>填資料</span></div>
	        <div><span>選地標</span></div>
	        <div><span>排行程</span></div>
	        <div><span>做確認</span></div>
    	</div>
        <div class="fm_title">
        	<h2>好遊-自由行規劃系統</h2>
        </div>
        <div class="fm1_cont">
        	<div class="fm1_cont_box">
        		<p>自由行名稱</p>
        		<input type="text" maxlength="10" v-model="tr_name" placeholder="例：我的自由行">
        	</div>
        	<div class="fm1_cont_box">
        		<p>自由行副標題</p>
        		<input type="text" v-model="tr_subtitle" placeholder="例：">
        	</div>
        	<div class="fm1_cont_box">
        		<p>起點</p>
        		<input type="text" maxlength="8" v-model="startpoint" placeholder="例：我的家">
        	</div>
        	<div class="fm1_cont_box">
        		<p>終點</p>
        		<input type="text" maxlength="8" v-model="endpoint" placeholder="例：我的家">
        	</div>
        	<div class="fm1_cont_box">
        		<p>自由行簡述</p>
        		<input type="text" v-model="tr_description" placeholder="例：">
        	</div>
        </div>
    </div>

	
	<div id="fm_block2" class="fm_wrapper" @click="panelclose($event)"><h1>02</h1>
		<div class="fm_steps">
	        <div><span>填資料</span></div>
	        <div><span>選地標</span></div>
	        <div><span>排行程</span></div>
	        <div><span>做確認</span></div>
		</div>
        <div class="fm_title">
        	<h2>篩選地標卡</h2>
        </div>

        <div class="fm2_selectbox">
        	<h4>選擇支線</h4>
        	<div class="fm2_output">{{branches[activeBranches]}}</div>
        	<div class="fm2_btn" @click="showpanel($event,'branch')">V</div>
			<div class="fm2_list" v-if="btn_branch_on">
				<ul>
					<li v-for="(branch, i) in branches" @click="activechange('branch',branch,i)">{{branch}}</li>
				</ul>
			</div>
        </div>

        <div class="fm2_selectbox">
        	<h4>選擇站點</h4>
        	<div class="fm2_output">{{activeStation}}</div>
        	<div class="fm2_btn" @click="showpanel($event,'station')">V</div>
			<div class="fm2_list" v-if="btn_station_on">
				<ul>
					<li v-for="(station, i) in neiwan" v-if="activeBranches==0" @click="activechange('station',station,i)">{{station}}</li>
				</ul>
				<ul>
					<li v-for="(station, i) in pinxi" v-if="activeBranches==1" @click="activechange('station',station,i)">{{station}}</li>
				</ul>
				<ul>
					<li v-for="(station, i) in gigi" v-if="activeBranches==2" @click="activechange('station',station,i)">{{station}}</li>
				</ul>
				<ul>
					<li v-for="(station, i) in alisan" v-if="activeBranches==3" @click="activechange('station',station,i)">{{station}}</li>
				</ul>
			</div>
        </div>

        <div class="fm2_selectbox">
        	<h4>選擇類別</h4>
        	<div class="fm2_output">{{types[activeTypeIndex]}}</div>
        	<div class="fm2_btn" @click="showpanel($event,'type')">V</div>
			<div class="fm2_list" v-if="btn_type_on">
				<ul>
					<li v-for="(type, i) in types" @click="activechange('type',type,i)">{{type}}</li>
				</ul>
			</div>
        </div>

        <div class="fm2_selectbox">
        	<h4>篩選結果</h4>
    		<div class="fm_cardwrapper">
    			<div class="fm_lmcard" v-for="(card, $i) in filted_cards">
    				<div class="imgbox">
    					<div class="btn_selecard imgbox">
    						<img src="icon/free/icon_2.png" @click="addtomycard(card, $i)">
    					</div>
    					<div class="btn_lookdetail imgbox">
    						<img src="icon/free/icon_1.png">
    					</div>
    					<img v-bind:src="card.url">
    				</div>
					<div class="line_tab neiWan_tab" v-if="card.branch=='內灣線'">內灣線</div>
					<div class="line_tab pingC_tab" v-if="card.branch=='平溪線'">平溪線</div>
					<div class="line_tab gigi_tab" v-if="card.branch=='集集線'">集集線</div>
					<div class="line_tab ali_tab" v-if="card.branch=='阿里山線'">阿里山線</div>
    				<h4 :class="card.type">{{card.name}}</h4>
    				<p>{{card.subtitle}}</p>
    			</div>
    		</div>
        </div>

	</div>

	
	<div id="fm_block3" class="fm_wrapper"><h1>03</h1>
		<div class="fm_steps">
	        <div><span>填資料</span></div>
	        <div><span>選地標</span></div>
	        <div><span>排行程</span></div>
	        <div><span>做確認</span></div>
		</div>
        <div class="fm_title">
        	<h2>排行程</h2>
        </div>

	    <div class="fm3_wrapper">
	    	<h4>我的地標卡清單</h4>
			<div class="fm3_listwrapper">
				<div class="fm3_list" v-for="(card, $i) in mycards_dayorder">
					<!-- 上列 -->
					<div class="fm3_listbox">
						<h4 :class="card.type">{{card.name}}</h4>
						<div class="btn_lookdetail imgbox">
							<img src="icon/free/icon_1.png">
						</div>
						<div class="btn_selecard imgbox">
							<img src="icon/free/icon_3.png" @click="deletemycard(card, $i)">
						</div>						
					</div>

					<!-- 下列 -->
					<div class="fm3_listbox">
						第<select v-on:change="changeitem($event, card, $i,'day')">
							<option v-for="(day, i) in days" :value="day" :selected="card.day==day">{{day}}
						</select>天
						第<select v-on:change="changeitem($event, card, $i,'order')">
							<option v-for="order in orders" :value="order" :selected="card.order==order">{{order}}
						</select>順位
					</div>
				</div>
			</div>
        </div>
	</div>

	
    <div id="fm_block4" class="fm_wrapper"><h1>04</h1>
    	<div class="fm_steps">
	        <div><span>填資料</span></div>
	        <div><span>選地標</span></div>
	        <div><span>排行程</span></div>
	        <div><span>做確認</span></div>
    	</div>
        <div class="fm_title">
        	<h2>察看行程</h2>
        </div>

		<div class="fm4_wrapper">
			第<select v-model="selected_day">
				<option v-for="(day, i) in days" :value="day">{{day}}
			</select>天			
		</div>


	    <div class="fm_markwrapper">
            <div class='fm_box f_node' v-if="selected_day==1">{{fm1.startpoint}}</div>
            <div class='fm_box f_node' v-if="selected_day!=1">start</div>

            <div class='fm_line' v-if="items.length==0"></div>
            <transition-group name="fm_dbbox" tag="p">
                <div class='fm_box_wrapper' v-for="(item, $i) in items" v-bind:key="item.name">

                    <div class='fm_line'></div>

                    <div class='fm_box' :class="item.type">
                    	{{item.name}}
                    	<div class="box_typeicon imgbox">
                    		<img :src="typeicon_filesourse(item.type)">
                    	</div>
                	</div>

                    <div class='fm_line' v-if="$i==items.length-1"></div>
                </div>
            </transition-group>
            <div class='fm_box f_node' v-if="">{{fm1.endpoint}}</div>	        		
    	</div> 

<!--         <ul>
        	<li v-for="item in items">{{item.name}}</li>
        </ul> -->
    </div>


	<script src="js/free/freedata.js"></script>
	<script src="js/free/free_mobile.js"></script>
</body>
</html>