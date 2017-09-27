<template>
    <div>
        手机号<input v-model="cell" style="border:1px solid" type="text">
        <button @click="getv" type="button">getv</button>
        验证码<input v-model="userInput" type="text">
        <button @click="login" type="button">submit</button>
    </div>
</template>

<script>
import qs from 'qs';
export default {
    data() {
        return {
            cell:'',
            userInput:''
        }
    },
    created() {

    },
    methods: {
        getv() {
            this.$ajax({
                method: 'POST',
                url: BASE_URL + "/login/send",
                data: qs.stringify({
                    cell:this.cell
                }),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            })
                .then(res => {
                    console.log(res)
                })
        },
        login(){
            this.$ajax({
                method: 'POST',
                url: BASE_URL + "/login/verify",
                data: qs.stringify({
                    cell:this.cell,
                    userInput:this.userInput
                }),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            })
        }
    }
}
</script>

<style scoped>

</style>
