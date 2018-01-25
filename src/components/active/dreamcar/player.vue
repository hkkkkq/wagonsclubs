<template>
  <div :class='item.nickName' :id='item.no' class="player">
	  <div id=2 class="rank">
		  <img src="../../../assets/active/dreamcar/rank.png">
		  <span>{{index + 1}}</span>
	  </div>
	  <div class="content">
		  <div class="con-1">
			  <img :src="item.pic">
			  <p>{{item.declaration}}</p>
		  </div>
		  <p>
			  <span style="float:left">{{item.nickName}}</span>
			  <span style="float:right">{{item.no}}号选手</span>
		  </p>
		  <p>
			  <span>
				  <!-- <img v-if="zaned" @click="zan" class="zan" :class="{'zaned':zaned}" src="../../../assets/active/dreamcar/zaned.png"> -->
				<div @click="zan" class="zan" :class="{'zaned':zaned}"></div>
			  	<b>{{item.praise}}</b>
			  </span>
			  <span style="float:right">
			  	<div @click="toproductpic" class="zan" name='share'></div>
			  	<b>分享</b>
			  </span>
		  </p>
	  </div>
  </div>
</template>
<script>
export default {
	props:['item','index'],
	data () {
		return{
			zaned:false
		}
	},
	computed:{
    	WAG() {
      		return this.$store.state.WAG;
    	}
	},
	methods:{
		toproductpic () {
			this.$router.push('/dreamcar/productpic?openId=' + this.item.openId)
		},
		zan () {
			this.$ajax({
				url:BASE_URL + '/praise?userId=' + this.item.id,
				headers:{
					WAG:this.WAG
				}
			}).then((res)=>{
				if(!res.data.success){
					alert(res.data.message)
				}else{
					this.zaned = true
					this.item.praise = this.item.praise + 1
				}
			})
		}
	}
}
</script>

<style scoped lang='scss'>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.zaned{
	transition: all 0.5s ease-in-out;
	background: url('../../../assets/active/dreamcar/zaned.png')!important;
	background-size: 100% 100%!important;
	transform: rotateY(360deg)!important;
}
.zan{
	transition: all 0.5s ease-in-out;
	background: url('../../../assets/active/dreamcar/zan.png')
}
.player{
	border-top: 1px dashed #1a3fff;
	box-shadow: 0 0 13px #1a3fff;
	background: #000;
	padding-bottom: 0.3rem;
	width: 100%;
	display: flex;
	display: -webkit-flex;
	.rank{
		margin: auto;
		margin-top: 0.5rem;
		margin-right: 0;
		position: relative;
		span{
			color: #1778ff;
			font-size: 0.2rem;
			position: absolute;
			top: 0.35rem;
			left: 0;
			right: 0;
			text-align: center;
		}
		img{
			width: 1rem;
			height: 1.1rem;
		}
	}
	.content{
		margin: auto;
		height: 7rem;
		margin-left: 0;
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		.con-1{
			margin: auto;
			margin-top: 0.5rem;
			width: 5.65rem;
			height: 4.5rem;
			display: flex;
			display: -webkit-flex;
			background: #fff;
			flex-direction: column;
			>img{
				margin: auto;
				width: 5.33rem;
				height: 3.42rem;
			}
			>p{
				margin: auto;
				font-size: 0.3rem;
				text-align: center;
			}
		}
		>p{
			margin: auto;
			width: 100%;
			font-size: 0.35rem;
			color: #fff;
			.zan{
				width: 1rem;
				height: 1rem;
				display: inline-block;
				transform: rotateY(0deg);
				background-size: 100% 100%;
			}
			.zan[name=share]{
				background:  url('../../../assets/active/dreamcar/share.png');
				background-size: 100%;
			}
			b{
				font-size: 0.2rem;
				vertical-align: super;
			}
		}
	}
}
</style>
