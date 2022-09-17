import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { LoggerService } from '@/infra/logger/logger.service';

@Injectable()
export class HttpService {
  private logger = LoggerService;

  async post<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    try {
      const response = await axios.post(url, data, {
        ...config,
      });

      return response;
    } catch (error) {
      this.logger.error(
        `Ocorreu um erro ao realizar a requisição: ${JSON.stringify(error)}`,
      );
    }
  }

  async get<T>(
    url: string,
    query?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    try {
      const response = await axios.get(this.makeUrl(url, query), {
        ...config,
      });

      return response;
    } catch (error) {
      this.logger.error(
        `Ocorreu um erro ao realizar a requisição: ${JSON.stringify(error)}`,
      );
    }
  }

  async update<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    try {
      const response = await axios.put(url, data, {
        ...config,
      });

      return response;
    } catch (error) {
      this.logger.error(
        `Ocorreu um erro ao realizar a requisição: ${JSON.stringify(error)}`,
      );
    }
  }

  async delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    try {
      const response = await axios.post(url, {
        ...config,
      });

      return response;
    } catch (error) {
      this.logger.error(
        `Ocorreu um erro ao realizar a requisição: ${JSON.stringify(error)}`,
      );
    }
  }

  private makeUrl(url: string, params: any) {
    if (!params) return url;

    let _url = `${url}?`;
    const keys = Object.keys(params);

    keys.forEach((key, index) => {
      if (index === 0) {
        _url = `${_url}${key}=${params[key]}`;
      } else {
        _url = `${_url}&${key}=${params[key]}`;
      }
    });

    return _url;
  }
}
