<template>
<div style="font-family: PingFangSC-Medium, sans-serif;" class="join_us">
            <div class="none_box"></div>
            <div class="method">
                <p>加入Wagons会员目前有两种方式</p>
                <p>您可以任选一种自己喜欢的方式办理</p>
            </div>

            <div class="method_1">
                <h5 class="head">
                    <i class="line" style="left:2.67rem;"></i>
                    <i class="line" style="right:2.67rem;"></i>
                    <p>Method 1</p>
                </h5>
                <h6 class="pay">缴纳会费</h6>

<div class="box">
                    <ul>
                        <li>
                            <i>银卡会员</i>
                            <span>缴纳<b style="color:#f65641;">20万</b>现金办理</span>
                        </li>
                        <li>
                            <i>金卡会员</i>
                            <span>缴纳<b style="color:#f65641;">50万</b>现金办理</span>
                        </li>
                        <li>
                            <i>白金会员</i>
                            <span>缴纳<b style="color:#f65641;">100万</b>现金办理</span>
                        </li>
                        <li>
                            <i>企业精英卡会员</i>
                            <span>缴纳<b style="color:#f65641;">100万</b>现金办理</span>
                        </li>
                        <li>
                            <i style="border-bottom:none;">企业至尊卡会员</i>
                            <span style="border-bottom:none;">缴纳<b style="color:#f65641;">200万</b>现金办理</span>
                        </li>
                    </ul>
                </div>

                <ul class="rule_list">
                    <li>
                        <b><i></i></b>
                        <em>办理会员满一年可申请退费</em>
                    </li>
                    <li>
                        <b><i></i></b>
                        <em>成为会员后用车无需缴纳押金（个别车型除外）</em>
                    </li>
                    <li>
                        <b><i></i></b>
                        <em>会员长期有效，退费时失效</em>
                    </li>
                    <li>
                        <b><i></i></b>
                        <em>个别车型补交押金时，可以通过pos预授权、支付宝或微信支付、银行卡支付、冻结火球资金等方式扣取</em>
                    </li>
                </ul>
            </div>
            <div class="method_2">
                <h5 class="head">
                    <i class="line" style="left:2.67rem;"></i>
                    <i class="line" style="right:2.67rem;"></i>
                    <p>Method 2</p>
                </h5>
                <h6 class="pay">购买合作方私募或公募基金</h6>
                <div class="box">
                    <ul>
                        <li>
                            <i>银卡会员</i>
                            <span>仅支持缴纳会费形式申请</span>
                        </li>
                        <li style="height:1.97rem;">
                            <i style="height:1.97rem;line-height:1.97rem;">金卡会员</i>
                            <span style="height:1.97rem;text-align:left;line-height:0.46rem;padding:0.08rem 0.2rem 0;box-sizing:border-box;">购买或已持有合作方私募基金<b style="color:#f65641;">100万</b>（一年起）及以上或<br>购买或已持有合作方公募基金<b style="color:#f65641;">100万</b>（一年起）及以上或</span>
                        </li>
                        <li style="height:2rem;">
                            <i style="border-bottom:none;height:2rem;line-height:2rem;">白金会员</i>
                            <span style="border-bottom:none;height:2rem;text-align:left;line-height:0.46rem;padding:0.12rem 0.2rem 0;box-sizing:border-box;">购买或已持有合作方私募基金<b style="color:#f65641;">200万</b>（一年起）及以上或<br>购买或已持有合作方公募基金<b style="color:#f65641;">200万</b>（一年起）及以上或</span>
                        </li>
                    </ul>
                </div>
                <a class="simu" href="https://toweringcapital.cn/?pcode=wagons">点此了解或购买合作方私募基金</a>
                
                <ul class="rule_list">
                    <li>
                        <b><i></i></b>
                        <em>用户在用车时需确保持有基金份额达到指定份额</em>
                    </li>
                    <li>
                        <b><i></i></b>
                        <em>成为会员后用车无需缴纳押金（个别车型除外）</em>
                    </li>
                    <li>
                        <b><i></i></b>
                        <em>会员在基金持有期间有效</em>
                    </li>
                    <li>
                        <b><i></i></b>
                        <em>个别车型补交押金时，可以通过pos预授权、支付宝或微信支付、银行卡支付、冻结火球资金等方式扣取</em>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){
        window.scrollTo(0,0);
    },
    mounted(){
        window.scrollTo(0,0);
    }

}
</script>

