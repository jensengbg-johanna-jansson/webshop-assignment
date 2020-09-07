<template>
    <header class="header">
        <router-link class="header-logo" to="/">Home</router-link>
        <nav class="header-links">
            <router-link class="header-links-item" to="/">Home</router-link>
            <router-link class="header-links-item" to="/">About</router-link>
            <router-link class="header-links-item" to="/">Contact</router-link>
        </nav>
        <cartButton />
    </header>
</template>

<script>
import cartButton from '@/components/cartButton.vue';

export default {
    name: 'mainHeader',
    components: {
        cartButton
    }
}
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 10vh;
        width: 100vw;
        padding: 0 10vw;

        a {
            text-transform: uppercase;
            font-weight: bold;
            text-decoration: none;        
        }

        &-links {
            display: flex;

            &-item {
                color: #444444;
                font-size: 0.8rem;
                margin: 0 1rem;
            }
            &-item:hover {
                color: #222222;
                cursor: pointer;
            }
        }
        &-logo {
            font-size: 1.5rem;
            color: #111111;
        }
    }
</style>