export default {
  template: `
  <div class="relative m-8">
    <div class="border border-gray-400 rounded p-4 
    z-0 absolute origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
    hover:cursor-default hover:scale-125 hover:border-2 hover:text-2xl hover:z-10 hover:border-purple-600">
      {{emoji.emoji}} 
    </div>
  </div>
  `,

  props: {
    emoji: Object,
  },
};
