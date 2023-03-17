import React, { useEffect, useState } from "react";
import { Rating } from "@mui/material";

function PlaceDetail({ place, map }) {
  // console.log(place);
  const [req, setReq] = useState(place);
  const [weekday, setWeekday] = useState([""]);
  const b =
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";

  // var b="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
  var request = {
    placeId: place.place_id,
    // fields: ['name', 'rating', 'formatted_phone_number', 'geometry']
  };

  useEffect(
    () => {
      const google = window.google;
      const service = new google.maps.places.PlacesService(map);
      service.getDetails(request, callback);

      function callback(result, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          setReq(result);
          console.log(result);

          result?.opening_hours?.weekday_text
            ? setWeekday(result.opening_hours.weekday_text)
            : setWeekday([""]);

          // console.log(result.opening_hours);
        }
      }
    },
    [place],
    []
  );

  //   console.log(req.opening_hours.weekday_text[0]);

  //   console.log(req.photos.getUrl());
  // var a=req.photos.getUrl;
  //   console.log(b);

  return (
    <div class="bordered-indigo  detail" style={{width:'50vw'}}>
      <div class="title">
        <h1>{place.name}</h1>
      </div>

      <div class="Image-div" style={{display:"flex"}}>
        
        <img
          class="main-img"
          src={req.photos ? req.photos[0].getUrl() : b}
          alt=""
        />
      </div>
      {req?.rating ? (
        <div class="rating border border-dark rounded">
          {req?.rating ? <h3>{req.rating}</h3> : ""}
          {req?.rating ? (
            <div style={{display:'flex',justifyContent:'space-between'}} >
               <Rating
              name="half-rating-read"
              value={req.rating ? req.rating : 0}
              precision={0.1}
              readOnly
            />

            <p>{req?.user_ratings_total} ratings</p>

            </div>
           
            
          ) : (
            ""
          )}
        </div>
      ) : (
        <div></div>
      )}

     
      {weekday
        ? weekday.map((e) => {
            return <p class="weekday">{e}</p>;
          })
        : ""}
      {/* </div> */}

      <div class="review">
        {req?.reviews ? <h3>Customer Reviews</h3> : ""}

        {req?.reviews?.map((e) => {
          {
            // console.log(e.profile_photo_url);
          }
          return (
            <div class="reviews">
              <div class="d-flex review-profile">
                <img
                  class="profile-img"
                  referrerpolicy="no-referrer"
                  src={
                    e?.profile_photo_url
                      ? e.profile_photo_url
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIwRBD9gNuA2GjcOf6mpL-WuBhJADTWC3QVQ&usqp=CAU"
                  }
                  alt=""
                />
                <h4 class="d-flex profile-name ">{e.author_name}</h4>
              </div>

              <p>{e.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlaceDetail;
