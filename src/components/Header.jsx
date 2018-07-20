import React from 'react';
import classNames from 'classnames';

export class Header extends React.Component{

  constructor(props) {
    super(props);
  }


  render() {
    var headerClass = classNames({
      'dimensions-hide': !this.props.class,
      'header-center': true,
    });

    var headerId = classNames({
      'header': this.props.class,
    });

    return (
      <header id={headerId} className={headerClass}>
        <div className="logo">
          <span className="icon fa-sun-o"></span>
        </div>
        <div className="content">
          <div className="inner">
            <h1>EVERYDAY CHURCH</h1>
            <p>EVERDAY PEOPLE LIVING OUT THE GOSPEL IN THE EVERYDAY RHYTHMS OF LIFE</p>
            <p>COMING FEBRUARY 2019<br />

To the Twin Cities West Metro Area<br />

Near Hwy 169 & Hwy 55</p>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#vision" onClick={() => this.props.transitionHandler('vision')}>Vision</a></li>
            <li><a href="#whatwedo" onClick={() => this.props.transitionHandler('whatwedo')}>What We Do Together</a></li>
            <li><a href="#whatwevalue" onClick={() => this.props.transitionHandler('whatwevalue')}>What We Value</a></li>
          </ul>
        </nav>
      </header>
    );
  }


}
