<template>
  <div>
    <Header />
    <section class="profile-page">
      <div class="profile-manager-container">
        <div class="profile-manager">
          <ProfileHeader />
          <div class="profile-form-data">
            <h4 class="profile-form-data-title">بروزرسانی اطلاعات حساب</h4>
            <div class="profile-form-data-inputs">
              <div class="profile-form-data-contents">
                <label for="email">ایمیل</label>
                <input type="email" name="" id="userEmail" v-model="userInfo.email" />
              </div>
              <div class="profile-form-data-contents">
                <label for="passNew">رمز عبور</label>
                <input
                  type="password"
                  name=""
                  id="userPassword"
                  placeholder="اگر قصد تعییر ندارید این قسمت را خالی بگذارید..."
                />
              </div>
              <div class="profile-form-data-contents">
                <label for="passRepeat">تایید رمز عبور</label>
                <input
                  type="password"
                  name=""
                  id="userRepeatThePassword"
                  placeholder="اگر قصد تغییر ندارید این قسمت را خالی بگذارید..."
                />
              </div>
              <div class="profile-form-data-contents">
                <button @click="changeDataMethods()">بروزرسانی</button>
              </div>
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
import { mapActions } from "vuex";
import { validationEmail } from "../utils/Validations";
import { getUserData } from "../utils/setUserData";
export default {
  name: "ProfileDataForm",
  data() {
    return {
      userInfo: getUserData(),
    };
  },
  components: {
    ProfileHeader,
  },
  methods: {
    // use valid email in this here
    ...mapActions(["changeData"]),
    changeDataMethods() {
      if (!validationEmail.test(this.userInfo.email)) {
        this.$swal({
          icon: "error",
          title: "لطفا ایمیل را وارد نمایید",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (validationEmail.test(this.userInfo.email)) {
        this.changeData(this.userInfo);
      }
    },
  },
};
</script>
