<template>
    <div style="height: 100%;position: absolute;width: 100%;">
        <div style="background:rgb(15, 25, 35);min-height:100%">
            <p @click="su" class='but1'>确定</p>
            <div style="display: block;width: 100%;height: 0.8rem;"></div>
            <img class="cf" src="../../assets/app/paysuccess.png">
            <p class="alert">车辆预定成功</p>
            <p class="alert alert1">开始用车时间：
                <span style="color:#fed945">{{startob.year}}年{{startob.month+1}}月{{startob.date}}日{{parseInt(startob.shi)}}:{{parseInt(startob.fen)==0? "00":parseInt(startob.fen)}}</span>
            </p>
            <div class="pays">
                <h1 style="height:1px"></h1>
                <p>
                    <span class="rad"></span>
                    <span>届时我们会将预定车辆送至您指定的地点</span>
                </p>
                <p>
                    <span class="rad"></span>
                    <span>请提前准备好
                        <b>本人身份证</b>
                        <b>驾驶证</b>
                    </span>
                </p>
                <p>
                    <span class="rad"></span>
                    <span>联系电话：4008-625-700</span>
                </p>
                <h1 style="height:1px"></h1>
            </div>
            <img style="width: 5.22rem;margin: 0.74rem auto auto;padding-bottom: 0.78rem;position: absolute;bottom: 0;left: 0;right: 0;" src="../../assets/app/blogo.png">
        </div>
    </div>
</template>

<script>
require('../app/rem.js')(window, document)
export default {
    data() {
        return {

        }
    },
    methods: {
        su() {
            this.$router.push("/wx/findcar")
        }
    },
    computed: {
        startob() { return this.$store.state.starttime },
    }
}
</script>

<style scoped>
.pays>p b {
    color: #f4d144!important;
    font-size: 0.2rem!important;
    border: 1px solid;
    border-radius: 0.04rem;
    padding: 0 0.06rem;
    margin: 0 0.1rem;
}

.rad {
    background: #3d454d;
    width: 0.1rem;
    height: 0.1rem;
    border-radius: 1000px;
    display: inline-block;
    margin-right: 0.28rem;
}

.pays>p {
    margin: 0.42rem 0.3rem;
    font-size: 0.24rem;
    color: #ffffff;
}

.pays {
    width: 7.1rem;
    height: auto;
    border-radius: 0.04rem;
    margin: auto;
    display: block;
    background: #273039;
    margin-top: 0.6rem;
}

.alert1 {
    font-size: 0.24rem!important;
}

.alert {
    color: #ffffff;
    font-size: 0.32rem;
    text-align: center;
    margin-top: 0.24rem;
    margin-bottom: 0.24rem;
}

.cf {
    display: block;
    width: 0.93rem;
    height: 1.06rem;
    margin: auto;
    margin-top: 0.7rem;
}

.but1 {
    display: block;
    width: 1rem;
    height: 0.6rem;
    font-size: 0.3rem;
    color: #ffffff;
    background: #273039;
    text-align: center;
    line-height: 0.6rem;
    border-radius: 4px;
    right: 0.2rem;
    position: absolute;
    top: 0.2rem;
}
</style>
