import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import MyButton from '../components/MyButtonClassComponent.vue'

export default {
  component: MyButton,
  title: 'MyButtonClassComponent'
}

export const withText = () => ({
  components: { MyButton: MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action('clicked') }
})

export const withJSX = () => ({
  render() {
    return <MyButton onClick={linkTo('Button', 'With Some Emoji')}>With JSX</MyButton>;
  }
})

export const withSomeEmoji = () => ({
  components: { MyButton: MyButton },
  template: '<my-button>😀 😎 👍 💯</my-button>'
})
