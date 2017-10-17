<template>
    <div style="height: 100%;position: absolute;width: 100%;">
        <div style="background:rgb(15, 25, 35);min-height:100%">
            <p style="height:0.2rem"></p>
            <div class="carinfo">
                <img :src="carData.carImage">
                <div class="left">
                    <p class="carname">{{carData.carName}}</p>
                    <span class="carstar">{{carData.carLevel}}</span>
                    <span>{{carData.carDes}}</span>
                </div>
            </div>
            <div class="useinfo">
                <div>
                    <span style="background:#4ac87a" class="rad"></span>
                    <div class="lf">
                        <p style="font-size: 0;display: inline-block;width: 6.25rem;">
                            <span @click="starttime" class="date">{{startob == ""?"请选择":(startob.month+1+"-"+startob.date)}}<img src="../../assets/app/der.jpg"></span>
                            <b>{{startob == ""?"--:--":((parseInt(startob.shi)
                                <10? "0"+parseInt(startob.shi):parseInt(startob.shi))+ ":"+(parseInt(startob.fen)==0? "00":parseInt(startob.fen)))}}</b>
                                    <b style="margin-right: 0.18rem;">{{sxqj == undefined?"--":sxqj}}</b>
                                    <input v-model="startadd" class="in" type="text" placeholder="请填写取车地址">
                        </p>
                    </div>
                </div>
                <div style="margin-top:0.4rem">
                    <span style="background:#fbaf5d" class="rad"></span>
                    <div class="lf">
                        <p style="font-size: 0;display: inline-block;width: 6.25rem;">
                            <span @click="endtime" class="date">{{endob == ""?"请选择":(endob.month+1+"-"+endob.date)}}<img src="../../assets/app/der.jpg"></span>
                            <b>{{endob == ""?"--:--":((parseInt(endob.shi)
                                <10? "0"+parseInt(endob.shi):parseInt(endob.shi))+ ":"+(parseInt(endob.fen)==0? "00":parseInt(endob.fen)))}}</b>
                                    <b style="margin-right: 0.18rem;">{{exqj == undefined?"--":exqj}}</b>
                                    <input v-model="endadd" class="in" type="text" placeholder="请填写还车地址">
                        </p>
                    </div>
                </div>
            </div>
            <!-- 三计划 -->
            <div v-if='orderType == 0' class="com">
                <div>
                    <span style="background:#3d454d" class="rad"></span>
                    <div style="border:0" class='rr'>
                        <span>本次用车天数</span>
                        <span style="right:0.3rem;position:relative;;float:right;color:#fed945">{{String(tokendays) == "NaN"?"--":tokendays}}天</span>
                    </div>
                </div>
                <div>
                    <span style="background:#3d454d" class="rad"></span>
                    <div class='rr'>
                        <span>{{carData.planName}}可用天数</span>
                        <span style="right:0.3rem;position:relative;float:right">{{carData.canMemberUse}}天</span>
                    </div>
                </div>
                <div v-if="tokendays<=carData.canMemberUse">
                    <span style="background:#3d454d;" class="rad"></span>
                    <div class='rr'>
                        <span>扣减后剩余天数</span>
                        <span style="right:0.3rem;position:relative;float:right">{{carData.canMemberUse - tokendays}}天</span>
                    </div>
                </div>
            </div>
            <div v-if="(!(tokendays<carData.canMemberUse))&&(orderType == 0)" class='warn'>
                可用天数不足，请重新选择用车天数
            </div>
            <!-- 非计划会员 -->
            <div v-if='orderType == 2' class='com'>
                <span style="background:#3d454d" class="rad"></span>
                <span>费用明细</span>
                <p class='clear'></p>
                <div class='bdd'>
                    <span>用车天数</span>
                    <span class='c'>{{tokendays}}天</span>
                </div>
                <div class='bdd'>
                    <span>会员价</span>
                    <span class='c'>{{carData.memberRentPrice}}元/天</span>
                </div>
                <div v-if='(tokendays >= 7)&&(tokendays<30)' class='bdd'>
                    <span>周租折扣</span>
                    <span class='c'>{{carData.week}}折</span>
                </div>
                <div v-if='tokendays>=30' class='bdd'>
                    <span>月租折扣</span>
                    <span class='c'>{{carData.month}}折</span>
                </div>
                <div v-if='isbirthday' class='bdd'>
                    <span>生日折扣</span>
                    <span class='c'>单日{{carData.birthday}}折</span>
                </div>
                <p style="margin-top: 0.38rem;" class='clear'></p>
                <div style="height:1rem" class='bdd'>
                    <span>费用合计</span>
                    <span style="color:#f4d144!important" class='c'>¥{{total}}</span>
                </div>
            </div>
            <!-- 计划 -->
            <div @click='pay0' v-if='orderType == 0' class='submit'>
                提交订单
            </div>
            <!-- 会员 -->
            <div @click='pay1' v-if='orderType == 2'>
                <div class='sl'>需预付定金
                    <span style="color:#fed945">{{cashFee}}元</span>
                </div>
                <div class='sr'>提交订单</div>
            </div>
        </div>
    </div>
