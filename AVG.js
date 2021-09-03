// JavaScript Document

var avgData = [
	{
	stage:0,
	'tcj':'西湖边',
	'tdhk':'非洲小孩',
	'texdhk':'我想去看击剑比赛，但我迷路了，你可以告诉场馆怎么才能到呢？',
	'select':['与我无关，拒绝他！','','让他稍等一下，我去找妈妈来帮助他！'],
	'chara':['','','url("./images/ren1.png'],
	'bg':'url("./images/beijing2.png")',
	'next':[1,0,2]
		},
	
	{
	stage:1,
	'tcj':'西湖边',
	'tdhk':'非洲小孩',
	'texdhk':'真是太糟糕了！中国人看起来不太友好呀~',
	'select':['','重新选择',''],
	'chara':['url(./images/)','url(./images/)','url(./images/kuqiren.png)'],
	'bg':'url("./images/beijing2.png")',
	'next':[1,0,1]
		},
	
	{
	stage:2,
	'tcj':'击剑场馆旁',
	'tdhk':'非洲小孩',
	'texdhk':'太感谢了，你真热情！中国人都非常友好!!',
	'select':['','下一关',''],
	'chara':['url(./images/)','url(./images/)','url(./images/ren1.png)'],
	'bg':'url("./images/beijing2.png")',
	'next':[2,3,2]
		},
	
	{
	stage:3,
	'tcj':'观众席上',
	'tdhk':'苟同学',
	'texdhk':'你看！那个非洲人好黑呀！真难看！',
	'select':['就是就是!','','你们这样是不礼貌的！'],
	'chara':['url(./images/ren3.png','url(./images/ren2.png)','url(./images/)'],
	'bg':'url("./images/beijing2.png")',
	'next':[4,3,5]
		},
	
	{
	stage:4,
	'tcj':'观众席上',
	'tdhk':'非洲小孩',
	'texdhk':'呜呜呜呜~你们怎么能这样说,你们真不尊重人！',
	'select':['','重新选择',''],
	'chara':['url(./images/ren1)','url(./images/)','url(./images/kuqiren.png)'],
	'bg':'url("./images/beijing2.png")',
	'next':[4,3,4]
		},
	
	{
	stage:5,
	'tcj':'观众席上',
	'tdhk':'非洲小孩',
	'texdhk':'谢谢你！我们同在地球村，我们需要相互尊重!',
	'select':['','完成学习',''],
	'chara':['url(./images/)','url(./images/)','url(./images/ren1.png)'],
	'bg':'url("./images/beijing2.png")',
	'next':[5,6,5]
		},	
	
	{
	stage:6,
	'tcj':'观众席上',
	'tdhk':'琮琮',
	'texdhk':'恭喜你完成了亚运涉外交流礼仪学习！点击右上角返回继续学习吧！',
	'select':['','',''],
	'chara':['url(./images/)','url(./images/)','url(./images/cong.png)'],
	'bg':'url("./images/beijing2.png")',
	'next':[1,2,0]
		},
	
	{
	stage:7,
	'tcj':'',
	'tdhk':'',
	'texdhk':'',
	'select':['','！'],
	'chara':['url(./images/)','url(./images/)','url(./images/)'],
	'bg':'url("./images/")',
	'next':[1,2,0]
		},
		
	{
	stage:8,
	'tcj':'',
	'tdhk':'',
	'texdhk':'',
	'select':['','',''],
	'chara':['url(./images/)','url(./images/)','url(./images/)'],
	'bg':'url("./images/")',
	'next':[1,2,0]
		},
		
	{
	stage:9,
	'tcj':'',
	'tdhk':'',
	'texdhk':'',
	'select':['','',''],
	'chara':['url(./images/)','url(./images/)','url(./images/)'],
	'bg':'url("./images/")',
	'next':[1,2,0]
		},
		
	{
	stage:10,
	'tcj':'',
	'tdhk':'',
	'texdhk':'',
	'select':['','',''],
	'chara':['url(./images/)','url(./images/)','url(./images/)'],
	'bg':'url("./images/")',
	'next':[1,2,0]
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


	


	