<template>
  <div style="font-size:0.28rem;color:#fff;background:#000">
	  <div class="head">
		  <p style="height:1px"></p>
	  	  <img style="width:2.63rem;height:0.53rem;margin:0.4rem auto; display: block;" src="../../../assets/active/dreamcar/DClogo.png" />
		  <div class="pic">
			  <input ref="file1" @change="changeimg()" type="file" accept="image/*">
			  <img :src="src">
		  </div>
		  <wrapdiv style="margin:0.3rem auto" pheight=1.8 pwidth=6.65>
			  <textarea v-model="declaration" placeholder="请输入您的参赛宣言，限30字内" class="text">
			  </textarea>
		  </wrapdiv>
		  <wrapdiv class="line" pheight=1.2 pwidth=6.65>
			  <span class="name">昵称</span>
			  <span class="bor"></span>
			  <input v-model="nickName" placeholder="请输入您的昵称" class="value"/>
		  </wrapdiv>
	  </div>
	  <div class="foot">
		  <div @click="toproductpic" class="sub"></div>
		<wrapdiv class="line" pheight=1.2 pwidth=6.65>
			  <span class="name">联系方式</span>
			  <span class="bor"></span>
			  <input v-model="cell" placeholder="获奖将通过此号码与您联系" class="value"/>
		  </wrapdiv>
	  </div>
	  <div v-show="changed" class="crop">
		  <button @click="confirm">确定</button>
		<VueCropper
			class="cropdiv"
			ref='cropper'
			:img='option.img' 
			:outputSize="option.size"
			:outputType="option.outputType"
			:info="option.info"
			:canScale="option.canScale"
			:autoCrop="option.autoCrop"
			:autoCropWidth="option.autoCropWidth"
			:autoCropHeight="option.autoCropHeight"
			:fixed="option.fixed"
			:fixedNumber="option.fixedNumber"
    	></VueCropper>
	  </div>
	
  </div>
</template>

<script>
import VueCropper from "vue-cropper";
import qs from 'qs';
import wrapdiv from "./wrapdiv.vue";
export default {
	components:{
		'wrapdiv': wrapdiv,
		'VueCropper':VueCropper
	},
	data () {
		return{
			src:'/static/img/game-2.jpg',
			pic: new Blob(),
			changed:false,
			params:new FormData(),
			declaration:'',
			nickName:'',
			cell:'',
			userinfo:'',
			imageUrl:'',
			option:{
				img:'/static/img/game-2.jpg',
				info: true,
				size: 1,
				outputType: 'jpeg',
				canScale: false,
				autoCrop: true,
				// 只有自动截图开启 宽度高度才生效
				autoCropWidth: 126,
				autoCropHeight: 81,
				// 开启宽度和高度比例
				fixed: true,
				fixedNumber: [14, 9]
      		}
		}
	},
	watch: {
		declaration (val) {
			if (val.length > 29){
				alert('限制30字以内')
				this.declaration = val.substring(0,30)
			}
		}
	},
	computed:{
    	WAG() {
      		return this.$store.state.WAG;
    	}
	  },
	created () {
		this.$ajax({
			url: BASE_URL + '/competitor',
			method: 'get',
			// headers:{WAG:this.WAG}
			headers:{WAG:this.WAG}
		}).then((res)=>{
			var vm = this
			this.userinfo = res.data.data.competitor
			this.declaration = this.userinfo.declaration
			this.nickName = this.userinfo.nickName
			if(this.userinfo.pic){
				this.src = this.userinfo.pic
			}
			this.cell = this.userinfo.cell
			this.imageUrl = this.userinfo.pic
			// var img = new Image
			// img.onload = function(e){
			// 	console.log(e)
			// 	// vm.userinfo.pic = e
			// }
			// img.crossOrigin = '*'
			// img.src = this.userinfo.pic;
		})
		// alert(this.WAG)
	},
	methods:{
		changeimg () {
			var vm = this;
			alert("文件大小:" + this.$refs.file1.files[0].size / 1024 + "KB");
			var file = this.$refs.file1.files[0];
			var reader = new FileReader();
			reader.onloadstart = function(e) {
				// console.log("开始读取....");
			};
			reader.onprogress = function(e) {
				// console.log("正在读取中....");
			};
			reader.onabort = function(e) {
				// console.log("中断读取....");
			};
			reader.onerror = function(e) {
				// console.log("读取异常....");
			};
			reader.onload = function(e) {
				vm.option.img = e.target.result;
				vm.changed = true
				// console.log("成功读取....");
			};
			reader.readAsDataURL(file);
		},
		confirm () {
			this.$refs.cropper.getCropData((data)=>{
				this.src = data
				this.changed = false
     		})
			this.$refs.cropper.getCropBlob((data)=>{
				var name = new Date().getTime() + Math.random() + '.jpeg'
	            this.params.append('image',data,name)
				// this.pic = new Object(data)
				// console.log(this.pic)
				// console.log(data)
				this.changed = false
     		})
		},
		toproductpic () {
			if(this.nickName == ''){alert('请输入昵称');return;}
			if(this.declaration == ''){alert('请输入参赛宣言');return;}
			if(this.cell == ''){alert('请输入联系方式');return;}
			if(this.src == '/static/img/game-2.jpg'){alert('请上传图片');return;}
			// var params = new FormData();
			this.params.append('cell',this.cell)
            this.params.append('openId',this.WAG)
            this.params.append('nickName',this.nickName)
            this.params.append('declaration',this.declaration)
            this.params.append('imageUrl',this.imageUrl)
			this.$ajax({
				url:BASE_URL + '/sign',
				method:'POST',
				data:this.params
				// data:qs.stringify({
				// 	cell:this.cell,
				// 	openId:this.WAG,
				// 	nickName:this.nickName,
				// 	declaration:this.declaration,
				// })
			}).then((res)=>{
				alert(res.data.message)
				this.$router.push('/dreamcar/productpic?openId=' + this.WAG)
			}).catch((err)=>{
				alert('错误代号001')
			})
		}
	}
}
</script>

