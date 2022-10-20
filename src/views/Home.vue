<template>
  <div id="home">
    <div class="rinodx"><img :src="require('@/assets/WM rino.png')" alt=""></div>
    <div class="rinosx"><img :src="require('@/assets/WM rino2.png')" alt=""></div>
    <img :src="require('@/assets/logo.png')" alt="">
    <div class="luogo">VILLA BOTTINI - LUCCA</div>
    <div class="data">3-4 GIUGNO 2022</div>
    <div class="socials">
      <a href="https://www.facebook.com/wommovement/" target="_blank"><img :src="require('@/assets/icons/fb.png')" alt=""></a>
      <a href="https://www.instagram.com/wom_fest/?hl=it" target="_blank"><img :src="require('@/assets/icons/ig.png')" alt=""></a>
    </div>
    <div class="events">
      <Event :event="event" v-for="(event,index) in events" :key="index" />
    </div>
    <div class="areaExpo">
      <a href="https://linktr.ee/wom_fest" target="blank_">
        <div class="button">ISCRIVITI AREA EXPO <br><span>WØM FEST</span></div>
      </a>
    </div>
    <Partners />

    <div class="areaExpo">
      <router-link to="/associazione-wom">
        <div class="button">ASSOCIAZIONE <br><span>WØM</span></div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Event from '@/components/event.vue'
import Partners from '@/components/partners.vue'
export default {
  name: 'Home',
  components:{Event,Partners},
  data() {
    return {
      events:[
        {name: 'BNKR44 / EMMANUELLE / ADELASIA',data:'VENERDì 3 GIUGNO 2022',img:'1.jpeg',url:'https://linktr.ee/WOMFEST_3GIUGNO'},
        {name: 'POP X / PSEUDOSPETTRI / HINDYA',data:'SABATO 4 GIUGNO 2022',img:'pop_x.jpeg',url:'https://linktr.ee/WOMFEST_4GIUGNO'},
        {name: 'ABBONAMENTO',data:'3/4 GIUGNO 2022',img:'3.jpeg',url:'https://link.dice.fm/Gwb9OBnDdpb'},
      ]
    }
  },
}
</script>


<style lang="scss" scoped>
#home{
  padding-top: 100px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  min-height: 100vh;
  flex-flow: column;
  color: white;
  .rinodx{
    position: fixed;
    top:0;
    right:0;
    transform: translateX(20%);
    z-index: 1;
    @media screen and (max-width: 1000px) {
      transform: scale(0.8) translateX(30%) translateY(-15%);
    }
    @media screen and (max-width: 850px) {
      display: none;
    }
  }
  .rinosx{
    position: fixed;
    top:0;
    left:0;
    transform: translateX(-20%);
    z-index: 1;
    @media screen and (max-width: 1000px) {
      transform: scale(0.8) translateX(-30%) translateY(-15%);
    }
    @media screen and (max-width: 850px) {
      display: none;
    }
  }
  img{
    max-width: 100%;
    z-index: 9;
    //width: 500px;
  }
  .luogo{
    font-size: 2.6rem;
    font-weight: 600;
    margin-bottom: -12px;
    z-index: 9;
    @media screen and (max-width: 474px) {
      font-size: 2rem;
      margin-bottom: -8px;
    }
    @media screen and (max-width: 350px) {
      font-size: 1.5rem;
      margin-bottom: -5px;
    }
  }
  .data{
    font-size: 3.0rem;
    font-weight: 800;
    z-index: 9;
    @media screen and (max-width: 474px) {
      font-size: 2.3rem;
    }
    @media screen and (max-width: 350px) {
      font-size: 1.76rem;
    }
  }
  .socials{
    display: flex;
    column-gap: 10px;
    margin-top: 10px;
    a{
      img{
        width: 40px;
        transition-duration: 0.2s;
      }
      &:hover{
        img{
          transition-duration: 0.2s;
          transform: scale(1.1);
        }
      }
    }
  }
  .events{
    width: 100%;
    padding: 0px 20px;
    display: flex;
    justify-content: center;
    margin-top: 50px;
    column-gap: 30px;
    row-gap: 20px;
    flex-wrap: wrap;
    z-index: 10;
  }
  .areaExpo{
    margin-top: 70px;
    .button{
        font-size: 17pt;
        background-color: #FCEA60; 
        color: rgb(0, 0, 0);
        font-weight: 700;
        width: max-content;
        padding: 5px 20px;
        margin-top: 10px;
        border-radius: 5px;
        transition-duration: 0.2s;
        line-height: 20px;
        @media screen and (max-width: 466px) {
            //font-size: 18pt;
            font-size: 15pt;
        }
        @media screen and (max-width: 375px) {
            //font-size: 15pt;
            font-size: 12pt;
        }
        &:hover{
            background-color: #fcd260;
            transition-duration: 0.2s;
            border-radius: 10px;
            transform: scale(1.05);
        }
        span{
          font-size: 20pt;
          font-weight: 800;
        }
    }
  }
}
</style>