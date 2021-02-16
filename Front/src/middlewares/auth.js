import axios from "axios";
import { LOG_IN, saveUserData } from "../actions/user";


export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN:{
      const { username, password } = store.getState().user; 
      axios.post(
        'http://0.0.0.0:8000/api/login_check',
        {
          username,
          password,
        },
        ).then((response) => {
          console.log(response.data.data)
          store.dispatch(saveUserData(response.data));
        }).catch((error) => {
          console.log('error');
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
