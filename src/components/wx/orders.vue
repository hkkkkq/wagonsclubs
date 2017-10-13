<template>
    <div style="position:absolute;width:100%;height:100%">
        <div style="min-height:100%;background:#0f1923;width:100%">
            <h1 style="width:100%;height:0.2rem"></h1>
            <div :key="index" v-for="(item,index) in resdata.data.orderList" class="one">
                <p class="title">
                    <span class="carname">{{item.carName}}</span>
                    <span v-if="item.orderType == 0" class="status0">待接单</span>
                    <span v-if="item.orderType == 1" class="status0">准备中</span>
                    <span v-if="item.orderType == 2" class="status0">送车中</span>
                    <span v-if="item.orderType == 3" class="status0">使用中</span>
                    <span v-if="item.orderType == 4" class="status2">已还车</span>
                    <img v-if="item.orderType == 5" class="ordered" src="../../assets/app/ordered1.png">
                    <span v-if="item.orderType == 6" class="status3">已还车</span>
                </p>
                <div @click="toOrderDetail(item.orderId)" class="info">
                    <img :src="item.carImage">
                    <div class="deta">
                        <p>下单时间：
                            <span>{{item.orderTime}}</span>
                        </p>
                        <p>{{item.orderDayPrice}}</p>
                    </div>
                </div>
            </div>
            <!-- <div class="one">
                                    <p class="title">
                                        <span class="carname">法拉利兰博基尼</span>
                                        <span class="status1">使用中</span>
                                    </p>
                                    <div class="info">
                                        <img src="../../assets/app/slc.png">
                                        <div class="deta">
                                            <p>下单时间：<span>2017-8-18 16:16</span></p>
                                            <p>租用三天：已付 ¥5000.00</p>                        
                                        </div>
                                    </div>
                                </div>
                                <div class="one">
                                    <p class="title">
                                        <span class="carname">法拉利兰博基尼</span>
                                        <span class="status2">使用中</span>
                                    </p>
                                    <div class="info">
                                        <img src="../../assets/app/slc.png">
                                        <div class="deta">
                                            <p>下单时间：<span>2017-8-18 16:16</span></p>
                                            <p>租用三天：已付 ¥5000.00</p>                        
                                        </div>
                                    </div>
                                </div>
                              <div class="one">
                                    <p class="title">
                                        <span class="carname">法拉利兰博基尼</span>
                                        <span class="status3">已取消</span>
                                    </p>
                                    <div class="info">
                                        <img src="../../assets/app/slc.png">
                                        <div class="deta">
                                            <p>下单时间：<span>2017-8-18 16:16</span></p>
                                            <p>租用三天：已付 ¥5000.00</p>                        
                                        </div>
                                    </div>
                                </div>
                                <div class="one">
                                    <p class="title">
                                        <span class="carname">法拉利兰博基尼</span>
                                        <span class="status0">使用中</span>
                                        <img class="ordered" src="../../assets/app/ordered1.png">
                                    </p>
                                    <div class="info">
                                        <img src="../../assets/app/slc.png">
                                        <div class="deta">
                                            <p>下单时间：<span>2017-8-18 16:16</span></p>
                                            <p>租用三天：已付 ¥5000.00</p>                        
                                        </div>
                                    </div>
                                </div> -->
            <div class="nomore">
                <img src="../../assets/app/nomore.png">
            </div>
        </div>
    </div>
</template>

<script>
require('../app/rem.js')(window, document)
export default {
    data() {
        return {
            resdata: ''
        }
    },
    created() {
        var vm = this
        //获取openid
        this.$store.commit('setOpenId', this.$route.query.WAG)
        //isbinding
        this.$ajax({
            url: BASE_URL + "/car/isBinding",
            method: 'GET',
            headers: { 'WAG': this.$route.query.WAG }
        })
            .then((res) => {
                if (res.data.success == false) {
                    vm.$router.push('/wx/login')
                } else {
                    vm.$ajax(BASE_URL + "/car/orderList")
                        .then((res) => { this.resdata = res.data })
                }
            })
    },
    methods:{
        toOrderDetail(id){
            this.$router.push('/wx/orderdetail?id='+id)
        }
    }
}
</script>

<style scoped>
.ordered {
    width: 1rem;
    float: right;
    margin-right: 0.3rem;
}

.nomore img {
    width: 100%;
    margin-top: 0.5rem;
}

.nomore {
    width: 100%;
    font-size: 0;
}

.deta p {
    font-size: 0.24rem;
    color: #999999;
    line-height: 0.4rem;
}

.deta {
    display: inline-block;
    vertical-align: top;
    margin-top: 0.3rem;
}

.info img {
    width: 2.6rem;
    height: 100%;
    display: inline-block;
    margin-right: 0.32rem;
    border-top-left-radius: 0.04rem;
    border-bottom-left-radius: 0.04rem;
}

.info {
    display: block;
    width: 100%;
    height: 1.3rem;
    background: #1b252e;
    font-size: 0;
}

.status0 {
    background: #ff4f5b;
    color: rgba(0, 0, 0, 0.4);
    display: inline-block;
    width: 0.88rem;
    height: 0.28rem;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.28rem;
    float: right;
    margin-right: 0.3rem;
    border-radius: 0.04rem;
    margin-top: 0.35rem;
}

.status1 {
    background: #4ac87a;
    color: rgba(0, 0, 0, 0.4);
    display: inline-block;
    width: 0.88rem;
    height: 0.28rem;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.28rem;
    float: right;
    margin-right: 0.3rem;
    border-radius: 0.04rem;
    margin-top: 0.35rem;
}

.status2 {
    background: #fed945;
    color: rgba(0, 0, 0, 0.4);
    display: inline-block;
    width: 0.88rem;
    height: 0.28rem;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.28rem;
    float: right;
    margin-right: 0.3rem;
    border-radius: 0.04rem;
    margin-top: 0.35rem;
}

.status3 {
    /* background: #fed945; */
    color: #666666;
    display: inline-block;
    width: 0.88rem;
    height: 0.28rem;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.28rem;
    float: right;
    margin-right: 0.3rem;
    border-radius: 0.04rem;
    margin-top: 0.35rem;
}

.carname {
    font-size: 0.26rem;
    color: #ffffff;
    margin-left: 0.3rem;
    vertical-align: top;
    position: relative;
    top: 0.35rem;
}

.one {
    width: 7.1rem;
    display: block;
    margin: auto;
    height: auto;
    margin-top: 0.2rem;
}

.title {
    width: 100%;
    background: #273039;
    border-top-left-radius: 0.04rem;
    border-top-right-radius: 0.04rem;
    height: 1rem;
}
</style>
