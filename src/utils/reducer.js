export const initialState = {
    persons: [
      {id: '1', firstName: 'Vali', lastName: 'Micu', age: 20, color: 'green'},
      {id: '2', firstName: 'Victoria', lastName: 'Micu', age: 18, color: 'pink'},
      {id: '3', firstName: 'Andu', lastName: 'Micu', age: 10, color: 'blue'},
      {id: '4', firstName: 'Luca', lastName: 'Micu', age: 14, color: 'yellow'},
    ],
    lastColorUsed: '',
  }; 

export const reducer = (state, action) => {
  switch(action.type) {
    case 'change_last_color':
      return {...state, lastColorUsed: action.payload};
    case 'change_person':
      const { personId, firstName, lastName, age, color } = action.payload;
      const personsCopy = state.persons;

      personsCopy.forEach(person => {
        if(person.id === personId) {
          person.firstName = firstName;
          person.lastName = lastName;
          person.age = age;
          person.color = color;
        }
      })

      console.log(personsCopy);

      // console.log({...state, persons: personsCopy});
      return {...state, persons: personsCopy};
    default:
      return state;
  }
}