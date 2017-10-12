<template>
    <div style="position:absolute;width:100%;height:100%">
        <div style="min-height:100%;background:rgb(15, 25, 35)">
            <h1 style="height:1px"></h1>
            <div class="rad"></div>
            <div class="rad1"></div>
            <div class="rad2"></div>
            <div class="rad3"></div>
            <p class="at">申请审核中</p>
            <div class="ga">
                <p>尊敬的用户：</p>
                <p>您提交的申请我们已收到，评估工作正在忙碌地进行中。我们会及时向您通报进展。</p>
            </div>
            <img style="width: 5.22rem;margin: 0.74rem auto auto;padding-bottom: 0.78rem;position: absolute;bottom: 0;left: 0;right: 0;" src="../../assets/app/blogo.png">
        </div>
    </div>
</template>

<script>
require('../app/rem.js')(window, document)
export default {
    data() {
        return {}
    }
}
</script>

<style scoped>
.ga p {
    width: 6.5rem;
    margin: auto;
    line-height: 0.5rem;
}

.ga {
    width: 7.1rem;
    height: 1.8rem;
    background: #273039;
    margin: auto;
    margin-top: 1.2rem;
    border-radius: 0.04rem;
    font-size: 0.24rem;
    color: #ffffff;
    padding-top: 0.2rem;
}

@keyframes myfirst {
    0% {
        transform: scale(0, 0);
        -ms-transform: scale(0, 0);
        /* IE 9 */
        -webkit-transform: scale(0, 0);
        /* Safari 和 Chrome */
        -o-transform: scale(0, 0);
        /* Opera */
        -moz-transform: scale(0, 0);
        opacity: 1;
    }
    100% {
        transform: scale(1, 1);
        -ms-transform: scale(1, 1);
        /* IE 9 */
        -webkit-transform: scale(1, 1);
        /* Safari 和 Chrome */
        -o-transform: scale(1, 1);
        /* Opera */
        -moz-transform: scale(1, 1);
        opacity: 0;
    }
}

@-moz-keyframes myfirst
/* Firefox */

{
    0% {
        transform: scale(0, 0);
        -ms-transform: scale(0, 0);
        /* IE 9 */
        -webkit-transform: scale(0, 0);
        /* Safari 和 Chrome */
        -o-transform: scale(0, 0);
        /* Opera */
        -moz-transform: scale(0, 0);
        opacity: 1;
    }
    100% {
        transform: scale(1, 1);
        -ms-transform: scale(1, 1);
        /* IE 9 */
        -webkit-transform: scale(1, 1);
        /* Safari 和 Chrome */
        -o-transform: scale(1, 1);
        /* Opera */
        -moz-transform: scale(1, 1);
        opacity: 0;
    }
}

@-webkit-keyframes myfirst
/* Safari 和 Chrome */

{
    0% {
        transform: scale(0, 0);
        -ms-transform: scale(0, 0);
        /* IE 9 */
        -webkit-transform: scale(0, 0);
        /* Safari 和 Chrome */
        -o-transform: scale(0, 0);
        /* Opera */
        -moz-transform: scale(0, 0);
        opacity: 1;
    }
    100% {
        transform: scale(1, 1);
        -ms-transform: scale(1, 1);
        /* IE 9 */
        -webkit-transform: scale(1, 1);
        /* Safari 和 Chrome */
        -o-transform: scale(1, 1);
        /* Opera */
        -moz-transform: scale(1, 1);
        opacity: 0;
    }
}

@-o-keyframes myfirst
/* Opera */

{
    0% {
        transform: scale(0, 0);
        -ms-transform: scale(0, 0);
        /* IE 9 */
        -webkit-transform: scale(0, 0);
        /* Safari 和 Chrome */
        -o-transform: scale(0, 0);
        /* Opera */
        -moz-transform: scale(0, 0);
        opacity: 1;
    }
    100% {
        transform: scale(1, 1);
        -ms-transform: scale(1, 1);
        /* IE 9 */
        -webkit-transform: scale(1, 1);
        /* Safari 和 Chrome */
        -o-transform: scale(1, 1);
        /* Opera */
        -moz-transform: scale(1, 1);
        opacity: 0;
    }
}

