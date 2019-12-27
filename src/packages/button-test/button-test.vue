<template>
    <section class="show-seats">
        <div>
            test
        </div>
        <div class="test">
            {{data.name}}
        </div>
    </section>
</template>
<script>
export default {
    name:'ButtonTest',
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
        color: blue;

</style>