import { defineArrayMember, defineType } from 'sanity'
const HighlightDecorator = (props) => (
  <span style={{ backgroundColor: 'yellow' }}>{props.children}</span>
)
export default defineType({
  title: 'Custom Block Content',
  name: 'customBlockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Underline', value: 'underline' },
          {
            title: 'Highlight',
            value: 'highlight',
            component: HighlightDecorator,
          },
        ],
      },
    }),
  ],
})