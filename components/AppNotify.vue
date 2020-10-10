<template>
  <div class="AppNotify">
    <div class="AppNotify_emoji">
      
    </div>
    <div class="AppNotify_text">

    </div>
  </div>
</template>

<style lang="scss" scoped>
.AppNotify {  
  z-index: 999;

  display: grid;
  grid-template-columns: 1rem auto;
  gap: 15px;
  padding: 15px;
  text-align: left;
  border: 2px solid black;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.7);
}
</style>