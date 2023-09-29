<script>
    import {AppBar, AppShell} from "@skeletonlabs/skeleton";
</script>

<AppShell>
    <svelte:fragment slot="header">
        <AppBar>
            <svelte:fragment slot="lead">
                <strong class="text-xl uppercase text-surface-500">Echo</strong>
            </svelte:fragment>
            <svelte:fragment slot="trail">
                <a class="btn variant-ghost-primary" href="/login">
                    Login
                </a>
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
    <slot/>
</AppShell>