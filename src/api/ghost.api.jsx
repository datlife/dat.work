import qs from 'querystring';

class Ghost {
  constructor(host, clientID, clientSecret) {
    this.host = host;
    this.client_id = clientID;
    this.client_secret = clientSecret;
  }

  async get(endpoint, queries) {
    const URL = this.host + '/' + endpoint +'/'
    const params = '?' + qs.stringify({
        ...queries,
        client_id: this.client_id,
        client_secret: this.client_secret,
    })
    const response = await fetch(URL + params)
    const data = await response.json();
    return data;
  }
}

export default Ghost;