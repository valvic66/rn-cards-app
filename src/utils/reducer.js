export const initialState = {
    persons: [
      {id: '1', firstName: 'Valentin', lastName: 'Micu', age: '20', color: 'green'},
      {id: '2', firstName: 'Victoria', lastName: 'Micu', age: '18', color: 'pink'},
      {id: '3', firstName: 'Andu', lastName: 'Micu', age: '10', color: 'blue'},
      {id: '4', firstName: 'Luca', lastName: 'Micu', age: '14', color: 'yellow'},
    ],
    
  }; 

export const reducer = (state, action) => {
  switch(action.type) {
    // case 'change_last_color':
    //   return {...state, lastColorUsed: action.payload};
    case 'sort_by_name_asc':
      const sortedPersonsByNameAsc = state.persons.sort((a, b) => a.firstName.localeCompare(b.firstName));
      
      return {...state, persons: sortedPersonsByNameAsc};
    case 'sort_by_name_dsc':
      const sortedPersonsByNameDsc = state.persons.sort((a, b) => b.firstName.localeCompare(a.firstName));
        
      return {...state, persons: sortedPersonsByNameDsc};
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

      return {...state, persons: personsCopy};
    default:
      return state;
  }
}