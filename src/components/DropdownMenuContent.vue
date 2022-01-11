<template>
  <ul>
    <li class="dropdown-one">
      <i class="fas fa-bars"></i> دسته بندی کالا ها
      <div class="dropdown-one-content">
        <div class="mainDrop">
          <a>
            <i class="fas fa-laptop"></i>
            کالای دیجیتال
          </a>
          <a>
            <i class="fas fa-tools"></i>
            خودرو، ابزار و تجهیزات صنعتی
          </a>
          <a>
            <i class="fas fa-tshirt"></i>
            مد و پوشاک
          </a>
          <a>
            <i class="fas fa-baby"></i>
            اسباب بازی، کودک و نوزاد
          </a>
          <a>
            <i class="fas fa-apple-alt"></i>
            کالاهای سوپرمارکتی
          </a>
          <a>
            <i class="fas fa-heartbeat"></i>
            زیبایی و سلامت
          </a>
          <a>
            <i class="fas fa-utensils"></i>
            خانه و آشپز خانه
          </a>
          <router-link to="/books">
            <i class="fas fa-book"></i>
            کتاب، لوازم تحریر و هنر
          </router-link>
          <a>
            <i class="fas fa-futbol"></i>
            ورزش و سفر
          </a>
          <a>
            <i class="fas fa-tractor"></i>
            محصولات بومی و محلی
          </a>
        </div>
        <div class="dropRow">
          <h4>دسته بندی همه کالاهای دیجیتال<i class="fas fa-angle-left"></i></h4>
          <div class="dropCol">
            <div>
              <a href="#">
                <h4>لوازم جانبی گوشی</h4>
              </a>
              <div>
                <a href="#"> کیف و کاور گوشی </a>
                <a href="#"> پاوربانک(شارژ همراه) </a>
                <a href="#"> پایه و نگهدارنده گوشی </a>
              </div>
              <a href="#">
                <h4>گوشی موبایل</h4>
              </a>
              <a href="#"> سامسونگ </a>
              <a href="#"> هوآوی </a>
              <a href="#"> اپل </a>
              <a href="#"> شیائومی </a>
              <a href="#"> آنر </a>
              <a href="#"> نوکیا </a>
              <a href="#">
                <h4>واقعیت مجازی</h4>
              </a>
              <a href="#">
                <h4>مچ بند و ساعت هوشمند</h4>
              </a>
            </div>
            <div>
              <a href="#">
                <h4>هدفون، هدست، هندزفری</h4>
              </a>
              <a href="#">
                <h4>اسپیکر بلوتوث و بی سیم</h4>
              </a>
              <a href="#">
                <h4>هارد فلش و SSD</h4>
              </a>
              <a href="#">
                <h4>دوربین</h4>
              </a>
              <a href="#"> دوربین عکاسی دیجیتال </a>
              <a href="#"> دوربین ورزشی و فیلم برداری </a>
              <a href="#"> دوربین چاپ سریع </a>
              <a href="#">
                <h4>لوازم جانبی دوربین</h4>
              </a>
              <a href="#"> لنز </a>
              <a href="#">کیف </a>
              <a href="#"> کارت حافظه </a>
              <a href="#"> کاغذ چاپ عکس </a>
              <a href="#">
                <h4>دوربین دو چشمی و شکاری</h4>
              </a>
            </div>
            <div>
              <a href="#">
                <h4>تلسکوپ</h4>
              </a>
              <a href="#">
                <h4>پلی استیشن، ایکس باکس و بازی</h4>
              </a>
              <a href="#">
                <h4>کامپیوتر و تجهیزات جانبی</h4>
              </a>
              <a href="#"> تجهیزات مخصوص بازی </a>
              <a href="#"> مانیتور </a>
              <a href="#"> کیس های اسمبی شده </a>
              <a href="#"> قطعات داخلی کامپیوتر </a>
              <a href="#"> ماوس </a>
              <a href="#"> کیبورد </a>
              <a href="#">
                <h4>لپ تاپ</h4>
              </a>
              <a href="#">
                <h4>لوازم جانبی لپ تاپ</h4>
              </a>
              <a href="#"> کیف، کوله، کاور </a>
              <a href="#"> کابل صدا ، HDMI ، AUX </a>
            </div>
            <div>
              <a href="#">
                <h4>تبلت</h4>
              </a>
              <a href="#">
                <h4>شارژر تبلت و موبایل</h4>
              </a>
              <a href="#">
                <h4>کیف، کاور، لوازم جانبی تبلت</h4>
              </a>
              <a href="#">
                <h4>باتری</h4>
              </a>
              <a href="#">
                <h4>دوربین های تحت شبکه</h4>
              </a>
              <a href="#">
                <h4>مودم و تجهیزات شبکه</h4>
              </a>
              <a href="#">
                <h4>ماشین های اداری</h4>
              </a>
              <a href="#"> تلفن، بی سیم و سانترال</a>
              <a href="#"> فکس</a>
              <a href="#"> پرینتر</a>
              <a href="#">لوازم جانبی اداری</a>
              <a href="#">
                <h4>کتابخوان و فیدبوک</h4>
              </a>
              <a href="#">
                <h4>کارت هدیه خرید از ما</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li class="dropdown-two">
      <i class="fas fa-percentage"></i>
      تخفیف ها و پیشنهاد ها
      <div class="dropdown-two-content">
        <div class="dropRow">
          <h4>مشاهده همه تخفیف ها و پیشنهاد ها<i class="fas fa-angle-left"></i></h4>
          <div class="dropCol">
            <div>
              <a href="#">
                <h4>کالاهای شگفت انگیز</h4>
              </a>
              <a href="#">
                <h4>شگفت انگیز سوپرمارکتی</h4>
              </a>
              <a href="#">
                <h4>فروش ویژه</h4>
              </a>
              <a href="#"> کالای دیجیتال </a>
              <a href="#"> خودرو، ابزار و تجهیزات صنعتی </a>
              <a href="#"> مد و پوشاک</a>
              <a href="#"> اسباب بازی، کودک و نوزاد</a>
              <a href="#"> کالا های سوپرمارکتی </a>
              <a href="#"> زیبایی و سلامت </a>
              <a href="#"> خانه و آشپزخانه</a>
              <a href="#"> کتاب، لوازم تحریر و هنر </a>
              <a href="#"> ورزش و سفر</a>
            </div>
            <div>
              <a href="#">محصولات بومی و محلی</a>
              <a href="#">تخفیف های روزانه اِچ شاپی</a>
              <a href="#">انواع کفش نایکی</a>
              <a href="#">لپ تاپ گیمینگ</a>
              <a href="#">کتاب های چاپی</a>
              <a href="#" class="border-hover-nice-price">انواع ادکلن</a>
              <a href="#">
                <i class="fas fa-fire"> </i>
                پرفروش ترین کالا ها
              </a>
              <a href="#">
                <i class="fas fa-gift"> </i>
                با هر خرید هدیه بگیرید!
              </a>
              <a href="#">
                <i class="fas fa-tag"> </i>
                تخفیف پایان فصل
              </a>
              <a href="#">
                <i class="fas fa-credit-card"> </i>
                کارت هدیه خرید از اِچ شاپی
              </a>
              <a href="#">
                <i class="fas fa-gifts"> </i>
                تازه های فروشنده جدید
              </a>
            </div>
            <div class="border-hover-image">
              <img src="../assets/images/header/off-order-submenu-img.png" />
            </div>
          </div>
        </div>
      </div>
    </li>
    <li>
      <router-link to="/contact">تماس با ما</router-link>
    </li>
    <li>
      <router-link to="/aboutus">درباره ما</router-link>
    </li>
    <li>
      <i class="far fa-check-circle" style="color: #ef394e"></i>
      <router-link to="/login" v-if="!auth">دیجی کالای من</router-link>
      <router-link to="/profile" v-else>دیجی کالای من</router-link>
    </li>
    <li class="dropdown-three">
      <i class="fas fa-plus-circle" style="color: purple"></i>
      دیجی پلاس
      <div class="dropdown-three-content">
        <div class="drop-down-three-content-plus">
          <div class="plus-One">
            <h5>
              خدمات ویژه کاربران
              <span>دیجی پلاس</span>
            </h5>
            <p>
              ارسال رایگان بدون محدودیت قیمت، هدیه نقدی و بازگشت کالا تا ۳۰ روز پس از
              تحویل
            </p>
            <a href="#"> اطلاعات بیشتر و عضویت > </a>
          </div>
          <div class="plus-Two">
            <h5>
              • کالاهای
              <span>دیجی پلاس</span>
            </h5>
          </div>
        </div>
        <div>
          <img src="../assets/images/header/38492329.jpg" alt="DigiPlus" />
        </div>
      </div>
    </li>
    <li>
      <router-link to="/faq">سوالی دارید؟</router-link>
    </li>
    <li>
      <router-link to="/login">فروشنده شوید</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "DropdownMenuContent",
  data() {
    return {
      auth: false,
    };
  },
  beforeMount() {
    if (localStorage.getItem("userAuth")) {
      var auth = JSON.parse(localStorage.getItem("userAuth"));
      if (auth.auth) {
        this.auth = true;
      }
    } else {
      this.auth = false;
    }
  },
};
</script>
