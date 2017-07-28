import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';


const styles = {
  headerContainer: {
    backgroundColor: '#FEE4CD',
    border: '4px double #D22204',
    width: '95%',
    height: '20%',
    margin: '30px auto',
    textAlign: 'center',
    fontFamily: '"Cormorant SC", serif'
  }
};

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div style={styles.headerContainer}>
          <h1>Madison & Matthew's Wedding Extravaganza</h1>
          <h4>April 28th, 2018 // Austin, TX</h4>
        </div>
      </div>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="wrappette">
          <div className="box1">
            <h3>Event Details</h3>
            <div className="image" onClick={window.scrollTo(0, 650)}>
              <Link to="/details">
                <img src="static/img/pecan.jpg"/>
              </Link>
            </div>
          </div>
          <div className="box2">
            <h3>Travel</h3>
            <div className="image">
              <Link to="/travel">
                <img src="static/img/roadmap.jpg"/>
              </Link>
            </div>
          </div>
          <div className="box3">
            <h3>Around Austin</h3>
            <div className="image" >
              <Link to="/austin">
                <img src="static/img/austin.jpg"/>
              </Link>
            </div>
          </div>
          <div className="box4">
            <Link to="/registry">Registry</Link>
          </div>
        </div>
      </div>
    )
  }
}

class Details extends Component {
  render() {
    return(
      <div className="subwrap">
        <h2>Event Details</h2>
        <h3>Location: Old Pecan Street Cafe</h3>
        <div className="textblock">
          <p>
            The Old Pecan Street Cafe is located in downtown Austin, on Trinity
            Street between 5th and 6th. Both the ceremony and the reception will
            take place in the courtyard room off the main dining area.
          </p>
          <p>Information to come on parking at the Old Pecan Street Cafe.</p>
          <br />
          <h3>Ceremony: 6:30 p.m.</h3>
          <p>
            The ceremony will commence at 6:30 p.m., although guests are welcome
            to arrive as early as 6:00. The venue only seats 15 guests for the
            ceremony; eight of these seats will be reserved for parents and
            grandparents of the bride and groom. Remaining chairs are available
            on a first-come-first-serve basis. For the benefit of our many
            standing guests, the ceremony will not exceed ten minutes in length.
          </p>
          <br />
          <h3>Reception</h3>
          <p>
            The reception will begin immediately following the ceremony and
            continue into the night until 11:00. There will be a seated dinner
            and a full bar.
          </p>
          <p>
            Information to come on the dinner menu and serving times.
          </p>
          <br />
          <h3>Additional Information</h3>
          <p>
            Due to the large number of hotels very close to the venue, there will
            not be transportation provided after the reception.
          </p>
          <p>
            The venue for the ceremony and reception is semi-outdoors, so climate
            control will be limited. Temperatures on an evening in late April
            are usually in the mid-to-high eighties, dropping into the mid-to-high
            seventies as the night wears on. <br />
          </p>
          <p>
            <a href="https://www.wunderground.com/cgi-bin/findweather/getForecast?query=pws:KTXAUSTI646"
               target="_blank">
              Click here to see Austin's current weather conditions
            </a>
          </p>
          <p>Cocktail and festive attire welcome.</p>
        </div>
        <br />
      </div>
    )
  }
}

/* A travel item. Props are:
    - via: the title of the travel item
    -
*/
class TravelItem extends Component {
  constructor(props) {
    super(props)
  }
}

/* An accommodation link. Props are:
    - url: the url to link
    - title: the text for the url
 */
