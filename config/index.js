export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx7800100c78603ff3",
    // 公众号appSecret
    appSecret: "baa732e894408b23026c9d65f424be66",
    // 模板消息id
    templateId: "fUSsugbkyrquEFtxWCGodtC_MM34ZPYmnmrdD-p7W6E",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oAIpv56uE2d0Dr4222YuZ89Y7n5U"],
     
    // 信息配置
    // 所在省份
    province: "湖北",
    // 所在城市
    city: "武汉",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "老婆", "year": "1996", "date": "08-21", "type": 'new'},
      {"name": "老公", "year": "1996", "date": "01-14", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2020-01-05",
    // 结婚纪念日
    marryDate: "2021-09-18"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
