<script lang="ts">
    import {AppBar, AppShell} from "@skeletonlabs/skeleton";
    import type {PageData} from "./$types";
    
    export let data: PageData;
</script>

<AppShell>
    <svelte:fragment slot="header">
        <AppBar>
            <svelte:fragment slot="lead">
                <span class="text-xl uppercase text-surface-400">Projects</span>
            </svelte:fragment>
            <svelte:fragment slot="trail">
                <button class="btn variant-ghost-primary">
                    New Project
                </button>
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
    
    <div class="w-full h-full">
        {#each data.projects as project}
            <span>{project.title}</span>
        {/each}
    </div>
</AppShell>