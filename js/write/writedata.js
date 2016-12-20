
// mem跟note兩個資料表結合 找寫遊記的會員
// SELECT n.mem_no, m.mem_name, m.mem_img, n.note_no, n.note_title, n.note_description, n.note_createDate, n.note_mainimg, n.note_close
// FROM mem m, note n
// WHERE m.mem_no = n.mem_no and n.note_close=0
// var memNote = [ {'MEM_no': 2, 'MEM_name': '蘇蘇威爺', 'MEM_img': 'images/member/suwei.jpg', 'NOTE_no': 2, 'NOTE_title': '遊內灣老街', 'NOTE_description': '第一次來內灣。還沒來內灣之前，對內灣已有所謂的「刻板印象」。內灣是熱門的景點，在網路上已瀏覽過不少內灣照片。', 'NOTE_createDate': '2016-09-23	', 'NOTE_mainimg': 'images/write/w_top1.jpg', 'NOTE_close': 0},
// 				{'MEM_no': 5, 'MEM_name': '哥在天上飛', 'MEM_img': 'images/member/RC_Raven.png', 'NOTE_no': 3, 'NOTE_title': '沒了櫻花，阿里山怎麼還是這麼好玩', 'NOTE_description': '這次早就訂好了阿里山的旅行，所以就算後來知道櫻花提早盛開也沒辦法啊', 'NOTE_createDate': '2016-10-05', 'NOTE_mainimg': 'images/write/note_5.jpg', 'NOTE_close': 0},
// 				{'MEM_no': 7, 'MEM_name': '麥斯特賣衣服', 'MEM_img': 'images/member/mem_default.png', 'NOTE_no': 4, 'NOTE_title': '阿里山森林遊樂區。搭夜車看日出', 'NOTE_description': '長這麼大第一次去阿里山，我好了阿里山的旅行次去就直接衝去看日出，但這樣熱血的事就是要趁年輕有體力的時候做啦', 'NOTE_createDate': '2016-11-01', 'NOTE_mainimg': 'images/write/note_3.jpg', 'NOTE_close': 0},
// 				{'MEM_no': 5, 'MEM_name': '哥在天上飛', 'MEM_img': 'images/member/RC_Raven.png', 'NOTE_no': 5, 'NOTE_title': '南投火車好多節～集集火車站、集集老街', 'NOTE_description': '長這麼大第一次去阿里山，我不是在騙人才第一次去就直接衝去看日出，但這樣熱血的事就是要趁年輕有體力的時候做啦', 'NOTE_createDate': '2016-05-01', 'NOTE_mainimg': 'images/write/note_2.jpeg', 'NOTE_close': 0},
// 				{'MEM_no': 7, 'MEM_name': '麥斯特賣衣服', 'MEM_img': 'images/member/mem_default.png', 'NOTE_no': 6, 'NOTE_title': '沒了櫻花，阿里山怎麼還是這ssss', 'NOTE_description': '長這麼大接衝去看日出，但是熱門的景點的事就是要趁年輕有體力的時候做啦', 'NOTE_createDate': '2016-10-11', 'NOTE_mainimg': 'images/write/note_6.jpg', 'NOTE_close': 0},
// 				{'MEM_no': 2, 'MEM_name': '衣服斯特', 'MEM_img': 'images/member/mem_default.png', 'NOTE_no': 7, 'NOTE_title': '沒了櫻花，阿里山怎麼還是這asd', 'NOTE_description': '長這麼大接衝去看日出，但是熱門的景點的事就是要趁年輕有體力的時候做啦', 'NOTE_createDate': '2016-10-19', 'NOTE_mainimg': 'images/write/note_6.jpg', 'NOTE_close': 0},
// 				{'MEM_no': 3, 'MEM_name': '肥宅5566', 'MEM_img': 'images/member/5566.jpg', 'NOTE_no': 8, 'NOTE_title': '評析逛天燈', 'NOTE_description': '平溪天燈好好看阿~~超棒棒平溪天燈，所謂的刻板印象', 'NOTE_createDate': '2016-09-22', 'NOTE_mainimg': 'images/write/note_3.jpg', 'NOTE_close': 0},
// 				{'MEM_no': 3, 'MEM_name': '肥宅5566', 'MEM_img': 'images/member/5566.jpg', 'NOTE_no': 9, 'NOTE_title': '集集火車站gogogo', 'NOTE_description': '集集火車站、集棒棒平溪天燈，所謂的刻板印象', 'NOTE_createDate': '2016-10-13', 'NOTE_mainimg': 'images/write/note_7.jpg', 'NOTE_close': 0},
// 				{'MEM_no': 6, 'MEM_name': '湖中女神', 'MEM_img': 'images/member/anime.jpg', 'NOTE_no': 10, 'NOTE_title': '阿里山珊珊珊', 'NOTE_description': '阿里山怎麼還是行次去就直接衝去看日出~', 'NOTE_createDate': '2016-11-20', 'NOTE_mainimg': 'images/write/note_5.jpg', 'NOTE_close': 0},
// 				{'MEM_no': 6, 'MEM_name': '湖中女神', 'MEM_img': 'images/member/anime.jpg', 'NOTE_no': 11, 'NOTE_title': '內灣老街內灣內灣', 'NOTE_description': '內灣是熱門的景點，在網路上已瀏覽過不少內灣照片。', 'NOTE_createDate': '2016-07-23', 'NOTE_mainimg': 'images/write/note_9.jpg', 'NOTE_close': 0},
// 				{'MEM_no': 2, 'MEM_name': '蘇蘇威爺', 'MEM_img': 'images/member/suwei.jpg', 'NOTE_no': 12, 'NOTE_title': '平溪天燈平溪平溪', 'NOTE_description': '平溪天燈平溪天、燈平溪天燈平溪天燈。', 'NOTE_createDate': '2016-09-02', 'NOTE_mainimg': 'images/write/note_8.jpg', 'NOTE_close': 0},
// 				{'MEM_no': 5, 'MEM_name': '哥在天上飛', 'MEM_img': 'images/member/RC_Raven.png', 'NOTE_no': 13, 'NOTE_title': '平溪天燈平溪平溪', 'NOTE_description': '平溪天燈平溪天、燈平溪天燈平溪天燈。', 'NOTE_createDate': '2016-03-17', 'NOTE_mainimg': 'images/write/note_3.jpg', 'NOTE_close': 0},
// 				{'MEM_no': 5, 'MEM_name': '哥在天上飛', 'MEM_img': 'images/member/RC_Raven.png', 'NOTE_no': 14, 'NOTE_title': '阿里山珊珊珊', 'NOTE_description': '阿里山怎麼還是行次去就直接衝去看日出yooooo', 'NOTE_createDate': '2016-08-10', 'NOTE_mainimg': 'images/write/note_4.jpg', 'NOTE_close': 0},
// 				{'MEM_no': 5, 'MEM_name': '哥在天上飛', 'MEM_img': 'images/member/RC_Raven.png', 'NOTE_no': 15, 'NOTE_title': '集集火車站', 'NOTE_description': '集集火車站、集，所謂的刻板印象', 'NOTE_createDate': '2016-09-16', 'NOTE_mainimg': 'images/write/note_6.jpg', 'NOTE_close': 0}
//  			  ];
// console.log(memNote);



