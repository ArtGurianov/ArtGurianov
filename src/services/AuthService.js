import Api from './Api';

export default {
  login (data) {
    return Api().post('auth', data)
  }
}