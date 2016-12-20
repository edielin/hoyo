   // slider的scroll //
    $('#scroll_down').click(function(){ 
        $('html,body').animate({
            scrollTop : $('#i_s1').offset().top-130
        }, 500); 
    }); 
    // slider的scroll over //




///// SVG四支線資料 //////

var data_line =[{ //01
                 'neiwan':{'x1':"443.838", 'y1':"358.679", 'x2':"481.346", 'y2':"365"},
                 'pinxi':{'x1':"157.174", 'y1':"386.425", 'x2':"149.762", 'y2':"389.385"},
                 'gigi':{'x1':"480", 'y1':"-20", 'x2':"500", 'y2':"-40"}, //out
                 'alisan':{'x1':"72.438", 'y1':"339.966", 'x2':"112.769", 'y2':"286.978"}
                },
                { //02
                 'neiwan':{'x1':"378.331", 'y1':"352.682", 'x2':"423.838", 'y2':"357.208"},
                 'pinxi':{'x1':"20", 'y1':"-30", 'x2':"30", 'y2':"-20"}, //out
                 'gigi':{'x1':"432.604", 'y1':"176.574", 'x2':"476.074", 'y2':"152.805"},
                 'alisan':{'x1':"215.242", 'y1':"191.324", 'x2':"250.018", 'y2':"181.771"}
                },
                { //03
                 'neiwan':{'x1':"342.069", 'y1':"326.525", 'x2':"361.498", 'y2':"341.893"},
                 'pinxi':{'x1':"457.47", 'y1':"157.77", 'x2':"442.916", 'y2':"220.262"},
                 'gigi':{'x1':"60", 'y1':"480", 'x2':"100", 'y2':"500"}, //out
                 'alisan':{'x1':"276.673", 'y1':"168.187", 'x2':"401.519", 'y2':"79.976"}
                },
                { //04
                 'neiwan':{'x1':"319.146", 'y1':"289.417", 'x2':"330.64", 'y2':"310.23"},
                 'pinxi':{'x1':"130.619", 'y1':"393.245", 'x2':"82.627", 'y2':"401.351"},
                 'gigi':{'x1':"296.043", 'y1':"237.58", 'x2':"358.464", 'y2':"227.274"},
                 'alisan':{'x1':"230", 'y1':"510", 'x2':"205", 'y2':"490"} //out
                },
                { //05
                 'neiwan':{'x1':"296.173", 'y1':"264.938", 'x2':"306.937", 'y2':"273.896"},
                 'pinxi':{'x1':"560", 'y1':"400", 'x2':"570", 'y2':"420"}, //out
                 'gigi':{'x1':"60.756", 'y1':"247.549", 'x2':"114.497", 'y2':"295.983"},
                 'alisan':{'x1':"124.354", 'y1':"270.695", 'x2':"197.508", 'y2':"200.465"}
                },
                { //06
                 'neiwan':{'x1':"263.276", 'y1':"228.876", 'x2':"275.212", 'y2':"243.987"},
                 'pinxi':{'x1':"383.289", 'y1':"63.023", 'x2':"450.759", 'y2':"140.373"},
                 'gigi':{'x1':"210.836", 'y1':"283.042", 'x2':"278.61", 'y2':"246.074"},
                 'alisan':{'x1':"555", 'y1':"55", 'x2':"540", 'y2':"30"} //out
                },
                { //07
                 'neiwan':{'x1':"244.014", 'y1':"189.41", 'x2':"252.675", 'y2':"212.307"},
                 'pinxi':{'x1':"-60", 'y1':"410", 'x2':"-45", 'y2':"425"}, //out
                 'gigi':{'x1':"375.618", 'y1':"217.03", 'x2':"416.388", 'y2':"188.239"},
                 'alisan':{'x1':"395", 'y1':"455", 'x2':"425", 'y2':"485"} //out
                },
                { //08
                 'neiwan':{'x1':"189.097", 'y1':"137.241", 'x2':"232.489", 'y2':"173.444"},
                 'pinxi':{'x1':"254.689", 'y1':"339.65", 'x2':"227.643", 'y2':"355.505"},
                 'gigi':{'x1':"560", 'y1':"200", 'x2':"600", 'y2':"250"}, //out
                 'alisan':{'x1':"416.68", 'y1':"81.251", 'x2':"424.292", 'y2':"92.715"}
                },
                { //09
                 'neiwan':{'x1':"148.597", 'y1':"124.865", 'x2':"161.443", 'y2':"127"},
                 'pinxi':{'x1':"490", 'y1':"455", 'x2':"505", 'y2':"470"}, //out
                 'gigi':{'x1':"132.755", 'y1':"301.621", 'x2':"192.313", 'y2':"290.403"},
                 'alisan':{'x1':"30", 'y1':"-60", 'x2':"5", 'y2':"-20"} //out
                },
                { //10
                 'neiwan':{'x1':"116.518", 'y1':"108.477", 'x2':"129.957", 'y2':"117.713"},
                 'pinxi':{'x1':"428.272", 'y1':"245.736", 'x2':"357.146", 'y2':"290.983"},
                 'gigi':{'x1':"-60", 'y1':"370", 'x2':"-20", 'y2':"390"}, //out
                 'alisan':{'x1':"453.114", 'y1':"67.294", 'x2':"465.747", 'y2':"69.056"}
                },
                { //11
                 'neiwan':{'x1':"89.341", 'y1':"84.347", 'x2':"101.395", 'y2':"95.484"},
                 'pinxi':{'x1':"209.541", 'y1':"363.956", 'x2':"175.833", 'y2':"379.271"},
                 'gigi':{'x1':"360", 'y1':"-50", 'x2':"330", 'y2':"-25"}, //out
                 'alisan':{'x1':"62.594", 'y1':"364.479", 'x2':"64.689", 'y2':"358.406"}
                },
                { //12
                 'neiwan':{'x1':"55.744", 'y1':"99.701", 'x2':"74.219", 'y2':"84.347"},
                 'pinxi':{'x1':"339.646", 'y1':"300.517", 'x2':"271.493", 'y2':"328.903"},
                 'gigi':{'x1':"310", 'y1':"480", 'x2':"260", 'y2':"510"}, //out
                 'alisan':{'x1':"434.985", 'y1':"92.715", 'x2':"440.09", 'y2':"75.629"}
                },];




