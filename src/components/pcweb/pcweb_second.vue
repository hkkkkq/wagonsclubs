<template>
    <div>
        <div class="s_banner"></div>
        <div style="display:block;height:2409px">
            <div @click="goar(8)" class="ff">
                <img src="../../assets/jd2.png">
                <div class="gg">
                    <p class="title">WAGONS光速超跑，点亮焦点人生
                        <span>2017-09-14 09:45:00</span>
                    </p>
                    <div class="cc">爱美之心人皆有之，美好的东西总是发光的，好看的钻石、好看的人、好看的跑车，都是一颗颗在人群中闪耀的星......</div>
                    <span>阅读更多 >></span>
                </div>
            </div>
            <div @click="goar(7)" class="ff">
                <img src="../../assets/zl32.jpeg">
                <div class="gg">
                    <p class="title">WAGONS的互联网沙龙
                        <span>2017-09-7 14:17:09</span>
                    </p>
                    <div class="cc">8月31日，由《首席财务官》杂志和奇点金服共同主办的“人工智能来了，移动互联网时代的财务绩效管理怎么‘破’”主题沙龙在北京WAGONS光速超跑俱乐部顺利举行，来自北京各个行业的财务高管40余人参加此次活动......</div>
                    <span>阅读更多 >></span>
                </div>
            </div>
            <div @click="goar(6)" class="ff">
                <img src="../../assets/zl24.png">
                <div class="gg">
                    <p class="title">有人开超跑把美女主播约走啦
                        <span>2017-09-6 18:35:00</span>
                    </p>
                    <div class="cc">这个七夕，追随WAGONS的脚步，开着炸街超跑载着美女主播 去 约 会 ！......</div>
                    <span>阅读更多 >></span>
                </div>
            </div>
            <div @click="goar(5)" class="ff">
                <img src="http://huoqiu.oss-cn-qingdao.aliyuncs.com/statics/images/wagons/ej66.JPG">
                <div class="gg">
                    <p class="title">超跑一发光，撩妹不用慌 丨 埃及之夜，时尚SHOW
                        <span>2017-09-6 18:32:00</span>
                    </p>
                    <div class="cc">8月19日，WAGONS光速超跑与美丽的环球旅游小姐相约在珠江紫宸山。打入秘密据点，最会玩的人都在这里！这场由珠江紫宸山主办、WAGONS光速超跑携手环球旅游小姐网络大赛组委会共同协办的“埃及之夜......</div>
                    <span>阅读更多 >></span>
                </div>
            </div>
            <div @click="goar(4)" class="ff">
                <img src="../../assets/zl4.jpg">
                <div class="gg">
                    <p class="title">我学会了漂移，正在前往拯救世界的路上
                        <span>2017-09-5 14:17:09</span>
                    </p>
                    <div class="cc">对不起，吴京 你能一个人打赢一群海盗我是信的，你能一个人打赢一个反政府军队我也信，你能一个人打赢一个雇佣兵军队我还信，你能连续喝完5扎深水炸弹后再吹掉一瓶茅台，别人都不相信你，你说我能信......</div>
                    <span>阅读更多 >></span>
                </div>
            </div>
            <div @click="goar(1)" class="ff">
                <img src="../../assets/news1.png">
                <div class="gg">
                    <p class="title">WAGONS光速超跑落地京城
                        <span>2017-08-21 16:22:52</span>
                    </p>
                    <div class="cc">诸如兰博基尼、法拉利的超级跑车一直以来都处在汽车消费金字塔的最尖端，即便是很多高端用户群体一生也鲜有驾驶甚至接触超跑的机会......</div>
                    <span>阅读更多 >></span>
                </div>
            </div>
            <div @click="goar(2)" class="ff">
                <img src="../../assets/nn21.jpg">
                <div class="gg">
                    <p class="title">WAGONS光速超跑举办试驾品鉴活动
                        <span>2017-08-21 16:25:52</span>
                    </p>
                    <div class="cc">盛夏7月，WAGONS光速超跑在北京当代MOMA商务中心WAGONS俱乐部举行了首次体验试驾活动。WAGONS光速超跑此次店内试驾体验活动采取邀请嘉宾制度，给予嘉宾们更私密的交流空间......</div>
                    <span>阅读更多 >></span>
                </div>
            </div>
            <div @click="goar(3)" class="ff">
                <img src="../../assets/news2.jpg">
                <div class="gg">
                    <p class="title">为爱提速、超跑动心
                        <span>2017-08-11 14:30:09</span>
                    </p>
                    <div class="cc">赠人玫瑰之手，经久犹有余香。WAGONS光速超跑通过当代MOMA了解到有这么一群孩子，每天在家盼望着父母的归来，只能在照片里看到父母慈爱的笑容，生病没有父母的拥抱。他们......</div>
                    <span>阅读更多 >></span>
                </div>
            </div>
        </div>
        <p class="hh">
            <span>1</span>
            <span>/</span>
            <span>1</span>
            <span style="padding-left:10px;cursor:pointer">上一页</span>
            <span style="padding-left:10px;padding-right:10px;font-size:10px;cursor:pointer">|</span>
            <span>下一页</span>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            qr_show: true,
        }
    },
    methods: {
        goar(n) {
            this.$router.push('/article/' + n)
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
</style>
