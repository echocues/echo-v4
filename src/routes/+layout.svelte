<script lang="ts">
    import '../app.postcss';
    import {AppShell, AppBar} from '@skeletonlabs/skeleton';
    
    // Floating UI for Popups
    import {computePosition, autoUpdate, flip, shift, offset, arrow} from '@floating-ui/dom';
    import {storePopup} from '@skeletonlabs/skeleton';

    storePopup.set({computePosition, autoUpdate, flip, shift, offset, arrow});
</script>

<AppShell>
    <svelte:fragment slot="header">
        <AppBar>
            <svelte:fragment slot="lead">
                <strong class="text-xl uppercase">Echo</strong>
            </svelte:fragment>
        </AppBar>
    </svelte:fragment>
    <slot/>
</AppShell>
