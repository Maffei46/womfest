<template>
    <div id="stages">
        <div class="stage">
            <div class="img"><img :src="require('@/assets/2024/dargent.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/2024/sponsors.png')" alt=""></div>
            
        </div>
        <div class="stage">
            <div class="bigliettiDisponibili">BIGLIETTI DISPONIBILI</div>
            <div class="img"><img :src="require('@/assets/2024/bnkr.png')" alt=""></div>
            <div class="img"><img :src="require('@/assets/2024/bnkr_sponsors.png')" alt=""></div>
        </div>

        <router-link to="https://www.mailticket.it/manifestazione/CD39" target="_blank">
            <div class="buttonLink">
                <div class="button">ACQUISTA BIGLIETTI</div>
            </div>
        </router-link>
        
        <!-- <div class="stage">
            <div class="stageTitle">LIVE IN STRADA</div>
            <div class="list">
                <div class="elem">Luca Giovacchini "in solo"</div>
                <div class="elem">Volpe</div>
            </div>
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
#stages{
    z-index: 1;
    display: flex;
    gap: 50px;
    margin-top: 130px;
    flex-flow: column;
    flex-wrap: wrap;
    justify-content: center;
    z-index: 99;
    .stage{
        background: #ED6C21;
        border-radius: 4px;
        padding: 10px;
        max-width: 1000px;
        column-gap: 10px;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        .img{
            flex:1;
            min-width: 300px
        }
        img{
            width: 100%;
        }
        .stageTitle{
            font-weight: 800;
            font-size: 25pt;
            text-align: left;
            color: #7aff7d;
        }
        .list{
            text-align: left;
            margin-top: 10px;
            margin-bottom: 10px;
            padding-left: 10px;
            .elem{
                font-size: 17pt;
                font-weight: 600;
                position: relative;
                span{
                    position: absolute;
                    font-size: 12pt;
                    font-weight: normal;
                    color: #7aff7d;
                    transform: translateX(5px);
                }
            }
        }
        .bigliettiDisponibili{
            position: absolute;
            background: #BB98F2;
            font-weight: bold;
            padding: 10px;
            border-radius: 5px;
            right:-70px;top:0;
            border: 5px solid #ED6C21;
            transform: rotate(45deg) scale(0.7);
            box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        }

    }
    .buttonLink{
        background: #ED6C21;
        width: max-content;
        margin: 0 auto;
        margin-top: -50px;
        padding: 15px 15px;
        border-radius: 0px 0px 5px 5px;
        font-weight: bold;
        font-size: 1.2rem;
        padding: 10px;
        padding-top: 0px;
        .button{
            background: #ED6C21;
            padding: 15px;
            border-radius: 5px;
            transition-duration: 0.1s;
            &:hover{
                transition-duration: 0.1s;
                background: #b44f14;
            }
        }
        
    }
}
</style>