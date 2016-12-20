
//  my_LMcards 有的地標,  data_LMcards 也有的話要移除
my_LMcards.map((cv,i)=>{
    data_LMcards.map((cv2,i2)=>{
        if(cv.name==cv2.name){data_LMcards.splice(i2,1)}
    });
});

var fm1 = new Vue({
    el: '#fm_block1',
    data: {
        tr_name: '我的自由行',
        tr_subtitle: '',
        startpoint: '起點',
        endpoint: '終點',
        tr_description: ''
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
        }
    }
});




var fm3 = new Vue({
    el: '#fm_block3',
    data: {
        mycards: [...my_LMcards],
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
        }
    },
    methods: {
        typeicon_filesourse: function(type){
            return "icon/free/"+type+".png";
        }
    }
});

