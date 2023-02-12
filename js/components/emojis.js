export default {
  template: `
  <div class="relative overflow-visible ">
    <div class="bg-gray-800 border border-gray-400 rounded p-4
    z-0 absolute origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
    hover:cursor-default hover:scale-125 hover:border-2 hover:text-6xl hover:z-10
    parent-hover:overflow-visible
    "
    :class="{
      'hover:border-blue-600': (color === 'blue'),
      'hover:border-green-600': (color === 'green'),
      'hover:border-yellow-600': (color === 'yellow'),
      'hover:border-purple-600': (color === 'purple'),
      'hover:border-white-600': (color === 'white'),
      'hover:border-red-600': (color === 'red'),
      'hover:border-orange-600': (color === 'orange'),
      'hover:border-pink-600': (color === 'pink'),
    }"
    @mouseover="changeColor"
    >
      {{emoji.emoji}} 
    </div>
  </div>
  `,

  props: {
    emoji: Object,
  },

  data() {
    return {
      color: "green",
    };
  },
  methods: {
    changeColor() {
      let colorArray = [
        "blue",
        "green",
        "yellow",
        "purple",
        "white",
        "red",
        "orange",
        "pink",
      ];
      this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    },
  },
};
