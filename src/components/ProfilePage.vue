<template>
  <div class="main-page">
    <div class="course__block">
      <h2>Добро пожаловать, {{ username }}!</h2>
      <h2>Курс по HTML и CSS</h2>
      <div class="video-slider">
        <div class="video-slider__container">
          <video src="../assets/course/lesson1.mp4" controls width="800"></video>
          <video src="../assets/course/lesson2.mp4" controls width="800"></video>
          <video src="../assets/course/lesson3.mp4" controls width="800"></video>
          <video src="../assets/course/lesson4.mp4" controls width="800"></video>
          <video src="../assets/course/lesson5.mp4" controls width="800"></video>
          <video src="../assets/course/lesson6.mp4" controls width="800"></video>
          <video src="../assets/course/lesson7.mp4" controls width="800"></video>
          <video src="../assets/course/lesson8.mp4" controls width="800"></video>
          <video src="../assets/course/lesson9.mp4" controls width="800"></video>
          <video src="../assets/course/lesson10.mp4" controls width="800"></video>
          <video src="../assets/course/lesson11.mp4" controls width="800"></video>
          <video src="../assets/course/lesson12.mp4" controls width="800"></video>
          <video src="../assets/course/lesson13.mp4" controls width="800"></video>
          <video src="../assets/course/lesson14.mp4" controls width="800"></video>
          <video src="../assets/course/lesson15.mp4" controls width="800"></video>
          <video src="../assets/course/lesson16.mp4" controls width="800"></video>
          <video src="../assets/course/lesson17.mp4" controls width="800"></video>
          <video src="../assets/course/lesson18.mp4" controls width="800"></video>
        </div>
        <div class="video-slider__controls">
          <button class="video-slider__control" v-for="(video, index) in videos" :key="index" @click="changeVideo(index)"
            :class="{ active: currentVideoIndex === index }">{{ index + 1 }}</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: this.$store.state.username,
      currentVideoIndex: 0,
      videos: [
        { src: '../assets/course/lesson1.mp4', controls: true, width: '800' },
        { src: '../assets/course/lesson2.mp4', controls: true, width: '800' },
        { src: '../assets/course/lesson3.mp4', controls: true, width: '800' },
        { src: '../assets/course/lesson4.mp4', controls: true, width: '800' },
        { src: '../assets/course/lesson5.mp4', controls: true, width: '800' },
        { src: '../assets/course/lesson6.mp4', controls: true, width: '800' },
        { src: '../assets/course/lesson7.mp4', controls: true, width: '800' },
        { src: '../assets/course/lesson8.mp4', controls: true, width: '800' },
        { src: '../assets/course/lesson9.mp4', controls: true, width: '800' },
        { src: '../assets/course/lesson10.mp4', controls: true, width: '800' },
        { src: '../assets/course/lesson11.mp4', controls: true, width: '800' },
        { src: '../assets/course/lesson12.mp4', controls: true, width: '800' },
        { src: '../assets/course/lesson13.mp4', controls: true, width: '800' },
        { src: '../assets/course/lesson14.mp4', controls: true, width: '800' },
        { src: '../assets/course/lesson15.mp4', controls: true, width: '800' },
        { src: '../assets/course/lesson16.mp4', controls: true, width: '800' },
        { src: '../assets/course/lesson17.mp4', controls: true, width: '800' },
        { src: '../assets/course/lesson18.mp4', controls: true, width: '800' },
      ],
    };
  },
  methods: {
    changeVideo(index) {
      this.currentVideoIndex = index;
      const videos = document.querySelectorAll('.video-slider__container video');
      videos.forEach((video, i) => {
        if (i === this.currentVideoIndex) {
          video.classList.add('active');
        } else {
          video.classList.remove('active');
          video.pause();
          video.currentTime = 0;
        }
      });
    },
  },
  mounted() {
      const videos = document.querySelectorAll('.video-slider__container video');
      videos.forEach((video) => {
        video.addEventListener('ended', () => {
          this.currentVideoIndex += 1;
          if (this.currentVideoIndex >= this.videos.length) {
            this.currentVideoIndex = 0;
          }
          this.changeVideo(this.currentVideoIndex);
        });
      });
      this.changeVideo(this.currentVideoIndex);
    },
};
</script>

<style scoped>
.main-page {}

.course__block {
  display: flex;
  flex-direction: column;
}

.video-slider {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.video-slider__container {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.video-slider__container video {
  display: none;
  top: 0;
  left: 0;
}

.video-slider__container video.active {
  display: block;
}

.video-slider__controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.video-slider__control {
  margin: 0 10px;
  padding: 5px 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.video-slider__control.active {
  background-color: #ccc;
}
</style>