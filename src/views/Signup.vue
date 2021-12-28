<template>
  <section class="signup-page">
    <div class="signup-card">
      <div>
        <router-link to="/"> <h1 class="signup-title">EchShopy</h1></router-link>
      </div>
      <div class="signup-content">
        <h4>ثبت نام</h4>
        <div class="signup-form-content">
          <label for="Name">نام</label>
          <input type="text" name="" id="UserName" v-model="user.name" />
        </div>
        <div class="signup-form-content">
          <label for="Email">ایمیل</label>
          <input type="email" name="" id="UserEmail" v-model="user.email" />
        </div>
        <div class="signup-form-content">
          <label for="password">پسوورد</label>
          <input type="password" name="" id="UserPassword" v-model="user.pass" />
        </div>
        <div class="signup-form-content">
          <button @click="signup()">تکمیل ثبت نام</button>
        </div>
        <div class="for-signup">
          <p>برای ورود <router-link to="/login">اینجا</router-link> کلیک کنید</p>
        </div>
        <div class="for-terms">
          <p>
            با ورود و یا ثبت نام در اِچ شاپی شما شرایط و قوانین استفاده از سرویس های سایت
            اِچ شاپی و قوانین حریم خصوصی آن را می‌پذیرید.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  name: "Signup",
  data() {
    return {
      user: {
        name: "",
        email: "",
        pass: "",
      },
    };
  },
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(4),
      },
      email: {
        required,
        email,
        minLength: minLength(4),
      },
      pass: {
        required,
        minLength: minLength(4),
      },
    },
  },
  methods: {
    ...mapActions(["signUp"]),
    signup() {
      if (this.$v.$invalid) {
        this.$swal({
          icon: "error",
          title: "لطفا اطلاعات را به درستی وارد نمایید",
          showConfirmButton: false,
          timer: 1000,
        });
        return;
      } else {
        this.signUp(this.user);
        this.$v.$touch();
      }
    },
  },
};
</script>
