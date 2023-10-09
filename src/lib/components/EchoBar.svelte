<script lang="ts">
    import {AppBar, AppShell} from "@skeletonlabs/skeleton";

    export let needLogin: boolean;
</script>

<AppShell>
    <svelte:fragment slot="header">
        <AppBar>
            <div class="flex items-center gap-4">
                <a class="text-xl text-secondary-300 hover:text-primary-500 transition-colors" href="/">Echo</a>
                <div class="w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-60"/>

                {#if needLogin}
                    <a class="btn p-0 text-secondary-300 hover:text-primary-500 transition-colors" href="/auth/login">
                        Login
                    </a>
                {:else}
                    <a class="btn p-0 text-secondary-300 hover:text-primary-500 transition-colors" href="/app">
                        Go to Dashboard
                    </a>
                {/if}
            </div>
        </AppBar>
    </svelte:fragment>
    <slot/>
</AppShell>