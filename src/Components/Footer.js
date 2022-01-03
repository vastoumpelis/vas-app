import React, { Component } from 'react'

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        )
      })
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

            <ul className="copyright">
              <li>&copy; Copyright 2021</li>
              <li>Vasileios Toumpelis</li>
            </ul>
            <div>
              <span>Built using React.js</span>
              <img className="react-icon" alt="" src="images/react_icon.png" />
            </div>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
