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
    
    async function deleteProject(projectId: number, projectTitle: string) {
        const modal: ModalSettings = {
            type: "confirm",
            title: "Are you sure?",
            body: `Do you want to delete ${projectTitle}? This action can not be undone`,
            response: r => {
                
            }
        }
        
        modalStore.trigger(modal);
    }
</script>

<AppShell>
    <svelte:fragment slot="header">
        <AppBar>
            <svelte:fragment slot="lead">
                <span class="text-xl text-surface-300">Projects</span>
            </svelte:fragment>
            <svelte:fragment slot="trail">
                <button class="btn variant-ringed-primary" on:click={() => modalStore.trigger(modalSetting)}>
                    New Project
                </button>
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
    
    <div class="w-full h-full grid grid-cols-3 md:grid-cols-5 gap-4 p-4">
        {#each JSON.parse(data.projects) as project}
            <a class="card card-hover max-h-48 flex flex-col" href="/app/project/{project.project_id}">
                <header class="card-header mb-2">{project.title}</header>
                <hr class="opacity-50 w-[90%] self-center"/>
                <section class="p-4">{project.description}</section>
                <footer class="z-10 card-footer ml-auto mt-auto">
                    <button class="btn btn-icon variant-ghost" on:click|preventDefault={() => deleteProject(project.project_id, project.title)}>
                        <svg class="w-4 h-auto fill-current" width="141" height="161" viewBox="0 0 141 161" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60.2331 0C49.1903 0 40.1554 9.03496 40.1554 20.0777H20.0777C9.03496 20.0777 0 29.1127 0 40.1554H140.544C140.544 29.1127 131.509 20.0777 120.466 20.0777H100.388C100.388 9.03496 91.3535 0 80.3108 0H60.2331ZM20.0777 60.2331V156.807C20.0777 159.015 21.6839 160.622 23.8925 160.622H116.852C119.061 160.622 120.667 159.015 120.667 156.807V60.2331H100.589V130.505C100.589 136.127 96.1721 140.544 90.5504 140.544C84.9286 140.544 80.5115 136.127 80.5115 130.505V60.2331H60.4339V130.505C60.4339 136.127 56.0168 140.544 50.395 140.544C44.7733 140.544 40.3562 136.127 40.3562 130.505V60.2331H20.2785H20.0777Z"/>
                        </svg>
                    </button>
                </footer>
            </a>
        {/each}
    </div>
</AppShell>