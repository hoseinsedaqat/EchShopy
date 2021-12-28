<template>
  <section class="forgot-page">
    <div class="forgot-card">
      <div>
        <router-link to="/">
          <h1 class="forgot-title">EchShopy</h1>
        </router-link>
      </div>
      <div class="forgot-content">
        <h4>بازیابی رمز عبور</h4>
        <div class="forgot-form-content">
          <label for="Email">ایمیل</label>
          <input type="email" name="" id="" />
        </div>
        <div class="forgot-form-content">
          <button>بازیابی رمز عبور</button>
        </div>
        <div class="for-login">
          <router-link to="/login">
            <p>بازگشت به صفحه ورود</p>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ForgotPassword",
};
</script>
