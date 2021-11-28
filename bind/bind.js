function sayMessage(){
  return this.message;
}

const alert = {
  message : '위험해!'
}

const sayAlert = sayMessage.bind(alert);
console.log(sayAlert())

/**
 * 
 * bind() 메서드를 이용하면 문맥을 명시적으로 정할 수 있습니다. 함수에서 this로 연결할 곳을 명시적으로
 * 정하기 때문에 this로 참조된 곳을 항상 알 수 있습니다.
 * 
 */