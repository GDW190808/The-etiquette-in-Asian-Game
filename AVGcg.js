// JavaScript Document

var avgData = [
	{
	stage:0,
	'tcj':'家中',
	'tdhk':'小明',
	'texdhk':'看个比赛而已，我就穿背心拖鞋去吧，我自己怎么舒服怎么来!',
	'select':['有道理，我也穿睡衣去吧','','不对的，场馆对穿着还是有要求的'],
	'chara':['','','url("./images/y7.png'],
	'bg':'url("./images/ws.jpg")',
	'next':[1,0,2]
		},
	
	{
	stage:1,
	'tcj':'场馆门口',
	'tdhk':'场馆工作人员',
	'texdhk':'本场馆要求穿着得体才能进入！穿睡衣的家伙不能进入！大部分场馆对穿着是有特殊要求的,请提前了解规则！',
	'select':['我就要进！我要和你辩论!','','知道错了，可以多告诉我一些么！'],
	'chara':['url(./images/)','url(./images/)','url(./images/y4.png)'],
	'bg':'url("./images/tyg.jpg")',
	'next':[4,1,3]
		},
	
	{
	stage:2,
	'tcj':'家中',
	'tdhk':'妈妈',
	'texdhk':'对的，你说的没错，各种场馆对观赛时的穿着打扮还是有要求的，总体来说得体就好，不要穿颜色过于鲜艳，造型过于奇葩的衣服,有些场馆还要求不能穿高跟鞋、皮鞋、钉鞋等声音过大的鞋子，以免给运动员造成干扰！',
	'select':['','嘻嘻！ 我们去看比赛吧！',''],
	'chara':['url(./images/)','url(./images/)','url(./images/mama3.png)'],
	'bg':'url("./images/ws.jpg")',
	'next':[2,5,2]
		},
	
	{
	stage:3,
	'tcj':'场馆门口',
	'tdhk':'场馆工作人员',
	'texdhk':'总体来说得体就好，不要穿颜色过于鲜艳，造型过于奇葩的衣服,有些场馆还要求不能穿高跟鞋、皮鞋、钉鞋等声音过大的鞋子，以免给运动员造成干扰！',
	'select':['','明白啦！我去换身衣服再来',''],
	'chara':['url(./images/','url(./images/)','url(./images/y4.png'],
	'bg':'url("./images/tyg.jpg")',
	'next':[3,5,3]
		},
	
	{
	stage:4,
	'tcj':'场馆门口',
	'tdhk':'妈妈',
	'texdhk':'既然来观赛，我们就要服从场馆管理人员的管理哦！不得与工作人员发生冲突哦！',
	'select':['','明白啦！我去换身衣服再来！',''],
	'chara':['url(./images/ren1)','url(./images/)','url(./images/mama4.png)'],
	'bg':'url("./images/tyg.jpg")',
	'next':[4,5,4]
		},
	
	{
	stage:5,
	'tcj':'观众席',
	'tdhk':'亚洲小孩',
	'texdhk':'场地里有好多没见过的设备欸，我们去场地中心看看吧！',
	'select':['走吧！我也想去！','','不可以！有些地方我们是不能去的！'],
	'chara':['url(./images/jj.png)','url(./images/y6.png)','url(./images/'],
	'bg':'url("./images/zw.jpg")',
	'next':[6,5,7]
		},	
	
	{
	stage:6,
	'tcj':'观众席',
	'tdhk':'场馆工作人员',
	'texdhk':'作为观众请在规定区域内活动！这里不允许观众入内！ (大声喝止)',
	'select':['','回到观众席上',''],
	'chara':['url(./images/)','url(./images/)','url(./images/y4.png)'],
	'bg':'url("./images/zw.jpg")',
	'next':[6,8,6]
		},
	
	{
	stage:7,
	'tcj':'观众席',
	'tdhk':'亚洲小孩',
	'texdhk':'是欸！你提醒我了！妈妈说过观赛时，我们只能在规定区域内活动,场馆内的设备我们也不能乱动！',
	'select':['','比赛要开始了！快看！',''],
	'chara':['url(./images/)','url(./images/)','url(./images/y2.png)'],
	'bg':'url("./images/zw.jpg")',
	'next':[7,8,7]
		},
		
	{
	stage:8,
	'tcj':'观众席',
	'tdhk':'亚洲小孩',
	'texdhk':'快看那个运动员失误了！不行！不行！他也太菜了吧！',
	'select':['嘘！我们要给他们鼓励 ！','','是呀是呀！太菜了！'],
	'chara':['url(./images/)','url(./images/)','url(./images/y1.png)'],
	'bg':'url("./images/zw.jpg")',
	'next':[10,8,9]
		},
		
	{
	stage:9,
	'tcj':'观众席',
	'tdhk':'妈妈',
	'texdhk':'不可以这么说哦！运动员们都是经过很辛苦的训练，很努力才来到这里的。我们要尊重他们的汗水，即使失误了也要为他们喝彩鼓掌！更不能喝倒彩！ ',
	'select':['','我去为他加油',''],
	'chara':['url(./images/)','url(./images/)','url(./images/mama4.png)'],
	'bg':'url("./images/zw.jpg")',
	'next':[9,11,9]
		},
		
	{
	stage:10,
	'tcj':'观众席',
	'tdhk':'亚洲小孩',
	'texdhk':'我知道错了！他们也是很努力的！即使失误了，我们也要为他们加油鼓劲！',
	'select':['','比赛结束了，准备颁奖啦',''],
	'chara':['url(./images/y2.png)','url(./images/y5.png)','url(./images/)'],
	'bg':'url("./images/zw.jpg")',
	'next':[10,11,10]
		},
	{
	stage:11,
	'tcj':'观众席',
	'tdhk':'亚洲小孩',
	'texdhk':'快看！中国队获得了冠军！五星红旗升起来了欸！',
	'select':['不理会，低头玩手机','','起立！脱帽敬礼！'],
	'chara':['url(./images/y6.png)','url(./images/renwu5.png)','url(./images/)'],
	'bg':'url("./images/zw.jpg")',
	'next':[12,11,13]
		},
	{
	stage:12,
	'tcj':'观众席',
	'tdhk':'妈妈',
	'texdhk':'快起来！比赛颁奖时，升国旗奏国歌，我们要尊重国歌国旗，这个时候我们要放下手里的事情,起来敬礼才是我们应该做的！',
	'select':['','我知道错了！',''],
	'chara':['url(./images/)','url(./images/)','url(./images/mama2.png)'],
	'bg':'url("./images/zw.jpg")',
	'next':[12,13,12]
		},
	{
	stage:13,
	'tcj':'观众席',
	'tdhk':'群众',
	'texdhk':'我们万众一心冒着敌人的炮火~前进，前进，前进进~(齐唱国歌)',
	'select':['','完成学习',''],
	'chara':['url(./images/jingli1.png)','url(./images/jingli2.png)','url(./images/)'],
	'bg':'url("./images/zw.jpg")',
	'next':[13,14,13]
		},
	{
	stage:14,
	'tcj':'观众席',
	'tdhk':'莲莲',
	'texdhk':'太棒咯！恭喜你完成了场馆观赛礼仪学习！快点击右上角的返回，继续学习其他板块吧！',
	'select':['','',''],
	'chara':['url(./images/)','url(./images/)','url(./images/ll.png)'],
	'bg':'url("./images/zw.jpg")',
	'next':[14,14,14]
		},
	
 ];
