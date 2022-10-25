<template>
  <div class="text-font">
    <header>
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
    </header>
    <section class="p-7 py-16 desktop:p-20 bg-light_grayish_cyan_bg">
      <div class="flex flex-col gap-y-10 desktop:gap-y-8">
        <div
          v-for="job in jobs"
          :key="job"
          class="border-dark_cyan bg-white border-l-8 desktop:border-l-4 rounded-md shadow-lg px-5 desktop:p-5 desktop:px-8 relative desktop:static desktop:flex desktop:items-center"
        >
          <div class="relative desktop:static bottom-8 desktop:bottom-0 w-1/12">
            <img :src="job.logo" :alt="job.company" class="w-1/4 h-1/4 desktop:w-20 desktop:h-20" />
          </div>
          <div class="desktop:flex desktop:justify-between desktop:w-11/12">
            <div
              class="flex flex-col gap-y-3 desktop:gap-y-1 relative desktop:static bottom-5 desktop:bottom-0"
            >
              <div class="flex justify-start items-center gap-3">
                <h1 class="text-dark_cyan pr-3 desktop:pr-0 font-bold">{{ job.company }}</h1>
                <p
                  v-if="job.new == true"
                  class="bg-dark_cyan uppercase text-light_grayish_cyan_bg py-1 px-2 desktop:py-0.5 rounded-full font-bold desktop:font-regular"
                >new!</p>
                <p v-if="job.new == false" class="hidden"></p>
                <p
                  v-if="job.featured == true"
                  class="bg-very_dark_grayish_cyan uppercase text-light_grayish_cyan_bg py-1 px-2 desktop:py-0.5 rounded-full font-bold desktop:font-regular"
                >featured</p>
                <p v-if="job.featured == false" class="hidden"></p>
              </div>
              <div>
                <h1 class="font-bold">{{ job.position }}</h1>
              </div>
              <div
                class="flex justify-start items-center gap-x-3 text-dark_grayish_cyan border-dark_grayish_cyan border-b desktop:border-none pb-3 desktop:pb-0"
              >
                <p>{{ job.postedAt }}</p>
                <p>{{ job.contract }}</p>
                <p>{{ job.location }}</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-5 items-center pt-2 desktop:pt-0">
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
    </section>
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
  methods: {
    filterJobs(job) {
      return jobs.filter(jb => {
        jb == job;
      });
    }
  }
};
</script>
