import Mock from "mockjs";
// import mat from "./mat.json";
// import home_table1_1 from "./home_table1_1.json";
// import floors from "./floors.json";



// 首页接口数据
Mock.mock("/conditon/mate", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MATE_MX": [
            "普通光缆",
            "电缆挂钩",
            "单扁钢光缆预留架",
            "镀锌铁线",
            "特种光缆",
            "U型钢卡",
            "光缆保护管"
        ]
    },
    "information": ""
  }
})
// 首页接口数据
Mock.mock("home/1", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "REGION": [
            "恩施大区",
            "鄂东南大区",
            "鄂西北大区",
            "鄂西南大区"
        ],
        "KL": [
            3373.11,
            2664.91,
            1886.55,
            1972.37
        ],
        "AVG_KL": [
            2474.24,
            2474.24,
            2474.24,
            2474.24
        ]
    },
    "information": ""
  }
})
// 首页接口数据
Mock.mock("/home/2", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "REGION": [
            "恩施大区",
            "鄂东南大区",
            "鄂西北大区",
            "鄂西南大区"
        ],
        "QT_ONHAND_QTY": [
            15859.9782,
            44079.20865,
            48463.0777,
            34080.604
        ]
    },
    "information": ""
}
})
// 首页接口数据
Mock.mock("/home/3", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "REGION": [
            "恩施大区",
            "鄂东南大区",
            "鄂西北大区",
            "鄂西南大区"
        ],
        "EXEC_RATE": [
            19558.420000000002,
            1088.6599999999999,
            1610.06,
            1845.61
        ],
        "TURNOVER_RATE": [
            1556.2900000000002,
            1274.34,
            798.15,
            1267.29
        ]
    },
    "information": ""
}
})
// 首页接口数据
Mock.mock("/home/4", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MAT_YEAR": [
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2022,
            2022,
            2022,
            2022
        ],
        "MAT_MONTH": [
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            1,
            2,
            3,
            4
        ],
        "KL": [
            13295.66,
            10541.08,
            14258.81,
            1296.48,
            1320.61,
            1306.93,
            1274.34,
            607.02,
            604.02,
            601.94,
            628.3,
            492.33,
            484.09,
            511.98
        ]
    },
    "information": ""
}
})
// 首页接口数据
Mock.mock("/home/5", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "REGION": [
            "鄂西南大区",
            "鄂西北大区",
            "鄂东南大区",
            "恩施大区"
        ],
        "QT_ONHAND_QTY": [
            40.76,
            0.53,
            1.35,
            1
        ],
        "REMAIN_XQ": [
            0,
            0,
            0,
            0
        ],
        "ABSOLUTE_DIFF": [
            40.76,
            0.53,
            1.35,
            1
        ]
    },
    "information": ""
}
})
// 首页接口数据
Mock.mock("/home/6", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MAT_YEAR": [
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2022,
            2022,
            2022,
            2022
        ],
        "MAT_MONTH": [
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            12,
            1,
            2,
            3,
            4
        ],
        "RESB_TIME_AVG": [
            1.89,
            3.55,
            3.04,
            2.72,
            2.84,
            4.28,
            8.17,
            5,
            1.59,
            1.98,
            1.5,
            2.83,
            1.88
        ]
    },
    "information": ""
}
})
// 首页接口数据
Mock.mock("/home/7", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "SUPPLIERCODE": [
            "MDM_100002297",
            "MDM_102250",
            "MDM_104017871",
            "MDM_104017960",
            "MDM_106110768",
            "MDM_106110773",
            "MDM_106110791",
            "MDM_106110802",
            "MDM_106200202",
            "MDM_106200298",
            "MDM_106200303",
            "MDM_106202258",
            "MDM_106210218",
            "MDM_106212959"
        ],
        "SUPPLIERNAME": [
            "江苏亨通光电股份有限公司",
            "江苏中天科技股份有限公司",
            "宏安集团有限公司",
            "天津富通信息科技股份有限公司",
            "江苏中利集团股份有限公司",
            "烽火通信科技股份有限公司",
            "南京华脉科技股份有限公司",
            "江苏永鼎股份有限公司",
            "江苏南方通信科技有限公司",
            "杭州富通通信技术股份有限公司",
            "长飞光纤光缆股份有限公司",
            "南京华信藤仓光通信有限公司",
            "通鼎互联信息股份有限公司",
            "西安西古光通信有限公司"
        ],
        "RESB_TIME_AVG": [
            3.08,
            0.27,
            1.31,
            3.74,
            3.81,
            1.26,
            0.32,
            0.67,
            3.99,
            3.2,
            4.73,
            6.41,
            0.43,
            3.44
        ]
    },
    "information": ""
}
})
// 首页接口数据
Mock.mock("/home/8", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "SUPPLIERCODE": [
            "MDM_100002297",
            "MDM_102250",
            "MDM_104017871",
            "MDM_104017960",
            "MDM_106110768",
            "MDM_106110773",
            "MDM_106110791",
            "MDM_106110802",
            "MDM_106200202",
            "MDM_106200298",
            "MDM_106200303",
            "MDM_106202258",
            "MDM_106210218",
            "MDM_106212959"
        ],
        "SUPPLIERNAME": [
            "江苏亨通光电股份有限公司",
            "江苏中天科技股份有限公司",
            "宏安集团有限公司",
            "天津富通信息科技股份有限公司",
            "江苏中利集团股份有限公司",
            "烽火通信科技股份有限公司",
            "南京华脉科技股份有限公司",
            "江苏永鼎股份有限公司",
            "江苏南方通信科技有限公司",
            "杭州富通通信技术股份有限公司",
            "长飞光纤光缆股份有限公司",
            "南京华信藤仓光通信有限公司",
            "通鼎互联信息股份有限公司",
            "西安西古光通信有限公司"
        ],
        "DEL_FREQUENCY": [
            163,
            98,
            37,
            94,
            70,
            117,
            42,
            11,
            208,
            122,
            218,
            75,
            30,
            32
        ],
        "ON_TIME_FREQUENCY": [
            30,
            28,
            6,
            12,
            12,
            38,
            18,
            6,
            23,
            24,
            22,
            8,
            9,
            11
        ],
        "ON_TIME_RATE": [
            18.4,
            28.57,
            16.220000000000002,
            12.770000000000001,
            17.14,
            32.48,
            42.86,
            54.55,
            11.06,
            19.67,
            10.09,
            10.67,
            30,
            34.38
        ]
    },
    "information": ""
}
})
// 首页接口数据
Mock.mock("/home/center/stock", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "QT_ONHAND_QTY": 770.18,
        "MATE_UNIT": "皮长公里",
        "KC_LEVEL": "严重不足"
    },
    "information": ""
}
})
// 首页接口数据
Mock.mock("/home/center/stock-age", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "KL_AVG": 2428.72,
        "KL_GRADE": "严重超期"
    },
    "information": ""
}
})
// 首页接口数据
Mock.mock("/home/center/response", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "RESB_TIME_AVG": 3.1,
        "RESB_GRADE": "很及时"
    },
    "information": ""
}
})
// 首页接口数据
Mock.mock("/home/center/deliver", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "ON_TIME_RATE": 19,
        "ON_TIME_GRADE": "严重不及时"
    },
    "information": ""
}
})

