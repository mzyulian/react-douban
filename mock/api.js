let express = require('express')
var apiRouter = express.Router()

/**
 * 上次领钻的时间
 */
apiRouter.post('/baasapp/BaasAppApi/getLastTxnDate', function(req, res, next) {
  res.json({
    errorCode: '00',
    errorMessage: '成功',
    returnObject: {
      lastTxnDate: '2018-11-11 10:13:26',
      now: '2018-11-13 09:10:58',
      usreId: 'e94301fbc62343c8b90ac36591a60dac'
    }
  })
})
/**
 * 小程序登录，验证接口
 */
apiRouter.post('/baasapp/BaasAppApi/login', function(req, res, next) {
  res.json({
    errorCode: '00',
    errorMessage: 'success',
    returnObject: {
      accessToken:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X3R5cGUiOiJUQ0JKLUdHU1ciLCJ1c2VyX2lkIjoiZTk0MzAxZmJjNjIzNDNjOGI5MGFjMzY1OTFhNjBkYWMiLCJleHAiOjE1NDA5NTY3MjF9.0yfOZ8mlxMrabkMrqXRoKSEYNwsZ-mDu0I4rXqI7iEM'
    }
  })
})
/**
 * 获取用户详细信息
 */
apiRouter.post('/baasapp/BaasAppApi/getUserInfo', function(req, res, next) {
  res.json({
    errorCode: '00',
    errorMessage: '成功',
    returnObject: {
      primaryPhone: '18620235599',
      accountCreated: '2018-10-10 16:32:36',
      accountAddress: '12U7jCYuws7gEJ9vu8TcgBuMT21PhETpCa',
      userPropInfo: {
        idStatus: 'Active',
        idType: 'Phone',
        primaryPhoneFlag: false,
        created: '2018-10-10 16:32:36',
        accountType: 'TCBJ-GGSW',
        idValue: '18620235596',
        userId: 'e94301fbc62343c8b90ac36591a60dac'
      },
      userName: '石先生',
      userId: 'e94301fbc62343c8b90ac36591a60dac',
      invitationCode: 'ABC123'
    }
  })
})
/**
 * banner图接口
 */
apiRouter.post('/baasapp/BaasAppApi/getBannerImg', function(req, res, next) {
  res.json({
    errorCode: '00',
    errorMessage: '成功',
    returnObject: {
      bannerName: 'test_banner_name',
      bannerValue: 'http://test.img'
    }
  })
})

/**
 * 领取汤钻、健康力
 */
apiRouter.post('/baasapp/BaasAppApi/getProperty', function(req, res, next) {
  res.json({
    errorCode: '00',
    errorMessage: '成功',
    returnObject: {
      txnStatus: 'pending',
      propertyType: 'TangBit',
      userId: 'e94301fbc62343c8b90ac36591a60dac',
      propertyAmount: 3
    }
  })
})
/**
 * 获取用户资产交易列表
 */
apiRouter.post('/baasapp/BaasAppApi/getPropertyTxnList', function(
  req,
  res,
  next
) {
  res.json({
    errorCode: '00',
    errorMessage: '成功',
    returnObject: {
      pageTotal: 3,
      propertyTxnInfo: [
        {
          propertyType: '资产类型',
          txnAmount: '资产交易数量',
          txnStatus: '资产交易状态',
          txnDate: '资产交易时间',
          dstUser: '资产交易目标',
          comments: '资产交易目标类型',
          dstUserType: '资产交易目标类型'
        },
        {
          propertyType: '资产类型',
          txnAmount: '资产交易数量',
          txnStatus: '资产交易状态',
          txnDate: '资产交易时间',
          dstUser: '资产交易目标',
          comments: '资产交易目标类型',
          dstUserType: '资产交易目标类型'
        },
        {
          propertyType: '资产类型',
          txnAmount: '资产交易数量',
          txnStatus: '资产交易状态',
          txnDate: '资产交易时间',
          dstUser: '资产交易目标',
          comments: '资产交易目标类型',
          dstUserType: '资产交易目标类型'
        },
        {
          propertyType: '资产类型',
          txnAmount: '资产交易数量',
          txnStatus: '资产交易状态',
          txnDate: '资产交易时间',
          dstUser: '资产交易目标',
          comments: '资产交易目标类型',
          dstUserType: '资产交易目标类型'
        },
        {
          propertyType: '资产类型',
          txnAmount: '资产交易数量',
          txnStatus: '资产交易状态',
          txnDate: '资产交易时间',
          dstUser: '资产交易目标',
          comments: '资产交易目标类型',
          dstUserType: '资产交易目标类型'
        }
      ]
    }
  })
})

/**
 * 获取账户区块交易列表信息
 */
