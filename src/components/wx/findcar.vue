<template>
    <div style="font-family: PingFangSC-Medium, sans-serif;background:rgb(15, 25, 35)">
        <!-- <keep-alive v-if="keep"> -->
        <div class="t1">
            <p>北京</p>
            <img class="logo" src="../../assets/app/wlogo.png">
            <img class="kefu" src="../../assets/app/kefu.png">
        </div>
        <pull :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
            <div slot="top" class="mint-loadmore-top">
                <img v-if="topStatus == 'loading'" class="down" src="../../assets/app/ryg.gif">
                <img v-else class="down" src='../../assets/app/ryg.png'>
            </div>
            <!-- 轮播图 -->
            <div v-if="f5" style="position:relative;height: 3.2rem;">
                <div style="height:0;top: 2.2rem;" class="swiper-pagination"></div>
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide :key="n" v-for="(item,n) in carousel" class="w">
                        <img @click="goActive(item.url)" class="ss" :src="item.cycleImage">
                    </swiper-slide>
                </swiper>
            </div>
            <!-- 车辆list -->
            <p class="ti">车型探索</p>
            <div v-if='f6'>
                <div :key="n" v-for="(item,n) in carlist" class="car">
                    <img v-if="item.isNew" class='inew' src="../../assets/app/inew.png">
                    <img v-lazy="item.appImg" @click="choose(n,item.id)">
                    <p class="name">{{item.carName}}</p>
                    <P class="star">{{item.starLevel}}星级车</P>
                    <p class="pri">{{item.memberRentPrice}}／天</p>
                </div>
            </div>
        </pull>
        <img v-if="hasNext" class="down" src="../../assets/app/ryg.gif">
        <img v-else style="width: 100%;display:block;margin-top:0.4rem" src="../../assets/app/nomore.png">
        <div v-if="wxAppShare" class="wxempty"></div>
        <div v-if="wxAppShare" class="download">
            <img class="icon" src="../../assets/app/downloadicon.png">
            <div class="logo">
                <img src="../../assets/app/downloadlogo.png">
                <p>下载APP 体验更多</p>
            </div>
            <div @click="download" class="godown">立即下载</div>
        </div>
    </div>
</template>

<script>
require('../app/rem.js')(window, document)
require('swiper/dist/css/swiper.css')
import { Loadmore } from 'mint-ui';
export default {
    name: "findcar",
    data() {
        return {
            swiperOption: {
                notNextTick: true,
                //   width:"200px",
                autoplay: 3000,
                loop:true,
                autoplayDisableOnInteraction: false,
                pagination: '.swiper-pagination',
                centeredSlides: true,
                paginationType: 'custom',
                paginationCustomRender: function(swiper, current, total) {
                    var _html = '';
                    for (var i = 1; i <= total; i++) {
                        if (current == i) {
                            _html += '<img style="width:0.3rem;display:inline-block" src="/static/img/swpc.png">'
                        } else {
                            _html += '<img style="width:0.3rem;display:inline-block" src="/static/img/swp.png">'
                        }
                    }
                    return _html
                },
                // loop: true,
                direction: 'horizontal',
                grabCursor: true,
                setWrapperSize: true,
                autoHeight: true,
                slidesPerView: 1.2,
                paginationClickable: false,
                observeParents: true,
                debugger: true,
                watchSlidesVisibility: true,
                onTransitionStart(swiper) { },
            },
            topStatus: '',
            f5: true,
            f6: true,
            carousel: '',
            list: '',
            hasNext: false,
            currpage: 1,
        }
    },
    computed: {
        carlist() { return this.$store.state.applist },
        wxAppShare() { return this.$store.state.wxAppShare }        
    },
    created() {
        if(this.$route.query.wxAppShare == 'true'){
            this.$store.commit('wxAppShare')
        }
        // alert(this.$route.query.WAG)
        this.$store.commit('setOpenId',this.$route.query.WAG)
        //监听滚动事件        
        window.addEventListener('scroll', this.handleScroll);

        this.$ajax(BASE_URL + "/appCar/carouselApp?tt=" + new Date().toUTCString())
            .then((res) => {
                if (res.data.success == true) {
                    this.carousel = res.data.data.cycleList
                } else {
                    alert('接口出现了问题')
                }
            })
        this.$ajax(BASE_URL + "/appCar/carsListPaginate?pageIndex=" + this.currpage)
            .then((res) => {
                this.list = res.data.data.carsList.data;
                this.$store.commit("saveAppList", this.list)
                this.hasNext = res.data.data.carsList.hasNext;
                this.currpage = res.data.data.carsList.pageIndex;
            })
    },
    mounted() {
        // document.body.scrollTop = 5000;
        // console.log(Number(sessionStorage.getItem("pos")));
        setTimeout(function() {
            // document.body.scrollTop = 5000;
            // console.log(document.body.scrollTop);
        }, 100)
    },
    components: {
        'pull': Loadmore
    },
    methods: {
        goActive(url){
            // alert(url)
            location.href = url
        },
        download(){
            if(/iPhone|iPod/i.test(navigator.userAgent)){
                location.href = 'itms-apps://itunes.apple.com/app/id1279198452'
            }else{//安卓应用宝下载
                location.href = 'http://download.zhushou.sogou.com/open/files/year_2017/day_20171009/e514d6dd784055bfc17828d29593c400.apk'                
            }
        },
        loadTop() {
            this.$ajax(BASE_URL + "/appCar/carouselApp?tt=" + new Date().toUTCString())
                .then((res) => {
                    if (res.data.success == true) {
                        this.carousel = res.data.data.cycleList
                    } else {
                        alert('接口出现了问题')
                    }
                })
            this.f5 = false
            this.$nextTick(function() {
                this.f5 = true
            })
            setTimeout(() => {
                this.$refs.loadmore.onTopLoaded();
            }, 1500)
        },
        handleTopChange(status) {
            this.topStatus = status;
        },
        handleScroll() {
            // console.log(document.body.scrollHeight,document.body.scrollTop+window.screen.height)
            // console.log(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0)
            // console.log(window.screen.height)
            if (document.body.scrollHeight == (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) + window.screen.height) {
                if (this.hasNext) {
                    this.$ajax(BASE_URL + "/appCar/carsListPaginate?pageIndex=" + Number(this.currpage + 1))
                        .then((res) => {
                            for (let i = 0; i < res.data.data.carsList.data.length; i++) {
                                this.list.push(res.data.data.carsList.data[i]);
                            }
                            this.$store.commit("saveAppList", this.list)
                            this.hasNext = res.data.data.carsList.hasNext;
                            this.currpage = res.data.data.carsList.pageIndex;
                        })
                } else {
                    return;
                }

            }
        },
        choose(n, id) {
            // sessionStorage.setItem("pos",document.body.scrollTop)
            this.$router.push("/app/cardetails?carId=" + id)
        }
    },
}
</script>

