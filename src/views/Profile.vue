<template>
  <div>
    <Header />
    <section class="profile-page">
      <div class="profile-manager-container">
        <div class="profile-manager">
          <ProfileHeader />
          <ProfileManager />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import ProfileHeader from "@/components/ProfileHeader.vue";
import ProfileManager from "@/components/ProfileManager.vue";
export default {
  name: "Profile",
  components: {
    ProfileHeader,
    ProfileManager,
  },
};
</script>
