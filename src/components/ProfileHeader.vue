<template>
  <div class="profile-manager-menu">
    <div class="invite-friends-img">
      <img src="../assets/images/profile/invite-friends.jpg" alt="" />
    </div>
    <ul class="user-profile">
      <router-link class="view-profile" to="/profile">
        <div class="user-profile-img">
          <img src="../assets/images/profile/user-profile-img.png" alt="" />
        </div>
        <div>
          <h4 class="english-word">{{ userInfo.email }}</h4>
          <p>09176484569</p>
          <p class="money-charge">فعالسازی کیف پول</p>
          <p class="echclub">
            <span>دیجی کلاب</span>
            <span>364 امتیاز</span>
          </p>
        </div>
      </router-link>
      <router-link class="list-view" to="/cart">
        <i class="fas fa-file-invoice"></i>
        <p>سفارش های من</p>
      </router-link>
      <router-link class="list-view" to="/profile/favoritelist">
        <i class="far fa-heart"></i>
        <p>لیست ها</p>
      </router-link>
      <li class="list-view">
        <i class="far fa-comment"></i>
        <p>نظرات</p>
      </li>
      <li class="list-view">
        <i class="fas fa-map-marked-alt"></i>
        <p>نشانی ها</p>
      </li>
      <li class="list-view">
        <i class="far fa-credit-card"></i>
        <p>سفارش های من</p>
      </li>
      <li class="list-view">
        <i class="far fa-envelope"></i>
        <p>پیغام ها</p>
      </li>
      <li class="list-view">
        <i class="far fa-clock"></i>
        <p>بازدید های اخیر</p>
      </li>
      <router-link class="list-view" to="/profile/update-profile">
        <i class="far fa-user"></i>
        <p>اطلاعات حساب</p>
      </router-link>
      <li class="list-view" @click="logOut()">
        <i class="fas fa-sign-out-alt"></i>
        <p>خروج</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { getUserData } from "../utils/setUserData";
export default {
  name: "ProfileHeader",
  data() {
    return {
      userInfo: getUserData(),
    };
  },
  methods: {
    ...mapActions(["logOut"]),
  },
};
</script>
