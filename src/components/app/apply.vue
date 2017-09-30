<template>
    <div style="font-family: PingFangSC-Light, sans-serif;height:100%;background:#0f1923;">
        <!-- 清浮动 -->
        <p style="width: 100%;height: 1px;"></p>
        <div v-show="iserr" class="alert_err">{{errmsg}}</div>
        <div class="qq"></div>
        <div class="in">
            <p>
                <span>姓名</span><input v-model="name" placeholder="请填写真实姓名" />
            </p>
            <p>
                <span>身份证号</span><input v-model="idCard" placeholder="请填写身份证号" />
            </p>
            <p>
                <span>手机号</span><input readonly v-model="telephone" placeholder="请填写手机号" />
            </p>
            <p @click="sel(1)">
                <span>婚姻状况</span>
                <b :class="{'tian':istian1}">{{c1}}</b>
            </p>
            <p @click="sel(2)">
                <span>职业</span>
                <b :class="{'tian':istian2}">{{c2}}</b>
            </p>
            <p @click="sel(3)" style="border:0px">
                <span>职务</span>
                <b :class="{'tian':istian3}">{{c3}}</b>
            </p>
        </div>
        <p @click="sub" class="but">提交申请</p>
        <div @click="clo" v-show="l1" class="mask">
            <div class="nu">
                <p @click='cl(item,index)' :key="index" v-for="(item,index) in currlist">{{item}}</p>
                <p style="border:0"></p>
                <p @click="clo" style="height:0.9rem;line-height:0.9rem;font-size: 0.24rem;color: rgb(215, 215, 215);position: fixed;bottom: 0;left: 0;right: 0;;">取消</p>
            </div>
        </div>
    </div>
</template>

<script>
import qs from 'qs';
export default {
    data() {
        return {
            isapp: '',
            errmsg: "",
            name: '',
            idCard: '',
            telephone: '',
            iserr: false,
            istian1: false,
            istian2: false,
            istian3: false,
            wh: '',
            c1: '请选择',
            c2: '请选择',
            c3: '请选择',
            maritalStatus: '',
            l1: false,
            currlist: "",
            hunyinlist: ["未婚", "已婚", "离异"],
            zhiyelist: ["国家机关／事业单位", "计算机／互联网", "金融业", "建筑业", "批发零售", "文体教育", "生产制造", "交通运输", "文化娱乐", "能源环保", "农／林／牧／渔业", "其他"],
            zhiwulist: ["企业所有者", "高管", "经理", "主管", "一般职员", "自由职业", "学生", "其他"],
        }
    },
    computed: {
        WAG() { return this.$store.state.WAG }
    },
    created() {
        var vm = this
        //判断是否是wagonsapp
        if (/from_wagons/.test(navigator.userAgent.toLowerCase())) {
            window.Wground.getApiToken(suc, fail)
        } else {
            this.$ajax({
                url: BASE_URL + '/wxApplicationCell',
                method: 'GET',
                // headers: { 'WAG': this.WAG }
                // headers: { 'WAG': "oZyXk0kQ0moZWIIJVF58Pr4_XZq8" }
            })
                .then(res => {
                    vm.telephone = res.data.data.wxCell
                })
        }

        // if (this.isapp == true) {
        // } else {
        // alert('微信中')
        // this.$ajax({
        //     url: BASE_URL + "/member/applicationCell",
        //     method: 'GET',
        //     headers: { "token": "782379c61ed4485c86466af872a73c25" }
        // })
        //     .then(res => {
        //         vm.telephone == res.data.data.cell
        //     })
        // }
        function suc(token) {
            alert(token)
            vm.$ajax({
                url: BASE_URL + "/member/applicationCell",
                method: 'GET',
                headers: { "token": token }
            })
                .then(res => {
                    vm.telephone = res.data.data.applicationCell
                })
        }
        function fail(data) {
            alert(data)
        }
    },
    methods: {
        sel(n) {
            this.l1 = true
            if (n == 1) { this.currlist = this.hunyinlist; this.wh = 1 }
            if (n == 2) { this.currlist = this.zhiyelist; this.wh = 2 }
            if (n == 3) { this.currlist = this.zhiwulist; this.wh = 3 }
        },
        clo() {
            this.l1 = false
        },
        cl(str, index) {
            if (this.wh == 1) { this.c1 = str; this.maritalStatus = index; this.istian1 = true }
            if (this.wh == 2) { this.c2 = str; this.istian2 = true }
            if (this.wh == 3) { this.c3 = str; this.istian3 = true }
        },
        err: function(str) {
            this.errmsg = str;
            this.iserr = true;
            setTimeout(() => { this.iserr = false }, 1500)
        },
        sub() {
            if (this.name == '') { this.err('请填写姓名'); return false }
            if (this.idCard == '') { this.err('请填写身份证号'); return false }
            if (this.telephone == '') { this.err('请填写手机号'); return false }
            if (this.c1 === '请选择  >') { this.err('请选择婚姻状况'); return false }
            if (this.c2 == '请选择  >') { this.err('请选择职业'); return false }
            if (this.c3 == '请选择  >') { this.err('请选择职务'); return false }
            this.$ajax({
                method: 'POST',
                url: BASE_URL + '/regist',
                data: qs.stringify({
                    maritalStatus: this.maritalStatus,
                    name: this.name,
                    telephone: this.telephone,
                    idCard: this.idCard,
                    career: this.c2,
                    duty: this.c3,
                    type: '3'
                }),
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
            }).then((res) => {
                if (res.data.success == true) {
                    this.$router.push('/app/applysuc?id=' + res.data.data.id)
                    // this.title = '提交成功'
                    // this.id = res.data.data.id;
                } else {
                    this.err(res.data.message)
                }
            })
        }
    }
}
</script>

