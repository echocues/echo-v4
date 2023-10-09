<script lang="ts">
    import EchoBar from "$lib/components/EchoBar.svelte";
    import type {PageData} from "./$types";
    import waves from "$lib/assets/waves.svg";
    
    export let data: PageData;
</script>

<EchoBar needLogin={data.needLogin}>
    <div class="container h-full w-full flex">
        <div class="w-[50%] flex flex-col gap-1 justify-center items-center">
            <div>
                <h2 class="h2 text-5xl opacity-90">Master Stage<br>Sounds with</h2>
                <h1 class="h1 text-7xl text-primary-500">Ease</h1>
                <button class="variant-filled-primary btn mt-32">Get Started</button>
            </div>
        </div>

        <img src={waves} class="absolute -right-0 -top-0" alt="Waves">
    </div>
</EchoBar>

<style lang="postcss">
</style>