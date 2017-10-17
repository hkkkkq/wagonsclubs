<template>
    <div style="font-family:PingFangSC-Medium, sans-serif;position:absolute;height:100%;width:100%">
        <div style="background:#0f1923;min-height:100%">
            <p style="height:0.2rem"></p>
            <p @click="su" class='but1'>确定</p>
            <p style="height:0.8rem"></p>
            <div class="con">
                    <img @click="premonth" style="margin-left: 1.5rem;" src="../../assets/app/pickerleft.jpg">
                    <p>
                        <span>{{curYear}}</span>
                        <span>年</span>
                        <span>{{(curMonth+1)>9?(curMonth+1):("0"+(curMonth+1))}}</span>
                        <span>月</span>
                    </p>
                    <img @click="nextmonth" src="../../assets/app/pickerright.jpg">
                <div class="days">
                    <span>日</span>
                    <span>一</span>
                    <span>二</span>
                    <span>三</span>
                    <span>四</span>
                    <span>五</span>
                    <span>六</span>
                </div>
                <div class="dates" :key="n" :line='n' v-for="(item,n) in this.dateform">
                    <!-- <p style="font-size:20px">{{n}}</p> -->
                    <span :line='n' :row='n2' @click="clickspan(n,n2)" :key="n2" v-for="(item2,n2) in item">
                        <em :class="{'rent':istoken(dateform[n][n2]),
                                                    'startclick':(dateform[n][n2] == choose)&&(type == 'starttime'),
                                                    'today':istoday == dateform[n][n2],
                                                    'lessthan':lessthan(dateform[n][n2]),
                                                    'beforeTodayDays':isbeforeTodayDays(dateform[n][n2]),
                                                    'isstartclick':(isstartdate(dateform[n][n2]))&&(type == 'endtime'),
                                                    'endclick':(dateform[n][n2] == choose)&&(type == 'endtime')}">
                            {{item2 == "k"?null:item2}}
                            <span class="hasrent" v-if="istoken(dateform[n][n2])">已出租</span>
                        </em>
                    </span>
                    <pd-select-box style="width: 7.1rem;margin: auto;position: relative;left: -0.3rem;">
                        <transition name='slid'>
                            <pd-select-item style="height:4.5rem" v-if="show[n]" :listData="listData" v-model="shi"></pd-select-item>
                        </transition>
                        <transition name='slid'>
                            <pd-select-item style="height:4.5rem" v-if="show[n]" :listData="listData2" v-model="fen"></pd-select-item>
                        </transition>
                    </pd-select-box>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
require('../app/rem.js')(window, document)