// note跟tr兩個資料表結合 找遊記綁的行程
// select n.note_no, t.tr_no 
// from note n, tr t
// where n.note_no=t.note_no
// var noteTr = [ {'TR_no': 1, 'NOTE_no': 2, 'TR_name': '官方安安'},
// 			  {'TR_no': 2, 'NOTE_no': 3, 'TR_name': '安你好'},
// 			  {'TR_no': 3, 'NOTE_no': 4, 'TR_name': '安你好好'},
// 			  {'TR_no': 4, 'NOTE_no': 5, 'TR_name': '安你你你好'},
// 			  {'TR_no': 5, 'NOTE_no': 6, 'TR_name': '安安你好好'},
// 			  {'TR_no': 6, 'NOTE_no': 7, 'TR_name': '安安你好好'},
// 			  {'TR_no': 7, 'NOTE_no': 8, 'TR_name': '安安你好好'},
// 			  {'TR_no': 8, 'NOTE_no': 9, 'TR_name': '官官你好好'},
// 			  {'TR_no': 9, 'NOTE_no': 10, 'TR_name': '官官你好好'},
// 			  {'TR_no': 10, 'NOTE_no': 11, 'TR_name': '官官你好好'},
// 			  {'TR_no': 11, 'NOTE_no': 12, 'TR_name': '官官你好好'},
// 			  {'TR_no': 12, 'NOTE_no': 13, 'TR_name': '官官你好好'},
// 			  {'TR_no': 13, 'NOTE_no': 14, 'TR_name': '官官你好好'},
// 			  {'TR_no': 14, 'NOTE_no': 15, 'TR_name': '官官你好好'}
// ];
// console.log(noteTr);





