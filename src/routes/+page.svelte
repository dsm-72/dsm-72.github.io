<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    $: collaborators = data?.collaborators
    $: datasets = data?.datasets
</script>

<div class="bg-slate-300">
{#await collaborators}
    waiting
{:then results} 
{#each results as collaborator, i (i)}
    <div>
        {collaborator}        
    </div>
{/each}
{/await}
</div>

<!-- <div class="prose">
{#each data?.collaborators as collaborator}
<h1>    
    {collaborator.lab}
</h1>
{/each}
</div> -->