import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importera FontAwesomeIcon här
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; // Importera den ikon du vill använda
import "./googlemapcomponent.css";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const position = {lat: 56.41791929362326, lng: 12.815500382050317 }; // Exempel: Stockholm

const GoogleMapComponent = () => {
    const [showInfo, setShowInfo] = useState(false);
  
    return (
        <div className="map-container">
            <div className="map-box">
                <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                    <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={13}>
                    {/* Marker */}
                    <Marker position={position} onClick={() => setShowInfo(true)} />
            
                    {/* InfoWindow (visas när man klickar på markören) */}
                    {showInfo && (
                        <InfoWindow position={position} onCloseClick={() => setShowInfo(false)}>
                        <div className="info-window">
                            <img src="./images/boden/bodenpappajason.jpg" alt="" />
                            <h3>Blast & Blad</h3>
                            <p>Grönsaksbod och Blomstersälvplock</p>
                        </div>
                        </InfoWindow>
                    )}
                    </GoogleMap>
                </LoadScript>
            </div>
            <div className="address-box">
                <h3>Öppettider</h3>
                 <p>Vardagar: 09:00 - 18:00</p>
                 <p>Helger: 10:00 - 16:00</p>
                 <h3>Hitta hit</h3>
                <div className="address-icon">
                 <FontAwesomeIcon icon={faMapMarkerAlt} className="icon"/>
                 <p>Karstorpsvägen 256 <br />269 42 BÅSTAD</p></div>
                 <p>Vi finns uppe på Hallansåsen mellan Båstad och Torekov. Under säsong har boden och självplocket öppet alla dagar. Ta med familj och vänner för en trevlig stund på landet. </p>
                
            <div>
          
        </div>
            </div>
        </div>
    );
  };
  
export default GoogleMapComponent;

