<template>
  <div style="background:#000">
	  <div class="head">
		  <p style="height:1px"></p>
		  <img style="width:2.63rem;height:0.53rem;margin:0.4rem auto; display: block;" src="../../../assets/active/dreamcar/DClogo.png">
		  <wrapdiv style="display:flex;margin-top: 5rem;" pheight=1.15 pwidth="6.15">
			  <input v-model="text" placeholder="请输入选手昵称／编号" class="inp">
			  <span class="bor"></span>
			  <img @click="search" class="search" src="../../../assets/active/dreamcar/search.png">
		  </wrapdiv>
	  </div>
	  <player v-for="(item,index) in userList" :index='index' :item=item :key="index" ></player>
	  <div style="height:1.9rem"></div>
	  <div class="foot">
		  <wrapdiv @click.native="toCollect" style="background:#1a3fff" pwidth=2 pheight=0.7><span class="text1">我要参赛</span></wrapdiv>
		  <wrapdiv @click.native="toDescription" style="background:#1a3fff" pwidth=2 pheight=0.7><span class="text1">豪奖说明</span></wrapdiv>
	  </div>
  </div>
</template>

<script>
import wrapdiv from "./wrapdiv.vue";
import player from "./player.vue";
export default {
	components:{
		'wrapdiv': wrapdiv,
		'player':player
	},
	data () {
		return{
			userList:'',
			text:''
		}
	},
	computed:{
    	WAG() {
      		return this.$store.state.WAG;
    	}
	},
	created () {
		this.$ajax({
			url:BASE_URL + '/competitors',
			headers:{
				WAG:this.WAG
			}
		}).then((res)=>{
			this.userList = res.data.data.competitors
		})
	},
	methods:{
		toCollect () {
			this.$router.push('/dreamcar/collect')
		},
		toDescription () {
			this.$router.push('/dreamcar/description')
		},
		search () {
			var tmp = document.getElementsByClassName(this.text)[0] || document.getElementById(this.text)
			if(tmp === null || tmp === undefined){
				alert('请输入正确的编号或昵称')
			}else{
				tmp.scrollIntoView()
			}
		}
	}
}
</script>
 
<style lang='scss' scoped>
.foot{
	width: 100%;
	height: 1.9rem;
	position: fixed;
	display: flex;
	display: -webkit-flex;
	bottom: 0;
	left: 0;
	color: #fff;
	font-size: 0.3rem;
	z-index:10;
	background: #000;
	border-top: 1px dashed #1a3fff;
	box-shadow: 0 0 13px #1a3fff;
	.text1{
		margin: auto;
	}
}
.search{
	width: 0.62rem;
	height: 0.62rem;
	margin: auto;
}
.inp{
	background: rgba(0,0,0,0);
	border: 0;
	color: #fff;
	margin: auto;
	font-size: 0.36rem;
}
.bor{
	margin: auto;
	width: 1px;
	margin: auto 0.2rem;
	height: 0.58rem;
	box-shadow: 0px 0px 13px #1a3fff ;
	background: -webkit-linear-gradient(top,#163a96,#3ea9ea,#163a96)
}
.head{
	background: url('../../../assets/active/dreamcar/game-1.jpg');
	background-size: 100% 100%;
	margin: auto;
	width: 100%;
	height: 8.65rem;
}
</style>