// 库存接口数据
Mock.mock("/inventory/1", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "AREANAME": [
            "十堰",
            "荆门",
            "襄阳",
            "随州"
        ],
        "QT_ONHAND_QTY": [
            226.67,
            502.34,
            2518.96,
            246.06
        ],
        "QT_ONHAND_RATE": [
            0.47000000000000003,
            1.04,
            5.2,
            0.51
        ]
    },
    "information": ""
}
})
// 库存接口数据
Mock.mock("/inventory/4", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MATERIALCODE": [
            "10170109",
            "10170115",
            "10170127",
            "10170175",
            "10170151",
            "10170105",
            "10170245",
            "10170139",
            "10041639",
            "10085963",
            "10083011",
            "10041641",
            "10175970",
            "10177742",
            "10479056",
            "10041808",
            "10041638",
            "10081573"
        ],
        "MATERIALNAME": [
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆\\GYTS\\G.652D\\24芯",
            "普通光缆|GYTS|G.652D|48芯",
            "普通光缆\\GYTS\\G.652D\\144芯",
            "普通光缆\\GYTS\\G.652D\\96芯",
            "普通光缆\\GYTS\\G.652D\\4芯",
            "普通光缆\\GYTS\\G.652D\\288芯",
            "普通光缆\\GYTS\\G.652D\\72芯",
            "普通光缆|GYTS|G.652D|48芯|长飞",
            "普通光缆|GYTS|G.652D|4芯|亨通",
            "普通光缆|GYTA|G.652D|144芯|长飞",
            "普通光缆|GYTS|G.652D|96芯|长飞",
            "普通光缆\\混缆\\GYTA\\G.652\\24芯\\G.655\\12芯",
            "普通光缆\\混缆\\GYTA53\\G.652\\36芯\\G.655\\12芯",
            "普通光缆\\GYTA53\\G.652+G.655\\32+16芯",
            "普通光缆|GYTA|G.652D|24芯|长飞",
            "普通光缆|GYTS|G.652D|24芯|长飞",
            "普通光缆|GYTS|G.652D|16芯|长飞"
        ],
        "QT_ONHAND_QTY": [
            20901.485,
            14015.338,
            7736.329,
            2220.014,
            1325.5297,
            1048.82,
            503,
            252.7,
            132.72,
            126,
            44.82,
            43.44199999999999,
            42,
            30,
            21,
            11.200000000000001,
            7.42,
            1.26
        ],
        "RATE": [
            43.13,
            28.92,
            15.959999999999999,
            4.58,
            2.74,
            2.16,
            1.04,
            0.52,
            0.27,
            0.26,
            0.09,
            0.09,
            0.09,
            0.06,
            0.04,
            0.02,
            0.02,
            0
        ]
    },
    "information": ""
}
})
// 库存接口数据
Mock.mock("/inventory/2", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MAT_YEAR": [
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2022,
            2022
        ],
        "MAT_MONTH": [
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            1,
            2
        ],
        "QT_ONHAND_QTY": [
            106,
            157,
            330,
            549,
            318,
            235,
            242,
            80,
            74,
            321,
            126,
            182
        ]
    },
    "information": ""
}
})
// 库存接口数据
Mock.mock("/inventory/5", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MAT_YEAR": [
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2022,
            2022,
            2022,
            2022
        ],
        "MAT_MONTH": [
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            1,
            2,
            3,
            4
        ],
        "QT_ONHAND_QTY": [
            2123,
            1588.36,
            1729.23,
            1448.8899999999999,
            1394.882,
            1239.5320000000002,
            1454.462,
            1069.62,
            737,
            1137.12,
            810.12,
            1460.47,
            2170.41,
            2538.389
        ]
    },
    "information": ""
}
})
// 库存接口数据
Mock.mock("/inventory/3", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MATERIALCODE": [
            "10170109",
            "10170127",
            "10170151",
            "10170175"
        ],
        "MATERIALNAME": [
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆|GYTS|G.652D|48芯",
            "普通光缆\\GYTS\\G.652D\\96芯",
            "普通光缆\\GYTS\\G.652D\\144芯"
        ],
        "MATE_UNIT": [
            "皮长公里",
            "皮长公里",
            "皮长公里",
            "皮长公里"
        ],
        "QT_ONHAND_QTY": [
            42,
            34,
            15,
            15
        ]
    },
    "information": ""
}
})
// 库存接口数据
Mock.mock("/inventory/6", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "AREANAME": [
            "十堰",
            "荆门",
            "襄阳",
            "随州"
        ],
        "QT_ONHAND_QTY": [
            42,
            391,
            1050,
            640
        ],
        "RATE": [
            1.9800000000000002,
            18.42,
            49.46,
            30.15
        ]
    },
    "information": ""
}
})

