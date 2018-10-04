import qs from 'querystring';

const GHOST_PUBLIC_API = 'http://35.208.9.206/ghost/api/v0.1'
const client_id = 'ghost-frontend';
const client_secret = 'ec2e9f4fefe0';

class Ghost {
  async get(path, params) {
    const query = qs.stringify({...params, client_id,client_secret})
    const response = await fetch(`${GHOST_PUBLIC_API}/${path}?${query}`)
    const data = await response.json();
    return data;
  }

  async getPage(pageNumber){
    const page = await this.get('posts',
      { page: pageNumber, 
        limit: 3, 
        absolute_urls: true,
        filter: "author_id:1",
        fields: "slug,id,title,feature_image,custom_excerpt,published_at"})
    return page;
  }

  async getPost(postID){
    const page = await this.get(`posts/${postID}/`,
      { absolute_urls: true,
        fields: "html,title,feature_image,custom_excerpt,published_at"})
    return page;
  }
}

const ghostAPI = new Ghost();

export default ghostAPI;