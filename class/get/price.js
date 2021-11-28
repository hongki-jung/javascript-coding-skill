const coupon = new Coupon(5);
coupon.price = 10;
coupon.priceText;
// '10$'

coupon.messageText
// ' 이 쿠폰은 2주 후에 만료됩니다. '
coupon.messageText;


/*
이렇게 하면 정보를 가져오기가 쉬워지지만, 누군가가 잘못된 값을 설정하는 것은
막을 수 없습니다. 이를 위해서는 세터도 생성해야 한다.

세터에 인수를 전달할 때는 괄호를 사용하지 않습니다.
그 대신 객체에 값을 설정하는 것처럼 등호를 사용해서 값을 전달합니다.

*/
