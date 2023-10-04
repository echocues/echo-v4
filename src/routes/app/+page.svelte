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
        {#each JSON.parse(data.projects) as project}
            <a class="card variant-filled-error card-hover" href="/app/project/{project.project_id}">
                <header class="card-header">{project.title}</header>
                <section class="p-4">{project.description}</section>
            </a>
        {/each}
    </div>
</AppShell>