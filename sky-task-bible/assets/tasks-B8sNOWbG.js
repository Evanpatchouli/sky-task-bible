const s=[{name:"不限",icon:"images/task-star.png"},{name:"追光",icon:"images/task-pin.png"},{name:"寻光",icon:"images/task-pin.png"},{name:"冥想",icon:"images/task-pin.png"},{name:"社交",icon:"images/task-friend.png"},{name:"花憩节",icon:"images/task-friend.png"},{name:"彩虹日",icon:"images/task-friend.png"},{name:"锦标赛",icon:"images/task-pin.png"},{name:"先祖",icon:"images/task-friend.png"},{name:"其他",icon:"images/task-star.png"}],i={Dawn:t=>`在晨岛重温 - ${t}`,HiddenForest:t=>`在雨林重温 - ${t}`,Prairies:t=>`在云野重温 - ${t}`,Valley:t=>`在霞谷重温 - ${t}`,GoldenWasteland:t=>`在墓土重温 - ${t}`,Vault:t=>`在禁阁重温 - ${t}`},e=[{id:1,type:"追光",icon:"images/task-pin.png",title:"在云野追逐散落的星光",position:"云野 / 蝴蝶平原",description:"前往云野，然后向前飞行至第一个场景，蝴蝶平原，寻找星光并触碰即可完成任务。",images:["https://patchwiki.biligame.com/images/sky/1/19/ltz7tu1bzbzgtv8te0sy8iaex2suwop.png"]},{id:2,type:"追光",icon:"images/task-pin.png",title:"在雨林追逐散落的星光",position:"雨林 / 静谧庭院",description:"前往雨林，然后向前飞行至第一个场景，静谧庭院，寻找星光并触碰即可完成任务。",images:["https://patchwiki.biligame.com/images/sky/a/a6/j2c3gieqki7ur5jureu2dmfblfwd3oz.png"]},{id:3,type:"追光",icon:"images/task-pin.png",title:"在霞谷追逐散落的星光",position:"霞谷 / 溜冰场",description:"前往霞谷，然后向前滑行至第一个场景，溜冰场，寻找星光并触碰即可完成任务。",images:["https://patchwiki.biligame.com/images/sky/2/28/alv7wkqplrnwc6yikbcjmfbxzypfzv5.png"]},{id:4,type:"追光",icon:"images/task-pin.png",title:"在墓土追逐散落的星光",position:"墓土 / Unknown",description:"前往墓土，然后向前滑行至第一个场景，Unknown，寻找星光并触碰即可完成任务。",images:["https://patchwiki.biligame.com/images/sky/7/7f/emcwe2iwil3i1aqalu97kj35tay381j.png"]},{id:5,type:"追光",icon:"images/task-pin.png",title:"在禁阁追逐散落的星光",position:"禁阁 / 一层",description:"前往禁阁，在第一层，寻找星光并触碰即可完成任务。",images:["https://patchwiki.biligame.com/images/sky/9/92/99c30gpx9llxsb6t49otxn86nueq5ka.png"]},{id:6,type:"寻光",icon:"images/task-pin.png",title:"寻找青色光芒",position:"晨岛 / 与云野交界处的云层",description:"前往云野，往后进入晨岛和云野的交接地带，飞往云层中触碰光芒即可",images:["https://patchwiki.biligame.com/images/sky/4/4e/pkurlrec1oka8urfzc4l7mxs68f5xvz.png"]},{id:7,type:"寻光",icon:"images/task-pin.png",title:"寻找绿色光芒",position:"云野 / 云顶浮石 / 左侧的第一个浮岛",description:"在每小时的十分整，从上空掉落至左侧浮岛上，记得卡好时间去哦",images:["https://patchwiki.biligame.com/images/sky/0/01/64nh59zfxyni1lzljxgk1wboq1xvz8q.png"]},{id:8,type:"寻光",icon:"images/task-pin.png",title:"寻找橙色光芒",position:"雨林 / 密林遗迹（水母图）/ 左侧光翼瞭望塔",description:"橙色光芒在瞭望塔附近盘旋，可选择在低处树干站着，等待其经过即可",images:["https://patchwiki.biligame.com/images/sky/2/24/qtec79k6ccgtty4of2cpwy3yjd0alyk.png"]},{id:9,type:"寻光",icon:"images/task-pin.png",title:"寻找蓝色光芒",position:"霞谷 / 溜冰场",description:"蓝色光芒会在溜冰场的冰面上下游动，在冰面的洞口处等待其经过即可",images:["https://patchwiki.biligame.com/images/sky/9/95/61n38tcrnja5h04is3y6u79mg6735qu.png"]},{id:10,type:"寻光",icon:"images/task-pin.png",title:"寻找红色光芒",position:"墓土 / 黑水港湾（沉船）& 失落方舟 / 稻田",description:"黑水港湾的红色光芒会在沉船内外游动，可选择在沉船二楼处等待其经过",images:["https://patchwiki.biligame.com/images/sky/a/a5/b6m4ibk504g4gtgbdaogrzqgjrqha1n.png"]},{id:11,type:"寻光",icon:"images/task-pin.png",title:"寻找紫色光芒",position:"禁阁 / 庇护所",description:"禁阁右侧双人门通往的小图，进入后往右飞到墙壁后面即可看见紫色光芒",images:["https://patchwiki.biligame.com/images/sky/3/3a/smcoebj5i7mb363agb5o6e9jvpi5sfr.png"]},{id:12,type:"冥想",icon:"images/task-pin.png",title:"$TASK_MEDITATE_IN_PRAIRIES_BUTTERFLY_FIELD",position:"云野 / 蝴蝶平原",description:"进入云野往前飞抵达蝴蝶平原，冥想点在大草包附近的小路上",images:["https://patchwiki.biligame.com/images/sky/f/f1/jc1x5uml99ailat19q449ur0gyd6w8a.png"]},{id:13,type:"冥想",icon:"images/task-pin.png",title:"$TASK_MEDITATE_AT_PRAIRIES_CAVE_SHRINE",position:"云野 / 幽光山洞",description:"云野蝴蝶平原左侧通往的小图，冥想点在地图中部的水滩上",images:["https://patchwiki.biligame.com/images/sky/f/f1/jc1x5uml99ailat19q449ur0gyd6w8a.png"]},{id:14,type:"冥想",icon:"images/task-pin.png",title:"$TASK_MEDITATE_AT_PRAIRIES_BIRD_NEST_SHRINE",position:"云野 / 云顶浮石 / 中部第一个浮岛",description:"云野蝴蝶平原右侧通往的小图，冥想点在地图中部第一个浮岛上",images:["https://patchwiki.biligame.com/images/sky/f/f1/jc1x5uml99ailat19q449ur0gyd6w8a.png"]},{id:15,type:"冥想",icon:"images/task-pin.png",title:"在仙乡的金塔下冥想",position:"云野 / 仙乡（三塔图）/ 一塔下",description:"云野蝴蝶平原往前抵达仙乡（俗称三塔图），冥想点在第一个金塔底下",images:["https://patchwiki.biligame.com/images/sky/9/91/spqgjobx5blo5wf460ofzn43e8q586q.png"]},{id:16,type:"冥想",icon:"images/task-pin.png",title:"在锦鲤池旁冥想",position:"云野 / 仙乡（三塔图）/ 神殿前",description:"云野蝴蝶平原往前抵达仙乡（俗称三塔图），继续往前往上飞抵达神殿外，冥想点在水池（锦鲤池）右方",images:["https://patchwiki.biligame.com/images/sky/7/72/m8ijyoyvopusjy4e7862xrtbgqrff2a.png"]},{id:17,type:"冥想",icon:"images/task-pin.png",title:"在静谧庭院外冥想",position:"雨林 / 静谧庭院",description:"前往雨林，往前飞直到雨林大门外，冥想点在左侧空地上",images:["https://patchwiki.biligame.com/images/sky/2/23/cim8ii5mcp164ud686b1djevdxwmpme.png"]},{id:18,type:"冥想",icon:"images/task-pin.png",title:"在荧光森林冥想",position:"雨林 / 荧光森林 / 入口的小亭子内",description:"前往雨林，一直前进直到荧光森林，冥想点在离入口不远处的小亭子内，右侧是通往秘密花园（老奶奶树屋）的入口",images:["https://patchwiki.biligame.com/images/sky/2/23/cim8ii5mcp164ud686b1djevdxwmpme.png"]},{id:19,type:"冥想",icon:"images/task-pin.png",title:"在秘密花园里冥想",position:"雨林 / 秘密花园 / 树屋右侧土台上",description:"前往雨林，一直前进直到荧光森林，右侧是通往秘密花园（老奶奶树屋）的入口，冥想点在树屋右侧的土台上。可以在雨林前往静谧庭院的途中，通过大树屋的第二个洞口直达荧光森林",images:["https://patchwiki.biligame.com/images/sky/c/c2/7g1kub9zvqjbgi7i4n9f3e70bxp0zgv.png"]},{id:20,type:"冥想",icon:"images/task-pin.png",title:"在密林遗迹冥想",position:"雨林 / 密林遗迹 / 中部左侧小亭子内",description:"前往雨林的密林遗迹（水母图），冥想点在地图中部三个亭子左侧的小亭子内",images:["https://patchwiki.biligame.com/images/sky/b/b1/8o6crgxky69nkp31jqre5va8d53z13b.png"]},{id:21,type:"冥想",icon:"images/task-pin.png",title:"在雨林的神庙内冥想",position:"雨林 / 神庙 / 终点树林右侧",description:"前往雨林神殿，坐祭坛或遁地前往终点门后的树林，冥想点在右侧林间",images:["https://patchwiki.biligame.com/images/sky/6/6c/fa1jc28wbd6o2ofc7jndrpibkxx5btm.png"]},{id:22,type:"冥想",icon:"images/task-pin.png",title:"在滑冰场旁冥想",position:"霞谷 / 滑冰场 / 高点",description:"前往霞谷溜冰场，冥想点在右侧的山体高处的平面上",images:["https://patchwiki.biligame.com/images/sky/f/fa/tu0kyhg6hzgz0trtx37i4uut8i6f4jv.png"]},{id:23,type:"冥想",icon:"images/task-pin.png",title:"在霞光城拱门上冥想",position:"霞谷 / 霞光城 / 拱门上",description:"",images:["https://patchwiki.biligame.com/images/sky/f/fa/tu0kyhg6hzgz0trtx37i4uut8i6f4jv.png"]},{id:24,type:"冥想",icon:"images/task-pin.png",title:"在霞光城上冥想",position:"霞谷 / 霞光城",description:"",images:["https://patchwiki.biligame.com/images/sky/f/fa/tu0kyhg6hzgz0trtx37i4uut8i6f4jv.png"]},{id:25,type:"冥想",icon:"images/task-pin.png",title:"在边陲荒漠的神庙里冥想",position:"墓土 / 边陲荒漠 / 破庙内",description:"",images:["https://patchwiki.biligame.com/images/sky/b/b0/fwqtkr8t32c2sy7chhom0wjpjwwod6t.png"]},{id:26,type:"冥想",icon:"images/task-pin.png",title:"在黑水港湾的沉船上冥想",position:"墓土 / 黑水港湾 / 沉船二楼",description:"",images:["https://patchwiki.biligame.com/images/sky/7/74/3zryi6h4l7n0y2nx24laoin0b04yptj.png"]},{id:27,type:"冥想",icon:"images/task-pin.png",title:"在巨兽荒原的神坛旁冥想",position:"墓土 / 巨兽荒原",description:"",images:["https://patchwiki.biligame.com/images/sky/b/b7/3p9nb6j79a2owuhqfrmo8b1kne27oio.png"]},{id:28,type:"冥想",icon:"images/task-pin.png",title:"在远古战场中央冥想",position:"墓土 / 远古战场 / 大花附近",description:"",images:["https://patchwiki.biligame.com/images/sky/5/51/crsu38zcsn4f6qavj4nf1q3x6m57jjx.png"]},{id:29,type:"冥想",icon:"images/task-pin.png",title:"在禁阁的神坛旁冥想",position:"墓土 / 一楼 / 右侧",description:"",images:["https://patchwiki.biligame.com/images/sky/2/2b/ise73v0i0v9ncjmtgc7ews425nlkwww.png"]},{id:30,type:"冥想",icon:"images/task-pin.png",title:"在禁阁底层祈祷",position:"禁阁 / 二楼",description:"",images:["https://patchwiki.biligame.com/images/sky/e/e2/7vkk91fuedbghinlg9o7mf2jp2d36g9.png"]},{id:31,type:"冥想",icon:"images/task-pin.png",title:"在禁阁顶层神坛旁冥想",position:"禁阁 / 顶楼",description:"",images:["https://patchwiki.biligame.com/images/sky/5/5c/mod22e5n21c44ss740do2ktimbnsb74.png"]},{id:32,type:"其他",icon:"images/task-star.png",title:"收集30点烛火",position:"不限",description:"收集任意 30 点烛火即可完成任务，建议点燃一堆大蜡烛",images:[]},{id:33,type:"其他",icon:"images/task-star.png",title:"点燃20根蜡烛",position:"不限",description:"点燃任意 20 根蜡烛即可完成任务，建议点燃一堆大蜡烛",images:[]},{id:34,type:"其他",icon:"images/task-star.png",title:"净化10株黑暗植物",position:"不限",description:"烧掉任意 10 株黑暗植物即可完成任务，建议前往雨林和墓土",images:[]},{id:35,type:"其他",icon:"images/task-star.png",title:"掀翻5只螃蟹",position:"不限",description:"长按光崽身体或动作栏中的声音，掀翻任意 5 只螃蟹即可完成任务，建议前往墓土或云野圣岛",images:[]},{id:36,type:"其他",icon:"images/task-star.png",title:"拯救一只被黑暗藤蔓困住的遥鲲",position:"雨林 / 密林遗迹（水母图）",description:"图中有两处黑暗藤蔓困住了遥鲲，找到其中一处，烧掉藤蔓并解放遥鲲即可完成任务",images:[]},{id:37,type:"其他",icon:"images/task-star.png",title:"面对冥龙",position:"墓土 & 暴风眼",description:"被冥龙锁定即可完成任务，完成后记得立刻躲到掩体后或返回遇境",images:[]},{id:38,type:"其他",icon:"images/task-pin.png",title:"在荧光小菇旁恢复能量",position:"雨林",description:"在雨林中，能量耗完后靠近任意荧光小菇恢复能量即可完成",images:[]},{id:39,type:"其他",icon:"images/task-pin.png",title:"2人合力开启一道门",position:"不限",description:"禁阁底层右侧的双人门最近，找到一位玩家合力开启即可完成任务",images:[]},{id:40,type:"社交",icon:"images/task-friend.png",title:"向一位玩家鞠躬",position:"不限",description:"近距离朝向一位好友或小黑鞠躬即可完成任务"},{id:41,type:"社交",icon:"images/task-friend.png",title:"向一位朋友鞠招手",position:"不限",description:"近距离朝向一位好友招手即可完成任务"},{id:42,type:"社交",icon:"images/task-friend.png",title:"向一位朋友做个动作",position:"不限",description:"近距离朝向一位好友做任意动作即可完成任务"},{id:43,type:"社交",icon:"images/task-friend.png",title:"和朋友击掌",position:"不限",description:"和好友击掌即可，或前往与集结季先祖击掌"},{id:44,type:"社交",icon:"images/task-friend.png",title:"接受一位朋友的礼物",position:"不限",description:"在遇境或云巢的星盘中接受一位好友的心火即可完成任务"},{id:45,type:"社交",icon:"images/task-friend.png",title:"给一位朋友送礼",position:"不限",description:"赠送一颗爱心给好友即可完成任务，赠送内购礼包不计入任务"},{id:46,type:"社交",icon:"images/task-friend.png",title:"为一位玩家补充能量",position:"不限",description:"站一起或者大叫回能即可完成任务"},{id:47,type:"社交",icon:"images/task-friend.png",title:"与4位玩家牵手组队",position:"不限",description:"和 3 位及以上好友牵手即可。单人玩家可以前往禁阁庇护所（追忆季）做刚进门的任务，或者前往霞谷圆梦村剧场（表演季）任务四，牵 3 个先祖即可完成任务"},{id:48,type:"社交",icon:"images/task-friend.png",title:"和陌生人一起坐在长凳上",position:"不限",description:"前往各地图大厅的长凳上与小黑同坐即可完成任务"},{id:49,type:"先祖",icon:"images/ancestor-pusher.png",title:i.Vault`气功高人`,position:"禁阁 / 二楼 / 四人门内",description:"",images:[]},{id:50,type:"先祖",icon:"images/不舍家长.png",title:i.GoldenWasteland`不舍家长`,position:"墓土 / 巨兽荒原 / 挂机点",description:"",images:[]},{id:51,type:"先祖",icon:"images/旋转大师.png",title:i.Valley`旋转大师`,position:"霞谷 / 圆梦村",description:"",images:[]},{id:52,type:"先祖",icon:"images/犯困船工.png",title:i.Prairies`犯困船工`,position:"云野 / 云中仙乡 / 塔一双人门内",description:"",images:[]},{id:53,type:"先祖",icon:"images/跳跃舞者.png",title:i.Valley`跳跃舞者`,position:"霞谷 / 滑冰场 / 双人门内",description:"",images:[]},{id:54,type:"先祖",icon:"images/抱头卧地.png",title:i.GoldenWasteland`抱头卧地`,position:"墓土 / 图一",description:"",images:[]},{id:55,type:"先祖",icon:"images/挥手钟匠.png",title:i.Prairies`挥手钟匠`,position:"云野 / 云中仙乡 / 中部小岛码头",description:"",images:[]},{id:56,type:"先祖",icon:"images/引蝶人.png",title:i.Prairies`引蝶人`,position:"云野 / 蝴蝶平原 / 巨大球形岩石的洞口",description:"",images:[]},{id:57,type:"先祖",icon:"images/警惕站姿.png",title:i.GoldenWasteland`警惕站姿`,position:"墓土 / 巨兽荒原（四龙图）",description:"",images:[]},{id:58,type:"先祖",icon:"images/悬浮行者.png",title:i.Vault`悬浮行者`,position:"禁阁 / 四楼 / 祈祷石像",description:"",images:[]},{id:59,type:"先祖",icon:"images/舒展大师.png",title:i.Prairies`舒展大师`,position:"云野 / 幽光山洞 / 左侧",description:"",images:[]},{id:60,type:"先祖",icon:"images/白日梦森林人.png",title:i.HiddenForest`白日梦森林人`,position:"雨林 / 密林遗迹 / 入口右上方大树屋",description:"",images:[]}];export{s as T,e as t};
