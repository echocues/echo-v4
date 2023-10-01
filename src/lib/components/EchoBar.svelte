<script>
    import {AppBar, AppShell} from "@skeletonlabs/skeleton";
</script>

<AppShell>
    <svelte:fragment slot="header">
        <AppBar>
            <svelte:fragment slot="lead">
                <a class="text-xl uppercase text-surface-400" href="/">Echo</a>
            </svelte:fragment>
            <svelte:fragment slot="trail">
                <a class="btn variant-ghost-primary" href="/auth/login">
                    Login
                </a>
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
    <slot/>
</AppShell>