// lmtr自己一個資料表
// var lmtr =[ {'LM_no': 3, 'TR_no': 2, 'LMTR_day':1 , 'LMTR_order': 1 },
// 			{'LM_no': 18, 'TR_no': 2, 'LMTR_day':1 , 'LMTR_order': 2 },
// 			{'LM_no': 17, 'TR_no': 2, 'LMTR_day':1 , 'LMTR_order': 3 },
// 			{'LM_no': 16, 'TR_no': 2, 'LMTR_day':2 , 'LMTR_order': 1 },
// 			{'LM_no': 4, 'TR_no': 2, 'LMTR_day': 2, 'LMTR_order': 2 },
// 			{'LM_no': 26, 'TR_no': 2, 'LMTR_day': 2, 'LMTR_order': 3 },
// 			{'LM_no': 5, 'TR_no': 2, 'LMTR_day': 2, 'LMTR_order': 4 },
// 			{'LM_no': 25, 'TR_no': 2, 'LMTR_day': 2, 'LMTR_order': 5 },
// 			{'LM_no': 24, 'TR_no': 2, 'LMTR_day': 2, 'LMTR_order': 6 },

// 			{'LM_no': 5, 'TR_no': 3, 'LMTR_day': 1, 'LMTR_order': 1 },
// 			{'LM_no': 7, 'TR_no': 3, 'LMTR_day': 1, 'LMTR_order': 2 },
// 			{'LM_no': 22, 'TR_no': 3, 'LMTR_day': 2, 'LMTR_order': 1 },
// 			{'LM_no': 6, 'TR_no': 3, 'LMTR_day': 2, 'LMTR_order': 2 },
// 			{'LM_no': 23, 'TR_no': 3, 'LMTR_day': 2, 'LMTR_order': 3 },
// 			{'LM_no': 7, 'TR_no': 3, 'LMTR_day': 3, 'LMTR_order': 1 },
// 			{'LM_no': 9, 'TR_no': 3, 'LMTR_day': 3, 'LMTR_order': 2 },
// 			{'LM_no': 21, 'TR_no': 3, 'LMTR_day': 3, 'LMTR_order': 3 },
// 			{'LM_no': 8, 'TR_no': 3, 'LMTR_day': 3, 'LMTR_order': 4 },

// 			{'LM_no': 2, 'TR_no': 5, 'LMTR_day':1 , 'LMTR_order': 1 },
// 			{'LM_no': 18, 'TR_no': 5, 'LMTR_day':1 , 'LMTR_order': 2 },
// 			{'LM_no': 17, 'TR_no': 5, 'LMTR_day':1 , 'LMTR_order': 3 },
// 			{'LM_no': 16, 'TR_no': 5, 'LMTR_day':2 , 'LMTR_order': 1 },
// 			{'LM_no': 4, 'TR_no': 5, 'LMTR_day': 2, 'LMTR_order': 2 },

// 			{'LM_no': 6, 'TR_no': 1, 'LMTR_day':1 , 'LMTR_order': 1 },
// 			{'LM_no': 18, 'TR_no': 1, 'LMTR_day':1 , 'LMTR_order': 2 },
// 			{'LM_no': 17, 'TR_no': 1, 'LMTR_day':1 , 'LMTR_order': 3 },
// 			{'LM_no': 16, 'TR_no': 1, 'LMTR_day':2 , 'LMTR_order': 1 },
// 			{'LM_no': 4, 'TR_no': 1, 'LMTR_day': 2, 'LMTR_order': 2 },

// 			{'LM_no': 15, 'TR_no': 4, 'LMTR_day':1 , 'LMTR_order': 1 },
// 			{'LM_no': 18, 'TR_no': 4, 'LMTR_day':1 , 'LMTR_order': 2 },
// 			{'LM_no': 17, 'TR_no': 4, 'LMTR_day':1 , 'LMTR_order': 3 },
// 			{'LM_no': 16, 'TR_no': 4, 'LMTR_day':2 , 'LMTR_order': 1 },
// 			{'LM_no': 4, 'TR_no': 4, 'LMTR_day': 2, 'LMTR_order': 2 },

