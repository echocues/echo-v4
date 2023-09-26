<script>
    import {AppBar, AppShell, getModalStore} from "@skeletonlabs/skeleton";
    import Login from "$lib/Login.svelte";
    
    const modalStore = getModalStore();
    
    function openLogin() {
        modalStore.trigger({
            type: "component",
            component: {
                ref: Login
            }
        });
    }
</script>

<AppShell>
    <svelte:fragment slot="header">
        <AppBar>
            <svelte:fragment slot="lead">
                <strong class="text-xl uppercase text-surface-500">Echo</strong>
            </svelte:fragment>
            <svelte:fragment slot="trail">
                <button class="btn variant-ghost-primary" on:click={openLogin}>
                    Login
                </button>
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
    <slot/>
</AppShell>