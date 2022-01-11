<template>
  <header>
    <div class="header">
      <div class="h-col-1">
        <h3>
          <router-link to="/"> اِچ شاپی </router-link>
        </h3>
        <div class="h-search-form">
          <input type="text" placeholder="جستجو در اِچ شاپی..." />
          <button><i class="fa fa-search" aria-hidden="true"></i></button>
        </div>
      </div>
      <div class="h-col-2">
        <router-link to="/login" v-if="!auth">
          <div class="register">
            <i class="fa fa-user"></i>
            <h3>ورود به حساب کاربری</h3>
          </div>
        </router-link>
        <div class="goToProfile" @click="hoverProfile = !hoverProfile" v-else>
          <i class="fa fa-user"></i>
          <i class="fas fa-angle-down"></i>
          <div class="user-hover-to-profile" v-if="hoverProfile">
            <ul class="goToProfileHoverItem">
              <router-link to="/profile">
                <div class="goToProfileImg">
                  <img src="../assets/images/profile/user-profile-img.png" alt="" />
                </div>
                <div class="goToProfileData">
                  <h4 class="english-word">{{ userInfo.email }}</h4>
                  <p class="showYourProfile">
                    مشاهد حساب کاربری
                    <i class="fa fa-angle-left"></i>
                  </p>
                  <p class="start-credit-card">فعالسازی کیف پول</p>
                  <p class="pointInEchClub">
                    <span>دیجی کلاب</span>
                    <span><b>364</b> امتیاز</span>
                  </p>
                </div>
              </router-link>
              <li>
                <i class="fas fa-file-invoice"></i>
                سفارش های من
              </li>
              <li>
                <i class="fas fa-award"></i>
                جوایز دیجی کلاب
              </li>
              <li @click="logOut()">
                <i class="fas fa-sign-out-alt"></i>
                خروج از حساب کاربری
              </li>
            </ul>
          </div>
        </div>
        <div>
          <router-link to="/cart" class="removehoverfrombasket">
            <i class="fas fa-shopping-cart count-basket">
              <span>{{ basketCart.length }}</span>
            </i>
          </router-link>
        </div>
      </div>
    </div>
    <div class="stright-header">
      <DropdownMenuContent />
    </div>
    <div class="mobile-header">
      <div id="mySideNav" class="sidenav">
        <li @click="closeNav()" class="closebtn">
          <i class="fa fa-times" aria-hidden="true"></i>
        </li>
        <li @click="underMenuOne()"><i class="fas fa-bars"></i> دسته بندی کالا ها</li>
        <div v-if="underMenu1" class="under-menu-mobile-one">
          <li>
            <i class="fas fa-laptop"></i>
            کالای دیجیتال
          </li>
          <li>
            <i class="fas fa-tools"></i>
            خودرو، ابزار و تجهیزات صنعتی
          </li>
          <li>
            <i class="fas fa-tshirt"></i>
            مد و پوشاک
          </li>
          <li>
            <i class="fas fa-baby"></i>
            اسباب بازی، کودک و نوزاد
          </li>
          <li>
            <i class="fas fa-apple-alt"></i>
            کالاهای سوپرمارکتی
          </li>
          <li>
            <i class="fas fa-heartbeat"></i>
            زیبایی و سلامت
          </li>
          <li>
            <i class="fas fa-utensils"></i>
            خانه و آشپز خانه
          </li>
          <li @click="closeNav()">
            <router-link to="/books">
              <i class="fas fa-book"></i>
              کتاب، لوازم تحریر و هنر
            </router-link>
          </li>
          <li>
            <i class="fas fa-futbol"></i>
            ورزش و سفر
          </li>
          <li>
            <i class="fas fa-tractor"></i>
            محصولات بومی و محلی
          </li>
        </div>
        <li @click="underMenuTwo()">
          <i class="fas fa-percentage"></i>
          تخفیف ها و پیشنهاد ها
        </li>
        <div v-if="underMenu2" class="under-menu-mobile-two">
          <li>
            <h4>کالاهای شگفت انگیز</h4>
          </li>
          <li>
            <h4>شگفت انگیز سوپرمارکتی</h4>
          </li>
          <li>
            <h4>فروش ویژه</h4>
          </li>
          <li>
            <i class="fas fa-fire"> </i>
            پرفروش ترین کالا ها
          </li>
          <li>
            <i class="fas fa-gift"> </i>
            با هر خرید هدیه بگیرید!
          </li>
          <li>
            <i class="fas fa-tag"> </i>
            تخفیف پایان فصل
          </li>
          <li>
            <i class="fas fa-credit-card"> </i>
            کارت هدیه خرید از اِچ شاپی
          </li>
          <li>
            <i class="fas fa-gifts"> </i>
            تازه های فروشنده جدید
          </li>
        </div>
        <li @click="closeNav()">
          <router-link to="/contact"> تماس با ما </router-link>
        </li>
        <li @click="closeNav()">
          <router-link to="/aboutus"> درباره ما </router-link>
        </li>
        <li @click="closeNav()">
          <router-link to="/login" v-if="!auth">
            <i class="far fa-check-circle" style="color: #ef394e"></i> دیجی کالای من
          </router-link>
          <router-link to="/profile" v-else>
            <i class="far fa-check-circle" style="color: #ef394e"></i> دیجی کالای من
          </router-link>
        </li>
        <li><i class="fas fa-plus-circle" style="color: purple"></i> دیجی پلاس</li>
        <li @click="closeNav()">
          <router-link to="/faq"> سوالی دارید؟ </router-link>
        </li>
        <li>
          <router-link to="/login"> فروشنده شوید </router-link>
        </li>
        <li @click="logOut()" v-if="auth">
          <i class="fas fa-sign-out-alt"></i>
          خروج
        </li>
      </div>
      <div class="mobile-col-1">
        <div>
          <button @click="openNav()">
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
        <div>
          <h3>
            <router-link to="/"> اِچ شاپی </router-link>
          </h3>
        </div>
      </div>
      <div class="mobile-col-2">
        <div>
          <input type="text" placeholder="جستجو در اِچ شاپی..." />
          <button><i class="fa fa-search"></i></button>
        </div>
        <div>
          <router-link to="/login" v-if="!auth">
            <i class="fa fa-user"></i>
          </router-link>
          <router-link to="/profile" v-else>
            <i class="fa fa-user"></i>
          </router-link>
        </div>
        <div>
          <router-link to="/cart">
            <i class="fas fa-shopping-cart count-basket-mobile">
              <span> {{ basketCart.length }} </span>
            </i>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import DropdownMenuContent from "./DropdownMenuContent.vue";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "NewHeader",
  data() {
    return {
      underMenu1: false,
      underMenu2: false,
      auth: false,
      hoverProfile: false,
      userInfo: {},
    };
  },
  components: {
    DropdownMenuContent,
  },
  computed: {
    ...mapState(["basketCart"]),
    ...mapMutations(["dataCart"]),
  },
  methods: {
    ...mapActions(["logOut", "openNav", "closeNav"]),
    underMenuOne() {
      this.underMenu1 = !this.underMenu1;
    },
    underMenuTwo() {
      this.underMenu2 = !this.underMenu2;
    },
  },
  beforeMount() {
    if (localStorage.getItem("userAuth")) {
      var auth = JSON.parse(localStorage.getItem("userAuth"));
      if (auth.auth) {
        this.userInfo = auth;
        this.auth = true;
      }
    } else {
      this.auth = false;
    }
  },
  mounted() {
    this.basketCart;
    this.dataCart;
  },
};
</script>
