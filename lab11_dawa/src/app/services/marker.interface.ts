export interface MarkerProperties {
    position: {
      lat: number;
      lng: number;
    },
    label: {
      color: string;
      text: string;
      fontSize: string;
      fontWeight: string;
    },
    title: string,
    info: string
  };