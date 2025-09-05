// src/content.config.ts
import { defineCollection, z } from 'astro:content'


const projects = defineCollection({
type: 'content',
schema: z.object({
title: z.string(),
description: z.string().max(200),
tech: z.array(z.string()).default([]),
repoUrl: z.string().url().optional(),
demoUrl: z.string().url().optional(),
featured: z.boolean().default(false),
createdAt: z.date(),
updatedAt: z.date().optional(),
cover: z.string().optional(),
})
})


const posts = defineCollection({
type: 'content',
schema: z.object({
title: z.string(),
excerpt: z.string().max(200),
publishedAt: z.date(),
updatedAt: z.date().optional(),
tags: z.array(z.string()).default([]),
})
})


export const collections = { projects, posts }