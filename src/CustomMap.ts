export interface Mappable {
  location: {
    lat: number
    lng: number
  }
  markerContent(): string
  color: string
}

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(mapDivId: string) {
    const mapDiv = document.getElementById(mapDivId)
    if (mapDiv) {
      this.googleMap = new google.maps.Map(mapDiv, {
        zoom: 1,
        center: { lat: 0, lng: 0 },
      })
    } else {
      console.error(`Элемент с ID '${mapDivId}' не найден.`)
    }
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      })

      infoWindow.open(this.googleMap, marker)
    })
  }
}
