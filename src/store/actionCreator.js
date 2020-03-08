/*
 * @Descripttion:
 * @version:
 * @Author: xiaowu
 * @Date: 2020-03-07 16:25:55
 * @LastEditors: xiaowu
 * @LastEditTime: 2020-03-08 01:12:43
 */
export default {
    readById(id){

        return (dispatch)=>{
            dispatch({
                type: "START",
            });
            setTimeout(() => {
                dispatch({
                    type: "READBYID",
                    id
                });
                dispatch({
                    type: "FINISH",
                });
            }, 1000);
    }

    },
    readAll(){
        return {
            type:"READALL"
        }
    }


}
