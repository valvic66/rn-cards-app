const personsApi = [
  {id: '1', firstName: 'Valentin', lastName: 'Micu', age: '20', color: 'green'},
  {id: '2', firstName: 'Victoria', lastName: 'Micu', age: '18', color: 'pink'},
  {id: '3', firstName: 'Andu', lastName: 'Micu', age: '10', color: 'blue'},
  {id: '4', firstName: 'Luca', lastName: 'Micu', age: '14', color: 'yellow'},
]

export const initialState = {
    persons: [
      {id: '1', firstName: 'Valentin', lastName: 'Micu', age: '20', color: 'green'},
      {id: '2', firstName: 'Victoria', lastName: 'Micu', age: '18', color: 'pink'},
      {id: '3', firstName: 'Andu', lastName: 'Micu', age: '10', color: 'blue'},
      {id: '4', firstName: 'Luca', lastName: 'Micu', age: '14', color: 'yellow'},
    ],
    personsBeforeFiltering: [],
  }; 
  
  export const reducer = (state, action) => {

  switch(action.type) {
    case 'sort_by_name_asc':
      const sortedPersonsByNameAsc = state.persons.sort((a, b) => a.firstName.localeCompare(b.firstName));
      
      return {...state, persons: sortedPersonsByNameAsc};
    case 'sort_by_name_dsc':
      const sortedPersonsByNameDsc = state.persons.sort((a, b) => b.firstName.localeCompare(a.firstName));
        
      return {...state, persons: sortedPersonsByNameDsc};
    case 'filter_by_age':
      const { minAge, maxAge } = action.payload;
      state.personsBeforeFiltering = state.persons;
      const filteredPersonsByAge = state.persons.filter((person) => {
        return Number(person.age) >= minAge && Number(person.age) <= maxAge;
      });
        
      return {...state, persons: filteredPersonsByAge};
    case 'reset_filters':
      return {...state, persons: state.personsBeforeFiltering}
    case 'reset_all':
      return {...state, persons: personsApi}
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

    case 'add_person':
      let maxId = state.persons.reduce((prev, person) => prev.id > person.id ? prev.id : person.id);
      let newId = Number(maxId);
      newId++;
      const newPerson = {id: newId.toString(), ...action.payload};
      state.persons.push(newPerson);

      return state;
    case 'delete_person':
      const { deletePersonId } = action.payload;

      const slicedPersons = state.persons.filter(person => person.id != deletePersonId);

      return {...state, persons: slicedPersons}; 
    default:
      return state;
  }
}