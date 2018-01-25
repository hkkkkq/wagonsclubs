<template>
  <div class="description">
	  <p style="height: 1px;"></p>
	  <img style="width:2.63rem;height:0.53rem;margin:0.4rem auto; display: block;" src="../../../assets/active/dreamcar/DClogo.png">
	  <p class="blue">活动时间</p>
	  <h1 class='date'>1月25日10点至1月31日10点</h1>
	  <p class="blue">活动规则</p>
	  <wrapdiv class="rules" pwidth=6.6 pheight=3.14>
		  <p style="margin-top: 0.4rem;"><span>1、</span><b>#新年小目标#晒出你与梦想战车的合照，即可参与活动</b></p>
		  <p><span>2、</span><b>邀请好友为你投票，有机会领取豪车使用权</b></p>
		  <p><span>3、</span><b>关注公众号后，每人每天最多可以为同一好友投票5次</b></p>
		  <p  style="margin-bottom: 0.4rem;"><span>4、</span><b>获奖名单将于2月1日在WAGONS光速超跑公众号公布</b></p>
	  </wrapdiv>
	  <p class="blue">豪奖说明</p>
	  <wrapdiv class="rules" pwidth=6.6 pheight=4.1>
		  <p style="margin-top: 0.4rem;"><span>1、</span><b>人气一等奖：票数第一名可获法拉利458一天使用权</b></p>
		  <p><span>2、</span><b>人气二等奖：票数第二名可获得奔驰SLS一天使用权</b></p>
		  <p><span>3、</span><b>人气三等奖：票数第三名可获得法拉利加州一天使用权</b></p>
		  <p><span>4、</span><b>最佳创意奖：WAGONS选出2名最富创意用户可分别获得劳斯莱斯商务接驾一次</b></p>
		  <p  style="margin-bottom: 0.4rem;"><span>5、</span><b>神队友投票奖：WAGONS选出10名用户赠送定制豪车日历</b></p>
	  </wrapdiv>
	  <p class="blue">使用规则</p>
	  <wrapdiv class="rules" pwidth=6.6 pheight=3>
		  <p style="margin-top: 0.4rem;"><span>1、</span><b>超跑一天使用权按照24小时计算，取车时间为10：00-19：00</b></p>
		  <p><span>2、</span><b>获奖用户免除用车租金费用，额外产生的费用、违章费、过路费等需要用户自理</b></p>
		  <p style="margin-bottom: 0.4rem;"><span>3、</span><b>办理用车需要携带您的身份证、驾驶证</b></p>
	  </wrapdiv>
	  <h2>【温馨提示】</h2>
	  <h2>为了保证活动结果的公平、公正，严禁任何通过技术手段恶意刷票行为，一经发现将取消参赛资格</h2>
	  <p class="border"></p>
	  <h3>官方客服：400-625-700</h3>
	  <h3 style="padding-bottom:1rem"><span style="vertical-align: top;;width: 1.5rem;">门店地址：</span><span style="width:4.5rem">北京市东城区当代MOMA商务中心一层WAGONS光速超跑</span></h3>
  </div>
</template>

<script>
import wrapdiv from "./wrapdiv.vue";
export default {
	components:{
		'wrapdiv': wrapdiv
	},
	data(){
		return{}
	}
}
</script>

<style lang='scss' scoped>
.description{
	background: url('../../../assets/active/dreamcar/description-bg.jpg');
    background-size: 100% 8.65rem;
	color: #fff;
    height: auto;
    background-repeat: no-repeat;
    background-color: #000;
	.blue{
		color: #1778ff;
		font-size: 0.36rem;
		text-align: center;
		margin: 0.32rem auto;
	}
	.date{
		font-size: 0.375rem;
		text-align: center;
	}
	.rules{
		display: flex;
		display: -webkit-flex;
		flex-direction: column;
		margin: 0.32rem auto;
		p{
			margin: auto;
			font-size: 0.24rem;
			width: 100%;
			display: flex;
    		display: -webkit-flex;
		    line-height: 0.4rem;
			>span{
				display: inline-block;
				width: 0.5rem;
				text-align: right;
			}
			>b{
				display: inline-block;
				width: 5.8rem;
			}
		}
	}
	h2{
		font-size: 0.22rem;
		width: 6.1rem;
		margin: auto;
		line-height: 0.4rem;
	}
	h3{
		font-size: 0.28rem;
		width: 6.1rem;
		margin: auto;
		line-height: 0.4rem;
		>span{
			display: inline-block;
		}
	}
	.border{
		height: 1px;
		border-top: 1px dashed #1a3fff;
		box-shadow: 0 0 13px #1a3fff;
		margin: 0.54rem auto;
	}
}
</style>
