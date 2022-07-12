import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from "gatsby";

const EventsList = () =>{
    
    return(
        <div className="events__component">
        <h1>Events</h1>
        <div className="events__list">
            <StaticQuery
            query={graphql`query MyQuery {
                Comepass {
                  events {
                    eventDate
                    eventDescription
                    eventTitle
                    eventUrl
                    eventPhoto {
                      url
                    }
                  }
                }
              }`} 
              render={data=>(
                data.Comepass.events.map(event=>(
                    <div className="event__card">
                        <p className="events__card__title">
                            {event.eventTitle} 
                        </p>
                        <h3 className="events__card_date">
                            Data: {event.eventDate}
                        </h3>
                        <p className="events__card__description">
                            {event.eventDescription}
                        </p>
                        <a href={event.eventUrl} rel="noopener" class="event__card--info__button">
                            Więcej
                        </a>
                        
                        <img alt='event image' src={event.eventPhoto.url} className="event__card__image"/>
                    </div>
                ))
              )}
            /> 

        </div>
        </div>
    )
}


export default EventsList;