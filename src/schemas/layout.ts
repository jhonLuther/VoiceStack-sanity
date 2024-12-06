import { defineField, defineType } from 'sanity'


function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
      if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }


export default defineType({
    name: 'layout',
    title: 'Layout',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Layout Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: (Rule) => Rule.required(),
            options: {
                source: 'name',
                maxLength: 96,
                slugify: input => camelize(input)

            },
        })
    ]
})