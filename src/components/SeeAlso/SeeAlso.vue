<template>
  <div>
    <cube-scroll
      ref="scroll"
      :data="resumeList"
      direction="horizontal"
      class="horizontal-scroll-list-wrap"
    >
      <ul class="list-wrapper">
        <li v-for="resume in resumeList" :key="resume.id" class="list-item">
          <router-link :to="{ name: 'ResumeDetail', params: { id: resume.id }}">
            <div style="text-align:center;">
              <router-link :to="{ name: 'ResumeDetail', params: { id: resume.id }}">
                <p class="see-also-title">{{resume.name}}</p>
                <b-badge
                  :variant="info"
                  pill
                  :id="resume.id"
                >{{resume.skills[0].name}}</b-badge>
              </router-link>
            </div>
          </router-link>
        </li>
      </ul>
    </cube-scroll>
  </div>
</template>

<script>
import { fetchResumeList } from "@/helpers/data";
export default {
  name: "SeeAlso",
  data() {
    return {
      resumes: []
    };
  },
  methods: {
    scrollIntoView(evt) {
      evt.preventDefault();
      const href = evt.target.getAttribute("href");
      const el = href ? document.querySelector(href) : null;
      if (el) {
        this.$refs.content.scrollTop = el.offsetTop;
      }
    },
  },
  props: ["resumeList"],

  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
.horizontal-scroll-list-wrap {
  .cube-scroll-content {
    display: inline-block;
  }

  .list-wrapper {
    padding: 0 0px;
    white-space: nowrap;
    margin-bottom: 0.1rem;
  }

  .list-item {
    display: inline-block;
    padding: 8px;
    width: 9rem;
    background-color: white;
    border: solid 1px #7d7c7c;
    border-radius: 4px;
  }

  .see-also-title {
    margin-bottom: 8px;
    color: black;
  }
}
</style>
