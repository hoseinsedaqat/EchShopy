<template>
  <div class="image-col-four">
    <div v-for="(ic,idx) in ImageColFour" :key="(ic,idx)">
      <img
        :src="ic.img"
        :alt="ic.id"
      />
    </div>
  </div>
</template>

<script>
import ImageColFour from "../data/ImageColFour/imagecolfour";
export default {
  name: "ImageColFour",
  data() {
    return {
      ImageColFour,
    };
  },
};
</script>
