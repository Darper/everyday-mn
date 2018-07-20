import React from 'react';
import classNames from 'classnames';

export class WhatWeDo extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    var whatwedoClass = classNames({
      'active': this.props.class,
      'dimensions-show': this.props.class,
      'dimensions-hide': !this.props.class,
    });


    return (
      <article id="whatwedo" className={whatwedoClass}>
        <h2 className="major">WHAT WE DO TOGETHER</h2>
        

<h2>ENHANCE OUR CITY</h2>

<h3>WE WILL WORK FOR THE PEACE AND PROSPERITY OF OUR COMMUNITY BY INVESTING IN THE PERSONAL, SOCIAL, SOCIETAL, AND FINANCIAL WELL-BEING OF ITS PEOPLE.</h3>

<p>IN PRACTICE: We will strive everyday to have lasting relationships with others in our work places, neighborhoods, and communities. We will regularly serve at city events and participate in public forms. We will help those in our city with all forms of need through our benevolent fund, personal service, and corporate support.<br />
<sub>Jeremiah 29:7, Matthew 22:39</sub></p>

<h2>EXPERIENCE REAL COMMUNITY</h2>

<h3>WE WILL EXPERIENCE AUTHENTIC, EVERYDAY RELATIONSHIPS WITH OTHERS BY SHARING THE JOYS AND BURDENS OF LIFE AND EXTEND WELCOMING GRACE TO ALL.</h3>

<p>IN PRACTICE: We grow in this through Sunday morning worship experiences, and to a greater extent, though Missional Communities. Missional Communities are 15-25 people that meet regularly to disciple, encourage, and serve one another through the joys and challenges of living out Gospel-rhythms in day-to-day life.<br />

<sub>Matthew 28:19-20, Galatians 6:2-3, 1 Thessalonians 2:8</sub></p>

<h2>EMBRACE LOVING RELATIONSHIP WITH GOD </h2>

<h3>WE WILL SPEND TIME WITH GOD BY READING OUR BIBLES AND PRAYING, AS WELL AS GATHERING REGULARLY WITH OTHERS TO GROW SPIRITUALLY AS A COMMUNITY.</h3>

<p>IN PRACTICE: We do this corporately through Sunday morning worship experiences and personally through devotional times; both allowing Scripture to shape us and teach us how to live in obedience. Worship experiences are designed to help us grow in our love for God through relevant and challenging Biblical teaching, passionate worship to bring glory to God, and by regularly observing the ordinances Jesus established for his church: baptism and communion.<br />

<sub>Matthew 22:37-38, Matthew 28:19-20, 1 Corinthians 11:23-26</sub></p>

<h2>EMPOWERED TO CHANGE THE WORLD </h2>

<h3>CHANGED PEOPLE CHANGE PEOPLE! WE HAVE BEEN ENTRUSTED WITH THE GOSPEL AND ARE COMMITTED TO SHARING THE HOPE OF JESUS, PERSONALLY, LOCALLY, AND GLOBALLY BY INVESTING IN THE NEXT GENERATION AND MULTIPLYING BY PLANTING MORE CHURCHES TO ADVANCE GOD’S KINGDOM.</h3>

<p>IN PRACTICE: We do this by personally by sharing and living as people of faith with those around us, by supporting local and global missions, by creating excellent children & youth ministries, and through a strong financial and people commitment to plant new churches through Converge Worldwide. A commitment that includes “birthing” before building; we will birth a new church before we will build ourselves a building.<br />

<sub>John 3:16-17, Acts 1:8, 1 Thessalonians 2:4, Luke 10:2</sub></p>
        <div onClick={() => this.props.endTransitionHandler('whatwedo')} className="close">Close</div>
      </article>
    );
  }
}
