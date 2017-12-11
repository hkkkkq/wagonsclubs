<template>
    <div style="font-family: PingFangSC-Light, sans-serif;min-height:100%;background:#0f1923;">
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
        <div class="idcard">
            <p>请提供以下图片资料，以确保您可以在WAGONS享受自驾服务。</p>
            <span>身份证照片</span>
            <div>
                <div style="margin-left:0">
                    <input accept="image/*" @change="baseimg(1)" ref='file1' type="file">
                    <img class="preshow" :src="src1">
                    <img src="../../assets/app/++.png">
                    <p>身份证照片(正面)</p>               
                </div>
                <div style="margin-right:0">
                    <input accept="image/*" @change="baseimg(2)" ref='file2' type="file">
                    <img class="preshow" :src="src2">
                    <img src="../../assets/app/++.png">
                    <p>身份证照片(反面)</p>               
                </div>
            </div>
            <span>驾驶证照片</span>
            <div>
                <div style="margin-left:0">
                    <input accept="image/*" @change="baseimg(3)" ref='file3' type="file">
                    <img class="preshow" :src="src3">
                    <img src="../../assets/app/++.png">     
                    <p>驾驶证照片(正页)</p>               
                </div>
                <div style="margin-right:0">
                    <input accept="image/*" @change="baseimg(4)" ref='file4' type="file">
                    <img class="preshow" :src="src4">
                    <img src="../../assets/app/++.png">                    
                    <p>驾驶证照片(副页)</p>          
                </div>
            </div>
        </div>
        <p @click="sub" class="but">提交申请</p>
        <h1 style="height:1.75rem"></h1>
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
            src1:'',
            src2:'',
            src3:'',
            src4:'',
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
                headers: { 'WAG': this.WAG }
            })
                .then(res => {
                    vm.telephone = res.data.data.wxCell
                })
        }
        function suc(token) {
            // alert(token)
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
        baseimg (type) {
            var vm = this
            var reader = new FileReader();
            reader.onloadstart = function(e) {
                console.log("开始读取....");
            };
            reader.onprogress = function(e) {
                console.log("正在读取中....");
            };
            reader.onabort = function(e) {
                console.log("中断读取....");
            };
            reader.onerror = function(e) {
                console.log("读取异常....");
            };
            if (type == 1) {
                reader.onload = function(e) {
                    vm.src1 = e.target.result;
                    console.log("成功读取....");
                };
                reader.readAsDataURL(this.$refs.file1.files[0]);
            } else if (type == 2) {
                reader.onload = function(e) {
                    vm.src2 = e.target.result;
                    console.log("成功读取....");
                };
                reader.readAsDataURL(this.$refs.file2.files[0]);
            } else if (type == 3) {
                reader.onload = function(e) {
                    vm.src3 = e.target.result;
                    console.log("成功读取....");
                };
                reader.readAsDataURL(this.$refs.file3.files[0]);
            } else if (type == 4) {
                reader.onload = function(e) {
                    vm.src4 = e.target.result;
                    console.log("成功读取....");
                };
                reader.readAsDataURL(this.$refs.file4.files[0]);
            }
        },
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
            var vm = this
            if (this.name == '') { this.err('请填写姓名'); return false }
            if (this.idCard == '') { this.err('请填写身份证号'); return false }
            if (this.telephone == '') { this.err('请填写手机号'); return false }
            if (this.c1 === '请选择  >') { this.err('请选择婚姻状况'); return false }
            if (this.c2 == '请选择  >') { this.err('请选择职业'); return false }
            if (this.c3 == '请选择  >') { this.err('请选择职务'); return false }
            var params = new FormData();
            params.append('name',vm.name)
            params.append('telephone',vm.telephone)
            params.append('idCard',vm.idCard)
            params.append('career',vm.c2)
            params.append('duty',vm.c3)
            params.append('type',3)
            params.append('maritalStatus',this.maritalStatus)
            console.log(this.$refs.file1.files[0])
            params.append('idCardImage',this.$refs.file1.files[0])
            params.append('idCardImage',this.$refs.file2.files[0])
            params.append('drivingLicenseImage',this.$refs.file3.files[0])
            params.append('drivingLicenseImage',this.$refs.file4.files[0])
            this.$ajax({
                method: 'POST',
                url: BASE_URL + '/regist',
                data: params,
            }).then((res) => {
                if (res.data.success == true) {
                    this.$router.push('/app/applysuc?id=' + res.data.data.id)
                } else {
                    this.err(res.data.message)
                }
            })
        }
    }
}
</script>

<style lang='scss' scoped>
.idcard{
    width: 7.1rem;
    padding: 0.42rem 0;
    margin: auto;
    font-size: 0;
    border-top: 1px solid #3d454d;
    >p{
        font-size: 0.24rem;
        color: #999999;
    }
    >span{
        font-size: 0.24rem;
        color: #fff;
        margin-top: 0.32rem;
        display: block;
    }
    >div{
        margin-top: 0.18rem;
        width: 100%;
        display: flex;
        display: -webkit-flex;
        >div{
            background: #273039;
            width: 3.46rem;
            height: 2.3rem;
            margin: auto;
            font-size: 2rem;
            color: #fff;
            position: relative;
            border-radius: 4px;
            display: flex;
            display: -webkit-flex;
            flex-direction: column;
            input{
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 2;
                opacity: 0;
                border: 0;
            }
            .preshow{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: 0;
                z-index: 1;
            }
            .preshow[src=""]{
                opacity: 0;
            }
            img{
                width: 0.52rem;
                margin: auto;
                height: 0.52rem;
            }
            p{
                font-size: 0.2rem;
                color: #fff;
                margin: auto;
                margin-top: 0;
                text-align: center;
            }
        }
    }
}
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
    max-height: 5.5rem;
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
    width: 4.5rem;
    float: right;
    margin: auto;
    background: url('../../assets/app/applya.png');
    background-size: 0.2rem;
    background-repeat: no-repeat;
    background-position: 4.15rem 0.02rem;
    text-indent: 3.2rem;
    margin-right: 0.2rem;
}

.in p {
    height: 1rem;
    width: 6.8rem;
    display: flex;
    display: -webkit-flex;
    margin-left: 0.3rem;
    border-bottom: 1px solid #3d454d;
}

.in input {
    font-size: 0.26rem;
    background: rgba(0, 0, 0, 0);
    border: 0;
    text-align: right;
    width: 3rem;
    height: 0.6rem;
    vertical-align: middle;
    color: #ffffff;
    margin: auto;
    outline: none;
    font-weight: 300;
    margin-right: 0.3rem;
}

.in span {
    color: #ffffff;
    font-size: 0.26rem;
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
