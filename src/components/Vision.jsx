import React from 'react';
import classNames from 'classnames';

export class Vision extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    var visionClass = classNames({
      'active': this.props.class,
      'dimensions-show': this.props.class,
      'dimensions-hide': !this.props.class,
    });


    return (
      <article id="vision" className={visionClass}>
        <h2 className="major">VISION &amp; MISSION</h2>
        <span className="image main"><img src="images/pic03.jpg" alt="" /></span>
        <p>Everyday Church wants to create a better everyday life for you, our community, and our world. Our mission is to help people meet Jesus Christ and follow him fully; <strong>that’s how we’re able to make everyday life better</strong>. It’s the motivation behind everything we do.</p>
        <div onClick={() => this.props.endTransitionHandler('vision')} className="close">Close</div>
      </article>
    );
  }
}
