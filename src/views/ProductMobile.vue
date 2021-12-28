<template>
  <div>
    <Header />
    <div class="kala">
      <div class="kala-grid-container kala-container">
        <div>
          <img :src="getMobile.img" alt="" />
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
          <h5>{{ getMobile.name }}</h5>
          <p class="kala-info-one">
            <i class="far fa-thumbs-up"></i>
            ۸۹٪ (۴۷۴ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند.
          </p>
          <ul>
            <p>ویژگی های کالا:</p>
            <li>
              <i class="fas fa-circle"></i>
              ابعاد: 159.9x75.1x8.4
            </li>
            <li>
              <i class="fas fa-circle"></i>
              وزن: 189 گرم
            </li>
            <li>
              <i class="fas fa-circle"></i>
              تعداد سیم کارت: یک عدد
            </li>
            <li>
              <i class="fas fa-circle"></i>
              نوع پردازنده : 64 بیتی
            </li>
            <li>
              <i class="fas fa-circle"></i>
              شناسه کالا: 2800001102189
            </li>
          </ul>
          <p class="goods-warning">
            <i class="fas fa-exclamation-circle"></i>
            امکان برگشت کالا در گروه لپ تاپ با دلیل "انصراف از خرید" تنها در صورتی مورد
            قبول است که پلمپ کالا باز نشده باشد.
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
              {{ Number(getMobile.finalOffer).toLocaleString() }} تومان
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
          <span> {{ getMobile.name }} </span>
          <p>
            این نسخه از گوشی موبایل {{ getMobile.name }} با رم 6 گیگابایتی و حافظه داخلی
            گیگابایت به عنوان یکی از جدیدترین های بازار با تکنولوژی 5G روانه بازار شده
            است. این محصول دارای صفحه‌نمایش سوپر امولد است و ظاهر زیبایی دارد. تلاش کرده
            است حاشیه را در این تولید جدید خود تا حد امکان کم کند. این گوشی قاب پشتی از
            جنس پلاستیک دارد و قاب جلویی آن را شیشه پوشانده که البته جلوه‌ی زیبایی به گوشی
            داده است. این محصول روانه بازار شده است تا از هر نظر گوشی مدرن به‌حساب بیاید.
            صفحه‌نمایش استفاده‌شده در این گوشی 6.5 اینچ با رزولوشن FullHD+ است که با
            استفاده از فناوری Super AMOLED و پنل OLED تصاویر شفاف و بی‌نظیری را به نمایش
            می‌گذارد. این صفحه‌نمایش در هر اینچ 407 پیکسل را نشان می‌دهد که این یعنی
            جزئیات و وضوح تصویر عالی است. همچنین روکش این نمایشگر لایه‌ی محافظ Corning
            Gorilla Glass است که از خط‌وخش و ضربه جلوگیری می‌کند. تراشه‌ی این محصول،
            Snapdragon 778G 5G از تراشه‌های 6 نانومتری است که به همراه 8 گیگابایت رم عرضه
            می‌شود. تراشه‌ی گرافیکی Adreno 642L هم برای پخش ویدئو و بازی مناسب است. این
            نسخه از گوشی با حافظه 128 گیگابایتی عرضه شده است. دوربین اصلی A52s سنسور 64
            مگاپیکسلی دارد و از نوع عریض (Wide) است. یک سنسور 12مگاپیکسلی و دو سنسور 5
            دیگر هم در کنار این دوربین اصلی مجموعه دوربین‌های قاب پشتی A52s را تشکیل
            داده‌اند. دوربین سلفی 32مگاپیکسلی هم در قاب جلویی این گوشی به کار گرفته شده
            است. باتری 4500 میلی‌آمپرساعتی، پشتیبانی از فناوری شارژ سریع 25 واتی، درگاه
            USB Type-C و حسگر اثرانگشت در زیر قاب اصلی هم از دیگر ویژگی‌های این تازه‌وارد
            است. در ساخت این گوشی از جدیدترین فناوری‌های ساخت گوشی استفاده کرده است تا
            میان‌رده‌ای با قابلیت‌های نزدیک به یک بالارده خوش‌ساخت را روانه بازار کند.
          </p>
        </div>
        <div v-if="profile" class="profile">
          <h4>نقد و بررسی اجمالی</h4>
          <span> {{ getMobile.name }} </span>
          <div class="kala-profile">
            <div class="kala-profile-1">مشخصات کلی</div>
            <div class="kala-profile-2">
              <ul>
                <li>
                  <p class="kala-profile-label">ابعاد</p>
                  <p>159.9x75.1x8.4</p>
                </li>
                <li>
                  <p class="kala-profile-label">وزن</p>
                  <p>189 گرم</p>
                </li>
                <li>
                  <p class="kala-profile-label">تعداد سیم کارت</p>
                  <p>2 عدد</p>
                </li>
                <li>
                  <p class="kala-profile-label">زمان معرفی</p>
                  <p>17 آگوست 2021</p>
                </li>
                <li>
                  <p class="kala-profile-label">مدل</p>
                  <p>{{ getMobile.name }}</p>
                </li>
                <li>
                  <p class="kala-profile-label">شناسه کالا</p>
                  <p>2800001102189</p>
                </li>
                <li>
                  <p class="kala-profile-label">نوع پردازنده</p>
                  <p>64 بیتی</p>
                </li>
                <li>
                  <p class="kala-profile-label">حافظه داخلی</p>
                  <p>128 گیگابایت</p>
                </li>
                <li>
                  <p class="kala-profile-label">مقدار RAM</p>
                  <p>شش گیگابایت</p>
                </li>
                <li>
                  <p class="kala-profile-label">اندازه</p>
                  <p>6.5 اینچ</p>
                </li>
                <li>
                  <p class="kala-profile-label">نسبت تصویر</p>
                  <p>20:9</p>
                </li>
                <li>
                  <p class="kala-profile-label">کارت حافظه</p>
                  <p>microSD</p>
                </li>
                <li>
                  <p class="kala-profile-label">امکانات موبایل</p>
                  <p>اطلاعات تماس</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-if="comment" class="comment">
          <h4>امتیاز و دیدگاه کاربران</h4>
          <span> {{ getMobile.name }} </span>
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
                  <h5>احمد</h5>
                  <p>
                    عالیییییی اصلا هم سنگین نیست خیلی خوش دست هست تو پکیج هندزفری نبود گلس
                    نازکی روش بود و گارد ژله ای رش دادم سه شنبه رسید که عالیه در کل بخرید
                  </p>
                </div>
              </div>
              <div class="kala-user-comment">
                <div>
                  <img src="../assets/images/kala/user-2.png" alt="" />
                </div>
                <div>
                  <h5>نسترن</h5>
                  <p>
                    واقعا همه چی عالیه و بنظرم رنگ سیاهش خیلی زیباست چون از ترکیب چند رنگه
                    سبز بنفش نارنجی من 5600خریدم داخل فروش ویژه شنبه سفارش دادم سه شنبه
                    رسید که عالیه در کل بخرید ارزش خرید بالایی داره
                  </p>
                </div>
              </div>
              <div class="kala-user-comment">
                <div>
                  <img src="../assets/images/kala/user-1.png" alt="" />
                </div>
                <div>
                  <h5>بهرام</h5>
                  <p>
                    این گوشی رو با گارانتی تسک میران و فروشنده مرکز تامین کالای دیجیتال
                    ایران گرفتم، با توجه به تحقیقاتی که در مورد این گوشی داشتم نگرانی من
                    بیشتر از پک گلوبال و رام گلوبال بود که خوشبختانه همونطور که میخواستم
                    گلوبالش بدستم رسید هنوز فرصت تستش رو پیدا نکردم بعد از تست نظرات دقیق
                    رو اعلام می کنم
                  </p>
                </div>
              </div>
              <div class="kala-user-comment">
                <div>
                  <img src="../assets/images/kala/user-2.png" alt="" />
                </div>
                <div>
                  <h5>مهشید</h5>
                  <p>
                    من یه هفته س این گوشی رو خریدم . گوشی خیلی خوبیه . ظاهرش خوشگل و شیکه
                    ، رابط کاربری ش هم اپدیت داد و ورژن ۱۲.۵ شد . سرعتش عالیه و مشکل خاصی
                    ندیدم . در مورد اینکه بعضی از دوستان گفتن موقع استفاده از اسپیکر پشت
                    گوشی لرزش داره درسته ، که اونم بخاطر اسپیکر بسیار قدرتمندی هست که داره
                    در حدی که انگار یه اسپیکر بلوتوثی دارین استفاده میکنین که البته اون
                    لرزش تو حداکثر ولوم اتفاق میفته . تو ولوم عادی چیزی حس نمیشه . در کل
                    من که خیلی راضیم
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
  name: "ProductMobile",
  data() {
    return {
      naqd: true,
      profile: false,
      comment: false,
      like: false,
      getMobile: "",
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
    aTC() {
      this.$swal({
        icon: "success",
        title: "محصول به سبد خرید اضافه شد",
        showConfirmButton: false,
        timer: 1000,
      });
      this.addToCart(this.getMobile);
    },
    likeBtn() {
      this.like = !this.like;
    },
    showImgGalley() {
      this.$swal({
        confirmButtonText: "بستن",
        showCloseButton: false,
        imageUrl: this.getMobile.img,
      });
    },
  },
  computed: {
    ...mapState(["MobileCol"]),
  },
  mounted() {
    if (!this.MobileCol[this.$route.params.id - 31]) {
      this.$router.push({ name: "ErrorPage" });
    }
    // use 1 because in firefox 0 dose not work !!
    document.body.scrollTop = 1;
    document.documentElement.scrollTop = 1;
    this.getMobile = this.MobileCol[this.$route.params.id - 31];
  },
};
</script>
