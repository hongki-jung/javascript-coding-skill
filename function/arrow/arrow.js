
// 고차함수의 반환값은 다른 함수이므로, 화살표 함수의 기능을 활용해서 return
//을 직접 장성하지 않고 중괄호 없이 함수를 반환할 수 있습니다

const discounter = discount => price => price * (1 - discount);

const tenPercentOff = discounter(0.1)

tenPercentOff(100)