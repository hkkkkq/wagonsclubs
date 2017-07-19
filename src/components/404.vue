<template>
    <div>
        <div v-if='ish5'>h5 page not found</div>
        <div class="pc" v-else>
            <img class="pcimg" src="../assets/car_pc_404.png" /> 
            <p>页面找不到了</p>
            <p style="padding-top:20px">这里的跑车早被别人捷足先登啦</p>
        </div> 
    </div>  
</template>
<script>
export default {
    data(){
        return {
            ish5:'true'
        }
    },
    created(){
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            this.ish5 = true;
        } else {
            this.ish5 = false
            }
    }
}
</script>
<style scoped>
.pc p{
    position: relative;
    top:-100px;
    color: #cacaca;
    text-align: center;
}
.pcimg{
    display: block;
    margin: auto;
    margin-top: 10%;
}
</style>
