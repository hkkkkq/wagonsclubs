<template>
    <div style="font-size:0">
        <m-header v-if="!wag"></m-header>
        <a  v-if="!wag" @click="goo" class="goback"></a>
        <span v-if="(isNew)&&(!wag)" @click="call" class="share"></span>
        <div  v-if="!wag" class="empty"></div>
        <img src="../../assets/zw1.png">
        <img src="../../assets/zw2.png">
        <img src="../../assets/zw3.jpg">
        <img src="../../assets/zw4.png">
    </div>
</template>

<script>
require('./rem.js')(window, document);
import header from './header.vue'

export default {
    data() {
        return {

        }
    },
    computed: {
        isNew() { return this.$store.state.isNewApp }
    },
    components: {
        'm-header': header,
    },
    created() {
        if (/isNewApp=true/.test(document.referrer)) {
            window.ground.hideHeader();
            this.$store.commit('isNewApp')
        }
        if (/from_wagons/.test(navigator.userAgent.toLowerCase())) {
            this.wag = true
        } else {
            this.wag = false
        }
    },
    methods: {
        goo() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
img {
    width: 100%;
    display: block;
}

.share {
    position: relative;
    top: -0.8rem;
    float: right;
    margin-right: 0.3rem;
    display: block;
    width: 0.35rem;
    height: 0.35rem;
    z-index: 1000000;
    background-image: url('../../assets/share.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.goback {
    z-index: 1000;
    position: fixed;
    left: 0.06rem;
    top: 0.37rem;
    width: 0.8rem;
    height: 0.8rem;
    background: url('../../assets/m-goback.png') no-repeat center center;
    background-size: 0.3rem 0.3rem;
}

.content {
    width: 7.5rem;
    height: 52.85rem;
    margin: 0 auto;
    background: url('../../assets/groundBJ.jpg') no-repeat;
    background-size: 100% 100%;
}

.empty {
    width: 7.5rem;
    height: 1.27rem;
}
</style>