//  console.log(avgData);

function Next(stage){
	avg.style.backgroundImage = avgData[stage].bg;
	c1.style.backgroundImage = avgData[stage].chara[0];
	c2.style.backgroundImage = avgData[stage].chara[1];
    c3.style.backgroundImage = avgData[stage].chara[2];
	tcj.innerText = avgData[stage].tcj;
	tdhk.innerText = avgData[stage].tdhk;
	texdhk.innerText = avgData[stage].texdhk;
	o1.innerText = avgData[stage].select[0];
	o2.innerText = avgData[stage].select[1];
	o3.innerText =  avgData[stage].select[2];
	nub.innerText = avgData[stage].stage;
	o1.style.visibility = "visible";
	o2.style.visibility = "visible";
	o3.style.visibility = "visible";
	if(o1.innerText == ''){
		o1.style.visibility = "hidden";
		}
	if(o2.innerText == ''){
		o2.style.visibility = "hidden";
		}
	if(o3.innerText == ''){
		o3.style.visibility = "hidden";
		}
//	if(avgData[stage].chara[0] == ''){
//		c1.style.visibility = "hidden";
//	}
//	if(avgData[stage].chara[1] == ''){
//		c2.style.visibility = "hidden";
//	}
//	if(avgData[stage].chara[2] == ''){
//		c3.style.visibility = "hidden";
//	}

}
	
	var stage = 0;
//--------------------------------------------------------------------属性定义
	var avg = document.querySelector("#avg");
	var c1 = document.querySelector("#c1");
	var c2 = document.querySelector("#c2");
	var c3 = document.querySelector("#c3");
	var tcj = document.querySelector("#title_cj");
	var tdhk = document.querySelector("#title_dhk");
	var texdhk = document.querySelector("#text_dhk");
	var o1 = document.querySelector("#o1");
	var o2 = document.querySelector("#o2");
	var o3 = document.querySelector("#o3");
	var nub = document.querySelector("#nub");
	Next(0);
	o1.onclick = function(){
		stage = nub.innerText;
		Next(avgData[stage].next[0]);
		};
	o2.onclick = function(){
		stage = nub.innerText;
		Next(avgData[stage].next[1]);
	};
	o3.onclick = function(){
		stage = nub.innerText;
		Next(avgData[stage].next[2]);
	};


	


	