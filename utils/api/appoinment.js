import axios from "axios";

export default {
  get: () => axios.get('https://intense-peak-21316.herokuapp.com/appointments'),
  remove: id => axios.delete('https://intense-peak-21316.herokuapp.com/appointments/' + id),
  post: values => axios.post('https://intense-peak-21316.herokuapp.com/appointments', values),
}



