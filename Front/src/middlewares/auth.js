import axios from "axios";
import { LOG_IN } from "../actions/user";

export default (store) => (next) => (action) => {
  console.log('auth branché')
  switch (action.type) {
    case LOG_IN:{
      const { email, password } = store.getState().user; 
      axios.get(
        'http://0.0.0.0:8000/api/users',
        {
          email,
          password,
        },
        ).then((response) => {
          console.log(response.data)
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
