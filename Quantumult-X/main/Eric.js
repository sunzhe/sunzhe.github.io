#!name=解锁集合

[MITM]
hostname = %APPEND% i.weread.qq.com,api.v1.esread.com
[Script]
微信读书+解锁无限卡会员 = type=http-response,pattern= ^https:\/\/i\.weread\.qq\.com\/pay\/memberCardSummary,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/txwxds.js
向日葵阅读+解锁VIP = type=http-response,pattern= ^https:\/\/api\.v1\.esread\.com,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/xiangrikui.js
酷我音乐 = type=http-response,pattern=https?:\/\/.*\.(kuwo|lrts)\.(cn|me)\/(a\.p|music\.pay|(vip\/(v2|enc)\/(theme|user\/vip))|(EcomResource|(Mobile)?Ad)Serv(er|ice)).*,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/nameking77/Qx/main/rewrite/kw.js,script-update-interval=0