import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = { lat: 50.46658, lng: 30.4298847 };

export function GMap() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDw0dxTeow6LJTl6oGRfMP1PU4WmLKZV2I",
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