import pdSelectItem from './picker/selectitem.vue'
import pdSelectBox from './picker/slectBox.vue'
export default {
    data() {
        return {
            aa: "09时",
            show: "",//控制时间表盘显示
            curYear: "",//选中年
            curMonth: "",   //0开头  选中月
            dateform: [], //日期数字 ，7个一组
            xqj: "", // 每月的第一天是星期几
            listData: ['00时', '01时', '02时', '03时', '04时', '05时', '06时', '07时', '08时', '09时', '10时', '11时', '12时', '13时', '14时', '15时', '16时', '17时', '18时', '19时', '20时', '21时', '22时', '23时',],
            listData2: ['00分', '30分'],
            shi: "09时",//选中小时
            fen: "00分",//选中分
            choose: "",//选中日期
            nowxqj: "",//选中那天是星期几
            sdate: '',//当天是几号
            // tokendays:["2018-09-06","2018-09-07"]
            beforeTodayDays: 30,
            type: ''
        }
    },
    computed: {
        istoday() {
            let y = this.curYear == new Date().getFullYear();
            let m = this.curMonth == new Date().getMonth();
            // let d = this.sdate == new Date().getDate();
            if (y && m) {
                return this.sdate
            } else {
                return false
            }
        },
        tokendays() {
            return this.$store.state.rentdays
        },
        startob() {//获取开始时间
            return this.$store.state.starttime
        },
    },
    components: {
        pdSelectItem,
        pdSelectBox
    },
    watch: {
        //监听月份的改变 0-11
        curMonth: function(data) {
            this.xqj = new Date(this.curYear, this.curMonth, 1).getDay()
            var form = new Array(this.xqj).fill("k")
            for (let i = 1; i <= this.getCountDays(); i++) {
                form.push(i)
            }
            this.dateform = [];
            for (let i = 0; i < form.length; i = i + 7) {
                this.dateform.push(form.slice(i, i + 7))
            }
            this.show = new Array(this.dateform.length).fill(0)
        }
    },
    created() {
        this.type = this.$route.query.type;
        var curDate = new Date(); //当前日期
        this.curYear = curDate.getFullYear()  //当前年份
        this.curMonth = curDate.getMonth() //当前月份
        this.sdate = curDate.getDate()
        //获取当月1号是周几
        this.xqj = new Date(this.curYear, this.curMonth, 1).getDay()

    },
    methods: {
        isstartdate(date) {
            if (this.type == 'starttime') {
                return false;
            } else {
                if ((this.startob.year == this.curYear) && (this.startob.month == this.curMonth) && (this.startob.date == date)) {
                    return true
                } else {
                    return false
                }
            }
        },
        isbeforeTodayDays(date) {
            let nowdate = new Date()
            let enddate, endmonth = nowdate.getMonth(), endyear = nowdate.getFullYear()
            let count = new Date(nowdate.getFullYear(), nowdate.getMonth() + 1, 0).getDate()
            let tmp = this.sdate + this.beforeTodayDays;
            if (tmp > count) {
                enddate = tmp - count;
                endmonth = endmonth + 1;
                if (endmonth > 11) {
                    endmonth = 0
                    endyear = endyear + 1
                }
            } else {
                enddate = tmp
            }
            //至此，已经得出戒指日期，接下来做比较即可
            if (this.curYear > endyear) { return true }
            if ((this.curYear == endyear) && (this.curMonth > endmonth)) { return true }
            if ((date > enddate) && (this.curMonth == endmonth)) { return true }
            nowdate = enddate = endmonth = endyear = count = tmp = null
            return false
        },
        lessthan(date) {
            let tmp = new Date()
            /*if(this.curYear < tmp.getFullYear()){
                tmp = null;
                return true
            }*/
            if ((this.curMonth < tmp.getMonth()) && (this.curYear <= tmp.getFullYear())) {
                tmp = null;
                return true
            }
            if ((date < this.sdate) && (this.curMonth == tmp.getMonth())) {
                tmp = null;
                return true
            }
            tmp = null;
            return false;
        },
        istoken(date) {
            let tmp = this.curYear + "-" + ((this.curMonth + 1) < 10 ? ("0" + (this.curMonth + 1)) : (this.curMonth + 1)) + "-" + (date < 10 ? ("0" + date) : date);
            if (!(this.tokendays.indexOf(tmp) == -1)) {
                return true
            } else {
                return false
            }
        },
        premonth() {
            this.choose = "";
            if (this.curMonth == 0) {
                this.curYear = this.curYear - 1;
                this.curMonth = 11;

            } else {
                this.curMonth = this.curMonth - 1
            }
        },
        nextmonth() {
            this.choose = "";
            if (this.curMonth == 11) {
                this.curYear = this.curYear + 1
                this.curMonth = 0;
            } else {
                this.curMonth = this.curMonth + 1
            }
        },
        getCountDays() {//获取一个月的天数
            /* 获取当前月份 */
            // var curMonth = curDate.getMonth();
            var tmp = new Date(this.curYear, this.curMonth + 1, 0)
            /*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
            // curDate.setMonth(curMonth + 1);
            /* 将日期设置为0, 这里为什么要这样设置, 我不知道原因, 这是从网上学来的 */
            // curDate.setDate(0);
            /* 返回当月的天数 */
            return tmp.getDate();
        },
        clickspan(n, n2) {
            // console.log(new Date(this.tokendays[0]))
            // console.log(new Date(2017, 8, 5, 8, 0, 10))
            // console.log((new Date(this.tokendays[0])) < (new Date(2017, 8, 5, 8, 0, 10)))
            if (this.isstartdate(this.dateform[n][n2])) {
                return;
            }
            if (this.isbeforeTodayDays(this.dateform[n][n2])) {
                return;
            }
            if (this.lessthan(this.dateform[n][n2])) {
                return;
            }
            if (this.istoken(this.dateform[n][n2])) {//判断是否已租，已租不能点
                return;
            } else {
                this.choose = this.dateform[n][n2];
                this.show.fill(0)
                this.show[n] = 1
                this.nowxqj = new Date(this.curYear, this.curMonth, this.choose).getDay();
            }
        },
        su() {
            if (this.type == "starttime") {
                if (this.choose) {
                    this.$store.commit('starttime', { year: this.curYear, month: this.curMonth, date: this.choose, xqj: this.nowxqj, shi: this.shi, fen: this.fen })
                    this.$store.commit('endtime', "")
                    this.$router.go(-1)
                } else {
                    this.$router.go(-1)
                }

            } else {
                let startstring = new Date(this.startob.year, this.startob.month, this.startob.date, parseInt(this.startob.shi), parseInt(this.startob.fen), 0)
                let endstring = new Date(this.curYear, this.curMonth, this.choose, parseInt(this.shi), parseInt(this.fen), 0)
                console.log(startstring)
                console.log(endstring);
                if (startstring >= endstring) {
                    alert('结束日期不能在开始日期之前')
                    return false;
                }
                for (let i = 0; i <= this.tokendays.length; i++) {
                    // console.log(new Date(this.tokendays[i]))
                    if ((new Date(this.tokendays[i]) < endstring) && (new Date(this.tokendays[i]) > startstring)) {
                        alert('起止日期间不允许间隔');
                        return false
                    }
                }
                if (this.choose) {
                    this.$store.commit('endtime', { year: this.curYear, month: this.curMonth, date: this.choose, xqj: this.nowxqj, shi: this.shi, fen: this.fen })
                    this.$router.go(-1)
                } else {
                    this.$router.go(-1)
                }

            }
        }
    }
}
</script>

