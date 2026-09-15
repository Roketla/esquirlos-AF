import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Squirrel } from '../data/squirrels';

// Custom squirrel marker icon
const squirrelIcon = new L.DivIcon({
  html: '🐿️',
  className: 'squirrel-marker',
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

interface SquirrelMapProps {
  squirrel: Squirrel;
}

export default function SquirrelMap({ squirrel }: SquirrelMapProps) {
  return (
    <div className="rounded-xl overflow-hidden border-2 border-amber-300 shadow-inner">
      <MapContainer
        center={squirrel.mapCenter}
        zoom={squirrel.mapZoom}
        style={{ height: '350px', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {squirrel.regions.map((region, index) => (
          <Marker
            key={index}
            position={[region.lat, region.lng]}
            icon={squirrelIcon}
          >
            <Popup>
              <div className="text-center font-medium">
                🐿️ {region.name}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
