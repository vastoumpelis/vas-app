import React, { Component } from 'react'

class Photos extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/photos/' + projects.image
        return (
          <div key={projects.title} className="columns photos-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="photos-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="photos">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Here are some of my favorite photos</h1>

            <div
              id="photos-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Photos
