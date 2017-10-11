import Api from './Api';

export default {
  getItems (type) {
    Api().get('get_'+ type +'_items').then(function (res) {
      return res.data;
    });
  }
};