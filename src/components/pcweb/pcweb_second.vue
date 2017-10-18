<template>
    <div>
        <div v-if="qr_show" class="qr_code">
            <a @click="closeqr" href="javascript:;" class="cclose"></a>
            <img src="../../assets/car_gongzhonghao.png" alt="" class="qr" />
            <p>扫码即刻体验</p>
        </div>
        <div class="s_banner"></div>
        <div style="display:block;height:1504px">
            <div @click="goar(item.detailUrl)" :key="index" v-for="(item,index) in articleList.data.reading.data" class="ff">
                <img :src="item.iconImagePath">
                <div class="gg">
                    <p class="title">{{item.title}}
                        <span>{{item.createdTime}}</span>
                    </p>
                    <div class="cc">{{item.contentAbstract}}</div>
                    <span>阅读更多 >></span>
                </div>
            </div>
        </div>
        <p class="hh">
            <span>{{pageIndex}}</span>
            <span>/</span>
            <span>{{articleList.data.reading.totalPages}}</span>
            <span @click="prevpage()" style="padding-left:10px;cursor:pointer">上一页</span>
            <span style="padding-left:10px;padding-right:10px;font-size:10px;cursor:pointer">|</span>
            <span @click="nextpage()" style="cursor:pointer">下一页</span>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            qr_show: true,
            articleList: '',
            pageIndex: 1
        }
    },
    created() {
        this.$ajax(BASE_URL + "/reading/readingList?pageIndex=" + this.pageIndex)
            .then((res) => {
                this.articleList = res.data
            })
    },
    watch: {
        pageIndex() {
            this.$ajax(BASE_URL + '/reading/readingList?pageIndex=' + this.pageIndex)
                .then((res) => {
                    this.articleList = res.data
                })
        }
    },
    methods: {
        prevpage() {
            if (this.pageIndex == 1) {
                return;
            } else {
                this.pageIndex -= 1
            }
        },
        nextpage() {
            if (this.pageIndex == this.articleList.data.reading.totalPages) {
                return;
            } else {
                this.pageIndex += 1;
            }
        },
        goar(n) {
            this.$ajax(BASE_URL + n)
                .then((res) => {
                    this.$store.commit('articleDetails', res.data);
                    this.$router.push('/article')
                })
        },
        closeqr: function() {
            this.qr_show = false;
        },
        change: function(str) {
            this.show = str;
        }
    }
}
</script>

<style scoped>
.gg span {
    cursor: pointer;
    font-weight: lighter;
}

.hh span {
    color: #8c8c8c;
}

.hh {
    position: relative;
    top: -2px;
    height: 68px;
    text-align: center;
    padding-top: 48px;
    z-index: 1;
    background: white;
}

.gg span {
    bottom: 0;
    float: left;
    color: #8c8c8c;
}

.cc {
    color: #747474;
    font-size: 15px;
    height: 150px;
    line-height: 25px;
}

.gg p span {
    font-size: 12px;
    color: #747474;
    float: right;
    margin-right: 10px;
}

.gg p {
    font-size: 24px;
    color: black;
    line-height: 48px;
}

.gg {
    width: 565px;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    float: right;
}

.ff img {
    display: inline-block;
    width: 320px;
    height: 230px;
    margin-top: 9px;
}

.ff {
    width: 1000px;
    margin: auto;
    height: 248px;
    padding-top: 26px;
    padding-bottom: 26px;
    border-bottom: 1px solid #eeeeee;
    cursor: pointer;
}

.s_banner {
    width: 100%;
    min-width: 1000px;
    height: 217px;
    background: url('../../assets/car_dongtai.jpg') center center no-repeat;
}

.qr_code {
    z-index: 100;
    position: fixed;
    right: 0;
    top: 30%;
    width: 173px;
    height: 234px;
    background-color: #333333;
}

.qr_code .cclose {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 14px;
    height: 14px;
    background: url("../../assets/car_close.png") no-repeat;
    background-size: 100% 100%;
}

.qr_code .qr {
    display: block;
    margin: 45px auto 13px;
    width: 128px;
    height: 128px;
}

.qr_code p {
    font-size: 14px;
    color: #f4f4f4;
    text-align: center;
}
</style>
