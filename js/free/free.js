

// $(function(){



var svg1 = d3.select('#svgwrapper').append('svg').attr({
                'id': 'svg1',
                'width': 530,
                'height': 450
            });

var branch_bg = ['icon/free/branch_bg01.png','icon/free/branch_bg02.png','icon/free/branch_bg03.png','icon/free/branch_bg04.png'];
svg1.selectAll('defs').data(branch_bg).enter().append('defs')
    .append('pattern').attr({
        'id': (d,i)=>'branch_bgIMG'+(i+1),
        'patternUnits':"userSpaceOnUse",
        'width': 530,
        'height': 450
    })
    .append('image').attr({
        'width': 530,
        'height': 450,
        'x': (d,i)=>{
            if(i==0){
                return -4;
            }else if(i==1){
                return 7;
            }else if(i==2){
                return 4;
            }else if(i==3){
                return -6;
            }
        },
        'y': (d,i)=>{
            if(i==0){
                return -4;
            }else if(i==1){
                return 4;
            }else if(i==2){
                return 0;
            }else if(i==3){
                return -18;
            }
        },
        'xlink:href': d=>d
    });


svg1.append('rect').attr({
        'id': 'branch_bgWrapper',
        'width': 530,
        'height': 450,
        'x': 0,
        'y': 0,
        "fill": "url(#branch_bgIMG1)",
        'opacity': 1
    });

//四個箭頭設定
var arrowblocker = false;
var svg3 = d3.select('.steps').append('svg').attr({
                'class': 'svg3',
                'width': 570,
                'height': 60
            });

svg3.selectAll('g').data(arrow_data).enter().append('g')
    .attr({
        'class': (d,i)=>i==0?'arrow0 active' : (i==4? 'arrow4 lastarrow' : 'arrow'+i)
    })
    .on('click',function(d,i){
        if(i!=4){ //除了 完成 的步驟, 其他都可以 click
            if(!arrowblocker){
                svg3.selectAll('g').classed("active", false);
                svg3.select('.arrow'+i).classed("active", true);
                $('#wrapper').stop().velocity({'left': (-1*i)*1136+'px'},500);
            }
            arrowblocker = true;
            setTimeout(()=>{ arrowblocker = false; },500);            
        }
    });

svg3.selectAll('g').append('path')
    .attr({
        // 'fill':'hsla(240, 0%, 22%, .2)',
        'fill':'#ccc',
        'stroke':'none',
        'd': d=>d
    });
svg3.selectAll('g').append('text')
    .attr({
        'x': (d,i) => i==0? i*109+30 : (i==4? i*109+50 : i*109+40),
        'y': 36,
        'font-size': 18,
        'fill':'#fff'
    })
    .text((d,i) => ['填資料','選地標','排行程','做確認','完成'][i]);



var initStationFilter = data_LMcards.filter(cv=>cv.station=='新竹');

