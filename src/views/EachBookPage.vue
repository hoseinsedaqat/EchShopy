<template>
  <div>
    <Header />
    <div class="kala">
      <div class="kala-grid-container kala-container">
        <div>
          <img :src="getBooks.img" alt="" />
          <div class="kala-put-new-details">
            <p @click="likeBtn()" :class="like ? 'forlike' : 'fordislike'">
              <i class="fa fa-heart"></i>
            </p>
            <p>
              <i class="fa fa-share-alt"></i>
            </p>
            <p>
              <i class="far fa-bell"></i>
            </p>
            <p>
              <i class="far fa-chart-bar"></i>
            </p>
          </div>
          <button class="kala-gallery-pic" @click="showImgGalley()">گالری تصاویر</button>
        </div>
        <div>
          <h5>{{ getBooks.name }}</h5>
          <p class="kala-info-one">
            <i class="far fa-thumbs-up"></i>
            ۸۹٪ (۴۷۴ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند.
          </p>
          <ul>
            <p>ویژگی های کالا:</p>
            <li>
              <i class="fas fa-circle"></i>
              وزن : 220 گرم
            </li>
            <li>
              <i class="fas fa-circle"></i>
              قطع : رقعی
            </li>
            <li>
              <i class="fas fa-circle"></i>
              نوع جلد : شومیز
            </li>
            <li>
              <i class="fas fa-circle"></i>
              نوع کاغذ : تحریر
            </li>
            <li>
              <i class="fas fa-circle"></i>
              شابک : 9786227195132
            </li>
          </ul>
          <p class="goods-warning">
            <i class="fas fa-exclamation-circle"></i>
            امکان برگشت کالا در گروه کتاب با دلیل "انصراف از خرید" تنها در صورتی مورد قبول
            است که پلمپ کالا باز نشده باشد.
          </p>
          <div class="post-free">
            <div>
              <div class="post-free-title">
                <h4>
                  <i class="fas fa-truck"></i>
                  ارسال رایگان سفارش
                </h4>
                <p class="post-block">اولین سفارش کاربران جدید</p>
              </div>
              <img src="../assets/images/kala/post-free.png" alt="" />
            </div>
          </div>
        </div>
        <div class="kala-last-col">
          <p>فروشنده</p>
          <div class="kala-buy-info">
            <p>
              <i class="fas fa-store"></i>
              اِچ شاپی
            </p>
            <p>
              <span>100%</span>
              رضایت خریداران | عملکرد <span>عالی</span>
            </p>
            <div class="kala-buy-info-hover">
              <p class="hover-product">
                <i class="fa fa-store"></i>
                اِچ شاپی
              </p>
              <div class="hover-precent">
                <h4>92.7%</h4>
                <span>رضایت خریداران از کیفیت کالا</span>
                <span>از مجموع 78 نفر</span>
              </div>
              <div class="hover-progress-bars">
                <span class="h-p-b-1"></span>
                <span class="h-p-b-2"></span>
                <span class="h-p-b-3"></span>
              </div>
              <div class="hover-agree-user">
                <p>کاملا راضی</p>
                <p>بدون نظر</p>
              </div>
              <div class="hover-precent">
                <h4>عالی</h4>
                <span>عملکرد عالی فروشنده</span>
              </div>
              <div class="hover-last-inforamtion">
                <span>
                  <p>100%</p>
                  <p class="hover-last-information-texts">تامین به موقع</p>
                </span>
                <span>
                  <p>93%</p>
                  <p class="hover-last-information-texts">تعهد ارسال</p>
                </span>
                <span>
                  <p>95%</p>
                  <p class="hover-last-information-texts">بدون ثبت مرجوعی</p>
                </span>
              </div>
            </div>
          </div>
          <div class="kala-guaranty">
            <p>
              <i class="fas fa-award"></i>
              گارانتی 24 ماهه آنلاین شاپ
            </p>
          </div>
          <div class="kala-post">
            <p>
              <i class="fas fa-shipping-fast"></i>
              موجود در انبار فروشنده
            </p>
          </div>
          <div class="kala-price">
            <p class="kala-price-1">قیمت فروشنده</p>
            <p class="kala-price-2">
              {{ Number(getBooks.finalOffer).toLocaleString() }} تومان
            </p>
          </div>
          <button @click="aTC()">افزودن به سبد خرید</button>
        </div>
      </div>
      <div class="kala-data kala-container">
        <button @click="naqdM" :class="naqd ? 'showDataProduct' : 'hideDataProduct'">
          نقد و بررسی
        </button>
        <button
          @click="profileM"
          :class="profile ? 'showDataProduct' : 'hideDataProduct'"
        >
          مشخصات
        </button>
        <button
          @click="commentM"
          :class="comment ? 'showDataProduct' : 'hideDataProduct'"
        >
          دیدگاه کاربران
        </button>
        <div v-if="naqd" class="naqd">
          <h4>نقد و بررسی اجمالی</h4>
          <span> {{ getBooks.name }} </span>
          <p>
            اگر می‌خواهید از جایی که هستید به جایی که می‌خواهید بروید، باید با درک
            انتخاب‌هایی که شما را از مقصد مورد نظر خود دور می‌کنند، شروع کنید.» «فرمول
            کامل برای به دست آوردن خوش شانسی: آماده‌سازی (رشد شخصی) + نگرش (باور / ذهنیت)
            + فرصت (چیز خوبی که راه را هموار می‌کند) + اقدام (انجام کاری در مورد نظر) =
            شانس» «ما همه می‌توانیم انتخاب‌های بسیار خوبی داشته باشیم. ما می‌توانیم همه
            چیز را کنترل کنیم. این در توانایی ماست که همه چیز را تغییر دهیم. به جای اینکه
            غرق در گذشته شویم، باید دوباره انرژی خود را جمع کنیم، می‌توانیم از تجربیات
            گذشته برای حرکت‌های مثبت و سازنده استفاده کنیم.» برای ایجاد تغییر، ما نیاز به
            این داریم که عادات و رفتار خوب را ایجاد کنیم، که در کتاب از آن به عنوان تکانش
            یاد می شود. تکانش بدین معنی که با ریتم منظم و دائمی و ثبات قدم همراه باشید.
            حرکت های افراطی و تفریطی، موضع های عجله ای و جوگیر شدن و عدم ریتم مناسب موجب
            خواهد شد که ثبات قدم نداشته باشیم و حتی شاید از مسیر اصلی دور شویم و تکانش ما
            با لرزه های فراوان و یا حتی سکون و سکوت مواجه شود. واقعیت رهرو آن است که آهسته
            و پیوسته رود اینجا پدیدار می گردد و باید همیشه بدانیم هیچ چیز مثل عدم ثبات قدم
            و نداشتن ریتم مناسب در زمان تغییر، نمی تواند تکانش را با مشکل مواجه کند! متن
            بالا شاید بهترین خلاصه ای باشد که می شود از کتاب نوشت!
          </p>
        </div>
        <div v-if="profile" class="profile">
          <h4>نقد و بررسی اجمالی</h4>
          <span> {{ getBooks.name }} </span>
          <div class="kala-profile">
            <div class="kala-profile-1">مشخصات کلی</div>
            <div class="kala-profile-2">
              <ul>
                <li>
                  <p class="kala-profile-label">وزن</p>
                  <p>220 گرم</p>
                </li>
                <li>
                  <p class="kala-profile-label">نویسنده</p>
                  <p>اروین یالوم</p>
                </li>
                <li>
                  <p class="kala-profile-label">قطع</p>
                  <p>رقعی</p>
                </li>
                <li>
                  <p class="kala-profile-label">نوع جلد</p>
                  <p>شومیز</p>
                </li>
                <li>
                  <p class="kala-profile-label">نوع کاغذ</p>
                  <p>تحریر</p>
                </li>
                <li>
                  <p class="kala-profile-label">مترجم</p>
                  <p>ناهید محمدی</p>
                </li>
                <li>
                  <p class="kala-profile-label">شابک</p>
                  <p>9786227195132</p>
                </li>
                <li>
                  <p class="kala-profile-label">رده بندی کتاب</p>
                  <p>روان‌شناسی</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-if="comment" class="comment">
          <h4>امتیاز و دیدگاه کاربران</h4>
          <span> {{ getBooks.name }} </span>
          <div class="kala-comment">
            <div class="kala-comment-1">
              <div class="kala-comment-progress">
                <p>کیفیت ساخت</p>
                <div>
                  <progress value="75" max="100"></progress>
                  <span>75%</span>
                </div>
              </div>
              <div class="kala-comment-progress">
                <p>ارزش خرید به نسبت قیمت</p>
                <div>
                  <progress value="50" max="100"></progress>
                  <span>50%</span>
                </div>
              </div>
              <div class="kala-comment-progress">
                <p>نوآوری</p>
                <div>
                  <progress value="25" max="100"></progress>
                  <span>25%</span>
                </div>
              </div>
              <div class="kala-comment-progress">
                <p>امکانات و قابلیت ها</p>
                <div>
                  <progress value="50" max="100"></progress>
                  <span>50%</span>
                </div>
              </div>
              <div class="kala-comment-progress">
                <p>سهولت استفاده</p>
                <div>
                  <progress value="75" max="100"></progress>
                  <span>75%</span>
                </div>
              </div>
              <div class="kala-comment-progress">
                <p>طراحی و ظاهر</p>
                <div>
                  <progress value="100" max="100"></progress>
                  <span>100%</span>
                </div>
              </div>
              <button class="kala-comment-btn">افزودن دیدگاه</button>
            </div>
            <div class="kala-comment-2">
              <div class="kala-user-comment">
                <div>
                  <img src="../assets/images/kala/user-1.png" alt="" />
                </div>
                <div>
                  <h5>حسین</h5>
                  <p>
                    عالیییییی بود این کتاب اصلا فکرش رو نمیکردم اینقدر محتواش روم تاثیر
                    بذاره به تمام کاربران اچ شاپی پیشنهاد میکنم این کتاب رو بخونن بسته
                    بندی و نحوه ارسال هم بد نبود
                  </p>
                </div>
              </div>
              <div class="kala-user-comment">
                <div>
                  <img src="../assets/images/kala/user-2.png" alt="" />
                </div>
                <div>
                  <h5>نازنین</h5>
                  <p>
                    واقعا همه چی عالی و خوب بود هم خود کتاب هم نحوی بسته بندییشون برا خیلی
                    بود چون من عضو دیچی پلاس هم هستم کلی تخفیف بهم خورد توی این روزا تنها
                    چیزی بود که واقعا خوشحالم کرد من چند ساله دارم از اِچ شاپی خرید مینکم
                    هم راضیم هم به دوستام میگم از اچ شاپی فقط کتاب بخرین
                  </p>
                </div>
              </div>
              <div class="kala-user-comment">
                <div>
                  <img src="../assets/images/kala/user-1.png" alt="" />
                </div>
                <div>
                  <h5>زهیر</h5>
                  <p>
                    این کتاب رو از اچ شاپی برا اولین بار بود که گرفتم اصلا نمیدونستم
                    اینقدر پیشرفت کردن آخرین کتابی که سفارش دادم ازشون زیاد جالب به دست
                    نرسید خیلی همین جور ادامه بدین دوستان
                  </p>
                </div>
              </div>
              <div class="kala-user-comment">
                <div>
                  <img src="../assets/images/kala/user-2.png" alt="" />
                </div>
                <div>
                  <h5>مبینا</h5>
                  <p>
                    مواقعا همه چی عالی و خوب بود هم خود کتاب هم نحوی بسته بندییشون برا
                    خیلی بود چون من عضو دیچی پلاس هم هستم کلی تخفیف بهم خورد توی این روزا
                    تنها چیزی بود که واقعا خوشحالم کرد من چند ساله دارم از اِچ شاپی خرید
                    مینکم هم راضیم هم به دوستام میگم از اچ شاپی فقط کتاب بخرین
                  </p>
                </div>
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
import { mapState, mapActions } from "vuex";
export default {
  name: "EachBookPage",
  data() {
    return {
      naqd: true,
      profile: false,
      comment: false,
      like: false,
      getBooks: "",
    };
  },
  methods: {
    ...mapActions(["addToCart"]),
    naqdM() {
      this.naqd = true;
      this.profile = false;
      this.comment = false;
    },
    profileM() {
      this.naqd = false;
      this.profile = true;
      this.comment = false;
    },
    commentM() {
      this.naqd = false;
      this.profile = false;
      this.comment = true;
    },
    likeBtn() {
      this.like = !this.like;
    },
    aTC() {
      this.$swal({
        icon: "success",
        title: "محصول به سبد خرید اضافه شد",
        showConfirmButton: false,
        timer: 1000,
      });
      this.addToCart(this.getBooks);
    },
    showImgGalley() {
      this.$swal({
        confirmButtonText: "بستن",
        showCloseButton: false,
        imageUrl: this.getBooks.img,
      });
    },
  },
  computed: {
    ...mapState(["BooksPage"]),
  },
  mounted() {
    if (!this.BooksPage[this.$route.params.id - 38]) {
      this.$router.push({ name: "ErrorPage" });
    }
    // use 1 because in firefox 0 dose not work !!
    document.body.scrollTop = 1;
    document.documentElement.scrollTop = 1;
    this.getBooks = this.BooksPage[this.$route.params.id - 38];
  },
};
</script>
