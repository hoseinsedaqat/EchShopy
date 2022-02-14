<template>
  <section class="login-page">
    <div class="login-card">
      <div>
        <router-link to="/">
          <h1 class="login-title">EchShopy</h1>
        </router-link>
      </div>
      <div class="login-content">
        <h4>ورود</h4>
        <div class="login-form-content">
          <label for="Email">ایمیل</label>
          <input type="email" name="" id="LoginEmail" v-model="user.email" />
        </div>
        <div class="login-form-content">
          <label for="password">پسوورد</label>
          <input type="password" name="" id="LoginPassword" v-model="user.pass" />
        </div>
        <div class="login-form-content">
          <button @click="login()">ورود به اِچ شاپی</button>
        </div>
        <div class="for-signup">
          <p>برای ثبت نام <router-link to="/signup">اینجا</router-link> کلیک کنید</p>
          <router-link to="/forgotpassword">
            <p>رمز عبور خود را فراموش کرده اید؟</p>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";
import sha from "sha.js";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        pass: "",
      },
    };
  },
  validations: {
    user: {
      email: {
        required,
      },
      pass: {
        required,
      },
    },
  },
  beforeMount() {
    if (localStorage.getItem("userAuth")) {
      var auth = JSON.parse(localStorage.getItem("userAuth"));
      if (auth.auth) {
        this.$router.push("/");
      }
    } else {
      return;
    }
  },
  mounted() {
    document.body.style.opacity = "1";
  },
  methods: {
    ...mapActions(["Login"]),
    login() {
      var getUser = JSON.parse(localStorage.getItem("userAuth"));
      if(!getUser){
        alert('bdn miam vue swal alert nhsh ezafe miknm')
        return
      }
      if (
        this.$v.$invalid ||
        getUser.email !== this.user.email ||
        getUser.token !== sha("sha256").update(this.user.pass).digest("hex")
      ) {
        this.$swal({
          icon: "error",
          title: "لطفا اطلاعات را به درستی وارد نمایید",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        this.Login(this.user);
      }
    },
  },
};
</script>
