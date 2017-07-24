<template>
  <div class="body">
      <m-header></m-header>
      <m-list v-if="foot_left"></m-list>
      <m-into v-if="foot_right"></m-into>
      <m-footer></m-footer>
  </div>
</template>
<script>
require('./rem.js')(window,document)
import header from './header.vue'
import footer from './footer.vue'
import list from './list.vue'
import into from './into.vue'
export default { 
    data(){
        return{

        }
    },
    mounted(){
        window.addEventListener('scroll',()=>{
            this.scroll = document.body.scrollTop;
            console.log(this.scroll)
        })
    },
    computed:{
        foot_left(){return this.$store.state.foot_left},
        foot_right(){return this.$store.state.foot_right},
    },
  components:{
      'm-header':header,
      'm-footer':footer,
      'm-list':list,
      'm-into':into
  }
}
</script>
<style scoped>
.body{
    font-family: "Helvetica Neue Light", "HelveticaNeue-Light", "Helvetica Neue", Calibri, Helvetica, Arial, sans-serif;
    background-color: #eceef1;
}
</style>
