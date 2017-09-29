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
        var vm = this
        //获取openid
        this.$store.commit('setOpenId', this.$route.query.WAG)

        //isbinding
        this.$ajax({
            url: BASE_URL + "/car/isBinding",
            method: 'GET',
            headers: { 'WAG': this.$route.query.WAG }
        })
            .then((res) => {//没绑定
                if (res.data.success == false) {
                    alert('去登陆')
                    this.$router.push('/wx/login')
                } else {//绑定了
                    alert('去查询')                
                    this.$ajax({
                        url: BASE_URL + "/wxPrivilege",
                        method: 'GET',
                        // headers: { WAG: 'oZyXk0kQ0moZWIIJVF58Pr4_XZq8' }
                    })
                        .then(res => {
                            // alert(res.data.)
                            alert(res.data.data.member.memberType)
                            if (res.data.code == -100) {
                                this.$router.push('/app/join')
                            }
                            // return ;
                            if (res.data.data.member.memberType == 0) {
                                this.$router.push('/app/join')
                            } else if ((res.data.data.member.memberType == 1) || (res.data.data.member.memberType == 2) || (res.data.data.member.memberType == 3)) {
                                this.$router.push('/wx/wxmember/memshow')
                            } else if (res.data.data.member.memberType == 5) {
                                this.$router.push('/wx/wxmember/pending')
                            } else {
                                alert('出现了不可预知的问题')
                            }
                        })
                }
            })



    }
}
</script>

<style scoped>

</style>
