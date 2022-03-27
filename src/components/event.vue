<template>
    <div id="event">
        <a href=""><div class="img"></div></a>
        <div class="name">{{event.name}}</div>
        <div class="data">{{event.data}}</div>
        <a href=""><div class="button">ACQUISTA BIGLIETTO</div></a>
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
        &:hover{
            transform: rotate(5deg);
            transition-duration: 0.2s;
        }
    }
    .button{
        font-size: 23pt;
        background-color: rgb(17, 126, 44); 
        color: white;
        font-weight: 800;
        width: max-content;
        padding: 5px 20px;
        margin-top: 10px;
        border-radius: 5px;
        transition-duration: 0.2s;
        &:hover{
            background-color: rgb(10, 83, 28);
            transition-duration: 0.2s;
            border-radius: 10px;
            transform: scale(1.05);
        }
    }
    .name{
        font-size: 30pt;
        font-weight: 800;
        text-transform: uppercase;
        margin-top: 5px;
        color: rgb(255, 255, 255);
    }
    .data{
        font-size: 20pt;
        font-weight: 300;
        margin-top: -10px;
        color: rgb(240, 240, 240);
    }
    
}
</style>