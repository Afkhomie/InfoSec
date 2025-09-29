import React, { useEffect, useRef, useState } from 'react';
import { Loader2, Globe } from 'lucide-react';

// Threat data with coordinates
const threatData = [
  { country: 'United States', attacks: 1247, lat: 39.8283, lng: -98.5795, severity: 'high' },
  { country: 'China', attacks: 892, lat: 35.8617, lng: 104.1954, severity: 'high' },
  { country: 'Russia', attacks: 756, lat: 61.5240, lng: 105.3188, severity: 'medium' },
  { country: 'Germany', attacks: 634, lat: 51.1657, lng: 10.4515, severity: 'medium' },
  { country: 'United Kingdom', attacks: 521, lat: 55.3781, lng: -3.4360, severity: 'medium' },
  { country: 'Japan', attacks: 445, lat: 36.2048, lng: 138.2529, severity: 'low' },
  { country: 'France', attacks: 398, lat: 46.2276, lng: 2.2137, severity: 'low' },
  { country: 'India', attacks: 356, lat: 20.5937, lng: 78.9629, severity: 'low' },
  { country: 'Brazil', attacks: 298, lat: -14.2350, lng: -51.9253, severity: 'low' },
  { country: 'Canada', attacks: 267, lat: 56.1304, lng: -106.3468, severity: 'low' }
];

interface ThreatMapProps {
  apiKey?: string;
}

const ThreatMap: React.FC<ThreatMapProps> = ({ apiKey }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!apiKey) {
      setIsLoading(false);
      return;
    }

    // Check if Google Maps is already loaded
    if (window.google && window.google.maps) {
      initMap();
      return;
    }

    // Load Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    // Global callback function
    (window as any).initMap = initMap;
    
    script.onerror = () => {
      setError('Failed to load Google Maps API');
      setIsLoading(false);
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      delete (window as any).initMap;
    };
  }, [apiKey]);

  const initMap = () => {
    if (!mapRef.current || !window.google) return;

    try {
      const newMap = new google.maps.Map(mapRef.current, {
        center: { lat: 20, lng: 0 },
        zoom: 2,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry.fill',
            stylers: [{ color: '#1a1a1a' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{ color: '#0a0a0a' }]
          },
          {
            featureType: 'landscape',
            elementType: 'geometry.fill',
            stylers: [{ color: '#1a1a1a' }]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#666666' }]
          },
          {
            featureType: 'road',
            elementType: 'geometry.fill',
            stylers: [{ color: '#2a2a2a' }]
          },
          {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#888888' }]
          }
        ],
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
      });

      setMap(newMap);
      setIsLoading(false);

      // Add threat markers
      threatData.forEach(threat => {
        const marker = new google.maps.Marker({
          position: { lat: threat.lat, lng: threat.lng },
          map: newMap,
          title: `${threat.country}: ${threat.attacks} attacks`,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: Math.max(8, Math.min(20, threat.attacks / 50)),
            fillColor: threat.severity === 'high' ? '#ef4444' : 
                      threat.severity === 'medium' ? '#f97316' : '#10b981',
            fillOpacity: 0.8,
            strokeColor: '#ffffff',
            strokeWeight: 2
          }
        });

        // Add info window
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="color: #ffffff; background: #1a1a1a; padding: 10px; border-radius: 8px; border: 1px solid #333;">
              <h3 style="margin: 0 0 8px 0; color: #60a5fa;">${threat.country}</h3>
              <p style="margin: 0; color: #d1d5db;">Attacks: <strong style="color: ${threat.severity === 'high' ? '#ef4444' : threat.severity === 'medium' ? '#f97316' : '#10b981'}">${threat.attacks}</strong></p>
              <p style="margin: 4px 0 0 0; color: #9ca3af; font-size: 12px;">Severity: ${threat.severity}</p>
            </div>
          `
        });

        marker.addListener('click', () => {
          infoWindow.open(newMap, marker);
        });
      });
    } catch (err) {
      setError('Failed to initialize map');
      setIsLoading(false);
    }
  };

  if (!apiKey) {
    return (
      <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg border border-border">
        <div className="text-center">
          <Globe className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground text-sm">Google Maps API key required</p>
          <p className="text-xs text-muted-foreground mt-1">Add VITE_GOOGLE_MAPS_API_KEY to .env</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-64 flex items-center justify-center">
        <div className="text-center">
          <div className="text-destructive mb-2">⚠️</div>
          <p className="text-muted-foreground text-sm">Failed to load map</p>
          <p className="text-xs text-muted-foreground mt-1">{error}</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-2" />
          <p className="text-muted-foreground text-sm">Loading threat map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full rounded-lg overflow-hidden relative">
      <div ref={mapRef} className="h-full w-full" />
    </div>
  );
};

export default ThreatMap;
