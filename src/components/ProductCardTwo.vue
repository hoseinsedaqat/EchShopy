<template>
  <section class="product-card">
    <div class="p-col-1">
      <img src="../assets/images/card/GoodPrice.png" alt="" />
    </div>
    <div class="p-col-2">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(amz, idx) in AmazingPrice" :key="(amz, idx)">
          <div class="card-col-1">
            <img :src="amz.img" alt="" />
            <p class="p-title">{{ amz.name }}</p>
            <div class="p-offer">
              <del>{{ Number(amz.realPrice).toLocaleString() }}</del>
              <span>{{ amz.precent }}</span>
            </div>
            <p class="p-price">{{ Number(amz.finalOffer).toLocaleString() }} تومان</p>
            <span class="timeInstanced"
              >{{ timeInstanced }} <i class="far fa-clock"></i
            ></span>
            <button class="add-to-cart" @click="aTC(idx)">افزودن به سبد خرید</button>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { timeCount } from "../utils/Timecounter";
import { productCardSwiperOption } from "../utils/ProductCardSwiper";
import "swiper/css/swiper.css";
export default {
  name: "ProductCardTwo",
  title: "Loop mode with multiple slides per group",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: productCardSwiperOption,
      timeInstanced: null,
    };
  },
  computed: {
    ...mapState(["AmazingPrice"]),
  },
  methods: {
    ...mapActions(["addToCart"]),
    showClock() {
      this.timeInstanced = timeCount();
    },
    aTC(idx) {
      this.$swal({
        icon: "success",
        title: "محصول به سبد خرید اضافه شد",
        showConfirmButton: false,
        timer: 1000,
      });
      const aProduct = this.AmazingPrice[idx];
      this.addToCart(aProduct);
    },
  },
  mounted() {
    setInterval(this.showClock, 1000);
  },
};
</script>

<style scoped>
.swiper {
  height: 500px;
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
.product-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ef394e;
  padding: 4rem;
  overflow: hidden;
}

.product-card .p-col-1 {
  margin: 0 2rem;
}

.product-card .p-col-2 {
  overflow: hidden;
  width: 100%;
}
.p-col-1 img {
  width: 170px;
}
.card-col-1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.p-col-2 .card-col-1 img {
  width: 80% !important;
}
.p-col-2 .card-col-1 .p-title {
  margin: 0 1rem;
  color: #333;
  font-size: 12px;
  padding: 1rem;
}

.p-col-2 .card-col-1 .p-price {
  font: 17px;
  margin: 0.4rem 0;
  padding: 1rem;
}

.p-col-2 .card-col-1 .p-offer {
  display: flex;
}
.p-col-2 .card-col-1 .p-offer span:nth-child(2) {
  font-size: 10px;
  margin: 0.3rem;
  background-color: #ef394e;
  color: #fff;
  padding: 0.3rem;
  border-radius: 20px;
}

.p-col-2 .card-col-1 .p-offer del {
  align-self: center;
  color: #444;
}

.p-col-2 .card-col-1 .add-to-cart {
  font-family: "iranSans";
  border: none;
  background-color: #ef394e;
  color: #fff;
  padding: 0.5rem 0.7rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 1rem 0;
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

@media (max-width: 678px) {
  .product-card {
    display: flex;
    flex-direction: column;
  }
  .p-col-2 .card-col-1 img {
    width: 200px !important;
  }

  .p-col-2 {
    margin: 2rem 0 0 0;
  }
  .swiper-button-prev {
    padding: 0;
  }
  .swiper-button-next {
    padding: 0;
  }
}
</style>
