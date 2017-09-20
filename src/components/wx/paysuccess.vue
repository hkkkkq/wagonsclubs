<template>
    <div style="height: 100%;position: absolute;width: 100%;">
        <div style="background:rgb(15, 25, 35);min-height:100%">
            <p @click="su" class='but1'>确定</p>
            <div style="display: block;width: 100%;height: 0.8rem;"></div>
            <img class="cf" src="../../assets/app/pays.png">
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
    }
}
</script>

<style scoped>
.cf {
    display: block;
    width: 100%;
    height: 5.1rem;
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