class AccommodationLink extends Component {
  constructor(props) {
    super(props);
    // this.props.description = ('description' in props) ? props.description : ''
  }
  render() {
    return(
      <a href={this.props.url}>{this.props.title}</a>
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
  constructor(props) {
    super(props)
    // this.props.links is going to be an array
  }
  render() {
    return(
      <div>
        {this.props.links.map(link => {
          return (
            <span>
              <AccommodationLink url={link.url} title={link.title}/><br/>
            </span>
          )
        })}
        <span style={{fontFamily: 'PT Sans'}}>{this.props.description}</span>
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
  constructor(props) {
    super(props)
  }

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
    description: "The Driskill, an iconic Austin experience, is 0.2 miles from the venue, a four minute walk."
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


class Travel extends Component {
  render() {
    return(
      <div className="subwrap">
        <h2>Traveling to Austin</h2>
        <h3>By Air</h3>
        <div className="textblock">
          <p>
            Austin is serviced by the <b>Austin-Bergstrom International Airport
            </b> (airport code <b>AUS</b>), which is located about eight miles
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
          </p>
          <p>
            <a href="http://www.austintexas.gov/airport" target="_blank">
              Click here for the Austin-Bergstrom International Airport homepage
            </a>
          </p>
        </div>
        <br />
        <h3>By Automobile</h3>
        <div className="textblock">
          <p>
            Those driving into Austin will likely end up entering the city
            proper via the I-35, MoPac, or 183. All three of these routes become
            extremely backed up during rush hour, which is Monday-Friday <b>6:00-
            9:00 a.m.</b> and <b>4:00-7:00 p.m.</b>. We recommend planning your
            drive to avoid reaching Austin during these times, for your own sanity.
          </p>
          <p>
            <a href="http://www.statesman.com/traffic/" target="_blank">
              Click here to see current traffic conditions in Austin
            </a>
          </p>
        </div>
        <br />
        <h3>By Rail</h3>
        <div className="textblock">
          <p>
            In the unlikely event that you choose to make the journey to Austin
            by train, you'll be arriving at the Austin Amtrak station, which
            is conveniently located downtown. Taxis and rideshare are readily
            available downtown, and there are a number of bus stops in the
            immediate vicinity.
          </p>
          <p>
            <a href="https://www.amtrak.com/servlet/ContentServer?pagename=am/am2Station/Station_Page&code=AUS"
               target="_blank">
              Click here for the Amtrak Austin station information page
            </a>
          </p>
        </div>
        <br />
        <h3>By Teleportation</h3>
        <div className="textblock">
          <p>
            We have no advice for those teleporting to Austin, we just want to
            know how you're doing it.
          </p>
        </div>
        <br />
        <h2>Accommodations in Austin</h2>
        <h3>Conveniently Located</h3>
        <div className="textblock">
          <p>
            The number of hotels located in downtown Austin approaches the absurd;
            below are the ten hotels closest to the venue in descending order of
            proximity.
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
    )
  }
}


class Austin extends Component {
  render() {
    return(
      <div className="subwrap">
        <h2>Things to Do in Austin</h2>
        <div className="textblock">
          <p>
            Yes, there are a million things to do in Austin. Below are our
            a few of our favorites.</p>
          <br />
          <h3>Activities & Entertainment</h3>
          <a href="https://drafthouse.com/austin">
            <h4>Alamo Drafthouse Cinema</h4>
          </a>
          <p>
            Catch a movie at the Alamo Drafthouse Cinema, which has locations
            all around Austin and may be the best movie theater ever. Take
            special note of the Signature Series screenings.
          </p>
          <a href="http://austinot.com/austin-greenbelt-guide">
            <h4>Barton Springs Greenbelt</h4>
          </a>
          <p>
            Austin's weather is at its most obliging in April, perfect for taking
            a hike and a swim on the Barton Springs Greenbelt. The main trail is
            between seven and eight miles long, with a number of access points at
            various spots along its route. We recommend hiking at least a mile
            from any given access point to clear the swimming crowds. Swimming
            conditions vary based on rainfall, but <a href="http://www.greenbeltnow.com/">
            this website</a> provides
            up-to-date conditions for each of the several swimming holes along
            the spring.
          </p>
          <a href="http://www.zilkergarden.org/">
            <h4>Zilker Botanical Garden</h4>
          </a>
          <p>
            For a more sedate outdoor experience, check out the beautiful Zilker
            Botanical Garden, located just southwest of downtown.
          </p>
          <a href="http://www.elephantroom.com/">
            <h4>The Elephant Room</h4>
          </a>
          <p>
            Live jazz every night of the week. Music starts at 9:30 p.m., but get
            there early (9:00-9:15) for the best seats--seating is hard to come
            by after 10:00 or so on Fridays and Saturdays. This is our favorite
            going-out spot.
          </p>
          <a href="https://blantonmuseum.org/">
            <h4>Blanton Museum of Art</h4>
          </a>
          <p>
            There's nothing more welcome after walking in the Texas heat than the
            chilly, hyperregulated air of an art museum. The Blanton has a
            particularly diverse collection of Latin American art, and an impressive
            number of drawings and prints.
          </p>
          <a href="http://www.bookpeople.com/">
            <h4>BookPeople</h4>
          </a>
          <p>
            We love love love this large independent bookstore. The selection is
            vast and meticulously organized, and there are probably 60
            staff-recommended selections (indicated by note-card sized reviews
            affixed to the shelf) at any given time. Unlike most downtown locations,
            BookPeople has free parking, if you can find a space in their lot.
            While you're there, head across the street to Waterloo Records.
          </p>
          <br />
          <h3>Food & Drink</h3>
          <a href="http://torchystacos.com/">
            <h4>Torchy's Tacos</h4>
          </a>
          <p>
            You can't come to Austin and not have a taco. Torchy's has several
            locations around Austin and a new special every month. Do keep your
            eyes peeled, though, for little taco trucks around town. These minikin
            eateries, too many and various to enumerate here, often boast some
            of the best tacos in town.
          </p>
          <a href="http://pinthousepizza.com/">
            <h4>Pinthouse Pizza</h4>
          </a>
          <p>
            Amazing pizza, a wall full of beers on tap, and casual cafeteria-style
            seating. Like most Austin restaurants, this place can get pretty
            crowded at dinner time.
          </p>
          <a href="http://www.kome-austin.com/">
            <h4>Kome</h4>
          </a>
          <p>
            Moderately priced place with delicious home-style Japanese food. Not
            your typical Japanese restaurant.
          </p>
          <a href="http://uchiaustin.com/">
            <h4>Uchi</h4>
          </a>
          <p>
            If you're looking for a more upscale Japanese dining experience, we
            love Uchi and its sister restaurant, <a href="http://uchikoaustin.com/">
            Uchiko</a>. The food at both of these restaurants is beautifully
            presented, and the flavors are transcendent. Try something from their
            amazing sake menu.
          </p>
          <a href="http://easytigeraustin.com/">
            <h4>Easy Tiger</h4>
          </a>
          <p>
            Excellent beer selection, and a menu that ranges from salty snacks
            (think: housemade chex mix) to artisan sandwiches. The boards, which
            are wooden planks arrayed with an assortment of cheeses, sausages, etc,
            are a fantastic middle ground. If you don't have time to sit down for
            a drink, swing in to pick up a croissant to go.
          </p>
          <a href="https://www.dolcenevegelato.com/about-us/">
            <h4>Dolce Neve</h4>
          </a>
          <p>
            Real Italian gelato made with local ingredients. Words do this place
            no justice. Their cappuccinos are also perfect.
          </p>
          <br />
          <h3>Resources</h3>
          <p>
            Below are links to Austin visitor guides, as well as to information
            on getting around the city.
          </p>
          <a href="https://www.austintexas.org/">
            <h4>Visit Austin</h4>
          </a>
          <p>
            General guide to the city, packed with all the information you could
            ever want.
          </p>
          <a href="http://do512.com/">
            <h4>Do512</h4>
          </a>
          <p>
            Austin event listing website. Also check out the kid-friendly
            version, <a href="http://do512family.com/">Do512 family</a>.
          </p>
          <a href="https://www.capmetro.org/">
            <h4>CapMetro</h4>
          </a>
          <p>
            Capital Metro operates the city's bus system, and their website has
            everything you need to know about routes, fares, and passes.
          </p>
          <a href="http://www.rideaustin.com/#introducing-ride-austin">
            <h4>Ride Austin</h4>
          </a>
          <p>
            Austin's very own nonprofit rideshare company allows you to round up
            your fare to the nearest dollar and donate the difference to a local
            charity of your choice.
          </p>
          <a href="http://austinbcycle.com/">
            <h4>Austin B-cycle</h4>
          </a>
          <p>
            Ultra-convenient bicycle rental service in the downtown area.
          </p>
        </div>
        <br />
      </div>
    )
  }
}

function Registry() {
  return(
    <div>
      <p>This is the registry</p>
    </div>
  )
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(`state: ${this.state}`);
    return (
        <div id="content">
          <Route exact path="/registry" component={Registry} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/travel" component={Travel} />
          <Route exact path="/austin" component={Austin} />
        </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Main/>
          <Content/>
        </div>
      </Router>
    );
  }
}

export default App;
