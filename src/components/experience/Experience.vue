<template>
    <div class="experience">
        <div>
            <h5>Experiences</h5>
            <div v-for="(experience, $key) in resume.work" :key="$key">
                <div class="experience-block">
                    <div>{{ experience.position }}</div>
                    <div>{{ experience.company[0] }}</div>
                    <div class="date">
                        <span>{{ experience.startDate | moment("MMMM YYYY") }}</span>
                        <span>-</span>
                        <span>{{ experience.endDate | moment("MMMM YYYY") }}</span>
                    </div>
                    <div class="summary">
                        <text-highlight :queries="queries">{{ experience.summary }}</text-highlight>
                    </div>
                </div>
                <div class="gap"></div>
            </div>
        </div>
    </div>
</template>

<script>
import TextHighlight from "vue-text-highlight";
import store from "@/helpers/store";
export default {
    name: "Experience",
    props: ["resume"],
    components: {
        TextHighlight
    },
    data() {
        return {
            queries: []
        };
    },
    methods: {
        fetchHighlights() {
            let highlights = store.fetch("cachedHighlights");
            highlights.forEach(highlight => {
                this.queries.push(highlight.content);
            });
        }
    },
    mounted() {
        this.$root.eventHub.$on('synchighlights',(updatedHighlights)=> {
            this.queries.length = 0;
            updatedHighlights.forEach(highlight => {
                this.queries.push(highlight.content);
            })
        });
        this.fetchHighlights();
    }
};
</script>

<style scoped>
.experience {
    padding: 1rem 0 0rem 0;
}

.experience-block {
    margin: 0rem 0 0rem 0rem;
    padding: 1rem 0 1rem 0;
}

.date {
    margin-top: 0.3rem;
    font-size: 0.8rem;
    color: gray;
}

.gap {
    height: 2px;
    width: 100%;
    background-color: #f4f4f4;
}

.summary {
    padding-top: 0.9em;
    font-size: 0.9rem;
    text-align: unset;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
}
</style>
