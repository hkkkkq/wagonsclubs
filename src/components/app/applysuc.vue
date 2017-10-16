<template>
    <div style="font-family: PingFangSC-Light, sans-serif;height:100%;background:#0f1923;">
        <p style="width:100%;height:1px"></p>
        <div class="qq"></div>
        <img style="width:7.1rem;display:block;margin:auto" src="../../assets/app/suc.jpg">
        <textarea v-model="address" placeholder="请填写您的详细地址" class="area"></textarea>
        <p @click="ok" class="but">完成</p>
    </div>
</template>

<script>
import qs from 'qs';
export default {
    data() {
        return {
            id: '',
            address: ''
        }
    },
    created() {
        this.id = this.$route.query.id;
    },
    methods: {
        ok() {
            this.$ajax({
                method: 'POST',
                url: BASE_URL + "/addrBinding",
                data: qs.stringify({
                    id: this.id,
                    address: this.address
                }),
                headers: { "Content-Type": "application/x-www-form-urlencoded", }
            }).then((res) => {
                if (res.data.success) {
                    if (/from_wagons/.test(navigator.userAgent.toLowerCase())) {
                        window.Wground.close();
                    } else {
                        this.$router.push('/wx/findcar')
                    }
                } else {
                    alert('填写失败，请稍后尝试')
                }
            })
        }
    }
}
</script>

<style scoped>
.but {
    width: 7.1rem;
    height: 0.72rem;
    margin: auto;
    background: #fed945;
    font-size: 0.26rem;
    color: #333333;
    text-align: center;
    line-height: 0.7rem;
    margin-top: 0.3rem;
    border-radius: 0.04rem;
}

.area {
    width: 6.5rem;
    display: block;
    margin: auto;
    height: 1.3rem;
    background: #273039;
    color: #ffffff;
    font-size: 0.26rem;
    border: 0;
    border-radius: 0.04rem;
    line-height: 0.4rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
    padding-top: 0.1rem;
    margin-top: 0.46rem;
}

.qq {
    width: 7.1rem;
    height: 1rem;
    display: block;
    margin: auto;
    background: url('../../assets/app/apply2.jpg');
    background-size: 100% 100%;
    border-bottom: 1px solid #273039;
    margin-top: 0.42rem;
    margin-bottom: 0.4rem;
    border-left: 1px solid #273039;
    border-radius: 0.04rem;
}
</style>
