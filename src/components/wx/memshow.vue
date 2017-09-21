<template>
    <div style="position:absolute;width:100%;height:100%">
        <div style="width:100%;min-height:100%;background:#0f1923">
            <div class="ban">
                <img class="hg" src="../../assets/app/lchg.png">
                <img class="banimg" src="../../assets/app/slc.png">
                <p class="planname">乐巢计划会员</p>
                <p class="plandate">2017.05.27-2018.05.27有效</p>
            </div>
            <!-- 订单 -->
            <div>
                <p class="ti">
                    <span class="ty">当前订单</span>
                </p>
                <div class="car">
                    <img src="../../assets/app/slc.png">
                    <div>
                        <p class="d1">
                            <span class="d1s">使用中</span>
                            <span class="d1n">法拉利兰博基尼</span>
                        </p>
                        <p class="d2">
                            剩余<span class="hour">2天3小时</span>
                        </p>
                    </div>
                </div>
            </div>
            <!-- 特权 -->
            <div>
                <p class="ti">
                    <span class="ty">我的特权</span>
                    <span class="tc">套餐升级</span>
                </p>
            </div>

        </div>
    </div>
</template>

<script>
require('../app/rem.js')(window, document)
export default {

}
</script>

<style scoped>
.tc{
    color: #009cff;
    float: right;
    font-size: 0.24rem;
}
.hour {
    color: #4ac87a;
}

.d2 {
    margin-top: 0.28rem;
    font-size: 0.3rem;
    color: #999999;
    letter-spacing: 1px;
}

.d1n {
    color: #ffffff;
    font-size: 0.24rem;
    margin-left: 0.3rem;
}

.d1 {
    margin-top: 0.3rem;
}

.d1s {
    font-size: 0.2rem;
    background: #4ac87a;
    color: #ffffff;
}

.car>div {
    display: inline-block;
    margin-left: 0.3rem;
    height: 100%;
    width: 4rem;
    vertical-align: top;
}

.car img {
    width: 2.6rem;
    height: 100%;
    border-top-left-radius: 0.04rem;
    display: inline-block;
    border-bottom-left-radius: 0.04rem;
}

.car {
    width: 7.1rem;
    height: 1.3rem;
    background: #273039;
    border-radius: 0.04rem;
    margin: auto;
    font-size: 0;
}

.ty {
    font-size: 0.24rem;
    color: #ffffff;
}

.ti {
    font-size: 0;
    width: 6.68rem;
    border-left: 0.04rem solid #fed945;
    margin: auto;
    padding-left: 0.12rem;
    padding-right: 0.3rem;
    margin-top: 0.3rem;
    margin-bottom: 0.12rem;
}

.plandate {
    color: #ffffff;
    font-size: 0.24rem;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 2.9rem;
    text-align: center;
}

.planname {
    font-weight: bolder;
    font-size: 0.3rem;
    color: #ffffff;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    top: 2.4rem;
}

.hg {
    position: absolute;
    width: 1.4rem;
    height: 1.4rem;
    left: 0;
    right: 0;
    margin: auto;
    top: 0.8rem;
}

.banimg {
    width: 100%;
    height: auto;
}

.ban {
    font-size: 0;
    display: block;
    width: 100%;
    height: auto;
    position: relative;
}
</style>
