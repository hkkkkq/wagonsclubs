<template>
<div>
    <div class="head">
        <img class="logo" src="../../assets/m-logo.png">
    </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.head-1{
    position: relative;
    height: 1.25rem;
    top: 0;
    left: 0;
}
.head{
    position: fixed;
    top: 0;
    left: 0;
     z-index: 1000; 
    width: 100%;
    height: 0.84rem;
    padding-top: 0.43rem;
    background-color: #06060b;
    box-sizing: content-box;
}
.head .logo{
    width: 4.09rem;
    height: 0.31rem;
    display: block;
    margin: 0.17rem 0 0 1.68rem;
}
</style>