// 			{'LM_no': 25, 'TR_no': 6, 'LMTR_day':1 , 'LMTR_order': 1 },
// 			{'LM_no': 18, 'TR_no': 6, 'LMTR_day':1 , 'LMTR_order': 2 },

// 			{'LM_no': 14, 'TR_no': 7, 'LMTR_day':1 , 'LMTR_order': 1 },
// 			{'LM_no': 18, 'TR_no': 7, 'LMTR_day':2 , 'LMTR_order': 1 },

// 			{'LM_no': 19, 'TR_no': 8, 'LMTR_day':1 , 'LMTR_order': 1 },
// 			{'LM_no': 18, 'TR_no': 8, 'LMTR_day':3 , 'LMTR_order': 1 },

// 			{'LM_no': 16, 'TR_no': 9, 'LMTR_day':1 , 'LMTR_order': 2 },
// 			{'LM_no': 18, 'TR_no': 9, 'LMTR_day':1 , 'LMTR_order': 2 },

// 			{'LM_no': 18, 'TR_no': 10, 'LMTR_day':1 , 'LMTR_order': 2 },
// 			{'LM_no': 18, 'TR_no': 10, 'LMTR_day':1 , 'LMTR_order': 2 },

// 			{'LM_no': 24, 'TR_no': 11, 'LMTR_day':1 , 'LMTR_order': 2 },
// 			{'LM_no': 18, 'TR_no': 11, 'LMTR_day':2 , 'LMTR_order': 2 },

// 			{'LM_no': 17, 'TR_no': 12, 'LMTR_day':1 , 'LMTR_order': 2 },
// 			{'LM_no': 18, 'TR_no': 12, 'LMTR_day':2 , 'LMTR_order': 2 },

// 			{'LM_no': 16, 'TR_no': 13, 'LMTR_day':1 , 'LMTR_order': 2 },
// 			{'LM_no': 18, 'TR_no': 13, 'LMTR_day':2 , 'LMTR_order': 2 },

// 			{'LM_no': 22, 'TR_no': 14, 'LMTR_day':1 , 'LMTR_order': 2 },
// 			{'LM_no': 18, 'TR_no': 14, 'LMTR_day':2 , 'LMTR_order': 2 }
// ];

