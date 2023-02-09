import emojis from "./emojis.js";
import emojisData from "../../db/emoji.js";

export default {
  components: { emojis },
  template: `
  <section class="space-y-6 w-4/6">
    <div class="flex justify-center mt-12">
      <h1 class="text-2xl">💫⭐ Emojis Gallery ⭐💫</h1>
    </div>
    <div class="flex gap-4 flex-wrap">
      <emojis v-for="emoji in emojis" :emoji="emoji" :key="emoji.description"/>
    </div>
  </section>
  `,
  data() {
    return {
      emojis: emojisData.emojis,
    };
  },
};
