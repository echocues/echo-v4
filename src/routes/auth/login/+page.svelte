<script lang="ts">
    import type {ActionData} from "./$types";

    export let form: ActionData;
</script>

<form method="post" class="flex flex-col col-span-1 justify-center items-center">
    <div class="flex flex-col justify-center w-2/5 h-full gap-4">
        <h2 class="h2 w-auto font-bold">Login</h2>
        
        {#if form?.fail}
            <span class="text-error-500 mt-[-16px]">Username or password incorrect</span>
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

            <a class="anchor w-fit" href="/auth/register">Register a New Account</a>
        </div>

        <button class="btn variant-filled-primary w-1/2 mt-24">Login</button>
    </div>
</form>