</template>

<script>
require('../app/rem.js')(window, document)
import qs from 'qs';
export default {
    data() {
        return {
            orderType: '',
            carId: '',
            carData: '',
            startadd: '',
            endadd: '',
            orderId: ''
        }
    },
    created() {
        this.carId = this.$route.query.carId
        this.orderType = this.$route.query.orderType
        //请求用户数据和车辆信息
        this.$ajax(BASE_URL + "/car/memberData?carId=" + this.carId)
            .then((res) => {
                this.carData = res.data.data;
                this.startadd = res.data.data.storeAdds
                this.$store.commit("rentdays", res.data.data.takenDates)
            })
    },
    computed: {
        WAG() { return this.$store.state.WAG },

        cashFee() {
            let tmp = Math.floor(this.total * 0.2);
            return tmp > 2000 ? 2000 : tmp;
        },
        startob() { return this.$store.state.starttime },
        endob() { return this.$store.state.endtime },
        sxqj() {
            var x = this.$store.state.starttime.xqj;
            switch (x) {
                case 0: return "周日"; break;
                case 1: return "周一"; break;
                case 2: return "周二"; break;
                case 3: return "周三"; break;
                case 4: return "周四"; break;
                case 5: return "周五"; break;
                case 6: return "周六"; break;
            }
        },
        exqj() {
            var x = this.$store.state.endtime.xqj;
            switch (x) {
                case 0: return "周日"; break;
                case 1: return "周一"; break;
                case 2: return "周二"; break;
                case 3: return "周三"; break;
                case 4: return "周四"; break;
                case 5: return "周五"; break;
                case 6: return "周六"; break;
            }
        },
        tokendays() {
            let s = new Date(this.startob.year, this.startob.month, this.startob.date, parseInt(this.startob.shi), parseInt(this.startob.fen))
            let e = new Date(this.endob.year, this.endob.month, this.endob.date, parseInt(this.endob.shi), parseInt(this.endob.fen))
            if ((s == "Invalid Date") || (e == "Invalid Date")) {
                return 0
            } else {
                return Math.floor((e - s) / (60 * 60 * 24 * 1000)) + ((((e - s) % (60 * 60 * 24 * 1000)) / (60 * 60 * 1000)) > this.carData.extraHours ? 1 : 0);
            }
        },
        isbirthday() {
            let tmp = [];
            if (this.carData.date) {
                tmp = this.carData.date.split("-")
            } else {
                return
            }
            let s = new Date(this.startob.year, this.startob.month, this.startob.date, parseInt(this.startob.shi), parseInt(this.startob.fen))
            let e = new Date(this.endob.year, this.endob.month, this.endob.date, parseInt(this.endob.shi), parseInt(this.endob.fen))
            let b1 = new Date(this.startob.year, tmp[0] - 1, tmp[1]);
            let b2 = new Date(this.endob.year, tmp[0] - 1, tmp[1]);
            //跨年租车，生日在年前
            let t1 = (b1 <= e) && (b1 >= s)
            //跨年租车，生日在年后
            let t2 = (b2 <= e) && (b2 >= s)
            if (t1 || t2) {
                return true;
            } else {
                return false;
            }
        },
        total() {
            //有生日
            if (this.isbirthday) {
                if ((this.tokendays >= 7) && (this.tokendays < 30)) {//周租折扣 有生日
                    return ((this.tokendays - 1) * this.carData.memberRentPrice * this.carData.week * 0.1) + (this.carData.memberRentPrice * this.carData.birthday * 0.1)
                } else if (this.tokendays >= 30) {//月租折扣 有生日
                    return (this.tokendays - 1) * this.carData.memberRentPrice * this.carData.month * 0.1 + (this.carData.memberRentPrice * 0.5)
                } else {//只有生日
                    return (this.tokendays - 1) * this.carData.memberRentPrice + (this.carData.memberRentPrice * 0.5)
                }
            } else {//没生日
                if ((this.tokendays >= 7) && (this.tokendays < 30)) {//周租折扣 没生日
                    return this.tokendays * this.carData.memberRentPrice * this.carData.week * 0.1
                } else if (this.tokendays >= 30) {//月租折扣 mei生日
                    return this.tokendays * this.carData.memberRentPrice * this.carData.month * 0.1
                } else {//mei生日
                    return this.tokendays * this.carData.memberRentPrice
                }
            }
        }
    },
    methods: {
        checkparam() {

        },
        starttime() {
            this.$router.push({ path: '/wx/datepicker', query: { type: 'starttime' } })
        },
        endtime() {
            this.$router.push({ path: '/wx/datepicker', query: { type: 'endtime' } })
        },
        pay0() {
            var vm = this
            if (this.startob == "") { alert('请选择开始时间'); return false }
            if (this.endob == "") { alert('请选择结束时间'); return false }
            if (this.endadd == "") { alert('请选择填写还车地址'); return false }
            if (this.startadd == "") { alert('请选择填写取车地址'); return false }
            this.$ajax({
                method: "POST",
                url: BASE_URL + "/car/deposit",
                data: qs.stringify({
                    carId: vm.carId,
                    rentStartAt: vm.startob.year + "-" + (vm.startob.month + 1) + "-" + vm.startob.date + " " + parseInt(vm.startob.shi) + ":" + parseInt(vm.startob.fen),
                    rentEndAt: vm.endob.year + "-" + (vm.endob.month + 1) + "-" + vm.endob.date + " " + parseInt(vm.endob.shi) + ":" + parseInt(vm.endob.fen),
                    sendAddr: vm.startadd,
                    returnAddr: vm.endadd,
                    orderType: 0,
                    dayOrdered: vm.tokendays
                }),
                headers: { "Content-Type": "application/x-www-form-urlencoded", }
            }).then((res) => {
                if (res.data.success) {
                    // vm.orderId = res.data.data.orderId
                    vm.$router.push("/wx/paysuccess")
                } else {
                    alert("下单失败");
                }
            })
        },
        pay1() {
            var vm = this
            if (this.startob == "") { alert('请选择开始时间'); return false }
            if (this.endob == "") { alert('请选择结束时间'); return false }
            if (this.endadd == "") { alert('请选择填写还车地址'); return false }
            if (this.startadd == "") { alert('请选择填写取车地址'); return false }
            this.$ajax({
                method: "POST",
                url: BASE_URL + "/car/deposit",
                data: qs.stringify({
                    carId: vm.carId,
                    rentStartAt: vm.startob.year + "-" + (vm.startob.month + 1) + "-" + vm.startob.date + " " + parseInt(vm.startob.shi) + ":" + parseInt(vm.startob.fen),
                    rentEndAt: vm.endob.year + "-" + (vm.endob.month + 1) + "-" + vm.endob.date + " " + parseInt(vm.endob.shi) + ":" + parseInt(vm.endob.fen),
                    sendAddr: vm.startadd,
                    returnAddr: vm.endadd,
                    totalFee: vm.total * 100,
                    cashFee: vm.cashFee * 100,
                    orderType: 2
                }),
                headers: { "Content-Type": "application/x-www-form-urlencoded", "WAG": vm.WAG }//oEUUVv_6lXDk2XuAwSIWaqtvXbDI  vm.WAG
            }).then((res) => {
                if (res.data.success) {
                    vm.orderId = res.data.data.orderId
                    alert(res.data.data.appId)
                    function onBridgeReady() {
                        WeixinJSBridge.invoke(
                            'getBrandWCPayRequest', {
                                "appId":res.data.data.appId,     //公众号名称，由商户传入     
                                "timeStamp":res.data.data.timeStamp,         //时间戳，自1970年以来的秒数     
                                "nonceStr":res.data.data.nonceStr, //随机串     
                                "package":res.data.data.package,
                                "signType":res.data.data.signType,         //微信签名方式：     
                                "paySign":res.data.data.paySign, //微信签名 
                            },
                            function(res) {
                                if (res.err_msg == "get_brand_wcpay_request:ok") {
                                    var check = function() {
                                        vm.$ajax(BASE_URL + "/car/order/check?orderId=" + vm.orderId + "&orderType=2")
                                            .then((res1) => {
                                                if (res1.data.data.orderStatus == 0) {
                                                    setTimeout(() => {
                                                        check()
                                                    }, 500)
                                                } else if (res1.data.data.orderStatus == 1) {
                                                    vm.$router.push("/wx/paysuccess")
                                                } else if (res1.data.data.orderStatus == 2) {
                                                    alert('支付查询失败')
                                                }
                                            })
                                    }
                                    check();
                                } else {
                                    alert('支付失败了')
                                }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
                            }
                        );
                    }
                    if (typeof WeixinJSBridge == "undefined") {
                        if (document.addEventListener) {
                            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                        } else if (document.attachEvent) {
                            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                        }
                    } else {
                        onBridgeReady();
                    }
                } else {
                    alert("失败");
                }
            })
        }
    }
}
</script>

