<script>
    import EchoBar from "$lib/components/EchoBar.svelte";
</script>

<EchoBar needLogin={true}>
    <div class="container h-full min-w-full grid grid-cols-2 gap-8">
        <slot/>
        <div class="col-span-1 container bg-surface-700"/>
    </div>
</EchoBar>