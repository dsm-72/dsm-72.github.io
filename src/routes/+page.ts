/** @type {import('./$types').PageLoad} */
import {LoadGlobsAllAtOnces} from '$lib/utils'
import { base } from '$app/paths';

// const collaborator_yaml = import.meta.glob('/src/yaml/collaborators.yml', {import: 'default'})
// const collaborator_yamls = import.meta.glob('/src/yaml/collaborators/*.yml', {import: 'default'})

// const collaborators = (await LoadGlobsAllAtOnces(collaborator_yamls) as Collaborators)

// import collaborators from `${base}/src/yaml/collaborators.yml`
// import collaborators from '/src/yaml/collaborators.yml'


export async function load({ fetch }) {
    // const collaborators = await fetch(`${base}/src/yaml/collaborators.yml`).then((r)=>r.json())
    return {
        collaborators: null
    };
  }