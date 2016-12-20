
var my_LMcards = [];
//  my_LMcards 有的地標,  data_LMcards 也有的話要移除
// my_LMcards.map((cv,i)=>{
//     data_LMcards.map((cv2,i2)=>{
//         if(cv.name==cv2.name){data_LMcards.splice(i2,1)}
//     });
// });



var fm1 = new Vue({
    el: '#fm_block1',
    data: {
        tr_name: '',
        tr_subtitle: '',
        tr_description: '',
        startpoint: '',
        endpoint: '',
        tr_startDate: '',
        adult: 0,
        child: 0,
        other_money: 0
    },
    methods: {
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
        }

    }
});

var fm2 = new Vue({
    el: '#fm_block2',
    data: {
        activeBranches: 0,
        activeStation: '新竹',
        activeTypeIndex: 0,
        branches: ['內灣線','平溪線','集集線','阿里山線'],
        types: ['景點','美食','住宿','活動'],
        ftypes: ['f_landscape','f_eat','f_stay','f_activity'],
        neiwan: ['新竹','北新竹','千甲','新莊','竹中','上員','榮華','竹東','橫山','九讚頭','合興','富貴','內灣'],
        pinxi: ['瑞芳','猴硐','三貂嶺','大華','十分','望古','嶺腳','平溪','菁桐'],
        gigi: ['二水','源泉','濁水','龍泉','集集','水里','車埕'],
        alisan: ['嘉義','北門','竹崎','交力坪','奮起湖','神木','阿里山','沼平','祝山'],
        btn_branch_on: false,
        btn_station_on: false,
        btn_type_on: false,
        cards: [...data_LMcards], //去除地標卡清單也有的卡片後的所有卡片
    },
    computed: {
        filted_cards: function(){
            var filtedcards = [];
            this.cards.map((cv,i)=>{
                if(cv.station == this.activeStation && cv.type == this.ftypes[this.activeTypeIndex]){
                    filtedcards.push(cv);
                }
            });
            return filtedcards;
        }
    },
    methods: {
        showpanel: function($event,btn_on){
            $event.stopPropagation();
            if(btn_on == 'branch'){
                this.btn_branch_on = !this.btn_branch_on;
                this.btn_station_on = false;
                this.btn_type_on = false;
            }else if(btn_on == 'station'){
                this.btn_station_on = !this.btn_station_on;
                this.btn_branch_on = false;
                this.btn_type_on = false;
            }else if(btn_on == 'type'){
                this.btn_type_on = !this.btn_type_on;
                this.btn_branch_on = false;
                this.btn_station_on = false;
            }            
        },
        activechange: function(type,cv,i){
            if(type == 'branch'){
                this.activeBranches = i;
                this.btn_branch_on = !this.btn_branch_on;

                //站點也要換成該支線的第一站
                let first = ['新竹','瑞芳','二水','嘉義'];
                this.activeStation = first[i];

            }else if(type == 'station'){
                this.activeStation = cv;
                this.btn_station_on = !this.btn_station_on;

            }else if(type == 'type'){
                this.activeTypeIndex = i;
                this.btn_type_on = !this.btn_type_on;

            }
        },
        addtomycard: function(card, $i){
            this.cards.map((cv,i)=>{
                if(card.name == cv.name){
                    this.cards.splice(i,1);
                }
            });            
            fm3.mycards.push(card);
        },
        panelclose: function($event){
            this.btn_branch_on = false;
            this.btn_station_on = false;
            this.btn_type_on = false;
        },
        typeicon_filesourse: function(type){
            return "icon/free/"+type+".png";
        }
    }
});




