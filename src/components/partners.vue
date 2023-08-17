<template>
    <div id="partners">
        <div class="title">PARTNERS</div>
        <div class="name">CON IL CONTRIBUTO DI</div>
        <div class="line1">
            <div class="img"><img :src="require('@/assets/partners2/2.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners2/1.png')" alt=""></div>
            
            <div class="img"><img :src="require('@/assets/partners2/3.png')" alt=""></div>
        </div>
        <div class="name">COMPARTECIPAZIONE DI</div>
        <div class="line">
            <div class="img"><img :src="require('@/assets/partners2/22.png')" alt=""></div>
        </div>
        <div class="name">IN COLLABORAZIONE CON</div>
        <div class="line2">
            <div class="img"><img :src="require('@/assets/partners2/13.png')" alt=""></div>   <!-- CONFCOMMERCIO --> 
            <div class="img"><img :src="require('@/assets/partners2/21.png')" alt=""></div>   <!-- STELARIO --> 
            <div class="img"><img :src="require('@/assets/partners2/19.png')" alt=""></div> <!-- MARAMEO --> 
            <div class="img"><img :src="require('@/assets/partners2/20.png')" alt=""></div> <!-- MECENATE --> 
            <div class="img"><img :src="require('@/assets/partners2/ladritta.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners2/25.png')" alt=""></div> <!-- BONY PIZZA --> 
            <div class="img"><img :src="require('@/assets/partners2/14.png')" alt=""></div> <!-- momo gelati -->
            <div class="img"><img :src="require('@/assets/partners2/lapizzetta.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners2/12.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners2/17.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners2/16.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners2/15.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners2/11.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners2/10.png')" alt=""></div>
        </div>
        <div class="name">SPONSOR</div>
        <div class="line3">
            <!-- <div class="img"><img :src="require('@/assets/partners/wom.png')" alt=""></div> -->
            <div class="img"><img :src="require('@/assets/partners2/4.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners2/bassetti.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners2/Groupama.png')" alt=""></div>
            <!-- GIAMP -->
            <div class="img"><img :src="require('@/assets/partners2/giamp.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners2/5_poderemicheli.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners2/8.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners2/9.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners2/6.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners2/18.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/partners2/2_KeepOn.png')" alt=""></div>
        </div>
        
        <div class="name">PRODOTTO DA</div>
        <div class="line3">
            <div class="img"><img :src="require('@/assets/partners2/23.png')" alt=""></div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
#partners{
    margin: 0px 20px;
    margin-top: 130px;
    background: rgba(5, 0, 65, 0.945);
    border-radius: 20px;
    padding: 20px 60px;
    position: relative;
    .name{
        margin-top: 30px;
        margin-bottom: 10px;
        opacity: 0.7;
        font-size: 15pt;
        font-weight: bold;
    }
    .title{
        // position: absolute;
        // top:5px;left:15px;
        font-size: 25pt;
        text-align: left;
        font-weight: 800;
        color: #7aff7d;
    }
    .line{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        column-gap: 10px;
        row-gap: 10px;
        .img{
            width: 240px;
            img{
                width: 100%;
            }
        }
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
        .img{
            width: 80px;
            
            img{
                width: auto;
                height: auto;
                max-width:100%;
                max-height: 80px;
            }
        }
    }
    .line3{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        column-gap: 20px;
        margin-top: 20px;
        .img{
            width: 80px;
            img{
                width: 100%;
            }
        }
    }
}
</style>