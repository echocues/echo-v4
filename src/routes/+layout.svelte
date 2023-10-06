<script lang="ts">
    import '../app.postcss';

    // Floating UI for Popups
    import {computePosition, autoUpdate, flip, shift, offset, arrow} from '@floating-ui/dom';
    import {Modal, storePopup, Toast} from '@skeletonlabs/skeleton';
    import {initializeStores} from '@skeletonlabs/skeleton';

    storePopup.set({computePosition, autoUpdate, flip, shift, offset, arrow});
    
    initializeStores();
</script>

<Toast/>
<Modal/>
<slot/>