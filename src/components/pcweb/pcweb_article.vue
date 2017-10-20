<template>
    <div style="background:#f5f5f5">
        <div class="ars_banner"></div>

        <h1 style="height:28px"></h1>
        <div class="artit">
            <p>{{article.data.reading.title}}</p>
            <h1>{{article.data.reading.createdTime}}</h1>
        </div>
        <h1 style="height:20px"></h1>
        <div v-html="article.data.reading.content" class="arccc"></div>
        <div class="arfen">
            <a @click="goprev()" :class="{'no':!article.data.reading.upReadingTitle}" style="float:left;">上一页：{{article.data.reading.upReadingTitle?article.data.reading.upReadingTitle:'没有了'}}</a>
            <a @click="gonext()" :class="{'no':!article.data.reading.nextReadingTitle}" style="float:right">{{article.data.reading.nextReadingTitle?article.data.reading.nextReadingTitle:'没有了'}}：下一页</a>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      item: ""
    };
  },
  created() {
    window.scroll(0, 0);
  },
  computed: {
    article() {
      return this.$store.state.articleDetails;
    }
  },
  methods: {
    gonext() {
      if (this.article.data.reading.nextReading) {
        this.$ajax(
          BASE_URL + "/" + this.article.data.reading.nextReading
        ).then(res => {
          this.$store.commit("articleDetails", res.data);
        });
      } else {
        return;
      }
    },
    goprev() {
      if (this.article.data.reading.upReading) {
        this.$ajax(
          BASE_URL + "/" + this.article.data.reading.upReading
        ).then(res => {
          this.$store.commit("articleDetails", res.data);
        });
      } else {
        return;
      }
    }
  }
};
</script>

<style>
.no {
  color: #acacac !important;
  cursor: no-drop !important;
}
.arccc img {
  width: 100%;
  display: block;
  margin: auto;
}

.arfen a {
  margin-top: 20px;
  font-size: 14px;
  color: #494949;
  cursor: pointer;
  text-decoration-line: none;
}

.arfen {
  width: 1000px;
  margin: auto;
  display: block;
  height: 72px;
}

.arccc p {
  width: 800px;
  display: block;
  margin: auto;
  color: #747474;
}

/* .ccc>p>img{
    width: 100%!important;
} */

.arccc {
  width: 800px;
  background: #ffffff;
  padding: 32px 100px 32px 100px;
  margin: auto;
  font-size: 15px;
  color: #a2a2a2;
  line-height: 25px;
}

.artit h1 {
  width: 800px;
  display: block;
  margin: auto;
  color: #747474;
}

.artit p {
  font-size: 24px;
  color: #000000;
  width: 800px;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}

.artit {
  width: 1000px;
  height: 88px;
  margin: auto;
  background: #ffffff;
  padding-top: 32px;
}

.s_banner {
  width: 100%;
  min-width: 1000px;
  height: 217px;
  background: url("../../assets/car_dongtai.jpg") center center no-repeat;
}
</style>
