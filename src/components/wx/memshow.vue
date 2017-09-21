<template>
    <div style="position:absolute;width:100%;height:100%">
        <div style="width:100%;min-height:100%;background:#0f1923">
            <div class="ban">
                <img class="hg" src="../../assets/app/lchg.png">
                <img class="banimg" src="../../assets/app/slc.png">
            </div>
        </div>
    </div>
</template>

<script>
require('../app/rem.js')(window, document)
export default {

}
</script>

<style scoped>
.hg{
    position: absolute;
    width: 1.4rem;
    height: 1.4rem;
}
.banimg{
    width: 100%;
    height: auto;
}
.ban{
    font-size: 0;
    display: block;
    width: 100%;
    height: auto;
    position: relative;
}
</style>
