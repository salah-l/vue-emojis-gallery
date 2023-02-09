export default {
  template: `
    <div class="border border-gray-400 rounded p-4 
    hover:cursor-default hover:scale-125 hover:border-2 hover:text-2xl">
      {{emoji.emoji}}
    </div>
  `,

  props: {
    emoji: Object,
  },
};
