let unitPrice = 0;
let stock = -1;
let quantity = -1;
let sex = 0;
let price = 0;
let classifyIndex = -1;
let goodsIndex = -1;
let countryId = -1;
let email = '';
const domin = 'https://ht.100.gd'


function sendGETRequestSync(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);  // false for synchronous
    xhr.send();

    if (xhr.status >= 200 && xhr.status < 300) {
        return xhr.responseText;
    } else {
        throw new Error(xhr.statusText);
    }
}
/**
 * 请看下面注释！！！这还不懂的话那还是算了吧 ╮(╯▽╰)╭
 * 'price-地区id' 里的'地区id'就是 countryArr 数组里对象的 'id'值
 * 如 countryArr 数组中 
    {
        id: 2,
        name: 'US/美国',
    }
    则 goodsObject 数据中的 'price-2': 9.99 即为美国的价格 

    如 goodsObject 中 "微博产品" 数组的 第二、三个对象 不写price-1 price-2 则统一价格为 price：0.3 ；也可以给某些地区加上price-id给定价格 其余的则用price值统一价格
 */
const goodsObject = {
    "telegram电报飞机": [
        {
            "id": 126,
            "name": "TG飞机直登号",
            "price": 0.22,
            "price-1": 0.21,
            "price-2": 0.23,
            "price-3": 0.25,
            "price-4": 0.22,
            "price-5": 0.2,
            "price-6": 0.26,
            "price-7": 0.26,
            "stock": 842,
            "deletetime": null,
            "outcategory_id": 37
        },
        {
            "id": 789,
            "name": "实名飞机号 ",
            "price": 12,
            "stock": 148,
            "deletetime": null,
            "outcategory_id": 37
        },
        {
            "id": 127,
            "name": "TG飞机协议号 sessions格式",
            "price": 0.2,
            "price-1": 0.22,
            "price-2": 0.21,
            "price-3": 0.24,
            "price-4": 0.22,
            "price-5": 0.2,
            "price-6": 0.23,
            "price-7": 0.23,
            "stock": 1237,
            "deletetime": null,
            "outcategory_id": 37
        },
        {
            "id": 128,
            "name": "TG飞机耐用老号一年以上",
            "price": 1.8,
            "stock": 148,
            "deletetime": null,
            "outcategory_id": 37
        },
        {
            "id": 130,
            "name": "TG飞机会员【一个月】",
            "price": 2.59,
            "stock": 544,
            "deletetime": null,
            "outcategory_id": 37
        },
        {
            "id": 440,
            "name": "TG飞机会员【12个月】",
            "price": 25,
            "stock": 98,
            "deletetime": null,
            "outcategory_id": 37
        },
        {
            "id": 441,
            "name": "TG飞机会员【6个月】",
            "price": 13.8,
            "stock": 85,
            "deletetime": null,
            "outcategory_id": 37
        },
        {
            "id": 442,
            "name": "TG飞机会员【3个月】",
            "price": 6.5,
            "stock": 95,
            "deletetime": null,
            "outcategory_id": 37
        },
        {
            "id": 443,
            "name": "Tg匿名+888号码",
            "price": 998,
            "stock": 114,
            "deletetime": null,
            "outcategory_id": 37
        },
        {
            "id": 443,
            "name": "TG匿名+888号码月租",
            "price": 39,
            "stock": 114,
            "deletetime": null,
            "outcategory_id": 37
        },
        {
            "id": 443,
            "name": "TG匿名+888号码年租",
            "price": 388,
            "stock": 114,
            "deletetime": null,
            "outcategory_id": 37
        }
    ],
    "WhatsApp产品": [
        {
            "id": 211,
            "name": "WhatsApp直登新号",
            "price": 0.8,
            "price-1": 0.81,
            "price-2": 0.9,
            "price-3": 0.81,
            "price-4": 0.8,
            "price-5": 0.85,
            "price-6": 0.85,
            "price-7": 0.6,
            "stock": 2001,
            "deletetime": null,
            "outcategory_id": 38
        },
        {
            "id": 212,
            "name": "WhatsApp直登号【满月号】",
            "price": 7,
            "stock": 570,
            "deletetime": null,
            "outcategory_id": 38
        },
        {
            "id": 213,
            "name": "WhatsApp直登号【3-6月】",
            "price": 9,
            "stock": 298,
            "deletetime": null,
            "outcategory_id": 38
        },
        {
            "id": 214,
            "name": "WhatsApp直登号【一年以上】",
            "price": 12,
            "stock": 137,
            "deletetime": null,
            "outcategory_id": 38
        },
        {
            "id": 295,
            "name": "WhatsApp可解封号",
            "price": 15,
            "stock": 504,
            "deletetime": null,
            "outcategory_id": 38
        },
        {
            "id": 333,
            "name": "企业号/商业协议号/business号(接粉专用)",
            "price": 0.32,
            "price-1": 0.25,
            "price-2": 0.27,
            "price-3": 0.31,
            "price-4": 0.22,
            "price-5": 0.2,
            "price-6": 0.28,
            "price-7": 0.28,
            "price-8": 0.25,
            "price-9": 0.27,
            "stock": 3300,
            "deletetime": null,
            "outcategory_id": 38
        },
        {
            "id": 338,
            "name": "whatsapp协议号(打粉专用)",
            "price": 0.31,
            "price-1": 0.22,
            "price-2": 0.27,
            "price-3": 0.31,
            "price-4": 0.22,
            "price-5": 0.25,
            "price-6": 0.28,
            "price-7": 0.28,
            "price-8": 0.25,
            "price-9": 0.27,
            "stock": 4401,
            "deletetime": null,
            "outcategory_id": 38
        }
    ],
    "mostalk账号": [
        {
            "id": 140,
            "name": "mostalk 新号",
            "price": 10,
            "stock": 75,
            "deletetime": null,
            "outcategory_id": 40
        },
        {
            "id": 141,
            "name": "mostalk 老号",
            "price": 18,
            "stock": 34,
            "deletetime": null,
            "outcategory_id": 40
        },
        {
            "id": 142,
            "name": "mostalk 实名老号号",
            "price": 20,
            "stock": 24,
            "deletetime": null,
            "outcategory_id": 40
        }
    ],
    "Square账号": [
        {
            "id": 500,
            "name": "Square白号",
            "price": 2,
            "stock": 75,
            "deletetime": null,
            "outcategory_id": 40
        },
        {
            "id": 501,
            "name": "Square实名号kyc",
            "price": 5,
            "stock": 34,
            "deletetime": null,
            "outcategory_id": 40
        },
        {
            "id": 502,
            "name": "Square企业号kyc",
            "price": 8,
            "stock": 24,
            "deletetime": null,
            "outcategory_id": 40
        }
    ],
    "mingle2账号": [
        {
            "id": 140,
            "name": "mingle2 老号",
            "price": 10,
            "stock": 75,
            "deletetime": null,
            "outcategory_id": 40
        },
        {
            "id": 141,
            "name": "mingle2 小号",
            "price": 1.5,
            "stock": 34,
            "deletetime": null,
            "outcategory_id": 40
        },
        {
            "id": 142,
            "name": "mingle2 实名号",
            "price": 3,
            "stock": 24,
            "deletetime": null,
            "outcategory_id": 40
        }
    ],
    "onestory账号": [
        {
            "id": 140,
            "name": "onestory白号",
            "price": 0.77,
            "stock": 75,
            "deletetime": null,
            "outcategory_id": 40
        },
        {
            "id": 141,
            "name": "onestory实名老号",
            "price": 3.68,
            "stock": 34,
            "deletetime": null,
            "outcategory_id": 40
        }
    ],
    "midjourney账号": [
        {
            "id": 140,
            "name": "月费基本（3.3一小时快速GPU时间/慢速无线/）",
            "price": 10,
            "stock": 68,
            "deletetime": null,
            "outcategory_id": 40
        },
        {
            "id": 140,
            "name": "月费标准（15一小时快速GPU时间/慢速无线/）",
            "price": 15,
            "stock": 68,
            "deletetime": null,
            "outcategory_id": 40
        },
        {
            "id": 140,
            "name": "月费专业 （30一小时快速GPU时间/慢速无线/隐身）",
            "price": 30,
            "stock": 68,
            "deletetime": null,
            "outcategory_id": 40
        },
        {
            "id": 140,
            "name": "年费基本（3.3一小时快速GPU时间/慢速无线/）",
            "price": 50,
            "stock": 68,
            "deletetime": null,
            "outcategory_id": 40
        },
        {
            "id": 140,
            "name": "年费标准（15一小时快速GPU时间/慢速无线/）",
            "price": 140,
            "stock": 68,
            "deletetime": null,
            "outcategory_id": 40
        },
        {
            "id": 140,
            "name": "年费专业（30一小时快速GPU时间/慢速无线/隐身）",
            "price": 300,
            "stock": 68,
            "deletetime": null,
            "outcategory_id": 40
        }
    ],
    "LINE濑产品": [
        {
            "id": 140,
            "name": "LINE濑账号 直登号",
            "price": 1.5,
            "stock": 68,
            "deletetime": null,
            "outcategory_id": 40
        },
        {
            "id": 141,
            "name": "LINE濑账号【满月】 直登号",
            "price": 2.5,
            "stock": 135,
            "deletetime": null,
            "outcategory_id": 40
        },
        {
            "id": 142,
            "name": "LINE濑账号【3-6个月】 直登号",
            "price": 3.5,
            "stock": 129,
            "deletetime": null,
            "outcategory_id": 40
        },
        {
            "id": 143,
            "name": "LINE濑账号 【一年老号】直登号",
            "price": 5,
            "stock": 103,
            "deletetime": null,
            "outcategory_id": 40
        }
    ],
    "TIKTOK账号": [
        {
            "id": 144,
            "name": "TIKTOK协议号/ios全参号/token/三绑号",
            "price": 0.1,
            "stock": 3285,
            "deletetime": null,
            "outcategory_id": 41
        },
        {
            "id": 145,
            "name": "Tik Tok全新白号 手动号",
            "price": 0.1,
            "stock": 256,
            "deletetime": null,
            "outcategory_id": 41
        },
        {
            "id": 146,
            "name": "TikTok百粉【活人粉丝】",
            "price": 3.5,
            "stock": 86,
            "deletetime": null,
            "outcategory_id": 41
        },
        {
            "id": 147,
            "name": "TikTok千粉【活人粉丝】",
            "price": 13,
            "stock": 59,
            "deletetime": null,
            "outcategory_id": 41
        },
        {
            "id": 148,
            "name": "TikTok万粉【活人粉丝】",
            "price": 85,
            "stock": 96,
            "deletetime": null,
            "outcategory_id": 41
        }
    ],
    "Tinder火种账号 pairs omiai Match Depay交友账号": [
        {
            "id": 132,
            "name": "Tinder火种成品号",
            "price": 15,
            "stock": 103,
            "deletetime": null,
            "outcategory_id": 42
        },
        {
            "id": 134,
            "name": "pairs成品号",
            "price": 15,
            "stock": 105,
            "deletetime": null,
            "outcategory_id": 42
        },
        {
            "id": 136,
            "name": "omiai成品号",
            "price": 15,
            "stock": 116,
            "deletetime": null,
            "outcategory_id": 42
        },
        {
            "id": 138,
            "name": "Match 成品号",
            "price": 15,
            "stock": 99,
            "deletetime": null,
            "outcategory_id": 42
        },
        {
            "id": 299,
            "name": "badoo 成品号(蓝V认证)",
            "price": 15,
            "stock": 132,
            "deletetime": null,
            "outcategory_id": 42
        }
    ],
    "Instagram-照片墙账号": [
        {
            "id": 199,
            "name": "INS-照片墙-Instagram】小白号",
            "price": 0.5,
            "stock": 79,
            "deletetime": null,
            "outcategory_id": 43
        },
        {
            "id": 200,
            "name": "【IG--instgram】2013-2019年注册 带2000粉",
            "price": 12,
            "stock": 105,
            "deletetime": null,
            "outcategory_id": 43
        },
        {
            "id": 201,
            "name": "【INS-照片墙-Instagram】2016-2020年注册--无粉 ",
            "price": 0.8,
            "stock": 46,
            "deletetime": null,
            "outcategory_id": 43
        },
        {
            "id": 202,
            "name": "【INS-照片墙-Instagram】2016-2020年注册--带1000粉丝 ",
            "price": 16,
            "stock": 75,
            "deletetime": null,
            "outcategory_id": 43
        },
        {
            "id": 203,
            "name": "【INS-照片墙-Instagram】2016-2020年注册--带5000粉丝 ",
            "price": 20,
            "stock": 96,
            "deletetime": null,
            "outcategory_id": 43
        },
        {
            "id": 204,
            "name": "【INS-照片墙-Instagram】2016-2020年注册--带10000粉丝",
            "price": 25,
            "stock": 116,
            "deletetime": null,
            "outcategory_id": 43
        },
        {
            "id": 205,
            "name": "【INS-照片墙-Instagram】精品号--风景号--汽车--宠物等等优质老帖子--联系客服自选",
            "price": 15,
            "stock": 52,
            "deletetime": null,
            "outcategory_id": 43
        }
    ],
    "twitter推特账号": [
        {
            "id": 231,
            "name": "推特小白号",
            "price": 0.17,
            "stock": 395,
            "deletetime": null,
            "outcategory_id": 45
        },
        {
            "id": 232,
            "name": "推特老号2009-2019",
            "price": 1.6,
            "stock": 56,
            "deletetime": null,
            "outcategory_id": 45
        },
        {
            "id": 233,
            "name": "推特老号2009-2019----带100粉",
            "price": 2.2,
            "stock": 88,
            "deletetime": null,
            "outcategory_id": 45
        },
        {
            "id": 234,
            "name": "推特老号2009-2019注册 --带1000粉丝 ",
            "price": 5,
            "stock": 134,
            "deletetime": null,
            "outcategory_id": 45
        },
        {
            "id": 235,
            "name": " 推特老号2009-2015注册 --带2000粉丝 ",
            "price": 8.8,
            "stock": 65,
            "deletetime": null,
            "outcategory_id": 45
        },
        {
            "id": 236,
            "name": "推特老号2009-2019注册 --带5000粉丝",
            "price": 11,
            "stock": 84,
            "deletetime": null,
            "outcategory_id": 45
        },
        {
            "id": 294,
            "name": "推特开发者账号",
            "price": 3,
            "stock": 96,
            "deletetime": null,
            "outcategory_id": 45
        },
        {
            "id": 395,
            "name": "推特老号2009-2019注册 --带1万粉丝",
            "price": 20,
            "stock": 24,
            "deletetime": null,
            "outcategory_id": 45
        },
        {
            "id": 428,
            "name": "推特老号2009-2019----带100粉（蓝V号）",
            "price": 15,
            "stock": 10,
            "deletetime": null,
            "outcategory_id": 45
        },
        {
            "id": 429,
            "name": "推特老号2009-2019----带1000粉（蓝V号）",
            "price": 30,
            "stock": 8,
            "deletetime": null,
            "outcategory_id": 45
        },
        {
            "id": 430,
            "name": "推特老号2009-2015注册 --带2000粉丝（蓝V号）",
            "price": 50,
            "stock": 5,
            "deletetime": null,
            "outcategory_id": 45
        },
        {
            "id": 432,
            "name": "推特老号2009-2019----带5000粉（蓝V号）",
            "price": 70,
            "stock": 4,
            "deletetime": null,
            "outcategory_id": 45
        }
    ],
    "Discord不和谐账号": [
        {
            "id": 207,
            "name": "Discord账号（15-30天）",
            "price": 0.3,
            "stock": 48,
            "deletetime": null,
            "outcategory_id": 46
        },
        {
            "id": 208,
            "name": "Discord账号（1年以上老号）",
            "price": 0.8,
            "stock": 35,
            "deletetime": null,
            "outcategory_id": 46
        },
        {
            "id": 210,
            "name": "Discord账号（90天-1年）",
            "price": 1,
            "stock": 115,
            "deletetime": null,
            "outcategory_id": 46
        }
    ],
    "Hinge账号": [
        {
            "id": 240,
            "name": "Hinge账号 新号",
            "price": 1.8,
            "stock": 46,
            "deletetime": null,
            "outcategory_id": 48
        },
        {
            "id": 241,
            "name": "Hinge账号【满月号】",
            "price": 3.5,
            "stock": 62,
            "deletetime": null,
            "outcategory_id": 48
        },
        {
            "id": 242,
            "name": "Hinge账号【半年号】",
            "price": 5.5,
            "stock": 132,
            "deletetime": null,
            "outcategory_id": 48
        }
    ],
    "LinkedIn领英账号": [
        {
            "id": 216,
            "name": "Linkedin账号 新号",
            "price": 0.35,
            "stock": 706,
            "deletetime": null,
            "outcategory_id": 49
        },
        {
            "id": 217,
            "name": "1个月Linkedin账号",
            "price": 5,
            "stock": 536,
            "deletetime": null,
            "outcategory_id": 49
        },
        {
            "id": 218,
            "name": "1个月Linkedin账号（用cookie登录）",
            "price": 1.3,
            "stock": 122,
            "deletetime": null,
            "outcategory_id": 49
        },
        {
            "id": 219,
            "name": "10年50+好友LinkedIn账号",
            "price": 11,
            "stock": 363,
            "deletetime": null,
            "outcategory_id": 49
        },
        {
            "id": 220,
            "name": "10年100+好友LinkedIn账号",
            "price": 16,
            "stock": 305,
            "deletetime": null,
            "outcategory_id": 49
        },
        {
            "id": 221,
            "name": "10年200+好友LinkedIn账号",
            "price": 18,
            "stock": 396,
            "deletetime": null,
            "outcategory_id": 49
        },
        {
            "id": 222,
            "name": "10年500+好友LinkedIn账号",
            "price": 24,
            "stock": 525,
            "deletetime": null,
            "outcategory_id": 49
        },
        {
            "id": 375,
            "name": "领英商务会员，半年会员卡",
            "price": 34,
            "stock": 44,
            "deletetime": null,
            "outcategory_id": 49
        },
        {
            "id": 376,
            "name": "领英会员代开，四种会员任选",
            "price": 8,
            "stock": 110,
            "deletetime": null,
            "outcategory_id": 49
        },
        {
            "id": 379,
            "name": "白号+会员（1个月）",
            "price": 10,
            "stock": 42,
            "deletetime": null,
            "outcategory_id": 49
        },
        {
            "id": 397,
            "name": "10天Linkedin账号",
            "price": 2.5,
            "stock": 943,
            "deletetime": null,
            "outcategory_id": 49
        },
        {
            "id": 398,
            "name": "LinkedIn 真人2-15年500-10000好友 cookie登录",
            "price": 15,
            "stock": 154,
            "deletetime": null,
            "outcategory_id": 49
        },
        {
            "id": 399,
            "name": "LinkedIn 真人2-15年200-500好友 cookie登录",
            "price": 13,
            "stock": 256,
            "deletetime": null,
            "outcategory_id": 49
        },
        {
            "id": 400,
            "name": "LinkedIn 真人1-15年0-8000+好友 cookie登录",
            "price": 10,
            "stock": 354,
            "deletetime": null,
            "outcategory_id": 49
        },
        {
            "id": 401,
            "name": "LinkedIn 真人1-15年1-199好友 cookie登录",
            "price": 8,
            "stock": 354,
            "deletetime": null,
            "outcategory_id": 49
        },
        {
            "id": 402,
            "name": "LinkedIn 真人1-15年0-50好友 cookie登录",
            "price": 8,
            "stock": 154,
            "deletetime": null,
            "outcategory_id": 49
        }
    ],
    "谷歌GV号 Textnow号 Open phone号": [
        {
            "id": 243,
            "name": "Google Voice 新号---gmail--个人gv",
            "price": 0.9,
            "stock": 132,
            "deletetime": null,
            "outcategory_id": 50
        },
        {
            "id": 244,
            "name": "Google Voice 耐用号---gmail高质量个人gv--活跃GV ",
            "price": 2.5,
            "stock": 123,
            "deletetime": null,
            "outcategory_id": 50
        },
        {
            "id": 245,
            "name": "Textnow 新号",
            "price": 0.25,
            "stock": 1324,
            "deletetime": null,
            "outcategory_id": 50
        },
        {
            "id": 246,
            "name": "Textnow 活跃老号 耐用",
            "price": 0.6,
            "stock": 294,
            "deletetime": null,
            "outcategory_id": 50
        },
        {
            "id": 303,
            "name": "Open phone 号",
            "price": 5,
            "stock": 93,
            "deletetime": null,
            "outcategory_id": 50
        }
    ],
    "ZALO账号": [
        {
            "id": 227,
            "name": "ZALO新号",
            "price": 0.8,
            "stock": 66,
            "deletetime": null,
            "outcategory_id": 51
        },
        {
            "id": 228,
            "name": "ZALO【满月实名号】",
            "price": 1.5,
            "stock": 126,
            "deletetime": null,
            "outcategory_id": 51
        },
        {
            "id": 229,
            "name": "ZALO【1-3月实名号】",
            "price": 2.8,
            "stock": 192,
            "deletetime": null,
            "outcategory_id": 51
        },
        {
            "id": 230,
            "name": "ZALO【3-6月实名号】",
            "price": 3.8,
            "stock": 140,
            "deletetime": null,
            "outcategory_id": 51
        }
    ],
    "苹果ID/appleid": [
        {
            "id": 253,
            "name": "Shadowrocket小火箭 共享",
            "price": 0.1,
            "stock": 51,
            "deletetime": null,
            "outcategory_id": 52
        },
        {
            "id": 296,
            "name": "苹果ID购买独享【带密保】【未激活icloud】【1-3个月】",
            "price": 0.7,
            "stock": 175,
            "deletetime": null,
            "outcategory_id": 52
        },
        {
            "id": 433,
            "name": "苹果ID购买独享【带密保】【已激活icloud】【1-3个月】",
            "price": 1.4,
            "stock": 254,
            "deletetime": null,
            "outcategory_id": 52
        }
    ],
    "邮箱批发": [
        {
            "id": 198,
            "name": "全新美国微软邮箱（Outlook）",
            "price": 0.02,
            "stock": 117,
            "deletetime": null,
            "outcategory_id": 53
        },
        {
            "id": 255,
            "name": "微软邮箱【Outlook】耐用老号",
            "price": 0.03,
            "stock": 14543,
            "deletetime": null,
            "outcategory_id": 53
        },
        {
            "id": 256,
            "name": "gmail邮箱 新号",
            "price": 0.01,
            "stock": 21561,
            "deletetime": null,
            "outcategory_id": 53
        },
        {
            "id": 257,
            "name": "gmail邮箱 耐用老号",
            "price": 0.02,
            "stock": 11366,
            "deletetime": null,
            "outcategory_id": 53
        },
        {
            "id": 258,
            "name": "雅虎yhoo邮箱  新号",
            "price": 0.01,
            "stock": 11000,
            "deletetime": null,
            "outcategory_id": 53
        },
        {
            "id": 259,
            "name": "雅虎yhoo邮箱 耐用老号",
            "price": 0.05,
            "stock": 5475,
            "deletetime": null,
            "outcategory_id": 53
        },
        {
            "id": 260,
            "name": "蓝邮【不懂勿拍】无教学",
            "price": 0.06,
            "stock": 12177,
            "deletetime": null,
            "outcategory_id": 53
        },
        {
            "id": 261,
            "name": "Hotmail邮箱  新号",
            "price": 0.02,
            "stock": 11600,
            "deletetime": null,
            "outcategory_id": 53
        },
        {
            "id": 262,
            "name": "Hotmail邮箱 耐用老号",
            "price": 0.03,
            "stock": 10800,
            "deletetime": null,
            "outcategory_id": 53
        },
        {
            "id": 263,
            "name": "QQ邮箱 新号",
            "price": 0.05,
            "stock": 10246,
            "deletetime": null,
            "outcategory_id": 53
        },
        {
            "id": 264,
            "name": "QQ邮箱 耐用老号",
            "price": 0.3,
            "stock": 5441,
            "deletetime": null,
            "outcategory_id": 53
        },
        {
            "id": 265,
            "name": "网易邮箱 126  163随机【可选】",
            "price": 0.01,
            "stock": 9122,
            "deletetime": null,
            "outcategory_id": 53
        },
        {
            "id": 266,
            "name": "gmx邮箱 ",
            "price": 0.08,
            "stock": 13000,
            "deletetime": null,
            "outcategory_id": 53
        },
        {
            "id": 280,
            "name": "139邮箱 新号",
            "price": 0.03,
            "stock": 11111,
            "deletetime": null,
            "outcategory_id": 53
        },
        {
            "id": 343,
            "name": "Google/Gmail企业邮箱",
            "price": 8,
            "stock": 213,
            "deletetime": null,
            "outcategory_id": 53
        },
        {
            "id": 344,
            "name": "雅虎yahoo企业邮箱",
            "price": 11,
            "stock": 223,
            "deletetime": null,
            "outcategory_id": 53
        },
        {
            "id": 345,
            "name": "Outlook企业邮箱",
            "price": 12,
            "stock": 632,
            "deletetime": null,
            "outcategory_id": 53
        },
        {
            "id": 348,
            "name": "FaceBooK邮箱",
            "price": 0.08,
            "stock": 6443,
            "deletetime": null,
            "outcategory_id": 53
        },
        {
            "id": 353,
            "name": "naver邮箱",
            "price": 0.01,
            "stock": 12400,
            "deletetime": null,
            "outcategory_id": 53
        },
        {
            "id": 408,
            "name": "AOL邮箱",
            "price": 0.02,
            "stock": 5875,
            "deletetime": null,
            "outcategory_id": 53
        }
    ],
    "vpn订阅节点": [
        {
            "id": 267,
            "name": "vpn订阅节点 共享【一个月不限流量】",
            "price": 5.8,
            "stock": 132,
            "deletetime": null,
            "outcategory_id": 54
        },
        {
            "id": 268,
            "name": "vpn订阅节点 独享【一个月不限流量】适合养号纯净ip",
            "price": 8.8,
            "stock": 130,
            "deletetime": null,
            "outcategory_id": 54
        }
    ],
    "skype账号": [
        {
            "id": 269,
            "name": "skype账号 新号",
            "price": 0.2,
            "stock": 112,
            "deletetime": null,
            "outcategory_id": 59
        },
        {
            "id": 270,
            "name": "skype账号【满月号】",
            "price": 0.4,
            "stock": 130,
            "deletetime": null,
            "outcategory_id": 59
        },
        {
            "id": 271,
            "name": "skype账号【3-6个月耐用号】",
            "price": 0.7,
            "stock": 74,
            "deletetime": null,
            "outcategory_id": 59
        }
    ],
    "youtube油管账户": [
        {
            "id": 272,
            "name": "youtube油管账户【新号】",
            "price": 0.13,
            "stock": 137,
            "deletetime": null,
            "outcategory_id": 60
        },
        {
            "id": 273,
            "name": "youtube油管账户【一年老号】",
            "price": 0.6,
            "stock": 124,
            "deletetime": null,
            "outcategory_id": 60
        },
        {
            "id": 274,
            "name": "youtube油管账户【3-5年老号】",
            "price": 2,
            "stock": 67,
            "deletetime": null,
            "outcategory_id": 60
        },
        {
            "id": 275,
            "name": "youtube油管账户【5-10年老号】",
            "price": 5,
            "stock": 125,
            "deletetime": null,
            "outcategory_id": 60
        }
    ],
    "WeChat海外微信 耐用号": [
        {
            "id": 276,
            "name": "WeChat海外微信 【8-15天新号】",
            "price": 25,
            "stock": 83,
            "deletetime": null,
            "outcategory_id": 61
        },
        {
            "id": 277,
            "name": "WeChat海外微信 【满月号号】",
            "price": 32,
            "stock": 98,
            "deletetime": null,
            "outcategory_id": 61
        },
        {
            "id": 278,
            "name": "WeChat海外微信 【半年号】",
            "price": 40,
            "stock": 101,
            "deletetime": null,
            "outcategory_id": 61
        },
        {
            "id": 279,
            "name": "WeChat海外微信 【一年以上老号】",
            "price": 45,
            "stock": 71,
            "deletetime": null,
            "outcategory_id": 61
        }
    ],
    "kakao": [
        {
            "id": 239,
            "name": "kakao账号",
            "price": 2,
            "stock": 109,
            "deletetime": null,
            "outcategory_id": 62
        }
    ],
    "派爱Pairs": [
        {
            "id": 282,
            "name": "派爱账号",
            "price": 15,
            "stock": 41,
            "deletetime": null,
            "outcategory_id": 63
        }
    ],
    "Uber优步账号": [
        {
            "id": 284,
            "name": "Uber优步账号实名号",
            "price": 18,
            "stock": 116,
            "deletetime": null,
            "outcategory_id": 64
        }
    ],
    "paypal 贝宝账号": [
        {
            "id": 283,
            "name": "paypal个人号",
            "price": 7,
            "stock": 56,
            "deletetime": null,
            "outcategory_id": 65
        },
        {
            "id": 365,
            "name": "paypal企业号",
            "price": 13,
            "stock": 22,
            "deletetime": null,
            "outcategory_id": 65
        }
    ],
    "Whatsapp数据提取3W": [
        {
            "id": 288,
            "name": "WS数据提取3W条",
            "price": 1,
            "stock": 49,
            "deletetime": null,
            "outcategory_id": 67
        }
    ],
    "推特引流软件": [
        {
            "id": 293,
            "name": "推特群推王",
            "price": 1,
            "stock": 45,
            "deletetime": null,
            "outcategory_id": 69
        }
    ],
    "viber账号": [
        {
            "id": 301,
            "name": "viber新号",
            "price": 3.5,
            "stock": 129,
            "deletetime": null,
            "outcategory_id": 70
        },
        {
            "id": 302,
            "name": "viber耐用老号",
            "price": 6.5,
            "stock": 104,
            "deletetime": null,
            "outcategory_id": 70
        }
    ],
    "cmb交友": [
        {
            "id": 306,
            "name": "cmb新号",
            "price": 0.3,
            "stock": 117,
            "deletetime": null,
            "outcategory_id": 72
        },
        {
            "id": 307,
            "name": "cmb成品老号",
            "price": 1.3,
            "stock": 165,
            "deletetime": null,
            "outcategory_id": 72
        }
    ],
    "ebay": [
        {
            "id": 308,
            "name": "ebay新号",
            "price": 0.8,
            "stock": 96,
            "deletetime": null,
            "outcategory_id": 73
        },
        {
            "id": 309,
            "name": "ebay老号",
            "price": 2.8,
            "stock": 56,
            "deletetime": null,
            "outcategory_id": 73
        }
    ],
    "seeking账号": [
        {
            "id": 310,
            "name": "seeking新号",
            "price": 0.3,
            "stock": 74,
            "deletetime": null,
            "outcategory_id": 74
        },
        {
            "id": 311,
            "name": "seeking老号",
            "price": 1.6,
            "stock": 67,
            "deletetime": null,
            "outcategory_id": 74
        }
    ],
    "亚马逊amazon": [
        {
            "id": 312,
            "name": "亚马逊白号",
            "price": 0.2,
            "stock": 280,
            "deletetime": null,
            "outcategory_id": 75
        },
        {
            "id": 313,
            "name": "亚马逊2020年老号",
            "price": 2.1,
            "stock": 96,
            "deletetime": null,
            "outcategory_id": 75
        }
    ],
    "facebook/脸书/fb": [
        {
            "id": 175,
            "name": "FB混大小黑+商城或个人户（包8成登录率）+带cookie",
            "price": 0.3,
            "stock": 2875,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 314,
            "name": "稳定耐用老号2013-2018",
            "price": 4,
            "stock": 76,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 315,
            "name": "facebook新号",
            "price": 0.2,
            "stock": 134,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 316,
            "name": "Marketpace商城号",
            "price": 5,
            "stock": 1567,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 317,
            "name": "推荐购买---FB三解号--广告户活",
            "price": 13,
            "stock": 34,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 318,
            "name": "FB复审解限号--可复审主页/BM --带解限恢复绿标",
            "price": 10,
            "stock": 23,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 319,
            "name": "FB,1拖5广告户--每个50$额度",
            "price": 15,
            "stock": 24,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 320,
            "name": "二解支付宝广告号--可支付宝充值",
            "price": 10,
            "stock": 32,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 321,
            "name": "FB三次解限号---个人广告账户活---带广告误判恢复绿标",
            "price": 8,
            "stock": 20,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 322,
            "name": "FB不死号-包首登无其他售后",
            "price": 15,
            "stock": 28,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 324,
            "name": "2022年BM链接---包进入BM正常---无其他售后",
            "price": 4,
            "stock": 19,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 325,
            "name": "2021年BM链接---包进入BM正常---无其他售后",
            "price": 5,
            "stock": 28,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 326,
            "name": "20年-18年BM链接--包进入BM正常无售后--购买后联系客服",
            "price": 6.5,
            "stock": 34,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 327,
            "name": "老BM可分享链接---包进入BM正常---无其他售后",
            "price": 7,
            "stock": 22,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 328,
            "name": "Facebook---老主页---可修主页名称---人工授权后无售后",
            "price": 6,
            "stock": 25,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 329,
            "name": "Facebook---精品主页带粉丝",
            "price": 21,
            "stock": 18,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 396,
            "name": "Facebook有缘（24小时售后包心动包人脸）",
            "price": 8,
            "stock": 1287,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 410,
            "name": "FB账单号（额度500）",
            "price": 22,
            "stock": 168,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 411,
            "name": "FB账单号（额度1000）",
            "price": 30,
            "stock": 185,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 412,
            "name": "FB账单号（额度300）",
            "price": 17,
            "stock": 158,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 413,
            "name": "FB大黑+商城或个人户（包8成登录率）+带cookie",
            "price": 0.3,
            "stock": 1475,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 414,
            "name": "FB小黑+商城或个人户（包8成登录率）+带cookie",
            "price": 0.3,
            "stock": 1300,
            "deletetime": null,
            "outcategory_id": 76
        },
        {
            "id": 420,
            "name": "ebuy店铺号",
            "price": 17,
            "stock": 12,
            "deletetime": null,
            "outcategory_id": 76
        }
    ],
    "gcash账号": [
        {
            "id": 330,
            "name": "gcash实名号",
            "price": 15,
            "stock": 110,
            "deletetime": null,
            "outcategory_id": 77
        },
        {
            "id": 331,
            "name": "gcash新号(不包售后)",
            "price": 0.5,
            "stock": 209,
            "deletetime": null,
            "outcategory_id": 77
        }
    ],
    "ChatGPT/openai": [
        {
            "id": 332,
            "name": "ChatGPT  3.5",
            "price": 1.2,
            "stock": 276,
            "deletetime": null,
            "outcategory_id": 78
        },
        {
            "id": 403,
            "name": "ChatGPT 4.0",
            "price": 20,
            "stock": 23,
            "deletetime": null,
            "outcategory_id": 78
        }
    ],
    "蝙蝠号batchat": [
        {
            "id": 334,
            "name": "新号",
            "price": 0.4,
            "stock": 65,
            "deletetime": null,
            "outcategory_id": 79
        },
        {
            "id": 335,
            "name": "半年以上老号",
            "price": 3,
            "stock": 96,
            "deletetime": null,
            "outcategory_id": 79
        }
    ],
    "cashapp": [
        {
            "id": 336,
            "name": "cashapp新号",
            "price": 0.5,
            "stock": 76,
            "deletetime": null,
            "outcategory_id": 80
        },
        {
            "id": 337,
            "name": "cashapp半年老号",
            "price": 5,
            "stock": 46,
            "deletetime": null,
            "outcategory_id": 80
        }
    ],
    "境外手机卡": [
        {
            "id": 339,
            "name": "AT&T(下单后发地址给客服)",
            "price": 30,
            "stock": 34,
            "deletetime": null,
            "outcategory_id": 81
        },
        {
            "id": 340,
            "name": "沃达丰(下单后发地址给客服)",
            "price": 26,
            "stock": 45,
            "deletetime": null,
            "outcategory_id": 81
        },
        {
            "id": 341,
            "name": "T-Mobile(下单后发地址给客服)",
            "price": 27,
            "stock": 56,
            "deletetime": null,
            "outcategory_id": 81
        },
        {
            "id": 349,
            "name": "cmlink(下单后发地址给客服)",
            "price": 29,
            "stock": 26,
            "deletetime": null,
            "outcategory_id": 81
        }
    ],
    "Vinted账号": [
        {
            "id": 342,
            "name": "Vinted账号",
            "price": 0.5,
            "stock": 63,
            "deletetime": null,
            "outcategory_id": 82
        }
    ],
    "虾皮": [
        {
            "id": 346,
            "name": "虾皮买家号（注册时间：15-30天）",
            "price": 0.5,
            "stock": 62,
            "deletetime": null,
            "outcategory_id": 84
        },
        {
            "id": 347,
            "name": "虾皮已实名商家号",
            "price": 35,
            "stock": 27,
            "deletetime": null,
            "outcategory_id": 84
        }
    ],
    "walmart沃尔玛": [
        {
            "id": 350,
            "name": "新号(15-30天)",
            "price": 0.5,
            "stock": 35,
            "deletetime": null,
            "outcategory_id": 85
        },
        {
            "id": 351,
            "name": "老号(半年-1年)",
            "price": 1.2,
            "stock": 32,
            "deletetime": null,
            "outcategory_id": 85
        },
        {
            "id": 352,
            "name": "老号有购买记录(半年-1年)",
            "price": 4.5,
            "stock": 24,
            "deletetime": null,
            "outcategory_id": 85
        }
    ],
    "阿里巴巴/淘宝": [
        {
            "id": 354,
            "name": "阿里巴巴买家号",
            "price": 0.5,
            "stock": 34,
            "deletetime": null,
            "outcategory_id": 86
        },
        {
            "id": 355,
            "name": "阿里巴巴商家号",
            "price": 25,
            "stock": 19,
            "deletetime": null,
            "outcategory_id": 86
        }
    ],
    "阿里云/谷歌云/微软云/亚马逊云账号": [
        {
            "id": 356,
            "name": "阿里云未实名",
            "price": 1,
            "stock": 23,
            "deletetime": null,
            "outcategory_id": 87
        },
        {
            "id": 357,
            "name": "阿里云已实名",
            "price": 30,
            "stock": 20,
            "deletetime": null,
            "outcategory_id": 87
        },
        {
            "id": 358,
            "name": "谷歌云账号",
            "price": 1,
            "stock": 23,
            "deletetime": null,
            "outcategory_id": 87
        },
        {
            "id": 359,
            "name": "微软云账号",
            "price": 0.8,
            "stock": 23,
            "deletetime": null,
            "outcategory_id": 87
        },
        {
            "id": 360,
            "name": "亚马逊云账号",
            "price": 1.6,
            "stock": 22,
            "deletetime": null,
            "outcategory_id": 87
        }
    ],
    "boo账号": [
        {
            "id": 361,
            "name": "boo白号",
            "price": 0.7,
            "stock": 43,
            "deletetime": null,
            "outcategory_id": 88
        },
        {
            "id": 362,
            "name": "boo老号(2-3个月)",
            "price": 3.5,
            "stock": 36,
            "deletetime": null,
            "outcategory_id": 88
        }
    ],
    "出会": [
        {
            "id": 363,
            "name": "新号",
            "price": 0.7,
            "stock": 26,
            "deletetime": null,
            "outcategory_id": 89
        },
        {
            "id": 364,
            "name": "老号（3-6个月）",
            "price": 2.3,
            "stock": 26,
            "deletetime": null,
            "outcategory_id": 89
        }
    ],
    "VKONTAKTE账号": [
        {
            "id": 366,
            "name": "VKONTAKTE帐户无好友",
            "price": 2,
            "stock": 34,
            "deletetime": null,
            "outcategory_id": 90
        },
        {
            "id": 367,
            "name": "VKONTAKTE带50个好友和订阅者",
            "price": 4,
            "stock": 28,
            "deletetime": null,
            "outcategory_id": 90
        },
        {
            "id": 368,
            "name": "VKONTAKTE带300个好友和订阅者",
            "price": 10,
            "stock": 26,
            "deletetime": null,
            "outcategory_id": 90
        },
        {
            "id": 369,
            "name": "VKONTAKTE带1500个好友和订阅者",
            "price": 20,
            "stock": 32,
            "deletetime": null,
            "outcategory_id": 90
        },
        {
            "id": 369,
            "name": "VKONTAKTE广告户开户",
            "price": 15,
            "stock": 122,
            "deletetime": null,
            "outcategory_id": 90
        },
        {
            "id": 369,
            "name": "VKONTAKTE广告户充值$100",
            "price": 102,
            "stock": 320,
            "deletetime": null,
            "outcategory_id": 90
        }
    ],
    "巴豆badoo": [
        {
            "id": 370,
            "name": "badoo白号",
            "price": 0.5,
            "stock": 46,
            "deletetime": null,
            "outcategory_id": 91
        },
        {
            "id": 371,
            "name": "badoo 成品号(蓝V认证)",
            "price": 12,
            "stock": 23,
            "deletetime": null,
            "outcategory_id": 91
        }
    ],
    "wish账号": [
        {
            "id": 373,
            "name": "wish",
            "price": 0.5,
            "stock": 45,
            "deletetime": null,
            "outcategory_id": 93
        },
        {
            "id": 374,
            "name": "wish商家号",
            "price": 17,
            "stock": 24,
            "deletetime": null,
            "outcategory_id": 93
        }
    ],
    "potato土豆": [
        {
            "id": 377,
            "name": "白号",
            "price": 0.5,
            "stock": 55,
            "deletetime": null,
            "outcategory_id": 94
        },
        {
            "id": 378,
            "name": "1-3个月号",
            "price": 3,
            "stock": 36,
            "deletetime": null,
            "outcategory_id": 94
        }
    ],
    "twilio账号": [
        {
            "id": 380,
            "name": "twilio（注册15-30天）",
            "price": 2,
            "stock": 96,
            "deletetime": null,
            "outcategory_id": 95
        }
    ],
    "betcity账号": [
        {
            "id": 381,
            "name": "betcity白号",
            "price": 0.5,
            "stock": 35,
            "deletetime": null,
            "outcategory_id": 96
        },
        {
            "id": 382,
            "name": "betcity实名认证号",
            "price": 12,
            "stock": 23,
            "deletetime": null,
            "outcategory_id": 96
        }
    ],
    "CloudChat账号": [
        {
            "id": 383,
            "name": "CloudChat账号",
            "price": 1,
            "stock": 742,
            "deletetime": null,
            "outcategory_id": 97
        }
    ],
    "欧易okx": [
        {
            "id": 384,
            "name": "欧易白号",
            "price": 0.4,
            "stock": 75,
            "deletetime": null,
            "outcategory_id": 98
        },
        {
            "id": 385,
            "name": "欧易认证号",
            "price": 15,
            "stock": 17,
            "deletetime": null,
            "outcategory_id": 98
        }
    ],
    "币安Binance": [
        {
            "id": 584,
            "name": "币安白号",
            "price": 0.4,
            "stock": 95,
            "deletetime": null,
            "outcategory_id": 98
        },
        {
            "id": 385,
            "name": "币安认证号",
            "price": 15,
            "stock": 37,
            "deletetime": null,
            "outcategory_id": 98
        }
    ],
    "bumble(大黄蜂)": [
        {
            "id": 386,
            "name": "bumble成品号（已蓝v认证）",
            "price": 16,
            "stock": 120,
            "deletetime": null,
            "outcategory_id": 99
        }
    ],
    "Airbnb账号": [
        {
            "id": 386,
            "name": "Airbnb成品号",
            "price": 6,
            "stock": 111,
            "deletetime": null,
            "outcategory_id": 99
        }
    ],
    "reddit账号": [
        {
            "id": 387,
            "name": "reddit账号(15-90天)",
            "price": 1,
            "stock": 89,
            "deletetime": null,
            "outcategory_id": 100
        },
        {
            "id": 438,
            "name": "reddit账号(1年-2年)",
            "price": 3,
            "stock": 143,
            "deletetime": null,
            "outcategory_id": 100
        },
        {
            "id": 439,
            "name": "reddit账号(90天-1年)",
            "price": 2,
            "stock": 142,
            "deletetime": null,
            "outcategory_id": 100
        }
    ],
    "sendgrid账号": [
        {
            "id": 388,
            "name": "sendgrid账号",
            "price": 1.6,
            "stock": 42,
            "deletetime": null,
            "outcategory_id": 101
        }
    ],
    "foodpanda账号": [
        {
            "id": 389,
            "name": "foodpanda账号",
            "price": 1,
            "stock": 49,
            "deletetime": null,
            "outcategory_id": 102
        }
    ],
    "shaadi账号": [
        {
            "id": 390,
            "name": "shaadi白号",
            "price": 1.2,
            "stock": 95,
            "deletetime": null,
            "outcategory_id": 103
        },
        {
            "id": 391,
            "name": "shaadi会员号",
            "price": 10,
            "stock": 23,
            "deletetime": null,
            "outcategory_id": 103
        }
    ],
    "skout": [
        {
            "id": 392,
            "name": "skout账号",
            "price": 1.2,
            "stock": 35,
            "deletetime": null,
            "outcategory_id": 104
        }
    ],
    "freelancer账号": [
        {
            "id": 393,
            "name": "freelancer账号",
            "price": 1.5,
            "stock": 24,
            "deletetime": null,
            "outcategory_id": 105
        }
    ],
    "fb有缘号/facebook有缘号": [
        {
            "id": 394,
            "name": "Facebook有缘（24小时售后包心动包人脸）",
            "price": 8,
            "stock": 1287,
            "deletetime": null,
            "outcategory_id": 106
        }
    ],
    "mewe": [
        {
            "id": 404,
            "name": "mewe账号",
            "price": 2,
            "stock": 152,
            "deletetime": null,
            "outcategory_id": 107
        }
    ],
    "signal账号": [
        {
            "id": 405,
            "name": "signal账号",
            "price": 2.2,
            "stock": 98,
            "deletetime": null,
            "outcategory_id": 108
        }
    ],
    "quora账号": [
        {
            "id": 406,
            "name": "quora账号",
            "price": 2.3,
            "stock": 175,
            "deletetime": null,
            "outcategory_id": 109
        }
    ],
    "partying账号": [
        {
            "id": 550,
            "name": "partying账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Kismia账号": [
        {
            "id": 415,
            "name": "Kismia新号",
            "price": 1.2,
            "stock": 265,
            "deletetime": null,
            "outcategory_id": 112
        }
    ],
    "Luxy账号": [
        {
            "id": 416,
            "name": "Luxy男号",
            "price": 8,
            "stock": 35,
            "deletetime": null,
            "outcategory_id": 113
        },
        {
            "id": 417,
            "name": "Luxy女号",
            "price": 8,
            "stock": 45,
            "deletetime": null,
            "outcategory_id": 113
        }
    ],
    "sweetring账号": [
        {
            "id": 418,
            "name": "sweetring白号",
            "price": 1.3,
            "stock": 531,
            "deletetime": null,
            "outcategory_id": 114
        },
        {
            "id": 419,
            "name": "sweetring成品号(1-3个月)",
            "price": 4,
            "stock": 75,
            "deletetime": null,
            "outcategory_id": 114
        }
    ],
    "eharmony账号": [
        {
            "id": 421,
            "name": "eharmony账号",
            "price": 1.5,
            "stock": 154,
            "deletetime": null,
            "outcategory_id": 115
        },
        {
            "id": 424,
            "name": "eharmony账号(已认证)",
            "price": 7,
            "stock": 181,
            "deletetime": null,
            "outcategory_id": 115
        }
    ],
    "stripe": [
        {
            "id": 422,
            "name": "stripe账号",
            "price": 7,
            "stock": 57,
            "deletetime": null,
            "outcategory_id": 116
        }
    ],
    "拼多多": [
        {
            "id": 423,
            "name": "拼多多账号",
            "price": 1.6,
            "stock": 154,
            "deletetime": null,
            "outcategory_id": 117
        }
    ],
    "github账号": [
        {
            "id": 425,
            "name": "github账号(90天内注册)",
            "price": 1,
            "stock": 32,
            "deletetime": null,
            "outcategory_id": 118
        },
        {
            "id": 427,
            "name": "github账号(3个月-1年)",
            "price": 1,
            "stock": 126,
            "deletetime": null,
            "outcategory_id": 118
        }
    ],
    "ebpay": [
        {
            "id": 426,
            "name": "ebpay账号",
            "price": 2,
            "stock": 99,
            "deletetime": null,
            "outcategory_id": 119
        }
    ],
    "letstalk账号": [
        {
            "id": 434,
            "name": "letstalk账号",
            "price": 1.5,
            "stock": 557,
            "deletetime": null,
            "outcategory_id": 120
        }
    ],
    "google/谷歌": [
        {
            "id": 435,
            "name": "google账号/gmail账号/googleplay账号",
            "price": 1,
            "stock": 264,
            "deletetime": null,
            "outcategory_id": 121
        },
        {
            "id": 437,
            "name": "google开发者账号",
            "price": 25,
            "stock": 56,
            "deletetime": null,
            "outcategory_id": 121
        },
        {
            "id": 447,
            "name": "Google Merchant Center",
            "price": 1.5,
            "stock": 186,
            "deletetime": null,
            "outcategory_id": 121
        }
    ],
    "OKCoin账号": [
        {
            "id": 436,
            "name": "OKCoin账号",
            "price": 2,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 122
        }
    ],
    "支付宝alipay": [
        {
            "id": 443,
            "name": "支付宝个人账号(已认证，可正常收款转账)",
            "price": 145,
            "stock": 52,
            "deletetime": null,
            "outcategory_id": 123
        },
        {
            "id": 444,
            "name": "支付宝个人账号(未认证)",
            "price": 12,
            "stock": 157,
            "deletetime": null,
            "outcategory_id": 123
        }
    ],
    "国际快手Kwai": [
        {
            "id": 543,
            "name": "Kwai账号(已实名)",
            "price": 0.3,
            "stock": 195,
            "deletetime": null,
            "outcategory_id": 123
        },
        {
            "id": 544,
            "name": "Kwai老号(已实名)",
            "price": 1.5,
            "stock": 259,
            "deletetime": null,
            "outcategory_id": 123
        }
    ],
    "chinalovecupid账号": [
        {
            "id": 445,
            "name": "chinalovecupid成品号",
            "price": 13,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 124
        },
        {
            "id": 446,
            "name": "chinalovecupid白号",
            "price": 11,
            "stock": 141,
            "deletetime": null,
            "outcategory_id": 124
        }
    ],
    "PPOMPPU": [
        {
            "id": 446,
            "name": "PPOMPPU账号",
            "price": 1,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 125
        }
    ],
    "bitflyer账号": [
        {
            "id": 447,
            "name": "bitfyer",
            "price": 1.2,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 126
        }
    ],
    "xvideos账号": [
        {
            "id": 448,
            "name": "xvideos",
            "price": 1.5,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 127
        }
    ],
    "talkatone账号": [
        {
            "id": 449,
            "name": "talkatone",
            "price": 1.3,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 128
        }
    ],
    "zoosk账号": [
        {
            "id": 450,
            "name": "zoosk",
            "price": 1.5,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 129
        }
    ],
    "blued账号": [
        {
            "id": 451,
            "name": "blued",
            "price": 1.6,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 130
        }
    ],
    "AOL邮箱": [
        {
            "id": 452,
            "name": "AOL邮箱",
            "price": 0.5,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 131
        }
    ],
    "礼品卡": [
        {
            "id": 453,
            "name": "苹果礼品卡$100",
            "price": 60,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 132
        },
        {
            "id": 437,
            "name": "Google Play 礼品卡$100",
            "price": 65,
            "stock": 130,
            "deletetime": null,
            "outcategory_id": 121
        },
        {
            "id": 758,
            "name": "香草礼品卡$100",
            "price": 70,
            "stock": 130,
            "deletetime": null,
            "outcategory_id": 121
        },
        {
            "id": 447,
            "name": "Amazon礼品卡$100",
            "price": 65,
            "stock": 186,
            "deletetime": null,
            "outcategory_id": 121
        },
        {
            "id": 447,
            "name": "Steam礼品卡$100",
            "price": 60,
            "stock": 389,
            "deletetime": null,
            "outcategory_id": 121
        },
        {
            "id": 447,
            "name": "Visa礼品卡/预付卡$100",
            "price": 70,
            "stock": 16,
            "deletetime": null,
            "outcategory_id": 121
        },
        {
            "id": 958,
            "name": "其他礼品卡定制100$",
            "price": 70,
            "stock": 16,
            "deletetime": null,
            "outcategory_id": 121
        },
        {
            "id": 958,
            "name": "其他礼品卡定制100RMB面额",
            "price": 10,
            "stock": 16,
            "deletetime": null,
            "outcategory_id": 121
        },
        {
            "id": 958,
            "name": "其他礼品卡定制1000RMB面额",
            "price": 100,
            "stock": 16,
            "deletetime": null,
            "outcategory_id": 121
        }
    ],
    "全球营业执照/护照/身份证及其他": [
        {
            "id": 453,
            "name": "营业执照+手持",
            "price": 15,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 132
        },
        {
            "id": 437,
            "name": "身份证正反+手持",
            "price": 3,
            "stock": 139,
            "deletetime": null,
            "outcategory_id": 121
        },
        {
            "id": 447,
            "name": "驾驶证",
            "price": 5,
            "stock": 196,
            "deletetime": null,
            "outcategory_id": 121
        },
        {
            "id": 447,
            "name": "护照+手持",
            "price": 15,
            "stock": 160,
            "deletetime": null,
            "outcategory_id": 121
        },
        {
            "id": 447,
            "name": "代实名及其他要求补差价(全球大部分地区都有)",
            "price": 1,
            "stock": 700,
            "deletetime": null,
            "outcategory_id": 121
        }
    ],
    "各国护照": [
        {
            "id": 454,
            "name": "护照正反图",
            "price": 0.5,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 133
        }
    ],
    "FB解封/Tg解封/蝙蝠解封": [
        {
            "id": 455,
            "name": "FB解封",
            "price": 10,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 134
        },
        {
            "id": 455,
            "name": "FB永久限制解封",
            "price": 20,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 134
        },
        {
            "id": 455,
            "name": "TG解封",
            "price": 10,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 134
        },
        {
            "id": 455,
            "name": "TG永久限制解封",
            "price": 20,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 134
        },
        {
            "id": 455,
            "name": "蝙蝠解封",
            "price": 10,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 134
        },
        {
            "id": 455,
            "name": "蝙蝠永久限制解封",
            "price": 20,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 134
        }
    ],
    "身份证正反实名图": [
        {
            "id": 456,
            "name": "身份证正反实名图",
            "price": 1.2,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 135
        }
    ],
    "bm公告账号": [
        {
            "id": 457,
            "name": "bm公告账号",
            "price": 1,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 136
        }
    ],
    "coinbase账号": [
        {
            "id": 458,
            "name": "coinbase账号",
            "price": 5,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 137
        }
    ],
    "steam账号": [
        {
            "id": 459,
            "name": "steam账号",
            "price": 1,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 138
        }
    ],
    "Asiandating账号": [
        {
            "id": 460,
            "name": "Asiandating账号",
            "price": 1,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 139
        }
    ],
    "verzon账号": [
        {
            "id": 461,
            "name": "verzon账号",
            "price": 2,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 140
        }
    ],
    "snapchat账号": [
        {
            "id": 462,
            "name": "snapchat账号",
            "price": 1.7,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 141
        }
    ],
    "onlyfans账号": [
        {
            "id": 463,
            "name": "onlyfans账号",
            "price": 1.5,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 142
        }
    ],
    "grindr账号": [
        {
            "id": 464,
            "name": "grindr账号",
            "price": 2,
            "stock": 145,
            "deletetime": null,
            "outcategory_id": 143
        }
    ],
    "Bybit账号": [
        {
            "id": 466,
            "name": "Bybit账号",
            "price": 10,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "netflix网飞": [
        {
            "id": 467,
            "name": "netflix账号",
            "price": 1,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "odnoklassniki": [
        {
            "id": 468,
            "name": "odnoklassniki成品女号（1年-2年）",
            "price": 1.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 469,
            "name": "odnoklassniki白号",
            "price": 0.62,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 470,
            "name": "odnoklassniki成品男号（1年-2年）",
            "price": 1.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "火币HTX": [
        {
            "id": 471,
            "name": "火币白号",
            "price": 0.4,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 472,
            "name": "火币认证号",
            "price": 15,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "oldbuil": [
        {
            "id": 473,
            "name": "oldbuil白号",
            "price": 0.62,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 474,
            "name": "oldbuil认证号",
            "price": 1.15,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "AdvCash": [
        {
            "id": 475,
            "name": "AdvCash账号",
            "price": 0.62,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "bithumb": [
        {
            "id": 476,
            "name": "bithumb账号（未实名）",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 477,
            "name": "bithumb账号（已实名）",
            "price": 2.3,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "okcupid": [
        {
            "id": 478,
            "name": "okcupid成品号",
            "price": 3.08,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Grindr": [
        {
            "id": 479,
            "name": "Grindr账号",
            "price": 3.08,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "bigo": [
        {
            "id": 480,
            "name": "bigo账号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Mercari煤炉": [
        {
            "id": 481,
            "name": "Mercari煤炉白号",
            "price": 1.15,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 482,
            "name": "Mercari煤炉卖家号",
            "price": 6.15,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Talkatone": [
        {
            "id": 483,
            "name": "Talkatone账号",
            "price": 0.85,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "跟我账号": [
        {
            "id": 484,
            "name": "MJ共享",
            "price": 3.85,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 485,
            "name": "MJ独享",
            "price": 12.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "泡泡账号": [
        {
            "id": 486,
            "name": "泡泡账号1个月",
            "price": 3.69,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 487,
            "name": "泡泡账号1年",
            "price": 12.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "MosTalk": [
        {
            "id": 488,
            "name": "MosTalk一个月",
            "price": 1.54,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 489,
            "name": "MosTalk一年",
            "price": 12.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Band": [
        {
            "id": 490,
            "name": "Band账号",
            "price": 1.54,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "snapchat": [
        {
            "id": 491,
            "name": "snapchat账号",
            "price": 2.25,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "OMIO": [
        {
            "id": 492,
            "name": "OMIO账号",
            "price": 2.25,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "PIXIV": [
        {
            "id": 493,
            "name": "PIXIV账号",
            "price": 3.85,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Klarna账户": [
        {
            "id": 494,
            "name": "Klarna个人账户",
            "price": 3.78,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 495,
            "name": "Klarna商户账户",
            "price": 12.85,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "meetme": [
        {
            "id": 496,
            "name": "meetme白号",
            "price": 2.28,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 497,
            "name": "meetme双认证号",
            "price": 6.15,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "meeff": [
        {
            "id": 498,
            "name": "meeff成品号",
            "price": 2.28,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "trip账号": [
        {
            "id": 499,
            "name": "trip白号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 500,
            "name": "trip老号（已实名）",
            "price": 2.69,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Leboncoin": [
        {
            "id": 501,
            "name": "LBC个人账户",
            "price": 1.15,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 502,
            "name": "LBC企业账户",
            "price": 6.58,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "stripe账号": [
        {
            "id": 503,
            "name": "stripe账号",
            "price": 6.68,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Cash app账号": [
        {
            "id": 504,
            "name": "Cash app账号",
            "price": 6.68,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Tandem账号": [
        {
            "id": 505,
            "name": "Tandem账号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 506,
            "name": "Tandem实名账号",
            "price": 2.3,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Dropbox账号": [
        {
            "id": 507,
            "name": "Dropbox账号",
            "price": 6.68,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Heygen": [
        {
            "id": 508,
            "name": "Heygen账号",
            "price": 1.15,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Claud": [
        {
            "id": 509,
            "name": "Claud账号",
            "price": 1.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "TWILIO账号": [
        {
            "id": 510,
            "name": "TWILIO白号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 511,
            "name": "TWILIO实名号",
            "price": 1.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Gemini账号": [
        {
            "id": 512,
            "name": "Gemini Ultra",
            "price": 0.69,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 513,
            "name": "Gemini  Pro",
            "price": 0.54,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 514,
            "name": "Gemini  Nano",
            "price": 0.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "lovoo账号": [
        {
            "id": 515,
            "name": "lovoo账号",
            "price": 2.28,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Omi账号": [
        {
            "id": 516,
            "name": "新号",
            "price": 0.15,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 517,
            "name": "老号（已实名）",
            "price": 0.46,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "subito": [
        {
            "id": 518,
            "name": "subito账号",
            "price": 0.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "depop": [
        {
            "id": 519,
            "name": "depop账号",
            "price": 0.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "ipsosisay": [
        {
            "id": 520,
            "name": "ipsosisay账号",
            "price": 1.92,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "sugarbook": [
        {
            "id": 521,
            "name": "sugarbook白号",
            "price": 2.28,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 522,
            "name": "sugarbook实名号",
            "price": 6.68,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "HelloTalk": [
        {
            "id": 522,
            "name": "HelloTalk账号",
            "price": 1.54,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Topay": [
        {
            "id": 523,
            "name": "Topay账号",
            "price": 3.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Eatgether账号": [
        {
            "id": 524,
            "name": "新号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 525,
            "name": "老号",
            "price": 2.28,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 526,
            "name": "实名号",
            "price": 3.85,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Goodnight账号": [
        {
            "id": 527,
            "name": "Goodnight账号",
            "price": 0.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "heymandi账号": [
        {
            "id": 528,
            "name": "heymandi账号",
            "price": 0.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "淘妹账号": [
        {
            "id": 529,
            "name": "淘妹账号",
            "price": 0.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "缘圈账号": [
        {
            "id": 530,
            "name": "缘圈账号",
            "price": 0.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Paktor账号": [
        {
            "id": 531,
            "name": "Paktor账号 ",
            "price": 0.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "beebar账号": [
        {
            "id": 532,
            "name": "beebar账号 ",
            "price": 0.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Lirmatch账号": [
        {
            "id": 533,
            "name": "Lirmatch账号",
            "price": 0.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "antiLand账号": [
        {
            "id": 534,
            "name": "antiLand账号",
            "price": 0.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Purpa账号": [
        {
            "id": 535,
            "name": "Purpa账号",
            "price": 0.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Dcard账号": [
        {
            "id": 536,
            "name": "Dcard账号",
            "price": 0.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    " lemo账号": [
        {
            "id": 537,
            "name": "lemo账号",
            "price": 0.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    " Sayhi账号": [
        {
            "id": 538,
            "name": "Sayhi账号",
            "price": 0.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "树洞账号": [
        {
            "id": 539,
            "name": "树洞账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "WEdate账号": [
        {
            "id": 540,
            "name": "WEdate账号",
            "price": 0.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    " HEESAY账号": [
        {
            "id": 541,
            "name": "HEESAY账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "HER账号": [
        {
            "id": 542,
            "name": "HER账号",
            "price": 0.28,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Dino账号": [
        {
            "id": 543,
            "name": "Dino账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Gsland账号": [
        {
            "id": 544,
            "name": "Gsland账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "FaceBar账号": [
        {
            "id": 545,
            "name": "FaceBar账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Pumpkin账号": [
        {
            "id": 546,
            "name": "Pumpkin账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Moodii账号": [
        {
            "id": 547,
            "name": "Moodii账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "wetonch账号": [
        {
            "id": 548,
            "name": "wetonch账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "MIMYA账号": [
        {
            "id": 549,
            "name": "MIMYA账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "confide账号": [
        {
            "id": 551,
            "name": "confide账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "between账号": [
        {
            "id": 552,
            "name": "between账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Slowly账号": [
        {
            "id": 553,
            "name": "Slowly账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Ipair账号": [
        {
            "id": 554,
            "name": "Ipair账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "EZMatch账号": [
        {
            "id": 555,
            "name": "EZMatch账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "yueme账号": [
        {
            "id": 556,
            "name": "yueme账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "BIGO账号": [
        {
            "id": 557,
            "name": "BIGO账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "GRASS账号": [
        {
            "id": 558,
            "name": "GRASS账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Tango账号": [
        {
            "id": 559,
            "name": "Tango账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "toki账号": [
        {
            "id": 560,
            "name": "toki账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "SCRUFF账号": [
        {
            "id": 561,
            "name": "SCRUFF账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "frienzyme账号": [
        {
            "id": 562,
            "name": "frienzyme账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "ZUvio账号": [
        {
            "id": 563,
            "name": "ZUvio账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "MATCH账号": [
        {
            "id": 564,
            "name": "MATCH账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Weworld账号": [
        {
            "id": 565,
            "name": "Weworld账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Mixed账号": [
        {
            "id": 566,
            "name": "Mixed账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "zoe账号": [
        {
            "id": 567,
            "name": "zoe账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "DOWN账号": [
        {
            "id": 568,
            "name": "DOWN账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "MEEFF账号": [
        {
            "id": 569,
            "name": "MEEFF账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Signal账号": [
        {
            "id": 570,
            "name": "Signal账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "SURGE账号": [
        {
            "id": 571,
            "name": "SURGE账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Yik Yak账号": [
        {
            "id": 572,
            "name": "Yik Yak账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "TextFree账号": [
        {
            "id": 573,
            "name": "TextFree账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "BAND账号": [
        {
            "id": 574,
            "name": "BAND账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Etsy账号": [
        {
            "id": 575,
            "name": "Etsy账号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "lg账号": [
        {
            "id": 576,
            "name": "lg白号",
            "price": 0.36,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 577,
            "name": "lg账号实名成品号",
            "price": 2.68,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "wallapop账号": [
        {
            "id": 578,
            "name": "wallapop白号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 579,
            "name": "wallapop实名认证号",
            "price": 2.98,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Lespark账号": [
        {
            "id": 580,
            "name": "Lespark白号",
            "price": 0.62,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 581,
            "name": "Lespark个人实名认证账号",
            "price": 1.92,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 582,
            "name": "Lespark品牌商业账号",
            "price": 18.78,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 583,
            "name": "Lespark内容创作者账号",
            "price": 22.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "CoinW账号": [
        {
            "id": 584,
            "name": "CoinW实名号",
            "price": 2.28,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "账号投诉封号 TIKTOK/推特/FACEBOOK/LINE/TELEGRAM/WHATSAPP/INS": [
        {
            "id": 585,
            "name": "TIKTOK投诉封号",
            "price": 15.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 586,
            "name": "推特投诉封号",
            "price": 12.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 587,
            "name": "FB投诉封号",
            "price": 16.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 588,
            "name": "LINE投诉封号",
            "price": 13.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 589,
            "name": "TG投诉封号",
            "price": 15.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 590,
            "name": "WhatsAPP投诉封号",
            "price": 12.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 591,
            "name": "INS投诉封号",
            "price": 11.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "naver账号": [
        {
            "id": 592,
            "name": "naver账号",
            "price": 5.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "sweerring账号": [
        {
            "id": 593,
            "name": "sweerring账号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Shein(希音)账号": [
        {
            "id": 594,
            "name": "白号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 595,
            "name": "实名号",
            "price": 3.86,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "hegre账号": [
        {
            "id": 596,
            "name": "hegre账号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Jmail账号": [
        {
            "id": 597,
            "name": "Jmail账号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "ASHLEY MADISON账号": [
        {
            "id": 598,
            "name": "ASHLEY MADISON账号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "快连账号": [
        {
            "id": 599,
            "name": "快连账号",
            "price": 2.28,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Quickbooks账号": [
        {
            "id": 600,
            "name": "Quickbooks账号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "happymail账号": [
        {
            "id": 601,
            "name": "happymail账号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "recurbate会员账号": [
        {
            "id": 602,
            "name": "recurbate会员账号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Robinhood账号": [
        {
            "id": 603,
            "name": "Robinhood账号",
            "price": 0.68,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Fidelity账号": [
        {
            "id": 604,
            "name": "Fidelity账号",
            "price": 2.68,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "E*Trade账号": [
        {
            "id": 605,
            "name": "E*Trade账号",
            "price": 2.68,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Tiger Trade账号": [
        {
            "id": 606,
            "name": "Tiger Trade账号",
            "price": 2.68,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "pcmax账号": [
        {
            "id": 607,
            "name": "pcmax账号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Feeld账号": [
        {
            "id": 608,
            "name": "Feeld账号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "丘比特账号": [
        {
            "id": 609,
            "name": "丘比特账号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "truthsocial账号": [
        {
            "id": 610,
            "name": "truthsocial账号",
            "price": 0.88,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "EliteSingles账号": [
        {
            "id": 611,
            "name": "EliteSingles账号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "SilverSingles账号": [
        {
            "id": 612,
            "name": "SilverSingles账号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "happn账号": [
        {
            "id": 613,
            "name": "happn账号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "claude账号": [
        {
            "id": 614,
            "name": "claude账号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "谷歌邮箱解封": [
        {
            "id": 615,
            "name": "解封",
            "price": 10,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 616,
            "name": "永久限制解封",
            "price": 20,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Whatsapp解封": [
        {
            "id": 617,
            "name": "解封",
            "price": 10,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 618,
            "name": "永久限制解封",
            "price": 20,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "推特解封": [
        {
            "id": 619,
            "name": "解封",
            "price": 10,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 620,
            "name": "永久限制解封",
            "price": 20,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "北美论坛招聘账号": [
        {
            "id": 621,
            "name": "北美论坛招聘账号",
            "price": 1.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "bet365账号": [
        {
            "id": 622,
            "name": "bet365账号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Whatsapp老群": [
        {
            "id": 623,
            "name": "Whatsapp老群",
            "price": 0.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "thaifriendly账号": [
        {
            "id": 624,
            "name": "thaifriendly账号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "Telegram老群/频道": [
        {
            "id": 625,
            "name": "Telegram老频道(2018-2020年随机)",
            "price": 1.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 626,
            "name": "Telegram老群组(2018-2020年随机)",
            "price": 1.68,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "temu账号": [
        {
            "id": 627,
            "name": "temu账号",
            "price": 0.77,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "stripe帐号": [
        {
            "id": 628,
            "name": "stripe个人账号",
            "price": 0.38,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        },
        {
            "id": 629,
            "name": "stripe企业账号",
            "price": 8.68,
            "stock": 179,
            "deletetime": null,
            "outcategory_id": 144
        }
    ],
    "其他业务/补差价": [
        {
            "id": 465,
            "name": "其他业务/差价专用",
            "price": 1,
            "stock": 845,
            "deletetime": null,
            "outcategory_id": 142
        }
    ]
}

const countryArr = [
    {
        id: 1,
        name: 'US/美国 +1',
    },
    {
        id: 2,
        name: 'GB/英国 +44',
    },
    {
        id: 3,
        name: 'VN/越南 +84',
    },
    {
        id: 4,
        name: 'SA/沙特阿拉伯 +966',
    },
    {
        id: 5,
        name: 'SG/新加坡 +65',
    },
    {
        id: 6,
        name: 'AR/阿根廷 +54',
    },
    {
        id: 7,
        name: 'TR/土耳其 +90',
    },
    {
        id: 8,
        name: 'AU/澳大利亚 +61',
    },
    {
        id: 9,
        name: 'AT/奥地利 +43',
    },
    {
        id: 10,
        name: 'ZA/南非 +27',
    },
    {
        id: 11,
        name: 'BS/巴哈马 +1242',
    },
    {
        id: 12,
        name: 'TH/泰国 +66',
    },
    {
        id: 13,
        name: 'BD/孟加拉国 +880',
    },
    {
        id: 14,
        name: 'MX/墨西哥 +52',
    },
    {
        id: 15,
        name: 'BY/白俄罗斯 +375',
    },
    {
        id: 16,
        name: 'BE/比利时 +32',
    },
    {
        id: 17,
        name: 'BZ/伯利兹 +501',
    },
    {
        id: 18,
        name: 'BJ/贝宁 +229',
    },
    {
        id: 19,
        name: 'BM/百慕大群岛 +1441',
    },
    {
        id: 20,
        name: 'BO/玻利维亚 +591',
    },
    {
        id: 21,
        name: 'BW/博茨瓦纳 +267',
    },
    {
        id: 22,
        name: 'BR/巴西 +55',
    },
    {
        id: 23,
        name: 'BN/文莱 +673',
    },
    {
        id: 24,
        name: 'BG/保加利亚 +359',
    },
    {
        id: 25,
        name: 'BF/布基纳法索 +226',
    },
    {
        id: 26,
        name: 'MM/缅甸 +95',
    },
    {
        id: 27,
        name: 'BI/布隆迪 +257',
    },
    {
        id: 28,
        name: 'CM/喀麦隆 +237',
    },
    {
        id: 29,
        name: 'CA/加拿大 +1',
    },
    {
        id: 30,
        name: 'CF/中非共和国 +236',
    },
    {
        id: 31,
        name: 'TD/乍得 +235',
    },
    {
        id: 32,
        name: 'CL/智利 +56',
    },
    {
        id: 33,
        name: 'AO/安哥拉 +244',
    },
    {
        id: 34,
        name: 'CO/哥伦比亚 +57',
    },
    {
        id: 35,
        name: 'CG/刚果 +242',
    },
    {
        id: 36,
        name: 'CK/库克群岛 +682',
    },
    {
        id: 37,
        name: 'CR/哥斯达黎加 +506',
    },
    {
        id: 38,
        name: 'CU/古巴 +53',
    },
    {
        id: 39,
        name: 'CY/塞浦路斯 +357',
    },
    {
        id: 40,
        name: 'CZ/捷克 +420',
    },
    {
        id: 41,
        name: 'DK/丹麦 +45',
    },
    {
        id: 42,
        name: 'DJ/吉布提 +253',
    },
    {
        id: 43,
        name: 'DO/多米尼加共和国 +1890',
    },
    {
        id: 44,
        name: 'EC/厄瓜多尔 +593',
    },
    {
        id: 45,
        name: 'EG/埃及 +20',
    },
    {
        id: 46,
        name: 'SV/萨尔瓦多 +503',
    },
    {
        id: 47,
        name: 'EE/爱沙尼亚 +372',
    },
    {
        id: 48,
        name: 'ET/埃塞俄比亚 +251',
    },
    {
        id: 49,
        name: 'FJ/斐济 +679',
    },
    {
        id: 50,
        name: 'FI/芬兰 +358',
    },
    {
        id: 51,
        name: 'FR/法国 +33',
    },
    {
        id: 52,
        name: 'GF/法属圭亚那 +594',
    },
    {
        id: 53,
        name: 'GA/加蓬 +241',
    },
    {
        id: 54,
        name: 'GM/冈比亚 +220',
    },
    {
        id: 55,
        name: 'GE/格鲁吉亚 +995',
    },
    {
        id: 56,
        name: 'DE/德国 +49',
    },
    {
        id: 57,
        name: 'GH/加纳 +233',
    },
    {
        id: 58,
        name: 'GI/直布罗陀 +350',
    },
    {
        id: 59,
        name: 'GR/希腊 +30',
    },
    {
        id: 60,
        name: 'GD/格林纳达 +1809',
    },
    {
        id: 61,
        name: 'GU/关岛 +1671',
    },
    {
        id: 62,
        name: 'GT/危地马拉 +502',
    },
    {
        id: 63,
        name: 'GN/几内亚 +224',
    },
    {
        id: 64,
        name: 'GY/圭亚那 +592',
    },
    {
        id: 65,
        name: 'HT/海地 +509',
    },
    {
        id: 66,
        name: 'HN/洪都拉斯 +504',
    },
    {
        id: 67,
        name: 'HK/香港 +852',
    },
    {
        id: 68,
        name: 'HU/匈牙利 +36',
    },
    {
        id: 69,
        name: 'IS/冰岛 +354',
    },
    {
        id: 70,
        name: 'IN/印度 +91',
    },
    {
        id: 71,
        name: 'ID/印度尼西亚 +62',
    },
    {
        id: 72,
        name: 'IR/伊朗 +98',
    },
    {
        id: 73,
        name: 'IQ/伊拉克 +964',
    },
    {
        id: 74,
        name: 'IE/爱尔兰 +353',
    },
    {
        id: 75,
        name: 'IL/以色列 +972',
    },
    {
        id: 76,
        name: 'IT/意大利 +39',
    },
    {
        id: 77,
        name: 'JM/牙买加 +1876',
    },
    {
        id: 78,
        name: 'JP/日本 +81',
    },
    {
        id: 79,
        name: 'JO/约旦 +962',
    },
    {
        id: 80,
        name: 'KH/柬埔寨 +855',
    },
    {
        id: 81,
        name: 'KZ/哈萨克斯坦 +327',
    },
    {
        id: 82,
        name: 'KE/肯尼亚 +254',
    },
    {
        id: 83,
        name: 'KR/韩国 +82',
    },
    {
        id: 84,
        name: 'KW/科威特 +965',
    },
    {
        id: 85,
        name: 'KG/吉尔吉斯坦 +331',
    },
    {
        id: 86,
        name: 'LA/老挝 +856',
    },
    {
        id: 87,
        name: 'LV/拉脱维亚 +371',
    },
    {
        id: 88,
        name: 'LB/黎巴嫩 +961',
    },
    {
        id: 89,
        name: 'LS/莱索托 +266',
    },
    {
        id: 90,
        name: 'LR/利比里亚 +231',
    },
    {
        id: 91,
        name: 'LY/利比亚 +218',
    },
    {
        id: 92,
        name: 'LI/列支敦士登 +423',
    },
    {
        id: 93,
        name: 'LT/立陶宛 +370',
    },
    {
        id: 94,
        name: 'LU/卢森堡 +352',
    },
    {
        id: 95,
        name: 'MO/澳门 +853',
    },
    {
        id: 96,
        name: 'MG/马达加斯加 +261',
    },
    {
        id: 97,
        name: 'MW/马拉维 +265',
    },
    {
        id: 98,
        name: 'MY/马来西亚 +60',
    },
    {
        id: 99,
        name: 'MV/马尔代夫 +960',
    },
    {
        id: 100,
        name: 'ML/马里 +223',
    },
    {
        id: 101,
        name: 'MT/马耳他 +356',
    },
    {
        id: 102,
        name: 'MU/毛里求斯 +230',
    },
    {
        id: 103,
        name: 'BB/巴巴多斯 +1246',
    },
    {
        id: 104,
        name: 'MD/摩尔多瓦 +373',
    },
    {
        id: 105,
        name: 'MC/摩纳哥 +377',
    },
    {
        id: 106,
        name: 'MN/蒙古 +976',
    },
    {
        id: 107,
        name: 'MS/蒙特塞拉特岛 +1664',
    },
    {
        id: 108,
        name: 'MA/摩洛哥 +212',
    },
    {
        id: 109,
        name: 'MZ/莫桑比克 +258',
    },
    {
        id: 110,
        name: 'NA/纳米比亚 +264',
    },
    {
        id: 111,
        name: 'NR/瑙鲁 +674',
    },
    {
        id: 112,
        name: 'NP/尼泊尔 +977',
    },
    {
        id: 113,
        name: 'NL/荷兰 +31',
    },
    {
        id: 114,
        name: 'NZ/新西兰 +64',
    },
    {
        id: 115,
        name: 'NI/尼加拉瓜 +505',
    },
    {
        id: 116,
        name: 'NE/尼日尔 +227',
    },
    {
        id: 117,
        name: 'NG/尼日利亚 +234',
    },
    {
        id: 118,
        name: 'KP/朝鲜 +850',
    },
    {
        id: 119,
        name: 'NO/挪威 +47',
    },
    {
        id: 120,
        name: 'OM/阿曼 +968',
    },
    {
        id: 121,
        name: 'PK/巴基斯坦 +92',
    },
    {
        id: 122,
        name: 'PA/巴拿马 +507',
    },
    {
        id: 123,
        name: 'PG/巴布亚新几内亚 +675',
    },
    {
        id: 124,
        name: 'PY/巴拉圭 +595',
    },
    {
        id: 125,
        name: 'PE/秘鲁 +51',
    },
    {
        id: 126,
        name: 'PH/菲律宾 +63',
    },
    {
        id: 127,
        name: 'PL/波兰 +48',
    },
    {
        id: 128,
        name: 'PF/法属玻利尼西亚 +689',
    },
    {
        id: 129,
        name: 'PT/葡萄牙 +351',
    },
    {
        id: 130,
        name: 'PR/波多黎各 +1787',
    },
    {
        id: 131,
        name: 'QA/卡塔尔 +974',
    },
    {
        id: 132,
        name: 'RO/罗马尼亚 +40',
    },
    {
        id: 133,
        name: 'RU/俄罗斯 +7',
    },
    {
        id: 134,
        name: 'LC/圣卢西亚 +1758',
    },
    {
        id: 135,
        name: 'VC/圣文森特岛 +1784',
    },
    {
        id: 136,
        name: 'SM/圣马力诺 +378',
    },
    {
        id: 137,
        name: 'ST/圣多美和普林西比 +239',
    },
    {
        id: 138,
        name: 'AI/安圭拉岛 +1264',
    },
    {
        id: 139,
        name: 'SN/塞内加尔 +221',
    },
    {
        id: 140,
        name: 'SC/塞舌尔 +248',
    },
    {
        id: 141,
        name: 'SL/塞拉利昂 +232',
    },
    {
        id: 142,
        name: 'AG/安提瓜和巴布达 +1268',
    },
    {
        id: 143,
        name: 'SK/斯洛伐克 +421',
    },
    {
        id: 144,
        name: 'SI/斯洛文尼亚 +386',
    },
    {
        id: 145,
        name: 'SB/所罗门群岛 +677',
    },
    {
        id: 146,
        name: 'SO/索马里 +252',
    },
    {
        id: 147,
        name: 'AZ/阿塞拜疆 +994',
    },
    {
        id: 148,
        name: 'ES/西班牙 +34',
    },
    {
        id: 149,
        name: 'LK/斯里兰卡 +94',
    },
    {
        id: 150,
        name: 'LC/圣卢西亚 +1758',
    },
    {
        id: 151,
        name: 'VC/圣文森特 +1784',
    },
    {
        id: 152,
        name: 'SD/苏丹 +249',
    },
    {
        id: 153,
        name: 'SR/苏里南 +597',
    },
    {
        id: 154,
        name: 'SZ/斯威士兰 +268',
    },
    {
        id: 155,
        name: 'SE/瑞典 +46',
    },
    {
        id: 156,
        name: 'CH/瑞士 +41',
    },
    {
        id: 157,
        name: 'SY/叙利亚 +963',
    },
    {
        id: 158,
        name: 'TW/台湾省 +886',
    },
    {
        id: 159,
        name: 'TJ/塔吉克斯坦 +992',
    },
    {
        id: 160,
        name: 'TZ/坦桑尼亚 +255',
    },
    {
        id: 161,
        name: 'BH/巴林 +973',
    },
    {
        id: 162,
        name: 'TG/多哥 +228',
    },
    {
        id: 163,
        name: 'TO/汤加 +676',
    },
    {
        id: 164,
        name: 'TT/特立尼达和多巴哥 +1809',
    },
    {
        id: 165,
        name: 'TN/突尼斯 +216',
    },
    {
        id: 166,
        name: 'AM/亚美尼亚 +374',
    },
    {
        id: 167,
        name: 'TM/土库曼斯坦 +993',
    },
    {
        id: 168,
        name: 'UG/乌干达 +256',
    },
    {
        id: 169,
        name: 'UA/乌克兰 +380',
    },
    {
        id: 170,
        name: 'AE/阿拉伯联合酋长国 +971',
    },
    {
        id: 171,
        name: 'AL/阿尔巴尼亚 +355',
    },
    {
        id: 172,
        name: 'DZ/阿尔及利亚 +213',
    },
    {
        id: 173,
        name: 'UY/乌拉圭 +598',
    },
    {
        id: 174,
        name: 'UZ/乌兹别克斯坦 +233',
    },
    {
        id: 175,
        name: 'VE/委内瑞拉 +58',
    },
    {
        id: 176,
        name: 'AD/安道尔共和国 +376',
    },
    {
        id: 177,
        name: 'YE/也门 +967',
    },
    {
        id: 178,
        name: 'YU/南斯拉夫 +381',
    },
    {
        id: 179,
        name: 'ZW/津巴布韦 +263',
    },
    {
        id: 180,
        name: 'ZR/扎伊尔 +243',
    },
    {
        id: 181,
        name: 'ZM/赞比亚 +260',
    },
        {
        id: 182,
        name: 'CH/中国 +86',
    },
    {
        id: 183,
        name: 'HK/香港 +852',
    },
    {
        id: 184,
        name: 'MAC/澳门 +853',
    },
    {
        id: 185,
        name: 'TW/台湾 +886',
    }
];



// try {
//     const fullUrl = window.location.href;
//     let data = sendGETRequestSync(domin + '/api/shop');
//     let m = JSON.parse(data).data;
//     console.log(m)
//     goodsObject = m;
// } catch (error) {
//     console.error('Error:', error);
// }




const classifyArr = Object.keys(goodsObject);
console.log(goodsObject);
let classifyOptions = `<option style="display: none">请选择商品类型</option>`;
let productOptions = `<option>请选择商品</option>`;
let countryOptions = `<option style="display: none">请选择地区</option>`;

classifyArr.forEach((text, i) => {
    classifyOptions += `<option value="${i}"}>${text}</option>`
});
countryArr.forEach(item => {
    countryOptions += `<option value="${item.id}"}>${item.name}</option>`
});

const classifyEl = document.getElementById('classify');
const productEl = document.getElementById('productName');
const countryEl = document.getElementById('country');

classifyEl.innerHTML = classifyOptions;
countryEl.innerHTML = countryOptions;

window.onload = () => {
    if (isNaN(classifyEl.value)) {
        productEl.innerHTML = productOptions;
    } else {
        chooseClassify(classifyEl.value);
    }
    if (!isNaN(countryEl.value)) {
        chooseCountry(countryEl.value);
    }
}


function chooseClassify(value) {
    if (value < 0) return;
    classifyIndex = value;
    document.getElementById('classify').parentElement.classList.add('pass');
    productOptions = `<option style="display: none">请选择商品</option>`;
    goodsObject[classifyArr[value]].forEach((item, i) => {
        productOptions += `<option value="${i}"}>${item.name}</option>`
    });
    document.getElementById('productName').innerHTML = productOptions;
    chooseProduct(-1);
}

function chooseProduct(value) {
    goodsIndex = value;
    goodsIndex >= 0 ? document.getElementById('productName').parentElement.classList.add('pass') : document.getElementById('productName').parentElement.classList.remove('pass')
    updatePrice();
}
function chooseCountry(value) {
    countryId = value;
    document.getElementById('country').parentElement.classList.add('pass');
    updatePrice();
}

function updatePrice() {
    // 
    unitPrice = -1;
    stock = -1;
    quantity = 1;
    const goods = goodsObject[classifyArr[classifyIndex]][goodsIndex];
    console.log(goods)
    const geValue = document.getElementById('quantity').value?document.getElementById('quantity').value:0;
    const fullUrl = window.location.href;
    // sendGETRequestSync(domin + '/api/tgbot/zuji?site='+fullUrl+"&name="+goods.name +"&ge="+geValue);
    if (goodsIndex >= 0 && countryId > 0) {
        
        unitPrice = goods[`price-${countryId}`] || goods['price'];
        stock = goods.stock;
    }
    document.getElementById('quantity').textContent = quantity;
    unitPrice = Number(unitPrice);
    document.getElementById('unitPrice').textContent = unitPrice > -1 ? unitPrice.toFixed(2) : '-';
    document.getElementById('stock').textContent = stock > -1 ? stock : '-';
    if (goodsIndex >= 0 && countryId >= 0) {
        try {
            document.querySelector('.hint.select').classList.remove('show', 'select')
        } catch (error) { }
    }
    updateTotal();
}



function changeNum(value) {
    quantity += value;
    if (quantity < 1) {
        quantity = 1;
    } else if (quantity >= stock) {
        quantity = stock;
        stock < 1 && (quantity = 1);
    }
    document.getElementById('quantity').textContent = quantity;
    updateTotal();
}
function updateTotal() {
    price = unitPrice * quantity;
    price < 0 && (price = 0);
    document.getElementById('total').textContent = price.toFixed(2);
}
function emailBlur() {
    email = emailEl.value;
    let hint = document.querySelector('.hint');
    function showHint(text, flag) {
        hint.textContent = text;
        hint.classList.add('show', (flag && 'select'));
    }
    if (goodsIndex < 0 || countryId < 0) {
        showHint('请选择商品名称、地区等必选项', true)
        return false
    }
    const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email) {
        showHint('请输入您的邮箱');
        return false
    } else if (!reg.test(email)) {
        showHint('邮箱格式有误')
        return false
    }
    hint.textContent = '';
    hint.classList.remove('show')
    return true
}

function goPay() {
    const result = emailBlur();
    if (!result) return false;
    let order = '';
    for (let i = 0; i < 13; i++) {
        let n = parseInt(Math.random() * 10);
        order += n;
    }
    // 获取选择的商品值
    var selectedValue = document.getElementById('productName').value;
    var geValue = document.getElementById('quantity').value;
    try {
        const fullUrl = window.location.href;
        // let data = sendGETRequestSync(domin + '/api/tgbot/dingdan?site='+fullUrl+"&order_id="+order+"&name="+selectedValue+"&ge="+geValue);
    } catch (error) {
        console.error('Error:', error);
    }
    location.href = `https://xyjnxy.shop/?price=${price}&order=${order}`;
    // https://xyjnxy.shop
    // location.href = 'https://gg.n8n8.org/payment.html?price=' + price + '&order=' + order;
}

let timer;
function startSlide() {
    clearInterval(timer);
    const notice = document.querySelector('.page>.notice');
    const info = notice.querySelector('.info');
    info.style.right = -info.offsetWidth + 'px';
    info.style.transform = `translateX(0px)`;
    info.style.transition = "all 0s";
    info.style.visibility = "visible";
    let x = 0;
    function slide() {
        info.style.right = -info.offsetWidth + 'px';
        x -= 60;
        if (x <= (-notice.offsetWidth - info.offsetWidth)) {
            x = 0;
        }
        info.style.transform = `translateX(${x}px)`;
        info.style.transition = "transform 1000ms linear";
        if (x === 0) {
            info.style.transition = "all 0s";
            clearInterval(timer);
            setTimeout(() => {
                timer = start();
            }, 3000);
        }
    }
    const start = () => setInterval(() => {
        requestAnimationFrame(slide)
    }, 1000)
    timer = start();
}
startSlide();