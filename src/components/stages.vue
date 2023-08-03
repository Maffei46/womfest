<template>
    <div id="stages">
        <div class="stage">
            <div class="stageTitle">MAIN STAGE</div>
            <div class="list">
                <div class="elem">Una <span>LIVE</span></div>
                <div class="elem">Giulia / Il Corve / Nomida <span>LIVE</span></div>
                <div class="elem">Pino D'angiò <span>LIVE</span></div>
                <div class="elem">Bruno Bellissimo <span>DJSET</span></div>
            </div>
        </div>
        <div class="stage">
            <div class="stageTitle">LIVE IN STRADA</div>
            <div class="list">
                <div class="elem">Luca Giovacchini "in solo"</div>
                <div class="elem">Volpe</div>
            </div>
        </div>
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
    .stage{
        background: rgba(5, 0, 65, 0.945);
        border-radius: 4px;
        padding: 20px 60px 20px 20px;
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