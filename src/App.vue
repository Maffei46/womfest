<template>
  <div id="app">
    <!-- <div class="bg">
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
    </div> -->
    
    <router-view/>
  </div>
</template>

<script>

export default {
    
}

</script>
<style lang="scss">
@import url('./assets/scss/main.scss');
#app{
    // background: linear-gradient(-45deg, #010029,#00010c);
    // background-size: 400% 400%;
    // animation: gradient 15s ease infinite;
    // @keyframes gradient {
    //     0% {
    //         background-position: 0% 50%;
    //     }
    //     50% {
    //         background-position: 100% 50%;
    //     }
    //     100% {
    //         background-position: 0% 50%;
    //     }
    // }
    .bg{
        height: 100vh;
        position: fixed;
    }
}
</style>
