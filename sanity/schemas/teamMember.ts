import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'role', type: 'string' }),
    defineField({ name: 'photo', type: 'image' }),
    defineField({ name: 'bio', type: 'text' })
  ]
});
