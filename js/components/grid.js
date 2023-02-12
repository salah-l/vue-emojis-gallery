import emojis from "./emojis.js";
import tags from "./tags.js";
import emojiLabel from "./emojiLabel.js";
import emojisData from "../../db/emoji.js";

export default {
  components: { emojis, tags, emojiLabel },
  template: `
  <section class="space-y-6 w-4/6">
    <div class="flex justify-center mt-12 ">
      <h1 class="text-2xl">💫⭐ Emojis Gallery ⭐💫</h1>
    </div>
    <div class="flex lg:flex-row flex-col lg:gap-0 gap-4 justify-between mt-12">
      <tags :tags="getTags" @tagClicked="filterGrid"/>
      <emoji-label :selected-emoji="selectedEmoji"/>
    </div>
    <div class="border rounded border-gray-400 flex gap-20 items-start justify-start sm:px-24 px-10 py-16 flex-wrap overflow-y-scroll h-[70vh]">
      <emojis v-for="emoji in emojis" :emoji="emoji" :key="emoji.description" @emojiHover="getEmojiName" @emojiLeave="getEmojiName"/>
    </div>
  </section>
  `,
  data() {
    return {
      allEmojis: emojisData.emojis,
      emojis: emojisData.emojis,
      selectedEmoji: "",
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
    getEmojiName(name, emoji) {
      this.selectedEmoji =
        emoji + " " + name.charAt(0).toUpperCase() + name.slice(1);
    },
  },
};
