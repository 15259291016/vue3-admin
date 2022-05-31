<template>
  <div class="card">
    <div class="card1"></div>
    <div class="card2">Hover Me</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.card {
  display: flex;
  justify-content: space-around;
  .card1 {
    width: 190px;
    height: 254px;
    border-radius: 30px;
    background: #eeeeee;
    box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  }
  .card2 {
    width: 190px;
    height: 254px;
    background: rgb(255, 255, 255);
    border-radius: 0.4em;
    box-shadow: 0.3em 0.3em 0.7em #00000015;
    transition: border 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: rgb(250, 250, 250) 0.2em solid;
    text-align: center;
    &:hover {
      border: #006fff 0.2em solid;
    }
  }
}
</style>