// 库龄接口数据
Mock.mock("/stock-age/1", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "AREANAME": [
            "十堰",
            "荆门",
            "襄阳",
            "随州"
        ],
        "KL": [
            349.35,
            1224.49,
            2680.51,
            616.4
        ]
    },
    "information": ""
}
})
// 库龄接口数据
Mock.mock("/stock-age/4", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MATERIALNAME": [
            "普通光缆\\GYTA53\\G.652+G.655\\32+16芯",
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆\\GYTS\\G.652D\\144芯",
            "普通光缆\\GYTS\\G.652D\\24芯",
            "普通光缆\\GYTS\\G.652D\\288芯",
            "普通光缆\\GYTS\\G.652D\\4芯",
            "普通光缆\\GYTS\\G.652D\\72芯",
            "普通光缆\\GYTS\\G.652D\\96芯",
            "普通光缆\\混缆\\GYTA53\\G.652\\36芯\\G.655\\12芯",
            "普通光缆\\混缆\\GYTA\\G.652\\24芯\\G.655\\12芯",
            "普通光缆|GYTA|G.652D|144芯|长飞",
            "普通光缆|GYTA|G.652D|24芯|长飞",
            "普通光缆|GYTS|G.652D|16芯|长飞",
            "普通光缆|GYTS|G.652D|24芯|长飞",
            "普通光缆|GYTS|G.652D|48芯",
            "普通光缆|GYTS|G.652D|48芯|长飞",
            "普通光缆|GYTS|G.652D|4芯|亨通",
            "普通光缆|GYTS|G.652D|96芯|长飞"
        ],
        "KL": [
            13,
            480.16,
            1114.39,
            652.37,
            405.77,
            6805.8,
            1261.61,
            1061.4,
            978.64,
            1390.14,
            5112.09,
            1265.64,
            1185.14,
            1445.14,
            1071.91,
            4391.86,
            10872.79,
            4442.52
        ]
    },
    "information": ""
}
})
// 库龄接口数据
Mock.mock("/stock-age/2", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MAT_YEAR": [
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2022,
            2022
        ],
        "MAT_MONTH": [
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            1,
            2
        ],
        "KL": [
            516.25,
            499,
            478.81,
            414.6,
            398.2,
            388.22,
            322.86,
            322.54,
            293,
            275.25,
            275.25,
            8.25
        ]
    },
    "information": ""
}
})
// 库龄接口数据
Mock.mock("/stock-age/5", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MAT_YEAR": [
            2022
        ],
        "MAT_MONTH": [
            4
        ],
        "KL": [
            13
        ]
    },
    "information": ""
}
})
// 库龄接口数据
Mock.mock("/stock-age/3", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MATERIALNAME": [
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆|GYTS|G.652D|48芯",
            "普通光缆\\GYTS\\G.652D\\96芯",
            "普通光缆\\GYTS\\G.652D\\144芯"
        ],
        "KL": [
            515,
            514,
            518,
            518
        ]
    },
    "information": ""
}
})
// 库龄接口数据
Mock.mock("/stock-age/6", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return{
    "state": "success",
    "result": {
        "AREANAME": [
            "襄阳"
        ],
        "KL": [
            13
        ]
    },
    "information": ""
}
})


// 响应及时性接口数据
Mock.mock("response/1", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MAT_YEAR": [
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2022,
            2022,
            2022,
            2022
        ],
        "MAT_MONTH": [
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            12,
            1,
            2,
            3,
            4
        ],
        "RESB_FREQUENCY": [
            28,
            83,
            27,
            40,
            19,
            60,
            48,
            1,
            68,
            62,
            36,
            64,
            42
        ],
        "RESB_TIME_AVG": [
            2.05,
            4.07,
            4.48,
            4.26,
            2.52,
            3.68,
            6.15,
            5,
            2.93,
            2.03,
            3.24,
            3.42,
            1.64
        ]
    },
    "information": ""
}
})
// 响应及时性接口数据
Mock.mock("response/4", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "SUPPLIERNAME": [
            "南京华信藤仓光通信有限公司",
            "南京华脉科技股份有限公司",
            "天津富通信息科技股份有限公司",
            "宏安集团有限公司",
            "杭州富通通信技术股份有限公司",
            "江苏中利集团股份有限公司",
            "江苏中天科技股份有限公司",
            "江苏亨通光电股份有限公司",
            "江苏南方通信科技有限公司",
            "江苏永鼎股份有限公司",
            "烽火通信科技股份有限公司",
            "西安西古光通信有限公司",
            "通鼎互联信息股份有限公司",
            "长飞光纤光缆股份有限公司"
        ],
        "RESB_FREQUENCY": [
            29,
            25,
            38,
            13,
            59,
            21,
            45,
            63,
            85,
            6,
            62,
            16,
            14,
            102
        ],
        "RESB_TIME_AVG": [
            5.6,
            0.22,
            3.98,
            1.12,
            2.74,
            3.95,
            0.34,
            4.53,
            3.14,
            0.75,
            2.13,
            3.35,
            0.88,
            3.98
        ]
    },
    "information": ""
}
})
// 响应及时性接口数据
Mock.mock("/response/2", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MATERIALNAME": [
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆\\GYTS\\G.652D\\24芯",
            "普通光缆|GYTS|G.652D|48芯",
            "普通光缆\\GYTS\\G.652D\\96芯",
            "普通光缆\\GYTS\\G.652D\\144芯",
            "普通光缆\\GYTS\\G.652D\\288芯"
        ],
        "RESB_FREQUENCY": [
            10,
            7,
            4,
            3,
            3,
            1
        ],
        "RESB_TIME_AVG": [
            1.62,
            2,
            2,
            2,
            2.67,
            2
        ]
    },
    "information": ""
}
})

// 响应及时性接口数据
Mock.mock("response/5", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MAT_YEAR": [
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2022,
            2022,
            2022
        ],
        "MAT_MONTH": [
            4,
            5,
            6,
            7,
            8,
            12,
            1,
            2,
            3
        ],
        "RESB_FREQUENCY": [
            4,
            2,
            1,
            1,
            7,
            3,
            5,
            1,
            5
        ],
        "RESB_TIME_AVG": [
            7,
            0,
            1,
            0,
            1.43,
            21,
            16,
            4,
            0
        ]
    },
    "information": ""
}
})
// 响应及时性接口数据
Mock.mock("/response/3", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "SUPPLIERNAME": [
            "江苏亨通光电股份有限公司",
            "宏安集团有限公司",
            "天津富通信息科技股份有限公司",
            "江苏中利集团股份有限公司",
            "烽火通信科技股份有限公司",
            "江苏南方通信科技有限公司",
            "杭州富通通信技术股份有限公司",
            "长飞光纤光缆股份有限公司"
        ],
        "MATERIALNAME": [
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆\\GYTS\\G.652D\\12芯"
        ],
        "MATERIALCODE": [
            "10170109",
            "10170109",
            "10170109",
            "10170109",
            "10170109",
            "10170109",
            "10170109",
            "10170109"
        ],
        "RESB_FREQUENCY": [
            1,
            1,
            1,
            2,
            1,
            1,
            2,
            1
        ],
        "RESB_TIME_AVG": [
            3,
            1,
            6,
            1,
            0,
            2,
            0,
            0
        ]
    },
    "information": ""
}
})
// 响应及时性接口数据
Mock.mock("response/6", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "STOCKORDERNO": [
            "APO303589210410063",
            "APO303510210410158",
            "APO303510210410158",
            "APO303589210410063"
        ],
        "MATERIALCODE": [
            "10170115",
            "10170109",
            "10170151",
            "10170127"
        ],
        "MATERIALNAME": [
            "普通光缆\\GYTS\\G.652D\\24芯",
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆\\GYTS\\G.652D\\96芯",
            "普通光缆|GYTS|G.652D|48芯"
        ],
        "SOL_NEED_NUM": [
            400,
            600,
            60,
            90
        ],
        "MATE_UNIT": [
            "皮长公里",
            "皮长公里",
            "皮长公里",
            "皮长公里"
        ],
        "CREATTIME": [
            "2021-04-16",
            "2021-04-09",
            "2021-04-09",
            "2021-04-16"
        ],
        "FINISHTIME": [
            "2021-04-27",
            "2021-04-12",
            "2021-04-12",
            "2021-04-27"
        ],
        "RESB_TIME": [
            11,
            3,
            3,
            11
        ]
    },
    "information": ""
}
})

