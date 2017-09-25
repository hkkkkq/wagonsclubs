<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    created() {
        this.$ajax(BASE_URL + "/car/memberType")
            .then(res => {
                if (res.data.data.JumpInfo.userType == 0) {
                    this.$router.push('/app/join')
                } else if ((res.data.data.JumpInfo.userType == 1) || (res.data.data.JumpInfo.userType == 2) || (res.data.data.JumpInfo.userType == 3)) {
                    this.$router.push('/wx/wxmember/memshow')
                } else if (res.data.data.JumpInfo.userType == 5) {
                    this.$router.push('/wx/wxmember/pending')
                }else{
                    alert('出现了不可预知的问题')
                }
            })
    }
}
</script>

<style scoped>

</style>