// var data_LMcards = [{'LM_no': 2, "name":"十分瀑布", "branch":"內灣線", "station":"新竹", "type":"f_landscape", "subtitle":"中國政府預計今天將公布三","url":"http://static.wixstatic.com/media/136ba0_f3c12f6105854b299a341e55db273c5a.jpg_256", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 3, "name":"快樂島", "branch":"內灣線", "station":"新竹", "type":"f_eat", "subtitle":"中國當局日前拘留多名澳大利","url":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT9ZQLyK_0OI7GnRuJBEcIxMbiET0DUtdThJrmK7a_KsJ5ng1VtWw", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 4, "name":"客家村", "branch":"內灣線", "station":"北新竹", "type":"f_stay", "subtitle":"三星已宣布放棄Note 7在中國","url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaDTjQ5-aA5TRD7olP3daE2itSTLsFdMFABsagArR4H608hoeKQ", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 5, "name":"五分埔", "branch":"內灣線", "station":"北新竹", "type":"f_activity", "subtitle":"後毛澤東時代的權力分享和制度化繼","url":"http://www.abbeyleixgolfclub.ie/15thAutumn.jpg", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 6, "name":"竹東東林業展示館", "branch":"內灣線", "station":"北新竹", "type":"f_stay", "subtitle":"三星已宣布放棄Note 7在中國","url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaDTjQ5-aA5TRD7olP3daE2itSTLsFdMFABsagArR4H608hoeKQ", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 7, "name":"草地院活動", "branch":"內灣線", "station":"新竹", "type":"f_activity", "subtitle":"後毛澤東時代的權力分享和制度化繼","url":"http://www.abbeyleixgolfclub.ie/15thAutumn.jpg", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 8, "name":"天秤之家", "branch":"內灣線", "station":"新竹", "type":"f_landscape", "subtitle":"中國政府預計今天將公布三","url":"http://static.wixstatic.com/media/136ba0_f3c12f6105854b299a341e55db273c5a.jpg_256", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 9, "name":"超級無敵好棒武廟", "branch":"內灣線", "station":"北新竹", "type":"f_stay", "subtitle":"三星已宣布放棄Note 7在中國","url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaDTjQ5-aA5TRD7olP3daE2itSTLsFdMFABsagArR4H608hoeKQ", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 10, "name":"蔬果市場", "branch":"內灣線", "station":"北新竹", "type":"f_activity", "subtitle":"後毛澤東時代的權力分享和制度化繼","url":"http://www.abbeyleixgolfclub.ie/15thAutumn.jpg", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 11, "name":"天堂路", "branch":"內灣線", "station":"北新竹", "type":"f_stay", "subtitle":"三星已宣布放棄Note 7在中國","url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaDTjQ5-aA5TRD7olP3daE2itSTLsFdMFABsagArR4H608hoeKQ", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 12, "name":"活動地標", "branch":"內灣線", "station":"新竹", "type":"f_activity", "subtitle":"後毛澤東時代的權力分享和制度化繼","url":"http://www.abbeyleixgolfclub.ie/15thAutumn.jpg", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 13, "name":"快樂草原", "branch":"內灣線", "station":"新竹", "type":"f_landscape", "subtitle":"中國政府預計今天將公布三","url":"http://static.wixstatic.com/media/136ba0_f3c12f6105854b299a341e55db273c5a.jpg_256", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 14, "name":"平溪民宅", "branch":"平溪線", "station":"平溪", "type":"f_stay", "subtitle":"三星已宣布放棄Note 7在中國","url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaDTjQ5-aA5TRD7olP3daE2itSTLsFdMFABsagArR4H608hoeKQ", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 15, "name":"集集樂遊", "branch":"集集線", "station":"集集", "type":"f_activity", "subtitle":"後毛澤東時代的權力分享和制度化繼","url":"http://www.abbeyleixgolfclub.ie/15thAutumn.jpg", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 16, "name":"阿里山民宿", "branch":"阿里山線", "station":"阿里山", "type":"f_stay", "subtitle":"三星已宣布放棄Note 7在中國","url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaDTjQ5-aA5TRD7olP3daE2itSTLsFdMFABsagArR4H608hoeKQ", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 17, "name":"平溪天燈", "branch":"平溪線", "station":"平溪", "type":"f_activity", "subtitle":"後毛澤東時代的權力分享和制度化繼","url":"http://www.abbeyleixgolfclub.ie/15thAutumn.jpg", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 18, "name":"集集小火車", "branch":"集集線", "station":"集集", "type":"f_landscape", "subtitle":"中國政府預計今天將公布三","url":"http://static.wixstatic.com/media/136ba0_f3c12f6105854b299a341e55db273c5a.jpg_256", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 19, "name":"特生中心", "branch":"集集線", "station":"集集", "type":"f_eat", "subtitle":"中國當局日前拘留多名澳大利","url":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT9ZQLyK_0OI7GnRuJBEcIxMbiET0DUtdThJrmK7a_KsJ5ng1VtWw", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 20, "name":"山蕉產銷中心", "branch":"集集線", "station":"集集", "type":"f_stay", "subtitle":"三星已宣布放棄Note 7在中國","url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaDTjQ5-aA5TRD7olP3daE2itSTLsFdMFABsagArR4H608hoeKQ", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 21, "name":"香蕉蛋捲屋", "branch":"集集線", "station":"集集", "type":"f_activity", "subtitle":"後毛澤東時代的權力分享和制度化繼","url":"http://www.abbeyleixgolfclub.ie/15thAutumn.jpg", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 22, "name":"火龍果農地", "branch":"集集線", "station":"集集", "type":"f_stay", "subtitle":"三星已宣布放棄Note 7在中國","url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaDTjQ5-aA5TRD7olP3daE2itSTLsFdMFABsagArR4H608hoeKQ", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 23, "name":"繽紛豪大大民宿", "branch":"阿里山線", "station":"阿里山", "type":"f_stay", "subtitle":"三星已宣布放棄Note 7在中國","url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaDTjQ5-aA5TRD7olP3daE2itSTLsFdMFABsagArR4H608hoeKQ", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 24, "name":"溪邊抓泥鰍", "branch":"平溪線", "station":"瑞芳", "type":"f_activity", "subtitle":"後毛澤東時代的權力分享和制度化繼","url":"http://www.abbeyleixgolfclub.ie/15thAutumn.jpg", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 25, "name":"日出觀景台", "branch":"阿里山線", "station":"阿里山", "type":"f_landscape", "subtitle":"中國政府預計今天將公布三","url":"http://static.wixstatic.com/media/136ba0_f3c12f6105854b299a341e55db273c5a.jpg_256", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 26, "name":"懷舊小吃部", "branch":"平溪線", "station":"瑞芳", "type":"f_eat", "subtitle":"中國當局日前拘留多名澳大利","url":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT9ZQLyK_0OI7GnRuJBEcIxMbiET0DUtdThJrmK7a_KsJ5ng1VtWw", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100},
//                 {'LM_no': 27, "name":"貓窩居", "branch":"平溪線", "station":"猴硐", "type":"f_stay", "subtitle":"三星已宣布放棄Note 7在中國","url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqaDTjQ5-aA5TRD7olP3daE2itSTLsFdMFABsagArR4H608hoeKQ", "avgcost":300, "staycost1":1200, "staycost2":2200, "staycost4":3600, "staycostadd1":500, "adultcost":300, "childcost":100}];




