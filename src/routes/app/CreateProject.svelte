<script lang="ts">
    import {getModalStore} from "@skeletonlabs/skeleton";

    const formData = {
        title: "",
        description: ""
    };
    
    const modalStore = getModalStore();
    
    function formSubmit() {
        if ($modalStore[0].response) 
            $modalStore[0].response(formData);
        
        modalStore.close();
    }
</script>

<div class="card p-4 w-modal shadow-xl space-y-4">
    <header class="text-2xl font-bold">Create Project</header>
    <form class="modal-form gap-2 flex flex-col">
        <label class="label">
            <span>Title</span>
            <input class="input" type="text" bind:value={formData.title} placeholder="Project Title...">
        </label>
        <label class="label">
            <span>Description</span>
            <textarea class="input" rows="4" bind:value={formData.description}/>
        </label>
    </form>
    <footer class="modal-footer">
        <button class="btn variant-filled-primary" on:click={formSubmit}>Create</button>
        <button class="btn variant-ghost-primary" on:click={modalStore.close}>Cancel</button>
    </footer>
    <slot/>
</div>