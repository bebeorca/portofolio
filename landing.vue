<template>
  <div
    class="h-screen text-7xl font-bold lg:flex flex-wrap lg:overflow-hidden grid justify-center items-center lg:justify-evenly">
    <div class="lg:p-0 p-5">
      <div class="md:text-9xl text-6xl grid lg:gap-4">
        <h1 class="" v-motion-slide-visible-once-bottom :initial="{ opacity: 0, y: 100 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 1000, opacity: { delay: 1000, duration: 1000 } } }">
          Dimas
        </h1>
        <h1 class="" v-motion-slide-visible-once-bottom :initial="{ opacity: 0, y: 100 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 1200, opacity: { delay: 1200, duration: 1000 } } }">
          Deo
        </h1>
        <h1 class="" v-motion-slide-visible-once-bottom :initial="{ opacity: 0, y: 100 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 1250, opacity: { delay: 1250, duration: 1000 } } }">
          Rezkidyo
        </h1>
      </div>

      <p v-motion-slide-visible-once-left :initial="{ opacity: 0, x: -100 }"
        :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 2500, opacity: { delay: 2500, duration: 1800 } } }"
        class="md:text-2xl text-lg lg:pt-6">Software Engineer</p>

    </div>

    <div class="flex justify-center" v-motion-slide-visible-once-left :initial="{ opacity: 0, x: -100 }"
      :visibleOnce="{ opacity: 1, x: 0, transition: { delay: 600 } }">
      <div class="absolute left-15 top-16 rounded-full md:w-80 w-40 h-60 md:h-96 bg-[#7776B3]"></div>
      <div class="absolute left-20 top-24 rounded-full md:w-96 w-60 md:h-80 h-40 bg-[#E8C5E5]"></div>
      <img src="/images/profile2.png" alt="" class="md:scale-150 scale-90">
    </div>
  </div>

  <div class="lg:px-14 px-4 pb-56 z-50 disable-cursoronprj">
    <h1 class="lg:text-9xl text-4xl lg:pt-0 pt-60 font-bold z-50 pb-8">
      Projects
    </h1>
    <div class="lg:flex z-50 text-white ">
      <div
        class="max-w-full lg:w-screen bg-[#5A639C] p-8 z-0 group text-center flex flex-col items-center overflow-hidden">
        <div class="pb-10 ">
          <h1 class="text-4xl font-bold">
            Quiz App
          </h1>
          <span>Mobile App</span>
        </div>
        <img class="w-56 shadow-md transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
          src="/images/quiz.jpeg" alt="">
        <h1 class="pt-10 lg:px-16 space-y-1">
          Built with <span class="highlight-animation px-1">Flutter</span>, this app features a custom-developed backend
          API using <span class="highlight-animation px-1">Golang</span> and utilizes a <span
            class="highlight-animation px-1">MySQL</span> database for data storage.
        </h1>
      </div>
      <div
        class="max-w-full lg:w-screen bg-[#134B70] p-8 z-0 group text-center flex flex-col items-center overflow-hidden">
        <div class="pb-10 ">
          <h1 class="text-4xl font-bold">
            Laundry App
          </h1>
          <span>Mobile App</span>
        </div>
        <img class="w-56 shadow-md transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
          src="/images/laundry.png" alt="">
        <h1 class="pt-10 lg:px-16 space-y-1">
          Built with <span class="highlight-animation px-1">Flutter</span>, this app features a custom-developed backend
          API using <span class="highlight-animation px-1">Golang</span> and utilizes a <span
            class="highlight-animation px-1">MySQL</span> database for data storage.
        </h1>
      </div>
    </div>
    <div class="bg-[#C80036] max-w-full grid justify-center text-center text-white p-8 overflow-hidden">
      <div class="pb-10">
        <h1 class="lg:text-4xl font-bold text-2xl">
          Kantin Sekolah Telkom
        </h1>
        <span>Website App</span>
      </div>
      <div class="flex justify-center group">
        <img class="w-96 shadow-md transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
          src="/images/kaset.png" alt="">
        <!-- <img src="/images/kaset.png" class="w-5/12 rounded-md shadow-md transform group-hover:scale-110 transition-transform duration-300 ease-in-out" alt=""> -->
      </div>
      <h1 class="pt-10 lg:px-56">
        Developing an e-commerce-like website for a canteen, I’m utilizing <span
          class="redhighlight-animation px-1">Laravel</span> for backend development and <span
          class="orghighlight-animation px-1">MySQL</span> for data storage, creating a robust system for managing
        canteen operations.
      </h1>
    </div>
    <div class="lg:flex z-50 text-white">
      <div
        class="max-w-full lg:w-screen bg-[#6C946F] p-8 z-0 group text-center flex flex-col items-center overflow-hidden">
        <div class="pb-10 ">
          <h1 class="text-4xl font-bold">
            Yans Garden
          </h1>
          <span>Website</span>
        </div>
        <img class="w-96 shadow-md transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
          src="/images/yans.png" alt="">
        <h1 class="pt-10 lg:px-16 space-y-1">
          Built with <span class="highlight-animation px-1">HTML and Tailwind</span>, this website provides information
          for those who want to make their garden more vibrant and alive.
        </h1>
      </div>
      <div
        class="max-w-full lg:w-screen bg-[#134B70] p-8 z-0 group text-center flex flex-col items-center overflow-hidden">
        <div class="pb-10 ">
          <h1 class="text-4xl font-bold">
            Alfa Rent Car
          </h1>
          <span>Website</span>
        </div>
        <img class="w-80 shadow-md transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
          src="/images/arc.png" alt="">
        <h1 class="pt-10 lg:px-16 space-y-1">
          Built with <span class="highlight-animation px-1">Vue and Tailwind</span>, this website is designed to
          advertise a car rental business based in Makassar.
        </h1>
      </div>
    </div>

    <div class="pt-44">
      <h1 class="lg:text-9xl text-6xl font-bold z-50 pb-2">
        Skills
      </h1>
      <div class="flex flex-wrap justify-center items-center overflow-auto gap-2">
        <img src="/images/skills/kotlin.svg" alt="" class="bg-white shadow-sm w-40">
        <img src="/images/skills/flutter2.svg" alt="" class="bg-white shadow-sm w-40">
        <img src="/images/skills/react.svg" alt="" class="bg-white shadow-sm w-40">
        <img src="/images/skills/js.svg" alt="" class="bg-white shadow-sm w-40">
        <img src="/images/skills/go2.svg" alt="" class="bg-white shadow-sm w-40">
        <img src="/images/skills/laravel2.svg" alt="" class="bg-white shadow-sm w-40">
        <img src="/images/skills/vue.svg" alt="" class="bg-white shadow-sm w-40">
        <img src="/images/skills/next.svg" alt="" class="bg-white shadow-sm w-40">
        <img src="/images/skills/firebase2.svg" alt="" class="bg-white shadow-sm w-40">
        <img src="/images/skills/mysql.svg" alt="" class="bg-white shadow-sm w-40">
      </div>
    </div>

  </div>

  <div class="lg:px-14 px-8 pb-14 z-50 disable-cursor">
    <h1 class="lg:text-9xl text-6xl font-bold z-50 ">
      About Me
    </h1>
    <div class="bg-[#030637] p-8 text-white grid justify-center">
      <h1 class="text-1xl">
        I enjoy designing websites especially backend systems, and mobile app. I interned at Metrotech Digital Asia in
        Makassar and currently work as a freelance developer.
      </h1>
      <div class="lg:flex justify-center pt-8 lg:gap-5 grid gap-2">
        <div class="bg-white p-4 flex gap-3 flex-wrap">
          <img src="/images/mail.svg" alt="">
          <h1 class="text-black">dimasrdyo@gmail.com</h1>
        </div>
        <a href="https://wa.me/+6282155369381" target="_blank"
          class="bg-white flex-wrap  p-4 flex gap-3 hover:scale-105 transition-transform">
          <img src="/images/phone.svg" alt="">
          <h1 class="text-black">082155369381</h1>
        </a>
        <a href="https://www.linkedin.com/in/dimas-deo-rezkidyo-6380b91b4/" target="_blank"
          class="bg-white flex-wrap p-4 flex gap-3 hover:scale-105 transition-transform">
          <img src="/images/linkedin.svg" alt="">
          <h1 class="text-black">Dimas Deo Rezkdiyo</h1>
        </a>
        <a href="https://github.com/bebeorca" target="_blank"
          class="bg-white flex-wrap  p-4 flex gap-3 hover:scale-105 transition-transform">
          <img src="/images/github.svg" alt="">
          <h1 class="text-black">bebeorca</h1>
        </a>
      </div>
    </div>
  </div>

</template>

<script>
import { RouterView } from 'vue-router';
import router from '../router';

export default {
  setup() {

    document.addEventListener("DOMContentLoaded", function () {
      const cursor = document.querySelector(".cursor");

      // Combine elements
      const elementsToDisableCursor = document.querySelectorAll(".disable-cursor, .disable-cursoronprj");

      elementsToDisableCursor.forEach(element => {
        element.addEventListener("mouseenter", () => {
          if (element.classList.contains("disable-cursor")) {
            cursor.classList.add("cursor-disabled");
            cursor.classList.remove("cursor-prj"); // Ensure only one class is active
          } else if (element.classList.contains("disable-cursoronprj")) {
            cursor.classList.add("cursor-prj");
            cursor.classList.remove("cursor-disabled"); // Ensure only one class is active
          }
        });

        element.addEventListener("mouseleave", () => {
          cursor.classList.remove("cursor-disabled");
          cursor.classList.remove("cursor-prj");
        });
      });
    });


    return {}
  }
}
</script>
