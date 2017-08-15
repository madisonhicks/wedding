/**
 * Created by madisonhicks on 8/2/17.
 */

import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';


class TravelItem extends Component {
  componentDidMount() {
      window.scrollTo(0, 650)
    }
  render() {
    return(
      <div>
        <span style={{fontSize: '18px', fontWeight: 'bold'}}>{this.props.item.title}</span>
        <br/>
        <div className="textblock">
          <ReactMarkdown source={this.props.item.description} />
        </div>
      </div>
    )
  }
}

class TravelContents extends Component {
  render() {
    return(
      <div>
        {this.props.travels.map(travel => {
          return(
            <TravelItem
              item={travel}
            />
          )
        })}
      </div>
    )
  }
}

const TRAVEL = [
  {
    title: 'By Air',
    description: `Austin is serviced by the **Austin-Bergstrom International Airport**
            (airport code **AUS**), which is located about eight miles
            southeast of downtown. Direct flights are available to and from most
            major U.S. cities, including Boston (BOS), New Orleans (MSY),
            San Diego (SAN), Los Angeles (LAX), Washington D.C. (IAD & DCA),
            Detroit (DTW), and El Paso (ELP). Outside the airport is a fleet
            of taxis waiting to ferry you off to your final destination in the
            Austin area. If you prefer ridesharing services, we highly recommend
            Austin's own local nonprofit rideshare company, Ride Austin. There
            are, of course, also rental car services on the lower level of the
            airport. A car ride from the airport to central Austin is usually
            around 20 minutes, but will likely be longer during rush hour. The
            airport is also serviced by two city bus routes.  
            [Click here for the Austin-Bergstrom International Airport homepage](http://www.austintexas.gov/airport)`
  },
  {
    title: 'By Automobile',
    description: `Those driving into Austin will likely end up entering the city
            proper via the I-35, MoPac, or 183. All three of these routes become
            extremely backed up during rush hour, which is Monday-Friday **6:00-
            9:00 a.m.** and **4:00-7:00 p.m.**. We recommend planning your
            drive to avoid reaching Austin during these times, for your own sanity.  
            [Click here to see current traffic conditions in Austin](http://www.statesman.com/traffic/)`
  },
  {
    title: 'By Rail',
    description: `In the unlikely event that you choose to make the journey to Austin
            by train, you'll be arriving at the Austin Amtrak station, which
            is conveniently located downtown. Taxis and rideshare are readily
            available downtown, and there are a number of bus stops in the
            immediate vicinity.  
            [Click here for the Amtrak Austin station information page](https://www.amtrak.com/servlet/ContentServer?pagename=am/am2Station/Station_Page&code=AUS")`
  },
  {
    title: 'By Teleportation',
    description: `We have no advice for those teleporting to Austin, we just want to
            know how you're doing it.`
  }
]

class AccommodationLink extends Component {
  render() {
    return(
      <a href={this.props.url} target="_blank" ref="noopener noreferrer">{this.props.title}</a>
    )
  }
}


/*
An accommodation item. Takes as properties:
  - links, which is an array of objects of the form:
      location: the URL
      description: the text of the link
  - description, which is a description for the link(s)

    for example:
    <AccommodationItem links={[
      {location: 'foo.bar', title: 'bar'},
      {'location': 'locationtwo.com', title:'location two'}
     ]}/>
 */
class AccommodationItem extends Component {
  render() {
    return(
      <div>
        {this.props.links.map(link => {
          return (
            <span style={{fontSize: '16px', fontWeight: 'bold', fontFamily: 'Cormorant SC'}}>
              <AccommodationLink url={link.url} title={link.title}/><br/>
            </span>
          )
        })}
        <div style={{fontFamily: 'PT Sans'}}>
            <ReactMarkdown source={this.props.description}/>
        </div>
      </div>
    )
  }
}

/*
A list of travel accommodations

- takes a property, accommodations, which is an array of objects, of the form:

  [
    {
      'links': [{'url': 'some_url', 'title': 'some_title'}],
      'description': 'some blurb'
    },
    . . .
  ]

 */
