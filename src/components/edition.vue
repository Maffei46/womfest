<template>
    <div class="edition">
        <div class="name">{{ name }}</div>
        <div class="info"><span>{{ edition }}</span> - {{ location }}</div>
        <img :src="image" :alt="name">
    </div>
</template>
<script>
export default {
    props:{
        image:{ required:true},
        edition: {type: String},
        location: {type: String},
        name: {type: String}
    }
}
</script>
<style lang="scss" scoped>
.edition{
    width: 100%;
    max-width: 350px;
    .name{
        font-size: 1.3rem;
        font-weight: 700;
    }
    .info{
        font-weight: 300;
        font: 1.1rem;
        margin-bottom: 30px;
        span{
            font-style: italic;
        }
    }
    img{
        width: 100%;
        border: 2px solid black;
    }
}
</style>