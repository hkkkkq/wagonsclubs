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
        this.$ajax(BASE_URL + "/member/privilege")
            .then(res => {
                console.log(res)
                // return ;
                if (res.data.data.member.memberType == 0) {
                    this.$router.push('/app/join')
                } else if ((res.data.data.member.memberType == 1) || (res.data.data.member.memberType == 2) || (res.data.data.member.memberType == 3)) {
                    this.$router.push('/wx/wxmember/memshow')
                } else if (res.data.data.member.memberType == 5) {
                    this.$router.push('/wx/wxmember/pending')
                }else{
                    // this.$router.push('/wx/wxmember/memshow')
                    alert('出现了不可预知的问题')
                    this.$router.push('/app/join')
                }
            })
    }
}
</script>

<style scoped>

</style>
