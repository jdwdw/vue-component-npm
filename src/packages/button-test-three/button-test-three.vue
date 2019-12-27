<template>
    <section class="show-seats">
        <div>
            test-three
        </div>
        <div class="test">
            {{data.name}}
        </div>
    </section>
</template>
<script>
export default {
    name:'ButtonTestThree',
    data(){
        return {}
    },
    props:{
        data:{
            type:Object,
        }
    },
    methods:{

    },
    
}
</script>
<style lang="sass" scoped>
    .test 
        color: yellow;

</style>