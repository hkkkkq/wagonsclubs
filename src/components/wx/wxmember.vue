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
        this.$ajax({
            url:BASE_URL + "/wxPrivilege",
            method:'GET',
            headers:{WAG:'oZyXk0kQ0moZWIIJVF58Pr4_XZq8'}
            })
            .then(res => {
                alert('sss')
                console.log(res)
                if(res.data.code == -100){
                    alert('微信中没有token')
                    this.$router.push('/app/join')
                }
                // return ;
                if (res.data.data.member.memberType == 0) {
                    this.$router.push('/app/join')
                } else if ((res.data.data.member.memberType == 1) || (res.data.data.member.memberType == 2) || (res.data.data.member.memberType == 3)) {
                    this.$router.push('/wx/wxmember/memshow')
                } else if (res.data.data.member.memberType == 5) {
                    this.$router.push('/wx/wxmember/pending')
                }else {
                    alert('出现了不可预知的问题')
                }
            })
    }
}
</script>

<style scoped>

</style>
