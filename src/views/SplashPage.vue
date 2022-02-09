<template lang="pug">
.splash-page

    .content
      .main

        h1 ActivitySim/Wrapper
        h2.splash-readme(style="max-width: 42rem; text-align: center; margin: -0.5rem auto 0 auto" v-html="$t('tagLine')")
        //- img(src="@/assets/images/simwrapper-scrnshot-wide.jpg")

        hr
        h2: b Explore model results
        file-system-projects.gap(@navigate="onNavigate")
        hr

        h2: b {{ $t('more-info') }}
        info-bottom.splash-readme

        hr
        h2: b Sponsors
        .agencies
          a.agency(v-for="agency in agencies" :key="agency.name"
            :href="agency.url"
            :title="agency.name"
          )
            img(:src="agency.logo")

        hr
        h2: b Site built with
        .logo-area
          .simwrapper-logo
            a(href="https://simwrapper.github.io/docs/docs/simwrapper-intro")
              img(src="@/assets/simwrapper-logo/SW_logo_yellow.png")
          .tu-area
            a.img-logo(href="https://tu.berlin")
              img(src="@/assets/images/tu-logo.png")
            a.img-logo(href="https://vsp.berlin/en/")
              img(src="@/assets/images/vsp-logo-300dpi.png")

</template>

<script lang="ts">
const i18n = {
  messages: {
    en: {
      'more-info': 'Documentation:',
      tagLine: 'the simulation dashboard and data visualizer for ActivitySim',
    },
    de: {
      'more-info': 'Für weitere Informationen:',
      tagLine: 'Der Modellergebnis-Browser der TU Berlin.',
    },
  },
}

import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

import globalStore from '@/store'
import Colophon from '@/components/Colophon.vue'
import FileSystemProjects from '@/components/FileSystemProjects.vue'

import InfoBottom from '@/assets/info-bottom.md'

import MTC from '@/assets/images/sponsor-logos/mtc.png'
import SANDAG from '@/assets/images/sponsor-logos/sandag.jpg'
import ARC from '@/assets/images/sponsor-logos/arc.png'
import METCOUNCIL from '@/assets/images/sponsor-logos/metcouncil.png'
import PSRC from '@/assets/images/sponsor-logos/psrc.png'
import SEMCOG from '@/assets/images/sponsor-logos/SEMCOG.jpg'
import OREGON from '@/assets/images/sponsor-logos/oregondot.png'
import SFCTA from '@/assets/images/sponsor-logos/sfcta.png'
import MWCOG from '@/assets/images/sponsor-logos/mwcog.png'
import OHIO from '@/assets/images/sponsor-logos/ohiodot.png'

@Component({
  i18n,
  components: { Colophon, FileSystemProjects, InfoBottom },
})
class MyComponent extends Vue {
  private agencies: any[] = [
    {
      name: 'Metropolitan Transportation Commission',
      url: 'https://mtc.ca.gov/',
      logo: MTC,
    },
    {
      name: 'San Diego Association of Governments',
      url: 'http://www.sandag.org/',
      logo: SANDAG,
    },
    {
      name: 'Atlanta Regional Commission',
      url: 'https://atlantaregional.org/',
      logo: ARC,
    },
    {
      name: 'Metropolitan Council',
      url: 'https://metrocouncil.org/',
      logo: METCOUNCIL,
    },
    {
      name: 'Puget Sound Regional Council',
      url: 'https://www.psrc.org/',
      logo: PSRC,
    },
    {
      name: 'Southeast Michigan Council of Governments',
      url: 'http://semcog.org/',
      logo: SEMCOG,
    },
    {
      name: 'Metropolitan Washington Council of Governments',
      url: 'https://www.mwcog.org/',
      logo: MWCOG,
    },
    {
      name: 'San Francisco County Transportation Authority',
      url: 'https://www.sfcta.org/',
      logo: SFCTA,
    },
    {
      name: 'Oregon Department of Transportation',
      url: 'https://www.oregon.gov/ODOT',
      logo: OREGON,
    },
    {
      name: 'Ohio Department of Transportation',
      url: 'https://www.transportation.ohio.gov/',
      logo: OHIO,
    },
  ]

