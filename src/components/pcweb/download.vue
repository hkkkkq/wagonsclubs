<template>
    <div>

    </div>
</template>

<script>
export default {
    data() {
        return{}
    },
    beforeCreate() {
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

<style>
.kefu{
  display: none!important;
}
body{
    font-size: 0!important;
    background: #ffffff!important;
}
img{
    width: 0!important;
}
.rightlab p {
  font-size: 0px!important;
  color: #f4f4f4;
  text-align: center;
}

.rightlab .qr {
  display: block;
  margin: 37px auto 13px;
  width: 0px!important;
  height: 128px;
}

.rightlab .cclose {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 0px!important;
  height: 14px;
  background: #ffffff!important;
  background-size: 100% 100%;
}

.rightlab {
  width: 0px!important;
  position: fixed;
  right: 0;
  top: 25%;
  height: auto;
  background-color: #ffffff!important;
  z-index: 100;
}

.oo {
  position: absolute;
  display: block;
  width: 0px;
  height: 50px;
  top: 32px;
  left: 141px;
  cursor: pointer;
}

.shu {
  display: inline-block;
  width: 0px!important;
  height: 16px;
  background: #ffffff;
  padding-top: 0px;
  margin: -3px 10px;
}

.pcweb {
  font-family: "Helvetica Neue Light", "HelveticaNeue-Light", "Helvetica Neue", Calibri, Helvetica, Arial, sans-serif;
  background-color: #fff;
}

.active {
  color: #ffffff!important;
}

.header {
  width: 0px!important;
  height: 0px;
  background:#ffffff!important;
  padding-top: 49px;
  background-size: 256px 43px;
  box-sizing: border-box;
  margin: auto;
  padding-left: 314px;
  background-position: 0 40px;
}

.footer {
  width: 0!important;
  min-width: 0px!important;
  height: 0px!important;
  padding-top: 18px;
  box-sizing: border-box;
  background-color: #ffffff!important;
}

.footer p {
  text-align: center;
}

.no1 {
  width: 0px!important;
  height: 22px;
  color: #ffffff;
  font-size: 0px!important;
  margin: 0;
  border-bottom: 0px solid #c5c5c5!important;
}

.no2 {
  width: 0px!important;
  height: 22px;
  color: #ffffff!important;
  font-size: 0px!important;
  padding-top: 9px;
  margin: 0 auto;
}

.router-link {
  line-height: 33px;
  display: inline-block;
  text-decoration: none;
  color: #ffffff!important;
  margin-right: 0px;
}

.router-link i {
  display: block;
  font-size: 0px!important;
}

.router-link b {
  margin-top: 6px;
  display: block;
  font-size: 11px;
}

.phone {
  float: right;
  background: #ffffff!important;
  display: block;
  width: 0px!important;
  height: 0px!important;
  position: relative;
  top: -15px;
}
</style>
