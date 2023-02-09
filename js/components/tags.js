export default{
    template:`
    <section class="w-full flex flex-wrap gap-3">
        <div class="w-auto rounded border border-gray-400 py-1 px-2 text-[10px]
        hover:cursor-pointer" v-for="tag in tags" :key="tag">
        {{tag}}
        </div>
    </section>
    `,

    props:{
        tags: Array
    }
}