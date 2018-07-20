import React from 'react';
import classNames from 'classnames';

export class WhatWeValue extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    var whatwevalueClass = classNames({
      'active': this.props.class,
      'dimensions-show': this.props.class,
      'dimensions-hide': !this.props.class,
    });


    return (
      <article id="whatwevalue" className={whatwevalueClass}>
      <h2 className="major">WHAT WE VALUE</h2>
      <span className="image main"><img src="images/pic01.jpg" alt="" /></span>
      <h2>Values are not what we do; they are what characterize everything we do.</h2>
      
      <h3>GENEROSITY IS OUR PRIVILEGE</h3>
      
      <p>The church does not exist for the benefit of it’s members. We’ve seen God’s loving generosity gifted to us through Jesus Christ, so we will also be generous with our love, grace, time, gifts, and finances toward others.</p>
      
      <h3>HONESTY IS ESSENTIAL</h3>
      
      <p>We all need to be honest with ourselves, to God, and to have others be honest with us. We need intentional honesty to build trust with one another, grow in our own character, and deepen our friendships.</p>
      
      <h3>EXCELLENCE IS OUR PROMISE</h3>
      
      <p>Everything we do, we do with excellence. We will always do the best we can , whenever we can, with all we have. People deserve our very best. God deserves our very best. We will be prepared and engaged whenever we gather.</p>
      
      <h3>ENCOURAGEMENT IS OUR SPIRIT</h3>
      
      <p>It’s okay to not be okay here. The world can be a lonely and discouraging place. We will be a refreshing source of encouragement to others in word and deed. We will love and encourage people when they least expect it and when they least deserve it.</p>
      
      <h3>SERVANTHOOD IS TO BE EXPECTED</h3>
      
      <p>There are no rockstars in the church; from the pastors to the parking lot, we are just everyday people. We believe the greatest leadership is service to others. If you’re too big to serve, then you’re too small to lead.</p>
      
      <h3>CREATIVITY IS ABSOLUTELY NECESSARY</h3>
      
      <p>We are orthodox in our beliefs, but we are unorthodox in our practices. If want to reach people no one is reaching, we have to be willing to do things no one is doing.</p>
      <div onClick={() => this.props.endTransitionHandler('whatwevalue')} className="close">Close</div>
      </article>
    );
  }
}
