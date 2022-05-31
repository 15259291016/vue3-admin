<template>
  <div>
    <div class="spinner">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="loader">
      <div class="face">
        <div class="circle"></div>
      </div>
      <div class="face">
        <div class="circle"></div>
      </div>
    </div>
    <div class="loader1">
      <span>Loading...</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.spinner {
  --clr: rgb(0, 113, 128);
  --gap: 6px;
  /* gap between each circle */
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--gap);
}

.spinner span {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(--clr);
  opacity: 0;
}

.spinner span:nth-child(1) {
  animation: fade 1s ease-in-out infinite;
}

.spinner span:nth-child(2) {
  animation: fade 1s ease-in-out 0.33s infinite;
}

.spinner span:nth-child(3) {
  animation: fade 1s ease-in-out 0.66s infinite;
}

@keyframes fade {
  0%,
  100% {
    opacity: 1;
  }

  60% {
    opacity: 0;
  }
}
.loader {
  width: 6em;
  height: 6em;
  font-size: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader .face {
  position: absolute;
  border-radius: 50%;
  border-style: solid;
  animation: animate023845 3s linear infinite;
}

.loader .face:nth-child(1) {
  width: 100%;
  height: 100%;
  color: gold;
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.2em 0.2em 0em 0em;
  --deg: -45deg;
  animation-direction: normal;
}

.loader .face:nth-child(2) {
  width: 70%;
  height: 70%;
  color: lime;
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.2em 0em 0em 0.2em;
  --deg: -135deg;
  animation-direction: reverse;
}

.loader .face .circle {
  position: absolute;
  width: 50%;
  height: 0.1em;
  top: 50%;
  left: 50%;
  background-color: transparent;
  transform: rotate(var(--deg));
  transform-origin: left;
}

.loader .face .circle::before {
  position: absolute;
  top: -0.5em;
  right: -0.5em;
  content: '';
  width: 1em;
  height: 1em;
  background-color: currentColor;
  border-radius: 50%;
  box-shadow: 0 0 2em, 0 0 4em, 0 0 6em, 0 0 8em, 0 0 10em,
    0 0 0 0.5em rgba(255, 255, 0, 0.1);
}

@keyframes animate023845 {
  to {
    transform: rotate(1turn);
  }
}
/* From uiverse.io by @mobinkakei */
.loader1 {
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border-radius: 50%;
  border-top: 5px solid #e74c3c;
  position: relative;
  animation: load 2s linear infinite;
}

.loader1::before,
.loader1::after {
  content: '';
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0;
  top: 0;
  box-sizing: border-box;
  border-radius: 50%;
}

.loader1::before {
  border-top: 5px solid #e67e22;
  transform: rotate(120deg);
}

.loader1::after {
  border-top: 5px solid #3498db;
  transform: rotate(240deg);
}

.loader1 span {
  position: absolute;
  font-size: small;
  width: 100px;
  height: 100px;
  color: #fff;
  text-align: center;
  line-height: 100px;
  animation: a2 2s linear infinite;
}

@keyframes load {
  to {
    transform: rotate(360deg);
  }
}

@keyframes a2 {
  to {
    transform: rotate(-360deg);
  }
}
</style>
