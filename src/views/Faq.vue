<template>
  <div>
    <Header />
    <div class="faq">
      <div class="faq-intro">
        <div class="faq-intro-content faq-container">
          <h1>پاسخ پرسش های پر تکرار</h1>
          <div class="faq-intro-content-form">
            <input type="text" name="" id="" placeholder="پرسش های خود را جستجو کنید" />
            <button>جستجو</button>
          </div>
        </div>
      </div>
      <div class="faq-category faq-container">
        <h4>دسته بندی پرسش ها</h4>
        <div class="faq-category-grid">
          <div class="fcg-content">
            <div class="fcg-content-image">
              <img src="../assets/images/faq/14.png" alt="" />
            </div>
            <h5 class="fcg-content-title">ورود و ثبت نام</h5>
          </div>
          <div class="fcg-content">
            <div class="fcg-content-image">
              <img src="../assets/images/faq/3.png" alt="" />
            </div>
            <h5 class="fcg-content-title">روند ثبت سفارش</h5>
          </div>
          <div class="fcg-content">
            <div class="fcg-content-image">
              <img src="../assets/images/faq/2.png" alt="" />
            </div>
            <h5 class="fcg-content-title">پیگیری ارسال سفارش</h5>
          </div>
        </div>
        <div class="faq-category-grid">
          <div class="fcg-content">
            <div class="fcg-content-image">
              <img src="../assets/images/faq/4.png" alt="" />
            </div>
            <h5 class="fcg-content-title">بازگرداندن کالا</h5>
          </div>
          <div class="fcg-content">
            <div class="fcg-content-image">
              <img src="../assets/images/faq/5.png" alt="" />
            </div>
            <h5 class="fcg-content-title">کد تخفیف و کارت هدیه</h5>
          </div>
          <div class="fcg-content">
            <div class="fcg-content-image">
              <img src="../assets/images/faq/17.png" alt="" />
            </div>
            <h5 class="fcg-content-title">سوپر مارکت</h5>
          </div>
        </div>
        <div class="faq-category-grid">
          <div class="fcg-content">
            <div class="fcg-content-image">
              <img src="../assets/images/faq/22.png" alt="" />
            </div>
            <h5 class="fcg-content-title">تعهد به شفافیت</h5>
          </div>
          <div class="fcg-content">
            <div class="fcg-content-image">
              <img src="../assets/images/faq/100000040.png" alt="" />
            </div>
            <h5 class="fcg-content-title">چند مرسوله ایی</h5>
          </div>
          <div class="fcg-content">
            <div class="fcg-content-image">
              <img src="../assets/images/faq/100000041.png" alt="" />
            </div>
            <h5 class="fcg-content-title">اِچ پی</h5>
          </div>
        </div>
        <div class="faq-category-grid">
          <div class="fcg-content">
            <div class="fcg-content-image">
              <img src="../assets/images/faq/100000042.png" alt="" />
            </div>
            <h5 class="fcg-content-title">اِچ کلاب</h5>
          </div>
          <div class="fcg-content">
            <div class="fcg-content-image">
              <img src="../assets/images/faq/6.png" alt="" />
            </div>
            <h5 class="fcg-content-title">سایر موارد</h5>
          </div>
          <div class="fcg-content">
            <div class="fcg-content-image">
              <img src="../assets/images/faq/100000057.png" alt="" />
            </div>
            <h5 class="fcg-content-title">دعوت از دوستان</h5>
          </div>
        </div>
        <div class="faq-category-grid">
          <div class="fcg-content">
            <div class="fcg-content-image">
              <img src="../assets/images/faq/100000059.png" alt="" />
            </div>
            <h5 class="fcg-content-title">خدمات بازاریابی</h5>
          </div>
          <div class="fcg-content">
            <div class="fcg-content-image">
              <img src="../assets/images/faq/100000060.png" alt="" />
            </div>
            <h5 class="fcg-content-title">آخرین تغییرات</h5>
          </div>
          <div class="fcg-content">
            <div class="fcg-content-image">
              <img
                src="../assets/images/faq/4a98eff51fd9a61f1fb0704ece641e46d883d4e6_1606883925.png"
                alt=""
              />
            </div>
            <h5 class="fcg-content-title">ارسال توسط فروشنده</h5>
          </div>
        </div>
        <div class="faq-category-grid">
          <div class="fcg-content">
            <div class="fcg-content-image">
              <img
                src="../assets/images/faq/9a170a20e5c29b1b1040532cacdd14bf893fb41a_1627294868.png"
                alt=""
              />
            </div>
            <h5 class="fcg-content-title">سوالات سئو کتگوری ساعت هوشمند</h5>
          </div>
          <div class="fcg-content">
            <div class="fcg-content-image">
              <img
                src="../assets/images/faq/310cfc2665ef2e1a1b66caaffeb69749c8bea7ab_1627719640.png"
                alt=""
              />
            </div>
            <h5 class="fcg-content-title">سوالات سئو کتگوری لپ تاپ</h5>
          </div>
          <div class="fcg-content">
            <div class="fcg-content-image">
              <img
                src="../assets/images/faq/2d3c9d3b5551d68ce655f1934551daef6782a776_1597232497.jpg"
                alt=""
              />
            </div>
            <h5 class="fcg-content-title">اِچ پلاس</h5>
          </div>
        </div>
      </div>
      <div class="faq-repeatQ faq-container">
        <h4>پرتکرارترین پرسش‌ها</h4>
        <div class="faq-repeatQ-more">
          <div>
            <ul>
              <li @click="q1 = !q1">
                <h4>شرایط خرید و بازگرداندن کالا برای کالاهای سوپر مارکتی چگونه است؟</h4>
                <i class="fas fa-arrow-down"></i>
              </li>
              <li>
                <p v-if="q1">
                  لطفاً پیش از خرید، موارد زیر را به‌دقت بخوانید؛ زیرا ثبت هر سفارش در
                  دیجی‌کالا به معنی موافقت با شرایط زیر است.
                </p>
              </li>
              <li v-if="q1">
                <a href="#"> مشاهده توضیحات تکمیلی > </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li @click="q2 = !q2">
                <h4>شرایط استفاده از کد تخفیف اولین خرید چیست؟</h4>
                <i class="fas fa-arrow-down"></i>
              </li>
              <li>
                <p v-if="q2">
                  سیستم هوشمند دیجی کالا، پس از بررسی حساب کاربری در صورتی که مالک آن
                  مشتری جدید دیجی کالا باشد...
                </p>
              </li>
              <li v-if="q2">
                <a href="#"> مشاهده توضیحات تکمیلی > </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li @click="q3 = !q3">
                <h4>چرا به شماره سفارش (DKC) نیاز داریم؟</h4>
                <i class="fas fa-arrow-down"></i>
              </li>
              <li>
                <p v-if="q3">
                  دیجی کالا برای افزایش سرعت پاسخ گویی به مشتریان با دریافت کد سفارش یا
                  همان کد "DKC " این امکان رو ایجاد کرده که بتونید در زمان کمتری به نتیجه
                  مورد نظر خود برسید...
                </p>
              </li>
              <li v-if="q3">
                <a href="#"> مشاهده توضیحات تکمیلی > </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li @click="q4 = !q4">
                <h4>میتوانم سفارشم را بصورت اقساطی ( اعتباری ) پرداخت کنم؟</h4>
                <i class="fas fa-arrow-down"></i>
              </li>
              <li>
                <p v-if="q4">
                  بله، دیجی کالا تسهیلاتی را فراهم کرده، شما میتوانید تا سقف 20 میلیون
                  تومان به صورت اقساط با بازپرداخت 6 ، 9 و 12 ماهه از سایت دیجی کالا خرید
                  کنید.
                </p>
              </li>
              <li v-if="q4">
                <a href="#"> مشاهده توضیحات تکمیلی > </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li @click="q5 = !q5">
                <h4>
                  چطور درخواست خود را جهت بازگرداندن کالا (مرجوعی کالا) به شما اطلاع دهم؟
                </h4>
                <i class="fas fa-arrow-down"></i>
              </li>
              <li>
                <p v-if="q5">
                  شما میتوانید از طریق فرم درخواست مرجوعی در حساب کاربری ، صفحه تماس با ما
                  و تلفن درخواست خود را ثبت نمایید.
                </p>
              </li>
              <li v-if="q5">
                <a href="#"> مشاهده توضیحات تکمیلی > </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li @click="q6 = !q6">
                <h4>شرایط گارانتی دیجی کالا</h4>
                <i class="fas fa-arrow-down"></i>
              </li>
              <li>
                <p v-if="q6">
                  <span>
                    امروزه توجه به کیفیت کالا از مهمترین وظایف فروشندگان کالا است و خدمات
                    پس از فروش ضامن حفظ این کیفیت می باشد.
                  </span>
                  <span>
                    در همین راستا شرکت دیجی کالا مفتخر به ارائه سرویس در اسرع وقت به
                    مشتریان گرامی می باشد.
                  </span>
                  <span>
                    جهت سهولت در پیگیری گارانتی دستگاه خود می توانید از طریق شماره
                    02161930010 اقدام نمائید.
                  </span>
                </p>
              </li>
              <li v-if="q6">
                <a href="#"> مشاهده توضیحات تکمیلی > </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li @click="q7 = !q7">
                <h4>
                  چطور میتوانم بدون برقراری تماس، درخواست مرجوعی کالای خریداری شده را
                  اعلام کنم؟
                </h4>
                <i class="fas fa-arrow-down"></i>
              </li>
              <li>
                <p v-if="q7">
                  شما میتواند وارد پروفایل خود شوید و از قسمت درخواست مرجوعی ، فرم درخواست
                  را تکمیل کنید.
                </p>
              </li>
              <li v-if="q7">
                <a href="#"> مشاهده توضیحات تکمیلی > </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li @click="q8 = !q8">
                <h4>چطور میتوانم سفارشم را لغو کنم ؟</h4>
                <i class="fas fa-arrow-down"></i>
              </li>
              <li>
                <p v-if="q8">
                  <span>
                    شما میتوانید با مراجعه به پروفایل خود سفارش یا مرسوله ایی که از ارسال
                    آن منصرف شدید را لغو نمایید.
                  </span>
                  <span>
                    میتوانید برای مشاهده روند لغو سفارش به توضیحات تکمیلی مراجعه کنید.
                  </span>
                </p>
              </li>
              <li v-if="q8">
                <a href="#"> مشاهده توضیحات تکمیلی > </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li @click="q9 = !q9">
                <h4>چطور میتوانم امتیاز‌ بگیریم؟</h4>
                <i class="fas fa-arrow-down"></i>
              </li>
              <li>
                <p v-if="q9">
                  <span> شما از سه راه می‌توانید امتیاز بگیرید: </span>
                  <span> خرید کالا </span>
                  <span> ثبت نظر </span>
                  <span> دعوت از دوستان برای خرید از دیجی‌کالا </span>
                </p>
              </li>
              <li v-if="q9">
                <a href="#"> مشاهده توضیحات تکمیلی > </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li @click="q10 = !q10">
                <h4>چطور میتوانم سفارشم را پیگیری کنم ؟</h4>
                <i class="fas fa-arrow-down"></i>
              </li>
              <li>
                <p v-if="q10">
                  <span> وارد سایت دیجی کالا شوید. </span>
                  <span> روی گزینه سفارش های من کلیک کنید. </span>
                  <span>
                    در این قسمت با کلیک روی جزییات میتوانید سفارش خود را ببینید.
                  </span>
                  <span>
                    در این قسمت با کلیک روی جزییات میتوانید سفارش خود را ببینید.
                  </span>
                </p>
              </li>
              <li v-if="q10">
                <a href="#"> مشاهده توضیحات تکمیلی > </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Faq",
  data() {
    return {
      q1: false,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
      q6: false,
      q7: false,
      q8: false,
      q9: false,
      q10: false,
    };
  },
};
</script>
