<script lang="ts">
    import {AppBar, AppShell, getModalStore, getToastStore} from "@skeletonlabs/skeleton";
    import type {ModalSettings} from "@skeletonlabs/skeleton";
    import type {PageData} from "./$types";
    import CreateProject from "./CreateProject.svelte";
    import {invalidateAll} from "$app/navigation";
    
    import trashIcon from "$lib/assets/trash.svg";
    
    export let data: PageData;
    
    const modalStore = getModalStore();
    const toastStore = getToastStore();
    
    const modalSetting: ModalSettings = {
        type: "component",
        component: {
            ref: CreateProject
        },
        response: async (data) => {
            const response = await fetch("/app", {
                method: "POST",
                body: JSON.stringify(data)
            });
            
            if (!response.ok) {
                toastStore.trigger({
                   message: "Failed to create project",
                   background: "variant-filled-error"
                });
                
                return;
            }
            
            invalidateAll();
        }
    };
</script>

<AppShell>
    <svelte:fragment slot="header">
        <AppBar>
            <svelte:fragment slot="lead">
                <span class="text-xl uppercase text-surface-400">Projects</span>
            </svelte:fragment>
            <svelte:fragment slot="trail">
                <button class="btn variant-ghost-primary" on:click={() => modalStore.trigger(modalSetting)}>
                    New Project
                </button>
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
    
    <div class="w-full h-full grid grid-cols-5 gap-4 p-4">
        {#each JSON.parse(data.projects) as project}
            <a class="card card-hover max-h-48 flex flex-col" href="/app/project/{project.project_id}">
                <header class="card-header mb-2">{project.title}</header>
                <hr class="opacity-50 w-[90%] self-center"/>
                <section class="p-4">{project.description}</section>
            </a>
        {/each}
    </div>
</AppShell>