<template>
    <div style="font-family: PingFangSC-Medium, sans-serif;background:#0f1923">
        <div class="head">
            <p @click="ll(1)" :class="{active:rightc}" style="    border-bottom-left-radius: 1rem;
        border-top-left-radius: 1rem;">会员权益</p>
            <p @click="ll(2)" :class="{active:!rightc}" style="border-bottom-right-radius: 1rem;
        border-top-right-radius: 1rem;">如何加入</p>
        </div>
        <router-view></router-view>
        <img style="width: 5.22rem;height: 0.59rem;display: block;margin: auto;padding-bottom:0.78rem;margin-top: 0.74rem;" src="../../assets/app/blogo.png">
    </div>
</template>

<script>
export default {
    data() {
        return {
            rightc: true
        }
    },
    created() {
        window.scrollTo(0, 0);
        if (/memright/.test(location.href)) {
            this.rightc = true;
        } else {
            this.rightc = false;
        }
    },
    methods: {
        ll(n) {
            if (n == 1) {
                this.rightc = true;
                this.$router.push('memright')
            } else if (n == 2) {
                this.rightc = false;
                this.$router.push('memjoin')
            }
        }
    }
}
</script>

<style scoped>
.head p.active {
    background: #fcd82f;
    color: #0f1923;
}

.head p {
    color: #fcd82f;
    font-size: 0.24rem;
    display: inline-block;
    width: 2.53rem;
    height: 0.6rem;
    border: 1px solid #fcd82f;
    line-height: 0.6rem;
    position: relative;
    top: -0.15rem;
}

.head {
    display: block;
    height: 1.21rem;
    text-align: center;
}
</style>
