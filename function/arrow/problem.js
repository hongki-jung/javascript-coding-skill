const discounter = discount => {
  return price =>{
    return price * (1-discount);
  }
}

/**
 * 화살표함수는 다른 함수를 반환하는 함수인 고차함수를 만드는데 좋다
 * 고차함수는 그저 다른 함수를 반환하는 함수일 뿐!
 */
const tenPercentOff = discounter(0.1)
tenPercentOff(100);
// 90

