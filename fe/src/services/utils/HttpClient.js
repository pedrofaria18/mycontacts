import delay from '../../utils/delay';
import APIError from '../../errors/APIError';

class HttpCLient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(path, options) {
    return this.makeRequest(path, { method: 'GET', headers: options?.headers });
  }

  post(path, options) {
    return this.makeRequest(path, {
      method: 'POST',
      headers: options?.headers,
      body: options?.body,
    });
  }

  put(path, options) {
    return this.makeRequest(path, {
      method: 'PUT',
      headers: options?.headers,
      body: options?.body,
    });
  }

  delete(path, options) {
    return this.makeRequest(path, { method: 'DELETE', headers: options?.headers });
  }

  async makeRequest(path, options) {
    await delay(500);

    const headers = new Headers();

    if (options.body) {
      headers.append('Content-type', 'application/json');
    }

    if (options.headers) {
      Object.entries(options.headers).forEach(([key, value]) => {
        headers.append(key, value);
      });
    }

    const response = await fetch(`${this.baseURL}${path}`, {
      method: options.method,
      body: JSON.stringify(options.body),
      headers,
    });

    let responseBody = null;

    const contentType = response.headers.get('Content-type');

    if (contentType?.includes('application/json')) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }

    throw new APIError(response, responseBody);
  }
}

export default HttpCLient;
