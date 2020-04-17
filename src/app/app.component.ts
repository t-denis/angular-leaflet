import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('mapContainer', { static: true })
  private mapContainer: ElementRef;
  private map: L.Map;

  ngOnInit(): void {
    this.map = new L.Map(this.mapContainer.nativeElement);
    this.map.setView(new L.LatLng(0, 0), 2);

    const basemap = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    });
    this.map.addLayer(basemap);
  }
}