// ES6 箭頭函數
// map(function(cv,i){aaa;bbb;})
// 等同於
// map((cv,i)=>{aaa;bbb;})

// map(function(cv){aaa;bbb;})
// 等同於
// map(cv=>{aaa;bbb;})


// nc自己一個資料表
// var nc = [ {'MEM_no': 2, 'NOTE_no': 3, 'NC_rating': 4, 'NC_isCollected': 0 },
// 		   {'MEM_no': 4, 'NOTE_no': 2, 'NC_rating': 2, 'NC_isCollected': 0 },
// 		   {'MEM_no': 5, 'NOTE_no': 4, 'NC_rating': 5, 'NC_isCollected': 1 },
// 		   {'MEM_no': 3, 'NOTE_no': 5, 'NC_rating': 4, 'NC_isCollected': 0 },
// 		   {'MEM_no': 4, 'NOTE_no': 6, 'NC_rating': 1, 'NC_isCollected': 1 },
// 		   {'MEM_no': 4, 'NOTE_no': 3, 'NC_rating': 2, 'NC_isCollected': 0 },
// 		   {'MEM_no': 5, 'NOTE_no': 2, 'NC_rating': 3, 'NC_isCollected': 0 },

// 		   {'MEM_no': 9, 'NOTE_no': 6, 'NC_rating': 2, 'NC_isCollected': 0 },
// 		   {'MEM_no': 8, 'NOTE_no': 5, 'NC_rating': 5, 'NC_isCollected': 1 },
// 		   {'MEM_no': 7, 'NOTE_no': 4, 'NC_rating': 4, 'NC_isCollected': 0 },
// 		   {'MEM_no': 6, 'NOTE_no': 3, 'NC_rating': 1, 'NC_isCollected': 1 },
// 		   {'MEM_no': 5, 'NOTE_no': 2, 'NC_rating': 2, 'NC_isCollected': 0 },
// 		   {'MEM_no': 4, 'NOTE_no': 3, 'NC_rating': 3, 'NC_isCollected': 0 },

// 		   {'MEM_no': 9, 'NOTE_no': 8, 'NC_rating': 3, 'NC_isCollected': 0 },
// 		   {'MEM_no': 8, 'NOTE_no': 9, 'NC_rating': 4, 'NC_isCollected': 1 },
// 		   {'MEM_no': 7, 'NOTE_no': 10, 'NC_rating': 2, 'NC_isCollected': 0 },
// 		   {'MEM_no': 6, 'NOTE_no': 3, 'NC_rating': 3, 'NC_isCollected': 1 },
// 		   {'MEM_no': 5, 'NOTE_no': 11, 'NC_rating': 3, 'NC_isCollected': 0 },
// 		   {'MEM_no': 4, 'NOTE_no': 12, 'NC_rating': 2, 'NC_isCollected': 0 },
// 		   {'MEM_no': 5, 'NOTE_no': 10, 'NC_rating': 1, 'NC_isCollected': 0 },
// 		   {'MEM_no': 4, 'NOTE_no': 8, 'NC_rating': 1, 'NC_isCollected': 0 },

