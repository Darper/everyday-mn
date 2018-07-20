import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import { Header } from '../components/Header'
import { WhatWeValue } from '../components/WhatWeValue'
import { WhatWeDo } from '../components/WhatWeDo'
import { Vision } from '../components/Vision'
import classNames from 'classnames'

import '../styles/main.css'
import '../styles/noscript.css'
import '../styles/custom.css'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      openModal: null,
      header: true,
      main: true,
      footer: true,
      modal: {
        whatwevalue: false,
        whatwedo: false,
        vision: false,
      },
    }
  }

  startArticleTransition(name) {
    document.body.classList.add('is-article-visible')

    this.setState({
      header: false,
      footer: false,
      main: true,
      modal: {
        [name]: true,
      },
    })
  }

  endArticleTransition(name) {
    document.body.classList.remove('is-article-visible')

    this.setState({
      header: true,
      footer: true,
      main: false,
      modal: {
        [name]: false,
      },
    })
  }

  render() {
    var mainClass = classNames({
      'dimensions-hide': !this.state.main,
    })

    var mainId = classNames({
      main: this.state.main,
    })

    var footerClass = classNames({
      'dimensions-hide': !this.state.footer,
    })

    var footerId = classNames({
      footer: this.state.footer,
    })

    return (
      <div>
        <div id="wrapper">
          <Header
            class={this.state.header}
            transitionHandler={name => this.startArticleTransition(name)}
          />
          <div id={mainId} className={mainClass}>
            <WhatWeValue
              class={this.state.modal.whatwevalue}
              endTransitionHandler={name => this.endArticleTransition(name)}
            />
            <WhatWeDo
              class={this.state.modal.whatwedo}
              endTransitionHandler={name => this.endArticleTransition(name)}
            />
            <Vision
              class={this.state.modal.vision}
              endTransitionHandler={name => this.endArticleTransition(name)}
            />
          </div>
          <footer id={footerId} className={footerClass}>
            <p className="copyright">
              &copy; Everyday Church. Design:{' '}
              <a href="https://html5up.net">HTML5 UP</a>.
            </p>
          </footer>
        </div>
        <div id="bg" />
      </div>
    )
  }
}
