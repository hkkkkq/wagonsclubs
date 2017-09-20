<template>
    <div>
        <div class="g1">
            <p style="width: 6.5rem;margin: auto;">加入WAGONS会员目前有两种方式，您可以任选一种自己喜欢的方式办理</p>
        </div>
        <div class="m">
            <p>Method 1</p>
            <h1></h1>
            <h2>缴纳会费</h2>
            <table class="tb1">
                <tr>
                    <td style="width:2.35rem;border-right: 1px solid #3d454d;">银卡会员</td>
                    <td style="width:4.75rem">缴纳
                        <span>20</span>万元先进办理</td>
                </tr>
                <tr style="border-bottom: 1px solid #3d454d;border-top: 1px solid #3d454d;">
                    <td style="border-right: 1px solid #3d454d;">金卡会员</td>
                    <td>缴纳
                        <span>50</span>万元先进办理</td>
                </tr>
                <tr>
                    <td style="border-right: 1px solid #3d454d;">白金会员</td>
                    <td>缴纳
                        <span>100</span>万元先进办理</td>
                </tr>
            </table>
            <h3>
                <span></span>
                <p>办理会员满一年可申请退费</p>
            </h3>
            <h3>
                <span></span>
                <p>成为会员后租车无需缴纳押金（个别车型除外）</p>
            </h3>
            <h3>
                <span></span>
                <p>会员长期有效，退费时无效</p>
            </h3>
            <h3>
                <span></span>
                <p>个别车型需要补交押金可以通过pos预授权、支付宝或微信支付、银行卡支付，冻结火球资金等方式扣取</p>
            </h3>
        </div>
        <div class="m">
            <p>Method 2</p>
            <h1></h1>
            <h2>购买合作方私募或公募基金</h2>
            <table class="tb1">
                <tr>
                    <td style="vertical-align: middle;width:2.35rem;border-right: 1px solid #3d454d;">银卡会员</td>
                    <td class="ttt" style="width:4.75rem">仅支持缴纳会费形式申请</td>
                </tr>
                <tr style="border-bottom: 1px solid #3d454d;border-top: 1px solid #3d454d;">
                    <td style="vertical-align: middle;border-right: 1px solid #3d454d;">金卡会员</td>
                    <td class="ttt">购买或已持有合作方私募基金
                        <span>100万</span>（一年起）及以上或<br>购买或已持有合作方公募基金
                        <span>100万</span>（一年起）及以上</td>
                </tr>
                <tr>
                    <td style="vertical-align: middle;border-right: 1px solid #3d454d;">白金会员</td>
                    <td class="ttt">购买或已持有合作方私募基金
                        <span>200万</span>（一年起）及以上或<br>购买或已持有合作方公募基金
                        <span>200万</span>（一年起）及以上</td>
                </tr>
            </table>
            <a class="simu" href="https://toweringcapital.cn/?pcode=wagons">点此了解或购买合作方私募基金</a>
            <h3>
                <span></span>
                <p>用户在用车时需确保持有基金份额达到指定份额</p>
            </h3>
            <h3>
                <span></span>
                <p>成为会员后租车无需缴纳押金（个别车型除外）</p>
            </h3>
            <h3>
                <span></span>
                <p>会员在基金持有期间有效</p>
            </h3>
            <h3>
                <span></span>
                <p>个别车型需要补交押金可以通过pos预授权、支付宝或微信支付、银行卡支付，冻结火球资金等方式扣取</p>
            </h3>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.simu {
    -webkit-tap-highlight-color: transparent;
    font-size: 0.24rem;
    display: block;
    margin-left: 0.4rem;
    color: cornflowerblue;
    margin-top: 0.3rem;
    text-decoration: none;
    margin-bottom: 0.1rem;
}

.ttt {
    padding-left: 0.45rem;
    padding-right: 0.5rem;
    text-align: left;
    line-height: 0.5rem;
    padding-top: 0.32rem;
    padding-bottom: 0.32rem;
}

.m h3 p {
    display: inline-block;
    width: 6.2rem;
    line-height: 0.5rem;
}

.m h3 span {
    background: #999999;
    width: 4px;
    height: 4px;
    display: inline-block;
    border-radius: 10px;
    margin-left: 10px;
    margin-right: 0.3rem;
    vertical-align: top;
    position: relative;
    top: 10px;
}

.m h3 {
    color: #999999;
    font-size: 0.22rem;
    width: 7.1rem;
    display: block;
    margin: auto;
    /* margin-top: 0.3rem; */
    /* margin-bottom: 0.3rem; */
}

.tb1 span {
    color: #fcd82f;
}

.tb1 tr {
    height: 1rem;
    line-height: 1rem;
}

.tb1 {
    width: 7.1rem;
    display: block;
    margin: auto;
    text-align: center;
    font-size: 0.24rem;
    color: #acacac;
    background: #273039;
    margin-top: 0.32rem;
    margin-bottom: 0.28rem;
}

.m>h2 {
    color: #fcd82f;
    font-size: 0.24rem;
    margin: auto;
    text-align: center;
    margin-top: 0.28rem;
}

.m>h1 {
    background: #273039;
    height: 1px;
    width: 7.1rem;
    margin: auto;
    display: block;
    position: relative;
    top: -0.15rem;
    z-index: 0;
}

.m>p {
    font-size: 0.28rem;
    color: #ffffff;
    width: 2rem;
    margin: auto;
    text-align: center;
    position: relative;
    z-index: 1;
    display: block;
    background: rgb(15, 25, 35);
}

.m {
    margin-top: 0.8rem;
}

.g1 {
    background: #273039;
    font-size: 0.24rem;
    color: #acacac;
    height: 1.5rem;
    width: 7.1rem;
    margin: auto;
    display: -webkit-flex;
}
</style>