apiRouter.post('/baasapp/BaasAppApi/getBaasTxnList', function(req, res, next) {
  res.json({
    errorCode: '00',
    errorMessage: '成功',
    returnObject: {
      pageNo: 1,
      BaasTxnInfo: [
        {
          srcAccount: '源账户地址',
          dstAccount: '目标户地址',
          amount: 456545,
          blockHeight: '区块高度',
          transactionId: '交易ID',
          hash: '交易哈希值',
          transType: '交易类型',
          transState: '交易状态',
          transTime: '2018-9-26 11:29:26',
          extraInfo: '交易备注'
        },
        {
          srcAccount: '源账户地址',
          dstAccount: '目标户地址',
          amount: 41212,
          blockHeight: '区块高度',
          transactionId: '交易ID',
          hash: '交易哈希值',
          transType: '交易类型',
          transState: '交易状态',
          transTime: '2018-9-26 11:29:26',
          extraInfo: '交易备注'
        },
        {
          srcAccount: '源账户地址',
          dstAccount: '目标户地址',
          amount: 23123,
          blockHeight: '区块高度',
          transactionId: '交易ID',
          hash: '交易哈希值',
          transType: '交易类型',
          transState: '交易状态',
          transTime: '2018-9-26 11:29:26',
          extraInfo: '交易备注'
        },
        {
          srcAccount: '源账户地址',
          dstAccount: '目标户地址',
          amount: 623312,
          blockHeight: '区块高度',
          transactionId: '交易ID',
          hash: '交易哈希值',
          transType: '交易类型',
          transState: '交易状态',
          transTime: '2018-9-26 11:29:26',
          extraInfo: '交易备注'
        }
      ]
    }
  })
})
// 产品详情
apiRouter.post('/baasapp/BaasAppApi/getProductInfo', function(req, res, next) {
  res.json({
    errorCode: '00',
    errorMessage: '成功',
    returnObject: {
      prodNum: '0001',
      comments: '补充人体所需维生素C',
      prodAmount: null,
      prodStatus: 'Active',
      prodPropInfo: [
        {
          comments: null,
          prodId: '64aaf56f-2511-4bff-948e-57f7089a1897',
          propType: 'RMB',
          propValue: '200',
          propStatus: 'Active'
        },
        {
          comments: null,
          prodId: '64aaf56f-2511-4bff-948e-57f7089a1897',
          propType: 'TBD',
          propValue: '80',
          propStatus: 'Active'
        },
        {
          comments:
            'Q:清好牌胶囊主要成分是？A:主要成分膳食纤维喝动物纤维几丁质（CHT)',
          prodId: '64aaf56f-2511-4bff-948e-57f7089a1897',
          propType: 'productDetail',
          propValue: '常见问题',
          propStatus: 'Active'
        },
        {
          comments:
            '保健功能：改善胃肠道功能（润肠通便）适宜人群：便秘者 不适宜人群：孕产妇及哺乳动物',
          prodId: '64aaf56f-2511-4bff-948e-57f7089a1897',
          propType: 'productDetail',
          propValue: '产品参数',
          propStatus: 'Active'
        }
      ],
      prodName: '天然维生素C',
      prodId: '64aaf56f-2511-4bff-948e-57f7089a1897',
      iconURL:
        'https://chain.by-health.com/ftp/img/wss.png,https://chain.by-health.com/ftp/img/prod_01.jpg,https://chain.by-health.com/ftp/img/prod_01.jpg'
    }
  })
})
/**
 * 获取产品列表
 */
apiRouter.post('/baasapp/BaasAppApi/getProductList', function(req, res, next) {
  res.json({
    errorCode: '00',
    errorMessage: '成功',
    returnObject: {
      pageNo: 1,
      pageTotal: 20,
      prodInfo: [
        {
          prodId: '产品id1',
          prodName: '汤臣倍健蛋白质粉',
          comments: '营养好，味道好，更适合儿童口味',
          iconURL: ''
        },
        {
          prodId: '产品id2',
          prodName: '维生素A维生素D软胶嚷（儿童型）-迪士尼漫威装（60粒）',
          comments: '维生素D由瑞士进口',
          iconURL: ''
        },
        {
          prodId: '产品id3',
          prodName: '钙镁咀嚼片（儿童及青少年）-迪士尼漫威装（90片）',
          comments: '钙镁同补，为孩子成长护航',
          iconURL: ''
        }
      ]
    }
  })
})

/**
 * 获取汤钻总产值与总交易笔数
 */
apiRouter.post('/baasapp/BaasAppApi/getTangBitTotals', function(
  req,
  res,
  next
) {
  res.json({
    errorCode: '00',
    errorMessage: '成功',
    returnObject: {
      totalTxns: 45175,
      totalTangBits: 7541664,
      totalTangBitsYest: 54822
    }
  })
})
/**
 *获取用户可领汤钻数量
 */
