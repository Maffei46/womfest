<template>
  <div id="home">
    <img :src="require('@/assets/logo.png')" alt="">
    <div class="luogo">IPPODROMO CAPRILLI - LIVORNO</div>
    <div class="data">20/29 AGOSTO 2021</div>
    <div class="socials">
      <a href="https://www.facebook.com/wommovement/" target="_blank"><img :src="require('@/assets/icons/fb.png')" alt=""></a>
      <a href="https://www.instagram.com/wom_fest/?hl=it" target="_blank"><img :src="require('@/assets/icons/ig.png')" alt=""></a>
    </div>
    <div class="events">
      <Event :event="event" v-for="(event,index) in events" :key="index" />
    </div>
    <Partners />
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
        {name: 'giorno 1',data:'SABATO 21 AGOSTO 2022'},
        {name: 'giorno 2',data:'SABATO 22 AGOSTO 2022'},
        {name: 'giorno 3',data:'SABATO 23 AGOSTO 2022'},
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
  img{
    width: 300px;
  }
  .luogo{
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: -14px;
    margin-top: 20px;
  }
  .data{
    font-size: 3.32rem;
    font-weight: 800;
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
    align-items: center;
    margin-top: 50px;
    column-gap: 30px;
    row-gap: 20px;
    flex-wrap: wrap;
    z-index: 10;
  }
}
</style>