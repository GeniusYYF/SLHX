var tabList = [{
		name: '关注'
	},
	{
		name: '推荐',
		badge: {
			isDot: 1
		},
	}, {
		name: '电影',
		badge: {
			value: 5,
		}
	}, {
		name: '科技'
	}, {
		name: '音乐'
	}, {
		name: '美食'
	}, {
		name: '文化'
	}, {
		name: '财经'
	}, {
		name: '手工'
	}
]
var tabbars = [{
		name: 'news',
		text: '资讯',
		icon: '/static/tabbars/ZiXunH.png',
		inactiveIcon: '/static/tabbars/ZiXun.png',
		iconStyle: "width: 20px;height:20px;",
		inactiveIconStyle: "width: 20px;height:20px;",
	},
	{
		name: 'train',
		text: '培训',
		icon: '/static/tabbars/PeiXunH.png',
		inactiveIcon: '/static/tabbars/PeiXun.png',
		iconStyle: "width: 20px;height:20px;",
		inactiveIconStyle: "width: 20px;height:20px;",
		badge: 12,
	},
	{
		name: "push",
		text: '',
		icon: '/static/tabbars/bg-plus.png',
		inactiveIcon: '/static/tabbars/bg-plus.png',
		iconStyle: 'width: 60px;height:38px;',
		inactiveIconStyle: 'width: 60px;height:38px;',
	},
	{
		name: 'community',
		text: '社区',
		icon: '/static/tabbars/SheQuH.png',
		inactiveIcon: '/static/tabbars/SheQu.png',
		iconStyle: "width: 20px;height:20px;",
		inactiveIconStyle: "width: 20px;height:20px;",
	},
	{
		text: '我的',
		name: 'mine',
		icon: '/static/tabbars/WoDeH.png',
		inactiveIcon: '/static/tabbars/WoDe.png',
		iconStyle: "width: 20px;height:20px;",
		inactiveIconStyle: "width: 20px;height:20px;",
		dot: 1
	}
]

var newsList = [{
		id: "1",
		title: "累计87例死亡 重症八仙有3位赴上海",
		ref: "人民日报",
		commentNum: "1.2万",
		time: "1个月前",
		top: 1,
		icon: "/static/logo.png",
	}, {
		id: "2",
		title: "31省区市昨增本土“1566+20230”",
		ref: "人民日报",
		commentNum: "1.2万",
		time: "1个月前",
		top: 1,
		icon: "/static/logo.png",
	}, {
		id: "3",
		title: "神舟十三号返回预测为何如此精确",
		ref: "人民日报",
		commentNum: "1.2万",
		time: "1个月前",
		top: 1,
		icon: "/static/logo.png",
	}, {
		id: "4",
		title: "你有什么梦想，写下来，我们送它上天宫。你有什么梦想，写下来，我们送它上天宫。你有什么梦想，写下来，我们送它上天宫。",
		ref: "人民日报",
		commentNum: "1.2万",
		time: "1个月前",
		top: 1,
		icon: "/static/logo.png",
	},
	{
		id: "5",
		title: "整个西方都为马克龙捏一把汗",
		ref: "人民日报",
		commentNum: "12",
		time: "2小时前",
		top: 1,
		icon: "/static/logo.png",
		imgs: ["/static/mock/m2.jpeg"],
	},
	{
		id: "6",
		title: "世卫：12国报告不明病因儿童急性肝炎　至少一例死亡",
		ref: "人民日报",
		commentNum: "12",
		time: "2小时前",
		top: 0,
		icon: "/static/logo.png",
		imgs: ["/static/mock/m12.jpeg"],
	},
	{
		id: "7",
		title: "1076万毕业生的最难就业季有多难",
		ref: "人民日报",
		commentNum: "12",
		time: "2小时前",
		top: 0,
		icon: "/static/logo.png",
		imgs: ["/static/mock/m1.jpeg"],
	},
	{
		id: "8",
		title: "刑拘！唐山一人非法开设补习班隐瞒不报致多名学生和家长阳性",
		ref: "人民日报",
		commentNum: "12",
		time: "2小时前",
		top: 0,
		icon: "/static/logo.png",
		imgs: ["/static/mock/m11.jpeg"],
	},
	{
		id: "9",
		title: "苹果称不送充电器已节省55万吨矿石",
		ref: "金羊网",
		commentNum: "347",
		time: "昨天",
		top: 0,
		icon: "/static/logo.png",
		imgs: ["/static/mock/m11.jpeg", "/static/mock/m11.jpeg"],
	},
	{
		id: "10",
		title: "幼童被锁车内家长拒绝破窗等开锁",
		ref: "金羊网",
		commentNum: "347",
		time: "昨天",
		top: 0,
		icon: "/static/logo.png",
		imgs: ["/static/mock/m11.jpeg", "/static/mock/m11.jpeg", "/static/mock/m11.jpeg"],
	},
]



