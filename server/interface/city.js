//申明的为方法
// const router = require('koa-router')()

//这里router作为一个方法使用
// router.get('/list', async (ctx) => {
//   ctx.body = {
//     list: ['北京', '上海', '菏泽']
//   }
// })




// 申明的为对象
const Router = require('koa-router')


//这里Router需要为对象
const router = new Router({
  prefix: '/city'
})

router.get('/list', async (ctx) => {
  ctx.body = {
    list: ['北京', '上海', '菏泽']
  }
})


module.exports =   router

//这种写法在这里报错
// import Router from 'koa-router'

// const router = new Router({
//   prefix: '/city'
// })

// router.get('/list', async (ctx) => {
//   ctx.body = {
//     list: ['北京', '天津']
//   }
// })

// export default router