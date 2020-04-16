/*
    Data cache
    requestData Cache found four categories of music songs
    recomment Cache homepage recommended song list song information
*/
// var musicClassifyList;//Used to store classified song information
// var recomListName;//Used to store playlist names
// var recomListSong;//Used to store song list song information

// //Get discovery music data
// $.ajax({
//     url:'server.php/discover',
//     type:'get',
//     dataType:'json',
//     success:function(datas){
//         if(datas.code == 200){
//             musicClassifyList = datas.data;
//         }
//     },
//     complete:function(){
//         player.musicClassify();
//         player.playMusic('#cata','.plays');
//         player.adds('.adds');
//         player.collect('.heart');
//     }
// });

// //Get homepage recommended song list
// $.ajax({
//     url:'server.php/playlist',
//     type:'get',
//     dataType:'json',
//     success:function(datas){
//         if(datas.code == 200){
//             recomListName = datas.data;
//         }
//     },
//     complete:function(){
//         $.ajax({
//             url:'server.php/playlist/songs',
//             type:'get',
//             dataType:'json',
//             success:function(datas){
//                 if(datas.code == 200){
//                     recomListSong = datas.data;
//                 }
//             },
//             complete:function(){
//                 player.recomMusicBox();
//                 player.recomendMusicList();
//                 player.closeRecommendMusicList();
//                 player.playMusic('#home','.plays');
//                 player.adds('.adds');
//                 player.collect('.heart');
//             }
//         });
//     }
// });

// function requestData () {
// 	var className = ['Movie Soundtrack','Popular Chinese','European and American classics','Japanese and Korean New Songs'];//Declare category name
//     var data = musicClassifyList;
// 	return [className,data];
// }

// function recomment(){
//     //Declare the recommended playlist name
//     var listName = recomListName;
//     var listDesc = [//Statement recommended song list introduction
//         'Follow your heart, if you think he is right, then follow him! Follow your heart, if you think you are right, then follow you! The world of one heart is free, without restraint.',
//         'Lost in the forest, accidentally, I woke you up, maybe doomed, the longing for love, waiting for your response. The scenery along the way, the phantom left behind, began to feel, opened his eyes and wanted to walk with you.',
//         'Everyone remembers youth, the year of rush, always thinks of someone, the sky is blue and the sun is just right, we meet so, when we remember youth, we always think of someone',
//         'To become a sea, there are thousands of miles of tide. To climb a snowy mountain to eat a barbecue, to drive a fishing boat to chase the sunset, to write love letters, to float across the glacier to see the aurora.',
//         'The gray cat who grew up with you, eating spicy strips of dry noodles, he passed the wind, the thoughts in the small notes, and the beautiful female classmates who went to the toilet together.'
//     ];
//     var recommentList = recomListSong;
//     return [listName,listDesc,recommentList];
// }


