<template>
  <div class="text-font">
    <div>
      <img
        src="./assets/images/bg-header-desktop.svg"
        alt="Background Header"
        class="h-auto w-full bg-dark_cyan hidden desktop:flex"
      />
      <img
        src="./assets/images/bg-header-mobile.svg"
        alt="Background Header"
        class="h-auto w-full bg-dark_cyan flex desktop:hidden"
      />
    </div>
    <div class="p-7 py-16 desktop:p-20 bg-light_grayish_cyan_bg">
      <div class="flex flex-col gap-y-10 desktop:gap-y-20">
        <div
          v-for="job in jobs"
          :key="job"
          class="border-dark_cyan border-l-8 rounded-md shadow-lg px-5 relative"
        >
          <div class="relative bottom-8">
            <img :src="job.logo" :alt="job.company" class="w-1/4 h-1/4" />
          </div>
          <div class="flex flex-col gap-y-3 relative bottom-5">
            <div class="flex justify-start items-center gap-3">
              <p class="text-dark_cyan pr-3 font-bold">{{ job.company }}</p>
              <p
                v-if="job.new == true"
                class="bg-dark_cyan uppercase text-light_grayish_cyan_bg p-1 px-2 rounded-full font-bold"
              >new!</p>
              <p v-if="job.new == false" class="hidden"></p>
              <p
                v-if="job.featured == true"
                class="bg-very_dark_grayish_cyan uppercase text-light_grayish_cyan_bg p-1 px-2 rounded-full font-bold"
              >featured</p>
              <p v-if="job.featured == false" class="hidden"></p>
            </div>
            <div>
              <h1 class="font-bold">{{ job.position }}</h1>
            </div>
            <div
              class="flex justify-start items-center gap-x-3 text-dark_grayish_cyan border-dark_grayish_cyan border-b pb-3"
            >
              <p>{{ job.postedAt }}</p>
              <p>{{ job.contract }}</p>
              <p>{{ job.location }}</p>
            </div>
            <div class="flex flex-wrap gap-5 items-center pt-2">
              <button
                class="text-dark_cyan bg-dark_cyan bg-opacity-20 rounded-sm font-bold p-1 px-2"
              >{{ job.role }}</button>
              <button
                class="text-dark_cyan bg-dark_cyan bg-opacity-20 rounded-sm font-bold font-bold p-1 px-2"
              >{{ job.level }}</button>
              <button
                v-for="lang in job.languages"
                :key="lang"
                class="text-dark_cyan bg-dark_cyan bg-opacity-20 rounded-sm font-bold font-bold p-1 px-2"
              >{{ lang }}</button>
              <button
                v-for="tool in job.tools"
                :key="tool"
                class="text-dark_cyan bg-dark_cyan bg-opacity-20 rounded-sm font-bold font-bold p-1 px-2"
              >{{ tool }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jobs from "./assets/json/data.json";

export default {
  name: "App",
  computed: {
    jobs() {
      return jobs.map(job => {
        return job;
      });
    }
  },
  watch: {
    languages() {
      return jobs.map(job => {
        job.languages.forEach(lang => {
          console.log(lang);
          return lang;
        });
      });
    }
  },
  methods: {
    filterJobs(job) {
      return jobs.filter(jb => {
        jb == job;
      });
    }
  }
};
</script>
