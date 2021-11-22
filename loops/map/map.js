
const band = [{
    name:'corbett',
    instrument:'guitar'
  },
  {
    name:'evan',
    instrument:'guitar'
  },
  {
    name:'sean',
    instrument:'bass'
  },
  {
    name:'brett',
    instrument:'drums'
  }
]

// function getInstrument(member){               //  기명함수방식 1
  // return member.instrument;
// }

// const instruments = band.map(getInstrument);  // 기명함수방식 2

const instruments = band.map(member => member.instrument) //익명 함수 방식 

console.log('instruments ',instruments)