var s1 = new Vue({
    el: '#block1',
    data: {
        tr_name: '',
        tr_subtitle: '',
        tr_description: '',
        newbie: false,
        hints_switch1_1: true,
        hints_switch1_2: true,
        hints_switch1_3: true,
        hints_switch2_1: true,
        hints_switch3_1: true,
        hints_switch3_2: true,
        hints_switch3_3: true,
        hints_switch3_4: true,
        hints_switch4_1: true,
        hints_switch4_2: true,
        hints_switch4_3: true,
        n1_1: false,
        n1_2: false,
        n1_3: false,
        n2_1: false,
        n3_1: false,
        n3_2: false,
        n3_3: false,
        n3_4: false,
        n4_1: false,
        n4_2: false,
        n4_3: false,
    },
    watch: {
        newbie: function(newValue, oldValue){
            //回歸初始狀態
            if(newValue==true){
                this.hints_switch1_1 = true;
                this.hints_switch1_2 = true;
                this.hints_switch1_3 = true;
                this.hints_switch2_1 = true;
                this.hints_switch3_1 = true;
                this.hints_switch3_2 = true;
                this.hints_switch3_3 = true;
                this.hints_switch3_4 = true;
                this.hints_switch4_1 = true;
                this.hints_switch4_2 = true;
                this.hints_switch4_3 = true;
                this.n1_1 = false;
                this.n1_2 = false;
                this.n1_3 = false;
                this.n2_1 = false;
                this.n3_1 = false;
                this.n3_2 = false;
                this.n3_3 = false;
                this.n3_4 = false;
                this.n4_1 = false;
                this.n4_2 = false;
                this.n4_3 = false;
            }else if(newValue==false){
                this.hints_switch1_1 = false;
                this.hints_switch1_2 = false;
                this.hints_switch1_3 = false;
                this.hints_switch2_1 = false;
                this.hints_switch3_1 = false;
                this.hints_switch3_2 = false;
                this.hints_switch3_3 = false;
                this.hints_switch3_4 = false;
                this.hints_switch4_1 = false;
                this.hints_switch4_2 = false;
                this.hints_switch4_3 = false;
                this.n1_1 = false;
                this.n1_2 = false;
                this.n1_3 = false;
                this.n2_1 = false;
                this.n3_1 = false;
                this.n3_2 = false;
                this.n3_3 = false;
                this.n3_4 = false;
                this.n4_1 = false;
                this.n4_2 = false;
                this.n4_3 = false;
            }
        }
    },
    methods: {
        change_hint: function(n){
            if(n=='1_1'){
                this.hints_switch1_1 = false;
                this.n1_1 = true;
            }else if(n=='1_2'){
                this.hints_switch1_2 = false;
                this.n1_2 = true;
            }else if(n=='1_3'){
                this.hints_switch1_3 = false;
                this.n1_3 = true;
            }else if(n=='2_1'){
                this.hints_switch2_1 = false;
                this.n2_1 = true;
            }else if(n=='3_1'){
                this.hints_switch3_1 = false;
                this.n3_1 = true;
            }else if(n=='3_2'){
                this.hints_switch3_2 = false;
                this.n3_2 = true;
            }else if(n=='3_3'){
                this.hints_switch3_3 = false;
                this.n3_3 = true;
            }else if(n=='3_4'){
                this.hints_switch3_4 = false;
                this.n3_4 = true;
            }else if(n=='4_1'){
                this.hints_switch4_1 = false;
                this.n4_1 = true;
            }else if(n=='4_2'){
                this.hints_switch4_2 = false;
                this.n4_2 = true;
            }else if(n=='4_3'){
                this.hints_switch4_3 = false;
                this.n4_3 = true;
            }
        },
        deletehintbig: function($event,n){
            $event.stopPropagation();
            if(n=='1_1'){
                this.n1_1 = false;
            }else if(n=='1_2'){
                this.n1_2 = false;
            }else if(n=='1_3'){
                this.n1_3 = false;
            }else if(n=='2_1'){
                this.n2_1 = false;
            }else if(n=='3_1'){
                this.n3_1 = false;
            }else if(n=='3_2'){
                this.n3_2 = false;
            }else if(n=='3_3'){
                this.n3_3 = false;
            }else if(n=='3_4'){
                this.n3_4 = false;
            }else if(n=='4_1'){
                this.n4_1 = false;
            }else if(n=='4_2'){
                this.n4_2 = false;
            }else if(n=='4_3'){
                this.n4_3 = false;
            }
        },
        validate_str: function(str){
            if(str.indexOf('"')!=-1 || str.indexOf("'")!=-1 || str.indexOf('*')!=-1 || str.indexOf(':')!=-1 || str.indexOf('$')!=-1 || str.indexOf('\\')!=-1){
                this.tr_name = this.tr_name.replace(/['":*$\\]/g,"");
                this.tr_subtitle = this.tr_subtitle.replace(/['":*$\\]/g,"");
                this.tr_description = this.tr_description.replace(/['":*$\\]/g,"");
                s3.startpoint = s3.startpoint.replace(/['":*$\\]/g,"");
                s3.endpoint = s3.endpoint.replace(/['":*$\\]/g,"");
                // console.log('不可輸入特殊字元');
            }
        }
    }
});


var s2 = new Vue({
    el: '#block2',
    data: {
        activeTypeIndex: 0,
        activeBranches: 0,
        activeStation: '新竹',
        types: ['全部','景點','美食','住宿','活動'],
        ftypes: ['f_all','f_landscape','f_eat','f_stay','f_activity'],
        branches: ['內灣線','平溪線','集集線','阿里山線'],
        branches_color: ['#298736','#ce631b','#075f9b','#aa3535'],
        cards: [...data_LMcards], //去除地標卡清單也有的卡片後的所有卡片
        stationcards: [...initStationFilter], //過濾站名的 cards
        fcards: [...initStationFilter], //過濾 type 的 stationcards
        udcards: [...initStationFilter], //過濾上下的 fcards
        still_animating: false //控制支線切換 0.8 秒內只能按一次
    },
    computed: {
        activeBranchName: function(){
            let arr = ['neiwan','pinxi','gigi','alisan'];
            return arr[this.activeBranches];
        },
        types_num: function(){
            var arr = [0,0,0,0,0];
            arr[0] = this.stationcards.length;
            this.stationcards.map(cv=>{
                if(cv.type==this.ftypes[1]) arr[1]++;
                else if(cv.type==this.ftypes[2]) arr[2]++;
                else if(cv.type==this.ftypes[3]) arr[3]++;
                else if(cv.type==this.ftypes[4]) arr[4]++;
            });
            return arr;
        }
    },
    watch: {
        activeStation: function(newValue, oldValue){
            this.stationfiltercard();
            this.cardfilter(this.activeTypeIndex);
        },
        activeBranches: function(newValue, oldValue){
            var svg = d3.select('#svg1');
            var vm = this;

            svg.select('#branch_bgWrapper')
                .transition()
                .duration(400)
                .attr({
                    'opacity': 0
                });

            //刷新文字
            svg.selectAll('.stationtext').remove();
            setTimeout(()=>{
                svg.selectAll('g').append('text').attr({
                        'class':'stationtext',
                        'x': d=>{
                            var r = d[this.activeBranchName].r;
                            var x = parseInt(d[this.activeBranchName].cx);
                            var num = d[this.activeBranchName].cardnum;
                            if(r == 10){return num>9 ? x-7 : x-3;
                            }else if(r == 15){return num>9 ? x-7 : x-3;
                            }else if(r == 20){return num>9 ? x-6 : x-2;}
                        },
                        'y': d=>{
                            var r = d[this.activeBranchName].r;
                            var y = parseInt(d[this.activeBranchName].cy);
                            if(r == 10){return y+5;
                            }else if(r == 15){return y+4;
                            }else if(r == 20){return y+5;}
                        },
                        'font-size' :12,
                        'fill': d=>d[vm.activeBranchName].station==vm.activeStation?'rgba(255,255,255,.9)':'#333'

                    }).text(d=>d[this.activeBranchName].cardnum);

                svg.select('#branch_bgWrapper').attr({
                    "fill": "url(#branch_bgIMG"+(newValue+1)+")",
                    'opacity': 1
                });

            },800);

            // 圓圈與直線的動畫
            svg.selectAll('circle')
            .on('click',function(d,i){
                vm.activeStation = d[vm.activeBranchName].station;
                d3.selectAll('circle').attr('fill','#F9F7E8');
                d3.select(this).attr('fill',s2.branches_color[s2.activeBranches]);
            })
            .transition().duration(800).attr({
                'cx': d=>d[this.activeBranchName].cx,
                'cy': d=>d[this.activeBranchName].cy,
                'r': d=>d[this.activeBranchName].r,
                'opacity':d=>d[this.activeBranchName].opacity,
                'fill': d=>d[vm.activeBranchName].station==this.activeStation?s2.branches_color[s2.activeBranches]:'#F9F7E8',
                'stroke': this.branches_color[this.activeBranches]
            });
            svg.selectAll('line').transition().duration(800).attr({
                'x1': d=>d[this.activeBranchName].x1,
                'y1': d=>d[this.activeBranchName].y1,
                'x2': d=>d[this.activeBranchName].x2,
                'y2': d=>d[this.activeBranchName].y2,
                'opacity':d=>d[this.activeBranchName].opacity,
                'stroke-dasharray': d=>d[this.activeBranchName].strokeDasharray?d[this.activeBranchName].strokeDasharray:'none',
                'stroke': this.branches_color[this.activeBranches]
            });
        },
        cards: function(newValue, oldValue){
            //重新計算各站點資料量 並重畫鐵道 d3 圖
            this.calc_station_num(newValue,data_cir);
        }
    },
    methods: {
        stationfiltercard: function(){
            //將 cards 用站名過濾
            this.stationcards.splice(0);
            this.cards.map(cv=>{
                if(cv.station == this.activeStation){this.stationcards.push(cv);}
            });
        },
        cardfilter: function($i){
            //處理動態 class
            this.activeTypeIndex=$i;

            //處理 filter
            var type = this.ftypes[$i];
            this.fcards.splice(0); //清空

            if(type == 'f_all'){
                this.fcards.splice(0,0,...this.stationcards); //全部加入
            }else{
                this.stationcards.map((cv,i)=>{ //部分加入
                    if(cv.type == type){
                        this.fcards.push(cv);
                    }
                });
            }

            //備份至 udcards
            this.udcards.splice(0);
            this.udcards.splice(0,0,...this.fcards);
        },
        upcard: function(){
            let udlen = this.udcards.length;
            let flen = this.fcards.length;
            let diff = udlen - flen;
            if(diff>0){
                this.fcards.unshift(this.udcards[diff-1]);
                this.fcards.unshift(this.udcards[diff-2]);
            }
        },
        downcard: function(){
            let len = this.fcards.length;
            if(len>4){
                this.fcards.shift();
                this.fcards.shift();
            }
        },
        addtomycard: function(selecv){
            let name = selecv.name;
            //從資料清單移除
            data_LMcards.map((cv,i)=>{
                if(cv.name == name){data_LMcards.splice(i,1);}
            });
            //加到地標卡清單
            my_LMcards.push(selecv);
            s3.getcard(selecv);

            //將選到的卡片從 4 個存放位置移除            
            this.cards.map((cv,i)=>{
                if(cv.name == name){this.cards.splice(i,1);}
            });
            this.stationcards.map((cv,i)=>{
                if(cv.name == name){this.stationcards.splice(i,1);}
            });
            this.fcards.map((cv,i)=>{
                if(cv.name == name){this.fcards.splice(i,1);}
            });
            this.udcards.map((cv,i)=>{
                if(cv.name == name){this.udcards.splice(i,1);}
            });


            //處理加入地標卡時 下一步要閃亮
            $('.next_box').addClass('active');
            $('.arrow2').addClass('adding');
            setTimeout(function(){
                $('.next_box').removeClass('active');
                $('.arrow2').removeClass('adding');
            },500);

            $('.two_plus').addClass('active');
            $('.two_minus').addClass('active');
            setTimeout(function(){
                $('.two_plus').removeClass('active');
                $('.two_minus').removeClass('active');
            },500);

        },
        returncard: function(selecv){
            this.cards.push(selecv);
            this.stationfiltercard();
            this.cardfilter(this.activeTypeIndex);
        },
        branchfilter: function($i){
            //控制click後, 必須等0.8秒才能再次 click
            if(this.still_animating==false){
                this.still_animating = true;
                setTimeout(function(){
                    s2.still_animating = false;
                },800);

                this.activeBranches = $i;
            }
        },
        init_line: function(data) {
            var svg = d3.select('#svg1'); //不這樣做會讀取不到

            var item = svg.selectAll('line').data(data);
            item.exit().remove();
            item.enter().append('line');
            item.attr({
                    'x1': d=>d[this.activeBranchName].x1,
                    'y1': d=>d[this.activeBranchName].y1,
                    'x2': d=>d[this.activeBranchName].x2,
                    'y2': d=>d[this.activeBranchName].y2,
                    'fill':'none',
                    'stroke': this.branches_color[this.activeBranches],
                    'stroke-width':3,
                    'stroke-dasharray': d=>d[this.activeBranchName].strokeDasharray?d[this.activeBranchName].strokeDasharray:'none'
                });

        },
        update_circle: function(data) {
            var svg = d3.select('#svg1'); //不這樣做會讀取不到
            svg.selectAll('g').remove();

            var item = svg.selectAll('g').data(data);
            item.exit().remove();
            item.enter().append('g');
            var vm = this;
            var g = svg.selectAll('g');

            g.append('circle').attr({
                    'cx': d=>d[this.activeBranchName].cx,
                    'cy': d=>d[this.activeBranchName].cy,
                    'r': d=>d[this.activeBranchName].r,
                    'fill': d=>d[vm.activeBranchName].station==this.activeStation?s2.branches_color[s2.activeBranches]:'#F9F7E8',
                    'stroke': this.branches_color[this.activeBranches],
                    'stroke-width':3
                });

            g.on('click',function(d,i){
                    vm.activeStation = d[vm.activeBranchName].station;
                    d3.selectAll('circle').attr('fill','#F9F7E8');
                    d3.select(this).select('circle').attr('fill',s2.branches_color[s2.activeBranches]);

                    //字體顏色設定
                    d3.selectAll('text').attr('fill','#333');
                    d3.select(this).select('text').attr('fill',d=>d[vm.activeBranchName].station==vm.activeStation?'rgba(255,255,255,.9)':'#333');
                });

            g.append('text').attr({
                    'class':'stationtext',
                    'x': d=>{
                        var r = d[this.activeBranchName].r;
                        var x = parseInt(d[this.activeBranchName].cx);
                        var num = d[this.activeBranchName].cardnum;
                        if(r == 10){return num>9 ? x-7 : x-3;
                        }else if(r == 15){return num>9 ? x-7 : x-3;
                        }else if(r == 20){return num>9 ? x-6 : x-2;}
                    },
                    'y': d=>{
                        var r = d[this.activeBranchName].r;
                        var y = parseInt(d[this.activeBranchName].cy);
                        if(r == 10){return y+5;
                        }else if(r == 15){return y+4;
                        }else if(r == 20){return y+5;}
                    },
                    'font-size':12,
                    'fill': d=>d[vm.activeBranchName].station==vm.activeStation?'rgba(255,255,255,.9)':'#333'
                }).text(d=>d[this.activeBranchName].cardnum);

        },
        calc_station_num: function(cards, data){
            var four = ['neiwan','pinxi','gigi','alisan'];
            var output_data = data;
            var chinese = ['新竹','北新竹','千甲','新莊','竹中','上員','榮華','竹東','橫山','九讚頭','合興','富貴','內灣','瑞芳','猴硐','三貂嶺','大華','十分','望古','嶺腳','平溪','菁桐','二水','源泉','濁水','龍泉','集集','水里','車埕','嘉義','北門','竹崎','交力坪','奮起湖','神木','阿里山','沼平','祝山'];
            var counter = [...new Array(chinese.length)].fill(0);
            //計算每站的資料量
            cards.map((cv,i)=>{
                var i = chinese.indexOf(cv.station);
                counter[i]++;
            });
            //更新 data
            output_data.map((cv,i)=>{
                for(var j=0; j<4; j++){
                    if( cv[four[j]].station !=''){
                        var index = chinese.indexOf( cv[four[j]].station );
                        cv[four[j]].cardnum = counter[index];
                    }               
                }

            });

            this.update_circle(output_data);//根據資料量 重畫鐵道 d3 圖
        },
        typeicon_filesourse: function(type){
            return "icon/free/"+type+".png";
        },
        lookCardDetail: function(card){
            var str = card.url.substr(10); // 去除 'images/LM/'
            var data = {};
            data['LM_no'] = card.LM_no;
            data['MEM_no'] = card.MEM_no;
            data['branch'] = card.branch;
            data['station'] = card.station;
            data['name'] = card.name;
            data['type'] = card.type;
            data['isFixEvent'] = card.isFixEvent;
            data['subtitle'] = card.subtitle;
            data['phone'] = card.phone;
            data['cellphone'] = card.cellphone;
            data['address'] = card.address;
            data['longitude'] = card.longitude;
            data['latitude'] = card.latitude;
            data['opentime'] = card.opentime;
            data['avgcost'] = card.avgcost;
            data['staycost1'] = card.staycost1;
            data['staycost2'] = card.staycost2;
            data['staycost4'] = card.staycost4;
            data['staycostadd1'] = card.staycostadd1;
            data['adultcost'] = card.adultcost;
            data['childcost'] = card.childcost;
            data['url'] = str;

            $('#LC_container').empty();
            //JQuery .append() append PHP code, null 是要傳給 php 的資料, 
            //php 用$var1 = $_GET['var1'];接收, data 是 php echo 回來的資料
            $.post("LMcard.php", data, function(data) {
                // console.log(data);
                $('#LC_container').append(data);
            });
        }
    }
});

//渲染初始畫面
s2.init_line(data_line);
s2.calc_station_num(s2.cards,data_cir);





var s3 = new Vue({
    el: '#block3',
    data: {
        activeTypeIndex: 0,
        activeDayIndex: 0,
        types: ['全部','景點','美食','住宿','活動'],
        ftypes: ['f_all','f_landscape','f_eat','f_stay','f_activity'],
        cards: [...my_LMcards],
        fcards: [...my_LMcards],
        udcards: [...my_LMcards],
        items: [[]], //標籤存放
        days: ['第1天',''],
        draggingday: '', //拖曳中的天數 cv
        draggingdayI: 0, //拖曳中的天數 i
        dragIdentity: '',
        newtag: '',
        clicked_tag: '', //預防刪除tag 時, 同時點擊 2 次以上
        selftab_switch: false, //自訂標籤區塊開關
        selfbox: false, //自訂標籤輸入框開關
        startpoint: '',
        endpoint: '',
        gif01: true,
        gif02: false,
        gif_mask: true
    },
    computed: {
        itemslength: function(){
            return this.items[this.activeDayIndex].length;
        },
        types_num: function(){
            var arr = [0,0,0,0,0];
            arr[0] = this.cards.length;
            this.cards.map(cv=>{
                if(cv.type==this.ftypes[1]) arr[1]++;
                else if(cv.type==this.ftypes[2]) arr[2]++;
                else if(cv.type==this.ftypes[3]) arr[3]++;
                else if(cv.type==this.ftypes[4]) arr[4]++;
            });
            return arr;
        }
    },
    watch: {
        items: function(){ //s4 與 s3 的 items 連動
            s4.items = this.items;
        },
        days: function(){ //s4 與 s3 的 days 連動
            s4.days = this.days;

            //如果 s4.days_date 有資料, 就刷新日期
            s4.days_date.length>0 ? s4.input_date() : null;
            
        }
    },
    methods: {
        cardfilter: function($i){
            //關閉自訂標籤覆蓋區塊
            this.selftab_switch = false;
            //處理動態 class
            this.activeTypeIndex=$i;

            //處理 filter
            var type = this.ftypes[$i];
            this.fcards.splice(0); //清空

            if(type == 'f_all'){
                this.fcards.splice(0,0,...this.cards); //全部加入
            }else{
                this.cards.map((cv,i)=>{ //部分加入
                    if(cv.type == type){
                        s3.fcards.push(cv);
                    }
                });
            }

            //備份至 udcards
            this.udcards.splice(0);
            this.udcards.splice(0,0,...this.fcards);

            //刪除右邊tag時, 確保自訂標籤覆蓋區塊打開
            if($i==5) this.selftab_switch = true;
        },
        upcard: function(){
            let udlen = this.udcards.length;
            let flen = this.fcards.length;
            let diff = udlen - flen;
            if(diff>0){
                this.fcards.unshift(this.udcards[diff-1]);
                this.fcards.unshift(this.udcards[diff-2]);
            }
        },
        downcard: function(){
            let len = this.fcards.length;
            if(len>4){
                this.fcards.shift();
                this.fcards.shift();
            }
        },
        deleteCardFromStored: function(name){
            //將選到的卡片從 3 個存放位置移除            
            this.cards.map((cv,i)=>{
                if(cv.name == name){this.cards.splice(i,1);}
            });
            this.fcards.map((cv,i)=>{
                if(cv.name == name){this.fcards.splice(i,1);}
            });
            this.udcards.map((cv,i)=>{
                if(cv.name == name){this.udcards.splice(i,1);}
            });            
        },
        addtodatacard: function(selecv){
            let name = selecv.name;
            //從地標卡清單移除
            my_LMcards.map((cv,i)=>{
                if(cv.name == name){my_LMcards.splice(i,1);}
            });
            //加到資料清單
            data_LMcards.push(selecv);
            s2.returncard(selecv);

            this.deleteCardFromStored(name);

            //閃動提示特效
            $('.arrow1').addClass('adding');
            setTimeout(function(){
                $('.arrow1').removeClass('adding');
            },500);

            $('.three_plus').addClass('active');
            $('.three_minus').addClass('active');
            setTimeout(function(){
                $('.three_plus').removeClass('active');
                $('.three_minus').removeClass('active');
            },500);

        },
        getcard: function(selecv){
            this.cards.push(selecv);
            this.fcards.push(selecv);
            this.udcards.push(selecv);
        },
        candrop: function(event){ //超過七個地標就不能再放了
            if( (this.items[this.activeDayIndex].length<7 && this.dragIdentity=='card') || this.dragIdentity=='box' ){
                event.preventDefault();
                d3.selectAll('.line').classed('dashed',true);
            }
        },
        drag: function(event, i) { //卡片拖曳
            event.dataTransfer.setData("text", i);
            this.dragIdentity = 'card';
        },
        boxdrag: function(event, i) { //標籤拖曳
            event.dataTransfer.setData("text", i);
            this.dragIdentity = 'box';
        },
        drop: function(event, target_i) {
            d3.selectAll('.line').classed('dashed',false);
            // event.preventDefault();
            let i = event.dataTransfer.getData("text");

            if(i.length>2){ //從 左區 拖曳到 右區
                let i_cv = i;
                let arr = i_cv.split('* *');
                arr[1] = JSON.parse(arr[1]);

                this.deleteCardFromStored(arr[1].name);
                
                this.items[this.activeDayIndex].splice(target_i, 0, arr[1]);
                this.cardfilter(this.activeTypeIndex);//刷新

            }else if(i>target_i){  //由後往前拖曳
                let cv = this.items[this.activeDayIndex][i];
                this.items[this.activeDayIndex].splice(i, 1);
                this.items[this.activeDayIndex].splice(target_i, 0, cv);

            }else if(i<target_i){  //由前往後拖曳
                let cv = this.items[this.activeDayIndex][i];
                this.items[this.activeDayIndex].splice(i, 1);
                this.items[this.activeDayIndex].splice(target_i-1, 0, cv);
            }
        },
        last_drop: function(event) {
            d3.selectAll('.line').classed('dashed',false);
            // event.preventDefault();
            let i = event.dataTransfer.getData("text");

            if(i.length>2){  //從 左區 拖曳到 右區
                let arr = i.split('* *');
                arr[1] = JSON.parse(arr[1]);

                this.deleteCardFromStored(arr[1].name);

                this.items[this.activeDayIndex].push(arr[1]);
                this.cardfilter(this.activeTypeIndex);//刷新
            }else{  //和最後一個地標交換位置
                let cv = this.items[this.activeDayIndex][i];
                this.items[this.activeDayIndex].splice(i, 1);
                this.items[this.activeDayIndex].push(cv);
            }
        },
        carddrag: function(event, i, cv){
            cv = JSON.stringify(cv);
            event.dataTransfer.setData("text", i+'* *'+cv);
            this.dragIdentity = 'card';
        },
        delete_box: function(cv, i){
            //預防刪除tag 時, 同時點擊 2 次以上
            if(cv.name != this.clicked_tag){
                this.items[this.activeDayIndex].splice(i, 1);
                if(cv.type != 'f_tag'){
                    this.cards.push(cv);
                    this.fcards.push(cv);
                    this.udcards.push(cv);
                    this.cardfilter(this.activeTypeIndex);//刷新                
                }
            }
            //紀錄這次 click 的 tagname
            this.clicked_tag = cv.name;
            setTimeout(function(){s3.clicked_tag='';},1000);
        },
        empty_drop: function($event){
            d3.selectAll('.line').classed('dashed',false);
            let i_cv = event.dataTransfer.getData("text");
            let arr = i_cv.split('* *');
            arr[1] = JSON.parse(arr[1]);

            this.deleteCardFromStored(arr[1].name);
                
            this.items[this.activeDayIndex].push(arr[1]);
            this.cardfilter(this.activeTypeIndex);//刷新
        },
        dayFilterOrAdd: function(day, $i){
            if(day==='' && $i<=7){ //加一天
                $i==7
                ? this.days.splice($i, 1, '第'+($i+1)+'天')
                : this.days.splice($i, 0, '第'+($i+1)+'天');
                this.items.push([]);
                this.activeDayIndex = $i;
                return;
            }
            this.activeDayIndex = $i;
        },
        daydrag: function($event,$i,day){
            this.draggingday = day;
            this.draggingdayI = $i;
            this.dragIdentity = 'day';
        },
        //日期 tabs 垃圾桶 drop 判斷
        trashcandrop: function($event){
            let day = this.draggingday;
            if( (day[0]=='第' && day!='第1天' && this.dragIdentity=='day') || this.dragIdentity=='box'){
                event.preventDefault();
                d3.select('.fa-trash').style({'background-color':'#e43b36','color':'rgba(255,255,255,.9)'});
            }
        },
        //日期 tabs 交換 drop 判斷
        daycandrop: function($event){
            let day = this.draggingday;
            let text = $event.target.innerHTML;
            //空白標籤不能交換, 也不能跟自己交換
            if(day[0]=='第' && this.dragIdentity=='day' && text && text!=day){ 
                event.preventDefault();
            }
        },
        deletedayorbox: function($event){
            d3.select('.fa-trash').style({'background-color':'transparent','color':'#333'});
            if(this.dragIdentity=='day'){
                let i = this.draggingdayI;

                this.items[i].map(cv=>{
                    if(cv.type!='f_tag'){
                        this.cards.push(cv);
                        this.fcards.push(cv);
                        this.udcards.push(cv);                        
                    }                
                });

                this.cardfilter(this.activeTypeIndex);//刷新

                this.days.splice(i, 1);
                this.items.splice(i, 1);

                //刷新天數排序; 如果是八天刪除一天後變成七天, 要另外特別處理
                var len = this.days.length;
                var newdays = [];
                var lastday = this.days[6];

                if( (len<7) || (len==7 && lastday=='') ){ //也要考慮七天+空字串(共八個), 刪去一天還是7個, 所以最後一個是空字串
                    newdays = this.days.map((cv,i)=>{
                        return i==(len-1) ? '': '第'+(i+1)+'天';
                    });

                    this.days.splice(0,len,...newdays);
                    //手動指定刪除後的activeDayIndex, 否則當移除最後一天時, activeDayIndex指向空字串的標籤頁會導致錯誤
                    this.activeDayIndex = this.activeDayIndex==(len-1) ? len-2 : this.activeDayIndex;

                }else if(len==7 && lastday!=''){
                    //八天刪除一天後變成七天的特殊情況, 所以最後一個不是空字串
                    newdays = this.days.map((cv,i)=>{
                        return '第'+(i+1)+'天';
                    });
                    newdays.push('');

                    this.days.splice(0,len,...newdays);
                    //手動指定刪除後的activeDayIndex, 否則當移除最後一天時, activeDayIndex指向空字串的標籤頁會導致錯誤
                    this.activeDayIndex = this.activeDayIndex==len ? len-1 : this.activeDayIndex;
                }

            }else if(this.dragIdentity=='box'){ // 刪除標籤
                let i = event.dataTransfer.getData("text");
                let cv = this.items[this.activeDayIndex][i];
                this.delete_box(cv, i);
            }
        },
        //日期 tabs 交換
        changeday: function($event){
            let i = this.draggingdayI;
            let target_i = $event.target.innerHTML;
                target_i = parseInt(target_i[1])-1;
            let change_a = this.items[i];
            let change_b = this.items[target_i];
            this.items.splice(i,1,change_b);
            this.items.splice(target_i,1,change_a);
            this.activeDayIndex = target_i;
        },
        typeicon_filesourse: function(type){
            return "icon/free/"+type+".png";
        },
        addnewtag: function(){
            //標籤不能超過 7 個
            if(this.itemslength<7 && this.newtag!=''){
                let tag = {"LM_no": 1, "name":this.newtag, "type":"f_tag"};
                this.items[this.activeDayIndex].splice(0, 0, tag);
                this.newtag='';                
            }
        },
        stylereset: function(){
            //拖曳取消後的垃圾桶 css 清除
            d3.select('.fa-trash').style({'background-color':'transparent','color':'#333'});
            //拖曳取消後的 line css 清除
            d3.selectAll('.line').classed('dashed',false);
        },
        show_selftags: function(){
            this.activeTypeIndex = 5;
            this.selftab_switch = true;
        },
        gif_switch: function(num){
            if(num=="01"){
                this.gif02 = false;
                this.gif01 = this.gif01 ? false:true;
                this.gif_mask= this.gif01 ? true:false;

            }else if(num=="02"){
                this.gif01 = false;
                this.gif02 = this.gif02 ? false:true;
                this.gif_mask= this.gif02 ? true:false;
            }
        }
    }
});



var s4 = new Vue({
    el: '#block4',
    data: {
        activeDayIndex: 0,
        items: [[]],
        days: ['第1天',''],
        days_date: [],
        calcs_total: 0,
        tr_startDate: '',
        adult: 0,
        child: 0,
        udcalcs: [],
        arcdata: [{'money':0},{'money':0},{'money':0}],
        other_money: 0
    },
    computed: {
        calcs: function(){
            var arr = s3.items;
            var num_a = this.adult;
            var num_c = this.child;
            var num = num_a + num_c;
            var output = this.other_money==0?[]:[{'name':'其他金額', 'type':'其他', 'cost':this.other_money+' 元'}];
            var total = this.other_money;
            if(num>0){
                arr.map((cv,i)=>{
                    cv.map((cv2,i2)=>{
                        if(cv2.type=='f_eat' && cv2.avgcost){
                            total += cv2.avgcost*num;
                            output.push({'name':cv2.name, 'type':'美食', 'cost':cv2.avgcost*num+' 元'});

                        }else if(cv2.type=='f_landscape' && cv2.adultcost && cv2.childcost){
                            let cost = cv2.adultcost*num_a + cv2.childcost*num_c;
                            total += cost;
                            output.push({'name':cv2.name, 'type':'門票', 'cost':cost+' 元'});
                        
                        }else if(cv2.type=='f_stay'){
                            if(num==1){
                                total += cv2.staycost1; //1人房費用
                                output.push({'name':cv2.name, 'type':'住宿', 'cost':cv2.staycost1+' 元'});
                            }else{
                                let n4 = Math.floor(num/4); //4人房數量
                                let n4_remain = num%4;
                                let n2 = Math.floor(n4_remain/2); //2人房數量
                                let n2_remain = n4_remain%2; //1人加床數量
                                let cost = cv2.staycost4*n4 + cv2.staycost2*n2 + cv2.staycostadd1*n2_remain;
                                total += cost;
                                output.push({'name':cv2.name, 'type':'住宿', 'cost':cost+' 元'});
                            }
                        }
                        
                    });
                });                
            }
            //刷新 this.arcdata
            var temp = [{'money':0},{'money':0},{'money':0},{'money':this.other_money}]; //門票, 美食, 住宿
            output.map((cv,i)=>{
                if(cv.type == '門票'){
                    temp[0].money += parseInt(cv.cost);
                }else if(cv.type == '美食'){
                    temp[1].money += parseInt(cv.cost);
                }else if(cv.type == '住宿'){
                    temp[2].money += parseInt(cv.cost);
                }
            });
            this.arcdata = temp;

            //刷新 this.calcs_total
            this.calcs_total = total>999999 ? 999999 : total;

            //更新 othermoney
            // output.push();
            
            return output;
        },
        itemslength: function(){
            return this.items[this.activeDayIndex].length;
        }
    },
    watch: {
        calcs: function(newValue, oldValue){
            //刷新 udcalcs; calcs 變動時, 讓 udcalcs 與 calcs 同步
            this.udcalcs.splice(0);
            this.udcalcs.splice(0,0,...this.calcs);
        },
        calcs_total: function(newValue, oldValue){
            var ttl = d3.select('#f4_ttl');

            ttl.transition()
                .duration(1000)
                .tween("number", function() {
                    var i = d3.interpolateRound(oldValue, newValue);
                    return function(t) {
                        this.textContent = i(t);
                    };
                });
        },
        arcdata: function(newValue, oldValue){
            let oldhasdata = oldValue[0].money || oldValue[1].money || oldValue[2].money || oldValue[3].money;
            let newhasdata = newValue[0].money || newValue[1].money || newValue[2].money || newValue[3].money;

            if( !oldhasdata && newhasdata ){
                //沒資料到有資料
                this.svgarc_update(newValue);

            }else if( oldhasdata && !newhasdata ){
                //有資料到沒資料
                svg2.selectAll("g.arc").remove();

            }else if(newValue[0].money!=oldValue[0].money || newValue[1].money!=oldValue[1].money || newValue[2].money!=oldValue[2].money || newValue[3].money!=oldValue[3].money){
                //新舊資料不相同時才執行
                var vm = this;
                function animate(time){
                    requestAnimationFrame(animate);
                    TWEEN.update(time);
                }
                new TWEEN.Tween({money1: oldValue[0].money, money2: oldValue[1].money, money3: oldValue[2].money, money4: oldValue[3].money})
                        .easing(TWEEN.Easing.Quadratic.Out)
                        .to({money1: newValue[0].money, money2: newValue[1].money, money3: newValue[2].money, money4: newValue[3].money},600)
                        .onUpdate(function(){
                            var m1 = parseInt(this.money1.toFixed(0));
                            var m2 = parseInt(this.money2.toFixed(0));
                            var m3 = parseInt(this.money3.toFixed(0));
                            var m4 = parseInt(this.money4.toFixed(0));
                            vm.svgarc_update([{'money':m1},{'money':m2},{'money':m3},{'money':m4}]);
                        })
                        .start();
                animate();
            }
        }
    },
    methods: {
        dayFilter: function(day, $i){
            this.activeDayIndex = $i;
        },
        upcalc: function(){
            let udlen = this.udcalcs.length;
            let clen = this.calcs.length;
            let diff = clen - udlen;
            if(diff>0){
                this.udcalcs.unshift(this.calcs[diff-1]);
            }
        },
        downcalc: function(){
            let len = this.udcalcs.length;
            if(len>5){
                this.udcalcs.shift();
            }
        },
        svgarc_update: function(data){
            svg2.selectAll("g.arc").remove();

            var dataset = data;
            var pie = d3.layout.pie().value(d=>d.money); 
            var arcs = svg2.selectAll("g.arc")   
                            .data(pie(dataset))
                            .enter()   
                            .append("g")   
                            .attr({
                                "class": "arc",
                                "transform": "translate(" + outerRadius + "," + outerRadius + ")"
                            });

            arcs.append("path")   
                .attr({
                    "fill": (d,i)=>color(i),
                    "d": arc
                });   
               
            arcs.append("text") 
                .attr({ //設定文字在各區塊中央 
                    "transform": d=>"translate(" + arc.centroid(d) + ")",
                    "text-anchor": "middle"
                })   
                .text((d)=> d.value==0 ? '':d.value); //如果費用是 0 元, 就不要顯示在圖表上

        },
        input_disable: function($event, s){
            //避免甜甜圈有資料到沒資料 按太快會造成甜甜圈沒被刪除的問題
            $event.target.readOnly = true;
            setTimeout(()=>$event.target.readOnly = false, s);
        },
        input_date: function(){
            //刪除舊資料
            this.days_date.splice(0);

            var date = this.tr_startDate; //第一天的文字格式 2016-11-08
            var len = this.days[this.days.length-1] == ''? this.days.length -1 : this.days.length;
            var s = Date.parse(date); //第一天的毫秒數

            for(let i=0; i<len; i++){
                let s_text = new Date(s); //第 n 天的毫秒數 轉成 日期文字串
                //轉成文字格式 2016-11-08T00:00:00.000Z 切除 T 後面的文字
                let mydate = s_text.toISOString().substr(0,10).split('-').splice(1).join('/');

                this.days_date.push(mydate);

                s += 86400000; //加一天的毫秒數
            }
        },
        validate: function($event,type){
            if(type=='othermoney'){
                var money = parseInt($event.target.value || 0);

                if(money<=0){
                    $event.target.value = 0;
                    this.other_money = 0;
                }else if(money>99999){
                    $event.target.value = 99999;
                    this.other_money = 99999;
                }else{
                    $event.target.value = money;
                    this.other_money = money;
                }
            }else if(type=='child_num'){
                var child = parseInt($event.target.value || 0);

                if(child<=0){
                    $event.target.value = 0;
                    this.child = 0;
                }else if(child>20){
                    $event.target.value = 20;
                    this.child = 20;
                }else{
                    $event.target.value = child;
                    this.child = child;
                }
            }else if(type=='adult_num'){
                var adult = parseInt($event.target.value || 0);

                if(adult<=0){
                    $event.target.value = 0;
                    this.adult = 0;
                }else if(adult>20){
                    $event.target.value = 20;
                    this.adult = 20;
                }else{
                    $event.target.value = adult;
                    this.adult = adult;
                }
            }
        },
        update_money: function($event,type){
            if(type=='othermoney'){
                var money = $event.target.value || 0;
                this.other_money = parseInt(money);

            }else if(type=='child_num'){
                var child = $event.target.value || 0;
                this.child = parseInt(child);
                
            }else if(type=='adult_num'){
                var adult = $event.target.value || 0;
                this.adult = parseInt(adult);

            }
        },
        saveToMyFree: function(){

            //驗證
            var ar = this.items.map(cv=>cv.length);
                // console.log(ar);
                //檢查是不是中間有天數是沒有任何地標的?
                var meet_zero = false, meet_n_after_zero = false;
                ar.map(cv=>{
                    if(cv==0){
                        meet_zero = true;
                    }else if(meet_zero && cv!=0){
                        meet_n_after_zero = true;
                    }
                });

            if(ar[0]==0){
                alert('行程第 1 天至少需要 1 個地標！');
                return;
            }else if(meet_n_after_zero){
                alert('行程中間不可以有 1 天沒有任何地標！');
                return;
            }

            if(s1.tr_name) s1.tr_name = s1.tr_name.replace(/\r/g,'').replace(/\n/g,'');
            if(s1.tr_subtitle) s1.tr_subtitle = s1.tr_subtitle.replace(/\r/g,'').replace(/\n/g,'');
            if(this.tr_startDate) this.tr_startDate = this.tr_startDate.replace(/\r/g,'').replace(/\n/g,'');
            if(s3.startpoint) s3.startpoint = s3.startpoint.replace(/\r/g,'').replace(/\n/g,'');
            if(s3.endpoint) s3.endpoint = s3.endpoint.replace(/\r/g,'').replace(/\n/g,'');


            var storage = sessionStorage;
            var tr_data = { 'MEM_no':storage["MEM_no"],
                            'tr_name':s1.tr_name || "來旅遊，找好遊",
                            'tr_subtitle':s1.tr_subtitle || "HOYO旅遊一級棒",
                            'tr_description':s1.tr_description || "",
                            'tr_startDate':this.tr_startDate || "2016-12-12",
                            'startpoint': s3.startpoint || "",
                            'endpoint': s3.endpoint || "",
                            'adult': this.adult || 1,
                            'child': this.child || 0,
                            'other_money': this.other_money || 0,
                            'items': this.items
                            };


            //刪除收藏包
            if(storage["wishList"] && storage.getItem('wishList')!=""){
                var listValue = storage.getItem('wishList');
                var listArr = listValue.substr(0,listValue.length-1).split(',')
                var listNum = listArr.length;
                for(var i=0; i<listNum; i++){
                    var locationName = listArr[i];
                    storage.removeItem(locationName);                          
                }
                storage.setItem("wishList",""); 
            }

            if(storage["MEM_no"]){ //已登入

                //修改行程            
                if(storage['modify_myfree_by_TRno']){
                    tr_data.TR_no = storage['modify_myfree_by_TRno'];
                    storage.removeItem('modify_myfree_by_TRno');
                    // console.log(tr_data);

                    $.post("freeModify.php", tr_data, function(data) {
                        var data = JSON.parse(data);
                        var storage = sessionStorage;
                        storage.setItem('freeModify_tr_name', data.TR_name);
                        storage.setItem('freeModify_tr_no', data.TR_no);

                        // console.log(data);
                        location.replace("freeModify_complete.php");
                    });

                }else{
                    $.post("freeSave.php", tr_data, function(data) {
                        var data = JSON.parse(data);
                        var storage = sessionStorage;
                        storage.setItem('freeSave_tr_name', data.TR_name);
                        storage.setItem('freeSave_tr_no', data.TR_no);

                        // console.log(data);
                        location.replace("free_complete.php");
                    });                    
                }


            }else{ //尚未登入

                // ============================================
                storage.setItem('freeSave_until_login',JSON.stringify(tr_data));

                alert('請先登入好遊會員!');

                // 儲存來源資訊:
                storage.setItem('G1_whereAmIFrom','free_complete.php');
                location.href ='memlogin.php';  //有需要轉頁面再加這行

            }

        }
    }
});



var w = 240;   
var h = 240; 
var outerRadius = w/2 ;
var innerRadius = w/2 - 50;
var arc = d3.svg.arc()   
            .innerRadius(innerRadius)   
            .outerRadius(outerRadius);   
var color = d3.scale.ordinal()
            .range(["#e57751", "#81ba6e", "#b87c9f", "#edb61b"]);
var svg2 = d3.select(".f4_svgwrapper").append("svg")   
            .attr({
                "id": 'svg2',
                "width": w,
                "height": h
            }); 


//給予金額和人數預設值
    s4.adult = 1;
    s4.child = 0;
    s4.other_money = 0;
    $('.pplnumAdult').val(1);
    $('.pplnumChild').val(0);
    $('.othermoney').val(0);




// 下一步按鈕
d3.selectAll('.next_box').data([1,2,3])
    .on('click',function(d,i){
        svg3.selectAll('g').classed("active", false);
        svg3.select('.arrow'+d).classed("active", true);
        $('#wrapper').stop().velocity({'left': (-1*d)*1136+'px'},500);        
    });






// 任何其他行程(套裝或遊記) 轉換成 自由行   或   修改行程
var storage = sessionStorage;
//storage.setItem('transfer_to_free_by_TRno',21); //測試用
//storage.setItem('modify_myfree_by_TRno',2); //測試用

if(storage['transfer_to_free_by_TRno'] || storage['modify_myfree_by_TRno']){

    var trno;

    if(storage['transfer_to_free_by_TRno']){

        trno = parseInt(storage['transfer_to_free_by_TRno']);
        storage.removeItem('transfer_to_free_by_TRno');
        //修改儲存按鈕
        $('.save').text('修改成我的行程');

        var the_tr = faketr.find(cv=>cv.TR_no==trno);
        $('.state_bar').empty();
        $('.state_bar').append("<p>您正在將他人行程 <span class='underline'>#"+trno+" "+the_tr.TR_name+"</span> <span>修改</span>成『我的行程』</p>");

    }else if(storage['modify_myfree_by_TRno']){

        trno = parseInt(storage['modify_myfree_by_TRno']);
        //修改儲存按鈕
        $('.save').text('修改我的行程');

        var the_tr = faketr.find(cv=>cv.TR_no==trno);
        $('.state_bar').empty();
        $('.state_bar').append("<p>您正在<span>修改</span>『我的行程』 <span class='underline'>#"+trno+" "+the_tr.TR_name+"</span></p>");

    }


    var the_tr = faketr.find(cv=>cv.TR_no==trno);
    var the_lmtr = fakelmtr.filter(cv=>cv.TR_no==trno);


    var the_items = [];
    the_lmtr.map((cv,i)=>{
        var card = transfer_LMcards.find(el=>el.LM_no==cv.LM_no);
        if(the_items[cv.LMTR_day-1]){
            the_items[cv.LMTR_day-1].push(card);
        }else{
            the_items.push([card]);
        }
    });
    // console.log(the_items);

    var the_days = the_items.map((cv,i)=>'第'+(i+1)+'天');
    the_days.push('');
    // console.log(the_days);

    // 重新設定初始值
    s1.tr_name = the_tr.TR_name ;
    s1.tr_subtitle = the_tr.TR_subtitle ;
    s1.tr_description = the_tr.TR_description ;
    s4.tr_startDate = the_tr.TR_startDate ;
    s3.startpoint = the_tr.TR_startTag ;
    s3.endpoint = the_tr.TR_endTag ;
    s4.adult = the_tr.TR_adultNumber ;
    s4.child = the_tr.TR_childNumber ;
    s4.other_money = the_tr.TR_otherMoney ;
    s3.items = the_items ;
    s4.items = the_items ;
    s3.days = the_days ;
    s4.days = the_days ;

    //沒有v-model, 畫面必須另外顯示
    $('.pplnumAdult').val(the_tr.TR_adultNumber);
    $('.pplnumChild').val(the_tr.TR_childNumber);
    $('.othermoney').val(the_tr.TR_otherMoney);

    //更新日期
    s4.input_date();

}



//移除 loading 遮罩
$('div').remove('.load_cover');



//自動移動到某一步驟
//storage.setItem('free_move_to_step',3); //測試用
if(storage['free_move_to_step']){
    var i = parseInt(storage['free_move_to_step'])-1;
    svg3.selectAll('g').classed("active", false);
    svg3.select('.arrow'+i).classed("active", true);
    $('#wrapper').stop().velocity({'left': (-1*i)*1136+'px'},500);

    storage.removeItem('free_move_to_step');
}


//關閉動態教學 gif 圖案
$('#block3').on('click',function(){
    s3.gif01= false;
    s3.gif02= false;
    s3.gif_mask= false;
});

// hover 後, 出現說明文字
$("gif01_i").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "pink");
});




//input hover 邊框會兩個框框錯開
//d3背景地圖圖片
//天數標籤交換特效
//地標卡右上角查看地標卡簡介的放大鏡按鈕 LINK

//四個箭頭的 d3 膨脹效果

//tag 點兩次加入行程!?



// }); // jQuery.ready