<template>
    <div id="Archive">
        <div class="topPart">
            <div class="bar">
                <router-link to="/"><div class="name">WØMFEST<span>ARCHIVE</span></div></router-link>
                
                <div class="since">SINCE 2018</div>
            </div>
            
            <div class="divider"></div>

            <div class="editions">
                <Edition name="WØM FEST off on tour" edition="Edizione 2024" location="Distilleria Indie, Barga (LU)" :image="require('@/assets/archive/WF_24_elasi_sm.jpg')" />
                <Edition name="WØM FEST off on tour" edition="Edizione 2024" location="Piazza Ricasoli, Altopascio (LU)" :image="require('@/assets/archive/WF_24_bnkr_sm.jpg')" />
                <Edition name="WØM FEST off on tour" edition="Edizione 2024" location="Piazza Orsi, Porcari (LU)" :image="require('@/assets/archive/WF_24_dargen_sm.jpg')" />
                <Edition name="WØM FEST off on tour" edition="Edizione 2024" location="Ostello La Salana, Capannori (LU)" :image="require('@/assets/archive/WF_24_parigi_sm.jpg')" />
                <Edition name="WØM FEST off" edition="Edizione 2023" location="Piazza San Francesco, Lucca" :image="require('@/assets/archive/WF_23_sm.jpg')" />
                <Edition name="WØM FEST" edition="Edizione 2022" location="Villa Bottini, Lucca" :image="require('@/assets/archive/WF_22_sm.jpg')" />
                <Edition name="WØM FEST C’MON FEEL THE NOIZE" edition="Edizione 2021" location="Foro Boario, Lucca" :image="require('@/assets/archive/WF_21_sm.jpg')" />
                <Edition name="WØM FEST home edit" edition="Edizione 2020" location="Online" :image="require('@/assets/archive/WF_20_sm.jpg')" />
                <Edition name="WØM FEST" edition="Edizione 2019" location="Villa Bottini, Lucca" :image="require('@/assets/archive/WF_19_sm.jpg')" />
                <Edition name="WØM FEST" edition="Edizione 2018" location="Villa Bottini, Lucca" :image="require('@/assets/archive/WF_18_sm.jpg')" />
                <Edition name="WØM FEST" edition="Edizione 2017" location="Villa Bottini, Lucca" :image="require('@/assets/archive/WF_17_sm.jpg')" />
            </div>

            <div class="divider"></div>
            <Footer />

        </div>
    </div>
</template>

<script>
import Edition from '../components/edition.vue'
import Footer from '../components/footer.vue';
export default {
    components:{Edition,Footer}
}
</script>

<style lang="scss" scoped>
#Archive{
    width: 98%;
    max-width: 2000px;
    margin: 0 auto;
    padding-top: 40px;
    .topPart{
        .bar{
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            .name{
                font-size: 8rem;
                line-height: 3rem;
                padding-top: 30px;
                padding-bottom: 10px;
                font-weight: 800;
                @media only screen and (max-width: 1120px) {
                    font-size: 6rem;
                }
                @media only screen and (max-width: 940px) {
                    font-size: 4rem;
                }
                @media only screen and (max-width: 630px) {
                    font-size: 3rem;
                }
                @media only screen and (max-width: 500px) {
                    font-size: 2rem;
                }

                span{
                    font-size: 4rem;
                    font-weight: 300;
                    @media only screen and (max-width: 850px) {
                        font-size: 3rem;
                    }
                    @media only screen and (max-width: 580px) {
                        font-size: 2rem;
                    }
                    @media only screen and (max-width: 410px) {
                        font-size: 1.5rem;
                    }
                }
            }
            .since{
                font-size:2em;
                font-weight: 200;
                padding-bottom: 3px;
                @media only screen and (max-width: 850px) {
                    font-size: 1rem;
                    padding-bottom: 11px;
                }
                @media only screen and (max-width: 580px) {
                    padding-bottom: 18px;
                }
                @media only screen and (max-width: 410px) {
                    font-size: 0.8rem;
                    padding-bottom: 21px;
                }
            }
        }
        
    }

    .divider{
        padding-top: 0px;
        border-bottom: 5px solid black;
    }

    .editions{
        padding: 80px 40px;
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        justify-content: center;
    }
}
</style>