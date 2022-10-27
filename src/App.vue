<template>
  <div class="text-font">
    <header>
      <img src="./assets/images/bg-header-desktop.svg" alt="Background Header" class="h-auto w-full bg-dark_cyan hidden desktop:flex"/>
      <img src="./assets/images/bg-header-mobile.svg" alt="Background Header" class="h-auto w-full bg-dark_cyan flex desktop:hidden"/>
    </header>
    <section>
      <div id="filter" v-show="filterComponent" class="flex justify-between items-center relative bottom-10 mx-5 desktop:mx-20 bg-white rounded-md shadow-lg p-5">
        <div class="flex flex-wrap desktop:flex-nowrap desktop:justify-center items-center gap-x-3 gap-y-3 desktop:gap-y-0">
          <div v-for="tag in tags" :key="tag"
          class="flex items-center rounded-sm text-dark_cyan bg-light_grayish_cyan_bg font-bold">
            <span class="p-1.5 px-2">{{ tag }}</span>
            <button @click="deleteTag(tag)" class="bg-dark_cyan p-2.5 rounded-r-sm">
              <img src="./assets/images/icon-remove.svg" alt="Remove" />
            </button>
          </div>
        </div>
        <div class>
          <button @click="deleteAllTags()" class=" text-dark_grayish_cyan hover:underline hover:underline-offset-2 hover:text-dark_cyan font-bold" >Clear</button>
        </div>
      </div>
      <div id="jobList" class="flex flex-col gap-y-10 desktop:gap-y-8 p-7 py-16 desktop:py-5 desktop:px-20">
        <div v-for="job in jobs" :key="job" :class="[job.featured ? 'border-dark_cyan border-l-8 desktop:border-l-4' : '']" class="bg-white rounded-md shadow-lg px-5 pb-5 desktop:p-5 desktop:px-8 relative desktop:static desktop:flex desktop:items-center">
          <div class="relative desktop:static bottom-6 desktop:bottom-0 desktop:w-1/12">
            <img :src="job.logo" :alt="job.company" class="w-1/6 h-1/6 desktop:w-20 desktop:h-20" />
          </div>
          <div class="desktop:flex desktop:justify-between desktop:w-11/12">
            <div class="flex flex-col gap-y-3 desktop:gap-y-1 relative desktop:static bottom-5 desktop:bottom-0">
              <div class="flex justify-start items-center gap-3">
                <h1 class="text-dark_cyan pr-3 desktop:pr-0 font-bold">{{ job.company }}</h1>
                <p v-if="job.new == true" class="bg-dark_cyan uppercase text-light_grayish_cyan_bg py-0.5 px-2.5 rounded-full font-bold desktop:font-regular">new!</p>
                <p v-if="job.new == false" class="hidden"></p>
                <p v-if="job.featured == true" class="bg-very_dark_grayish_cyan uppercase text-light_grayish_cyan_bg py-0.5 px-2.5 rounded-full font-bold desktop:font-regular">featured</p>
                <p v-if="job.featured == false" class="hidden"></p>
              </div>
              <div>
                <h1 class="font-bold">{{ job.position }}</h1>
              </div>
              <div class="flex justify-start items-center gap-x-3 text-dark_grayish_cyan border-dark_grayish_cyan border-b desktop:border-none pb-3 desktop:pb-0">
                <p>{{ job.postedAt }}</p>
                <p>{{ job.contract }}</p>
                <p>{{ job.location }}</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-5 items-center">
              <button @click="jobFilterRole(job.role)" class="text-dark_cyan bg-light_grayish_cyan_bg rounded-sm font-bold p-1 px-2">{{ job.role }}</button>
              <button @click="jobFilterLevel(job.level)" class="text-dark_cyan bg-light_grayish_cyan_bg rounded-sm font-bold font-bold p-1 px-2">{{ job.level }}</button>
              <button @click="jobFilterLanguages(lang)" v-for="lang in job.languages" :key="lang" class="text-dark_cyan bg-light_grayish_cyan_bg rounded-sm font-bold font-bold p-1 px-2">{{ lang }}</button>
              <button @click="jobFilterTools(tool)" v-for="tool in job.tools" :key="tool" class="text-dark_cyan bg-light_grayish_cyan_bg rounded-sm font-bold font-bold p-1 px-2">{{ tool }}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import jobs from "./assets/json/data.json";

export default {
  name: "App",
  data() {
    return {
      jobs: [],
      tags: [],
      tag: "",
      filterComponent: false
    };
  },

  mounted() {
    this.jobs = jobs
  },

  methods: {
    jobFilterRole(tag){
      if(this.tags.includes(tag)){
        alert(`Error! The tag ${tag} is already in the filter`);
      }else{
        this.tags.push(tag);
        this.filterComponent = true
        this.tag = tag;
        this.jobs = this.jobs.filter((job) => {
          return job.role.includes(tag);
        });
      }
    },

    jobFilterLevel(tag){
      if(this.tags.includes(tag)){
        alert(`Error! The tag ${tag} is already in the filter`);
      }else{
        this.tags.push(tag);
        this.filterComponent = true
        this.tag = tag;
        this.jobs = this.jobs.filter((job) => {
          return job.level.includes(tag);
        });
      }
    },

    jobFilterLanguages(tag){
      if(this.tags.includes(tag)){
        alert(`Error! The tag ${tag} is already in the filter`);
      }else{
        this.tags.push(tag);
        this.filterComponent = true
        this.tag = tag;
        this.jobs = this.jobs.filter((job) => {
          return job.languages.includes(tag);
        });
      }
    }, 

    jobFilterTools(tag){
      if(this.tags.includes(tag)){
        alert(`Error! The tag ${tag} is already in the filter`);
      }else{
        this.tags.push(tag);
        this.filterComponent = true
        this.tag = tag;
        this.jobs = this.jobs.filter((job) => {
          return job.tools.includes(tag);
        });
      }
    },

    deleteAllTags() {
      this.jobs = jobs;
      this.tags = [];
      this.tag = "";
      this.filterComponent = false;
    },

    deleteTag(tag) {
      this.tags = this.tags.filter((data) => data != tag);
      this.jobs = jobs;
      this.tags.map((tag) => {
        this.jobs = this.jobs.filter((job) => {
            return job.role.includes(tag);
        });
      });
      if (this.tags.length == 0) {
        this.filterComponent = false;
      }
    },
  }
};
</script>
