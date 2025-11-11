import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'question', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'answer', type: 'text', validation: (rule) => rule.required() }),
    defineField({ name: 'category', type: 'string' })
  ]
});