<style scoped>
.simu{
    -webkit-tap-highlight-color:transparent;
     font-size: 0.24rem;
    display: block;
    margin-left: 0.3rem;
    color: cornflowerblue;
    margin-top: 0.3rem;
    background: white;
    text-decoration: none;

}
.method_2 .rule_list li em {
    padding-top: 0.025rem;
    width: 6rem;
    float: left;
    font-size: 0.24rem;
    line-height: 0.45rem;
    color: #343434;
}
.method_2 .rule_list li b i {
    display: block;
    width: 0.09rem;
    height: 0.09rem;
    border-radius: 400px;
    background: url() center center no-repeat #252525;
    background-size: 100% 100%;
}
.method_2 .rule_list li b {
    width: 0.18rem;
    height: 0.3rem;
    float: left;
    padding-top: 0.18rem;
}
.method_2 .rule_list li {
    overflow: hidden;
}
.method_2 .rule_list {
    width: 6.19rem;
    margin: 0 auto;
    padding-top: 0.4rem;
}
.method_2 .box ul li span {
    float: left;
    width: 70%;
    height: 0.65rem;
    line-height: 0.65rem;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 1px solid #d7d7d7;
}
.method_2 .box ul li i {
    float: left;
    width: 30%;
    height: 0.65rem;
    line-height: 0.65rem;
    text-align: center;
    box-sizing: border-box;
    border-right: 1px solid #d7d7d7;
    border-bottom: 1px solid #d7d7d7;
}
.method_2 .box ul li {
    height: 0.65rem;
    overflow: hidden;
    font-size: 0.24rem;
    color: #252525;
}
.method_2 .box ul {
    width: 6.19rem;
    height: 4.63rem;
    margin: 0 auto;
    background-color: #fff;
}
.method_2 .box {
    width: 6.46rem;
    height: 4.89rem;
    margin: 0 auto;
    padding-top: 0.13rem;
    box-sizing: border-box;
    background-color: #f3f3f3;
}
.method_2 .pay {
    height: 0.58rem;
    color: #252525;
    font-size: 0.26rem;
    text-align: center;
}
.method_2 .head .line {
    position: absolute;
    top: 0.1rem;
    width: 0.12rem;
    height: 1px;
    background-color: #ffd320;
}
.method_2 .head {
    position: relative;
    height: 0.48rem;
    font-size: 0.24rem;
    text-align: center;
}
.method_2 {
    width: 6.83rem;
    margin: 0 auto 1rem;
    padding: 0.5rem 0;
    box-sizing: border-box;
}
.method_1 .rule_list li em {
    padding-top: 0.025rem;
    width: 6rem;
    line-height: 0.45rem;
    float: left;
    font-size: 0.24rem;
    color: #343434;
}
.method_1 .rule_list li b i {
    display: block;
    width: 0.09rem;
    height: 0.09rem;
    border-radius: 400px;
    background: url() center center no-repeat #252525;
    background-size: 100% 100%;
}
.method_1 .rule_list li b {
    width: 0.18rem;
    height: 0.3rem;
    float: left;
    padding-top: 0.18rem;
}
.method_1 .box ul li span {
    float: left;
    width: 70%;
    height: 0.65rem;
    line-height: 0.65rem;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 1px solid #d7d7d7;
}
.method_1 .box ul li i {
    float: left;
    width: 30%;
    height: 0.65rem;
    line-height: 0.65rem;
    text-align: center;
    box-sizing: border-box;
    border-right: 1px solid #d7d7d7;
    border-bottom: 1px solid #d7d7d7;
}
.method_1 .rule_list li {
    overflow: hidden;
}
.method_1 .rule_list {
    width: 6.19rem;
    margin: 0 auto;
    padding-top: 0.4rem;
}
.method_1 .box ul li {
height: 0.65rem;
    overflow: hidden;
    font-size: 0.24rem;
    color: #252525;
}
.method_1 .box ul {
    width: 6.19rem;
    height: 3.26rem;
    margin: 0 auto;
    background-color: #fff;
}
.method_1 .box {
    width: 6.46rem;
    height: 3.53rem;
    margin: 0 auto;
    padding-top: 0.13rem;
    box-sizing: border-box;
    background-color: #f3f3f3;
}
.method_1 .pay {
    height: 0.58rem;
    color: #252525;
    font-size: 0.26rem;
    text-align: center;
}
.method_1 .head .line {
    position: absolute;
    top: 0.1rem;
    width: 0.12rem;
    height: 1px;
    background-color: #ffd320;
}
.method_1 .head {
    position: relative;
    height: 0.48rem;
    font-size: 0.24rem;
    text-align: center;
}
.method_1 {
    width: 6.83rem;
    margin: 0 auto;
    padding: 0.5rem 0;
    box-sizing: border-box;
    border-bottom: 1px dashed #dcdcdc;
}
.method p {
        color: #252525;
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.24rem;
}
.method {
    width: 100%;
    height: 1.41rem;
    background-color: #f6f6f6;
    padding-top: 0.2rem;
    box-sizing: border-box;
}
</style>