apiRouter.post('/baasapp/BaasAppApi/getUserTangBits', function(req, res, next) {
  res.json({
    errorCode: '00',
    errorMessage: '成功',
    returnObject: {
      propertyValue: 1
    }
  })
})
/**
 *获取系统消息列表接口
 */
apiRouter.post('/baasapp/BaasAppApi/getUserMsg', function(req, res, next) {
  res.json({
    errorCode: '00',
    errorMessage: '成功',
    returnObject: {
      msgInfo: [
        {
          msgTitle: '[签到] 送健康力上线了',
          msgContent:
            '汤钻是依托于区块链技术，基于参与活动产生的奖励，可以用于消费和兑换等',
          msgDate: '2018-10-20'
        },
        {
          msgTitle: '[签到] 送健康力上线了',
          msgContent:
            '汤钻是依托于区块链技术，基于参与活动产生的奖励，可以用于消费和兑换等',
          msgDate: '2018-10-20'
        },
        {
          msgTitle: '[签到] 送健康力上线了',
          msgContent:
            '汤钻是依托于区块链技术，基于参与活动产生的奖励，可以用于消费和兑换等',
          msgDate: '2018-10-20'
        },
        {
          msgTitle: '[签到] 送健康力上线了',
          msgContent:
            '汤钻是依托于区块链技术，基于参与活动产生的奖励，可以用于消费和兑换等',
          msgDate: '2018-10-20'
        },
        {
          msgTitle: '[签到] 送健康力上线了',
          msgContent:
            '汤钻是依托于区块链技术，基于参与活动产生的奖励，可以用于消费和兑换等',
          msgDate: '2018-10-20'
        }
      ],
      pageNo: 1,
      pageTotal: 3
    }
  })
})
/**
 * 获取账户区块信息
 */
apiRouter.post('/baasapp/BaasAppApi/getAccountInfo', function(req, res, next) {
  res.json({
    errorCode: '00',
    errorMessage: '成功',
    returnObject: {
      accountAddress: '12U7jCYuws7gEJ9vu8TcgBuMT21PhETpCa',
      created: '2018-10-10 16:32:38',
      userId: '186xxxxxxxx',
      privateKey: 'Ytea35bNck3f6bRQ8OZ39zyUyYtPaLBHGSUl0ETSUF8=',
      publicKey: 'A/Hj3/xHAoqKF7eyIVI/IuFkPWCtU7ZjO4Q4Y4ETMkGw',
      primaryPhone: '186xxxxxxxx'
    }
  })
})
/**
 * 获取用户手机段短信验证码接口
 */
apiRouter.post('/baasapp/BaasAppApi/getSMSCode', function(req, res, next) {
  res.json({
    errorCode: '00',
    errorMessage: '成功',
    returnObject: {
      errorCode: '00',
      errorMessage: '短信验证码已经成功发送，请到你的手机号XXXX验证查收'
    }
  })
})
/**
 * 短信验证码校验
 */
apiRouter.post('/baasapp/BaasAppApi/sendSMSCode', function(req, res, next) {
  res.json({
    errorCode: '00',
    errorMessage: '成功',
    returnObject: {
      errorCode: '00',
      errorMessage: '短信验证码验证成功'
    }
  })
})
/**
 *首页获取汤钻健康力
 */
apiRouter.post('/baasapp/BaasAppApi/getPropertyInfo', function(req, res, next) {
  res.json({
    errorCode: '00',
    errorMessage: '成功',
    returnObject: {
      propertyInfo: [
        { propertyStatus: 'Active', propertyType: null, propertyAmount: 0 },
        { propertyStatus: 'Active', propertyType: '', propertyAmount: 0 },
        {
          propertyStatus: 'Active',
          propertyType: 'TangBit',
          propertyAmount: 2.22
        },
        {
          propertyStatus: 'Active',
          propertyType: 'HealthEnergy',
          propertyAmount: 16
        }
      ],
      userId: 'b21f0f3b2e3842e8bcdeb3a909975fc9',
      pageNo: 1,
      pageTotal: 1
    }
  })
})
/**
 * 绑定手机号码
 */
apiRouter.post('/baasapp/BaasAppApi/boundPrimaryPhone', function(
  req,
  res,
  next
) {
  res.json({
    errorCode: '00',
    errorMessage: '成功',
    returnObject: {
      errorCode: '00',
      errorMessage: '恭喜你，账户绑定手机号XXXX成功'
    }
  })
})
/**
 * 开通钱包
 */
apiRouter.post('/baasapp/BaasAppApi/setAccountTxnPwd', function(
  req,
  res,
  next
) {
  res.json({
    errorCode: '00',
    errorMessage: '恭喜你，账户交易密码设置成功'
  })
})
module.exports = apiRouter
