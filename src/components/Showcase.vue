<template>
  <div class="all-showcase">
    <div class="topBanner">
      <img src="../assets/images/showcase/5top.jpg" alt="" />
    </div>
    <div class="showcase-container">
      <div class="testBC">
        <!-- Add Carousel -->
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="(showimg, idx) in ShowcaseImg" :key="(showimg, idx)">
            <img :src="showimg.img" alt="" />
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="new">
        <img src="../assets/images/showcase/gifffLeft.gif" alt="" />
        <img src="../assets/images/showcase/4Left.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { showcaseImgSwiperOption } from "../utils/ShowcaseImgSwiper";
import "swiper/css/swiper.css";
export default {
  name: "Showcase",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: showcaseImgSwiperOption,
    };
  },
  computed: {
    ...mapState(["ShowcaseImg"]),
  },
};
</script>

<style scoped>
.testBC {
  padding: 0 1rem;
}
.showcase-container {
  max-width: 1400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
}
.all-showcase .topBanner {
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
}

.all-showcase .topBanner img {
  width: 100%;
  height: 60px;
  border-radius: 8px;
  margin: 0.2rem 1rem;
}

.showcase-container div:nth-child(1) {
  overflow: hidden;
  width: 100% !important;
  height: 410px !important;
  border-radius: 10px !important;
}

.showcase-container div:nth-child(1) img {
  border-radius: 10px !important;
  width: 100% !important;
  height: 410px !important;
}

.showcase-container .new {
  margin: 0 2rem;
}

.showcase-container .new img {
  width: 100%;
  height: 200px;
  border-radius: 20px;
  margin: 0.2rem 1rem;
}

.swiper-button-next {
  left: 1;
  padding: 2.5rem 0.2rem;
  color: #fff;
  transition: all 0.4s ease;
}

.swiper-button-next:hover {
  transform: translate(-2px);
}

.swiper-button-next::after {
  font-size: 22px;
}
.swiper-button-prev {
  right: 1;
  padding: 2.5rem 0.2rem;
  color: #fff;
  transition: all 0.4s ease;
}

.swiper-button-prev:hover {
  transform: translate(2px);
}

.swiper-button-prev::after {
  font-size: 22px;
}
@media (max-width: 1024px) {
  .showcase-container {
    flex-direction: column;
    margin: 0;
  }
  .showcase-container div:nth-child(1) {
    border-radius: 20px !important;
    width: 100% !important;
    height: auto !important;
    margin: 0 0 1rem 0;
  }
  .showcase-container div:nth-child(1) img {
    border-radius: 20px !important;
    width: 100% !important;
    height: auto !important;
  }
  .showcase-container div:nth-child(2) img {
    width: 300px;
    height: 200px;
    border-radius: 20px;
  }
  .showcase-container .new img {
    width: 100% !important;
    height: auto;
  }
  .all-showcase .topBanner {
    display: none;
  }
}

@media (max-width: 800px) {
  .showcase-container .new img {
    width: 100% !important;
    margin: 0;
  }
}

@media (max-width: 678px) {
  .testBC {
    padding: 0 1rem;
  }
  .showcase-container {
    flex-direction: column;
  }

  .showcase-container div:nth-child(1) {
    border-radius: 20px !important;
    width: 100% !important;
    height: 200px !important;
    margin: 0 0 1rem 0;
  }
  .showcase-container div:nth-child(1) img {
    border-radius: 10px !important;
    width: 100% !important;
    height: 200px !important;
    margin: 0 0 1rem 0;
  }
  .showcase-container div:nth-child(2) img {
    width: 350px;
    height: 200px;
    border-radius: 20px;
  }
  .swiper-button-next {
    padding: 0.2rem;
  }
  .swiper-button-next::after {
    font-size: 14px;
  }
  .swiper-button-prev {
    padding: 0.2rem;
  }
  .swiper-button-prev::after {
    font-size: 14px;
  }
  .showcase-container .new img {
    width: 100% !important;
    margin: 0.4rem 0;
  }
}

@media (max-height: 678px) {
  .showcase-container .new img {
    margin: 0.4rem 0;
  }
}
</style>
