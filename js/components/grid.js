import emojis from "./emojis.js";
import tags from "./tags.js";
import emojisData from "../../db/emoji.js";

export default {
  components: { emojis, tags },
  template: `
  <section class="space-y-6 w-4/6">
    <div class="flex justify-center mt-12 ">
      <h1 class="text-2xl">💫⭐ Emojis Gallery ⭐💫</h1>
    </div>
    <div class="flex justify-center mt-12 ">
      <tags :tags="getTags" @tagClicked="filterGrid"/>
    </div>
    <div class="border rounded border-gray-400 flex gap-20 items-start px-24 py-16 flex-wrap overflow-y-scroll parent h-[70vh]">
      <emojis v-for="emoji in emojis" :emoji="emoji" :key="emoji.description"/>
    </div>
  </section>
  `,
  data() {
    return {
      allEmojis: emojisData.emojis,
      emojis: emojisData.emojis,
    };
  },
  computed: {
    getTags() {
      return [
        "All",
        ...[...this.allEmojis]
          .map((obj) => obj.category)
          .filter((name, index, self) => self.indexOf(name) === index),
      ];
    },
  },
  methods: {
    filterGrid(selectedTags) {
      console.log(selectedTags);
      if (selectedTags[0] === "All") {
        this.emojis = this.allEmojis;
      } else {
        this.emojis = emojisData.emojis.filter((emoji) =>
          selectedTags.includes(emoji.category)
        );
      }
    },
  },
};
