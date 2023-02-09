export default {
  template: `
  <div class="w-auto rounded border border-gray-400 py-1 px-2 text-[10px]
  hover:cursor-pointer" 
  :class="{
      'text-blue-600 border-blue-600': selected
  }"
 @click="toggle">
    {{tag}}
  </div>
  `,
  props: {
    tag: String,
    isSelected: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      selected: this.isSelected,
      currentTag: this.tag,
    };
  },
  methods: {
    toggle() {
      if (this.currentTag !== "All") {
        this.$emit("tagClick");
      } else {
        this.$emit("allTagClick");
      }
    },
  },
  created() {
    if (this.currentTag === "All") {
      this.selected = true;
    }
  },
};
