<template>
  <div>
    <Header />
    <section class="profile-page">
      <div class="profile-manager-container">
        <div class="profile-manager">
          <ProfileHeader />
          <div class="profile-alerts-list">
            <ul class="favorite-header">
              <li
                @click="favoriteproduct()"
                :class="favoriteP ? 'clearfy-color' : 'dark-colors'"
              >
                کالا های مورد علاقه
              </li>
              <li
                @click="publiclist()"
                :class="publicL ? 'clearfy-color' : 'dark-colors'"
              >
                لیست عمومی
              </li>
              <li
                @click="information()"
                :class="informationD ? 'clearfy-color' : 'dark-colors'"
              >
                اطلاع رسانی
              </li>
            </ul>
            <div v-if="favoriteP" class="favorite-product">
              <img src="../assets/images/profile/363d4676.svg" alt="" />
              <h3>لیست علاقه‌مندی‌های شما خالی است.</h3>
            </div>
            <div v-if="publicL" class="favorite-product-new-list">
              <div class="notification">
                <ul class="favorite-notification">
                  <li>
                    اینجا می‌توانید مجموعه‌ای از محصولات را با هر کسی به اشتراک بگذارید.
                  </li>
                  <li>
                    <button>+ ثبت لیست جدید</button>
                  </li>
                </ul>
                <div class="favorite-notification-present">
                  <img
                    src="../assets/images/profile/generallist-middle.png"
                    class="img-in-new-list"
                  />
                  <h3>هنوز هیچ لیستی نساخته‌اید!</h3>
                </div>
              </div>
              <div>
                <p class="new-list-title">
                  برای شروع میتوانید از این ایده‌ها استفاده کنید:
                </p>
                <div class="new-define-list-box">
                  <div class="new-list-define">
                    <img src="../assets/images/profile/generallist-bottom-1.svg" alt="" />
                    <span class="new-list-define-title">پیشنهاد به دوستان</span>
                    <span class="new-list-define-pargraph">
                      کالا‌های مورد‌ نظرتان را به دوستان پیشنهاد کنید.
                    </span>
                  </div>
                  <div class="new-list-define">
                    <img src="../assets/images/profile/generallist-bottom-2.svg" alt="" />
                    <span class="new-list-define-title">خرید روزانه</span>
                    <span class="new-list-define-pargraph">
                      خریدهای روزانه و مورد نیاز خانه را یکجا ثبت کنید.
                    </span>
                  </div>
                  <div class="new-list-define">
                    <img src="../assets/images/profile/generallist-bottom-3.svg" alt="" />
                    <span class="new-list-define-title">هدیه ها</span>
                    <span class="new-list-define-pargraph">
                      برای هدیه خریدن، از قبل ایده هایتان را جمع کنید.
                    </span>
                  </div>
                  <div class="new-list-define">
                    <img src="../assets/images/profile/generallist-bottom-4.svg" alt="" />
                    <span class="new-list-define-title">آرزو ها</span>
                    <span class="new-list-define-pargraph">
                      کالاهایی که دوست دارید در آینده داشته باشید.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="informationD" class="favorite-product">
              <img src="../assets/images/profile/633a2a56.svg" alt="" />
              <h3>کالایی جهت اطلاع رسانی وجود ندارد.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import ProfileHeader from "@/components/ProfileHeader.vue";
export default {
  name: "ProfileFavoriteList",
  components: {
    ProfileHeader,
  },
  data() {
    return {
      favoriteP: true,
      publicL: false,
      informationD: false,
    };
  },
  methods: {
    favoriteproduct() {
      this.favoriteP = true;
      this.publicL = false;
      this.informationD = false;
    },
    publiclist() {
      this.favoriteP = false;
      this.publicL = true;
      this.informationD = false;
    },
    information() {
      this.favoriteP = false;
      this.publicL = false;
      this.informationD = true;
    },
  },
};
</script>
