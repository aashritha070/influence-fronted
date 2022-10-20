const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                user: null,
                isRetreiving: true,
                error: false,
            };

        case "LOGIN_NOT_DONE":
            return {
                user: null,
                isRetreiving: false,
                error: true,
            };
        case "LOGIN_DONE":
            return {

                user: action.payload,
                isRetreiving: false,
                error: false,

            };
        case "LOGOUT":
            return{
                user:null,
                isRetreiving:false,
                error:false,
            };
            default:
                return state;
      

    }
};

export default Reducer;