<style scoped>
.godown{
    background: #fed945;
    font-size: 0.28rem;
    color: #000000;
    width: 1.85rem;
    height: 0.58rem;
    margin: auto;
    line-height: 0.58rem;
    text-align: center;
    border-radius: 0.04rem;
    margin-right: 0.2rem;
}
.download .logo p{
    font-size: 0.24rem;
    color: #ffffff;
    font-family: initial;
    margin-top: 0.15rem!important;
}
.download .logo img{
    width: 2.55rem;
    margin-top: 0.35rem;
    height: 0.3rem;
}
.download .logo{
    width: 3rem;
    display: inline-block;
    font-size: 0;
}
.download .icon{
    width:0.97rem;
    height:0.97rem;
    margin: auto;
    margin-left: 0.2rem;
    margin-right: 0.26rem;
    display: inline-block;
}
.download{
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1.36rem;
    background: rgba(0,0,0,0.8);
}
.wxempty{
    display: block;
    width: 100%;
    height: 1.36rem;
}
.inew{
    position: absolute;
    top: 0.2rem;
    left: .15rem;
    width:0.74rem!important;
    height: 0.35rem!important;
}
img[lazy=error] {
    /* //your code */
    background-image: url('../../assets/loading12.gif');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 0.5rem;
}

img[lazy=loading] {
    /* //your code */
    background-image: url('../../assets/loading12.gif');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 0.5rem;
}

img[lazy=loaded] {
    /* //your code */
    animation: fade 0.5s;
}

.down {
    z-index: -1;
    display: block;
    margin: auto;
    width: 1.5rem;
}

.car .pri {
    color: #fcd82f;
    font-size: 0.24rem;
    margin-top: -0.25rem;
}

.star {
    background: #273039;
    color: #ffffff;
    font-size: 0.2rem;
    display: inline-block;
    width: 1rem;
    height: 0.32rem;
    text-align: center;
    line-height: 16px;
    border-radius: 4px;
    float: right;
    margin-top: 0.3rem;
    vertical-align: top;
}

.car>.name {
    font-size: 0.3rem;
    color: #ffffff;
    margin-top: 0.28rem;
    display: inline-block;
    vertical-align: top;
}

.car>img {
    width: 100%;
    height: 3.7rem;
    display: block;
    border-radius: 0.04rem;
}

.car {
    padding: 0 0.2rem 0 0.2rem;
    margin-bottom: 0.4rem;
    position: relative;
}

.ti {
    color: #ffffff;
    font-size: 0.24rem;
    border-left: 2px solid #fed945;
    text-indent: 0.16rem;
    display: block;
    width: 7.1rem;
    margin: auto;
    margin-top: 0.22rem;
    margin-bottom: 0.16rem;
}

.swiper-pagination img {
    width: 10px;
}

.w {
    width: 6.16rem;
}

.ss {
    width: 6rem;
    height: 2.8rem;
    display: block;
    margin: auto;
}

.t1 .kefu {
    width: 0.4rem;
    float: right;
    margin-top: 0.3rem;
    margin-right: 0.3rem;
}

.t1 .logo {
    width: 2.92rem;
    vertical-align: top;
    margin-top: 0.3rem;
    display: inline-block;
    margin-left: 1.5rem;
}

.t1>p {
    color: #ffffff;
    font-size: 0.28rem;
    display: inline-block;
    vertical-align: top;
    margin-top: 0.3rem;
    float: left;
    margin-left: 0.3rem;
}

.t1 {
    position: absolute;
    height: 0.8rem;
    width: 100%;
    z-index: 1;
    background: rgb(15, 25, 35)
}
</style>
