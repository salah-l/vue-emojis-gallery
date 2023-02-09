import tag from "./tag.js";

export default {
  components: {
    tag,
  },
  template: `
    <section class="w-full flex flex-wrap gap-3">
        <tag v-for="tag in tags" :key="tag" :tag="tag" @tagClick="unselectAllTag" @allTagClick="unselectAllTags" :isSelected="isSelected" />
    </section>
    `,

  props: {
    tags: Array,
  },

  data() {
    return {
      tags: this.tags,
      isSelected: false,
    };
  },
  methods: {
    unselectAllTag() {
      this.isSelected = true;
    },

    unselectAllTags() {
      this.isSelected = false;
    },
  },
};