var data_cir = [{ //01
                 'neiwan':{'cx':"39.873", 'cy':"111.866", 'r':"20"},
                 'pinxi':{'cx':"218.77", 'cy':"360.105", 'r':"10"},
                 'gigi':{'cx':"40", 'cy':"-30", 'r':"1"}, //out
                 'alisan':{'cx':"475.704", 'cy':"69.977", 'r':"10"}
                },
                { //02
                 'neiwan':{'cx':"81.78", 'cy':"77.815", 'r':"10"},
                 'pinxi':{'cx':"600", 'cy':"200", 'r':"1"}, //out
                 'gigi':{'cx':"122.755", 'cy':"301.621", 'r':"10"},
                 'alisan':{'cx':"206.084", 'cy':"195.341", 'r':"10"}
                },
                { //03
                 'neiwan':{'cx':"108.452", 'cy':"102.567", 'r':"10"},
                 'pinxi':{'cx':"262.746", 'cy':"333.745", 'r':"10"},
                 'gigi':{'cx':"400", 'cy':"500", 'r':"1"}, //out
                 'alisan':{'cx':"443.114", 'cy':"66.096", 'r':"10"}
                },
                { //04
                 'neiwan':{'cx':"139.055", 'cy':"121.866", 'r':"10"},
                 'pinxi':{'cx':"130", 'cy':"600", 'r':"1"}, //out
                 'gigi':{'cx':"424.279", 'cy':"182.111", 'r':"10"},
                 'alisan':{'cx':"263.866", 'cy':"176", 'r':"15"}
                },
                { //05
                 'neiwan':{'cx':"176.443", 'cy':"129.191", 'r':"15"},
                 'pinxi':{'cx':"140.146", 'cy':"392.104", 'r':"10"},
                 'gigi':{'cx':"600", 'cy':"30", 'r':"1"}, //out
                 'alisan':{'cx':"429.639", 'cy':"101.156", 'r':"10"}
                },
                { //06
                 'neiwan':{'cx':"239.656", 'cy':"180.41", 'r':"10"},
                 'pinxi':{'cx':"348.771", 'cy':"296.438", 'r':"10"},
                 'gigi':{'cx':"140", 'cy':"600", 'r':"1"}, //out
                 'alisan':{'cx':"550", 'cy':"450", 'r':"1"} //out
                },
                { //07
                 'neiwan':{'cx':"256.452", 'cy':"221.567", 'r':"10"},
                 'pinxi':{'cx':"166.597", 'cy':"383.104", 'r':"10"},
                 'gigi':{'cx':"-40", 'cy':"60", 'r':"1"}, //out
                 'alisan':{'cx':"409.639", 'cy':"74.155", 'r':"10"}
                },
                { //08
                 'neiwan':{'cx':"284.756", 'cy':"255.559", 'r':"15"},
                 'pinxi':{'cx':"438.208", 'cy':"234.503", 'r':"15"},
                 'gigi':{'cx':"49.618", 'cy':"237.502", 'r':"15"},
                 'alisan':{'cx':"100", 'cy':"-30", 'r':"1"} //out
                },
                { //09
                 'neiwan':{'cx':"314.246", 'cy':"280.705", 'r':"10"},
                 'pinxi':{'cx':"373.079", 'cy':"52.039", 'r':"15"},
                 'gigi':{'cx':"640", 'cy':"420", 'r':"1"}, //out
                 'alisan':{'cx':"58.618", 'cy':"378.944", 'r':"15"}
                },
                { //10
                 'neiwan':{'cx':"335.605", 'cy':"318.902", 'r':"10"},
                 'pinxi':{'cx':"72.627", 'cy':"403.245", 'r':"10"},
                 'gigi':{'cx':"367.254", 'cy':"222.503", 'r':"10"},
                 'alisan':{'cx':"340", 'cy':"-50", 'r':"1"} //out
                },
                { //11
                 'neiwan':{'cx':"369.865", 'cy':"347.365", 'r':"10"},
                 'pinxi':{'cx':"240", 'cy':"-60", 'r':"1"}, //out
                 'gigi':{'cx':"485.013", 'cy':"148.342", 'r':"10"},
                 'alisan':{'cx':"68.618", 'cy':"349.209", 'r':"10"}
                },
                { //12
                 'neiwan':{'cx':"433.838", 'cy':"357.208", 'r':"10"},
                 'pinxi':{'cx':"457.47", 'cy':"147.771", 'r':"10"},
                 'gigi':{'cx':"201.277", 'cy':"285.984", 'r':"10"},
                 'alisan':{'cx':"-40", 'cy':"330", 'r':"1"} //out
                },
                { //13
                 'neiwan':{'cx':"496.346", 'cy':"368.209", 'r':"15"},
                 'pinxi':{'cx':"400", 'cy':"-30", 'r':"1"}, //out
                 'gigi':{'cx':"286.556", 'cy':"240.737", 'r':"10"},
                 'alisan':{'cx':"118.657", 'cy':"278.909", 'r':"10"}
                }];

