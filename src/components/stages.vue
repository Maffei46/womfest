<template>
    <div id="stages">
        <div class="stage">
            <img :src="require('@/assets/2024/dargent.png')" alt="">
        </div>
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
    gap: 20px;
    margin-top: 130px;
    flex-wrap: wrap;
    justify-content: center;
    z-index: 99;
    .stage{
        background: #ED6C21;
        border-radius: 4px;
        padding: 10px;
        max-width: 500px;
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
    }
}
</style>