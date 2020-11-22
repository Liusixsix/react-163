const devBaseURL = "/";
const proBaseURL = "http://123.57.176.198:3000";
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT:number = 5000

