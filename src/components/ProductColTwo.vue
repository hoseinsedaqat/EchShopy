<template>
  <div class="product-col">
    <div class="title-product">
      <h3>لپ تاپ</h3>
      <button>مشاهده لپ تاپ ها</button>
    </div>
    <div class="show-book-product">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(laptop, idx) in LaptopCol" :key="(laptop, idx)">
          <router-link :to="`/laptop/${laptop.id}`">
            <div class="card-col-1">
              <img :src="laptop.img" alt="" />
              <p class="p-title">{{ laptop.name }}</p>
              <p class="p-price">
                {{ Number(laptop.finalOffer).toLocaleString() }} تومان
              </p>
            </div>
          </router-link>
        </swiper-slide>

        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { productColSwiperOption } from "../utils/ProductColSwiper";
import "swiper/css/swiper.css";
export default {
  name: "ProductColTwo",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: productColSwiperOption,
    };
  },
  computed: {
    ...mapState(["LaptopCol"]),
  },
};
</script>

<style scoped>
.swiper {
  height: 400px;
  width: 100%;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  background-color: #fff;
  border-radius: 10px;
}
.product-col {
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 1.5rem 1rem;
  margin: 1rem auto;
  border-radius: 10px;
  overflow: hidden;
}

a {
  text-decoration: none;
  color: #333;
}

a:hover {
  color: #ef394e;
}

.product-col .title-product {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #9999;
}
.product-col .title-product button {
  padding: 0.5rem 2rem;
  font-family: "iranSans";
  border: none;
  border-radius: 8px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
}

.product-col .show-book-product {
  width: 100%;
  overflow: hidden;
}

.product-col .show-book-product .card-col-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 1.5rem 0.7rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
  padding: 2rem 2rem;
}

.product-col .show-book-product .card-col-1:hover {
  box-shadow: 0 2px 6px 0 rgba(51, 73, 94, 30%);
  transform: translate(-3px, -3px);
  cursor: pointer;
}

.product-col .show-book-product .card-col-1 img {
  width: 150px;
  height: 150px;
  border-radius: 8px 8px 0 0;
}

.product-col .show-book-product .card-col-1 .p-title {
  margin: 0.5rem 0;
  padding: 0.7rem;
  font-size: 11px;
}

.product-col .show-book-product .card-col-1 span {
  padding: 1rem;
  font-size: 12px;
  background-color: #333;
  padding: 0.4rem;
  color: #fff;
  border-radius: 8px;
  margin: 1rem 0;
}

.product-col .show-book-product div .p-price {
  padding: 0 0 1.4rem 0;
  margin: 1rem;
}

.swiper-button-next {
  left: 0;
  background-color: #fff;
  padding: 2.5rem 1rem;
  color: #333;
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgb(000000, 000000, 000000, 30%);
}

.swiper-button-next::after {
  font-size: 22px;
}
.swiper-button-prev {
  right: 0;
  background-color: #fff;
  padding: 2.5rem 1rem;
  color: #333;
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgb(000000, 000000, 000000, 30%);
}

.swiper-button-prev::after {
  font-size: 22px;
}

@media (max-width: 1350px) {
  .product-col {
    width: 100%;
    margin: 0;
  }
  .product-col .title-product {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .product-col .show-book-product {
    flex-direction: column;
  }
  .product-col .title-product h3 {
    margin: 1rem 0;
  }
  .product-col .show-book-product div img {
    width: 320px;
    height: 220px;
  }
}
</style>
