<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@import "assets/css/public.css";
html,body {
  margin: 0;
  padding: 0;
  /* 火狐隐藏滚动条 */
  scrollbar-width: none;
  /* ie/edg 隐藏滚动条 */
  -ms-overflow-style: none;
}
/* chrome  safari隐藏滚动条 */
body::-webkit-scrollbar,html::-webkit-scrollbar {
  display: none;
}
html,body {
  width: 1920px;
  height: 1080px;
  background: #aaa;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* 整个滚动条 */
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

/* 滚动条上的滚动滑块 */
::-webkit-scrollbar-thumb {
  background: #00BDFD;
  opacity: 0.5;
  border-radius: 32px;
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 32px;
}


</style>
