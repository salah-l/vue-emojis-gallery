export default {
  template: `
      <input class="bg-transparent border rounded border-gray-400 py-1 px-2 text-[10px] w-[20%]" type='text' v-model="selectedEmoji" disabled/>
  `,

  props: {
    "selected-emoji": {
      type: String,
      default: "",
    },
  },
};
