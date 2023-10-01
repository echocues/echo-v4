<script lang="ts">
    import type {ActionData} from "./$types";
    export let form: ActionData;
</script>

<h2 class="h2 w-auto">Register</h2>
{#if form?.fail}
    <span class="text-error-500 mt-[-16px]">Username already exists</span>
{/if}

<div class="flex flex-col gap-1">
    <input class="input" type="text" placeholder="Username" name="username"/>
    {#if form?.missingUsername}
        <span class="text-error-500">Username empty</span>
    {/if}
    
    <input class="input" type="password" placeholder="Password" name="password"/>
    {#if form?.missingPassword}
        <span class="text-error-500">Password empty</span>
    {/if}
    
    <a class="anchor w-fit" href="/auth/login">Login with an Existing Account</a>
</div>

<button class="btn variant-filled-primary w-1/2 mt-24">Register</button>
