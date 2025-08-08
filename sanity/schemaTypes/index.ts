import { type SchemaTypeDefinition } from 'sanity'
import siteSettings from './siteSettings'
import navLink from './objects/navLink'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, navLink],
}
