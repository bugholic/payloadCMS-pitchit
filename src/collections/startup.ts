import { CollectionConfig } from 'payload'

export const Startup: CollectionConfig = {
  slug: 'startup',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'category',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'text', // or "upload" if storing actual files
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'author',
      required: true,
    },
    {
      name: 'pitch',
      type: 'textarea',
      required: true,
    },
  ],
}
