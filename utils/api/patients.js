import axios from "axios";

export default {
  post: values => axios.post('https://intense-peak-21316.herokuapp.com/patients', values),
  show: id => axios.get('https://intense-peak-21316.herokuapp.com/patients/' + id),
  get: () => axios.get('https://intense-peak-21316.herokuapp.com/patients'),
  remove: id => axios.delete('https://intense-peak-21316.herokuapp.com/patients/' + id),
  put: id => axios.patch('https://intense-peak-21316.herokuapp.com/patients/' + id),
}
