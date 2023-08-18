import { Article } from "@/models/global";

export const DEFAULT_NAME = '马上有码';
export const Languages = "C#,JavaScript,Java,HTML,Vue,CSS,Python,Classic ASP,C,PHP".split(',');
export const SystemColors =[
    {
        "name": "肌色",
        "color": "#fedcbd"
    },
    {
        "name": "赤白橡",
        "color": "#deab8a"
    },
    {
        "name": "绀桔梗",
        "color": "#444693"
    },
    {
        "name": "油色",
        "color": "#817936"
    },
    {
        "name": "鸨色",
        "color": "#f7acbc"
    },
    {
        "name": "踯躅色",
        "color": "#ef5b9c"
    },
    {
        "name": "伽罗色",
        "color": "#7f7522"
    },
    {
        "name": "花色",
        "color": "#2b4490"
    },
    {
        "name": "桜色",
        "color": "#feeeed"
    },
    {
        "name": "橙色",
        "color": "#f47920"
    },
    {
        "name": "青丹",
        "color": "#80752c"
    },
    {
        "name": "瑠璃色",
        "color": "#2a5caa"
    },
    {
        "name": "蔷薇色",
        "color": "#f05b72"
    },
    {
        "name": "灰茶",
        "color": "#905a3d"
    },
    {
        "name": "莺色",
        "color": "#87843b"
    },
    {
        "name": "琉璃绀",
        "color": "#224b8f"
    },
    {
        "name": "韩红",
        "color": "#f15b6c"
    },
    {
        "name": "茶色",
        "color": "#8f4b2e"
    },
    {
        "name": "利久色",
        "color": "#726930"
    },
    {
        "name": "绀色",
        "color": "#003a6c"
    },
    {
        "name": "珊瑚色",
        "color": "#f8aba6"
    },
    {
        "name": "桦茶色",
        "color": "#87481f"
    },
    {
        "name": "媚茶",
        "color": "#454926"
    },
    {
        "name": "青蓝",
        "color": "#102b6a"
    },
    {
        "name": "红梅色",
        "color": "#f69c9f"
    },
    {
        "name": "枯茶",
        "color": "#5f3c23"
    },
    {
        "name": "蓝海松茶",
        "color": "#2e3a1f"
    },
    {
        "name": "杜若色",
        "color": "#426ab3"
    },
    {
        "name": "桃色",
        "color": "#f58f98"
    },
    {
        "name": "焦茶",
        "color": "#6b473c"
    },
    {
        "name": "青钝",
        "color": "#4d4f36"
    },
    {
        "name": "胜色",
        "color": "#46485f"
    },
    {
        "name": "薄柿",
        "color": "#ca8687"
    },
    {
        "name": "柑子色",
        "color": "#faa755"
    },
    {
        "name": "抹茶色",
        "color": "#b7ba6b"
    },
    {
        "name": "群青色",
        "color": "#4e72b8"
    },
    {
        "name": "薄红梅",
        "color": "#f391a9"
    },
    {
        "name": "杏色",
        "color": "#fab27b"
    },
    {
        "name": "黄緑",
        "color": "#b2d235"
    },
    {
        "name": "铁绀",
        "color": "#181d4b"
    },
    {
        "name": "曙色",
        "color": "#bd6758"
    },
    {
        "name": "蜜柑色",
        "color": "#f58220"
    },
    {
        "name": "苔色",
        "color": "#5c7a29"
    },
    {
        "name": "蓝铁",
        "color": "#1a2933"
    },
    {
        "name": "红色",
        "color": "#d71345"
    },
    {
        "name": "褐色",
        "color": "#843900"
    },
    {
        "name": "若草色",
        "color": "#bed742"
    },
    {
        "name": "青褐",
        "color": "#121a2a"
    },
    {
        "name": "赤丹",
        "color": "#d64f44"
    },
    {
        "name": "路考茶",
        "color": "#905d1d"
    },
    {
        "name": "若緑",
        "color": "#7fb80e"
    },
    {
        "name": "褐返",
        "color": "#0c212b"
    },
    {
        "name": "红赤",
        "color": "#d93a49"
    },
    {
        "name": "饴色",
        "color": "#8a5d19"
    },
    {
        "name": "萌黄",
        "color": "#a3cf62"
    },
    {
        "name": "藤纳戸",
        "color": "#6a6da9"
    },
    {
        "name": "臙脂色",
        "color": "#b3424a"
    },
    {
        "name": "丁子色",
        "color": "#8c531b"
    },
    {
        "name": "苗色",
        "color": "#769149"
    },
    {
        "name": "桔梗色",
        "color": "#585eaa"
    },
    {
        "name": "真赭",
        "color": "#c76968"
    },
    {
        "name": "丁子茶",
        "color": "#826858"
    },
    {
        "name": "草色",
        "color": "#6d8346"
    },
    {
        "name": "绀蓝",
        "color": "#494e8f"
    },
    {
        "name": "今様色",
        "color": "#bb505d"
    },
    {
        "name": "黄栌",
        "color": "#64492b"
    },
    {
        "name": "柳色",
        "color": "#78a355"
    },
    {
        "name": "藤色",
        "color": "#afb4db"
    },
    {
        "name": "梅染",
        "color": "#987165"
    },
    {
        "name": "土器色",
        "color": "#ae6642"
    },
    {
        "name": "若草色",
        "color": "#abc88b"
    },
    {
        "name": "藤紫",
        "color": "#9b95c9"
    },
    {
        "name": "退红色",
        "color": "#ac6767"
    },
    {
        "name": "黄枯茶",
        "color": "#56452d"
    },
    {
        "name": "松叶色",
        "color": "#74905d"
    },
    {
        "name": "青紫",
        "color": "#6950a1"
    },
    {
        "name": "苏芳",
        "color": "#973c3f"
    },
    {
        "name": "狐色",
        "color": "#96582a"
    },
    {
        "name": "白緑",
        "color": "#cde6c7"
    },
    {
        "name": "菫色",
        "color": "#6f60aa"
    },
    {
        "name": "茜色",
        "color": "#b22c46"
    },
    {
        "name": "黄橡",
        "color": "#705628"
    },
    {
        "name": "薄緑",
        "color": "#1d953f"
    },
    {
        "name": "鸠羽色",
        "color": "#867892"
    },
    {
        "name": "红",
        "color": "#a7324a"
    },
    {
        "name": "银煤竹",
        "color": "#4a3113"
    },
    {
        "name": "千草色",
        "color": "#77ac98"
    },
    {
        "name": "薄色",
        "color": "#918597"
    },
    {
        "name": "银朱",
        "color": "#aa363d"
    },
    {
        "name": "涅色",
        "color": "#412f1f"
    },
    {
        "name": "青緑",
        "color": "#007d65"
    },
    {
        "name": "薄鼠",
        "color": "#6f6d85"
    },
    {
        "name": "赤",
        "color": "#ed1941"
    },
    {
        "name": "胡桃色",
        "color": "#845538"
    },
    {
        "name": "浅緑",
        "color": "#84bf96"
    },
    {
        "name": "鸠羽鼠",
        "color": "#594c6d"
    },
    {
        "name": "朱色",
        "color": "#f26522"
    },
    {
        "name": "香色",
        "color": "#8e7437"
    },
    {
        "name": "緑",
        "color": "#45b97c"
    },
    {
        "name": "菖蒲色",
        "color": "#694d9f"
    },
    {
        "name": "洗朱",
        "color": "#d2553d"
    },
    {
        "name": "国防色",
        "color": "#69541b"
    },
    {
        "name": "草色",
        "color": "#225a1f"
    },
    {
        "name": "江戸紫",
        "color": "#6f599c"
    },
    {
        "name": "红桦色",
        "color": "#b4534b"
    },
    {
        "name": "练色",
        "color": "#d5c59f"
    },
    {
        "name": "木贼色",
        "color": "#367459"
    },
    {
        "name": "紫",
        "color": "#8552a1"
    },
    {
        "name": "红绯",
        "color": "#ef4136"
    },
    {
        "name": "肉色",
        "color": "#cd9a5b"
    },
    {
        "name": "常盘色",
        "color": "#007947"
    },
    {
        "name": "灭紫",
        "color": "#543044"
    },
    {
        "name": "桦色",
        "color": "#c63c26"
    },
    {
        "name": "人色",
        "color": "#cd9a5b"
    },
    {
        "name": "緑青色",
        "color": "#40835e"
    },
    {
        "name": "葡萄鼠",
        "color": "#63434f"
    },
    {
        "name": "铅丹色",
        "color": "#f3715c"
    },
    {
        "name": "土色",
        "color": "#b36d41"
    },
    {
        "name": "千歳緑",
        "color": "#2b6447"
    },
    {
        "name": "古代紫",
        "color": "#7d5886"
    },
    {
        "name": "赭",
        "color": "#a7573b"
    },
    {
        "name": "小麦色",
        "color": "#df9464"
    },
    {
        "name": "深緑",
        "color": "#005831"
    },
    {
        "name": "暗红",
        "color": "#401c44"
    },
    {
        "name": "绯色",
        "color": "#aa2116"
    },
    {
        "name": "琥珀色",
        "color": "#b76f40"
    },
    {
        "name": "萌葱色",
        "color": "#006c54"
    },
    {
        "name": "葡萄",
        "color": "#472d56"
    },
    {
        "name": "丹",
        "color": "#b64533"
    },
    {
        "name": "木兰色",
        "color": "#ad8b3d"
    },
    {
        "name": "青白橡",
        "color": "#375830"
    },
    {
        "name": "茄子绀",
        "color": "#45224a"
    },
    {
        "name": "土",
        "color": "#b54334"
    },
    {
        "name": "栀子色",
        "color": "#dea32c"
    },
    {
        "name": "革色",
        "color": "#274d3d"
    },
    {
        "name": "紫绀",
        "color": "#411445"
    },
    {
        "name": "焦香",
        "color": "#853f04"
    },
    {
        "name": "朽叶",
        "color": "#d1923f"
    },
    {
        "name": "麹尘",
        "color": "#375830"
    },
    {
        "name": "浓色",
        "color": "#4b2f3d"
    },
    {
        "name": "真红",
        "color": "#840228"
    },
    {
        "name": "萱草色",
        "color": "#c88400"
    },
    {
        "name": "仙斎茶",
        "color": "#27342b"
    },
    {
        "name": "二蓝",
        "color": "#402e4c"
    },
    {
        "name": "绯",
        "color": "#7a1723"
    },
    {
        "name": "黄金",
        "color": "#c37e00"
    },
    {
        "name": "若竹色",
        "color": "#65c294"
    },
    {
        "name": "菖蒲色",
        "color": "#c77eb5"
    },
    {
        "name": "红海老茶",
        "color": "#a03939"
    },
    {
        "name": "金色",
        "color": "#c37e00"
    },
    {
        "name": "青磁色",
        "color": "#73b9a2"
    },
    {
        "name": "牡丹色",
        "color": "#ea66a6"
    },
    {
        "name": "浅苏芳",
        "color": "#8a2e3b"
    },
    {
        "name": "金茶",
        "color": "#e0861a"
    },
    {
        "name": "青竹色",
        "color": "#72baa7"
    },
    {
        "name": "赤紫",
        "color": "#f173ac"
    },
    {
        "name": "鸢色",
        "color": "#8e453f"
    },
    {
        "name": "卵色",
        "color": "#ffce7b"
    },
    {
        "name": "铁色",
        "color": "#005344"
    },
    {
        "name": "白",
        "color": "#fffffb"
    },
    {
        "name": "小豆色",
        "color": "#8f4b4a"
    },
    {
        "name": "山吹色",
        "color": "#fcaf17"
    },
    {
        "name": "锖鼠",
        "color": "#122e29"
    },
    {
        "name": "胡粉色",
        "color": "#fffef9"
    },
    {
        "name": "弁柄色",
        "color": "#892f1b"
    },
    {
        "name": "黄土色",
        "color": "#ba8448"
    },
    {
        "name": "铁御纳戸",
        "color": "#293047"
    },
    {
        "name": "生成色",
        "color": "#f6f5ec"
    },
    {
        "name": "栗梅",
        "color": "#6b2c25"
    },
    {
        "name": "朽叶色",
        "color": "#896a45"
    },
    {
        "name": "青緑",
        "color": "#00ae9d"
    },
    {
        "name": "灰白",
        "color": "#d9d6c3"
    },
    {
        "name": "海老茶",
        "color": "#733a31"
    },
    {
        "name": "空五倍子色",
        "color": "#76624c"
    },
    {
        "name": "锖浅葱",
        "color": "#508a88"
    },
    {
        "name": "石竹色",
        "color": "#d1c7b7"
    },
    {
        "name": "深绯",
        "color": "#54211d"
    },
    {
        "name": "莺茶",
        "color": "#6d5826"
    },
    {
        "name": "水浅葱",
        "color": "#70a19f"
    },
    {
        "name": "象牙色",
        "color": "#f2eada"
    },
    {
        "name": "赤铜色",
        "color": "#78331e"
    },
    {
        "name": "向日葵色",
        "color": "#ffc20e"
    },
    {
        "name": "新桥色",
        "color": "#50b7c1"
    },
    {
        "name": "乳白色",
        "color": "#d3d7d4"
    },
    {
        "name": "赤褐色",
        "color": "#53261f"
    },
    {
        "name": "郁金色",
        "color": "#fdb933"
    },
    {
        "name": "浅葱色",
        "color": "#00a6ac"
    },
    {
        "name": "薄钝",
        "color": "#999d9c"
    },
    {
        "name": "金赤",
        "color": "#f15a22"
    },
    {
        "name": "砂色",
        "color": "#d3c6a6"
    },
    {
        "name": "白群",
        "color": "#78cdd1"
    },
    {
        "name": "银鼠",
        "color": "#a1a3a6"
    },
    {
        "name": "赤茶",
        "color": "#b4533c"
    },
    {
        "name": "芥子色",
        "color": "#c7a252"
    },
    {
        "name": "御纳戸色",
        "color": "#008792"
    },
    {
        "name": "茶鼠",
        "color": "#9d9087"
    },
    {
        "name": "鼠色",
        "color": "#8a8c8e"
    },
    {
        "name": "赤锖色",
        "color": "#84331f"
    },
    {
        "name": "淡黄",
        "color": "#dec674"
    },
    {
        "name": "瓮覗",
        "color": "#94d6da"
    },
    {
        "name": "黄丹",
        "color": "#f47a55"
    },
    {
        "name": "薄墨色",
        "color": "#74787c"
    },
    {
        "name": "亜麻色",
        "color": "#b69968"
    },
    {
        "name": "水色",
        "color": "#afdfe4"
    },
    {
        "name": "枯色",
        "color": "#c1a173"
    },
    {
        "name": "赤橙",
        "color": "#f15a22"
    },
    {
        "name": "蓝鼠",
        "color": "#5e7c85"
    },
    {
        "name": "利休鼠",
        "color": "#7c8577"
    },
    {
        "name": "柿色",
        "color": "#f3704b"
    },
    {
        "name": "鸟子色",
        "color": "#dbce8f"
    },
    {
        "name": "秘色",
        "color": "#76becc"
    },
    {
        "name": "铅色",
        "color": "#72777b"
    },
    {
        "name": "肉桂色",
        "color": "#da765b"
    },
    {
        "name": "黄色",
        "color": "#ffd400"
    },
    {
        "name": "空色",
        "color": "#90d7ec"
    },
    {
        "name": "灰色",
        "color": "#77787b"
    },
    {
        "name": "桦色",
        "color": "#c85d44"
    },
    {
        "name": "蒲公英色",
        "color": "#ffd400"
    },
    {
        "name": "青",
        "color": "#009ad6"
    },
    {
        "name": "钝色",
        "color": "#4f5555"
    },
    {
        "name": "炼瓦色",
        "color": "#ae5039"
    },
    {
        "name": "中黄",
        "color": "#ffe600"
    },
    {
        "name": "蓝色",
        "color": "#145b7d"
    },
    {
        "name": "煤竹色",
        "color": "#6c4c49"
    },
    {
        "name": "锖色",
        "color": "#6a3427"
    },
    {
        "name": "刈安色",
        "color": "#f0dc70"
    },
    {
        "name": "浓蓝",
        "color": "#11264f"
    },
    {
        "name": "黒茶",
        "color": "#563624"
    },
    {
        "name": "桧皮色",
        "color": "#8f4b38"
    },
    {
        "name": "黄檗色",
        "color": "#fcf16e"
    },
    {
        "name": "勿忘草色",
        "color": "#7bbfea"
    },
    {
        "name": "黒橡",
        "color": "#3e4145"
    },
    {
        "name": "栗色",
        "color": "#8e3e1f"
    },
    {
        "name": "緑黄色",
        "color": "#decb00"
    },
    {
        "name": "露草色",
        "color": "#33a3dc"
    },
    {
        "name": "浓鼠",
        "color": "#3c3645"
    },
    {
        "name": "黄赤",
        "color": "#f36c21"
    },
    {
        "name": "鶸色",
        "color": "#cbc547"
    },
    {
        "name": "缥色",
        "color": "#228fbd"
    },
    {
        "name": "墨",
        "color": "#464547"
    },
    {
        "name": "代赭",
        "color": "#b4532a"
    },
    {
        "name": "海松色",
        "color": "#6e6b41"
    },
    {
        "name": "浅缥",
        "color": "#2468a2"
    },
    {
        "name": "黒",
        "color": "#130c0e"
    },
    {
        "name": "骆驼色",
        "color": "#b7704f"
    },
    {
        "name": "鶸茶",
        "color": "#596032"
    },
    {
        "name": "薄缥",
        "color": "#2570a1"
    },
    {
        "name": "黒铁",
        "color": "#281f1d"
    },
    {
        "name": "黄茶",
        "color": "#de773f"
    },
    {
        "name": "山鸠色",
        "color": "#525f42"
    },
    {
        "name": "薄花色",
        "color": "#2585a6"
    },
    {
        "name": "蝋色",
        "color": "#2f271d"
    },
    {
        "name": "洗柿",
        "color": "#c99979"
    },
    {
        "name": "生壁色",
        "color": "#5f5d46"
    },
    {
        "name": "绀青",
        "color": "#1b315e"
    },
    {
        "name": "紫黒",
        "color": "#1d1626"
    }
];

