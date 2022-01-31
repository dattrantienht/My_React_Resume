import React, { Component } from "react";
import Slide from "react-reveal";

let id = 0;
class Skill extends Component {

  render() {
    if (!this.props.data) return null;

    const skills = this.props.data.tools.map(function(skills) {
        let toolLogo = "images/skill/" + skills.logo;

        return (
            <div key={id++} className="columns skill-item">
            <div className="skill-item-wrap">

               <img src={toolLogo} />

          </div>
        </div>
        )
    });
    
    
    return (
      <section id="skill">
        <Slide right duration={1300}>
        <div className="row">
            <div className="">
              <h1>some tools i have experience working with.</h1>
              <div
                id="skill-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {skills}
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Skill;
