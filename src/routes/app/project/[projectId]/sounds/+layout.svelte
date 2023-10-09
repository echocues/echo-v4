<script lang="ts">
    import {AppRail, AppRailAnchor, AppRailTile} from "@skeletonlabs/skeleton";
    import type {LayoutData} from "./$types";
    import {page} from "$app/stores";

    export let data: LayoutData;
    const url = `${$page.url.pathname}`;
</script>

<div class="w-full h-screen flex">
    <AppRail width="w-[12%]" height="h-full" aspectRatio="aspect-[9/2]">

        <svelte:fragment slot="lead">
            <button class="btn w-full my-4 rounded-none hover:text-primary-500">
                Create Cue
            </button>
            <hr class="my-[2.75px] opacity-0">
        </svelte:fragment>

        {#each JSON.parse(data.soundCues) as cue}
            <AppRailAnchor href={`/app/project/${$page.params.projectId}/sounds/` + cue.identifier}
                           selected={$page.params?.soundCueId === cue.identifier}>
                <span class="h6">{cue.displayName}</span>
            </AppRailAnchor>
        {/each}
    </AppRail>
    
    <div class="ml-1 w-full">
        <slot/>
    </div>
</div>