.rad1 {
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    background: #fed945;
    display: block;
    margin: auto;
    margin-top: 0.7rem;
    margin-bottom: 0.28rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1000px;
    animation-name: myfirst;
    animation-duration: 1.3s;
    animation-timing-function: linear;
    animation-delay: 0.5s;
    animation-iteration-count: infinite;
    /* animation-direction: alternate; */
    animation-play-state: running;
    /* Firefox: */
    -moz-animation-name: myfirst;
    -moz-animation-duration: 1.3s;
    -moz-animation-timing-function: linear;
    -moz-animation-delay: 0.5s;
    -moz-animation-iteration-count: infinite;
    /* -moz-animation-direction: alternate; */
    -moz-animation-play-state: running;
    /* Safari 和 Chrome: */
    -webkit-animation-name: myfirst;
    -webkit-animation-duration: 1.3s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-delay: 0.5s;
    -webkit-animation-iteration-count: infinite;
    /* -webkit-animation-direction: alternate; */
    -webkit-animation-play-state: running;
    /* Opera: */
    -o-animation-name: myfirst;
    -o-animation-duration: 1.3s;
    -o-animation-timing-function: linear;
    -o-animation-delay: 0.5s;
    -o-animation-iteration-count: infinite;
    /* -o-animation-direction: alternate; */
    -o-animation-play-state: running;
}

.rad2 {
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    background: #fed945;
    display: block;
    margin: auto;
    margin-top: 0.7rem;
    margin-bottom: 0.28rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1000px;
    animation-name: myfirst;
    animation-duration: 1.3s;
    animation-timing-function: linear;
    animation-delay: 0.3s;
    animation-iteration-count: infinite;
    /* animation-direction: alternate; */
    animation-play-state: running;
    /* Firefox: */
    -moz-animation-name: myfirst;
    -moz-animation-duration: 1.3s;
    -moz-animation-timing-function: linear;
    -moz-animation-delay: 0.3s;
    -moz-animation-iteration-count: infinite;
    /* -moz-animation-direction: alternate; */
    -moz-animation-play-state: running;
    /* Safari 和 Chrome: */
    -webkit-animation-name: myfirst;
    -webkit-animation-duration: 1.3s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-delay: 0.3s;
    -webkit-animation-iteration-count: infinite;
    /* -webkit-animation-direction: alternate; */
    -webkit-animation-play-state: running;
    /* Opera: */
    -o-animation-name: myfirst;
    -o-animation-duration: 1.3s;
    -o-animation-timing-function: linear;
    -o-animation-delay: 0.3s;
    -o-animation-iteration-count: infinite;
    /* -o-animation-direction: alternate; */
    -o-animation-play-state: running;
}

.rad3 {
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    background: #fed945;
    display: block;
    margin: auto;
    margin-top: 0.7rem;
    margin-bottom: 0.28rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1000px;
    animation-name: myfirst;
    animation-duration: 1.3s;
    animation-timing-function: linear;
    animation-delay: 0.8s;
    animation-iteration-count: infinite;
    /* animation-direction: alternate; */
    animation-play-state: running;
    /* Firefox: */
    -moz-animation-name: myfirst;
    -moz-animation-duration: 1.3s;
    -moz-animation-timing-function: linear;
    -moz-animation-delay: 0.8s;
    -moz-animation-iteration-count: infinite;
    /* -moz-animation-direction: alternate; */
    -moz-animation-play-state: running;
    /* Safari 和 Chrome: */
    -webkit-animation-name: myfirst;
    -webkit-animation-duration: 1.3s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-delay: 0.8s;
    -webkit-animation-iteration-count: infinite;
    /* -webkit-animation-direction: alternate; */
    -webkit-animation-play-state: running;
    /* Opera: */
    -o-animation-name: myfirst;
    -o-animation-duration: 1.3s;
    -o-animation-timing-function: linear;
    -o-animation-delay: 0.8s;
    -o-animation-iteration-count: infinite;
    /* -o-animation-direction: alternate; */
    -o-animation-play-state: running;
}

.rad {
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    background: #fed945;
    display: block;
    margin: auto;
    margin-top: 0.7rem;
    margin-bottom: 0.28rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1000px;
    animation-name: myfirst;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    /* animation-direction: alternate; */
    animation-play-state: running;
    /* Firefox: */
    -moz-animation-name: myfirst;
    -moz-animation-duration: 1s;
    -moz-animation-timing-function: linear;
    -moz-animation-delay: 0s;
    -moz-animation-iteration-count: infinite;
    /* -moz-animation-direction: alternate; */
    -moz-animation-play-state: running;
    /* Safari 和 Chrome: */
    -webkit-animation-name: myfirst;
    -webkit-animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-delay: 0s;
    -webkit-animation-iteration-count: infinite;
    /* -webkit-animation-direction: alternate; */
    -webkit-animation-play-state: running;
    /* Opera: */
    -o-animation-name: myfirst;
    -o-animation-duration: 1s;
    -o-animation-timing-function: linear;
    -o-animation-delay: 0s;
    -o-animation-iteration-count: infinite;
    /* -o-animation-direction: alternate; */
    -o-animation-play-state: running;
}

.at {
    color: #ffffff;
    font-size: 0.32rem;
    text-align: center;
    margin-top: 2.7rem;
}
</style>
