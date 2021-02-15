const initialState = {
  // différents propriétés / valeurs
};

export default (state = initialState, action) => {

  switch(action.type){
      case 'DO_SOMETHING': // Ici, on utilise plutôt des const de même nom
          return {
              ...state,
              newProperty: newValue,
          };
      default: // Si le reducer ne sait pas traiter l'action, il renvoie une copie du state
          return {
              ...state,
          };
  }

}
