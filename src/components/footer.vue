<template>
    <div id="footer">
        <div class="ele">
            <router-link to="/privacy-policy">Privacy</router-link>
            <router-link to="#">Cookie Policy</router-link>
        </div>
        <div class="ele">© 2022 WØM FEST</div>
        <div class="ele">P.iva 02462960465</div>
        <div class="ele">POWERD BY: <a href="https://www.abramomaffei.com/" target="_blank">ABRAMO MAFFEI</a></div>
    </div>
</template>

<style lang="scss" scoped>
#footer{
    padding: 50px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 100px;
    flex-wrap: wrap;
    row-gap: 20px;
    a{
        transition-duration: 0.2s;
        &:hover{
            transform: scale(1.1);
            transition-duration: 0.2s;
            text-decoration: underline;
        }
    }
    .ele{
        z-index: 30;
        display: flex;
        column-gap: 10px;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 10pt;
        color: white;
        text-align: center;
        text-shadow: .1em .1em 1px hsl(247, 90%, 8%);
    }
}
</style>