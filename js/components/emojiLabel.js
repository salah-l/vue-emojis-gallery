export default {
  template: `
      <input class="bg-transparent border rounded border-gray-400 py-1 px-2 text-[10px] lg:w-[200px] w-full h-[24.6px]" type='text' v-model="selectedEmoji" disabled/>
  `,

  props: {
    "selected-emoji": {
      type: String,
      default: "",
    },
  },
};
