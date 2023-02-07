import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";
import Form from "react-bootstrap/Form";
import AutoComplete from "../planner_pages/autoComplete";
import Mycomponent from "../planner_pages/map";
import PlanComponents from "../planner_pages/planner_page";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { useNavigate } from "react-router-dom";


function BudgetCard({List1hook,updateList1Hook,List2hook,updateList2Hook,List3hook,updateList3Hook,List4hook,updateList4Hook}) {

  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };
  const navigate = useNavigate();
 
  function onclickHandle(){
    updateList1Hook([]);
    updateList2Hook([]);
    updateList3Hook([]);
    updateList4Hook([]);


    navigate('/plan-trip', { state: { lat:coordinates.lat ,lng: coordinates.lng,arr:[] } });

  }
  return (
    <div class="parent-bcard">
      <div class="transparent-box"></div>
      <div class="bcard-components">
        <div class="location card-sub-comp">

          <div>
          <img
            class="location-icon"
            src="https://cdn-icons-png.flaticon.com/512/17/17736.png"
          ></img>
          <h5 class="location-text">Location</h5>

          </div>
         

          <form >
          <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>

            <input {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
          </form>
        </div>
        

        <div class="date card-sub-comp">
        <div>
          <img
            class="location-icon"
            src="https://cdn-icons-png.flaticon.com/512/17/17736.png"
          ></img>
          <h5 class="location-text">Date</h5>

          </div>

          <Form.Control type="date" name='date_of_birth' />
        </div>


        <div class="guest card-sub-comp">
        <div>
          <img
            class="location-icon"
            src="https://cdn-icons-png.flaticon.com/512/17/17736.png"
          ></img>
          <h5 class="location-text">Guests</h5>

          </div>

          <form >
            <div class="form-group bg-tranparent">
              
              <input type="text" class="form-control guest-textbx bg-tranparent" id="usr" />
            </div>
          </form>
        </div>

      
        <div>
      <Button className='card-search-btn' variant="dark" onClick={onclickHandle} >Dark</Button> 
      </div>


      </div>

      

      
    </div>
  );
}

export default BudgetCard;
