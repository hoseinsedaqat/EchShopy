<template>
  <div>
    <Header />
    <div class="books-page">
      <div class="books-page-container">
        <div class="books-grid">
          <div class="books-right-col">
            <ul>
              <li class="books-post-free">
                <div>
                  <h5>ارسال رایگان سفارش</h5>
                  <p>سفارش های بالای 300 هزار تومان</p>
                </div>
                <div>
                  <img src="../assets/images/kala/post-free.png" alt="" />
                </div>
              </li>
            </ul>
            <ul class="books-good-category">
              <h5>دسته بندی نتایج</h5>
              <div class="books-all-category">
                <p>
                  <i class="fas fa-long-arrow-alt-left"></i>
                  کتاب لوازم التحریر و هنر
                </p>
                <p>
                  <i class="fas fa-long-arrow-alt-down"></i>
                  کتاب
                </p>
                <p>سایر کتب</p>
                <p>کتاب چاپی غیر فارسی</p>
                <p>کتاب کودک و نوجوان</p>
                <p>کتاب زندگی نامه و دایره المعارف</p>
                <p>کتاب علوم کاربردی , تکنولوژی</p>
                <p>کتاب تاریخ و جغرافیا</p>
                <div v-if="showmoreBook">
                  <p>کتاب فلسفه و روانشناسی</p>
                  <p>کتاب کمک درسی و آزمون</p>
                  <p>کتاب زبان</p>
                  <p>کتاب هنر و سرگرمی</p>
                  <p>کتاب دینی</p>
                  <p>کتاب علوم اجتماعی</p>
                  <p>کتاب شعر و ادبیات</p>
                </div>
                <button @click="showmoreBook = !showmoreBook">
                  مشاهده همه دسته بندی ها
                  <i class="fas fa-long-arrow-alt-down"></i>
                </button>
              </div>
            </ul>
            <ul class="books-search">
              <h5>جستجو در نتایج</h5>
              <div class="books-input">
                <input type="text" name="" id="" placeholder="جستجو ..." />
              </div>
            </ul>
            <ul class="filter-search">
              <span
                class="ui-statusswitcher-slider"
                :class="[
                  forChecksOne
                    ? 'ui-statusswitcher-slider'
                    : 'ui-statusswitcher-slider-2',
                ]"
                @click="filterQueryOne()"
              >
                <span
                  class="ui-statusswitcher-slider-toggle"
                  :class="[
                    forChecksOne
                      ? 'ui-statusswitcher-slider-toggle'
                      : 'ui-statusswitcher-slider-toggle-2',
                  ]"
                ></span>
              </span>
              <p>فقط ارسال فوری</p>
            </ul>
            <ul class="filter-search">
              <span
                class="ui-statusswitcher-slider"
                :class="[
                  forChecksTwo
                    ? 'ui-statusswitcher-slider'
                    : 'ui-statusswitcher-slider-2',
                ]"
                @click="filterQueryTwo()"
              >
                <span
                  class="ui-statusswitcher-slider-toggle"
                  :class="[
                    forChecksTwo
                      ? 'ui-statusswitcher-slider-toggle'
                      : 'ui-statusswitcher-slider-toggle-2',
                  ]"
                ></span>
              </span>
              <p>فقط کالاهای موجود</p>
            </ul>
            <ul class="filter-search">
              <span
                class="ui-statusswitcher-slider"
                :class="[
                  forChecksThree
                    ? 'ui-statusswitcher-slider'
                    : 'ui-statusswitcher-slider-2',
                ]"
                @click="filterQueryThree()"
              >
                <span
                  class="ui-statusswitcher-slider-toggle"
                  :class="[
                    forChecksThree
                      ? 'ui-statusswitcher-slider-toggle'
                      : 'ui-statusswitcher-slider-toggle-2',
                  ]"
                ></span>
              </span>
              <p>فقط کالاهای اصل</p>
            </ul>
          </div>
          <div class="books-left-col">
            <div class="card-books">
              <div v-for="(bpage, idx) in BooksPage" :key="(bpage, idx)">
                <router-link :to="`/books/${bpage.id}`">
                  <img :src="bpage.img" alt="" />
                  <!-- <div class="card-books-direct-info"> -->
                  <p class="card-books-title">{{ bpage.name }}</p>
                  <p class="card-books-price">
                    {{ Number(bpage.finalOffer).toLocaleString() }} تومان
                  </p>
                  <!-- </div> -->
                  <span>
                    <i class="fas fa-store"></i>
                    آنلاین شاپ
                  </span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BookPage",
  data() {
    return {
      showmoreBook: false,
      forChecksOne: true,
      forChecksTwo: true,
      forChecksThree: true,
    };
  },
  computed: {
    ...mapState(["BooksPage"]),
  },
  methods: {
    filterQueryOne() {
      this.forChecksOne = !this.forChecksOne;
    },
    filterQueryTwo() {
      this.forChecksTwo = !this.forChecksTwo;
    },
    filterQueryThree() {
      this.forChecksThree = !this.forChecksThree;
    },
  },
  mounted() {
    // use 1 because in firefox 0 dose not work !!
    document.body.scrollTop = 1;
    document.documentElement.scrollTop = 1;
  },
};
</script>
