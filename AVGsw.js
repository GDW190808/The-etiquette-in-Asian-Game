// JavaScript Document

var avgData = [
	{
	stage:0,
	'tcj':'林荫大道',
	'tdhk':'非洲小孩',
	'texdhk':'您好！我是来自尼日利亚来杭州看亚运会的游客，我迷路了~可以帮帮我怎么才能那个去到这个场馆嘛？',
	'select':['没有问题！我和妈妈一起带你去吧！','','你太丑啦！离我远点！'],
	'chara':['url(./images/)','url(./images/)','url(./images/map.png)'],
	'bg':'url("./images/bj1.png")',
	'next':[1,0,2]
		},
	{
	stage:1,
	'tcj':'林荫大道',
	'tdhk':'非洲小孩',
	'texdhk':'太感谢了！早就听说中国人很热情很友好啦！送你一个礼物吧！',
	'select':['','谢谢你，我们出发吧！',''],
	'chara':['url(./images/)','url(./images/)','url(./images/liwu.png)'],
	'bg':'url("./images/bj1.png")',
	'next':[1,3,1]
		},
	{
	stage:2,
	'tcj':'林荫大道',
	'tdhk':'妈妈',
	'texdhk':'可不能这样说话哦！首先我们要尊重不同肤色样貌的外国友人，这样别人才能尊重我们呀！其次面对外国友人时，我们要热情友好，我们代表的可是我们的国家呀！',
	'select':['','我知道错了我们带他过去吧',''],
	'chara':['url(./images/)','url(./images/)','url(./images/mama2.png)'],
	'bg':'url("./images/bj1.png")',
	'next':[2,1,2]
		},
	{
	stage:3,
	'tcj':'车边',
	'tdhk':'非洲小孩',
	'texdhk':'我们上车吧！ 这里有一辆出租车！',
	'select':['好的！你坐前面的座位吧！','','我要坐前面！'],
	'chara':['url(./images/)','url(./images/)','url(./images/bjc.png)'],
	'bg':'url("./images/bja.png")',
	'next':[4,3,16]
		},
	{
	stage:4,
	'tcj':'车边',
	'tdhk':'妈妈',
	'texdhk':'你这样做很棒！在交往的礼仪中，如果同乘小轿车要让宾客坐副驾驶，如果是小卧车宾客坐第二排右侧，主人坐左侧。',
	'select':['','我是礼仪小能手！',''],
	'chara':['url(./images/)','url(./images/)','url(./images/mama3.png)'],
	'bg':'url("./images/bja.png")',
	'next':[4,5,4]
		},
	{
	stage:5,
	'tcj':'车边',
	'tdhk':'亚洲小孩',
	'texdhk':'欸！你家住在哪里呀？你家里是不是有很多小孩？你们吃饭怎么吃呀？你们……',
	'select':['','继续',''],
	'chara':['url(./images/y2.png)','url(./images/map.png)','url(./images/)'],
	'bg':'url("./images/bja.png")',
	'next':[5,6,5]
		},
	{
	stage:6,
	'tcj':'车边',
	'tdhk':'非洲小孩',
	'texdhk':'。。。。。。欸，太多问题了！ ',
	'select':['不好意思！我问太多啦！','','继续问'],
	'chara':['url(./images/y2.png)','url(./images/map.png)','url(./images/)'],
	'bg':'url("./images/bja.png")',
	'next':[8,6,7]
		},
	{
	stage:7,
	'tcj':'车边',
	'tdhk':'妈妈',
	'texdhk':'别问啦！与人交往的时候我们要避免隐私问题，说话要节制，善于倾听，提问也不要过于着急，这会给客人造成压力，也是不礼貌的！',
	'select':['','是我错啦!',''],
	'chara':['url(./images/)','url(./images/)','url(./images/mama4.png)'],
	'bg':'url("./images/bja.png")',
	'next':[7,9,7]
		},
		
	{
	stage:8,
	'tcj':'车边',
	'tdhk':'妈妈',
	'texdhk':'没错的！与人交往的时候我们要避免隐私问题，说话要节制，善于倾听，提问也不要过于着急，这会给客人造成压力，也是不礼貌的！',
	'select':['','没错！我们到站啦！',''],
	'chara':['url(./images/)','url(./images/)','url(./images/mama.png)'],
	'bg':'url("./images/bja.png")',
	'next':[8,9,8]
		},
		
	{
	stage:9,
	'tcj':'场馆门口',
	'tdhk':'亚洲小孩',
	'texdhk':'我们到地方啦！',
	'select':['','继续',''],
	'chara':['url(./images/)','url(./images/)','url(./images/y3.png)'],
	'bg':'url("./images/tyg.jpg")',
	'next':[9,10,9]
		},
		
	{
	stage:10,
	'tcj':'场馆门口',
	'tdhk':'非洲小孩',
	'texdhk':'谢谢你们！这是我的联系方式！有时间来找玩呀！',
	'select':['','继续',''],
	'chara':['url(./images/)','url(./images/)','url(./images/bjc.png)'],
	'bg':'url("./images/tyg.jpg")',
	'next':[10,11,10]
		},
	{
	stage:11,
	'tcj':'场馆门口',
	'tdhk':'亚洲小孩',
	'texdhk':'嗯嗯！在中国有什么可以帮上的q可以随时找我哦！',
	'select':['','继续',''],
	'chara':['url(./images/)','url(./images/)','url(./images/y3.png)'],
	'bg':'url("./images/tyg.jpg")',
	'next':[11,12,11]
		},
	{
	stage:12,
	'tcj':'场馆门口',
	'tdhk':'非洲小孩',
	'texdhk':'那我们再见啦！',
	'select':['目送他离开','','立刻转身离开'],
	'chara':['url(./images/)','url(./images/)','url(./images/bjc.png)'],
	'bg':'url("./images/tyg.jpg")',
	'next':[13,12,14]
		},
	{
	stage:13,
	'tcj':'场馆门口',
	'tdhk':'亚洲小孩',
	'texdhk':'再见啦！',
	'select':['','完成学习',''],
	'chara':['url(./images/)','url(./images/)','url(./images/y2.png)'],
	'bg':'url("./images/tyg.jpg")',
	'next':[13,15,13]
		},
	{
	stage:14,
	'tcj':'场馆门口',
	'tdhk':'妈妈',
	'texdhk':'送客人离开时我们要目送客人走远我们才能离开哦！ ',
	'select':['','完成学习',''],
	'chara':['url(./images/)','url(./images/)','url(./images/mama3.png)'],
	'bg':'url("./images/tyg.jpg")',
	'next':[14,15,14]
		},
		{
	stage:15,
	'tcj':'场馆门口',
	'tdhk':'琮琮',
	'texdhk':'恭喜你完成了涉外交往的礼仪知识学习!点击右上角“返回”继续学习吧！ ',
	'select':['','',''],
	'chara':['url(./images/)','url(./images/)','url(./images/cc.png)'],
	'bg':'url("./images/tyg.jpg")',
	'next':[15,15,15]
		},
	{
	stage:16,
	'tcj':'车边',
	'tdhk':'妈妈',
	'texdhk':'不对哦，在交往的礼仪中，如果同乘小轿车要让宾客坐副驾驶，如果是小卧车宾客坐第二排右侧，主人坐左侧。',
	'select':['','朋友！坐前面的座位吧！',''],
	'chara':['url(./images/)','url(./images/)','url(./images/mama2.png)'],
	'bg':'url("./images/bja.png")',
	'next':[16,5,16]
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


	


	