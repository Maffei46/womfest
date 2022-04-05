<template>
    <div id="event">
        <a :href="event.url" target="blank_"><div class="img" :style="'background-image: url(\''+require('@/assets/events/'+event.img)+'\')'"></div></a>
        <div class="name">{{event.name}}</div>
        <div class="data">{{event.data}}</div>
        <a :href="event.url" target="blank_"><div class="button">BIGLIETTO PRESTO DISPONIBILE</div></a>
    </div>
</template>

<script>
export default {
    props:['event']
}
</script>

<style lang="scss" scoped>
#event{
    text-align: left;
    .img{
        width: 400px;
        height: 400px;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        transition-duration: 0.2s;
        background-size: cover;
        @media screen and (max-width: 466px) {
            width: 300px;
            height: 300px;
        }
        @media screen and (max-width: 350px) {
            width: 250px;
            height: 250px;
        }
        &:hover{
            transform: rotate(5deg);
            transition-duration: 0.2s;
        }
    }
    .button{
        //font-size: 23pt;
        font-size: 17pt;
        background-color: #FCEA60; 
        color: rgb(0, 0, 0);
        font-weight: 800;
        width: max-content;
        padding: 5px 20px;
        margin-top: 10px;
        border-radius: 5px;
        transition-duration: 0.2s;
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
    }
    .name{
        width: 100%;
        max-width: 400px;
        font-size: 28pt;
        font-weight: 800;
        text-transform: uppercase;
        margin-top: 5px;
        color: rgb(255, 255, 255);
        @media screen and (max-width: 466px) {
            font-size: 23pt;
        }
        @media screen and (max-width: 350px) {
            font-size: 18pt;
        }
    }
    .data{
        font-size: 20pt;
        font-weight: 300;
        margin-top: -10px;
        color: rgb(240, 240, 240);
        @media screen and (max-width: 466px) {
            font-size: 15pt;
        }
        @media screen and (max-width: 350px) {
            font-size: 12pt;
            margin-top: -5px;
        }
    }
    
}
</style>