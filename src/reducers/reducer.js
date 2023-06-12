// 초기 상태 정의
const initialState = {
  imageURL: "",
};

// 리듀서 함수 정의
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_IMAGE_URL":
      return {
        ...state,
        imageURL: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
