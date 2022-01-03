import React, { Component } from 'react'
import Carousel from 'react-simply-carousel'
import $ from 'jquery'

class Resume extends Component {
  // carousel settings
  state = {
    activeSlideIndex: 0
  }

  setActiveSlideIndex = (newActiveSlideIndex) => {
    this.setState({
      activeSlideIndex: newActiveSlideIndex
    })
  }

  componentDidMount() {
    $('#indicator-0').css('color', '#c8a05b')
  }

  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage
      var project_exp_message = this.props.data.project_exp_message
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        )
      })
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        )
      })
      var skills = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase()
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        )
      })

      var carousel_indicators = (
        <ul>
          {this.props.data.project_exp.map(function (project_exp) {
            if (project_exp.index === 0) {
              return (
                <li
                  style={{ color: '#c8a05b' }}
                  id={'indicator-' + project_exp.index}
                >
                  {' -'}
                </li>
              )
            } else {
              return <li id={'indicator-' + project_exp.index}>{' -'}</li>
            }
          })}
        </ul>
      )

      var project_exp_slides = this.props.data.project_exp.map(function (
        project_exp
      ) {
        // var className = 'project-phase ' + project_exp.phase.toLowerCase()
        return (
          <div className="carousel-slide">
            <h3 className="carousel-heading">{project_exp.phase}</h3>
            <p className="carousel-description">{project_exp.experience}</p>
          </div>
        )
      })

      var project_exp_carousel = (
        <Carousel
          activeSlideIndex={this.state.activeSlideIndex}
          onRequestChange={this.setActiveSlideIndex}
          itemsToShow={3}
          itemsToScroll={1}
          speed={500}
          centerMode={true}
          forwardBtnProps={{ children: '', className: 'fa fa-chevron-right' }}
          backwardBtnProps={{ children: '', className: 'fa fa-chevron-left' }}
          activeSlideProps={{ className: 'active-slide' }}
        >
          {project_exp_slides}
        </Carousel>
      )

      var active_indicator_id = '#indicator-' + this.state.activeSlideIndex
      // reset indicator colous
      $('.carousel-indicators ul li').css('color', '#313131')
      $(active_indicator_id).css('color', '#c8a05b')
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>

        <div className="row project_exp">
          <div className="three columns header-col">
            <h1>
              <span>Project Experience</span>
            </h1>
          </div>

          <div>
            <p className="nine columns main-col">{project_exp_message}</p>
            <div className="carousel-container twelve columns">
              {project_exp_carousel}
              <div className="carousel-indicators">{carousel_indicators}</div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Resume
