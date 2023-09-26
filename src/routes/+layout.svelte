<script lang="ts">
    import '../app.postcss';

    // Floating UI for Popups
    import {computePosition, autoUpdate, flip, shift, offset, arrow} from '@floating-ui/dom';
    import {Modal, storePopup} from '@skeletonlabs/skeleton';
    import EchoBar from "$lib/EchoBar.svelte";
    import {initializeStores} from '@skeletonlabs/skeleton';

    storePopup.set({computePosition, autoUpdate, flip, shift, offset, arrow});
    initializeStores();
</script>

<Modal/>
<EchoBar>
    <slot/>
</EchoBar>