// 화살표 함수를 이용하여 문맥(context)혼선을 피하라!!!!!!
// 화살표 함수를 이용하여 문맥(context)혼선을 피하라!!!!!!
// 화살표 함수를 이용하여 문맥(context)혼선을 피하라!!!!!!
// 화살표 함수를 이용하여 문맥(context)혼선을 피하라!!!!!!

const validator1 = {
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
 * 
 * 
 * 화살표 함수는 함수를 호출할 때 this바인딩을 새로 만들지 않습니다.
 * 화살표함수를 이용해서 map() 콜백을 다시 작성하면 의도대로 작동합니다.
 * 
 */

const validator = {
  message: '는 유효하지 않습니다',
  setInvalidMessage(...fields){
    const result = fields.map(field =>{ return `${field} ${this.message}`})
    return result
  }
}

validator.setInvalidMessage('도시','남자')

console.log(validator.setInvalidMessage('도시','남자'));
// [ '도시 는 유효하지 않습니다', '남자 는 유효하지 않습니다' ]

// 화살표함수는 이미 문맥이 있고 다른 함수 내부에서 이 함수를 사요아려고 할 때 유용합니다
// 그렇지만 새로운 this 바인딩을 설정할 필요가 있을 때는 문제가 됩니다.