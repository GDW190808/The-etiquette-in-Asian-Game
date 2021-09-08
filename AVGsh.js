// JavaScript Document

var avgData = [
	{
		stage:0,
	'tcj':'教室',
	'tdhk':'关老师',
	'texdhk':'同学好！今天我们来学习日常生活礼仪，我们先从哪里开始学习呢？ ',
	'select':['从仪容仪表开始吧','','从谈吐礼节开始吧'],
	'chara':['url(./images/)','url(./images/)','url(./images/laoshi.png)'],
	'bg':'url("./images/js.jpg")',
	'next':[1,0,9]
		},
	{
	stage:1,
	'tcj':'教室',
	'tdhk':'关老师',
	'texdhk':'一个端庄、整洁、美好的仪表，可以让人产生好感，留下良好的印象，从而为交际活动打下基础。',
	'select':['','继续',''],
	'chara':['url(./images/)','url(./images/)','url(./images/laoshi1.png)'],
	'bg':'url("./images/js.jpg")',
	'next':[1,3,1]
		},
	{
	stage:2,
	'tcj':'教室',
	'tdhk':'亚洲小孩',
	'texdhk':'老师！我的非洲朋友邀请我和他一起共进晚餐，我怎么舒服怎么穿吧，就穿这一身吧！',
	'select':['这一身是不可以的！','','怎么舒服怎么穿吧！'],
	'chara':['url(./images/)','url(./images/)','url(./images/laoshi.png)'],
	'bg':'url("./images/js.jpg")',
	'next':[3,0,15]
		},
	{
	stage:3,
	'tcj':'教室',
	'tdhk':'关老师',
	'texdhk':'没错，赴约吃饭是生活中比较正式的场合。看起来整洁得体的穿着是礼仪中不可或缺的！同时保持头发、面部、手部清洁整洁也是重要的环节。',
	'select':['','继续',''],
	'chara':['url(./images/)','url(./images/)','url(./images/laoshi1.png)'],
	'bg':'url("./images/js.jpg")',
	'next':[3,4,3]
		},
	{
	stage:4,
	'tcj':'教室',
	'tdhk':'关老师',
	'texdhk':'我们保持身体整洁的同时，我们还要的举止动作也要合乎规范。',
	'select':['','继续',''],
	'chara':['url(./images/)','url(./images/)','url(./images/laoshi.png)'],
	'bg':'url("./images/js.jpg")',
	'next':[4,5,4]
		},
	{
	stage:5,
	'tcj':'教室',
	'tdhk':'关老师',
	'texdhk':'一、站立时，头正、身板挺直，减少不比较的动作，要有有向上的感觉。切记不能叉腰、双臂抱在胸前、驼背、弓腰等动作！',
	'select':['','继续',''],
	'chara':['url(./images/)','url(./images/)','url(./images/laoshi1.png)'],
	'bg':'url("./images/js.jpg")',
	'next':[5,6,5]
		},
	{
	stage:6,
	'tcj':'教室',
	'tdhk':'关老师',
	'texdhk':'二、就座时，基本要求是轻稳，男士可将上衣解开，女士应把裙子稍稍拢住，坐下时一般只坐满椅子的2/3，不要靠背。坐定时，双腿应尽量放正平行，切记出现抖腿、翘二郎腿等不雅动作！',
	'select':['','继续',''],
	'chara':['url(./images/)','url(./images/)','url(./images/laoshi.png)'],
	'bg':'url("./images/js.jpg")',
	'next':[6,7,6]
		},
	{
	stage:7,
	'tcj':'教室',
	'tdhk':'关老师',
	'texdhk':'三、手部动作，与人交流时的手部动作幅度不要太大，切记出现挠头皮、掏耳朵、抓衣脚等动作。需要介绍他人时，应五指并拢伸直指向对方，不可用单根手指指向对方！',
	'select':['','继续',''],
	'chara':['url(./images/)','url(./images/)','url(./images/laoshi1.png)'],
	'bg':'url("./images/js.jpg")',
	'next':[7,8,7]
		},
		
	{
	stage:8,
	'tcj':'教室',
	'tdhk':'关老师',
	'texdhk':'以上就是仪容仪表的内容啦！',
	'select':['继续学习谈吐礼仪','','下课啦！'],
	'chara':['url(./images/)','url(./images/)','url(./images/laoshi.png)'],
	'bg':'url("./images/js.jpg")',
	'next':[9,8,17]
		},
		
	{
	stage:9,
	'tcj':'教室',
	'tdhk':'关老师',
	'texdhk':'那我们今天简单学习一下谈吐的礼仪吧！',
	'select':['基本要求是什么呀？','','有那些禁忌呢？'],
	'chara':['url(./images/)','url(./images/)','url(./images/laoshi1.png)'],
	'bg':'url("./images/js.jpg")',
	'next':[10,9,12]
		},
		
	{
	stage:10,
	'tcj':'教室',
	'tdhk':'关老师',
	'texdhk':'谈吐礼仪的基本要求是态度要诚恳亲切、措辞谦逊文雅、语音语调平稳柔和、谈吐要掌握分寸。',
	'select':['有那些禁忌呢?','','可以再讲具体一点么？'],
	'chara':['url(./images/)','url(./images/)','url(./images/laoshi.png)'],
	'bg':'url("./images/js.jpg")',
	'next':[12,10,11]
		},
	{
	stage:11,
	'tcj':'教室',
	'tdhk':'关老师',
	'texdhk':'就是与人交流时，要从对方的角度出发，让对方在交流中尽可能地舒服愉快。多用“您”、“请”、“谢谢”等敬语和谦语言！',
	'select':['','明白了',''],
	'chara':['url(./images/)','url(./images/)','url(./images/laoshi1.png)'],
	'bg':'url("./images/js.jpg")',
	'next':[11,12,11]
		},
	{
	stage:12,
	'tcj':'教室',
	'tdhk':'关老师',
	'texdhk':'谈吐礼仪中的禁忌可不少呀！ ',
	'select':['','继续',''],
	'chara':['url(./images/)','url(./images/)','url(./images/laoshi.png)'],
	'bg':'url("./images/js.jpg")',
	'next':[12,13,12]
		},
	{
	stage:13,
	'tcj':'教室',
	'tdhk':'关老师',
	'texdhk':'一、称呼上的禁忌，对不同的身份的人要使用不同的称呼，不可以在公共场合称呼别人的小明或者绰号，以“先生”、“女士”的称呼居多。',
	'select':['','继续',''],
	'chara':['url(./images/)','url(./images/)','url(./images/laoshi1.png)'],
	'bg':'url("./images/js.jpg")',
	'next':[13,14,13]
		},
	{
	stage:14,
	'tcj':'教室',
	'tdhk':'关老师',
	'texdhk':'二、交流内容上，尽量少谈论或者提问他们过于隐私的问题，例如宗教信仰、家庭住址、收入情况等，正常的话题可以以天气和当地风景人文为主！',
	'select':['','继续',''],
	'chara':['url(./images/)','url(./images/)','url(./images/laoshi.png)'],
	'bg':'url("./images/js.jpg")',
	'next':[14,15,14]
		},
		{
	stage:15,
	'tcj':'教室',
	'tdhk':'关老师',
	'texdhk':'三、交流时的姿态，与他人交流时不要摇头晃脑，左顾右盼，也不要长时间的盯着对方某一位置，更不能出现玩指甲、挖鼻孔等小动作。 ',
	'select':['','继续',''],
	'chara':['url(./images/)','url(./images/)','url(./images/laoshi1.png)'],
	'bg':'url("./images/js.jpg")',
	'next':[15,16,15]
		},
	{
	stage:16,
	'tcj':'教室',
	'tdhk':'关老师',
	'texdhk':'以上就是谈吐礼仪的内容啦！',
	'select':['再学习一下仪容仪表礼仪吧','','下课啦！'],
	'chara':['url(./images/)','url(./images/)','url(./images/laoshi1.png)'],
	'bg':'url("./images/js.jpg")',
	'next':[1,0,17]
		},
	{
	stage:17,
	'tcj':'教室',
	'tdhk':'关老师',
	'texdhk':'我们到下课的时间喽！',
	'select':['','完成学习',''],
	'chara':['url(./images/)','url(./images/)','url(./images/laoshi.png)'],
	'bg':'url("./images/js.jpg")',
	'next':[17,18,17]
		},
	{
	stage:18,
	'tcj':'教室',
	'tdhk':'宸宸',
	'texdhk':'恭喜你完成了日常礼仪的学习！点击右上角的“返回”继续学习吧！！',
	'select':['','',''],
	'chara':['url(./images/)','url(./images/)','url(./images/cc1.png)'],
	'bg':'url("./images/js.jpg")',
	'next':[18,18,18]
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


	


	