<style scoped>
.sl {
    display: inline-block;
    width: 60%;
    height: 1rem;
    font-size: 0.26rem;
    color: #ffffff;
    border-top: 1px solid #39424a;
    vertical-align: top;
    position: absolute;
    bottom: 0;
    line-height: 1rem;
    text-align: center
}

.sr {
    display: inline-block;
    width: 40%;
    height: 1rem;
    background: #fed945;
    color: #333333;
    font-size: 0.32rem;
    text-align: center;
    vertical-align: top;
    position: absolute;
    bottom: 0;
    right: 0;
    line-height: 1rem;
    text-align: center
}

.warn {
    width: 100%;
    height: 0.6rem;
    background: #d8434d;
    display: block;
    margin-top: 0.2rem;
    text-align: center;
    line-height: 0.6rem;
    font-size: 0.24rem;
    color: #ffffff;
}

.c {
    width: 1.62rem!important;
    text-align: right;
}

.bdd span {
    font-size: 0.24rem!important;
    color: #999999!important;
    width: 4rem;
}

.bdd {
    margin-left: 0.5rem;
    display: block;
    height: 0.6rem;
}

.clear {
    width: 6.25rem;
    height: 1px;
    background: #39424a;
    margin-left: 0.5rem;
}

.submit {
    background: #fed945;
    color: #333333;
    font-size: 0.32rem;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    position: absolute;
    display: block;
    width: 100%;
    bottom: 0;
}

