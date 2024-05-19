import { baseUrl } from '@/Services/BaseUrl/index';

const dataTotalQualityCheckChart = async (queryParams:{Type:string, Start:string, End:string} , token?: string) => {
  return baseUrl.get(`/api/monitoring-system/ok`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
const dataRepairChart = async (queryParams:{Type:string, Start:string, End:string}, token?: string) => {
  return baseUrl.get(`/api/monitoring-system/ng`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
const dataCompairActualAndOvertimeChart = async (queryParams:{Type:string, Start:string, End:string}, token?: string) => {
  return baseUrl.get(`/api/monitoring-system/ok`, {
    params: queryParams,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const ExampleService = {
    dataTotalQualityCheckChart,
    dataRepairChart,
    dataCompairActualAndOvertimeChart
};

export default ExampleService;
