<template>
  <div id="home">
    <!-- <div class="rinodx"><img :src="require('@/assets/WM rino.png')" alt=""></div>
    <div class="rinosx"><img :src="require('@/assets/WM rino2.png')" alt=""></div> -->
    <!-- <div class="guitar"><img :src="require('@/assets/guitar.png')" alt=""></div> -->
    <div class="rinosx"><img :src="require('@/assets/2025/lateral.png')" alt=""></div>
    <div class="rinodx"><img :src="require('@/assets/2025/lateral.png')" alt="" style="transform: scaleX(-1);"></div>
    <img class="logoimg" :src="require('@/assets/2025/logo.png')" alt="">
    <!-- <div class="luogo">PIAZZA S.FRANCESCO</div> -->
    <!-- <div class="data">26 AGOSTO 2023</div> -->
    <div class="socials">
      <a href="https://www.facebook.com/wommovement/" target="_blank"><img :src="require('@/assets/2024/fb.png')" alt=""></a>
      <a href="https://www.instagram.com/wom_fest/?hl=it" target="_blank"><img :src="require('@/assets/2024/ig.png')" alt=""></a>
    </div>
    <!-- <div class="events">
      <Event :event="event" v-for="(event,index) in events" :key="index" />
    </div> -->
    <div class="areaExpo">
      <a href="https://linktr.ee/WOMFEST2025" target="blank_">
        <div class="button">ACQUISTA <br><span>BIGLIETTI</span></div>
      </a>
    </div>

    <Stages v-if="true"/>

    <div class="contest" v-if="false">
      <div class="title">CONTEST</div>
      <img :src="require('@/assets/2024/contest.png')" alt="">
      <!-- <img :src="require('@/assets/2024/loghicontest.pdf')" alt=""> -->
      <a href="contest2024.pdf" target="_blank"><button>MAGGIORI INFORMAZIONI</button></a>
    </div>
    <Partners v-if="false" />

    <!-- <div class="areaExpo">
      <router-link to="/associazione-wom">
        <div class="button">ASSOCIAZIONE <br><span>WOM</span></div>
      </router-link>
    </div> -->

    <router-link to="/archive"><div class="archive"><b>WØMFEST</b><span>ARCHIVE</span></div></router-link>
    
    <Footer bgColor="var(--bgColor)" />
  </div>
</template>

<script>
// import Event from '@/components/event.vue'
import Partners from '@/components/partners.vue'
import Stages from '@/components/stages.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'Home',
  components:{
    //Event,
    Stages,
    Partners,
    Footer},
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
  background-color: var(--bgColor);
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
  .loghi{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .im{
      max-width: 400px;
    }
  }
  .rinodx{
    position: fixed;
    top:0;
    right:0;
    bottom:0;
    transform: translateX(20%);
    z-index: 98;
    @media screen and (max-width: 750px){
      right: -50px;
    }
    @media screen and (max-width: 450px){
      right: -100px;
    }
    // @media screen and (max-width: 1000px) {
    //   transform: scale(0.8) translateX(30%) translateY(-15%);
    // }
    // @media screen and (max-width: 850px) {
    //   display: none;
    // }
    img{
      height: 100%;
    }
  }
  .rinosx{
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    transform: translateX(-20%);
    z-index: 1;
    z-index: 98;
    @media screen and (max-width: 750px){
      left: -50px;
    }
    @media screen and (max-width: 450px){
      left: -100px;
    }
    // @media screen and (max-width: 1000px) {
    //   transform: scale(0.8) translateX(-30%) translateY(-15%);
    // }
    // @media screen and (max-width: 850px) {
    //   display: none;
    // }
    img{
      height: 100%;
    }
  }
  .guitar{
    position: fixed;
    bottom:0;
    left:0;
    z-index: 0;
    transform: translateY(50%) translateX(-10%);
    width: 130%;
    img{
      width: 120%;
    }
    @media screen and (max-width: 1000px) {
      width: 160%;
      transform: translateY(45%) translateX(-30%);
      img{
      width: 160%;
      }
    }
    @media screen and (max-width: 850px) {
      width: 180%;
      transform: translateY(45%) translateX(-40%);
      img{
      width: 180%;
      }
    }
    @media screen and (max-width: 600px) {
      width: 220%;
      transform: translateY(48%) translateX(-100%);
      img{
      width: 250%;
      }
    }
  }
  .logoimg{
    max-width: 1800px;
    width: 90%;
    z-index: 9;
    //width: 500px;
  }
  .luogo{
    font-size: 2.6rem;
    font-weight: 600;
    margin-bottom: -12px;
    z-index: 9;
    text-shadow: .1em .1em 0 hsl(247, 90%, 8%);
    margin-top: 80px;
    color:#7aff7d;
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
    text-shadow: .1em .1em 0 hsl(247, 90%, 8%);
    color:#7aff7d;
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
    z-index: 2;
    a{
      img{
        width: 50px;
        transition-duration: 0.2s;
        filter: invert(1);
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
        font-size: 3rem;
        background-color: var(--alt1Color);
        color: rgb(0, 0, 0);
        font-weight: 700;
        width: max-content;
        padding: 5px 20px;
        margin-top: 10px;
        border-radius: 5px;
        transition-duration: 0.2s;
        line-height: 2.9rem;
        color: white;
        @media screen and (max-width: 466px) {
            //font-size: 18pt;
            font-size: 15pt;
        }
        @media screen and (max-width: 375px) {
            //font-size: 15pt;
            font-size: 12pt;
        }
        &:hover{
            background-color: var(--alt1Color);
            transition-duration: 0.2s;
            border-radius: 10px;
            transform: scale(1.05);
        }
        span{
          font-size: 3.5rem;
          font-weight: 800;
        }
    }
  }
}

.contest{
  background: #ED6C21;
  border-radius: 4px;
  padding: 10px;
  max-width: 500px;
  margin-top: 100px;
  z-index: 99;
  .title{
    font-weight: 500;
    font-size: 2rem;
    span{
      font-weight: 200;
    }
  }
  button{
    background: #0D594C;
    border-radius: 4px;
    color: white;
    border:none;
    padding: 8px 10px;
    font-weight: 600;
    margin-top: 6px;
    cursor: pointer;
    transition-duration: 0.1s;
    &:hover{
      transform: scale(1.1);
      transition-duration: 0.1s;
    }
  }
  img{
    width: 100%;
  }
}

.archive{
  font-size: 4rem;
  color:black;
  font-weight: 800;
  margin-top: 60px;
  span{
    font-size: 3rem;
    font-weight: 400;
  }
}
</style>