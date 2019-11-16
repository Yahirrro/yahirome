<template>
  <div>
    <header-anm :title="'Contact'" :description="'Contact to me'" />
    <section id="content">
      <form>
        <input type="text">
      </form>
    </section>
  </div>
</template>
<script>
import headerAnm from "~/components/header/header_animated.vue";
export default {
  components: {
    headerAnm
  }
};
</script>