// 供货准时性接口数据
Mock.mock("/deliver/1", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MAT_YEAR": [
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2021,
            2022,
            2022,
            2022,
            2022
        ],
        "MAT_MONTH": [
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            1,
            2,
            3,
            4
        ],
        "DEL_FREQUENCY": [
            26,
            104,
            199,
            121,
            85,
            96,
            88,
            89,
            1,
            3,
            154,
            125,
            123,
            103
        ],
        "ON_TIME_FREQUENCY": [
            14,
            48,
            25,
            10,
            8,
            9,
            14,
            14,
            0,
            1,
            46,
            15,
            22,
            21
        ],
        "OVER_FREQUENCY": [
            12,
            56,
            174,
            111,
            77,
            87,
            74,
            75,
            1,
            2,
            108,
            110,
            101,
            82
        ],
        "ON_TIME_RATE": [
            53.849999999999994,
            46.150000000000006,
            12.559999999999999,
            8.260000000000002,
            9.41,
            9.379999999999999,
            15.909999999999998,
            15.73,
            0,
            33.33,
            29.87,
            12,
            17.89,
            20.39
        ]
    },
    "information": ""
}
})
// 供货准时性接口数据
Mock.mock("/deliver/4", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MATERIALNAME": [
            "普通光缆\\GYTA53\\G.652+G.655\\12+24芯",
            "普通光缆\\GYTA53\\G.652+G.655\\32+16芯",
            "普通光缆\\GYTA53\\G.652+G.655\\48+16芯",
            "普通光缆\\GYTA53\\G.652+G.655\\64+32芯",
            "普通光缆\\GYTA53\\G.655\\48芯",
            "普通光缆\\GYTA53\\G.655\\96芯",
            "普通光缆\\GYTA\\G.655\\48芯",
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆\\GYTS\\G.652D\\144芯",
            "普通光缆\\GYTS\\G.652D\\24芯",
            "普通光缆\\GYTS\\G.652D\\288芯",
            "普通光缆\\GYTS\\G.652D\\96芯",
            "普通光缆\\GYTS\\G.655\\24芯",
            "普通光缆|GYTS|G.652D|48芯"
        ],
        "DEL_FREQUENCY": [
            1,
            2,
            2,
            1,
            2,
            1,
            2,
            526,
            76,
            355,
            10,
            93,
            1,
            245
        ],
        "ON_TIME_FREQUENCY": [
            1,
            0,
            1,
            0,
            0,
            0,
            1,
            117,
            12,
            64,
            2,
            13,
            1,
            35
        ],
        "ON_TIME_RATE": [
            100,
            0,
            50,
            0,
            0,
            0,
            50,
            22.24,
            15.790000000000001,
            18.029999999999998,
            20,
            13.98,
            100,
            14.29
        ]
    },
    "information": ""
}
})
// 供货准时性接口数据
Mock.mock("/deliver/2", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MATERIALNAME": [
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆\\GYTS\\G.652D\\24芯",
            "普通光缆\\GYTS\\G.652D\\96芯",
            "普通光缆|GYTS|G.652D|48芯"
        ],
        "DEL_FREQUENCY": [
            15,
            7,
            2,
            2
        ],
        "ON_TIME_FREQUENCY": [
            7,
            5,
            1,
            1
        ],
        "ON_TIME_RATE": [
            46.67,
            71.43,
            50,
            50
        ]
    },
    "information": ""
}
})
// 供货准时性接口数据
Mock.mock("/deliver/3", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "SUPPLIERNAME": [
            "江苏亨通光电股份有限公司",
            "江苏亨通光电股份有限公司",
            "江苏亨通光电股份有限公司",
            "天津富通信息科技股份有限公司",
            "烽火通信科技股份有限公司",
            "杭州富通通信技术股份有限公司",
            "南京华信藤仓光通信有限公司",
            "南京华信藤仓光通信有限公司",
            "西安西古光通信有限公司",
            "西安西古光通信有限公司"
        ],
        "MATERIALCODE": [
            "10170115",
            "10170127",
            "10170151",
            "10170115",
            "10170109",
            "10170109",
            "10170109",
            "10170115",
            "10170109",
            "10170115"
        ],
        "MATERIALNAME": [
            "普通光缆\\GYTS\\G.652D\\24芯",
            "普通光缆|GYTS|G.652D|48芯",
            "普通光缆\\GYTS\\G.652D\\96芯",
            "普通光缆\\GYTS\\G.652D\\24芯",
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆\\GYTS\\G.652D\\24芯",
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆\\GYTS\\G.652D\\24芯"
        ],
        "DEL_FREQUENCY": [
            2,
            2,
            2,
            1,
            1,
            5,
            4,
            2,
            5,
            2
        ],
        "ON_TIME_FREQUENCY": [
            1,
            1,
            1,
            1,
            0,
            2,
            1,
            1,
            4,
            2
        ],
        "ON_TIME_RATE": [
            50,
            50,
            50,
            100,
            0,
            40,
            25,
            50,
            80,
            100
        ]
    },
    "information": ""
}
})
// 供货准时性接口数据
Mock.mock("/deliver/5", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MATERIALNAME": [
            "普通光缆\\GYTA53\\G.652+G.655\\12+24芯"
        ],
        "MAT_YEAR": [
            2022
        ],
        "MAT_MONTH": [
            3
        ],
        "DEL_FREQUENCY": [
            1
        ],
        "ON_TIME_FREQUENCY": [
            1
        ],
        "ON_TIME_RATE": [
            100
        ]
    },
    "information": ""
}
})

