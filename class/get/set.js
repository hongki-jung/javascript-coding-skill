class Coupon{
  constructor(price, expiration){
    this.price = price;
    this.expiration = expiration || '2주'
  }
  set halfPrice(price){
    this.price = price / 2;
  }

}







const coupon = new Coupon(5);
coupon.price;
// 5

coupon.halfPrice = 20;
coupon.price;
// 10

coupon.halfPrice;
// undefined

/**
 *  세터에 대응되는 게터가 없으면 이상한 문제가 생길 수 있습니다.
 *  위처럼 halfPrice에 값을 설정할 수 있는데
 *  halfPrice는 일반적인 속성처럼 보이지만 값을 가져올 수 없습니다.
 * 
 *  따라서 게터와 세터는 짝을 맞춰서 만드는 것이 좋습니다.
 */