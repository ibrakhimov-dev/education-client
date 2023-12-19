// import React, { useEffect, useState } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
// AIzaSyC_Ln2i1HiEWym1znk-AnsXogQqRe-0pDA

function SimpleMap() {
  const position = { lat: 41.332840868138945, lng: 69.2552864315435 };
  // const [lat, setLat] = useState(null);
  // const [lng, setLng] = useState(null);
  // console.log(lat, lng);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       setLat(position.lat);
  //       setLng(position.lng);
  //     },
  //     (error) => console.log(error)
  //   );
  // }, []);

  return (
    <APIProvider apiKey="AIzaSyC_Ln2i1HiEWym1znk-AnsXogQqRe-0pDA">
      <div style={{ height: "400px", width: "100%", marginTop: "20px" }}>
        <Map
          zoom={12}
          center={position}
          mapId={"da9902056e735de7"}

          // onClick={(e) => {
          //   setLat(e.detail.latLng.lat);
          //   setLng(e.detail.latLng.lng);
          // }}
        >
          <Marker position={position}></Marker>
        </Map>
      </div>
    </APIProvider>
  );
}

export default SimpleMap;
