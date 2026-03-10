import axiosClient from '../../api/axiosClient';

export const reportService = {
  list: async () => {
    const { data } = await axiosClient.get('/reports');
    return data;
  },
  create: async (payload) => {
    const { data } = await axiosClient.post('/reports', payload);
    return data;
  },
};
