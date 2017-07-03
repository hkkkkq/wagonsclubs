<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click='func1'>发送请求</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data:function () {
    return {
      msg: 'wangos前端小组'
    }
  },
  methods:{
    func1:function(){
      this.$ajax.get('http://www.baidu.com')
      .then(function(data){
        alert(data)
      })
      .catch(function(data){
        alert(data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 50px;
  color: red;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
