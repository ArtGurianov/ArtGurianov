import Api from './Api';

export default {
  sendPictures (compositePictures) {
    return Api().post('GeneratePdf', compositePictures)
  }
}