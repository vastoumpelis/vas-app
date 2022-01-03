import React, { Component } from 'react'

class goals extends Component {
  render() {
    if (this.props.data) {
      var goals = this.props.data.goals.map(function (goals) {
        return (
          <li key={goals.user}>
            <blockquote>
              <p>{goals.text}</p>
              <cite>{goals.user}</cite>
            </blockquote>
          </li>
        )
      })
    }

    return (
      <section id="goals">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>
                <span>Personal Message</span>
              </h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">{goals}</ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default goals
