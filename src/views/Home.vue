<template>
  <div>
    <Header />
    <Showcase />
    <ProductCardTwo />
    <ImageCol />
    <ProductCard />
    <ImageColTwo />
    <ProductCol />
    <CategoryIntro />
    <ProductColTwo />
    <ImageColFour />
    <ProductColThree />
    <ImageColFive />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Showcase from "@/components/Showcase.vue";
import ProductCard from "@/components/ProductCard.vue";
import ImageCol from "@/components/ImageCol.vue";
import ProductCardTwo from "@/components/ProductCardTwo.vue";
import ImageColTwo from "@/components/ImageColTwo.vue";
import ProductCol from "@/components/ProductCol.vue";
import CategoryIntro from "@/components/CategoryIntro.vue";
import ProductColTwo from "@/components/ProductColTwo.vue";
import ImageColFour from "@/components/ImageColFour.vue";
import ProductColThree from "@/components/ProductColThree.vue";
import ImageColFive from "@/components/ImageColFive.vue";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Showcase,
    ProductCard,
    ImageCol,
    ProductCardTwo,
    ImageColTwo,
    ProductCol,
    CategoryIntro,
    ProductColTwo,
    ImageColFour,
    ProductColThree,
    ImageColFive,
  },
};
</script>