function requestData () {
    // body...
    var className = ['Movie Soundtrack','Popular Chinese','European and American classics','Japanese and Korean New Songs'];//Declare category name
    var data = [
        //First category
        [
            
            {   
                'Id':'0',
                'Name':'To Dartmoor',
                'Singer':'Detective Sherlock',
                'Src':'storage/songs/To Dartmoor.mp3',
                'Img':'src/imgs/list1-1.jpg',
                'Catogroy':'0',
                'musicList':''
            },
            {   
                'Id':'1',
                'Name':'More Than A Woman',
                'Singer':'Bankrupt sisters',
                'Src':'storage/songs/More Than A Woman.mp3',
                'Img':'src/imgs/list1-2.jpg',
                'Catogroy':'0',
                'musicList':''
            },
            {
                'Id':'2',
                'Name':'Always',
                'Singer':'Descendants of the sun',
                'Src':'storage/songs/always.mp3',
                'Img':'src/imgs/list1-3.jpg',
                'Catogroy':'0',
                'musicList':'0'
            },
            {   
                'Id':'3',
                'Name':'Hong Yan old',
                'Singer':'Liu Tao',
                'Src':'storage/songs/Hong Yan old.mp3',
                'Img':'src/imgs/list1-4.jpg',
                'Catogroy':'0',
                'musicList':'0'
            },
            {
                'Id':'4',
                'Name':'一Very quiet',
                'Singer':'(Asang)',
                'Src':'storage/songs/always quiet.mp3',
                'Img':'src/imgs/list1-5.jpg',
                'Catogroy':'0',
                'musicList':'0'
            },
            {
                'Id':'5',
                'Name':'Time to cook rain',
                'Singer':'Yu Kewei (Little Age)',
                'Src':'storage/songs/Time to cook rain.mp3',
                'Img':'src/imgs/list1-9.jpg',
                'Catogroy':'0',
                'musicList':'1'
            },
            {
                'Id':'6',
                'Name':'Happy',
                'Singer':'Despicable Me',
                'Src':'storage/songs/Happy.mp3',
                'Img':'src/imgs/list1-7.jpg',
                'Catogroy':'0',
                'musicList':''
            },
            {   
                'Id':'7',
                'Name':'Davichi',
                'Singer':'It's okay, it's love',
                'Src':'storage/songs/Davichi.mp3',
                'Img':'src/imgs/list1-8.jpg',
                'Catogroy':'0',
                'musicList':'1'
            },
            {   
                'Id':'8',
                'Name':'Hot snow',
                'Singer':'Small age',
                'Src':'storage/songs/Hot snow.mp3',
                'Img':'src/imgs/list1-6.jpg',
                'Catogroy':'0',
                'musicList':'1'
            },
            {   
                'Id':'9',
                'Name':'Jianghuxiao',
                'Singer':'Condor Hero',
                'Src':'imagsong/Jianghuxiao.mp3',
                'Img':'src/imgs/list1-10.jpg',
                'Catogroy':'0',
                'musicList':'1'
            }
        ],
        //Second category
        [
            {   
                'Id':'10',
                'Name':'long time no see',
                'Singer':'Eason Chan',
                'Src':'storage/songs/long time no see.mp3',
                'Img':'src/imgs/list2-1.jpg',
                'Catogroy':'1',
                'musicList':'0'
            },
            {   
                'Id':'11',
                'Name':'我的歌声里',
                'Singer':'曲婉婷',
                'Src':'storage/songs/我的歌声里.mp3',
                'Img':'src/imgs/list2-2.jpg',
                'Catogroy':'1',
                'musicList':'2'
            },
            {
                'Id':'12',
                'Name':'野子',
                'Singer':'苏运莹',
                'Src':'storage/songs/野子.mp3',
                'Img':'src/imgs/list2-3.jpg',
                'Catogroy':'1',
                'musicList':'2'
            },
            {
                'Id':'13',
                'Name':'演员',
                'Singer':'薛之谦',
                'Src':'storage/songs/演员.mp3',
                'Img':'src/imgs/list2-4.jpg',
                'Catogroy':'1',
                'musicList':'2'
            },
            {
                'Id':'14',
                'Name':'我在人民广场吃炸鸡',
                'Singer':'阿肆',
                'Src':'storage/songs/我在人民广场吃炸鸡.mp3',
                'Img':'src/imgs/list2-5.jpg',
                'Catogroy':'1',
                'musicList':'2'
            },
            {
                'Id':'15',
                'Name':'南山南',
                'Singer':'张磊',
                'Src':'storage/songs/南山南.mp3',
                'Img':'src/imgs/list2-6.jpg',
                'Catogroy':'1',
                'musicList':'2'
            },
            {
                'Id':'16',
                'Name':'黑白',
                'Singer':'方大同',
                'Src':'storage/songs/黑白.mp3',
                'Img':'src/imgs/list2-7.jpg',
                'Catogroy':'2',
                'musicList':'2'
            },
            {
                'Id':'17',
                'Name':'普通朋友',
                'Singer':'陶喆',
                'Src':'storage/songs/普通朋友.mp3',
                'Img':'src/imgs/list2-8.jpg',
                'Catogroy':'1',
                'musicList':'1'
            },
            {
                'Id':'18',
                'Name':'旅行的意义',
                'Singer':'陈绮贞',
                'Src':'storage/songs/旅行的意义.mp3',
                'Img':'src/imgs/list2-9.jpg',
                'Catogroy':'1',
                'musicList':'2'
            },
            {
                'Id':'19',
                'Name':'很靠近海',
                'Singer':'蔡健雅',
                'Src':'storage/songs/很靠近海.mp3',
                'Img':'src/imgs/list2-10.jpg',
                'Catogroy':'1',
                'musicList':'1'
            }

        ],
        //第三个类别
        [
            
            {
                'Id':'20',
                'Name':'Uptown Funk',
                'Singer':'Mark Ronson,Bruno Mars',
                'Src':'storage/songs/Uptown Funk.mp3',
                'Img':'src/imgs/list3-1.jpg',
                'Catogroy':'2',
                'musicList':'3'
            },
            {
                'Id':'21',
                'Name':'Ours',
                'Singer':'Taylor Swift',
                'Src':'storage/songs/Ours.mp3',
                'Img':'src/imgs/list3-2.jpg',
                'Catogroy':'2',
                'musicList':'1'
            },
            {
                'Id':'22',
                'Name':'Someone Like You',
                'Singer':'Adele',
                'Src':'storage/songs/Someone Like You.mp3',
                'Img':'src/imgs/list3-3.jpg',
                'Catogroy':'2',
                'musicList':'3'
            },
            {
                'Id':'23',
                'Name':'Firework',
                'Singer':'Katy Perry',
                'Src':'storage/songs/Firework.mp3',
                'Img':'src/imgs/list3-4.jpg',
                'Catogroy':'2',
                'musicList':'4'
            },
            {
                'Id':'24',
                'Name':'Diamonds',
                'Singer':'Rihanna',
                'Src':'storage/songs/Diamonds.mp3',
                'Img':'src/imgs/list3-5.jpg',
                'Catogroy':'2',
                'musicList':'3'
            },
            {
                'Id':'25',
                'Name':'Rolling in the Deep',
                'Singer':'Adele',
                'Src':'storage/songs/Rolling in the Deep.mp3',
                'Img':'src/imgs/list3-3.jpg',
                'Catogroy':'2',
                'musicList':'3'
            },
            {
                'Id':'26',
                'Name':'Innocence',
                'Singer':'Avril Lavigne',
                'Src':'storage/songs/Innocence.mp3',
                'Img':'src/imgs/list3-7.jpg',
                'Catogroy':'2',
                'musicList':'4'
            },
            {
                'Id':'27',
                'Name':'Baby One More Time',
                'Singer':'Britney Spears',
                'Src':'storage/songs/Baby One More Time.mp3',
                'Img':'src/imgs/list3-8.jpg',
                'Catogroy':'2',
                'musicList':'3'
            },
            {
                'Id':'28',
                'Name':'Let It Go',
                'Singer':'Demi Lovato',
                'Src':'storage/songs/Let It Go.mp3',
                'Img':'src/imgs/list3-9.jpg',
                'Catogroy':'2',
                'musicList':'3'
            },
            {
                'Id':'29',
                'Name':"We Can't Stop",
                'Singer':'Miley Cyrus',
                'Src':"storage/songs/We Can't Stop.mp3",
                'Img':'src/imgs/list3-10.jpg',
                'Catogroy':'2',
                'musicList':'4'
            }
        ],
        //第四个类别
        [
            {
                'Id':'30',
                'Name':"Come Back Home",
                'Singer':'2NE1',
                'Src':"storage/songs/Come Back Home.mp3",
                'Img':'src/imgs/list4-1.jpg',
                'Catogroy':'3',
                'musicList':'4'
            },
            {
                'Id':'31',
                'Name':"人情味",
                'Singer':'Gary、郑仁',
                'Src':"storage/songs/人情味.mp3",
                'Img':'src/imgs/list4-2.jpg',
                'Catogroy':'2',
                'musicList':'4'
            },
            {
                'Id':'32',
                'Name':'Some',
                'Singer':'Junggigo、昭宥',
                'Src':'storage/songs/Some.mp3',
                'Img':'src/imgs/list4-3.jpg',
                'Catogroy':'4',
                'musicList':'0'
            },
            {
                'Id':'33',
                'Name':'百变小樱',
                'Singer':'百变小樱',
                'Src':'storage/songs/百变小樱.mp3',
                'Img':'src/imgs/list4-4.jpg',
                'Catogroy':'4',
                'musicList':'4'
            },
            {
                'Id':'34',
                'Name':'不能分手的女人不能离开的男人',
                'Singer':'leessang',
                'Src':'storage/songs/不能分手的女人不能离开的男人.mp3',
                'Img':'src/imgs/list4-5.jpg',
                'Catogroy':'4',
                'musicList':'0'
            },
            {
                'Id':'35',
                'Name':'夏夕空',
                'Singer':'夏目友人帐',
                'Src':'storage/songs/夏夕空.mp3',
                'Img':'src/imgs/list4-6.jpg',
                'Catogroy':'4',
                'musicList':'4'
            },
            {
                'Id':'36',
                'Name':'BLUE',
                'Singer':'Bigbang',
                'Src':'storage/songs/BLUE.mp3',
                'Img':'src/imgs/list4-7.jpg',
                'Catogroy':'4',
                'musicList':'4'
            },
            {
                'Id':'37',
                'Name':"谎言",
                'Singer':'BigBang',
                'Src':"storage/songs/谎言.mp3",
                'Img':'src/imgs/list4-7.jpg',
                'Catogroy':'4',
                'musicList':'4'
            },
            {
                'Id':'38',
                'Name':"Can't Stop",
                'Singer':'CNBLUE',
                'Src':"storage/songs/Can't Stop.mp3",
                'Img':'src/imgs/list4-9.jpg',
                'Catogroy':'4',
                'musicList':'4'
            },
            {
                'Id':'39',
                'Name':"咆哮(Growl)",
                'Singer':'EXO',
                'Src':"storage/songs/咆哮(Growl).mp3",
                'Img':'src/imgs/list4-10.jpg',
                'Catogroy':'4',
                'musicList':'4'
            }

        ]

    ];
    return [className,data];
}

