import axios from "axios";

export const LoginService = async (Username,Password,dispatchAuth) => {
    try{
        const res = await axios({
            method: 'post',
            url: '/api/auth/login',
            data: {
                username: Username,
                password: Password,
            }
          });
          if(res.status===200){
            dispatchAuth({
                type: "GET_USER_DETAILS",
                payload: res.data.foundUser,
              });
            console.log(res.data.foundUser)
            localStorage.setItem("token",res.data.encodedToken);
           
          }
    }
    catch(e){
        console.error(e);
    }
}
