<template>
  <div>
    <h1 class="PageTitle">
      <span lang="ja" class="PageTitle_main">{{ title }}</span>
      <span lang="en" class="PageTitle_sub">{{ enTitle }}</span>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    enTitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.PageTitle {
  height: 50px;
  text-align: center;
  font-size: 2.3rem;
  letter-spacing: 0.1em;
  font-weight: bolder;
  margin-top: 0;
  margin-bottom: 50px;
  &_main {
    display: inline-block;
  }
  &_sub {
    font-weight: normal;
    font-size: 50%;
    letter-spacing: 0.01em;
  }
}
</style>