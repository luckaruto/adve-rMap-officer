import { api, auth } from 'services/apis';
import { API } from '../apis/constants';

export class WardService {
  static async getWards() {
    try {
      const response = await api.get(`/api/v1/wards`, {
        headers: auth(),
      });

      if (response.status === 200 && response.data.data) {
        return response.data.data.content;
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async createWard(data, token) {
    try {
      const response = await api.post(`/api/v1/wards?name=${data.name}&district_id=${Number(data.districtId)}`, {}, {
        headers: auth(),
      });

      if (response.status === 200 && response.data.data) {
        return response.data.status;
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async editWard(id, data, token) {
    try {
      const response = await api.post(`/api/v1/wards/${id}?name=${data.name}&district_id=${Number(data.districtId)}`, {}, {
        headers: auth(),
      });

      if (response.status === 200 && response.data.data) {
        return response.data.status;
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async deleteWard(id, token) {
    try {
      const response = await api.delete(`/api/v1/wards/${id}`, {
        headers: auth(),
      });

      if (response.status === 200 && response.data.data) {
        return response.data.status;
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
