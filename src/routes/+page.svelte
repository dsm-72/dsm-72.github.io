<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
    $: collaborators = data?.collaborators
    $: datasets = data?.datasets
</script>

<!-- <div class="bg-slate-100 flex place-content-center">
    <div class="prose">
        {#await collaborators}
            waiting
        {:then results} 
        {#each results as {image, name:{first, last}, lab}, i (i)}
        <figure class="
            md:flex bg-slate-100 rounded-xl p-8 
            md:p-0 dark:bg-slate-800 
            "
        >
            <img class="
                w-24 h-24 md:w-48 md:h-auto md:rounded-none 
                rounded-full mx-auto 
                " 
                src="https://unsplash.it/400/600" 
                alt="{image}" 
            >
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p class="text-lg font-medium">
                  ...
                </p>
              </blockquote>
              <figcaption class="font-medium">
                <div class="text-sky-500 dark:text-sky-400">
                  {first} {last}
                </div>
                <div class="text-slate-700 dark:text-slate-500">
                  {lab}
                </div>
              </figcaption>
            </div>
          </figure>
        {/each}
        {/await}
    </div>
</div> -->


<!-- <div class="prose">
{#each data?.collaborators as collaborator}
<h1>    
    {collaborator.lab}
</h1>
{/each}
</div> -->