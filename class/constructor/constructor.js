

class Coupon {
  constructor(price, expiration){
    this.price = price;
    this.expiration = expiration || '2주'
  }

}

const coupon = new Coupon(5);
coupon.price
// 5

console.log(coupon['expiration']);
// 2주

/*
다음 단계는 생성자 메서드를 생성하는 것입니다. 여기에 constructor()라고 이름붙이니다.
constructor()를 클래스에 추가할 때는 함수를 작성하는 문법과 비슷하지만 function 키워드 없이 작성합니다.
*/