  private mounted() {
    const crumbs = [
      {
        label: 'SimWrapper',
        url: '/',
      },
    ]

    // save them!
    globalStore.commit('setBreadCrumbs', crumbs)
  }

  private onNavigate(event: any) {
    // pass it on up
    this.$emit('navigate', event)
  }

  // private readme = readme
  // private readmeBottom = bottom
}
export default MyComponent
</script>

<style scoped lang="scss">
@import '@/styles.scss';

.splash-page {
  height: 100%;
  overflow-y: auto;
  // background-color: var(--bgDashboard);
  background-image: linear-gradient(#443c84, #33638d, #238a8d);
  background-image: linear-gradient(#238a8d, #33638d, #443c84);
  background-image: linear-gradient(150deg, #440d54, #238a8d); //  #33638d, #443c84);
  background-image: linear-gradient(150deg, #23072c, #144e50); //  #33638d, #443c84);
  background-image: var(--bgSplash);
}

.gap {
  text-align: center;
  margin: 3rem auto 2rem auto;
}

.content {
  flex: 1;
  padding: 1rem 1rem 5rem 3rem;
  display: flex;
  max-width: 64rem;
  margin: 0 auto;
}

a {
  font-size: 1.1rem;
  color: #00499c;
}

.splash-readme {
  margin-top: 1rem;
  margin-bottom: 3rem;
  flex: 1;
  color: white;
}

.main {
  margin-top: 2rem;
  max-width: 64rem;

  h1 {
    margin-top: 2rem;
    font-weight: bold;
    font-size: 3rem;
    color: white;
    text-align: center;
  }

  h2 {
    margin-top: 1rem;
    font-weight: normal;
  }

  h2,
  h3 {
    color: white;
  }
}

.one-viz {
  margin-bottom: 1rem;
}

.preamble {
  display: flex;
}

.top {
  margin-top: 1rem;
}

.colophon {
  padding: 2rem 2rem 1rem 5rem;
  text-align: right;
  font-size: 0.85rem;
  background-color: white;
}

.main {
  margin-right: 2rem;
  h1 {
    letter-spacing: -1px;
  }
}

.main .top a {
  font-size: 0.9rem;
}

.page-area {
  display: flex;
  flex-direction: row;
}

.headline {
  font-size: 2rem;
  line-height: 2.7rem;
  padding: 1rem 0;
  color: $themeColor;
}

#app .footer {
  color: #222;
  background-color: white;
  text-align: center;
  padding: 2rem 0.5rem 3rem 0.5rem;
}

.footer a {
  color: $matsimBlue;
}

.footer img {
  margin: 1rem auto;
  padding: 0 1rem;
}

.logo-area {
  display: flex;
  flex-direction: row;
}

.simwrapper-logo {
  width: 300px;
  margin-top: auto;
  margin-bottom: 0.5rem;
  margin-right: auto;
}

.tu-area {
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: 2rem;
}

.img-logo {
  margin-top: auto;
  padding-left: 2rem;

  img {
    width: 85px;
  }
}

.right {
  margin-top: 1rem;
}

hr {
  height: 1px;
  background-color: #53ade1; // 8d4eeb
  margin: 4rem 0 -0.5rem 0;
}

.agencies {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  background-color: white;
  padding: 0.25rem 0.25rem;
  align-items: center;
  border-radius: 1rem;
}

.agency {
  padding: 1rem 0.5rem;
  margin: 0.25rem 0.25rem;
  text-align: center;
}

@media only screen and (max-width: 640px) {
  .content {
    padding: 2rem 1rem 8rem 1rem;
    flex-direction: column;
  }

  .colophon {
    display: none;
  }

  .headline {
    padding: 0rem 0rem 1rem 0rem;
    font-size: 1.5rem;
    line-height: 1.8rem;
  }

  .tu-logo {
    margin-top: -2rem;
    text-align: right;
    margin-right: 0.5rem;
  }

  .img-logo {
    height: 4rem;
  }
}
</style>
