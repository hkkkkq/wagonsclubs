<template>
    <div>

    </div>
</template>

<script>
export default {
    data() {
        return{}
    },
    created() {
        if (/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)) {
            setTimeout(() => {
                location.href = 'itms-apps://itunes.apple.com/app/id1279198452'
            }, 200)
        } else {//安卓应用宝下载
            setTimeout(() => {
                location.href = 'http://m.anzhi.com/share_2862728.html?azfrom=anzhi&host=details&pkg=com.wagons.app&flag=1&aztype=qr'
            }, 200)
        }
    }
}
</script>

<style scoped>

</style>
