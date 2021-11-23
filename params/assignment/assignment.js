const region = {
  city:'Hobbs',
  county:'Lea',
  state:{
    name: 'New Mexico',
    abbreviation:'NM'
  }
}

function getCityAndState({ location }) {
  const {city, state} = determineCityAndState(location);
  return {
    city,
    state: state.abbreviation
  }
}

// region에서 한가지 값만 제거하고 나머지는 그대로 유지하고 싶을 경우
function setRegion({location, ...details}){
  const {city, state} = determineCityAndState(location);
  return {
    city,
    state: state.abbreviation,
    ...details
  }
}

console.log(setRegion(region))