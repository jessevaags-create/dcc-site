import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'metrics', type: 'array', of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'value', type: 'string' }] }] }),
    defineField({ name: 'body', type: 'text' }),
    defineField({ name: 'logo', type: 'image' }),
    defineField({ name: 'hero', type: 'image' })
  ]
});
