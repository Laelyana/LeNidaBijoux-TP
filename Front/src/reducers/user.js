const initialState = {
  email: '',
  password: '',
};

export default (state = initialState, action) => {

  switch(action.type){
      case 'CHANGE_USER_FIELD': // Ici, on utilise plutôt des const de même nom
          return {
              ...state,
          };
      default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
          return {
              ...state,
          };
  }

}
