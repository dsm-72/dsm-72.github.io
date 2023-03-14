import type {GlobResults} from '$lib/types'
export const LoadGlobsOneByOne = async (globs: GlobResults) => {
    let results = []
    for (const path in globs) {
        let data = await globs[path]()
        results.push(data)
    }
    return results
}

export const LoadGlobsAllAtOnces = async (globs: GlobResults) => {
    let results = await Promise.all(Object.values(globs).map(fn=>fn()))
    return results
}


import { goto } from '$app/navigation';
import { browser } from '$app/environment';

export const openUrlInNewTab = (url:string) => {
    if (
        browser &&
        (window !== null) && 
        (typeof window !== "undefined")
    ) {                                        
        const res = window.open(url, '_blank')
        res?.focus()            
    } else {
        goto(url)
    }
}

export const LabTwitterLink = 'https://twitter.com/KrishnaswamyLab'
export const LabGitHubLink = 'https://github.com/KrishnaswamyLab'

export const toTwitter = () => openUrlInNewTab(LabTwitterLink)
export const toGitHub = () => openUrlInNewTab(LabGitHubLink)



