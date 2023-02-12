import tag from "./tag.js";

export default {
  components: {
    tag,
  },
  template: `
    <section class="w-auto flex flex-wrap gap-3">
        <tag v-for="tag in tags" :key="tag" :tag="tag" @tagClick="unselectTheAllTag" @allTagClick="unselectAllTags" :isSelected="isSelected" />
    </section>
    `,

  props: {
    tags: Array,
  },

  data() {
    return {
      tags: this.tags,
      isSelected: false,
      selectedTags: ["All"],
    };
  },
  methods: {
    unselectTheAllTag(isTagOn, tag) {
      this.selectedTags = this.selectedTags.filter((e) => e != "All");

      if (isTagOn) {
        this.selectedTags.push(tag);
      } else {
        this.selectedTags = this.selectedTags.filter((e) => e != tag);
      }

      this.isSelected = true;
      if (!this.selectedTags.length) {
        this.isSelected = false;
        console.log("okkk");
        this.selectedTags = ["All"];
      }

      this.$emit("tagClicked", this.selectedTags);
    },

    unselectAllTags() {
      this.selectedTags = ["All"];
      this.isSelected = false;
      this.$emit("tagClicked", this.selectedTags);
    },
  },
};
