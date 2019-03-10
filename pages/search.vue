<template>
  <div>
    <h2>page is</h2>
    <ul>
      <li v-for="(item,idx) in $store.state.navbar.app" :key="idx" >{{item}}</li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'  
export default {
  layout: 'search-layout',
  data () {
    return {
      list: []
    }
  },
  //数据的加载是在浏览器完成
  // async mounted () {
  //   let self = this
  //   let {status, data: {list}} = await axios.get('/city/list')
  //   if (status === 200) {
  //     self.list = list
  //   }
  // }
  //


  //数据在模版上编译完成，异步获取的数据也一并发给浏览器
  // async asyncData(){
  //   let {status, data: {list}} = await axios.get('http://localhost:3000/city/list')
  //   if (status === 200) {
  //     return {
  //       list
  //     }
  //   }
  // }
}
</script>  