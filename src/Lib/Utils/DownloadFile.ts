import { AxiosResponse } from "axios";

export function downloadFile(response: AxiosResponse){
  const headers = response.headers;
  const type = headers['content-type'];
  const fileName = headers['x-download'];
  const blob = new Blob([response.data], { type });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
}