export const initArticleList: Article[] = [
    {
        "id": "75396575",
        "archived": false,
        "color": "#f1e05a",
        "followers": 4852,
        "has_funding_file": false,
        "hl_name": "duxianwei520/<em>react</em>",
        "hl_trunc_description": " <em>React</em>+webpack+redux+ant design+axios+less全家桶后台<em>管</em><em>理</em>框架",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 75396575,
                "name": "react",
                "owner_id": 3249653,
                "owner_login": "duxianwei520",
                "updated_at": "2023-04-08T04:24:49.117Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react",
            "redux",
            "babel",
            "webpack",
            "es6",
            "antd",
            "es7",
            "ant-design-pro"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "77513419",
        "archived": false,
        "color": "#f1e05a",
        "followers": 1063,
        "has_funding_file": false,
        "hl_name": "react-redux-antd-es6/<em>react</em>",
        "hl_trunc_description": "基于<em>react</em>的企业后台<em>管</em><em>理</em>开发框架",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": true,
        "public": true,
        "repo": {
            "repository": {
                "id": 77513419,
                "name": "react",
                "owner_id": 24805142,
                "owner_login": "react-redux-antd-es6",
                "updated_at": "2023-01-31T05:03:15.006Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react",
            "webpack",
            "antd"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "88002645",
        "archived": false,
        "color": "#3178c6",
        "followers": 6444,
        "has_funding_file": false,
        "hl_name": "yezihaohao/<em>react</em>-admin",
        "hl_trunc_description": "✨ <em>react</em>-admin system solution : <em>react</em> 后台<em>管</em><em>理</em>系统解决方案",
        "language": "TypeScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 88002645,
                "name": "react-admin",
                "owner_id": 23539868,
                "owner_login": "yezihaohao",
                "updated_at": "2022-05-16T17:39:14.541Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react",
            "javascript",
            "html",
            "antd",
            "admin-template",
            "ant-design",
            "react-admin"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "162171043",
        "archived": false,
        "color": "#b07219",
        "followers": 2204,
        "has_funding_file": false,
        "hl_name": "doublechaintech/scm-biz-suite",
        "hl_trunc_description": "供应链中台系统基础版，集成零售<em>管</em><em>理</em>, 电子商务, 供应链<em>管</em><em>理</em>, 财务<em>管</em><em>理</em>, 车队<em>管</em><em>理</em>, 仓库<em>管</em><em>理</em>, 人员<em>管</em><em>理</em>, 产品<em>管</em><em>理</em>, 订单<em>管</em><em>理</em>, 会员<em>管</em><em>理</em>, 连锁店<em>管</em><em>理</em>, 加盟<em>管</em><em>理</em>, 前端<em>React</em>/Ant Design, 后端Java Spring+自有开源框架，全面支持MySQL…",
        "language": "Java",
        "mirror": false,
        "owned_by_organization": true,
        "public": true,
        "repo": {
            "repository": {
                "id": 162171043,
                "name": "scm-biz-suite",
                "owner_id": 41176718,
                "owner_login": "doublechaintech",
                "updated_at": "2023-07-08T00:08:41.928Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "mysql",
            "java",
            "redis",
            "ecommerce",
            "spring",
            "erp",
            "supply-chain",
            "knowledge-graph",
            "tms",
            "antd",
            "retail",
            "scm",
            "echarts",
            "fleet-management",
            "warehouse-management",
            "ordermanagement",
            "digital-transformation",
            "oracle-atg-alternative",
            "headless-commerce"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "67352250",
        "archived": false,
        "color": "#f1e05a",
        "followers": 1498,
        "has_funding_file": false,
        "hl_name": "jiangxy/<em>react</em>-antd-admin",
        "hl_trunc_description": "用<em>React</em>和Ant Design搭建的一个通用<em>管</em><em>理</em>后台",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 67352250,
                "name": "react-antd-admin",
                "owner_id": 1011123,
                "owner_login": "jiangxy",
                "updated_at": "2017-06-28T18:31:05.026Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react",
            "redux",
            "crud",
            "admin",
            "webpack",
            "database",
            "dashboard",
            "react-router",
            "ant",
            "single-page-app",
            "reactjs",
            "admin-dashboard",
            "admin-ui",
            "database-management",
            "antd",
            "database-gui",
            "frontend-framework",
            "admin-theme",
            "ant-design"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "170834295",
        "archived": false,
        "color": "#f1e05a",
        "followers": 584,
        "has_funding_file": false,
        "hl_name": "sxfad/<em>react</em>-admin",
        "hl_trunc_description": "基于 Ant Design <em>React</em> 的<em>管</em><em>理</em>系统架构",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": true,
        "public": true,
        "repo": {
            "repository": {
                "id": 170834295,
                "name": "react-admin",
                "owner_id": 26759178,
                "owner_login": "sxfad",
                "updated_at": "2023-03-04T04:40:51.629Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react",
            "redux",
            "theme",
            "react-router",
            "antd",
            "ant-design",
            "react-admin"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "211756647",
        "archived": false,
        "color": "#f1e05a",
        "followers": 428,
        "has_funding_file": false,
        "hl_name": "ltadpoles/<em>react</em>-admin",
        "hl_trunc_description": "基于<em>react</em>的后台<em>管</em><em>理</em>项目模板",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 211756647,
                "name": "react-admin",
                "owner_id": 37846378,
                "owner_login": "ltadpoles",
                "updated_at": "2023-04-14T11:22:43.607Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react",
            "redux",
            "react-router",
            "axios",
            "antd",
            "react-loadable"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "125076453",
        "archived": false,
        "color": "#f1e05a",
        "followers": 105,
        "has_funding_file": false,
        "hl_name": "cd-dongzi/<em>react</em>-admin",
        "hl_trunc_description": "<em>react</em>后台<em>管</em><em>理</em>界面",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 125076453,
                "name": "react-admin",
                "owner_id": 24870710,
                "owner_login": "cd-dongzi",
                "updated_at": "2018-03-13T16:20:08.377Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "258943219",
        "archived": false,
        "color": "#f1e05a",
        "followers": 1792,
        "has_funding_file": false,
        "hl_name": "NLRX-WJC/<em>react</em>-antd-admin-template",
        "hl_trunc_description": "一个基于<em>React</em>+Antd的后台<em>管</em><em>理</em>模版，在线预览<a href=\"https://nlrx-wjc.github.io/react-antd-admin-template/\" rel=\"nofollow\">https://nlrx-wjc.github.io/react-antd-admin-template/</a>",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 258943219,
                "name": "react-antd-admin-template",
                "owner_id": 58020593,
                "owner_login": "NLRX-WJC",
                "updated_at": "2023-01-06T20:59:38.974Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "echarts",
            "webpack",
            "redux",
            "clipboard",
            "react-router",
            "create-react-app",
            "reactjs",
            "driver",
            "react-redux",
            "redux-thunk",
            "axios",
            "mockjs",
            "react-loadable",
            "react-beautiful-dnd",
            "react-custom-scrollbars",
            "screenfull",
            "react-draft-wysiwyg",
            "antd-design",
            "customize-cra",
            "react-countup"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "114507849",
        "archived": false,
        "color": "#f1e05a",
        "followers": 1644,
        "has_funding_file": false,
        "hl_name": "LANIF-UI/dva-boot-admin",
        "hl_trunc_description": "🍰 <em>react</em> admin dashboard ui LANIF-ADMIN --- <em>react</em> 16 + <em>react</em>-router 4 + dva 2 + antd 4 后台<em>管</em><em>理</em> 脚手架",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": true,
        "public": true,
        "repo": {
            "repository": {
                "id": 114507849,
                "name": "dva-boot-admin",
                "owner_id": 34116971,
                "owner_login": "LANIF-UI",
                "updated_at": "2023-01-03T17:11:50.961Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react",
            "redux",
            "enterprise",
            "design",
            "boilerplate",
            "admin",
            "ui",
            "react-router",
            "react-ui",
            "desktop",
            "admin-dashboard",
            "dva",
            "ant-design",
            "lanif-admin",
            "lanifadmin",
            "create-react-app-v2"
        ],
        "type": "Public",
        "help_wanted_issues_count": 1,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },

    {
        "id": "156714012",
        "archived": false,
        "color": "#f1e05a",
        "followers": 467,
        "has_funding_file": false,
        "hl_name": "biaochenxuying/blog-<em>react</em>-admin",
        "hl_trunc_description": "基于 pro.ant.design 的 <em>react</em> + Ant Design 的博客<em>管</em><em>理</em>后台项目",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 156714012,
                "name": "blog-react-admin",
                "owner_id": 24362914,
                "owner_login": "biaochenxuying",
                "updated_at": "2020-09-23T14:57:05.395Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react",
            "ant",
            "markdown-editor"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "103291862",
        "archived": false,
        "color": "#3178c6",
        "followers": 556,
        "has_funding_file": false,
        "hl_name": "xjh22222228/tomato-work",
        "hl_trunc_description": "🍅 Tomato Work for <em>React</em> 个人事务<em>管</em><em>理</em>系统",
        "language": "TypeScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 103291862,
                "name": "tomato-work",
                "owner_id": 15535177,
                "owner_login": "xjh22222228",
                "updated_at": "2023-06-21T01:39:26.122Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react",
            "redux",
            "hooks",
            "typescript",
            "antd",
            "vite",
            "react-router-v6"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "249931468",
        "archived": false,
        "color": "#f1e05a",
        "followers": 165,
        "has_funding_file": false,
        "hl_name": "sunft1996/ant-back",
        "hl_trunc_description": "🚀 <em>react</em>后台，后台<em>管</em><em>理</em>系统",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 249931468,
                "name": "ant-back",
                "owner_id": 35865208,
                "owner_login": "sunft1996",
                "updated_at": "2021-06-17T04:34:49.346Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react",
            "redux",
            "nodejs",
            "admin",
            "admin-ui",
            "antd",
            "admin-template",
            "ant-design",
            "react-admin",
            "ant-design-pro"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "98102724",
        "archived": false,
        "color": "#f1e05a",
        "followers": 155,
        "has_funding_file": false,
        "hl_name": "lanux/<em>react</em>-admin",
        "hl_trunc_description": "基于antd、redux-observable、redux-thunk、<em>react</em>-router响应式SPA脚手架，后台<em>管</em><em>理</em>系统demo. 权限<em>管</em><em>理</em>，用户<em>管</em><em>理</em>，菜单<em>管</em><em>理</em>。无限级菜单，下拉树形选择框 ",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 98102724,
                "name": "react-admin",
                "owner_id": 3981442,
                "owner_login": "lanux",
                "updated_at": "2017-12-11T03:18:35.950Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react",
            "antd",
            "react-router",
            "redux-observable",
            "react-redux",
            "redux-thunk"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "421430558",
        "archived": false,
        "color": "#3178c6",
        "followers": 243,
        "has_funding_file": false,
        "hl_name": "foca-js/foca",
        "hl_trunc_description": "流畅的<em>React</em>状态<em>管</em><em>理</em>库",
        "language": "TypeScript",
        "mirror": false,
        "owned_by_organization": true,
        "public": true,
        "repo": {
            "repository": {
                "id": 421430558,
                "name": "foca",
                "owner_id": 93202120,
                "owner_login": "foca-js",
                "updated_at": "2023-08-10T14:33:52.031Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "redux",
            "react-redux",
            "react-state-management",
            "redux-typescript",
            "redux-model",
            "redux-toolkit"
        ],
        "type": "Public",
        "help_wanted_issues_count": 1,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "104694487",
        "archived": false,
        "color": "#f1e05a",
        "followers": 570,
        "has_funding_file": false,
        "hl_name": "nelsonkuang/ant-admin",
        "hl_trunc_description": "基于 antd 的后台<em>管</em><em>理</em>平台, 在 <em>react</em> 中玩转 D3.js",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 104694487,
                "name": "ant-admin",
                "owner_id": 7983722,
                "owner_login": "nelsonkuang",
                "updated_at": "2023-01-27T04:26:57.135Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react",
            "d3",
            "admin",
            "admin-dashboard",
            "antd",
            "d3v4",
            "echarts",
            "react-admin"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "501067144",
        "archived": false,
        "color": "#3178c6",
        "followers": 1260,
        "has_funding_file": false,
        "hl_name": "HalseySpicy/Hooks-Admin",
        "hl_trunc_description": "🚀🚀🚀 Hooks Admin，基于 React18、<em>React</em>-Router V6、<em>React</em>-Hooks、Redux、TypeScript、Vite2、Ant-Design 开源的一套后台<em>管</em><em>理</em>框架。",
        "language": "TypeScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 501067144,
                "name": "Hooks-Admin",
                "owner_id": 51069636,
                "owner_login": "HalseySpicy",
                "updated_at": "2023-05-10T08:40:02.354Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react",
            "redux",
            "typescript",
            "react-router",
            "redux-saga",
            "react-redux",
            "redux-thunk",
            "axios",
            "redux-persist",
            "react-router-dom",
            "redux-promise",
            "antdesign",
            "vite",
            "react-hooks",
            "redux-toolkit"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "186525229",
        "archived": false,
        "color": "#f1e05a",
        "followers": 43,
        "has_funding_file": false,
        "hl_name": "zxfjd3g/190105_<em>React</em>Admin",
        "hl_trunc_description": "<em>React</em>的后台<em>管</em><em>理</em>应用",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 186525229,
                "name": "190105_ReactAdmin",
                "owner_id": 4495812,
                "owner_login": "zxfjd3g",
                "updated_at": "2023-01-03T21:47:18.765Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "202692077",
        "archived": false,
        "color": "#f1e05a",
        "followers": 187,
        "has_funding_file": false,
        "hl_name": "loveRandy/<em>react</em>-admin",
        "hl_trunc_description": "基于create-<em>react</em>-app@2X的<em>react</em>动态权限后台<em>管</em><em>理</em>系统模板",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 202692077,
                "name": "react-admin",
                "owner_id": 25706904,
                "owner_login": "loveRandy",
                "updated_at": "2023-01-04T07:21:29.711Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react",
            "redux",
            "react-dom",
            "create-react-app",
            "react-redux",
            "redux-thunk",
            "antd",
            "redux-actions"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "123888075",
        "archived": false,
        "color": "#f1e05a",
        "followers": 243,
        "has_funding_file": false,
        "hl_name": "Jines-z/rs-admin-cli",
        "hl_trunc_description": "<em>react</em> 后台<em>管</em><em>理</em>系统解决方案 ",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 123888075,
                "name": "rs-admin-cli",
                "owner_id": 22887299,
                "owner_login": "Jines-z",
                "updated_at": "2022-12-06T20:40:18.321Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    }
    ,
    {
        "id": "609888798",
        "archived": false,
        "color": "#3178c6",
        "followers": 1329,
        "has_funding_file": false,
        "hl_name": "lcomplete/huntly",
        "hl_trunc_description": "Huntly, information management tool, rss reader, automatic saving browsed contents include tweets, github stars management tool. 信息<em>管</em><em>理</em>工具、R…",
        "language": "TypeScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 609888798,
                "name": "huntly",
                "owner_id": 3435278,
                "owner_login": "lcomplete",
                "updated_at": "2023-07-26T19:27:37.481Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "github",
            "react",
            "rss",
            "twitter",
            "selfhosted",
            "pocket",
            "rssreader"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "63855721",
        "archived": true,
        "color": "#f1e05a",
        "followers": 204,
        "has_funding_file": true,
        "hl_name": "silenceper/dcmp",
        "hl_trunc_description": "基于etcd的配置<em>管</em><em>理</em>系统 (etcd v2)",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 63855721,
                "name": "dcmp",
                "owner_id": 2044558,
                "owner_login": "silenceper",
                "updated_at": "2019-05-25T05:12:30.859Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react",
            "etcd",
            "confd"
        ],
        "type": "Public archive",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "114828404",
        "archived": false,
        "color": "#f1e05a",
        "followers": 119,
        "has_funding_file": false,
        "hl_name": "fpass/fpass",
        "hl_trunc_description": "FPASS · 密码安全<em>管</em><em>理</em>工具",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": true,
        "public": true,
        "repo": {
            "repository": {
                "id": 114828404,
                "name": "fpass",
                "owner_id": 34677729,
                "owner_login": "fpass",
                "updated_at": "2018-12-28T13:29:42.322Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react",
            "bootstrap",
            "webpack",
            "password",
            "fpass",
            "prevent-attack"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "82528598",
        "archived": false,
        "color": "#f1e05a",
        "followers": 322,
        "has_funding_file": false,
        "hl_name": "xiubug/<em>react</em>-antd",
        "hl_trunc_description": "基于<em>react</em> + redux + immutable + less + ES6/7 + webpack2.0 + fetch + <em>react</em>-router + antd实现的SPA后台<em>管</em><em>理</em>系统模板",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 82528598,
                "name": "react-antd",
                "owner_id": 22269613,
                "owner_login": "xiubug",
                "updated_at": "2021-01-18T02:56:23.857Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react",
            "redux",
            "less",
            "admin",
            "immutable",
            "react-router",
            "es6",
            "react-redux",
            "webpack2",
            "es7",
            "ant-design"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "302702237",
        "archived": false,
        "color": "#3572A5",
        "followers": 717,
        "has_funding_file": false,
        "hl_name": "mtianyan/django-<em>react</em>-tyadmin",
        "hl_trunc_description": "支持Python3.9,Django4! 类似 xadmin 的基于Model 快速生成前后台<em>管</em><em>理</em>增删改查，筛选，搜索的后台<em>管</em><em>理</em>自动化工具。Antd 界面好看现代化！前后端分离！无损二次开发！由Django Restful Framework 和 Ant Design Pr…",
        "language": "Python",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 302702237,
                "name": "django-react-tyadmin",
                "owner_id": 15145231,
                "owner_login": "mtianyan",
                "updated_at": "2023-08-18T00:13:02.635Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react",
            "django",
            "admin",
            "generator",
            "django-rest-framework",
            "drf",
            "python3",
            "django-admin",
            "xadmin",
            "antdesign",
            "antd-design-pro",
            "nocode"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 2,
        "starred_by_current_user": false
    },
    {
        "id": "193417345",
        "archived": false,
        "color": "#f1e05a",
        "followers": 126,
        "has_funding_file": false,
        "hl_name": "chenjun1127/<em>react</em>-antd-admin",
        "hl_trunc_description": "一個简洁的 antd-<em>react</em>-admin 应用 -- <em>React</em> + Antd 后台<em>管</em><em>理</em>系统 ",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 193417345,
                "name": "react-antd-admin",
                "owner_id": 16220103,
                "owner_login": "chenjun1127",
                "updated_at": "2021-05-24T03:55:39.922Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react-router",
            "react-admin",
            "react-admin-dashboard",
            "react-antd-admin"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "295904929",
        "archived": false,
        "color": "#f1e05a",
        "followers": 17,
        "has_funding_file": false,
        "hl_name": "CodingChaozhang/<em>react</em>_management_template",
        "hl_trunc_description": "<em>react</em>后台<em>管</em><em>理</em>系统",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 295904929,
                "name": "react_management_template",
                "owner_id": 37391201,
                "owner_login": "CodingChaozhang",
                "updated_at": "2020-10-13T11:49:57.248Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "117216835",
        "archived": false,
        "color": "#3178c6",
        "followers": 432,
        "has_funding_file": false,
        "hl_name": "javaLuo/<em>react</em>-admin",
        "hl_trunc_description": "动态菜单配置、权限精确到按钮、通用模块；标准后台<em>管</em><em>理</em>系统解决方案",
        "language": "TypeScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 117216835,
                "name": "react-admin",
                "owner_id": 7686097,
                "owner_login": "javaLuo",
                "updated_at": "2023-05-22T14:37:03.767Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react",
            "redux",
            "hooks",
            "typescript",
            "rematch",
            "vite",
            "antd4"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "81046830",
        "archived": false,
        "color": "#f1e05a",
        "followers": 96,
        "has_funding_file": false,
        "hl_name": "mqyqingfeng/<em>react</em>-admin",
        "hl_trunc_description": "基于<em>React</em> + ant-design的用作后台<em>管</em><em>理</em>项目的脚手架",
        "language": "JavaScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 81046830,
                "name": "react-admin",
                "owner_id": 11458263,
                "owner_login": "mqyqingfeng",
                "updated_at": "2017-03-23T06:22:35.706Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "redux",
            "react",
            "ant-design",
            "javascript",
            "starter-template",
            "starter-kit"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "122052913",
        "archived": false,
        "color": "#3178c6",
        "followers": 93,
        "has_funding_file": false,
        "hl_name": "ronffy/dva-ts-<em>react</em>-antd",
        "hl_trunc_description": "🌱 基于Dva和TypeScript的后台<em>管</em><em>理</em>系统框架",
        "language": "TypeScript",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 122052913,
                "name": "dva-ts-react-antd",
                "owner_id": 13896347,
                "owner_login": "ronffy",
                "updated_at": "2023-01-24T06:19:01.164Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "react",
            "typescript",
            "redux-saga",
            "antd",
            "roadhog",
            "dvajs"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    }

    ,

    {
        "id": "100279235",
        "archived": false,
        "color": "#178600",
        "followers": 746,
        "has_funding_file": false,
        "hl_name": "Jimmey-Jiang/ABP-ASP.<em>NET</em>-Boilerplate-Project-CMS",
        "hl_trunc_description": "ABP module-zero +AdminLTE+Bootstrap Table+jQuery+Redis + sql server+quartz+hangfire权限<em>管</em><em>理</em>系统",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 100279235,
                "name": "ABP-ASP.NET-Boilerplate-Project-CMS",
                "owner_id": 28785691,
                "owner_login": "Jimmey-Jiang",
                "updated_at": "2023-03-03T05:42:12.236Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "jquery",
            "redis",
            "adminlte",
            "mvc",
            "log4j",
            "swagger",
            "sweetalert",
            "entity-framework",
            "quartz",
            "bootstrap-table",
            "entityframework",
            "signalr",
            "log4net",
            "hangfire",
            "webapi",
            "abp",
            "automapper",
            "spinjs",
            "aspnet-boilerplate-project",
            "module-zero"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "96668544",
        "archived": false,
        "color": "#178600",
        "followers": 127,
        "has_funding_file": false,
        "hl_name": "mamingbo/Only.Jobs",
        "hl_trunc_description": "Quartz.<em>net</em>的调度<em>管</em><em>理</em>,Job任务放置数据库中,通过<em>管</em><em>理</em>后台进行调度<em>管</em><em>理</em>",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 96668544,
                "name": "Only.Jobs",
                "owner_id": 5997987,
                "owner_login": "mamingbo",
                "updated_at": "2017-11-30T07:48:44.413Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "113161765",
        "archived": false,
        "color": "#178600",
        "followers": 70,
        "has_funding_file": false,
        "hl_name": "wang371758198/NFine.Framework.Core",
        "hl_trunc_description": "asp.<em>net</em> core <em>管</em><em>理</em>系统框架",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 113161765,
                "name": "NFine.Framework.Core",
                "owner_id": 12881762,
                "owner_login": "wang371758198",
                "updated_at": "2020-09-28T04:48:31.085Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "200203708",
        "archived": false,
        "color": "#178600",
        "followers": 149,
        "has_funding_file": false,
        "hl_name": "chi8708/NBCZ_Admin_<em>Net</em>Core",
        "hl_trunc_description": "Asp.<em>Net</em> Core + Dapper + Vue + IView 前后端分离通用权限<em>管</em><em>理</em>系统、后台框架、信息<em>管</em><em>理</em>系统基础框架",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 200203708,
                "name": "NBCZ_Admin_NetCore",
                "owner_id": 9424649,
                "owner_login": "chi8708",
                "updated_at": "2023-06-06T14:16:09.984Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "vue",
            "asp-net-core",
            "dapper",
            "iview",
            "3layer"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "133752410",
        "archived": false,
        "color": "#178600",
        "followers": 200,
        "has_funding_file": false,
        "hl_name": "chi8708/NBCZ_Admin",
        "hl_trunc_description": "asp.<em>net</em> MVC5 + Dapper + layUI/easyUI 通用权限<em>管</em><em>理</em>系统、后台框架、信息<em>管</em><em>理</em>系统基础框架",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 133752410,
                "name": "NBCZ_Admin",
                "owner_id": 9424649,
                "owner_login": "chi8708",
                "updated_at": "2023-08-12T11:47:21.449Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "dapper",
            "asp-net-mvc",
            "layui",
            "3layer"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "401029051",
        "archived": false,
        "color": "#178600",
        "followers": 617,
        "has_funding_file": false,
        "hl_name": "mai1zhi2/SharpBeacon",
        "hl_trunc_description": "CobaltStrike Beacon written in .<em>Net</em> 4 用.<em>net</em>重写了stager及Beacon，其中包括正常上线、文件<em>管</em><em>理</em>、进程<em>管</em><em>理</em>、令牌<em>管</em><em>理</em>、结合SysCall进行注入、原生端口转发、关ETW等一系列功能",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 401029051,
                "name": "SharpBeacon",
                "owner_id": 43717272,
                "owner_login": "mai1zhi2",
                "updated_at": "2021-09-01T02:27:01.552Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "79874945",
        "archived": false,
        "color": "#178600",
        "followers": 127,
        "has_funding_file": false,
        "hl_name": "grissomlau/Grissom.CMS",
        "hl_trunc_description": "基于.<em>NET</em>平台的后台内容<em>管</em><em>理</em>系统",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 79874945,
                "name": "Grissom.CMS",
                "owner_id": 4479670,
                "owner_login": "grissomlau",
                "updated_at": "2018-08-08T01:45:02.497Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "98393967",
        "archived": false,
        "color": "#178600",
        "followers": 27,
        "has_funding_file": false,
        "hl_name": "330556994/MVC5-EF6-EasyUI-Manager",
        "hl_trunc_description": "ASP.<em>NET</em> MVC5+EF6后台<em>管</em><em>理</em>系统",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 98393967,
                "name": "MVC5-EF6-EasyUI-Manager",
                "owner_id": 24952656,
                "owner_login": "330556994",
                "updated_at": "2017-07-26T07:44:07.688Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "166682695",
        "archived": false,
        "color": "#178600",
        "followers": 50,
        "has_funding_file": false,
        "hl_name": "MrChuJiu/BasisSoa",
        "hl_trunc_description": ".<em>net</em> Core后台<em>管</em><em>理</em>系统",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 166682695,
                "name": "BasisSoa",
                "owner_id": 31230864,
                "owner_login": "MrChuJiu",
                "updated_at": "2019-03-06T02:21:53.308Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "249702505",
        "archived": false,
        "color": "#178600",
        "followers": 257,
        "has_funding_file": false,
        "hl_name": "StarEliteCore/Nebula.Admin",
        "hl_trunc_description": "Destiny.Core.Flow是基于.<em>Net</em> Core，VUE前后分离，开发的一个开源Admin<em>管</em><em>理</em>框架目前有以下模块：菜单<em>管</em><em>理</em>、用户<em>管</em><em>理</em>、角色<em>管</em><em>理</em>、用户角色、角色权限等功能。",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": true,
        "public": true,
        "repo": {
            "repository": {
                "id": 249702505,
                "name": "Nebula.Admin",
                "owner_id": 66321866,
                "owner_login": "StarEliteCore",
                "updated_at": "2021-08-25T14:56:06.716Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "redis",
            "identity",
            "mongodb",
            "vue",
            "dotnetcore",
            "efcore",
            "identityserver4",
            "ef-core",
            "automapper"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    }
    ,

    {
        "id": "98393967",
        "archived": false,
        "color": "#178600",
        "followers": 27,
        "has_funding_file": false,
        "hl_name": "330556994/MVC5-EF6-EasyUI-Manager",
        "hl_trunc_description": "ASP.<em>NET</em> MVC5+EF6后台<em>管</em><em>理</em>系统",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 98393967,
                "name": "MVC5-EF6-EasyUI-Manager",
                "owner_id": 24952656,
                "owner_login": "330556994",
                "updated_at": "2017-07-26T07:44:07.688Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "249702505",
        "archived": false,
        "color": "#178600",
        "followers": 257,
        "has_funding_file": false,
        "hl_name": "StarEliteCore/Nebula.Admin",
        "hl_trunc_description": "Destiny.Core.Flow是基于.<em>Net</em> Core，VUE前后分离，开发的一个开源Admin<em>管</em><em>理</em>框架目前有以下模块：菜单<em>管</em><em>理</em>、用户<em>管</em><em>理</em>、角色<em>管</em><em>理</em>、用户角色、角色权限等功能。",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": true,
        "public": true,
        "repo": {
            "repository": {
                "id": 249702505,
                "name": "Nebula.Admin",
                "owner_id": 66321866,
                "owner_login": "StarEliteCore",
                "updated_at": "2021-08-25T14:56:06.716Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "redis",
            "identity",
            "mongodb",
            "vue",
            "dotnetcore",
            "efcore",
            "identityserver4",
            "ef-core",
            "automapper"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "130055680",
        "archived": false,
        "color": "#178600",
        "followers": 132,
        "has_funding_file": false,
        "hl_name": "wwlsky/WinRemoteDesktop",
        "hl_trunc_description": "C# .<em>Net</em> Framework 4.0 开发的一款简易远程桌面<em>管</em><em>理</em>工具",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 130055680,
                "name": "WinRemoteDesktop",
                "owner_id": 4638232,
                "owner_login": "wwlsky",
                "updated_at": "2019-06-10T02:42:41.074Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "92522529",
        "archived": false,
        "color": "#178600",
        "followers": 83,
        "has_funding_file": false,
        "hl_name": "ygsama/BooK-Library-System",
        "hl_trunc_description": "用C#(ADO.<em>NET</em>)实现的一个简单的图书<em>管</em><em>理</em>系统",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 92522529,
                "name": "BooK-Library-System",
                "owner_id": 28083474,
                "owner_login": "ygsama",
                "updated_at": "2020-07-02T09:38:32.130Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "247037888",
        "archived": false,
        "color": "#178600",
        "followers": 57,
        "has_funding_file": false,
        "hl_name": "Mcdull0921/<em>Net</em>Task",
        "hl_trunc_description": "NetTask是一款基于.<em>net</em> core3.0开发的的通用任务<em>管</em><em>理</em>系统，将任务逻辑和任务调度彻底分离，并可通过Web界面远程监控和<em>管</em><em>理</em>任务。",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 247037888,
                "name": "NetTask",
                "owner_id": 14017075,
                "owner_login": "Mcdull0921",
                "updated_at": "2023-02-24T16:31:17.572Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "172864776",
        "archived": false,
        "color": "#178600",
        "followers": 94,
        "has_funding_file": false,
        "hl_name": "yilezhu/AbpQuzatzDemo",
        "hl_trunc_description": "用abp vNext快速开发Quartz.<em>NET</em>定时任务<em>管</em><em>理</em>界面",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 172864776,
                "name": "AbpQuzatzDemo",
                "owner_id": 18655233,
                "owner_login": "yilezhu",
                "updated_at": "2019-03-20T07:55:33.503Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "185001468",
        "archived": false,
        "color": "#178600",
        "followers": 54,
        "has_funding_file": false,
        "hl_name": "gnsilence/Id4Admin",
        "hl_trunc_description": "Identityserver4和Asp.<em>net</em> core Identity身份<em>管</em><em>理</em>系统",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 185001468,
                "name": "Id4Admin",
                "owner_id": 18021366,
                "owner_login": "gnsilence",
                "updated_at": "2022-12-09T01:07:08.878Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "144379807",
        "archived": false,
        "color": "#178600",
        "followers": 283,
        "has_funding_file": false,
        "hl_name": "aprilyush/EasyCMS",
        "hl_trunc_description": "EasyCms基于Asp.<em>net</em> Core 的后台快速开发框架,内容<em>管</em><em>理</em>系统",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 144379807,
                "name": "EasyCMS",
                "owner_id": 20622429,
                "owner_login": "aprilyush",
                "updated_at": "2023-05-22T03:57:23.610Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "cms",
            "easycms",
            "freesql"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "390977835",
        "archived": false,
        "color": "#178600",
        "followers": 81,
        "has_funding_file": false,
        "hl_name": "oncemi/OnceMi.Framework",
        "hl_trunc_description": "基于.<em>NET</em> 7和Vue 2开发的企业级前后端分离权限<em>管</em><em>理</em>开发框架（后台<em>管</em><em>理</em>系统），具有组织<em>管</em><em>理</em>、角色<em>管</em><em>理</em>、用户<em>管</em><em>理</em>、菜单<em>管</em><em>理</em>、授权<em>管</em><em>理</em>、计划任务、文件<em>管</em><em>理</em>等功能。支持国内外多种流行数据库，支持IdentityServer4认证中心。",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 390977835,
                "name": "OnceMi.Framework",
                "owner_id": 73805727,
                "owner_login": "oncemi",
                "updated_at": "2022-11-11T10:04:32.912Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "admin",
            "swagger",
            "vue-admin"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "331228372",
        "archived": false,
        "color": "#178600",
        "followers": 65,
        "has_funding_file": false,
        "hl_name": "246850/Calamus.TaskScheduler",
        "hl_trunc_description": "基于Asp.<em>Net</em> Core 5.0采用Quartz.<em>Net</em>编写的开源任务调度Web<em>管</em><em>理</em>平台",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 331228372,
                "name": "Calamus.TaskScheduler",
                "owner_id": 34532304,
                "owner_login": "246850",
                "updated_at": "2021-08-22T14:53:17.092Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "taskscheduler",
            "calamus",
            "quartznetcore",
            "quartznetui",
            "quartznetweb",
            "quartznet-docker"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    }
    ,

    {
        "id": "148088324",
        "archived": false,
        "color": "#178600",
        "followers": 199,
        "has_funding_file": false,
        "hl_name": "comsmobiler/SmoWMS",
        "hl_trunc_description": "仓库<em>管</em><em>理</em>系统，移动端APP开源项目，支持Android、iOS，基于.<em>NET</em>（C#、VB）。SmoWMS仓库<em>管</em><em>理</em>系统包含了仓库<em>管</em><em>理</em>、订单、主数据维护、图表分析、个人信息等几大功能。 SmoWMS is Warehouse Management solution for AP…",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": true,
        "public": true,
        "repo": {
            "repository": {
                "id": 148088324,
                "name": "SmoWMS",
                "owner_id": 16322117,
                "owner_login": "comsmobiler",
                "updated_at": "2020-04-29T03:54:26.891Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "428954119",
        "archived": false,
        "color": "#178600",
        "followers": 520,
        "has_funding_file": false,
        "hl_name": "xianhc/apevolo-api",
        "hl_trunc_description": ".<em>Net</em> 6.0 、SqlSugar、Vue、RBAC、前后端分离的开箱即用的企业级中后台<em>管</em><em>理</em>系统",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 428954119,
                "name": "apevolo-api",
                "owner_id": 74546530,
                "owner_login": "xianhc",
                "updated_at": "2023-08-08T02:55:08.529Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "mysql",
            "redis",
            "cors",
            "jwt",
            "authentication",
            "dependency-injection",
            "authorization",
            "netcore",
            "swagger-ui",
            "aop",
            "async-await",
            "log4net",
            "autofac",
            "miniprofiler",
            "automapper",
            "quartz-net",
            "sqlsugarcore",
            "rbac-roles"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "238347801",
        "archived": false,
        "color": "#178600",
        "followers": 79,
        "has_funding_file": false,
        "hl_name": "aishang2015/Convenience",
        "hl_trunc_description": " .<em>NET</em> Core 5/Angular11/NG-ZORRO 权限<em>管</em><em>理</em>系统 工作流系统",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 238347801,
                "name": "Convenience",
                "owner_id": 16433645,
                "owner_login": "aishang2015",
                "updated_at": "2023-03-03T23:36:16.119Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "identity",
            "dotnet",
            "angular2",
            "workflows",
            "zorro",
            "ng-zorro",
            "netcore3",
            "net5"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "124056919",
        "archived": false,
        "color": "#178600",
        "followers": 721,
        "has_funding_file": false,
        "hl_name": "q315523275/FamilyBucket",
        "hl_trunc_description": "集合.<em>net</em> core、ocelot、consul、netty、rpc、eventbus、configserver、tracing、sqlsugar、vue-admin、基础<em>管</em><em>理</em>平台等构建的微服务一条龙应用",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 124056919,
                "name": "FamilyBucket",
                "owner_id": 20898868,
                "owner_login": "q315523275",
                "updated_at": "2022-12-08T06:37:10.048Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "elasticsearch",
            "consul",
            "grpc",
            "eventbus",
            "tracing",
            "configserver",
            "ocelot",
            "rabbit-mq",
            "netcore2",
            "sqlsugar"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "191516841",
        "archived": false,
        "color": "#178600",
        "followers": 21,
        "has_funding_file": false,
        "hl_name": "Caijt/ItSysAsp<em>Net</em>Core",
        "hl_trunc_description": "IT部门信息<em>管</em><em>理</em>系统后端代码",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 191516841,
                "name": "ItSysAspNetCore",
                "owner_id": 15088550,
                "owner_login": "Caijt",
                "updated_at": "2020-12-19T04:52:24.662Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "175177863",
        "archived": false,
        "color": "#178600",
        "followers": 10,
        "has_funding_file": false,
        "hl_name": "Run2948/Fonour",
        "hl_trunc_description": "Asp.<em>Net</em> Core 权限<em>管</em><em>理</em>系统",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 175177863,
                "name": "Fonour",
                "owner_id": 24992312,
                "owner_login": "Run2948",
                "updated_at": "2022-04-20T12:47:48.873Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "400090057",
        "archived": false,
        "color": "#178600",
        "followers": 270,
        "has_funding_file": false,
        "hl_name": "izhaorui/Zr.Admin.<em>NET</em>",
        "hl_trunc_description": "🎉ZR.Admin.<em>NET</em>是一款前后端分离的、跨平台基于RBAC的通用权限<em>管</em><em>理</em>后台。ORM采用SqlSugar。前端采用Vue、AntDesign，支持多租户、缓存、任务调度、支持统一异常处<em>理</em>、接口限流、支持一键生成前后端代码，支持动态国际化翻译(Vue3)，等诸多黑科技，…",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 400090057,
                "name": "Zr.Admin.NET",
                "owner_id": 16451400,
                "owner_login": "izhaorui",
                "updated_at": "2023-08-07T12:22:42.405Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "admin",
            "uniapp",
            "quartz-net",
            "sqlsugar",
            "net7"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "305668190",
        "archived": false,
        "color": "#178600",
        "followers": 23,
        "has_funding_file": false,
        "hl_name": "zhrong92/JobManage",
        "hl_trunc_description": "基于Quartz.<em>Net</em>、.<em>Net</em> Core的定时任务<em>管</em><em>理</em>平台",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 305668190,
                "name": "JobManage",
                "owner_id": 21069935,
                "owner_login": "zhrong92",
                "updated_at": "2020-11-06T01:22:24.427Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "125010692",
        "archived": false,
        "color": "#178600",
        "followers": 62,
        "has_funding_file": false,
        "hl_name": "chenyinxin/cookiecutter-bitadmin-core",
        "hl_trunc_description": "BitAdminCore是基于<em>net</em> core的<em>管</em><em>理</em>应用快速开发框架，QQ群：202426919",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 125010692,
                "name": "cookiecutter-bitadmin-core",
                "owner_id": 9876836,
                "owner_login": "chenyinxin",
                "updated_at": "2022-12-08T01:09:27.332Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    },
    {
        "id": "102051320",
        "archived": false,
        "color": "#178600",
        "followers": 85,
        "has_funding_file": false,
        "hl_name": "tengge1/DTcms",
        "hl_trunc_description": "动力启航网站<em>管</em><em>理</em>系统（简称DTcms），是目前国内ASP.<em>NET</em>开源界少见的优秀开源<em>管</em><em>理</em>系统，基于 ASP.<em>NET</em>(C#)+ MSSQL(ACCESS) 的技术开发，全部100%免费开放源代码。",
        "language": "C#",
        "mirror": false,
        "owned_by_organization": false,
        "public": true,
        "repo": {
            "repository": {
                "id": 102051320,
                "name": "DTcms",
                "owner_id": 10705556,
                "owner_login": "tengge1",
                "updated_at": "2017-08-31T22:42:15.603Z",
                "has_issues": true
            }
        },
        "sponsorable": false,
        "topics": [
            "cms",
            "web",
            "asp-net",
            "sqlserver",
            "dtcms"
        ],
        "type": "Public",
        "help_wanted_issues_count": 0,
        "good_first_issue_issues_count": 0,
        "starred_by_current_user": false
    }

];