// 需求满足度接口数据
Mock.mock("command/1", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MATERIALNAME": [
            "普通光缆\\GYTA53\\G.652+G.655\\32+16芯",
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆\\GYTS\\G.652D\\144芯",
            "普通光缆\\GYTS\\G.652D\\24芯",
            "普通光缆\\GYTS\\G.652D\\288芯",
            "普通光缆\\GYTS\\G.652D\\4芯",
            "普通光缆\\GYTS\\G.652D\\72芯",
            "普通光缆\\GYTS\\G.652D\\96芯",
            "普通光缆\\混缆\\GYTA53\\G.652\\36芯\\G.655\\12芯",
            "普通光缆\\混缆\\GYTA\\G.652\\24芯\\G.655\\12芯",
            "普通光缆|GYTA|G.652D|144芯|长飞",
            "普通光缆|GYTA|G.652D|24芯|长飞",
            "普通光缆|GYTS|G.652D|16芯|长飞",
            "普通光缆|GYTS|G.652D|24芯|长飞",
            "普通光缆|GYTS|G.652D|48芯",
            "普通光缆|GYTS|G.652D|48芯|长飞",
            "普通光缆|GYTS|G.652D|4芯|亨通",
            "普通光缆|GYTS|G.652D|96芯|长飞"
        ],
        "EXEC_RATE": [
            0,
            43.56,
            54.059999999999995,
            56.599999999999994,
            0,
            0,
            110.96999999999998,
            65.45,
            0,
            0,
            0,
            0,
            0,
            0,
            51.910000000000004,
            0,
            0,
            0
        ],
        "TURNOVER_RATE": [
            0,
            65.23,
            12.93,
            34.67,
            0,
            0,
            1.04,
            57.16,
            0,
            0,
            0,
            0,
            0,
            0,
            48.449999999999996,
            0,
            0,
            0
        ]
    },
    "information": ""
}
})
// 需求满足度接口数据
Mock.mock("/command/2", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MATERIALNAME": [
            "普通光缆|GYTS|G.652D|96芯|长飞",
            "普通光缆|GYTS|G.652D|4芯|亨通",
            "普通光缆|GYTS|G.652D|48芯|长飞",
            "普通光缆|GYTS|G.652D|48芯",
            "普通光缆|GYTS|G.652D|24芯|长飞",
            "普通光缆|GYTS|G.652D|16芯|长飞",
            "普通光缆|GYTA|G.652D|24芯|长飞",
            "普通光缆|GYTA|G.652D|144芯|长飞",
            "普通光缆\\混缆\\GYTA\\G.652\\24芯\\G.655\\12芯",
            "普通光缆\\混缆\\GYTA53\\G.652\\36芯\\G.655\\12芯",
            "普通光缆\\GYTS\\G.652D\\96芯",
            "普通光缆\\GYTS\\G.652D\\72芯",
            "普通光缆\\GYTS\\G.652D\\4芯",
            "普通光缆\\GYTS\\G.652D\\288芯",
            "普通光缆\\GYTS\\G.652D\\24芯",
            "普通光缆\\GYTS\\G.652D\\144芯",
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆\\GYTA53\\G.652+G.655\\32+16芯"
        ],
        "QT_ONHAND_QTY": [
            3.1029999999999998,
            9,
            9.48,
            837.62,
            0.53,
            0.09,
            0.8,
            1.6300000000000001,
            3,
            1.5,
            10.33,
            15.5,
            189.63,
            38,
            1593.612,
            160.08599999999998,
            2538.389,
            21
        ],
        "REMAIN_XQ": [
            0,
            0,
            0,
            193,
            0,
            0,
            0,
            0,
            0,
            0,
            89,
            0,
            0,
            0,
            64,
            53.099999999999994,
            -349.8,
            0
        ],
        "ABSOLUTE_DIFF": [
            3.1029999999999998,
            9,
            9.48,
            644.62,
            0.53,
            0.09,
            0.8,
            1.6300000000000001,
            3,
            1.5,
            -78.67,
            15.5,
            189.63,
            38,
            1529.612,
            106.98599999999999,
            2888.1890000000003,
            21
        ]
    },
    "information": ""
}
})
// 需求满足度接口数据
Mock.mock("command/2", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "MATERIALNAME": [
            "普通光缆|GYTS|G.652D|96芯|长飞",
            "普通光缆|GYTS|G.652D|4芯|亨通",
            "普通光缆|GYTS|G.652D|48芯|长飞",
            "普通光缆|GYTS|G.652D|48芯",
            "普通光缆|GYTS|G.652D|24芯|长飞",
            "普通光缆|GYTS|G.652D|16芯|长飞",
            "普通光缆|GYTA|G.652D|24芯|长飞",
            "普通光缆|GYTA|G.652D|144芯|长飞",
            "普通光缆\\混缆\\GYTA\\G.652\\24芯\\G.655\\12芯",
            "普通光缆\\混缆\\GYTA53\\G.652\\36芯\\G.655\\12芯",
            "普通光缆\\GYTS\\G.652D\\96芯",
            "普通光缆\\GYTS\\G.652D\\72芯",
            "普通光缆\\GYTS\\G.652D\\4芯",
            "普通光缆\\GYTS\\G.652D\\288芯",
            "普通光缆\\GYTS\\G.652D\\24芯",
            "普通光缆\\GYTS\\G.652D\\144芯",
            "普通光缆\\GYTS\\G.652D\\12芯",
            "普通光缆\\GYTA53\\G.652+G.655\\32+16芯"
        ],
        "QT_ONHAND_QTY": [
            3.1029999999999998,
            9,
            9.48,
            837.62,
            0.53,
            0.09,
            0.8,
            1.6300000000000001,
            3,
            1.5,
            10.33,
            15.5,
            189.63,
            38,
            1593.612,
            160.08599999999998,
            2538.389,
            21
        ],
        "REMAIN_XQ": [
            0,
            0,
            0,
            193,
            0,
            0,
            0,
            0,
            0,
            0,
            89,
            0,
            0,
            0,
            64,
            53.099999999999994,
            -349.8,
            0
        ],
        "ABSOLUTE_DIFF": [
            3.1029999999999998,
            9,
            9.48,
            644.62,
            0.53,
            0.09,
            0.8,
            1.6300000000000001,
            3,
            1.5,
            -78.67,
            15.5,
            189.63,
            38,
            1529.612,
            106.98599999999999,
            2888.1890000000003,
            21
        ]
    },
    "information": ""
}
})
// 需求满足度接口数据
Mock.mock("command/3", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {
        "PROJECTCODE": [
            "B16303510035230",
            "B20303510015301",
            "B20303510035205",
            "B20303528028701",
            "B21303510035105",
            "B21303510035701",
            "B888888",
            "C19303528028201",
            "C20303522022201",
            "C20303522022202",
            "C20303525025201",
            "C20303528028202",
            "C20303532032201",
            "C21303522022201",
            "C21303522022202",
            "C21303522022203",
            "C21303525025201",
            "C21303528028201",
            "C22303522AA4001",
            "C22303522BA2001",
            "C22303522BA4001",
            "C22303525AA4001",
            "C22303525BA2001",
            "C22303525BA4001",
            "C22303528AA4001",
            "C22303528BA4001",
            "C22303532BA4001",
            "D20303522022612",
            "D21303522022610",
            "D21303525025610",
            "D21303532032610",
            "E19303525025104",
            "E19303525025201",
            "E19303532032221",
            "E20303522022105",
            "E20303522022107",
            "E20303522022108",
            "E20303522022202",
            "E20303522022209",
            "E20303522022212",
            "E20303522022214",
            "E20303525025107",
            "E20303525025108",
            "E20303525025209",
            "E20303528028107",
            "E20303528028202",
            "E20303528028203",
            "E20303528028204",
            "E20303528028205",
            "E20303528028209",
            "E20303528028214",
            "E20303528028215",
            "E20303532032108",
            "E20303532032109",
            "E20303532032203",
            "E20303532032204",
            "E20303532032206",
            "E20303532032214",
            "E20303532032215",
            "E21303522022101",
            "E21303522022102",
            "E21303522022103",
            "E21303522022106",
            "E21303522022107",
            "E21303522022108",
            "E21303522022109",
            "E21303522022202",
            "E21303522022203",
            "E21303522022205",
            "E21303522022206",
            "E21303522022207",
            "E21303522022208",
            "E21303522022209",
            "E21303522022210",
            "E21303522022214",
            "E21303522022215",
            "E21303525025102",
            "E21303525025103",
            "E21303525025105",
            "E21303525025107",
            "E21303525025108",
            "E21303525025109",
            "E21303525025201",
            "E21303525025202",
            "E21303525025203",
            "E21303525025205",
            "E21303525025206",
            "E21303525025207",
            "E21303525025208",
            "E21303525025209",
            "E21303525025210",
            "E21303525025214",
            "E21303525025215",
            "E21303525025701",
            "E21303528028102",
            "E21303528028103",
            "E21303528028105",
            "E21303528028201",
            "E21303528028202",
            "E21303528028203",
            "E21303528028205",
            "E21303528028206",
            "E21303528028207",
            "E21303528028208",
            "E21303528028209",
            "E21303528028214",
            "E21303528028215",
            "E21303528028216",
            "E21303532032101",
            "E21303532032102",
            "E21303532032103",
            "E21303532032105",
            "E21303532032201",
            "E21303532032202",
            "E21303532032203",
            "E21303532032206",
            "E21303532032207",
            "E21303532032208",
            "E21303532032210",
            "E21303532032211",
            "E21303532032214",
            "E21303532032215",
            "E22303522022201",
            "E22303522022203",
            "E22303522022204",
            "E22303522022205",
            "E22303525025101",
            "E22303525025201",
            "E22303525025203",
            "E22303525025204",
            "E22303525025205",
            "E22303528028201",
            "E22303528028203",
            "E22303528028204",
            "E22303528028205",
            "E22303532032201",
            "E22303532032203",
            "E22303532032204",
            "E22303532032205",
            "L20303525025146",
            "L20303528028146",
            "L21303522022105",
            "L21303525025105",
            "L21303528028105",
            "L21303532032105",
            "L22303522022102",
            "L22303525025102",
            "L22303528028102",
            "L22303532032102"
        ],
        "PROJECTNAME": [
            "数据城域网三期扩容工程",
            "2020年IDC数据中心九期扩容工程",
            "省内传输网襄阳-万州光缆线路工程",
            "荆门移动数据中心一期工程",
            "湖北公司2021年5G ToB核心网共享型边缘计算建设工程",
            "湖北省工业互联网安全监测与态势感知平台二期工程",
            "上市通用库物资",
            "2019年集客专线荆门接入工程",
            "2020年集客专线襄阳接入工程",
            "2020年集客专线襄阳接入工程公共安全视频监控专线接入项目",
            "2020年集客专线十堰接入工程",
            "2020年集客专线荆门接入工程太子山林管局森林火灾高风险区综治专线接入项目",
            "2020年集客专线随州接入工程",
            "2021年集客专线襄阳接入工程",
            "2021年集客专线襄阳接入工程老河口社会治理智慧化改造专线接入项目",
            "2021年集客专线襄阳接入工程保康县电子政务外网专线接入项目",
            "2021年集客专线十堰接入工程",
            "2021年集客专线荆门接入工程",
            "2022年4G网络湖北传输线路工程襄阳本地网单项工程第一阶段",
            "2022年城域传送网线路扩容工程襄阳本地网单项工程第二阶段",
            "2022年全业务配套传输网管线工程襄阳本地网单项工程第一阶段",
            "2022年4G网络湖北传输线路工程十堰本地网单项工程第一阶段",
            "2022年城域传送网线路扩容工程十堰本地网单项工程第二阶段",
            "2022年全业务配套传输网管线工程十堰本地网单项工程第一阶段",
            "2022年5G网络湖北传输线路工程荆门本地网单项工程第一阶段",
            "2022年全业务配套传输网管线工程荆门本地网单项工程第一阶段",
            "2022年全业务配套传输网管线工程随州本地网单项工程第一阶段",
            "2020年湖北无线网襄阳网优更新改造零购",
            "2021年湖北无线网襄阳网优更新改造零购",
            "2021年湖北无线网十堰网优更新改造零购",
            "2021年湖北无线网随州网优更新改造零购",
            "2019年4G网络湖北传输线路工程十堰本地网单项工程第四阶段",
            "2019年传输网更新改造配套线路工程十堰本地网单项工程第一阶段",
            "2019年小微宽带接入工程随州第二批单项工程",
            "2020年5G网络湖北传输线路工程襄阳本地网单项工程第三阶段",
            "2020年4G网络湖北传输线路工程襄阳本地网单项工程第二阶段",
            "2020年4G网络湖北传输线路工程襄阳本地网单项工程第三阶段",
            "2020年家庭宽带接入工程襄阳第一批单项工程",
            "2020年传输网更新改造配套线路工程襄阳本地网单项工程第一阶段",
            "2020年全业务配套传输网管线工程襄阳本地网单项工程第二阶段",
            "2020年小微宽带接入工程襄阳第二批单项工程",
            "2020年4G网络湖北传输线路工程十堰本地网单项工程第二阶段",
            "2020年4G网络湖北传输线路工程十堰本地网单项工程第三阶段",
            "2020年传输网更新改造配套线路工程十堰本地网单项工程第一阶段",
            "2020年4G网络湖北传输线路工程荆门本地网单项工程第二阶段",
            "2020年家庭宽带接入工程荆门第一批单项工程",
            "2020年小微宽带接入工程荆门第一批单项工程",
            "2020年在建楼盘宽带接入工程荆门单项工程",
            "2020年全业务配套传输网管线工程荆门本地网单项工程第一阶段",
            "2020年全业务配套传输网管线工程荆门本地网单项工程第二阶段",
            "2020年小微宽带接入工程荆门第二批单项工程",
            "2020年家庭宽带接入工程荆门第二批单项工程",
            "2020年4G网络湖北传输线路工程随州本地网单项工程第二阶段",
            "2020年5G网络湖北传输线路工程随州本地网单项工程第四阶段",
            "2020年小微宽带接入工程随州第一批单项工程",
            "2020年在建楼盘宽带接入工程随州单项工程",
            "2020年城域传送网线路扩容工程随州本地网单项工程第一阶段",
            "2020年小微宽带接入工程随州第二批单项工程",
            "2020年家庭宽带接入工程随州第二批单项工程",
            "2021年5G网络湖北传输线路工程襄阳本地网单项工程第一阶段",
            "2021年4G网络湖北传输线路工程襄阳本地网单项工程第一阶段",
            "2021年5G网络湖北传输线路工程襄阳本地网单项工程第二阶段",
            "2021年4G网络湖北传输线路工程襄阳本地网单项工程第二阶段",
            "2021年5G网络湖北传输线路工程襄阳本地网单项工程第三阶段",
            "2021年4G网络湖北传输线路工程襄阳本地网单项工程第三阶段",
            "2021年5G网络湖北传输线路工程襄阳本地网单项工程第四阶段",
            "2021年全业务配套传输网管线工程襄阳本地网单项工程第一阶段",
            "2021年城域传送网线路扩容工程襄阳本地网单项工程第二阶段",
            "2021年城域传送网线路扩容工程襄阳本地网单项工程第三阶段",
            "2021年家庭宽带接入工程襄阳第一批单项工程",
            "2021年小微宽带接入工程襄阳第一批单项工程",
            "2021年在建楼盘宽带接入工程襄阳单项工程",
            "2021年传输网更新改造配套线路工程襄阳本地网单项工程第一阶段",
            "2021年商务楼宇综合接入工程襄阳单项工程",
            "2021年家庭宽带接入工程襄阳第二批单项工程",
            "2021年小微宽带接入工程襄阳第二批单项工程",
            "十堰地区第六批4G电信普服试点线路工程",
            "2021年5G网络湖北传输线路工程十堰本地网单项工程第一阶段",
            "2021年4G网络湖北传输线路工程十堰本地网单项工程第一阶段",
            "2021年5G网络湖北传输线路工程十堰本地网单项工程第二阶段",
            "2021年4G网络湖北传输线路工程十堰本地网单项工程第二阶段",
            "2021年4G网络湖北传输线路工程十堰本地网单项工程第三阶段",
            "2021年城域传送网线路扩容工程十堰本地网单项工程第一阶段",
            "2021年全业务配套传输网管线工程十堰本地网单项工程第一阶段",
            "2021年城域传送网线路扩容工程十堰本地网单项工程第二阶段",
            "2021年城域传送网线路扩容工程十堰本地网单项工程第三阶段",
            "2021年家庭宽带接入工程十堰第一批单项工程",
            "2021年小微宽带接入工程十堰第一批单项工程",
            "2021年在建楼盘宽带接入工程十堰单项工程",
            "2021年传输网更新改造配套线路工程十堰本地网单项工程第一阶段",
            "2021年商务楼宇综合接入工程十堰单项工程",
            "2021年家庭宽带接入工程十堰第二批单项工程",
            "2021年小微宽带接入工程十堰第二批单项工程",
            "十堰移动数据中心一期工程",
            "2021年5G网络湖北传输线路工程荆门本地网单项工程第二阶段",
            "2021年4G网络湖北传输线路工程荆门本地网单项工程第一阶段",
            "2021年5G网络湖北传输线路工程荆门本地网单项工程第三阶段",
            "2021年城域传送网线路扩容工程荆门本地网单项工程第一阶段",
            "2021年全业务配套传输网管线工程荆门本地网单项工程第一阶段",
            "2021年城域传送网线路扩容工程荆门本地网单项工程第二阶段",
            "2021年城域传送网线路扩容工程荆门本地网单项工程第三阶段",
            "2021年家庭宽带接入工程荆门第一批单项工程",
            "2021年小微宽带接入工程荆门第一批单项工程",
            "2021年在建楼盘宽带接入工程荆门单项工程",
            "2021年全业务配套传输网管线工程荆门本地网单项工程第二阶段",
            "2021年家庭宽带接入工程荆门第二批单项工程",
            "2021年小微宽带接入工程荆门第二批单项工程",
            "2021年城域传送网线路扩容工程荆门本地网单项工程第四阶段",
            "2021年5G网络湖北传输线路工程随州本地网单项工程第一阶段",
            "2021年5G网络湖北传输线路工程随州本地网单项工程第二阶段",
            "2021年4G网络湖北传输线路工程随州本地网单项工程第一阶段",
            "2021年5G网络湖北传输线路工程随州本地网单项工程第三阶段",
            "2021年全业务配套传输网管线工程随州本地网单项工程第一阶段",
            "2021年城域传送网线路扩容工程随州本地网单项工程第一阶段",
            "2021年城域传送网线路扩容工程随州本地网单项工程第二阶段",
            "2021年家庭宽带接入工程随州第一批单项工程",
            "2021年小微宽带接入工程随州第一批单项工程",
            "2021年在建楼盘宽带接入工程随州单项工程",
            "2021年商务楼宇综合接入工程随州单项工程",
            "湖北公司CMNET数据城域网八期扩容工程随州本地网单项工程",
            "2021年家庭宽带接入工程随州第二批单项工程",
            "2021年小微宽带接入工程随州第二批单项工程",
            "2022年城域传送网线路扩容工程襄阳本地网单项工程第一阶段",
            "2022年小微宽带接入工程襄阳第一批单项工程",
            "2022年家庭宽带接入工程襄阳第一批单项工程",
            "2022年在建楼盘宽带接入工程襄阳单项工程",
            "2022年5G网络湖北传输线路工程十堰本地网单项工程第一阶段",
            "2022年城域传送网线路扩容工程十堰本地网单项工程第一阶段",
            "2022年小微宽带接入工程十堰第一批单项工程",
            "2022年家庭宽带接入工程十堰第一批单项工程",
            "2022年在建楼盘宽带接入工程十堰单项工程",
            "2022年城域传送网线路扩容工程荆门本地网单项工程第一阶段",
            "2022年小微宽带接入工程荆门第一批单项工程",
            "2022年家庭宽带接入工程荆门第一批单项工程",
            "2022年在建楼盘宽带接入工程荆门单项工程",
            "2022年城域传送网线路扩容工程随州本地网单项工程第一阶段",
            "2022年小微宽带接入工程随州第一批单项工程",
            "2022年家庭宽带接入工程随州第一批单项工程",
            "2022年在建楼盘宽带接入工程随州单项工程",
            "2020年湖北无线网分布系统安装工程十堰工程",
            "2020年湖北无线网分布系统安装工程荆门工程",
            "2021年湖北无线网分布系统安装工程襄阳工程",
            "2021年湖北无线网分布系统安装工程十堰工程",
            "2021年湖北无线网分布系统安装工程荆门工程",
            "2021年湖北无线网分布系统安装工程随州工程",
            "2022年湖北无线网5G室内覆盖工程襄阳工程",
            "2022年湖北无线网5G室内覆盖工程十堰工程",
            "2022年湖北无线网5G室内覆盖工程荆门工程",
            "2022年湖北无线网5G室内覆盖工程随州工程"
        ],
        "XQ": [
            0,
            0,
            4890,
            0,
            31.68,
            26.400000000000002,
            100505040,
            0,
            0,
            419400,
            209700,
            0,
            0,
            335520,
            1258200,
            219648,
            610140,
            301968,
            189834,
            2922,
            280600,
            19664,
            334790,
            411954,
            51132,
            107431,
            198842,
            8115,
            15645.720000000001,
            12984,
            908.88,
            0,
            0,
            0,
            0,
            0,
            33552,
            0,
            2779794,
            3455.26,
            0,
            237948,
            0,
            1492712,
            0,
            0,
            0,
            0,
            0,
            5130,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            191118,
            179514,
            3678525,
            2179196,
            488738,
            272100,
            308016,
            473466,
            1632450,
            1665576,
            1519404,
            1930862,
            762684,
            4959726,
            349284,
            43280,
            85062,
            626354,
            1619874,
            282168,
            129438,
            1289464,
            252288,
            906996,
            1051594,
            2365422,
            307612,
            501096,
            916892,
            46914,
            11223312,
            1155738,
            39.6,
            1573230,
            97644,
            228816,
            0,
            158987.6,
            0,
            1035188,
            1351026,
            75894,
            712776,
            685472,
            3263160,
            189534,
            470504,
            186816,
            986034,
            277812,
            329346,
            243570,
            0,
            850932,
            2027712,
            202116,
            279726,
            163968,
            528,
            5116860,
            353100,
            257112,
            770852,
            2318764,
            338640,
            311582,
            290414,
            497256,
            5870454,
            85464,
            198340,
            308124,
            2404572,
            110226,
            170112,
            235644,
            3320244,
            160152,
            0,
            0,
            38605.759999999995,
            28132,
            18177.6,
            30296,
            95216,
            173120,
            21640,
            25990
        ],
        "LY": [
            258.71999999999997,
            343.2,
            4890,
            26.400000000000002,
            0,
            26.400000000000002,
            0,
            106190,
            339768.522,
            2541564,
            261636,
            264222,
            100656,
            37746,
            179880.66,
            205736.50199999998,
            584172,
            0,
            154206,
            0,
            263998,
            0,
            124218,
            0,
            0,
            84024,
            195185,
            35922.4,
            0,
            12984,
            0,
            17532,
            14610,
            12984,
            67238,
            4523.36,
            126222,
            4847.360000000001,
            3720645.552,
            3292.26,
            5669.68,
            203636,
            826758,
            1446734.976,
            76685,
            21791,
            4194,
            78385.4,
            12582,
            3026.7,
            11465.98,
            46930.86,
            151480,
            103872,
            74443.5,
            12984,
            34200,
            8223.199999999999,
            7549.2,
            141563.44,
            85464,
            179172.72,
            179514,
            4038168,
            2164536.56,
            482508.4,
            321099.12,
            1372879.06,
            463704,
            1534087.6800000002,
            1593800.22,
            1430990.7,
            1509664.936,
            737086.34,
            4938756,
            317007.6,
            1034392,
            2409046,
            536672,
            1577398,
            136696,
            38952,
            1039734,
            116880,
            857262,
            1037094,
            2301708,
            261210,
            327672,
            713942,
            33930,
            6414092.148,
            25968,
            39.6,
            1535295,
            80490,
            165126,
            47158.96000000001,
            158935.5,
            12984,
            1029150,
            1347404.54,
            53660.224,
            661481.36,
            332558,
            3257239.296,
            165645.59999999998,
            437286,
            120782,
            986034,
            264828,
            329346,
            239538.6,
            149022,
            842382,
            2019407.2,
            199873.08000000002,
            266345.12,
            160635.44,
            0,
            5111399.62,
            344712,
            248456,
            668966,
            2090086,
            291726,
            97242,
            286994,
            479724,
            5861688,
            38952,
            185554.40000000002,
            386507.84,
            2399088.424,
            89381.82,
            139816,
            221251.6,
            3477736.2,
            147570,
            38952,
            5539.84,
            38952,
            119020,
            26833.600000000002,
            30296,
            90888,
            173120,
            21640,
            0
        ],
        "EXEC_RATE": [
            0,
            0,
            100,
            0,
            0,
            100,
            0,
            0,
            0,
            606,
            124.77000000000001,
            0,
            0,
            11.25,
            14.299999999999999,
            93.67,
            95.74000000000001,
            0,
            81.23,
            0,
            94.08,
            0,
            37.1,
            0,
            0,
            78.21000000000001,
            98.16,
            442.67,
            0,
            100,
            0,
            0,
            0,
            0,
            0,
            0,
            376.2,
            0,
            133.85,
            95.28,
            0,
            85.58,
            0,
            96.92,
            0,
            0,
            0,
            0,
            0,
            59,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            93.75,
            100,
            109.78000000000002,
            99.33,
            98.72999999999999,
            118.00999999999999,
            445.72,
            97.94,
            93.97,
            95.69,
            94.17999999999999,
            78.19,
            96.64,
            99.58,
            90.75999999999999,
            2390,
            2832.11,
            85.68,
            97.38,
            48.44,
            30.09,
            80.63,
            46.33,
            94.52000000000001,
            98.61999999999999,
            97.31,
            84.92,
            65.39,
            77.86999999999999,
            72.32,
            57.15,
            2.25,
            100,
            97.59,
            82.43,
            72.17,
            0,
            99.97,
            0,
            99.42,
            99.72999999999999,
            70.7,
            92.80000000000001,
            48.52,
            99.82,
            87.4,
            92.94,
            64.64999999999999,
            100,
            95.33,
            100,
            98.34,
            0,
            99,
            99.59,
            98.89,
            95.22,
            97.97,
            0,
            99.89,
            97.61999999999999,
            96.63000000000001,
            86.78,
            90.14,
            86.15,
            31.209999999999997,
            98.82,
            96.47,
            99.85000000000001,
            45.58,
            93.55,
            125.44,
            99.77000000000001,
            81.08999999999999,
            82.19,
            93.89,
            104.74000000000001,
            92.14,
            0,
            0,
            100.89999999999999,
            423.08000000000004,
            147.62,
            100,
            95.45,
            100,
            100,
            0
        ]
    },
    "information": ""
}
})
// 需求满足度接口数据
Mock.mock("command/4", 'post', () => {
  //const para = JSON.parse(options.body)
  // console.log(options)
  return {
    "state": "success",
    "result": {},
    "information": ""
  }
})