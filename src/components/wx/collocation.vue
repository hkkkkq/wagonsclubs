<template>
    <div style="font-family: PingFangSC-Light, sans-serif;position:absolute;height:100%;width:100%">
        <div style="background:#0f1923;height:100%">
            <div v-if="ifsuccess">
                <img class="suc" src="../../assets/app/collocation.jpg">
                <div class="tips">
                    <p>尊敬的用户：</p>
                    <p>您的托管申请已经提交成功，稍后WAGONS的工作人员会与您取得联系，就合作形式进行进一步确认。</p>
                </div>
            </div>
            <div v-else>
                <h1 style="width:100%;height:1px"></h1>
                <p class="ti">请您填写车辆的基本信息，我们会在审核后与您取得联系。</p>
                <div class="in">
                    <p>
                        <span>车牌号</span><input v-model="carNumber" placeholder="请填写车牌号" />
                    </p>
                    <p>
                        <span>车辆型号</span><input v-model="carType" placeholder="请填写车辆型号" />
                    </p>
                    <p>
                        <span>行驶证所有人</span><input v-model="licenseOwner" placeholder="请填写行驶证所有人" />
                    </p>
                    <p style="border:0">
                        <span>联系电话</span><input v-model="cell" placeholder="请填写联系电话" />
                    </p>
                </div>
                <p @click="collocation" class="but">提交申请</p>
            </div>

        </div>

    </div>
</template>

<script>
require('../app/rem.js')(window, document)
import qs from 'qs';
export default {
    data() {
        return {
            ifsuccess: false,
            carNumber: "",
            carType: "",
            licenseOwner: "",
            cell: ""
        }
    },
    methods: {
        collocation() {
            this.$ajax({
                method: 'POST',
                url: BASE_URL + "/trusteeship/add",
                data: qs.stringify({
                    // idCard:this.idCard,
                    carNumber: this.carNumber,
                    carType: this.carType,
                    licenseOwner: this.licenseOwner,
                    cell: this.cell
                }),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }).then((res) => {
                if (res.data.success == true) {
                    this.ifsuccess = true
                } else {
                    alert(res.data.message)
                }
            })
        }
    }
}
</script>

<style scoped>
.tips p {
    width: 6.5rem;
    margin: auto;
    line-height: 0.5rem;
}

.tips {
    display: block;
    width: 7.1rem;
    height: 1.8rem;
    margin: auto;
    background: #273039;
    border-radius: 4px;
    color: #ffffff;
    font-size: 0.24rem;
    padding-top: 0.2rem;
}

.suc {
    width: 1.92rem;
    height: 1.64rem;
    display: block;
    margin: auto;
    padding-top: 0.72rem;
    margin-bottom: 1.14rem;
}

:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #666666;
    opacity: 1;
}

::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #666666;
    opacity: 1;
}

input:-ms-input-placeholder {
    color: #666666;
    opacity: 1;
}

input::-webkit-input-placeholder {
    color: #666666;
    opacity: 1;
}

.but {
    width: 7.1rem;
    height: 0.72rem;
    margin: auto;
    background: #fed945;
    font-size: 0.26rem;
    color: #333333;
    text-align: center;
    line-height: 0.7rem;
}

.in b {
    display: inline-block;
    font-size: 0.26rem;
    color: #636364;
    vertical-align: middle;
    text-align: right;
}

.in p {
    height: 1rem;
    width: 6.5rem;
    display: flex;
    display: -webkit-flex;
    margin: auto;
    border-bottom: 1px solid #3d454d;
}

.in input {
    margin: auto;
    font-size: 0.26rem;
    background: rgba(0, 0, 0, 0);
    border: 0;
    text-align: right;
    width: 4rem;
    height: 0.6rem;
    vertical-align: middle;
    color: #ffffff;
    float: right;
}

.in span {
    vertical-align: middle;
    color: #ffffff;
    font-size: 0.26rem;
    display: inline-block;
    width: 2rem;
    margin: auto;
}

.in {
    background: #273039;
    width: 7.1rem;
    margin: auto;
    margin-bottom: 0.3rem;
    margin-top: 0.16rem;
}

.ti {
    color: #999999;
    font-size: 0.24rem;
    width: 7.1rem;
    display: block;
    margin: auto;
    margin-top: 0.38rem;
}
</style>
