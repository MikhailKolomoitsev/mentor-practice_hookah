import axios from 'axios';
import {
  getAllTabacosRequest,
  getAllTabacosSuccess,
  getAllTabacosError,
} from './actions';

const URL = 'http://localhost:4343';

axios.defaults.baseURL = URL;

export const getAllTabacos = value => dispatch => {
  dispatch(getAllTabacosRequest());
  axios
    .get('/tabacos')
    .then(res => {
      console.log(res.data);
      dispatch(getAllTabacosSuccess(res.data));
    })
    .catch(err => {
      console.log(err);
      dispatch(getAllTabacosError(err));
    });
};
