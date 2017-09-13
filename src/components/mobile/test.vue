<template>
  <p>这是测试页面la la la la l</p>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    created(){
        this.$ajax(BASE_URL+"/car/weixinShare?url="+escape(location.href))
            .then((res)=>{
                wx.config({
                        debug: true,
                        appId: res.data.data.sign.appId,
                        timestamp: res.data.data.sign.timestamp,
                        nonceStr: res.data.data.sign.nonceStr,
                        signature: res.data.data.sign.signature,
                        jsApiList: [
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage',
                            'onMenuShareQQ',
                            'onMenuShareWeibo'
                        ]
                    });
            var locationHref = window.location.href;
            wx.ready(function () {
                        wx.onMenuShareTimeline({
                            title: 'WAGONS光速超跑测试',
                            link: locationHref,
                            imgUrl: 'http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg',
                            success:function(){
                                alert('s')
                            },
                            cancel:function(){
                                alert('c')
                            }
                        });

                        wx.onMenuShareAppMessage({
                            title: 'WAGONS光速超跑测试',
                            desc: 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务',
                            link: locationHref,
                            imgUrl: 'http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg',
                            success:function(){
                                alert('s')
                            },
                            cancel:function(){
                                alert('c')
                            }
                        });

                        wx.onMenuShareQQ({
                            title: 'WAGONS光速超跑测试',
                            desc: 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务',
                            link: locationHref,
                            imgUrl: 'http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg',
                            success:function(){
                                alert('s')
                            },
                            cancel:function(){
                                alert('c')
                            }
                        });

                        wx.onMenuShareWeibo({
                            title: 'WAGONS光速超跑测试',
                            desc: 'WAGONS诚邀您驾享豪华超跑，体验至尊五星用车服务',
                            link: locationHref,
                            imgUrl: 'http://wap.wagonsclub.com/source/images/wagons_share_logo.jpg'
                        });
                    });
            })
    }
}
</script>

<style>
 
</style>