// 		   {'MEM_no': 9, 'NOTE_no': 13, 'NC_rating': 3, 'NC_isCollected': 0 },
// 		   {'MEM_no': 8, 'NOTE_no': 12, 'NC_rating': 4, 'NC_isCollected': 1 },
// 		   {'MEM_no': 7, 'NOTE_no': 11, 'NC_rating': 2, 'NC_isCollected': 0 },
// 		   {'MEM_no': 6, 'NOTE_no': 10, 'NC_rating': 3, 'NC_isCollected': 1 },
// 		   {'MEM_no': 5, 'NOTE_no': 9, 'NC_rating': 2, 'NC_isCollected': 0 },
// 		   {'MEM_no': 4, 'NOTE_no': 8, 'NC_rating': 1, 'NC_isCollected': 0 },
// 		   {'MEM_no': 5, 'NOTE_no': 7, 'NC_rating': 3, 'NC_isCollected': 0 },
// 		   {'MEM_no': 4, 'NOTE_no': 14, 'NC_rating': 4, 'NC_isCollected': 0 },
// 		   {'MEM_no': 5, 'NOTE_no': 14, 'NC_rating': 3, 'NC_isCollected': 0 },
// 		   {'MEM_no': 4, 'NOTE_no': 13, 'NC_rating': 5, 'NC_isCollected': 0 }
// ];




// ====================================================================================================



// memNote 和 noteTr 合併成一個資料陣列 
var memNote_and_noteTr = memNote.map(cv=>{

	// 在data_LMcards裡尋找 和 lmtr的cv 有一樣的LM_no的那一筆資料 並回傳那一筆資料到 ele
	var ele = noteTr.find(el=>{
		return cv.NOTE_no == el.NOTE_no;
	});

	// 將 ele 複製到 cv 裡面去, 並覆蓋一樣 key 名稱的 LM_no
	return ele? Object.assign(cv,ele): cv;

});
// console.log(memNote_and_noteTr);
// MEM_img:"images/member/mem_default.png"
// MEM_name:"麥斯特賣衣服"
// MEM_no:7
// NOTE_close:0
// NOTE_createDate:"2016-10-11"
// NOTE_description:"長這麼大接衝去看日出，但是熱門的景點的事就是要趁年輕有體力的時候做啦"
// NOTE_mainimg:"images/write/note_6.jpg"
// NOTE_no:6
// NOTE_title:"沒了櫻花，阿里山怎麼還是這ssss"
// TR_name:"安安你好好"
// TR_no:5
// NOTE_close:0

// 將被封存的遊記編號過濾掉 	-> 為了要過濾掉該遊記的 nc
var closed_notes   = memNote_and_noteTr.filter(cv=>cv.NOTE_close==1);
// 沒有被封存的遊記都存在這邊
memNote_and_noteTr = memNote_and_noteTr.filter(cv=>cv.NOTE_close==0);

// ====================================================================================================


// 把 lmtr 和 data_LMcards 合併成一個資料陣列 得到TR_no 之後  方便拿著TR_no來尋找 天數和支線
var lmtr_and_LM = lmtr.map(cv=>{

	// 在data_LMcards裡尋找 和 lmtr的cv 有一樣的LM_no的那一筆資料 並回傳那一筆資料到 ele
	var ele = data_LMcards.find(el=>{
		return cv.LM_no == el.LM_no;
	});

	// 將 ele 複製到 cv 裡面去, 並覆蓋一樣 key 名稱的 LM_no
	return ele? Object.assign(cv,ele): cv;

});
// console.log(lmtr_and_LM);
// LMTR_day:1
// LMTR_order:1
// LM_no:3
// TR_no:2
// adultcost:300
// avgcost:300
// branch:"內灣線"
// childcost:100
// name:"快樂島"
// station:"新竹"
// staycost1:1200
// staycost2:2200
// staycost4:3600
// staycostadd1:500
// subtitle:"中國當局日前拘留多名澳大利"
// type:"f_eat"
// url:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT9ZQLyK_0OI7GnRuJBEcIxMbiET0DUtdThJrmK7a_KsJ5ng1VtWw"

