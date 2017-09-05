<template>
<div style="height: 100%;position: absolute;width: 100%;">
    <div style="background:rgb(15, 25, 35);min-height:100%">
        <p style="height:0.2rem"></p>
        <div class="carinfo">
            <img :src="carData.carImage">
            <div class="left">
                <p class="carname">{{carData.carName}}</p>
                <span class="carstar">{{carData.carLevel}}</span>
                <span>{{carData.carDes}}</span>
            </div>
        </div>
        <div class="useinfo">
            <div>
                <span style="background:#4ac87a" class="rad"></span>
                <div class="lf">
                    <p style="font-size: 0;display: inline-block;width: 5.9rem;">
                        <span @click="starttime" class="date">{{startob == ""?"请选择":(startob.month+1+"-"+startob.date)}}<img src="../../assets/app/der.jpg"></span>
                        <b>{{startob == ""?"--:--":((parseInt(startob.shi)<10?"0"+parseInt(startob.shi):parseInt(startob.shi))+":"+(parseInt(startob.fen)==0?"00":parseInt(startob.fen)))}}</b>
                        <b style="margin-right: 0.18rem;">{{sxqj == undefined?"--":sxqj}}</b>
                        <input v-model="startadd" class="in" type="text" placeholder="请填写取车地址" >
                    </p>
                </div>
            </div>
            <div style="margin-top:0.4rem">
                <span style="background:#fbaf5d" class="rad"></span>                
                <div class="lf">
                    <p style="font-size: 0;display: inline-block;width: 5.9rem;">
                        <span @click="endtime" class="date">{{endob == ""?"请选择":(endob.month+1+"-"+endob.date)}}<img src="../../assets/app/der.jpg"></span>
                        <b>{{endob == ""?"--:--":((parseInt(endob.shi)<10?"0"+parseInt(endob.shi):parseInt(endob.shi))+":"+(parseInt(endob.fen)==0?"00":parseInt(endob.fen)))}}</b>
                        <b style="margin-right: 0.18rem;">{{exqj == undefined?"--":exqj}}</b>
                        <input v-model="endadd" class="in" type="text" placeholder="请填写还车地址">
                    </p>
                </div>
            </div>
        </div>
        <div class="com">
            <div>
                <span style="background:#3d454d" class="rad"></span>
                <div class='rr'>
                    <span>本次用车天数</span>
                    <span style="float:right;color:#fed945">5天</span>
                </div>
            </div>
            <div>
                <span style="background:#3d454d" class="rad"></span>
                <div class='rr'>
                    <span>本次用车天数</span>
                    <span style="float:right">5天</span>
                </div>
            </div>
            <div>
                <span style="background:#3d454d;" class="rad"></span>
                <div style="border:0" class='rr'>
                    <span>本次用车天数</span>
                    <span style="float:right">5天</span>
                </div>
            </div>
        </div>
        <div class='submit'>
            提交订单
        </div>
    </div>
</div>
</template>

<script>
require('../app/rem.js')(window,document)
export default {
    data(){
        return{
            orderType:'',
            carId:'',
            carData:'',
            startadd:'',
            endadd:''
        }
    },
    created(){
        this.carId = this.$route.query.carId
        this.orderType = this.$route.query.orderType
        //请求用户数据和车辆信息
        this.$ajax(BASE_URL+"/car/memberData?carId="+this.carId)
            .then((res)=>{
                console.log(res.data)
                this.carData = res.data.data;
                this.startadd = res.data.data.storeAdds
            })
    },
    computed:{
        startob(){return this.$store.state.starttime},
        endob(){return this.$store.state.endtime},
        sxqj(){
            var x = this.$store.state.starttime.xqj;
            switch(x){
                case 0:return "周日";break;
                case 1:return "周一";break;
                case 2:return "周二";break;
                case 3:return "周三";break;
                case 4:return "周四";break;
                case 5:return "周五";break;
                case 6:return "周六";break;            
            }
        },
        exqj(){
            var x = this.$store.state.endtime.xqj;
            switch(x){
                case 0:return "周日";break;
                case 1:return "周一";break;
                case 2:return "周二";break;
                case 3:return "周三";break;
                case 4:return "周四";break;
                case 5:return "周五";break;
                case 6:return "周六";break;            
            }
        }
    },
    methods:{
        starttime(){
            this.$router.push({path:'/wx/datepicker',query:{type:'starttime'}})
        },
        endtime(){
            this.$router.push({path:'/wx/datepicker',query:{type:'endtime'}})            
        }
    }
}
</script>