<style lang='scss' scoped>
.sub{
    position: absolute;
    left: 0;
    width: 4rem;
    height: 1.1rem;
    bottom: 1rem;
    right: 0;
    margin: auto;
}
.crop{
	position: fixed;
	z-index: 10;
	width: 100%;
	top:0;
	left: 0;
	height: 100%;
	.cropdiv{
		width: 100%;
		height: 100%;
	}
	button{
		position: absolute;
		z-index: 100;
		background: #6dcaf3;
		border: 0;
		border-radius: 4px;
		color: #fff;
		width: 1rem;
		right: 0.3rem;
		top: 0.3rem;
	}
}
.head{
	background: url('../../../assets/active/dreamcar/game-1.jpg');
	background-size: 100% 8.65rem;
	background-repeat: no-repeat;
	.pic{
		width:6.4rem;
		height: 4.05rem;
		margin: auto;
		position: relative;
		border: 0.18rem solid #fff;
		margin-top: 4.7rem;
		>img{
			width: 100%;
			transform: scale(0.95);
			height: 100%;
		}
		>input{
			position: absolute;
			width: 100%;
			height: 100%;
			background: rgba(0,0,0,0);
			font-size: 0;
			border: 0;
			z-index: 10;
		}
	}
	.text{
		width: 98%;
		height: 92%;
		font-size: 0.28rem;
		color: #fff;
		border: 0;
		background: rgba(0,0,0,0);
	}
}
.line{
	display: flex;
	margin: 0.3rem auto!important;
	display: -webkit-flex;
	.name{
		width: 2rem;
		margin: auto;
		text-align: center;
		margin: auto 0;
	}
	.bor{
		margin: auto;
		width: 1px;
		margin: auto 0.2rem;
		height: 0.58rem;
		box-shadow: 0px 0px 13px #1a3fff ;
		// background: linear-gradient(top,blue,white);
		// background: -linear-gradient(top,blue,white,blue);
		background: -webkit-linear-gradient(top,#163a96,#3ea9ea,#163a96)
	}
	.value{
		margin: auto;
		background: transparent;
		border: 0;
		margin-left: 0;
		color: #fff;
		width: 100%;
		font-size: 0.28rem;
	}
}
.foot{
	background: url('../../../assets/active/dreamcar/game-3.jpg');
	background-size: 100% 100%;
	height: 4.4rem;
	background-repeat: no-repeat;
	position: relative;
}
</style>