var selectList = [{
		id: "0",
		label: "关注",
		checked: 1
	},
	{
		id: "1",
		label: "推荐",
		checked: 1
	},
	{
		id: "2",
		label: "热榜",
		checked: 1
	},
	{
		id: "3",
		label: "视频",
		checked: 1
	},
	{
		id: "4",
		label: "小说",
		checked: 1
	},
];
var unselectList = [{
		id: "0",
		label: "关注",
		checked: 0
	},
	{
		id: "1",
		label: "推荐",
		checked: 0
	},
	{
		id: "2",
		label: "热榜",
		checked: 0
	},
	{
		id: "3",
		label: "视频",
		checked: 0
	},
	{
		id: "4",
		label: "小说",
		checked: 0
	},
	{
		id: "5",
		label: "抗议",
		checked: 0
	},
];

var newsDetails = {
	title: "北京一男子得知自己是密接后独守车内，14小时后小区解封",
	src: "/static/logo.png",
	author: "北京日报客户端",
	articleFrom: "1",
	articleFromName: "原创",
	followed:0,
	supported:1,
	collectioned:0,
	supportNum: "5",
	collectionNum: "2",
	transmitNum: "0",
	creatTime: "2022-04-26 20:32",
	data: [{
			type: "text",
			value: "4月26日，记者从昌平区北七家镇了解到，居住在冠华苑4区6号楼的感染者218在接到疾控部门电话告知自己是密接后，立即向街道、社区报备，并留在自驾车内等候通知，未进小区。这一行为帮助冠华苑社区第一时间排查疫情，连夜进行核酸检测确保阴性后第一时间解封，目前社区运行一切正常。"
		},
		{
			type: "image",
			value: "/static/mock/m11.jpeg"
		},
		{
			type: "text",
			value: "4区6号楼于4月26日11点解除临时封控管理，社区运行恢复正常。"
		},
		{
			type: "text",
			value: "来源 北京日报客户端 | 记者 孙云柯"
		},
		{
			type: "text",
			value: "编辑 王雯淼"
		},
	],
	commentList:[
		{
			id:"0",
			pid:"",
			nickname:"北京日报客户端",
			src:"",
			text:"欢迎留言交流",
			supported:1,
			stamped:0,
			creatTime: "2022-04-26 20:38",
		},
		{
			id:"1",
			pid:"",
			nickname:"李潇逸",
			src:"",
			text:"嗯,说的非常好👍",
			supported:0,
			stamped:1,
			creatTime: "2022-04-26 20:52",
		},
		{
			id:"00",
			pid:"0",
			nickname:"李潇逸",
			src:"",
			text:"好的",
			supported:1,
			stamped:0,
			creatTime: "2022-04-26 20:51",
		},
		{
			id:"01",
			pid:"0",
			nickname:"vip",
			src:"",
			text:"好的+1",
			supported:1,
			stamped:0,
			creatTime: "2022-04-26 21:11",
		},
		{
			id:"02",
			pid:"0",
			nickname:"admin",
			src:"",
			text:"好的+2",
			supported:0,
			stamped:0,
			creatTime: "2022-04-26 21:49",
		},
		{
			id:"03",
			pid:"0",
			nickname:"admin1",
			src:"",
			text:"好的+3",
			supported:0,
			stamped:0,
			creatTime: "2022-04-26 21:50",
		},
		{
			id:"04",
			pid:"0",
			nickname:"admin2",
			src:"",
			text:"好的+4",
			supported:0,
			stamped:0,
			creatTime: "2022-04-26 21:55",
		},
		{
			id:"05",
			pid:"0",
			nickname:"幼儿园抢饭",
			src:"",
			text:"打酱油。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。",
			supported:0,
			stamped:0,
			creatTime: "2022-04-28 12:21",
		},
	]
}

export default {
	news: {
		tabList,
		selectList,
		unselectList,
	},
	main: {
		tabbars
	},
	newsList: {
		list: newsList
	},
	newsDetails: {
		newsDetails
	}
}
