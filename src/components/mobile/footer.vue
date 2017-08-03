<template>
<div>
  <div class="foot">
      <div @click="drive" class="left" :class="{leftselect:foot_left}">
          <span>自驾</span>
      </div>
      <i></i>
      <div @click="about" class="right" :class="{rightselect:foot_right}">
          <span>关于</span>          
      </div>
  </div>
  <div class="foot-1">

  </div>
</div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    computed:{
        foot_left(){return this.$store.state.foot_left},
        foot_right(){return this.$store.state.foot_right},
    },
    methods:{
        drive:function(){this.$store.commit('foot_left_click')},
        about:function(){this.$store.commit('foot_right_click')}
    }
}
</script>
<style scoped>
.foot-1{
    position: relative;
    left: 0;
    bottom: 0;
    height: 1rem;
}
.foot{
    width: 100%;
    height: 0.98rem;
    background: #fff;
    color: #b5b5b5;
    font-size: 0.28rem;
    overflow: hidden;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 100;
    border-top: 1px solid #eceef1;
}
.foot div{
        float: left;
    width: 3.73rem;
    line-height: 0.98rem;
}
.foot span{
    margin-left: 1.9rem;
}
.foot i {
    color:#b5b5b5;
    float: left;
    height: 0.43rem;
    border-right: 1px solid #b5b5b5;
    margin: 0.27rem auto;
}
.left{
    background: url('../../assets/m-selfDrive_noselect.png') no-repeat 1.24rem 0.28rem;
    background-size: 0.44rem 0.36rem!important;
}
.leftselect{
    color: #000!important;    
    background: url('../../assets/m-selfDrive_select.png') no-repeat 1.24rem 0.28rem;
}
.right{
    background: url('../../assets/m-about_noselect.png') no-repeat 1.24rem 0.28rem;
    background-size: 0.44rem 0.36rem!important;
}
.rightselect{
    color: #000!important;    
    background: url('../../assets/m-about_select.png') no-repeat 1.24rem 0.28rem;
}
</style>
