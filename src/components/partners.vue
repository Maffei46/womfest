<template>
    <div id="partners">
        <div class="title">PARTNERS</div>
        <div class="line1">
            <div class="img"><img :src="require('@/assets/partners/citta_di_lucca.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners/cass_di_risparmio_di_lucca.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners/banca_del_monte.png')" alt=""></div>
            
            
            
        </div>
        <div class="line2">
            <div class="img"><img :src="require('@/assets/partners/confcommercio.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners/ottavo-nano.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners/terigi.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners/frares.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners/labadiola.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners/aci.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners/keepin.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners/rock_contest.png')" alt=""></div>    
        </div>
        <div class="line3">
            <div class="img"><img :src="require('@/assets/partners/wom.png')" alt=""></div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>
#partners{
    margin: 0px 20px;
    margin-top: 130px;
    background-color: rgba(255, 255, 255, 0.945);
    border-radius: 20px;
    padding: 20px 60px;
    position: relative;
    .title{
        position: absolute;
        top:-31px;left:40px;
        font-size: 25pt;
        font-weight: 800;
        color: rgba(255, 255, 255, 0.945);
    }
    .line1{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        column-gap: 10px;
        row-gap: 10px;
        .img{
            width: 130px;
            img{
                width: 100%;
            }
        }
    }
    .line2{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        column-gap: 20px;
        row-gap: 20px;
        margin-top: 20px;
        .img{
            width: 80px;
            img{
                width: 100%;
            }
        }
    }
    .line3{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        column-gap: 20px;
        margin-top: 20px;
        .img{
            width: 50px;
            img{
                width: 100%;
            }
        }
    }
}
</style>