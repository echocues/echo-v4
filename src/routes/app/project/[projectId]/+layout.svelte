<script lang="ts">
    import {AppRail, AppRailAnchor, AppShell} from "@skeletonlabs/skeleton";
    import {page} from "$app/stores";
    
    const {projectId} = $page.params;
    const url = `/app/project/${projectId}/`;
</script>

<AppShell>
    <svelte:fragment slot="sidebarLeft">
        <AppRail>
            <svelte:fragment slot="lead">
                <div class="flex justify-center items-end mt-4">
                    <span class="text-primary-500 text-2xl">E</span>
                    <span class="m-0 text-2xl">cho</span>
                </div>
                <hr class="my-4 mx-2">
            </svelte:fragment>

            <AppRailAnchor href={url + "sounds"} selected={$page.url.pathname.startsWith(url + "sounds")}>
                <svelte:fragment slot="lead">
                    <svg class="fill-current w-1/3" width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.7143 0V35.4286H22.1429V0H17.7143ZM8.85714 4.42857V31H13.2857V4.42857H8.85714ZM26.5714 8.85714V26.5714H31V8.85714H26.5714ZM0 13.2857V22.1429H4.42857V13.2857H0Z"/>
                    </svg>
                </svelte:fragment>
                <span>Sounds</span>
            </AppRailAnchor>

            <AppRailAnchor href={url + "script"} selected={$page.url.pathname.startsWith(url + "script")}>
                <svelte:fragment slot="lead">
                    <svg class="fill-current w-1/3" width="29" height="34" viewBox="0 0 29 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0V33.1429H29V16.5714H12.4286V0H0ZM16.5714 0V12.4286H29L16.5714 0Z"/>
                    </svg>
                </svelte:fragment>
                <span>Script</span>
            </AppRailAnchor>

            <AppRailAnchor href={url + "scenes"} selected={$page.url.pathname.startsWith(url + "scenes")}>
                <svelte:fragment slot="lead">
                    <svg class="fill-current w-1/3" width="35" height="31" viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0V13.125H13.125V0H0ZM17.5 0V4.375H35V0H17.5ZM17.5 8.75V13.125H30.625V8.75H17.5ZM0 17.5V30.625H13.125V17.5H0ZM17.5 17.5V21.875H35V17.5H17.5ZM17.5 26.25V30.625H30.625V26.25H17.5Z"/>
                    </svg>
                </svelte:fragment>
                <span>Scenes</span>
            </AppRailAnchor>

            <AppRailAnchor href={url + "play"} selected={$page.url.pathname.startsWith(url + "play")}>
                <svelte:fragment slot="lead">
                    <svg class="fill-current w-1/3" width="35" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 0C7.6075 0 0 7.6075 0 17C0 26.3925 7.6075 34 17 34C26.3925 34 34 26.3925 34 17C34 7.6075 26.3925 0 17 0ZM12.75 8.5L25.5 17L12.75 25.5V8.5Z"/>
                    </svg>
                </svelte:fragment>
                <span>Play Mode</span>
            </AppRailAnchor>
        </AppRail>
    </svelte:fragment>
    <div class="ml-1 w-full h-full">
        <slot/>
    </div>
</AppShell>