<template>
<div class="productpic">
	<wrapdiv class="wrap" pheight=13 pwidth=6.9>
		<div class="blackbg"></div>
		<img style="width:2.63rem;height:0.53rem;margin:0.4rem auto; display: block;" src="../../../assets/active/dreamcar/DClogo.png">
		<div class="paper">
			<p style="position:relative;top:-0.2rem">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</p>
			<h1>{{userinfo.declaration}}</h1>
			<img crossorigin="*" :src="userinfo.pic">
			<div>
				<div>
					<span class="name">{{userinfo.nickName}}</span>
					<span class="num">{{userinfo.no}}号选手</span>
				</div>
				<div>
					<p style="color:#0065f7">>></p>
					<p>长按识别</p>
					<p>二维码为我投票</p>
				</div>
				<div>
					<img src="../../../assets/dingyuehao1.png">
				</div>
			</div>
			<p style="position: absolute;bottom: -0.2rem;">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</p>
		</div>
	</wrapdiv>
	<div class="bottom">
		<wrapdiv v-if="openId == WAG" @click.native="GoBack" class="but" pwidth=1.77 pheight=0.66>重新生成</wrapdiv>
		<wrapdiv v-if="openId == WAG" @click.native="GoIndex" class="but" pwidth=1.77 pheight=0.66>我的排行</wrapdiv>
		<wrapdiv @click.native="getimg" class="but" pwidth=1.77 pheight=0.66>分享拉票</wrapdiv>
	</div>
	<transition name="fade">
	<div @click="closezz()" v-show="zz" class="zz">
		<img class="canvasimg">
		<p>
			{{zztext?'长按图片保存至本地，分享朋友圈':'请稍候，图片正在加载中'}}
		</p>
	</div>
	</transition>
</div>
</template>

<script>
import wrapdiv from "./wrapdiv.vue";
import html2canvas from 'html2canvas';
export default {
	components:{
		'wrapdiv': wrapdiv,
	},
	data () {
		return{
			zz:false,
			zztext:false,
			userinfo:'',
			openId:''
		}
	},
	computed:{
    	WAG() {
      		return this.$store.state.WAG;
    	}
	},
	created () {
		this.openId = this.$route.query.openId
		// alert(this.WAG)
		this.$ajax({
			url: BASE_URL + '/competitor',
			method: 'get',
			headers:{WAG:this.openId}
		}).then((res)=>{
			var vm = this
			this.userinfo = res.data.data.competitor
		})
	},
	methods:{
		getimg(){
			this.zz = true;
			var vm = this
			html2canvas(document.getElementsByClassName('wrap')[0],{useCORS:true}).then(function(canvas) {
    			document.getElementsByClassName('canvasimg')[0].src = canvas.toDataURL();
				vm.zztext = true
			});
		},
		closezz(){
			this.zz = false;
			this.zztext = false;
		},
		GoBack () {
			this.$router.push('/dreamcar/game')
		},
		GoIndex () {
			this.$router.push('/dreamcar/vote')
		}
	}
}
</script>

<style lang='scss' scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.zz{
	position: fixed;
	width: 100%;
	z-index: 100;
	height: 100%;
	background: rgba(0,0,0,0.8);
	top: 0;
	display: flex;
	display: -webkit-flex;
	color: #999;
	font-size: 0.18rem;
	flex-direction: column;
    left: 0;
	img{
		width: 70%;
    	margin: auto;
		-webkit-touch-callout: default;
	}
	p{
		text-align: center;
    	margin: auto;
	}
}
.bottom{
	font-size: 0.23rem;
	width: 100%;
	background: #000;
	display: flex;
	display: -webkit-flex;
	.but{
		text-align: center;
		line-height: 0.5rem;
		text-indent: 0.34rem;
		color: #fff;
		background: #0b49ff;
	}
}
.productpic{
	position: absolute;
	width: 100%;
	height: 15.25rem;
	background: url('../../../assets/active/dreamcar/productpic-2.jpg');
	background-size: 100% 100%;
	.wrap{
		margin:0.43rem auto;
		flex-direction: column;
		background: url('../../../assets/active/dreamcar/productpic-1.png');
		background-size: 100% 5.1rem;
		background-repeat: no-repeat;
		background-position-y: 7.9rem;
		// background: #000;
		.blackbg{
			background: #000;
			width: 6.8rem;
			height: 8.55rem;
			position: absolute;
			z-index: -1;
		}
	}
	.paper{
		width: 6.4rem;
		height: 7.2rem;
		background: #fff;
		position: relative;
		margin: 0 auto;
		h1{
			width: 90%;
			height: 0.7rem;
			font-size: 0.3rem;
			text-align: center;
			margin: auto;
		}
		img{
			width: 90%;
			height: auto;
			margin: auto;
			display: block;
		}
		>div{
			display: flex;
			display: -webkit-flex;
			height: 2rem;
			width: 90%;
    		margin: auto;
			>div{
				margin: auto;
				margin-bottom: 0;
				span{
					display: block;
				}
				.name{
					font-size:0.43rem;
					font-weight: 600;
					position: relative;
    				top: -0.5rem;
				}
				.num{
					font-size:0.34rem;
					position: relative;
					top: -0.1rem;
				}
				>p{
					font-size: 0.12rem;
					text-align: right;
					font-weight: 300;
				}
			}
		}
		>p{
			width: 100%;
			display: flex;
			display: -webkit-flex;
			>span{
				display: block;
				width: 0.3rem;
				height: 0.3rem;
				margin: auto;
				border-radius: 100px;
				background: #000;
			}
		}
	}
}
</style>