function recomment(){
    var listName = [//Declare the recommended playlist name
        'You ask me how to go far, I said follow my heart ~',
        'Songs planted in the ears bloom youthful flowers',
        'If time goes back, I will wait for you in my memory',
        '"Morning Run" a breeze in the hot summer',
        'Its amazing, Im crazy'
    ];
    var listDesc = [//Statement recommended song list introduction
        'Follow your heart, if you think he is right, then follow him! Follow your heart, if you think you are right, then follow you! The world of one heart is free, without restraint.',
        'Lost in the forest, accidentally, I woke you up, maybe doomed, the longing for love, waiting for your response. The scenery along the way, the phantom left behind, began to feel, opened his eyes and wanted to walk with you.',
        'Everyone remembers youth, the year of rush, always thinks of someone, the sky is blue and the sun is just right, we meet so, when we remember youth, we always think of someone',
        'To become a sea, there are thousands of miles of tide. To climb the snow mountain to eat barbecue, to drive the fishing boat to chase the sunset, to write love letters, to float over the glacier to see the aurora.',
        'The gray cat who grew up with you, eating spicy strips of dry noodles, he passed the wind, the thoughts in the small notes, and the beautiful female classmates who went to the toilet together.'
    ];
    var recommentList = [
        //You ask me how to go far, I said follow my heart ~
        [
            {
                'Id':'2',
                'Name':'Always',
                'Singer':'Descendants of the sun',
                'Src':'storage/songs/always.mp3',
                'Img':'src/imgs/list1-3.jpg'
            },
            {
                'Id':'32',
                'Name':'Some',
                'Singer':'Junggigo、Zhaoyou',
                'Src':'storage/songs/Some.mp3',
                'Img':'src/imgs/list4-3.jpg'
            },
            {
                'Id':'34',
                'Name':'Women who can't break up Men who can't leave',
                'Singer':'leessang',
                'Src':'storage/songs/不能分手的女人不能离开的男人.mp3',
                'Img':'src/imgs/list4-5.jpg'
            },
            {
                'Id':'17',
                'Name':'normal friend',
                'Singer':'David Tao',
                'Src':'storage/songs/普通朋友.mp3',
                'Img':'src/imgs/list2-8.jpg',
            },
            {
                'Id':'10',
                'Name':'long time no see',
                'Singer':'Eason Chan',
                'Src':'storage/songs/好久不见.mp3',
                'Img':'src/imgs/list2-1.jpg'
            },
            {
                'Id':'3',
                'Name':'红颜旧',
                'Singer':'刘涛',
                'Src':'storage/songs/红颜旧.mp3',
                'Img':'src/imgs/list1-4.jpg'
            },
            {
                'Id':'4',
                'Name':'一直很安静',
                'Singer':'阿桑(仙剑一)',
                'Src':'storage/songs/一直很安静.mp3',
                'Img':'src/imgs/list1-5.jpg'
            }
        ],
        [//Songs planted in the ears bloom youthful flowers
            {
                'Id':'35',
                'Name':'夏夕空',
                'Singer':'夏目友人帐',
                'Src':'storage/songs/夏夕空.mp3',
                'Img':'src/imgs/list4-6.jpg'
            },
            {
                'Id':'19',
                'Name':'很靠近海',
                'Singer':'蔡健雅',
                'Src':'storage/songs/很靠近海.mp3',
                'Img':'src/imgs/list2-10.jpg'
            },
            {
                'Id':'18',
                'Name':'旅行的意义',
                'Singer':'陈绮贞',
                'Src':'storage/songs/旅行的意义.mp3',
                'Img':'src/imgs/list2-9.jpg'
            },
            {
                'Id':'5',
                'Name':'时间煮雨',
                'Singer':'郁可唯(小时代)',
                'Src':'storage/songs/时间煮雨.mp3',
                'Img':'src/imgs/list1-9.jpg'
            },
            {
                'Id':'15',
                'Name':'南山南',
                'Singer':'张磊',
                'Src':'storage/songs/南山南.mp3',
                'Img':'src/imgs/list2-6.jpg'
            },
            {
                'Id':'8',
                'Name':'热雪',
                'Singer':'小时代',
                'Src':'storage/songs/热雪.mp3',
                'Img':'src/imgs/list1-6.jpg'
            },
            {
                'Id':'21',
                'Name':'Ours',
                'Singer':'Taylor Swift',
                'Src':'storage/songs/Ours.mp3',
                'Img':'src/imgs/list3-2.jpg'
            }

        ],
        [//If time goes back, I will wait for you in my memory
            {
                'Id':'31',
                'Name':"Human touch",
                'Singer':'Gary、Zheng Ren',
                'Src':"storage/songs/人情味.mp3",
                'Img':'src/imgs/list4-2.jpg'
            },
            {
                'Id':'7',
                'Name':'Davichi',
                'Singer':'It's okay, it's love',
                'Src':'storage/songs/Davichi.mp3',
                'Img':'src/imgs/list1-8.jpg'
            },
            {
                'Id':'9',
                'Name':'Jianghuxiao',
                'Singer':'Condor Hero',
                'Src':'imagsong/江湖笑.mp3',
                'Img':'src/imgs/list1-10.jpg'
            },
            {
                'Id':'28',
                'Name':'Let It Go',
                'Singer':'Demi Lovato',
                'Src':'storage/songs/Let It Go.mp3',
                'Img':'src/imgs/list3-9.jpg'
            },
            {
                'Id':'26',
                'Name':'Innocence',
                'Singer':'Avril Lavigne',
                'Src':'storage/songs/Innocence.mp3',
                'Img':'src/imgs/list3-7.jpg'
            },
            {
                'Id':'25',
                'Name':'Rolling in the Deep',
                'Singer':'Adele',
                'Src':'storage/songs/Rolling in the Deep.mp3',
                'Img':'src/imgs/list3-3.jpg'
            }
        ],
        [//"Morning Run" a breeze in the hot summer
            {
                'Id':'39',
                'Name':"roar(Growl)",
                'Singer':'EXO',
                'Src':"storage/songs/咆哮(Growl).mp3",
                'Img':'src/imgs/list4-10.jpg'
            },
            {
                'Id':'37',
                'Name':"lie",
                'Singer':'BigBang',
                'Src':"storage/songs/谎言.mp3",
                'Img':'src/imgs/list4-7.jpg'
            },
            {
                'Id':'30',
                'Name':"Come Back Home",
                'Singer':'2NE1',
                'Src':"storage/songs/Come Back Home.mp3",
                'Img':'src/imgs/list4-1.jpg'
            },
            {
                'Id':'20',
                'Name':'Uptown Funk',
                'Singer':'Mark Ronson,Bruno Mars',
                'Src':'storage/songs/Uptown Funk.mp3',
                'Img':'src/imgs/list3-1.jpg'
            },
            {
                'Id':'27',
                'Name':'Baby One More Time',
                'Singer':'Britney Spears',
                'Src':'storage/songs/Baby One More Time.mp3',
                'Img':'src/imgs/list3-8.jpg'
            },
            {
                'Id':'24',
                'Name':'Diamonds',
                'Singer':'Rihanna',
                'Src':'storage/songs/Diamonds.mp3',
                'Img':'src/imgs/list3-5.jpg'
            }
        ],
        [//It's amazing, I'm crazy
            {
                'Id':'23',
                'Name':'Firework',
                'Singer':'Katy Perry',
                'Src':'storage/songs/Firework.mp3',
                'Img':'src/imgs/list3-4.jpg'
            },
            {
                'Id':'36',
                'Name':'BLUE',
                'Singer':'Bigbang',
                'Src':'storage/songs/BLUE.mp3',
                'Img':'src/imgs/list4-7.jpg'
            },
            {
                'Id':'29',
                'Name':"We Can't Stop",
                'Singer':'Miley Cyrus',
                'Src':"storage/songs/We Can't Stop.mp3",
                'Img':'src/imgs/list3-10.jpg'
            },
            {
                'Id':'23',
                'Name':'Firework',
                'Singer':'Katy Perry',
                'Src':'storage/songs/Firework.mp3',
                'Img':'src/imgs/list3-4.jpg'
            },
            {
                'Id':'26',
                'Name':'Innocence',
                'Singer':'Avril Lavigne',
                'Src':'storage/songs/Innocence.mp3',
                'Img':'src/imgs/list3-7.jpg'
            },
            {
                'Id':'33',
                'Name':'Variety Sakura',
                'Singer':'Variety Sakura',
                'Src':'storage/songs/百变小樱.mp3',
                'Img':'src/imgs/list4-4.jpg'
            }
        ]
    ];
    return [listName,listDesc,recommentList];
}