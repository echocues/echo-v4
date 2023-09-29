<script lang="ts">
    import type {ActionData} from './$types';
    
    export let form: ActionData;
</script>

<div class="h-full w-full">
    <form method="post" class="w-1/2 flex flex-col">
        <h2 class="h2 w-auto">Login</h2>

        <div class="flex flex-col gap-1 w-[50%]">
            <input class="input" type="text" placeholder="Username" name="username"/>
            <input class="input" type="password" placeholder="Password" name="password"/>
        </div>

        <button class="btn variant-filled-primary w-[25%]">Login</button>
    </form>
    <slot/>
</div>