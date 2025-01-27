import type { CollectionConfig } from 'payload';

export const Author: CollectionConfig = {
  slug: 'author', 
  admin: {
    useAsTitle: 'name', // Updated to use 'name' as the title
  },
  auth: true, // Enables authentication for this collection
  fields: [
    {
      name: 'id',
      type: 'number', // Field type corrected
      required: true, // Ensure 'id' is required if necessary
    },
    {
      name: 'name',
      type: 'text', // 'text' is the correct field type for strings
      required: true, // Ensure 'name' is required if necessary
    },
    {
      name: 'username',
      type: 'text',
      required: true,
      unique: true, // Ensure 'username' is unique
    },
    {
      name: 'image',
      type: 'upload', // Use 'upload' for image fields
      relationTo: 'media', // Relates to the 'media' collection (ensure you have it configured)
    },
    {
      name: 'bio',
      type: 'textarea', // 'textarea' is better for longer text
    },
  ],
};
