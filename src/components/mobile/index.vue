<template>
  <div style="font-family: PingFangSC-Medium, sans-serif;" class="body">
      <m-header></m-header>
      <pull :maxDistance=60 :topDistance=50 :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
        <m-list  v-if="foot_left"></m-list>   
        <div v-if="foot_left" slot="top" class="mint-loadmore-top">
            <!-- <span v-show="topStatus !== 'loading'">↓</span>
            <span v-show="topStatus === 'loading'">Loading...</span> -->
            <p class="down" v-if="topStatus == 'pull'">pull down to fresh</p>            
            <p class="down" v-if="topStatus == 'drop'">pull down to fresh</p>
            <p class="down" v-if="topStatus == 'loading'">updating...</p>
            <img class="reloadcar" :class="{tomid:topStatus == 'drop',toend:topStatus == 'loading'}" src="../../assets/reload_car.png">
        </div>      
        <div v-else slot="top" class="mint-loadmore-top"></div>             
      </pull>
      <m-into v-if="foot_right"></m-into>
      <m-footer></m-footer>
  </div>
</template>
<script>
require('./rem.js')(window,document)
import { Loadmore } from 'mint-ui';
import header from './header.vue'
import footer from './footer.vue'
import list from './list.vue'
import into from './into.vue'
export default { 
    data(){
        return{
            topStatus: '',
            re:0
        }
    },
    mounted(){
        if(this.$route.query.isNewApp == 'true'){
            window.ground.hideHeader();
            this.$store.commit('isNewApp')
        }
    },
    computed:{
        foot_left(){return this.$store.state.foot_left},
        foot_right(){return this.$store.state.foot_right},
    },
    methods:{
        loadTop() {  
            this.$store.commit('foot_right_click');   
            this.$nextTick(function () {
                this.$store.commit('foot_left_click'); 
            });    
            setTimeout(()=>{
                this.$refs.loadmore.onTopLoaded();                
                },800)
            },
        handleTopChange(status){
            this.topStatus = status;
            }
    },
  components:{
      'm-header':header,
      'm-footer':footer,
      'm-list':list,
      'm-into':into,
      'pull':Loadmore
  }
}
</script>
<style scoped>
.down{
    font-size: 0.18rem;
    color: #888;
    font-weight: bold;
    text-align: center;
    /* line-height: 1.2rem; */
    padding-top: 0.5rem;;
}
.reloadcar{
    position: relative;
    bottom: -0.9rem;
    float: right;
    /* right: -5%; */
    display: block;
    width: 1rem;
    top: 0.2rem;
}
.tomid{
    animation: myfirst 0.8s;
    animation-fill-mode:forwards;
    animation-timing-function: ease;
    -moz-animation: myfirst 0.8s;
    -moz-animation-fill-mode:forwards;
    -moz-animation-timing-function: ease;
    -o-animation: myfirst 0.8s;
    -o-animation-fill-mode:forwards;
    -o-animation-timing-function: ease;
    -webkit-animation: myfirst 0.8s;
    -webkit-animation-fill-mode:forwards;
    -webkit-animation-timing-function: ease;
    -khtml-animation: myfirst 0.8s;
    -khtml-animation-fill-mode:forwards;
    -khtml-animation-timing-function: ease;

}
.toend{
     animation: mysecond 0.8s;
     animation-timing-function: ease;
     -moz-animation: mysecond 0.8s;
     -moz-animation-timing-function: ease;
     -webkit-animation: mysecond 0.8s;
     -webkit-animation-timing-function: ease;
     -o-animation: mysecond 0.8s;
     -o-animation-timing-function: ease;
     -khtml-animation: mysecond 0.8s;
     -khtml-animation-timing-function: ease;
}
@keyframes mysecond
{
0%   {right:45%}
100% {right: 100%}
}

@-moz-keyframes mysecond /* Firefox */
{
0%   {right:45%}
100% {right: 100%}
}

@-webkit-keyframes mysecond /* Safari 和 Chrome */
{
0%   {right:45%}
100% {right: 100%}
}

@-o-keyframes mysecond /* Opera */
{
0%   {right:45%}
100% {right: 100%}
}
@-khtml-keyframes mysecond
{
0%   {right:45%}
100% {right: 100%}
}


@keyframes myfirst
{
0%   {right:0%}
100% {right: 45%}
}
@-khtml-keyframes myfirst /* Firefox */
{
0%   {right:0%}
100% {right: 45%}
}
@-moz-keyframes myfirst /* Firefox */
{
0%   {right:0%}
100% {right: 45%}
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */
{
0%   {right:0%}
100% {right: 45%}
}

@-o-keyframes myfirst /* Opera */
{
0%   {right:0%}
100% {right: 45%}
}
.mint-loadmore-top{
    height: 1.24rem;
    border-bottom: 3px solid black;
}
.body{
    font-family: "Helvetica Neue Light", "HelveticaNeue-Light", "Helvetica Neue", Calibri, Helvetica, Arial, sans-serif;
    background-color: #eceef1;
}
</style>
