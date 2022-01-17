// 험수를 반환하는 함수를 반환하는 함수
// store -> 리덕스 스토어 인스턴스 , action -> 디스패치된 액션
const loggerMiddleware = (store) => (next) => (action) => {
  // 미들웨어 기본 구조
  console.group(action && action.type); // log 그룹화
  console.log("이전 상태", store.getState());
  console.log("액션", action);
  next(action); // 다음 미들웨어 혹은 리듀서에 전달
  console.log("다음 상태", store.getState()); // 업데이트 된 상태
  console.groupEnd();
};

// const loggerMiddleware = function loggerMiddleware(store) {
//   return function(next) {
//     return function(action) {
//       // 미들웨어 기본 구조
//     }
//   }
// }

export default loggerMiddleware;