class AccommodationList extends Component {
  render() {
    return(
      <div>
        <ol>
          {this.props.accommodations.map(accommodation => {
            return(
              <li key={accommodation.links[0].url}>
                <AccommodationItem
                  links={accommodation.links}
                  description={accommodation.description}/>
                  <br />
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}



const ACCOMMODATIONS = [
  {
    links: [
      {url: "http://www.westinaustindowntown.com/?_aa_Google_My_Business__WI_3899__NAD_FM&SWAQ=958P",
        title: "The Westin Austin Downtown:"}
      ],
    description: "292 feet from the venue, a one-minute walk."
  },
  {
    links: [
      {url: "http://www.marriott.com/hotels/travel/ausrd-residence-inn-austin-downtown-convention-center/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2",
        title: "Residence Inn Austin Downtown"},
      {url: "http://www.marriott.com/hotels/travel/auscd-courtyard-austin-downtown-convention-center/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2",
        title: "Courtyard Marriott Austin Downtown"}
      ],
    description: "These two hotels, both by Marriott, are in the same building 0.1 miles from the venue, a three-minute walk."
  },
  {
    links: [
      {url:"http://www3.hilton.com/en/hotels/texas/hilton-austin-AUSCVHH/index.html",
        title: "Hilton Austin"}
    ],
    description: "0.1 miles from the venue, a three-minute walk."
  },
  {
    links: [
      {url: "http://www.driskillhotel.com/",
        title: "The Driskill"}
    ],
    description: "The Driskill, an Austin legend, is 0.2 miles from the venue, a four minute walk."
  },
  {
    links: [
      {url:"https://austindowntown.place.hyatt.com/en/hotel/home.html",
        title: "Hyatt Place Austin Downtown"}
    ],
    description: "0.2 miles from the venue, a five-minute walk."
  },
  {
    links: [
      {url: "https://www.omnihotels.com/hotels/austin-downtown",
        title: "Omni Austin Hotel Downtown"}
    ],
    description: "0.2 miles from the venue, a six-minute walk."
  },
  {
    links: [
      {url: "http://hamptoninn3.hilton.com/en/hotels/texas/hampton-inn-and-suites-austin-downtown-convention-center-AUSDTHX/index.html",
        title: "Hampton Inn & Suites Austin-Downtown"}
    ],
    description: "0.3 miles from the venue, a six-minute walk."
  },
  {
    links: [
      {url: "https://www.ihg.com/intercontinental/hotels/us/en/austin/ausha/hoteldetail?cm_mmc=GoogleMaps-_-IC-_-USA-_-AUSHA",
        title: "Intercontinental Stephen F. Austin"}
    ],
    description: "0.3 miles from the venue, a six-minute walk."
  },
  {
    links: [
      {url: "http://hiltongardeninn3.hilton.com/en/hotels/texas/hilton-garden-inn-austin-downtown-convention-center-AUSGIGI/index.html",
        title: "Hilton Garden Inn Austin Downtown"}
    ],
    description: "0.3 miles from the venue, a six-minute walk."
  },
  {
    links: [
      {url: "http://www.marriott.com/hotels/travel/ausjw-jw-marriott-austin/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2",
        title: "JW Marriott Austin"}
    ],
    description: "0.4 miles from the venue, an eight-minute walk."
  }
];

const LOCAL_ACCOMMODATIONS = [
  {
    links: [
      {url: "http://austinmotel.com/",
        title: "Austin Motel"}
    ],
    description: "Cute, iconic motel on South Congress, 1.5 miles from the venue. Seven minutes by car, 29 minutes on foot."
  },
  {
    links: [
      {url: "http://hotelsaintcecilia.com/",
        title: "Hotel Saint Cecilia"}
    ],
    description: "Named for the patron saint of musicians. 1.5 miles from the venue; eight minutes by car or a half-hour walk."
  },
  {
    links: [
      {url: "http://www.bravahouse.com/",
        title: "Brava House"}
    ],
    description: "Beautiful bed and breakfast in Old West Austin. 1.5 miles from the venue; eight minutes by car or 32 minutes on foot."
  },
  {
    links: [
      {url: "http://hotelella.com/",
        title: "Hotel Ella"}
    ],
    description: "Located between campus and downtown, and full of Texas Modernist art. 1.6 miles from the venue; ten minutes by car"
  },
  {
    links: [
      {url: "http://fairviewaustin.com/",
        title: "The Fairview"}
    ],
    description: "Bed & breakfast in quiet Travis Heights district 1.7 miles from the venue. Nine minutes by car or a 35-minute walk."
  },
  {
    links: [
      {url: "http://www.innpearl.com/",
        title: "Austin's Inn at Pearl Street"}
    ],
    description: "Charming inn with themed rooms. 1.7 miles from the venue; ten minutes by car or 36 minutes on foot."
  },
];


export default class Travel extends Component {
  render() {
    return(
      <div className="content">
        <div className="subwrap">
          <h2>Traveling to Austin</h2>
          <TravelContents travels={TRAVEL}/>
          <br />
          <h2>Accommodations in Austin</h2>
          <h3>Conveniently Located</h3>
          <div className="textblock">
            <p>
              There are dozens of hotels in downtown Austin, and many within walking
              distance of the wedding venue. Below are the ten hotels closest to
              the venue in descending order of proximity.
            </p>
            <AccommodationList accommodations={ACCOMMODATIONS}/>
          </div>
            <h3>Local Color</h3>
          <div className="textblock">
            <p>
              For guests who are more interested in a uniquely Austin experience
              than proximity to the venue, below are six options within two miles
              of the venue.
            </p>
            <AccommodationList accommodations={LOCAL_ACCOMMODATIONS}/>
          </div>
        </div>
      </div>
    )
  }
}