var fm3 = new Vue({
    el: '#fm_block3',
    data: {
        mycards: [...my_LMcards],
        modify_cards: [],
        items: [...new Array(8)].fill([...new Array(7)].fill(0)),
        days: [1,2,3,4,5,6,7,8],
        orders: [1,2,3,4,5,6,7]
    },
    computed: {
        // mycards_dayorder 是為了要給 mycards 的 dayorder 一個 default值
        mycards_dayorder: function(){
            var mycards_do = this.mycards;
            var counter = [...new Array(9)].fill(0); //0不算, 1就是儲存第一天的次數
            var usable = [0,1,2,3,4,5,6,7]; //還沒滿7, 還可以使用的天數

            mycards_do.map(cv=>{
                //同一天 不得超過 7 個
                if(cv.day){
                    counter[cv.day]++;
                }else{
                    cv.day = usable[1];
                    counter[usable[1]]++;
                }

                counter.map((cv,i)=>{
                    if(cv==7){
                        //i代表已經計次到7的天數, 先在usable找到該天數的位置i2
                        let i2 = usable.indexOf(i);
                        usable.splice(i2,1);
                        counter[i]++;
                    }
                });
                //順序重複也沒關係
                cv.order = cv.order? cv.order : 1;                
            });

            // console.log(counter);
            // console.log(usable);
            return mycards_do;
        }
    },
    watch: {
        modify_cards: function(newValue, oldValue){
            //將需要 modify 的資料匯入, 給 mycards 預設值
            this.mycards.splice(0);
            this.mycards.splice(0,0,...newValue);
        }
    },
    methods: {
        deletemycard: function(card, i){
            delete card.day;
            delete card.order;
            this.mycards.splice(i,1);
            fm2.cards.push(card);
        },
        changeitem: function($event, card, i, type){
            var mcard = this.mycards;
            var counter = [...new Array(9)].fill(0); //0不算, 1就是儲存第一天的次數
            var usable = [0,1,2,3,4,5,6,7]; //還沒滿7, 還可以使用的天數
            mcard.map(cv=>{
                //同一天 不得超過 7 個
                if(cv.day){
                    counter[cv.day]++;
                }else{
                    counter[usable[1]]++;
                }

                counter.map((cv,i)=>{
                    if(cv==7){
                        //i代表已經計次到7的天數, 先在usable找到該天數的位置i2
                        let i2 = usable.indexOf(i);
                        usable.splice(i2,1);
                        counter[i]++;
                    }
                });              
            });

            //value 是否在 usable 裡面? 在裡面表示未超過七次, 才可以執行
            var value = parseInt($event.target.value);
            if(usable.indexOf(value) != -1){
                //增加或修改 mycards 裡面的 'day'/'order' 的值
                this.mycards.map((cv,i)=>{
                    if(cv.name == card.name){
                        cv[type] = value;
                    }
                });                
            }else{
                console.log('同一天已超過7個順序');
            }

            //刷新頁面 觸發 computed:mycards_dayorder
            this.mycards.splice(0,0);

        },
        typeicon_filesourse: function(type){
            return "icon/free/"+type+".png";
        }
    }
});

