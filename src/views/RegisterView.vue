<template>
    <div>
        
        <fieldset class="fieldset-register">
            <legend> Register </legend>
            <form-component />
        </fieldset>

    </div>
</template>

<script>
import FormComponent from "@/components/FormComponent.vue";

export default {

    components: {
        "form-component": FormComponent
    }
}
</script>

<style scoped>
    *{
        margin: auto;
    }
    .fieldset-register{
        width: 50%;
    }
</style>