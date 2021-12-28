<template>
  <div>
    <Header />
    <!-- Cart Empty -->
    <section class="cart-empty" v-if="basketCart.length === 0">
      <div class="cart-empty-title">
        <p>سبد خرید</p>
      </div>
      <div class="cart-empty-content">
        <div>
          <img src="../assets/images/cart/68b7acd6.png" alt="EmptyCart" />
          <h3>سبد خرید شما خالی است!</h3>
        </div>
      </div>
    </section>
    <!-- Cart Full -->
    <section class="cart-full" v-else>
      <div class="cart-full-title">
        <p>سبد خرید</p>
      </div>
      <div class="cart-full-content">
        <div class="hosein-one">
          <div
            class="cart-product"
            v-for="(userBasket, index) in basketCart"
            :key="(userBasket, index)"
          >
            <div class="image-product">
              <img :src="userBasket.img" alt="ProductImages" />
            </div>
            <div class="information-product">
              <p class="information-product-title">{{ userBasket.name }}</p>
              <p class="information-product-delivery">
                <i class="fas fa-store"></i>
                <span>آنلاین شاپ</span>
              </p>
              <p class="information-product-price">
                <i class="fas fa-money-check"></i>
                <span>
                  قیمت محصول :
                  {{ Number(userBasket.finalOffer).toLocaleString() }} هزارتومان
                </span>
              </p>
              <p class="remove-product" @click="rP(index)">
                <i class="fas fa-shipping-fast"></i>
                <span> ارسال توسط آنلاین شاپ </span>
              </p>
              <div class="quantity-product">
                <button @click="aQuantity(userBasket.id)" class="add-button">+</button>
                <span>{{ userBasket.quantity }}</span>
                <button @click="rQuantity(userBasket.id, index)" class="minus-button">
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="hosein-two">
          <div>
            <p>قیمت کالا ها</p>
            <p>{{ Number(totalCount).toLocaleString() }} تومان</p>
          </div>
          <div>
            <p>تخفیف کالا ها</p>
            <p>{{ Number(offerCount).toLocaleString() }} تومان</p>
          </div>
          <div>
            <p>جمع سبد خرید</p>
            <p>{{ Number(totalCount).toLocaleString() }} تومان</p>
          </div>
          <div>
            <button>ادامه فرایند خرید</button>
          </div>
        </div>
      </div>
    </section>
    <section class="cart-image">
      <div>
        <img
          src="../assets/images/cart/3f50a565fd2020696deb374d3e26aed37de655d0_1601820141.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="../assets/images/cart/55382a7719bdbcc008d2835cf13bba41e0cc2eaa_1594115160.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="../assets/images/cart/b0f516985ad4bc24c8bfac2b9cafb7248c129bc3_1600581865.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          src="../assets/images/cart/ec326f713080fe823eb289bb1bcb8f796327fb19_1600077504.jpg"
          alt=""
        />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapState(["basketCart"]),
    ...mapMutations(["dataCart"]),
    totalCount() {
      let totalPrice = 0;
      this.basketCart.forEach((tC) => {
        totalPrice += parseInt(tC.finalOffer) * parseInt(tC.quantity);
      });
      return totalPrice;
    },
    offerCount() {
      // note: offer just calculate for one time for each product, not every time
      let offerPrice = 0;
      this.basketCart.forEach((oP) => {
        offerPrice += parseInt(oP.offer);
      });
      return offerPrice;
    },
  },
  methods: {
    ...mapActions(["removeProduct", "addQuantity", "removeQuantity"]),
    rP(idx) {
      this.removeProduct(idx);
    },
    aQuantity(idx) {
      this.addQuantity(idx);
    },
    rQuantity(idx, index) {
      this.removeQuantity({ idx, index });
    },
  },
  mounted() {
    this.basketCart;
    this.dataCart;
  },
};
</script>
