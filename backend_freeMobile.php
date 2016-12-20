<?php ob_start();session_start();?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>好遊 HO YO | 後端管理平台</title>
<script type="text/javascript" src="js/backend/backendTour/vue.min.js"></script>
<!-- <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script> -->
<script src="https://unpkg.com/tween.js@16.3.4"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js" ></script>
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/font-awesome-4.6.3/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="css/CSS_reset.css">
<link rel='stylesheet' href='css/backend/backendIndex.css'>
<link rel="stylesheet" type="text/css" href="css/backend/backendTour/common.css">
<link rel="stylesheet" type="text/css" href="css/backend/backendTour/free_mobile.css">
</head>
<body>
<div id="hoyo_wrapper">
    
        <?php include 'backendIndex_start.php'; ?>
        <script>
            $('.biContentBody li a[href="backendTour.php"]').addClass('here');
        </script>
        <div class="fm_title_wrapper">
            <div class="fm_thetitle">
                <h2 class="PH2"><span id="GObackendTour">行程管理</span> > 官方新增行程</h2>
            </div>
        </div>
        
        <div class="four_col_wrapper">
            <div id="fm_block1" class="fm_wrapper">
                <div class="fm_title">
                    <h2>基本資料輸入</h2>
                </div>
                <div class="fm1_cont">
                    <div class="fm1_cont_box">
                        <p>行程名稱</p>
                        <input type="text" maxlength="10" v-model="tr_name" placeholder="請為您的行程取個名稱">
                    </div>
                    <div class="fm1_cont_box">
                        <p>行程副標題</p>
                        <textarea name="Text1" cols="20" rows="2" maxlength="24" v-model="tr_subtitle" placeholder="請用一句話描述您的行程"></textarea>
                    </div>
                    <div class="fm1_cont_box descrip">
                        <p>行程簡述</p>
                        <textarea name="Text2" rows="7" maxlength="150" v-model="tr_description" placeholder="請用一小段文字描述您的行程"></textarea>
                    </div>
    
    
                    <div class="fm1_cont_box">
                        <p>行程出發地點</p>
                        <input type="text" maxlength="8" v-model="startpoint" placeholder="請輸入行程出發地點">
                    </div>
                    <div class="fm1_cont_box">
                        <p>行程結束地點</p>
                        <input type="text" maxlength="8" v-model="endpoint" placeholder="請輸入行程結束地點">
                    </div>
                    
    
                    <div class="fm1_cont_box">
                        <p>出發日期</p>
                        <input class="startdate" type="date" v-model="tr_startDate">
                    </div>
    
                    <div class="fm1_cont_box divide">
                        <div class="col_two">
                            <p>大人人數</p>
                            <input class="pplnum pplnumAdult" type="number" min="0" max="20" v-on:keyup="validate($event,'adult_num')" v-on:change="update_money($event,'adult_num')">                    
                        </div>
                        <div class="col_two">
                            <p>小孩人數</p>
                            <input class="pplnum pplnumChild" type="number" min="0" max="20" v-on:keyup="validate($event,'child_num')" v-on:change="update_money($event,'child_num')">                   
                        </div>
                    </div>
    
                    <div class="fm1_cont_box">
                        <p>其他金額</p>
                        <input class="othermoney" type="number" min="0" max="99999" step="100" v-on:keyup="validate($event,'othermoney')" v-on:change="update_money($event,'othermoney')">
                    </div>
                </div>
            </div>
    
            
            <div id="fm_block2" class="fm_wrapper" @click="panelclose($event)">
                <div class="fm_title">
                    <h2>篩選地標卡</h2>
                    <i class="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
                </div>
    
                <div class="fm2_selectbox">
                    <h4 class="choose">選擇支線</h4>
                    <div class="select_row">
                        <div class="fm2_output">{{branches[activeBranches]}}</div>
                        <div class="fm2_btn" @click="showpanel($event,'branch')">
                            <span class="fa fa-chevron-down fa-fw"></span>
                        </div>
                    </div>
    
                    <div class="fm2_list" v-if="btn_branch_on">
                        <ul>
                            <li v-for="(branch, i) in branches" @click="activechange('branch',branch,i)">{{branch}}</li>
                        </ul>
                    </div>
                </div>
    
                <div class="fm2_selectbox">
                    <h4 class="choose">選擇站點</h4>
                    <div class="select_row">
                        <div class="fm2_output">{{activeStation}}</div>
                        <div class="fm2_btn" @click="showpanel($event,'station')">
                            <span class="fa fa-chevron-down fa-fw"></span>
                        </div>
                    </div>
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
                    <h4 class="choose">選擇類別</h4>
                    <div class="select_row">
                        <div class="fm2_output">{{types[activeTypeIndex]}}</div>
                        <div class="fm2_btn" @click="showpanel($event,'type')">
                            <span class="fa fa-chevron-down fa-fw"></span>
                        </div>
                    </div>
                    <div class="fm2_list" v-if="btn_type_on">
                        <ul>
                            <li v-for="(type, i) in types" @click="activechange('type',type,i)">{{type}}</li>
                        </ul>
                    </div>
                </div>
    
                <div class="fm2_selectbox result">
                    <h2 class="fm2_h2h2">篩選結果</h2>
                    <div class="fm_cardwrapper">
                        <div class="fm_lmcard" v-for="(card, $i) in filted_cards">
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
                </div>
    
            </div>
    
            
            <div id="fm_block3" class="fm_wrapper">
                <div class="fm_title">
                    <h2>排行程</h2>
                    <i class="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
                </div>
    
                <div class="fm3_wrapper">
                    <h4>我的地標卡清單</h4>
                    <div class="fm3_listwrapper">
                        <div class="fm3_list" v-for="(card, $i) in mycards_dayorder">
                            <!-- 上列 -->
                            <div class="fm3_listbox">
                                <h4 class="cardicon">
                                    <div class="imgbox">
                                        <img :src="typeicon_filesourse(card.type)">
                                    </div>
                                    {{card.name}}
                                </h4>
                                <div class="btn_selecard" @click.stop="deletemycard(card, $i)">
                                    <span class="fa fa-times fa-fw"></span>
                                </div>
                            </div>
    
                            <!-- 下列 -->
                            <div class="fm3_listbox">
                                第<select v-on:change="changeitem($event, card, $i,'day')">
                                    <option v-for="(day, i) in days" :value="day" :selected="card.day==day">{{day}}
                                </select>天，第<select v-on:change="changeitem($event, card, $i,'order')">
                                    <option v-for="order in orders" :value="order" :selected="card.order==order">{{order}}
                                </select>順位
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            
            <div id="fm_block4" class="fm_wrapper">
                <div class="fm_title">
                    <h2>查看行程</h2>
                    <i class="fa fa-arrow-right fa-lg" aria-hidden="true"></i>
                </div>
    
                <div class="fm4_wrapper">
                    第<select v-model="selected_day">
                        <option v-for="(day, i) in days" :value="day">{{day}}
                    </select>天            
                </div>
    
    
                <div class="fm_markwrapper">
                    <div class='fm_box f_node' v-if="selected_day==1">{{fm1.startpoint}}</div>
                    <div class='fm_box f_node' v-if="selected_day!=1"></div>
    
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
    
                <div class="f4_btnbox">
                    <div class="save black_btn" @click="saveToMyFree">儲存行程</div>
                </div>
                
    
        <!--         <ul>
                    <li v-for="item in items">{{item.name}}</li>
                </ul> -->
            </div>
        </div> <!-- end of class="four_col_wrapper" -->
    
        <?php include 'backendIndex_end.php'; ?>
    
    
        <?php include 'php/backend/backendTour/import_LMcard.php';?>
        <?php include 'php/backend/backendTour/import_LMTR.php';?>
        <?php include 'php/backend/backendTour/import_TR.php';?>
        <script src="js/backend/backendTour/backend_freeMobile.js"></script>
        
        <script>
            var storage = sessionStorage;

            $('#GObackendTour').click(function(){
                if(storage['backend_modify_tour_by_TRno']){
                     storage.removeItem('backend_modify_tour_by_TRno');
                     location.href='backendTour.php';
                }else{
                     location.href='backendTour.php';
                }
            });
        </script>
</div>
</body>
</html>