<template>
    <section class="show-seats">
        <div>
            test-two
        </div>
        <div class="test">
            {{data.name}}
        </div>
    </section>
</template>
<script>
export default {
    name:'ButtonTestTwo',
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
        color: red;

</style>