<style scoped>
.endclick {
    display: block;
    width: 0.68rem;
    margin: auto;
    height: 0.68rem;
    background: #f4d144;
    color: #0f1923;
    border-radius: 1000px;
    line-height: 0.7rem;
}

.beforeTodayDays {
    color: #ffffff;
    opacity: 0.1;
}

.lessthan {
    color: #ffffff;
    opacity: 0.1;
}

.slid-enter-active,
.slid-leave-active {
    transition: height .5s
}

.slid-enter,
.slid-leave-to
/* .fade-leave-active in below version 2.1.8 */

{
    height: 0!important
}

.rent {
    opacity: 0.1;
}

.hasrent {
    color: #ffffff;
    font-size: 0.18rem;
    position: absolute;
    width: 1rem;
    top: 0.3rem;
    left: 0;
}

.today {
    color: #d8434d;
}

.but1 {
    display: block;
    width: 1rem;
    height: 0.6rem;
    font-size: 0.3rem;
    color: #ffffff;
    /* background: #273039; */
    text-align: center;
    line-height: 0.6rem;
    border-radius: 4px;
    right: 0.2rem;
    position: absolute;
    top: 1.3rem
}

.isstartclick {
    display: block;
    width: 0.68rem;
    margin: auto;
    height: 0.68rem;
    background: rgb(74, 200, 122);
    color: #0f1923;
    border-radius: 1000px;
    line-height: 0.7rem;
}

.startclick {
    display: block;
    width: 0.68rem;
    margin: auto;
    height: 0.68rem;
    background: rgb(74, 200, 122);
    color: #0f1923;
    border-radius: 1000px;
    line-height: 0.7rem;
}

.dates>span>b {
    display: block;
    font-size: 0.18rem;
    color: #666666;
    position: absolute;
    width: 0.92rem;
    top: 0.3rem;
    left: 0rem;
}

.dates>span {
    display: inline-block;
    width: 0.92rem;
    color: #ffffff;
    font-size: 0.3rem;
    text-align: center;
    line-height: 0.9rem;
    position: relative;
}

.dates {
    display: block;
    /* height: 0.95rem; */
    width: 100%;
}

.days>span {
    color: #999999;
    font-size: 0.18rem;
    display: inline-block;
    height: 100%;
    width: 0.92rem;
    text-align: center;
    line-height: 0.5rem;
}

.days {
    height: 0.48rem;
    border-top: 1px solid #39424a;
    border-bottom: 1px solid #39424a;
    margin-top: 0.48rem;
    margin-bottom: 0.4rem;
}

.con>p {
    text-align: center;
    display: inline-block;
    width: 2.3rem;
    margin: auto;
}

.con>p>span {
    color: #ffffff;
    font-size: 0.3rem;
    display: inline-block;
}

.con>img {
    width: 0.6rem;
    height: 0.28rem;
}

.con {
    background: #273039;
    width: 6.5rem;
    margin: auto;
    display: block;
    border-radius: 4px;
    font-size: 0;
    padding: 0.46rem 0.3rem 0.96rem 0.3rem
}
</style>
