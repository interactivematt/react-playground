import React from "react";

class Accordion extends React.Component {
  static defaultProps = {
    sections: []
  };
  state = {
    activeSection: null
  };
  handleSetActiveSection = (sectionIndex) => {
    this.setState({ activeSection: sectionIndex })
  }

  renderItem(section, index, activeSection){
    return (
      <li className="Accordion-item" key={index}>
        <button type="button" onClick={() => this.handleSetActiveSection(index)}>
          {section.title}
        </button>
        {(activeSection === index) && <p>{section.content}</p>}
      </li>
    )
  }
  render(){
    const { activeSection } = this.state
    const { sections } = this.props
    return (
      <ul className="Accordion">
        {sections.map((section, index) =>
          this.renderItem(section, index, activeSection)
        )}
      </ul>
    )
  }
}

export default Accordion;
