/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

const CompLibrary = require('../../core/CompLibrary.js')

const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = '' } = this.props
    const { baseUrl, docsUrl } = siteConfig
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`
    const langPart = `${language ? `${language}/` : ''}`
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    )

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    )

    const ProjectTitle = props => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '60rem',
          margin: '2rem auto 1rem auto',
          border: '6px solid #ef2',
          boxShadow: '0px 0px 10px 6px #00000011',
          backgroundColor: '#ffffff',
        }}
      >
        <img src="/img/logo-animated.gif" width="200" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            margin: 'auto 1rem',
          }}
        >
          <h2
            style={{
              padding: '0 2rem',
              margin: '0 auto',
              textAlign: 'left',
            }}
            className="projectTitle"
          >
            {props.title}
            <small>{props.tagline}</small>
          </h2>
        </div>
      </div>
    )

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    )

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button billybutton" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    )

    return (
      <SplashContainer>
        {/* <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} /> */}
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('simwrapper-intro')}>Go to the Docs</Button>
            <Button href={`${baseUrl}blog`}>Latest Updates</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props
    const { baseUrl } = siteConfig

    const Block = props => (
      <Container padding={['bottom', 'top']} id={props.id} background={props.background}>
        <GridBlock align="center" contents={props.children} layout={props.layout} />
      </Container>
    )

    const FeatureCallout = () => (
      <div className="productShowcaseSection paddingBottom" style={{ textAlign: 'center' }}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    )

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    )

    const Description = () => (
      <Block background="dark">
        {[
          {
            content: 'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    )

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content: 'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    )

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'This is the content of my feature',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Feature One',
          },
          {
            content: 'The content of my second feature',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'Feature Two',
          },
        ]}
      </Block>
    )

    const MetadataBlog = require('../../core/MetadataBlog.js')

    const LatestBlogEntries = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{
          textAlign: 'center',
          backgroundColor: '#222244ee',
          color: '#888',
          padding: '5rem 0 7rem 0',
        }}
      >
        <h1 style={{ color: 'white', fontSize: '3rem' }}>Latest News</h1>
        <ul style={{ listStyleType: 'none' }}>
          {MetadataBlog.slice(0, 4).map((item, index) => (
            <li style={{ marginBottom: '1rem', fontSize: '22px' }} key={index}>
              <a style={{ color: '#33bb77' }} href={`${baseUrl}blog/${item.path}`}>
                {item.title}
              </a>{' '}
              <small style={{ fontSize: '15px' }}>
                <br />
                {new Date(item.date).toLocaleDateString('en-US', {
                  weekday: undefined,
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </small>
            </li>
          ))}
        </ul>
      </div>
    )

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ))

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      )
    }

    const PrettyBanner = () => {
      return (
        <div
          style={{
            padding: '15rem 0',
            backgroundImage: 'url("img/dark-background.jpg")',
          }}
          className="productShowcaseSection paddingBottom"
        ></div>
      )
    }

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          {/* <Features /> */}
          <PrettyBanner />
          <LatestBlogEntries />
          {/* <LearnHow /> */}
          {/* <TryOut /> */}
          {/* <Description /> */}
          {/* <Showcase /> */}
        </div>
      </div>
    )
  }
}

module.exports = Index
