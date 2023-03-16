/** @type {import('./$types').PageLoad} */
import {LoadGlobsAllAtOnces} from '$lib/utils'
import { base } from '$app/paths';
import yaml from 'js-yaml'
import fs from 'fs'
// const collaborator_yaml = import.meta.glob('/src/yaml/collaborators.yml', {import: 'default'})
// const collaborator_yamls = import.meta.glob('/src/yaml/collaborators/*.yml', {import: 'default'})

// const collaborators = (await LoadGlobsAllAtOnces(collaborator_yamls) as Collaborators)

// import collaborators from `${base}/src/yaml/collaborators.yml`
// import collaborators from '/src/yaml/collaborators.yml'


export async function load({ fetch }) {
    const collaborators = fetch(`${base}/yaml/collaborators.yml`)
        .then((response) =>  response.text())
        .then((text) => yaml.load(text))
    
    

    const datasets = fetch(`${base}/yaml/datasets.yml`)
        .then((response) =>  response.text())
        .then((text) => yaml.load(text))

    return {
        collaborators,
        datasets
    };
  }