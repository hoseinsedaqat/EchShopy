<template>
  <div>
    <Header />
    <div class="kala">
      <div class="kala-grid-container kala-container">
        <div>
          <img src="https://my-digistore.netlify.app/image/laptop4.jpg" alt="" />
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
          <button class="kala-gallery-pic" @click="testAlert()">گالری تصاویر</button>
        </div>
        <div>
          <h5>لپ تاپ 14 اینچی هوآوی مدل Matebook D14</h5>
          <p class="kala-info-one">
            <i class="far fa-thumbs-up"></i>
            ۸۹٪ (۴۷۴ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند.
          </p>
          <ul>
            <p>ویژگی های کالا:</p>
            <li>
              <i class="fas fa-circle"></i>
              اندازه صفحه نمایش: 14 اینچ
            </li>
            <li>
              <i class="fas fa-circle"></i>
              سری پردازنده: Core i5
            </li>
            <li>
              <i class="fas fa-circle"></i>
              ظرفیت حافظه RAM: هشت گیگابایت
            </li>
            <li>
              <i class="fas fa-circle"></i>
              نوع حافظه RAM: DDR4
            </li>
            <li>
              <i class="fas fa-circle"></i>
              سازنده پردازنده گرافیکی: Intel
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
            <p class="kala-price-2">24,499,000 تومان</p>
          </div>
          <button @click="testAlert()">افزودن به سبد خرید</button>
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
          <span> Huawei Matebook D14 14 inch Laptop </span>
          <p>
            شرکت هوآوی در سال 2020 از سری لپ‌تاپ‌های 14 اینچی تحت عنوان MateBook رونمایی
            کرد. این لپ‌تاپ با یک طراحی زیبا و وزنی سبک روانه بازار شده است. این لپ تاپ
            دارای ضخامت 15.9 میلی متر و وزن 1.3 کیلوگرم است که حمل و جابجایی آن را بسیار
            آسان می‌کند. Matebook D14 هوآوی از ساختار عمدتاً آلومینیومی و فلزی برخوردار
            است که در کنار استحکام بالا، موجب زیبایی و لذت بیشتر استفاده آن می‌شود. یکی از
            مهم‌ترین ویژگی‌های این مدل حسگر اسکنر اثر انگشت که داخل همان دکمه خاموش-روشن
            دستگاه قرار گرفته و با یک اشاره انگشت، قفل آن باز می‌شود که موجب افزایش امنیت
            و استفاده آسان گردیده است. لپ تاپ MateBook D14 به یک صفحه نمایش FullView با
            پنل نوع IPS مجهز است که دارای وضوح تصویر 1920×1080 پیکسل یا Full HD است. صفحه
            نمایش بکار رفته دارای ویژگی‌های قابل توجه دیگری چون زاویه دید بسیار گسترده 178
            درجه، بیشینه شدت روشنایی 250 نیت، کنتراست 800:1 و نسبت ابعاد 16:9 است. این لپ
            تاپ از پردازنده مرکزی نسل دهمی Core i5-10210U اینتل با 8 گیگابایت حافظه رم
            پرسرعت DDR4 بهره می‌برد. همچنین این لپ تاپ به 512 گیگابایت حافظه داخلی پرسرعت
            از نوع PCIe NVMe SSD مجهز است.
          </p>
        </div>
        <div v-if="profile" class="profile">
          <h4>نقد و بررسی اجمالی</h4>
          <span> Huawei Matebook D14 14 inch Laptop </span>
          <div class="kala-profile">
            <div class="kala-profile-1">مشخصات کلی</div>
            <div class="kala-profile-2">
              <ul>
                <li>
                  <p class="kala-profile-label">ابعاد</p>
                  <p>324x222x17.3</p>
                </li>
                <li>
                  <p class="kala-profile-label">سایر توضیحات حافظه داخلی</p>
                  <p>1TB SSD</p>
                </li>
                <li>
                  <p class="kala-profile-label">وزن</p>
                  <p>1.62 کیلوگرم</p>
                </li>
                <li>
                  <p class="kala-profile-label">نوع حافظه داخلی</p>
                  <p>SSD</p>
                </li>
                <li>
                  <p class="kala-profile-label">طبقه‌بندی</p>
                  <p>ALL RANGE</p>
                </li>
                <li>
                  <p class="kala-profile-label">توضیحات شبکه بی سیم Wi-Fi</p>
                  <p>Wi-Fi+Bluetooth</p>
                </li>
                <li>
                  <p class="kala-profile-label">ظرفیت حافظه داخلی</p>
                  <p>یک ترابایت</p>
                </li>
                <li>
                  <p class="kala-profile-label">درایو نوری</p>
                  <p>بدون درایو نوری</p>
                </li>
                <li>
                  <p class="kala-profile-label">سیستم عامل</p>
                  <p>324x222x17.3</p>
                </li>
                <li>
                  <p class="kala-profile-label">دقت صفحه نمایش</p>
                  <p>Microsoft Windows 10</p>
                </li>
                <li>
                  <p class="kala-profile-label">ابعاد</p>
                  <p>Full HD| 1920 x1080</p>
                </li>
                <li>
                  <p class="kala-profile-label">حافظه اختصاصی پردازنده گرافیکی</p>
                  <p>دو گیگابایت</p>
                </li>
                <li>
                  <p class="kala-profile-label">مشخصات حافظه داخلی</p>
                  <p>SSD 1 TRA</p>
                </li>
                <li>
                  <p class="kala-profile-label">محدوده سرعت پردازنده</p>
                  <p>2.8 گیگاهرتز و بیشتر</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-if="comment" class="comment">
          <h4>امتیاز و دیدگاه کاربران</h4>
          <span> Huawei Matebook D14 14 inch Laptop </span>
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
                  <h5>آقا</h5>
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
                  <h5>خانم</h5>
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
                  <h5>کاربر سایت</h5>
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
                  <h5>کاربر مهمان</h5>
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
export default {
  name: "ProductPage",
  data() {
    return {
      naqd: true,
      profile: false,
      comment: false,
      like: false,
    };
  },
  methods: {
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
    testAlert() {
      this.$swal({
        confirmButtonText: "بستن",
        showCloseButton: false,
        imageUrl: "https://my-digistore.netlify.app/image/laptop4.jpg",
      });
    },
  },
};
</script>
