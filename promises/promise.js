/**
 * 
 * 프로미스는 
 * 비동기 작업을 전달받아서 응답에 따라 두 가지 메서드 중 하나를
 * 호출하는 객체입니다.
 * 
 * 프로미스는 비동기 작업이 성공할 경우 then() 메서드에 결과를 넘겨줍니다.
 * 
 * 비동기 작업에 실패하거나 거부되는 경우에는 catch() 메서드를 호출합니다.
 * 
 * then()과 catch()메서드에는 모두 함수를 인수로 전달합니다. 이때 두 메서드에 
 * 인수로 전달되는 함수에는 비동기 작업의 결과인 응답만이 인수로 전달됩니다.
 * 
 * 프로미스는 두 개의 인수, resolve()와 reject()를 전달받습니다.
 * resolve()는 코드가 의도대로 동작했을 때 실행됩니다.
 * resolve()가 호출되면 then()메서드에 전달된 함수가 실행됩니다.
 */

function getUserPreferences(){
  const preferences = new Promise((resolve, reject) =>{
    resolve({
      theme: 'dusk'
    });
  });
  return preferences;
}


// 아래 예제는 비동기 작업이 성공한 경우에 
// then() 메서드를 이용해서 코드를 호출하는 경우입니다.

getUserPreferences()
  .then(preferences =>{
    console.log(preferences.theme);
  });
// 'dusk'


