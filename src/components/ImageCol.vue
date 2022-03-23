<template>
  <div class="image-col">
    <div v-for="(ic,idx) in ImageCol" :key="(ic,idx)">
      <img
        :src="ic.img"
        :alt="ic.id"
      />
    </div>
  </div>
</template>

<script>
import ImageCol from "../data/ImageCol/imagecol";
export default {
  name: "ImageCol",
  data() {
    return {
      ImageCol,
    };
  },
};
</script>
