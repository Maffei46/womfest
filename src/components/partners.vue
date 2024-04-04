<template>
    <div id="partners">
        <div class="t">PARTNERS</div>
        <img :src="require('@/assets/2024/sponsors.png')">
    </div>
</template>

<style lang="scss" scoped>
#partners{
    max-width: 900px;
    background: #ED6C21;
    border-radius: 4px;
    padding: 10px;
    margin-top: 100px;
    z-index: 99;
    .t{
        font-weight: bold;
        font-size: 2.5rem;
        padding-bottom: 10px;
    }
    img{
        width: 100%;
    }
}
</style>