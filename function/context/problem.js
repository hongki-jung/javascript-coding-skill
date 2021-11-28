const validator = {
  message: '는 유효하지 않습니다. ',
  setInvalidMessage(...fields){
    return fields.map(function(field){
      return `${field} ${this.message}`
    })
  }
}

/**
 * 
 * 문제있는 코드! 
 * 함수를 호출할 때마다 호출되는 위치를 바탕으로 this 바인딩을 만든다
 * 처음 작성했던 setInvalidMessage()는 객체를 문맥으로 해서 호출되었다. 여기서는 this의 문맥이
 * 해당 객체였다. map() 메서드에 콜백함수로 전달한 경우에는 map()메서드의 문맥에서 호출되므로
 * 이 경우에는 this 바인딩이 validator 객체가 아닙니다. 이때의 문맥은 전역객체가 됩니다.
 * 
 * 브라우저에서는 window가 되고
 * node.js REPL환경에선 global이 될 것입니다. 
 * 
 * 즉, 콜백함수로 전달되면 message 속성에 접근할 수 없게 됩니다. 
 * 
 * 화살표함수를 이용하면 이런 문제를 해결할 수 있습니다.
 */