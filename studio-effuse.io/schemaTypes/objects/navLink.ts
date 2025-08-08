import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navLink',
  title: 'Navigation Link',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'href',
      title: 'Href',
      type: 'string',
      description: 'Relative path or anchor (e.g., /about, #contact)',
      validation: (Rule) => Rule.required(),
    }),
  ],
})


