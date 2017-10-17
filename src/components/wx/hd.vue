<template>
    <div style="height: 100%;position: absolute;width: 100%;">
        <div style="background:rgb(15, 25, 35);min-height:100%">
            <!-- <div class="title">
                热门活动
            </div> -->
            <h1 style="width:100%;height:1px"></h1>
            <pull :topDistance=30 :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
                <div slot="top" class="mint-loadmore-top">
                    <transition name="fade2">
                        <img v-if="topStatus == 'loading'" class="down" src="../../assets/app/ryg.gif">
                    </transition>
                    <transition name="fade1">
                        <img v-if="topStatus == 'drop'" class="down" src='../../assets/app/ryg.png'>
                    </transition>
                    <!-- <img v-if="topStatus == 'pull'" class="down" src='../../assets/app/ryg.png'> -->
                </div>
                <div :key="index" v-for="(item,index) in info" class="co">
                    <!-- <span class="ing">报名中</span> -->
                    <h1>{{item.name}}</h1>
                    <p>{{item.description}}</p>
                    <img @click="goo(item.canClick,item.url)" :src="item.image">
                </div>
            </pull>
            <img style="width: 100%;display:block;margin-top: 0.24rem;" src="../../assets/app/nomore.png">
        </div>
    </div>
</template>

<script>
require('../app/rem.js')(window, document);
import { Loadmore } from 'mint-ui';
export default {
    data() {
        return {
            info: '',
            topStatus: '',
        }
    },
    created() {
        this.$ajax(BASE_URL + '/activity/list')
            .then(res => {
                if (res.data.success == true) {
                    this.info = res.data.data.list
                } else {
                    alert('一定是后台小哥出现了问题')
                }
            })
    },
    methods: {
        goo(status, url) {
            if (status == true) {
                location.href = url
            }
        },
        loadTop() {
            this.$ajax(BASE_URL + '/activity/list?tt=' + new Date().toUTCString())
                .then(res => {
                    if (res.data.success == true) {
                        this.info = res.data.data.list
                    } else {
                        alert('一定是后台小哥出现了问题')
                    }
                })
            setTimeout(() => {
                this.$refs.loadmore.onTopLoaded();
            }, 1500)
        },
        handleTopChange(status) {
            this.topStatus = status;
        },
    },
    components: {
        'pull': Loadmore
    },
}
</script>

<style scoped>
.fade1-enter-active{
    transition: transform 0.5s;
    -moz-transition: transform 0.5s;
    /* Firefox 4 */
    -webkit-transition: transform 0.5s;
    /* Safari 和 Chrome */
    -o-transition: transform 0.5s;
    /* Opera */
}
.fade-enter-active,
.fade-leave-active {
    transition: transform 0.5s;
    -moz-transition: transform 0.5s;
    /* Firefox 4 */
    -webkit-transition: transform 0.5s;
    /* Safari 和 Chrome */
    -o-transition: transform 0.5s;
    /* Opera */
}

.fade1-enter,
.fade1-leave-to
/* .fade-leave-active in below version 2.1.8 */

{
    transform: scale(0.2,0.2);
    -ms-transform: scale(0.2,0.2); 	/* IE 9 */
    -moz-transform: scale(0.2,0.2); 	/* Firefox */
    -webkit-transform: scale(0.2,0.2); /* Safari 和 Chrome */
    -o-transform: scale(0.2,0.2); 	/* Opera */
}

.down {
    z-index: -1;
    display: block;
    margin: auto;
    width: 1.28rem;
    position: absolute;
    left: 0;
    right: 0;
    top: -1rem;
    margin: auto;
}

.co h1 {
    color: #ffffff;
    font-size: 0.28rem;
    position: absolute;
    top: 1.32rem;
    text-align: center;
    z-index: 1;
    left: 0;
    right: 0;
}

.co p {
    color: #dddddd;
    font-size: 0.24rem;
    position: absolute;
    top: 1.88rem;
    text-align: center;
    z-index: 1;
    left: 0;
    right: 0;
}

.co .ed {
    width: 1.1rem;
    height: 0.46rem;
    display: block;
    border: 1px solid #999999;
    font-size: 0.24rem;
    color: #999999;
    text-align: center;
    border-radius: 4px;
    line-height: 0.45rem;
    position: absolute;
    right: 0.2rem;
    top: 0.2rem;
    z-index: 1;
}

.co .ing {
    z-index: 1;
    width: 1.1rem;
    height: 0.46rem;
    display: block;
    border: 1px solid #fed945;
    font-size: 0.24rem;
    color: #fed945;
    text-align: center;
    border-radius: 4px;
    line-height: 0.45rem;
    position: absolute;
    right: 0.2rem;
    top: 0.2rem;
}

.co>img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: #0f1923;
    opacity: 0.5;
}

.co {
    display: block;
    width: 7.1rem;
    height: 3.2rem;
    margin: auto;
    position: relative;
    margin-bottom: 0.24rem;
    margin-top: 0.24rem;
}

.title {
    text-align: center;
    font-size: 0.34rem;
    color: #ffffff;
    height: 0.72rem;
    width: 100%;
    display: block;
    line-height: 0.76rem;
    position: absolute;
    z-index: 100;
    background: rgb(15, 25, 35);
}
</style>