var data_text = [{
                 'neiwan':{'x':'497','y':'393'},//內灣
                 'pinxi':{'x':'263.3','y':'350'},//十分
                 'gigi':{'x':'486','y':'167'},//車程
                 'alisan':{'x':'476','y':'88'} //祝山
                }];

///// SVG四支線資料 //////

var svg1 = d3.select('#svgWrapper').append('svg').attr({
                'id': 'svg1',
                'width': 530,
                'height': 450
            });


svg1.selectAll('circle').data(data_cir).enter().
     append('circle').attr({
        'cx': function(d,i){
            return d.neiwan.cx;
        },
        'cy': function(d,i){
            return d.neiwan.cy;
        },
        'r': function(d,i){
            return d.neiwan.r;
        },
        'fill': 'rgba(0,0,0,.15)',
        'stroke-width': 2,
        'stroke': 'rgba(255,255,255,.75)'
     });


svg1.selectAll('line').data(data_line).enter().
     append('line').attr({
        'x1': function(d,i){
            return d.neiwan.x1;
        },
        'y1': function(d,i){
            return d.neiwan.y1;
        },
        'x2': function(d,i){
            return d.neiwan.x2;
        },
        'y2': function(d,i){
            return d.neiwan.y2;
        },
        'stroke-width': 2,
        'stroke': 'rgba(255,255,255,.75)'
     });

svg1.selectAll('text').data(data_text).enter().
     append('text').attr({
        'x': function(d,i){
            return d.neiwan.x;
        },
        'y':function(d,i){
            return d.neiwan.y;
        },
        'fill': 'rgba(255,255,255,.75)',
        'font-size':'16',
        'font-weight':'600',
        'writing-mode': 'tb'
     })
     .text('內灣');


