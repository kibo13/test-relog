import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import IconMarker from './IconMarker.jsx'

function Map(props) {
    const startPosition = [43.238949, 76.889709]

    const eventHandlers = {
        mouseover: (event) => event.target.openPopup(),
        mouseout: (event) => event.target.closePopup(),
    }

    const markers = props.apps.map((app) => {
        return (
            <Marker
                key={app.id}
                position={[app.coords.lat, app.coords.long]}
                eventHandlers={eventHandlers}
                icon={IconMarker}
            >
                <Popup>
                    <div>
                        <span className="text-bold">Заказ: </span>
                        <span className="text-underline">#{app.id}</span>
                    </div>
                    <div>
                        <span className="text-bold">Клиент: </span>
                        {props.clients.find((client) => client.id === app.client_id).name}
                    </div>
                    <div>
                        <span className="text-bold">Цена: </span>
                        {app.price}
                    </div>
                </Popup>
            </Marker>
        )
    })

    return (
        <MapContainer center={startPosition} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <MarkerClusterGroup>{markers}</MarkerClusterGroup>
        </MapContainer>
    )
}

export default Map
