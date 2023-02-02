import request from '.';

export function newArticle(params) {
  return request.get('/', params);
}
