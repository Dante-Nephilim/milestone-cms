import type { CollectionConfig } from 'payload'

export const LearningSupport: CollectionConfig = {
  slug: 'learning-support',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
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
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
