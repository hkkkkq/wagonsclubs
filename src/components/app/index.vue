<template>
    <div class='wrap'>
        <router-view></router-view>
    </div>
</template>
<script>
require('./rem.js')(window, document)
</script>

<style scoped>
.wrap {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>