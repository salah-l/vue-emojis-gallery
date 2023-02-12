export default {
  template: `
  <div class="w-auto rounded border border-gray-400 py-1 px-2 text-[10px]
  hover:cursor-pointer" 
  :class="{
      'text-blue-600 border-blue-600': selected
  }"
 @click="toggle(tag)">
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
      selected: false,
      currentTag: this.tag,
    };
  },
  methods: {
    toggle(tag) {
      let isTagOn = true;
      if (tag !== "All") {
        if (this.selected == true) {
          isTagOn = false;
        }
        this.selected = !this.selected;
        this.$emit("tagClick", isTagOn, tag);
      } else {
        this.$emit("allTagClick");
      }
    },
  },
  mounted() {
    if (this.currentTag === "All") {
      this.selected = true;
    }
  },

  updated() {
    if (this.isSelected == true) {
      if (this.currentTag === "All") {
        this.selected = false;
      }
    } else {
      this.selected = false;
      if (this.currentTag === "All") {
        this.selected = true;
      }
    }
  },
};
