import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'cocktail',
  title: 'Cocktail',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'heroImage', type: 'image' }),
    defineField({ name: 'gallery', type: 'array', of: [{ type: 'image' }] }),
    defineField({ name: 'summary', type: 'text' }),
    defineField({ name: 'tasteProfile', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'strength', type: 'string', options: { list: ['low', 'medium', 'high'] } }),
    defineField({ name: 'abv', type: 'number' }),
    defineField({ name: 'serveTemp', type: 'string' }),
    defineField({ name: 'glassType', type: 'string' }),
    defineField({ name: 'allergens', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'ingredients', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'howToServe', type: 'text' }),
    defineField({ name: 'isAlcoholFree', type: 'boolean' }),
    defineField({ name: 'shopifyProductHandle', type: 'string' })
  ]
});
