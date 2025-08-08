import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'primaryCtaText',
      title: 'Primary CTA Text',
      type: 'string',
    }),
    defineField({
      name: 'primaryCtaHref',
      title: 'Primary CTA Href',
      type: 'string',
    }),
    defineField({
      name: 'secondaryCtaText',
      title: 'Secondary CTA Text',
      type: 'string',
    }),
    defineField({
      name: 'secondaryCtaHref',
      title: 'Secondary CTA Href',
      type: 'string',
    }),
    defineField({
      name: 'backgroundSettings',
      title: 'Background Settings',
      type: 'object',
      fields: [
        defineField({name: 'enableParticles', title: 'Enable Particles', type: 'boolean'}),
        defineField({name: 'particleColor', title: 'Particle Color', type: 'string'}),
        defineField({name: 'gradientOverlay', title: 'Gradient Overlay', type: 'boolean'}),
      ],
    }),
  ],
})


