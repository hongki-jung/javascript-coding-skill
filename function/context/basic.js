
// 유효범위(scope)는 함수와 관련되어 있고,
// 문맥(context)은 객체와 연관되어 있다.

const validator = {
  message: '는 유효하지 않습니다. ',
  setInvalidMessage(field){
    return `${field} ${this.message}`
  }
}

validator.setInvalidMessage('도시')
console.log(validator.setInvalidMessage('도시'));