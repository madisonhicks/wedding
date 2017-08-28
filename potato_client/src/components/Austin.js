/**
 * Created by madisonhicks on 8/2/17.
 */

import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import ScrollableAnchor from 'react-scrollable-anchor';

/* An Austin link. Props are
    - url: the url to the link
    - title: the text of the url
*/
class AustinLink extends Component {
  render() {
    return(
      <a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.title}</a>
    )
  }
}

class AustinItem extends Component {
  render() {
    return(
      <div>
        {this.props.links.map(link => {
          return(
            <div className="titlebock">
              <AustinLink url={link.url} title={link.title}/> <br />
            </div>
          )
        })}
        <div className="textblock">
            <ReactMarkdown source={this.props.description}/>
        </div>
      </div>
    )
  }
}

class AustinContents extends Component {
  render() {
    return(
      <div>
        {this.props.activities.map(activity => {
          return(
            <div>
              <AustinItem
                links={activity.links}
                description={activity.description} />
              <br />
            </div>
          )
        })}
      </div>
    )
  }
}

const ACTIVITIES = [
  {
    links: [
      {url: "https://drafthouse.com/austin",
        title: "Alamo Drafthouse Cinema"}
      ],
    description: `Catch a movie at the Alamo Drafthouse Cinema, which has locations
            all around Austin and may be the best movie theater ever. Take
            special note of the Signature Series screenings.`
  },
  {
    links: [
      {url: "http://austinot.com/austin-greenbelt-guide",
        title: "Barton Springs Greenbelt"}
      ],
    description: `Austin's weather is at its most obliging in April, perfect for taking 
            a hike and a swim on the Barton Springs Greenbelt. The main trail is 
            between seven and eight miles long, with a number of access points at 
            various spots along its route. We recommend hiking at least a mile 
            from any given access point to clear the swimming crowds. Swimming 
            conditions vary based on rainfall, so [check online](http://www.greenbeltnow.com/) 
            before planning your hike.`
  },
  {
    links: [
      {url: "http://www.zilkergarden.org",
        title: "Zilker Botanical Garden"}
      ],
    description: `For a more sedate outdoor experience, check out the beautiful Zilker
            Botanical Garden, located just southwest of downtown.`
  },
  {
    links: [
      {url: "http://www.elephantroom.com/",
        title: "The Elephant Room"}
      ],
    description: `Live jazz every night of the week. Music starts at 9:30 p.m., but get
            there early (9:00-9:15) for the best seats--seating is hard to come
            by after 10:00 or so on Fridays and Saturdays. This is our favorite
            going-out spot.`
  },
  {
    links: [
      {url: "https://blantonmuseum.org/",
        title: "Blanton Museum of Art"}
      ],
    description: `There's nothing more welcome after walking in the Texas heat than the
            chilly, hyperregulated air of an art museum. The Blanton has a
            particularly diverse collection of Latin American art, and an impressive
            number of drawings and prints.`
  },
  {
    links: [
      {url: "http://www.bookpeople.com/",
        title: "BookPeople"}
      ],
    description: `We love love love this large independent bookstore. The selection is
            vast and meticulously organized, and there are probably 60
            staff-recommended selections (indicated by note-card sized reviews
            affixed to the shelf) at any given time. Unlike most downtown locations,
            BookPeople has free parking, if you can find a space in their lot.
            While you're there, head across the street to Waterloo Records.`
  },
]

const FOOD = [
  {
    links: [
      {url: "http://torchystacos.com/",
        title: "Torchy's Tacos"}
      ],
    description: `You say you're in Austin for our wedding, but we know the real 
            reason: tacos. Torchy's has several locations around Austin and a 
            new special every month. Also, keep your eyes peeled for little 
            taco trucks around town, which often have more authentic Mexican fare.`
  },
  {
    links: [
      {url: "http://pinthousepizza.com/",
        title: "Pinthouse Pizza"}
      ],
    description: `Amazing pizza, a wall full of beers on tap, and casual cafeteria-style
            seating. Like most Austin restaurants, this place can get pretty
            crowded at dinner time.`
  },
  {
    links: [
      {url: "http://www.kome-austin.com/",
        title: "Kome"}
      ],
    description: `Moderately priced place with delicious home-style Japanese food. Not
            your typical Japanese restaurant`
  },
  {
    links: [
      {url: "http://uchiaustin.com/",
        title: "Uchi"}
      ],
    description: `If you're looking for a more upscale Japanese dining experience, we
            love Uchi and its sister restaurant, [Uchiko](http://uchikoaustin.com). 
            The food at both of these restaurants is beautifully presented, and 
            the flavors are amazing. Try something from their sake menu.`
  },
  {
    links: [
      {url: "http://easytigeraustin.com/",
        title: "Easy Tiger"}
      ],
    description: `Excellent beer selection, and a menu that ranges from salty snacks
            (think: housemade chex mix) to artisan sandwiches. The boards, which
            are wooden planks arrayed with an assortment of cheeses, sausages, etc,
            are a fantastic middle ground. If you don't have time to sit down for
            a drink, swing in to pick up a croissant to go.`
  },
  {
    links: [
      {url: "https://www.dolcenevegelato.com/about-us/",
        title: "Dolce Neve"}
      ],
    description: `Real Italian gelato made with local ingredients. Words do this place
            no justice. Their cappuccinos are also perfect.`
  },
]

const RESOURCES = [
  {
    links: [
      {url: "https://www.austintexas.org/",
        title: "Visit Austin"}
      ],
    description: `General guide to the city, packed with all the information you could
            ever want.`
  },
  {
    links: [
      {url: "http://do512.com/",
        title: "Do512"}
      ],
    description: `Austin event listing website. Also check out the kid-friendly
            version, [Do512 Family](http://do512family.com).`
  },
  {
    links: [
      {url: "https://www.capmetro.org/",
        title: "CapMetro"}
      ],
    description: `Capital Metro operates the city's bus system, and their website has
            everything you need to know about routes, fares, and passes.`
  },
  {
    links: [
      {url: "http://www.rideaustin.com/#introducing-ride-austin",
        title: "Ride Austin"}
      ],
    description: `Austin's very own nonprofit rideshare company allows you to round up
            your fare to the nearest dollar and donate the difference to a local
            charity of your choice.`
  },
  {
    links: [
      {url: "http://austinbcycle.com",
        title: "Austin B-cycle"}
      ],
    description: `Ultra-convenient bicycle rental service in the downtown area.`
  },
];

export default class Austin extends Component {
  render() {
    return(
      <div>
          <ScrollableAnchor id={'austin'}>
            <div></div>
          </ScrollableAnchor>
          <div className='content'>
            <div className="subwrap">
              <h2>Things to Do in Austin</h2>
              <div className="textblock">
                <p>
                  There are a million things to do in Austin. Below are our
                  a few of our favorites.</p>
              </div>
                <h3>Activities & Entertainment</h3>
                <AustinContents activities={ACTIVITIES}/>

                <br />
                <h3>Food & Drink</h3>
                <AustinContents activities={FOOD}/>

                <br />
                <h3>Resources</h3>
                <p>
                  Below are links to Austin visitor guides, as well as to information
                  on getting around the city.
                </p>
                <AustinContents activities={RESOURCES}/>
              <br />
            </div>
          </div>
      </div>
    )
  }
}
