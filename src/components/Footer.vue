<template>
  <div>
    <section class="footer">
      <div class="f-1">
        <h2>اِچ شاپی</h2>
        <button @click="backToUp()">
          بازگشت به بالا <i class="fas fa-arrow-up"></i>
        </button>
      </div>
      <div class="f-2">
        <span>
          تلفن پشتیبانی : 09176484569 | هفت روز هفته , 24 ساعته شبانه روز پاسخگو شما هستیم
        </span>
      </div>
      <div class="f-3">
        <div>
          <img src="../assets/images/footer/8f570b58.svg" alt="ExpressComing" />
          <p>امکان تحویل اکسپرس</p>
        </div>
        <div>
          <img src="../assets/images/footer/22414818.svg" alt="Payment Place" />
          <p>امکان پرداخت درب محل</p>
        </div>
        <div>
          <img
            src="../assets/images/footer/a9286d2f.svg"
            alt="SevendayTwentyFourHourse"
          />
          <p>7 روز هفته , 24 ساعته</p>
        </div>
        <div>
          <img src="../assets/images/footer/514926b1.svg" alt="SevendayReback" />
          <p>هفت روز ضمانت بازگشت کالا</p>
        </div>
        <div>
          <img src="../assets/images/footer/fdb293e6.svg" alt="OrginalThings" />
          <p>ضمانت اصل بودن کالا</p>
        </div>
      </div>
      <hr />
      <div class="f-4">
        <div>
          <h3>با اِچ شاپی</h3>
          <ul>
            <li>
              <span> اتاق خبر در اِچ شاپی </span>
            </li>
            <li>
              <span> فروش در اِچ شاپی </span>
            </li>
            <li>
              <span> فرصت های شغلی </span>
            </li>
            <li>
              <span> تماس با اِچ شاپی </span>
            </li>
            <li>
              <span> درباره اِچ شاپی </span>
            </li>
          </ul>
        </div>
        <div>
          <h3>خدمات مشتریان</h3>
          <ul>
            <li>
              <span> پاسخ به پرسش های متداول </span>
            </li>
            <li>
              <span> رویه های بازگرداندن کالا </span>
            </li>
            <li>
              <span> شرایط استفاده </span>
            </li>
            <li>
              <span> حریم خصوصی </span>
            </li>
            <li>
              <span> گزارش باگ </span>
            </li>
          </ul>
        </div>
        <div>
          <h3>راهنمای خرید از اِچ شاپی</h3>
          <ul>
            <li>
              <span> نحوه ثبت سفارش </span>
            </li>
            <li>
              <span> رویه ارسال سفارش </span>
            </li>
            <li>
              <span> شیوه های پرداخت </span>
            </li>
          </ul>
        </div>
        <div>
          <h3>با ما همرا باشید</h3>
          <ul class="s-f">
            <li>
              <i class="fab fa-instagram"></i>
            </li>
            <li>
              <i class="fab fa-twitter"></i>
            </li>
            <li>
              <i class="fab fa-youtube"></i>
            </li>
            <li>
              <i class="fab fa-linkedin"></i>
            </li>
          </ul>
          <h3>از جدیدترین تخفیف ها با خبر شوید</h3>
          <ul>
            <input type="text" placeholder="آدرس ایمیل خود را وارد کنید" />
            <button>ثبت</button>
          </ul>
        </div>
      </div>
      <hr />
      <div class="f-5">
        <div>
          <h3>فروشگاه اینترنتی اِچ شاپی , بررسی , انتخاب و خرید آنلاین</h3>
          <p>
            اِچ شاپی به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش از یک دهه
            تجربه، با پایبندی به سه اصل، پرداخت در محل، ۷ روز ضمانت بازگشت کالا و تضمین
            اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌های معتبر جهان، به بزرگ‌ترین
            فروشگاه اینترنتی ایران تبدیل شود. به محض ورود به سایت اِچ شاپی با دنیایی از
            کالا رو به رو می‌شوید! هر آنچه که نیاز دارید و به ذهن شما خطور می‌کند در اینجا
            پیدا خواهید کرد.
          </p>
        </div>
        <div>
          <div>
            <img src="../assets/images/footer/236e437c.png" />
          </div>
          <div>
            <img src="../assets/images/footer/6e2d6b38.png" />
          </div>
          <div>
            <img src="../assets/images/footer/logo.png" />
          </div>
        </div>
      </div>
      <hr />
      <div class="f-6">
        <p>فروشگاه اینترنتی اِچ شاپی طراحی توسط حسین صداقت در پاییز و زمستان 1400</p>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Footer",
  methods: {
    ...mapActions(["backToUp"]),
  },
};
</script>
