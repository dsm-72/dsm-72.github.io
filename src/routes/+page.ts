/** @type {import('./$types').PageLoad} */
import {LoadGlobsAllAtOnces} from '$lib/utils'


// const collaborator_yaml = import.meta.glob('/src/yaml/collaborators.yml', {import: 'default'})
// const collaborator_yamls = import.meta.glob('/src/yaml/collaborators/*.yml', {import: 'default'})

// const collaborators = (await LoadGlobsAllAtOnces(collaborator_yamls) as Collaborators)

import collaborators from '/src/yaml/collaborators.yml'


export async function load({ }) {
    return {
        collaborators
    };
  }