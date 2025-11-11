import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', type: 'text', validation: (rule) => rule.required() }),
    defineField({ name: 'author', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'role', type: 'string' }),
    defineField({ name: 'logo', type: 'image' })
  ]
});
