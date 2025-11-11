import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'defaultOgImage', type: 'image' }),
    defineField({ name: 'social', type: 'array', of: [{ type: 'url' }] }),
    defineField({ name: 'locales', type: 'array', of: [{ type: 'string' }] })
  ]
});
