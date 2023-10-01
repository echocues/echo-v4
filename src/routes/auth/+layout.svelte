<script>
    import EchoBar from "$lib/components/EchoBar.svelte";
</script>

<EchoBar>
    <div class="container h-full min-w-full grid grid-cols-2 gap-8">
        <form method="post" class="flex flex-col col-span-1 justify-center items-center">
            <div class="flex flex-col justify-center w-2/5 h-full gap-4">
                <slot/>
            </div>
        </form>
        <div class="col-span-1 container bg-surface-700"/>
    </div>
</EchoBar>