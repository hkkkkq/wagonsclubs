<template>
    <div style="font-family: PingFangSC-Light, sans-serif;position:absolute;width:100%;height:100%">
        <div style="width:100%;height:100%">
            <transition name="scale">
            <img v-if="bg" class="bg" src="../../assets/app/loginbg.png">
            </transition>
            <transition name="fade">
            <div v-if="bgzz" class="bgzz"></div>
            </transition>
            <img class="logo" src="../../assets/app/loginlogo.png">
            <div class="in">
                <img class="icon" src="../../assets/app/loginphone.png">
                <input v-model="cell" placeholder="手机号码" class="text" type="text">
            </div>
            <div class="in">
                <img class="icon" src="../../assets/app/loginverify.png">
                <input v-model="userInput" placeholder="验证码" type="text" class="text" style="width:2rem;">
                <span @click="getv" class="get">{{ve}}</span>
            </div>
            <div @click="login" :class="{'butcl':butcl}" class="but">登录</div>
            <p class="law">点击登录表示您已阅读并同意<router-link style="color: #ffffff;" to="/app/law">《用户协议》</router-link> </p>
        </div>
    </div>
</template>

<script>
import qs from 'qs';
require('../app/rem.js')(window, document)
export default {
    data() {
        return {
            cell: '',
            userInput: '',
            butcl:false,
            bgzz:false,
            bg:false,
            ve:"获取验证码"
        }
    },
    created() {
        setTimeout(()=>{
            this.bgzz = true;
            this.bg = true;
        },0)
    },
    computed:{  
        WAG() { return this.$store.state.WAG }
    },
    methods: {
        getv() {
            var vm = this
            if(!(vm.ve == '获取验证码')){
                return;
            }
            this.$ajax({
                method: 'POST',
                // url:"http://192.168.10.212:8095/login/send",
                url: BASE_URL + "/login/send",
                data: qs.stringify({
                    cell: this.cell
                }),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "WAG":this.WAG
                },
            })
                .then(res => {
                    if(res.data.success == true){
                        vm.ve = 59;
                        var timer = setInterval(()=>{
                            if(vm.ve == 0){
                                vm.ve = '获取验证码'
                                clearInterval(timer)
                            }else{
                                vm.ve = vm.ve - 1;
                            }
                        },1000)
                    }else{
                        alert(res.data.message)
                    }
                })
        },
        login() {
            this.butcl = true
            this.$ajax({
                method: 'POST',
                // url:"http://192.168.10.212:8095/login/verify",
                url: BASE_URL + "/login/verify",
                data: qs.stringify({
                    cell: this.cell,
                    userInput: this.userInput
                }),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "WAG":this.WAG
                },
            }).then((res)=>{
                if(res.data.success == false){
                    alert(res.data.message)
                }else{
                    this.$router.go(-1)
                }
            }
            )
        }
    }
}
</script>

<style scoped>

.scale-enter-active,
.scale-leave-active {
    transition: transform 1.5s;
    -moz-transition: transform 1.5s;
    /* Firefox 4 */
    -webkit-transition: transform 1.5s;
    /* Safari 和 Chrome */
    -o-transition: transform 1.5s;
    /* Opera */
}

.scale-enter,
.scale-leave-to
/* .fade-leave-active in below version 2.1.8 */

{
    transform: scale(1.5)
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1.5s;
    -moz-transition: opacity 1.5s;
    /* Firefox 4 */
    -webkit-transition: opacity 1.5s;
    /* Safari 和 Chrome */
    -o-transition: opacity 1.5s;
    /* Opera */
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in below version 2.1.8 */

{
    opacity: 0
}
.butcl{
    background: #ffc600!important;
}
.law{
    font-size: 0.2rem;
    color: #ffffff;
    text-align: center;
    position: absolute;
    bottom: 0.35rem;
    left: 0;
    right: 0;
}
.but{
    width: 5rem;
    height: 0.75rem;
    font-size: 0.24rem;
    color: #000000;
    text-align: center;
    line-height: 0.75rem;
    background: #fed945;
    display: block;
    margin: auto;
    margin-top: 0.8rem;
    border-radius: 0.04rem;
}
.get{
    font-size: 0.22rem;
    color: #ffffff;
    display: inline-block;
    /* vertical-align: top; */
    /* margin-top: 0.25rem; */
    width: 1.8rem;
    text-align: center;
    border-left: 1px solid #ffffff;
    height: 0.26rem;
    margin: auto;
}
:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #bbbbbb;
    opacity: 1;
}

::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #bbbbbb;
    opacity: 1;
}

input:-ms-input-placeholder {
    color: #bbbbbb;
    opacity: 1;
}

input::-webkit-input-placeholder {
    color: #bbbbbb;
    opacity: 1;
}

.text {
    background: rgba(0, 0, 0, 0);
    border: 0;
    /* float: right; */
    /* margin-top: 0.2rem; */
    /* margin-right: 0.25rem; */
    color: #ffffff;
    text-align: left;
    vertical-align: top;
    /* margin-top: 0.15rem; */
    width: 4rem;
    outline: none;
}

.icon {
width: 0.3rem;
    height: 0.36rem;
    margin-left: 0.25rem;
    margin-top: 0.18rem;
    margin-right: 0.25rem;
    display: inline-block;
}

.in {
    width: 5rem;
    height: 0.7rem;
    display: flex;
    margin: auto;
    margin-top: 0.3rem;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 0.04rem;
    font-size: 0;
}

.logo {
    width: 3rem;
    margin: auto;
    display: block;
    padding-top: 3rem;
    margin-bottom: 0.8rem;
}

.bgzz {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

.bg {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -2;
}
</style>
