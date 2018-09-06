<template>
  <div class="home">
    <div class="first-page page">
      <div class="content-container">
        <div class="title-container">
          <title-interactive :txt="titleTxt"></title-interactive>
        </div>
        <div class="middle-line"></div>
        <div class="intro-container">
          <p>
            Hi!<br/>
            I'm Fullstac᠎k developer with a passion for design, animation and new technologies.
            Please chec᠎k out my past projects below as well as my contact details.
          </p>
        </div>
      </div>
      <div class="btns-container">
        <div class="contact-btn btn" @click="goToContactInfo">Contact</div>
        <div class="nav-btn btn" @click="onNavBtnClick">⇩</div>
        <!-- <div class="options-btn btn">Options</div> -->
      </div>
      <img class="woods-img" src="../../img/autumn-landscape-1352568333n2y.png"/>
    </div>
    <div class="second-page page">
      <div class="projects-container">
        <div class="projects-grid">
          <div class="project" v-for="project in projects" :key="project.title">
            <project-preview :project="project"></project-preview>
          </div>
        </div>
      </div>
    </div>
    <footer class="contact" data-section-name="footer">
        <p>
          hiush call mee<br>
          hiush call mee<br>
          hiush call mee<br>
          hiush call mee<br>
        </p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import $ from 'jquery';
import 'jquery-scrollify';
import anime from 'animejs';
import TitleInteractive from '@/components/TitleCmp.vue';
import ProjectPreview from '@/components/ProjectPreviewCmp.vue'

export default {
  name: 'home',
  components: {
    TitleInteractive,
    ProjectPreview
  },
  data() {
    return {
      titleTxt: 'Ilay Skutelsky',
      currPageIdx: 0,
      projects: [
        {
          title: 'TravelMaker',
          img: '../../img/projects-previews/TravelMaker.png'
        },
        // {
        //   title: 'Todos'
        // },
        // {
        //   title: 'TraveldMaker'
        // },
        // {
        //   title: 'Todods'
        // }
      ]
    };
  },
  mounted() {
    $(() => {
      $.scrollify({
        section: '.page',
        interstitialSection: 'footer',
        updateHash: false,
        scrollbars: false,
        before: (idx) => {
          // console.log('before scroll to:', idx);
          // console.log('before', arguments);
          if (idx === 0) {
            this.moveBtnsToPage1();
          } else if (idx === 1) {
            if (this.currPageIdx === 2) return;
            this.moveBtnsToPage2();
            this.animateProjects()
          }
        },
        after: (idx) => {
          // console.log('after scroll to:', idx);
          this.currPageIdx = idx;
          // TODO: emit to canvas stop ufos, come to curr page
        },
      });
    });

    $('.btns-container .btn').mousemove((ev) => {
      // console.log('offset X, Y,', ev.offsetX, ev.offsetY);
      const xDeg = ev.offsetY - 40;
      const yDeg = ev.offsetX - 40;
      anime({
        targets: ev.target,
        rotateX: xDeg + 'deg',
        rotateY: yDeg + 'deg',
        translateY: '+=0',
        rotateZ: '+=0',
        'background-color': 'rgba(187,187,187,0.8)',
        duration: 100,
      });
    });
    $('.btns-container .btn').mouseleave((ev) => {
      anime({
        targets: ev.target,
        rotateX: '0deg',
        rotateY: '0deg',
        translateY: '+=0',
        rotateZ: '+=0',
        'background-color': 'rgba(204,204,204,0.6)',
        duration: 300,
      });
    });
    this.moveBtnsToPage1();
  },
  methods: {
    onNavBtnClick() {
      if (this.currPageIdx === 0) {
        $.scrollify.next();
      } else {
        $.scrollify.previous();
      }
    },
    goToContactInfo() {
      this.moveBtnsToPage2();
      this.currPageIdx = 3;
      $.scrollify.move('#footer');
    },
    moveBtnsToPage1() {
      // console.log('moving btns to page 1');
      anime({
        targets: ['.contact-btn', '.nav-btn', '.options-btn'],
        translateY: [150, 0],
        duration: 300,
        delay(el, i) {
          return i * 150;
        },
      });
    },
    moveBtnsToPage2() {
      // console.log('moving btns to page 2');
      anime({
        targets: ['.contact-btn', '.nav-btn', '.options-btn'],
        translateY: [0, 150],
        rotateZ: (el, i) => {
          if (i === 1) return '180';
          return 0;
        },
        duration: 300,
        delay(el, i) {
          return i * 100;
        },
      });
    },
    animateProjects() {
      anime({
        targets: ['.project'],
        translateX: [-1000, 0],
        translateY(el, i) {
          return [i * 100, 0]
        },
        duration: 1300,
        delay(el, i) {
          return i * 100;
        },
      })
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}

.first-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  // padding-bottom: 5em;
  transition: 0.4s
}

.content-container {
  display: flex;
  height: 85%;
}

.title-container {
  width: 48%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 1em;
}

.intro-container {
  width: 48%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  text-align: left;
  padding: 0 1em;
}

.intro-container p {
  font-family: Corben;
  font-size: 1.2em;
  line-height: 1.8em;
}

.middle-line {
  align-self: center;
  position: relative;
  z-index: -1;
  background-color: #cccccccc;
  width: 2px;
  height: 90%;
  border-radius: 2px;
  // top: 5%;
  // left: calc(50% - 1px);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  transition: transform 0.8s
}

.btns-container {
  // background-color: #cccccccc;
  display: flex;
  height: fit-content;
  justify-content: center;
  padding: 1em;
  margin-bottom: 1em;
}

.btns-container .btn {
  cursor: pointer;
  height: 5em;
  width: 5em;
  margin: 0 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Corben;
  font-weight: bold;
  border: 1px solid #ddddddAA;
  border-radius: 1em;
  background-color: #cccccc99;
  transform: translateY(150px);
  transition: 0.4s;
}

.woods-img {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: auto;
  top: calc(100vh - calc(100vw * 0.342));
  right: 0;
}

.second-page {
  height: 100vh;
}

.projects-container {
  padding: 10em 5em;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill ,minmax(200px,1fr));
  // grid-auto-rows: minmax(100px, auto);
  grid-gap: 10px;

  // @media (min-width: 800px) {
  //   grid-template-columns: repeat(auto-fit ,minmax(200px,1fr));    
  // }
}

.project {
  // width: 200px;
  // height: 200px;
  border: 1px solid black;
  background-color: gray;
}

@media screen and (max-width: 768px) {
  .content-container {
    flex-direction: column;
    align-items: center;
  }
  .middle-line {
    width: 90%;
    height: 2px;
    transform: rotate(180deg)
  }
  .title-container {
    text-align: center;
    width: fit-content;
    height: 50%;
    // margin: 0 auto;
  }
  .intro-container {
    width: 60%;
    padding-top: 2em;
    align-items: flex-start;
  }
}
</style>

