import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from "gatsby";


const EventsList = (props) =>{
    
    return(
        <div className="events__component">
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
              render={data=>{
                if(props.limit==1){
                  return(
                    <div className="event__card" >
                            <p className="events__card__title">
                                {data.Comepass.events[0].eventTitle} 
                            </p>
                            <h3 className="events__card_date">
                                Data: {data.Comepass.events[0].eventDate}
                            </h3>
                            <p className="events__card__description">
                                {data.Comepass.events[0].eventDescription}
                            </p>
                            <a href={data.Comepass.events[0].eventUrl} rel="noopener" className="event__card--info__button">
                                Więcej
                            </a>
                            
                            <img alt='event image' src={data.Comepass.events[0].eventPhoto.url} className="event__card__image"/>
                        </div>
                  )
                }
                return(
                    data.Comepass.events.map( (event,i)=>(
                        <div className="event__card" key={i} >
                            <p className="events__card__title">
                                {event.eventTitle} 
                            </p>
                            <h3 className="events__card_date">
                                Data: {event.eventDate}
                            </h3>
                            <p className="events__card__description">
                                {event.eventDescription}
                            </p>
                            <a href={event.eventUrl} rel="noopener" className="event__card--info__button">
                                Więcej
                            </a>
                            
                            <img alt='event image' src={event.eventPhoto.url} className="event__card__image"/>
                        </div>
                    ))
                )
                
    }}
            /> 

        </div>
        </div>
    )
}


export default EventsList;