<style scoped>
.submit{
    background: #fed945;
    color: #333333;
    font-size: 0.32rem;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    position: absolute;
    display: block;
    width: 100%;
    bottom: 0;
}
.com .rr{
    display: inline-block;
    width: 5.9rem;
    border-bottom: 1px solid #39424a;
}
.com span{
    font-size: 0.26rem;
    color: #ffffff;
    vertical-align: top;
    display: inline-block;
    margin-top: 0.38rem;
    margin-bottom: 0.38rem;
}
.com{
    width: 6.5rem;
    display: block;
    margin: auto;
    height: 3.1rem;
    background: #273039;
    border-radius: 4px;
    margin-top: 0.2rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #999999; opacity:1; 
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #999999;opacity:1;
}

input:-ms-input-placeholder{
    color: #999999;opacity:1;
}

input::-webkit-input-placeholder{
    color: #999999;opacity:1;
}
.in{
    background: rgba(0,0,0,0);
    border: 0;
    color: #999999;
    width: 100%;
    margin-top: 0.48rem;
    margin-bottom: 0.1rem;
}
.lf b{
    font-size: 0.24rem;
    color: #999999;
    display: inline-block;
    vertical-align: top;
    float: right;
    position: relative;
    top: 0.1rem;
}
.date img{
    display: inline-block;
    width: 0.1rem;
    height: 0.18rem;
    margin-left: 0.3rem;
    vertical-align: top;
    position: relative;
    top: 0.15rem;
}
.date{
    vertical-align: top;
    font-size: 0.4rem;
    color:#ffffff;
    display: inline-block
}
.lf{
    display: inline-block;
    border-bottom:1px solid  #39424a
}
.com .rad{
    display: inline-block;
    width: 0.18rem;
    height: 0.18rem;
    border-radius: 100px;
    vertical-align: top;
    position: relative;
    top: 0.03rem;
}
.useinfo .rad{
    display: inline-block;
    width: 0.18rem;
    height: 0.18rem;
    border-radius: 100px;
    vertical-align: top;
    position: relative;
    top: 0.15rem;
}
.useinfo{
    background: #273039;
    width: 6.5rem;
    height: 3.06rem;
    display: block;
    margin: auto;
    margin-top: 0.2rem;
    border-radius: 4px;
    padding: 0.67rem 0.3rem 0.67rem 0.3rem;
}
.carstar{
    color: #ffffff!important;
    border: 1px solid #ffffff;
    border-radius: 4px;
    display: inline-block;
    width: 0.98rem;
    height: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    margin-left: 0.3rem!important;
}
.left{
    display: inline-block;
    width: 4.5rem;
    vertical-align: top;
    height: 100%;
}
.carinfo span{
    font-size: 0.24rem;
    color: #999999;
    margin-left: 0.2rem;
    margin-top: 0.2rem;
}
.carname{
    display: inline-block;
    margin-left: 0.3rem;
    font-size: 0.24rem;
    color: #ffffff;
    vertical-align: top;
    margin-top: 0.3rem;
    width: 100%;
}
.carinfo img{
    width: 2.6rem;
    height: 100%;
    display: inline-block;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.carinfo{
    width: 7.1rem;
    height: 1.3rem;
    display: block;
    margin: auto;
    background: #273039;
    border-radius: 4px;
    font-size: 0;
}
</style>