$('#i_control_1').click(function(){

    svg1.selectAll('circle')
        .transition()
        .duration(1500)
        .attr({
            'cx': function(d,i){
                return d.alisan.cx;
            },
            'cy': function(d,i){
                return d.alisan.cy;
            },
            'r': function(d,i){
                return d.alisan.r;
            }
        });


    svg1.selectAll('line')
        .transition()
        .duration(1500)
        .attr({
            'x1': function(d,i){
                return d.alisan.x1;
            },
            'y1': function(d,i){
                return d.alisan.y1;
            },
            'x2': function(d,i){
                return d.alisan.x2;
            },
            'y2': function(d,i){
                return d.alisan.y2;
            }
         });

     svg1.selectAll('text')
         .transition()
         .duration(750)
         .attr({
            'x': function(d,i){
                return d.alisan.x;
            },
            'y':function(d,i){
                return d.alisan.y;
            },
            'opacity':'0'
         })
         .transition()
         .duration(750)
         .attr({'opacity':'1'})
         .text('祝山');

});



$('#i_control_2').click(function(){
    svg1.selectAll('circle')
        .transition()
        .duration(1500)
        .attr({
            'cx': function(d,i){
                return d.gigi.cx;
            },
            'cy': function(d,i){
                return d.gigi.cy;
            },
            'r': function(d,i){
                return d.gigi.r;
            }
        });

    svg1.selectAll('line')
        .transition()
        .duration(1500)
        .attr({
            'x1': function(d,i){
                return d.gigi.x1;
            },
            'y1': function(d,i){
                return d.gigi.y1;
            },
            'x2': function(d,i){
                return d.gigi.x2;
            },
            'y2': function(d,i){
                return d.gigi.y2;
            }
         });

     svg1.selectAll('text')
         .transition()
         .duration(750)
         .attr({
            'x': function(d,i){
                return d.gigi.x;
            },
            'y':function(d,i){
                return d.gigi.y;
            },
            'opacity':'0'
         })
         .transition()
         .duration(750)
         .attr({'opacity':'1'})
         .text('車程');

});





$('#i_control_3').click(function(){
    svg1.selectAll('circle')
        .transition()
        .duration(1500)
        .attr({
            'cx': function(d,i){
                return d.pinxi.cx;
            },
            'cy': function(d,i){
                return d.pinxi.cy;
            },
            'r': function(d,i){
                return d.pinxi.r;
            }
        });

    svg1.selectAll('line')
        .transition()
        .duration(1500)
        .attr({
            'x1': function(d,i){
                return d.pinxi.x1;
            },
            'y1': function(d,i){
                return d.pinxi.y1;
            },
            'x2': function(d,i){
                return d.pinxi.x2;
            },
            'y2': function(d,i){
                return d.pinxi.y2;
            }
         });

     svg1.selectAll('text')
         .transition()
         .duration(750)
         .attr({
            'x': function(d,i){
                return d.pinxi.x;
            },
            'y':function(d,i){
                return d.pinxi.y;
            },
            'opacity':'0'
         })
         .transition()
         .duration(750)
         .attr({'opacity':'1'})
         .text('十分');
});




$('#i_control_4').click(function(){

    svg1.selectAll('circle')
        .transition()
        .duration(1500)
        .attr({
            'cx': function(d,i){
                return d.neiwan.cx;
            },
            'cy': function(d,i){
                return d.neiwan.cy;
            },
            'r': function(d,i){
                return d.neiwan.r;
            }
        });


    svg1.selectAll('line')
        .transition()
        .duration(1500)
        .attr({
            'x1': function(d,i){
                return d.neiwan.x1;
            },
            'y1': function(d,i){
                return d.neiwan.y1;
            },
            'x2': function(d,i){
                return d.neiwan.x2;
            },
            'y2': function(d,i){
                return d.neiwan.y2;
            }
         });

     svg1.selectAll('text')
         .transition()
         .duration(750)
         .attr({
            'x': function(d,i){
                return d.neiwan.x;
            },
            'y':function(d,i){
                return d.neiwan.y;
            },
            'opacity':'0'
         })
         .transition()
         .duration(750)
         .attr({'opacity':'1'})
         .text('內灣');
         
});


    // slider 的按鍵 //

    $('.i_control').click(function(){

        var active = $(this).find('p');
        active.css('opacity' , '1');
        $('.i_control p').not(active).css('opacity','0');

        var slider = $(this).next('.i_slider');
        slider.css({
            opacity : '1',
        });
        $('.i_slider').not(slider).css({
            opacity : '0',            
        });
    });



$('#i_control_4').click();

// 自己重複按
    var c_no = 4;
    setInterval(function(){
        c_no--;
        if(c_no < 1){
            c_no = 4;
        }
        document.getElementById('i_control_'+c_no).click()
    },6600);

// slider 的按鍵 over //