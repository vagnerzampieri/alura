<template>
    <button @click="callAction()" class="button" :class="style" :type="type">{{ label }}</button>
</template>

<script>

export default {
    props: {
        type: {
            required: true,
            type: String
        },

        label: {
            required: true,
            type: String
        },

        confirmation: Boolean,
        style: String
    },

    methods: {
        callAction() {
            if(this.confirmation) {
                if(confirm('Confirma operação?')) {
                    this.$emit('active');
                }
                return;
            }
            this.$emit('active');
        }
    },

    computed: {
        style() {
            if(this.style == 'default' || !this.style) return 'button-default';
            if(this.style == 'danger') return 'button-danger';
        }
    }
}
</script>

<style>
    .button {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .button-danger {
        background: firebrick;
        color: white;
    }

    .button-default {
        background: darkcyan;
        color: white;
    }
</style>