var fm4 = new Vue({
    el: '#fm_block4',
    data: {
        selected_day: 1,
        days: [1,2,3,4,5,6,7,8]
    },
    computed: {
        //按照所選擇的天數 過濾 mycards_dayorder
        items: function(){
            var tags = fm3.mycards_dayorder;
            var ftags = tags.filter(cv=>cv.day == this.selected_day);

            if(ftags.length > 1){
                var otags = [];
                for(let i=1; i<=7; i++){
                    ftags.map((cv,j)=>{
                        if(cv.order == i){
                            otags.push(cv);
                        } 
                    });
                }
                return otags;
            }

            return ftags;
        },
        //將 mycards_dayorder 用二維陣列儲存
        items_for_save: function(){
            var tags = fm3.mycards_dayorder;
            var arr = [[],[],[],[],[],[],[],[]];
            var output = [[],[],[],[],[],[],[],[]];
            
            //先按照天數存放在 arr
            tags.map(cv=>{
                arr[cv.day-1].push(cv);                    
            });

            //再檢查順序 存放在 output
            arr.map((cv,i)=>{
                if(cv.length!=0){
                    for(var j=0; j<7; j++){
                        cv.map(el=>{
                            if(el.order==(j+1)){
                                output[i].push(el);
                            }                            
                        });
                    }
                }
            });

            return output;
        }
    },
    methods: {
        typeicon_filesourse: function(type){
            return "icon/free/"+type+".png";
        },
        saveToMyFree: function(){
            //驗證
            if(this.items_for_save[0].length==0){
                alert('第一天的行程至少需要一個地標');
                return;
            }
            if(fm1.tr_name) fm1.tr_name = fm1.tr_name.replace(/\r/g,'').replace(/\n/g,'');
            if(fm1.tr_subtitle) fm1.tr_subtitle = fm1.tr_subtitle.replace(/\r/g,'').replace(/\n/g,'');
            if(fm1.tr_startDate) fm1.tr_startDate = fm1.tr_startDate.replace(/\r/g,'').replace(/\n/g,'');
            if(fm1.startpoint) fm1.startpoint = fm1.startpoint.replace(/\r/g,'').replace(/\n/g,'');
            if(fm1.endpoint) fm1.endpoint = fm1.endpoint.replace(/\r/g,'').replace(/\n/g,'');
            
            // console.log(this.items_for_save);

            var tr_data = { 'MEM_no': 1,
                            'tr_name':fm1.tr_name || "來旅遊，找好遊",
                            'tr_subtitle':fm1.tr_subtitle || "HOYO旅遊一級棒",
                            'tr_description':fm1.tr_description || "",
                            'tr_startDate':fm1.tr_startDate || "2016-12-12",
                            'startpoint': fm1.startpoint || "",
                            'endpoint': fm1.endpoint || "",
                            'adult': fm1.adult || 1,
                            'child': fm1.child || 0,
                            'other_money': fm1.other_money || 0,
                            'items': this.items_for_save
                            };
            // console.log(tr_data);



            if(storage['backend_modify_tour_by_TRno']){ //修改行程
                tr_data.TR_no = storage['backend_modify_tour_by_TRno'];
                storage.removeItem('backend_modify_tour_by_TRno');
                console.log(tr_data);

                $.post("backend_freeMobile_Modify.php", tr_data, function(data) {
                    var data = JSON.parse(data);
                    var storage = sessionStorage;
                    storage.setItem('backend_freeMobile_Modify_tr_name', data.TR_name);
                    storage.setItem('backend_freeMobile_Modify_tr_no', data.TR_no);

                    // console.log(data);
                    location.replace("backend_freeMobile_Modify_complete.php");
                });

            }else{ //新增行程
                $.post("backend_freeMobile_Save.php", tr_data, function(data) {
                    var data = JSON.parse(data);
                    var storage = sessionStorage;
                    storage.setItem('backend_freeMobile_Save_tr_name', data.TR_name);
                    storage.setItem('backend_freeMobile_Save_tr_no', data.TR_no);

                    // console.log(data);
                    location.replace("backend_freeMobile_complete.php");
                });                   
            }
        }
    }
});



//接收修改 session, 進入修改狀態
var storage = sessionStorage;
//storage.setItem('backend_modify_tour_by_TRno',3); //測試用

if(storage['backend_modify_tour_by_TRno']){

    var trno = parseInt(storage['backend_modify_tour_by_TRno']);
        //修改儲存按鈕
    $('.PH2').empty();
    $('.fm_thetitle').find('.PH2').html('<span id="GObackendTour">行程管理</span> > 官方修改行程');
    // $('.save').text('修改行程');



    var the_tr = faketr.find(cv=>cv.TR_no==trno);
    var the_lmtr = fakelmtr.filter(cv=>cv.TR_no==trno);


    var the_items = [];
    the_lmtr.map((cv,i)=>{
        var card = data_LMcards.find(el=>el.LM_no==cv.LM_no);
        card.day = cv.LMTR_day;
        card.order = cv.LMTR_order;
        the_items.push(card);
    });
    // console.log(the_items);

    //帶入 the_items, 刷新 fm3.mycards 資料
    fm3.modify_cards.push(...the_items);


    // 重新設定初始值
    fm1.tr_name = the_tr.TR_name ;
    fm1.tr_subtitle = the_tr.TR_subtitle ;
    fm1.tr_description = the_tr.TR_description ;
    fm1.tr_startDate = the_tr.TR_startDate ;
    fm1.startpoint = the_tr.TR_startTag ;
    fm1.endpoint = the_tr.TR_endTag ;
    fm1.adult = the_tr.TR_adultNumber ;
    fm1.child = the_tr.TR_childNumber ;
    fm1.other_money = the_tr.TR_otherMoney ;

    // //沒有v-model, 畫面必須另外顯示
    $('.pplnumAdult').val(the_tr.TR_adultNumber);
    $('.pplnumChild').val(the_tr.TR_childNumber);
    $('.othermoney').val(the_tr.TR_otherMoney);



}