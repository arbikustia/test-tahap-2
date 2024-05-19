const DEV = import.meta.env.DEV;
const urlDev = import.meta.env.VITE_BASE_URL_DEVELOPMENT;
const urlProduction = import.meta.env.VITE_BASE_URL;
const imageUrlProduction = import.meta.env.VITE_IMAGE_URL;
const imageUrlDevelopment = import.meta.env.VITE_IMAGE_URL_DEVELOPMENT;
const SignalRProduction = import.meta.env.VITE_SIGNALR;
const SignalRDevelopment = import.meta.env.VITE_SIGNALR_DEVELOPMENT;


export const SignalRUrl = DEV ? SignalRDevelopment : SignalRProduction;
export const config = {
  baseUrl: DEV ? urlDev : urlProduction,
  imageUrl: DEV ? imageUrlDevelopment : imageUrlProduction
};
    