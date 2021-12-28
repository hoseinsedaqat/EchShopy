<template>
  <div>
    <Header />
    <div class="errorPage">
      <div class="error-container">
        <div class="error-content">
          <h1>صفحه‌ای که دنبال آن بودید پیدا نشد!</h1>
          <router-link to="/">
            <button>صفحه اصلی</button>
          </router-link>
          <img src="../assets/images/error/644d3f75.png" alt="" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Error",
};
</script>