.com .rr {
    display: inline-block;
    width: 6.25rem;
    border-top: 1px solid #39424a;
}

.com span {
    font-size: 0.26rem;
    color: #ffffff;
    vertical-align: top;
    display: inline-block;
    margin-top: 0.38rem;
    margin-bottom: 0.38rem;
}

.com {
    width: 6.8rem;
    display: block;
    margin: auto;
    /* height: 3.1rem; */
    background: #273039;
    border-radius: 4px;
    margin-top: 0.2rem;
    padding-left: 0.3rem;
}

:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #999999;
    opacity: 1;
}

::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #999999;
    opacity: 1;
}

input:-ms-input-placeholder {
    color: #999999;
    opacity: 1;
}

input::-webkit-input-placeholder {
    color: #999999;
    opacity: 1;
}

.in {
    background: rgba(0, 0, 0, 0);
    border: 0;
    color: #999999;
    width: 100%;
    margin-top: 0.48rem;
    margin-bottom: 0.1rem;
}

.lf b {
    font-size: 0.24rem;
    color: #999999;
    display: inline-block;
    vertical-align: top;
    float: right;
    position: relative;
    top: 0.1rem;
    right: 0.3rem;
}

.date img {
    display: inline-block;
    width: 0.1rem;
    height: 0.18rem;
    margin-left: 0.3rem;
    vertical-align: top;
    position: relative;
    top: 0.15rem;
}

.date {
    vertical-align: top;
    font-size: 0.4rem;
    color: #ffffff;
    display: inline-block
}

.lf {
    display: inline-block;
    border-bottom: 1px solid #39424a
}

.com .rad {
    display: inline-block;
    width: 0.18rem;
    height: 0.18rem;
    border-radius: 100px;
    vertical-align: top;
    position: relative;
    top: 0.03rem;
}

.useinfo .rad {
    display: inline-block;
    width: 0.18rem;
    height: 0.18rem;
    border-radius: 100px;
    vertical-align: top;
    position: relative;
    top: 0.15rem;
}

.useinfo {
    background: #273039;
    width: 6.8rem;
    height: 3.06rem;
    display: block;
    margin: auto;
    margin-top: 0.2rem;
    border-radius: 4px;
    padding: 0.67rem 0rem 0.67rem 0.3rem;
}

.carstar {
    color: #ffffff!important;
    border: 1px solid #ffffff;
    border-radius: 4px;
    display: inline-block;
    width: 0.98rem;
    height: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    margin-left: 0.3rem!important;
}

.left {
    display: inline-block;
    width: 4.5rem;
    vertical-align: top;
    height: 100%;
}

.carinfo span {
    font-size: 0.24rem;
    color: #999999;
    margin-left: 0.2rem;
    margin-top: 0.2rem;
}

.carname {
    display: inline-block;
    margin-left: 0.3rem;
    font-size: 0.24rem;
    color: #ffffff;
    vertical-align: top;
    margin-top: 0.3rem;
    width: 100%;
}

.carinfo img {
    width: 2.6rem;
    height: 100%;
    display: inline-block;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.carinfo {
    width: 7.1rem;
    height: 1.3rem;
    display: block;
    margin: auto;
    background: #273039;
    border-radius: 4px;
    font-size: 0;
}
</style>