<style scoped>
.alert_err {
    position: fixed;
    top: 5rem;
    width: 6.8rem;
    height: 1.2rem;
    border-radius: 0.2rem;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    text-align: center;
    line-height: 1.2rem;
    font-size: 0.28rem;
    left: 0.4rem;
}

.tian {
    color: #ffffff!important;
    background: url()!important;
    text-align: right!important;
    padding-right: 0.05rem!important;
    text-indent: 0!important;
}

.mask p {
    z-index: 100;
    height: 1rem;
    background: #fff;
    border-top: 1px solid #f6f6f6;
    font-size: .32rem;
    text-align: center;
    color: #000;
    line-height: 1rem;
    bottom: 0;
}

.nu {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    height: 5.5rem;
    overflow-y: auto;
}

.mask {
    z-index: 10;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, .6);
}

.but {
    width: 7.1rem;
    height: 0.72rem;
    margin: auto;
    background: #fed945;
    font-size: 0.26rem;
    color: #333333;
    text-align: center;
    border-radius: 0.04rem;
    line-height: 0.7rem;
}

:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #666666;
    opacity: 1;
}

::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #666666;
    opacity: 1;
}

input:-ms-input-placeholder {
    color: #666666;
    opacity: 1;
}

input::-webkit-input-placeholder {
    color: #666666;
    opacity: 1;
}

.in b {
    display: inline-block;
    font-size: 0.26rem;
    color: #636364;
    vertical-align: middle;
    width: 4.4rem;
    float: right;
    margin: auto;
    background: url('../../assets/app/applya.png');
    background-size: 0.2rem;
    background-repeat: no-repeat;
    background-position: 4.15rem 0.02rem;
    text-indent: 3.2rem;
    margin-right: 0.3rem;
}

.in p {
    height: 1rem;
    width: 6.8rem;
    display: flex;
    margin-left: 0.3rem;
    border-bottom: 1px solid #3d454d;
}

.in input {
    font-size: 0.26rem;
    background: rgba(0, 0, 0, 0);
    border: 0;
    text-align: right;
    width: 4.4rem;
    height: 0.6rem;
    vertical-align: middle;
    color: #ffffff;
    float: right;
    margin: auto;
    outline: none;
    font-weight: 300;
    margin-right: 0.3rem;
}

.in span {
    vertical-align: middle;
    color: #ffffff;
    font-size: 0.26rem;
    display: inline-block;
    width: 1.5rem;
    height: 0.3rem;
    margin: auto;
    margin-left: 0.1rem;
}

.in {
    background: #273039;
    width: 7.1rem;
    margin: auto;
    margin-bottom: 0.3rem;
    border-radius: 0.04rem;
}

.qq {
    width: 7.1rem;
    height: 1rem;
    display: block;
    margin: auto;
    background: url('../../assets/app/apply1.jpg');
    background-size: 100% 100%;
    border-bottom: 1px solid #273039;
    margin-top: 0.42rem;
    margin-bottom: 0.4rem;
    border-radius: 0.04rem;
}
</style>
