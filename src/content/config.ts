import { z, defineCollection, reference } from 'astro:content';

const tagCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        color: z.string()
    })
})

const projectCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
            order: z.string()
        }),
        demo: z.string(),
        github: z.string(),
        tags: z.array(reference('tags'))
    })
})

export const collections = { projects: projectCollection, tags:tagCollection };