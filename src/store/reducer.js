/*
 * @Descripttion:
 * @version:
 * @Author: xiaowu
 * @Date: 2020-03-07 16:19:36
 * @LastEditors: xiaowu
 * @LastEditTime: 2020-03-08 01:11:57
 */
const initialState = {
    loading:false,
    data: [{
            id: 1,
            title: 'Ant Design Title 1',
            read: false
        },
        {
            id: 2,
            title: 'Ant Design Title 2',
            read: false
        },
        {
            id: 3,
            title: 'Ant Design Title 3',
            read: false
        },
        {
            id: 4,
            title: 'Ant Design Title 4',
            read: false
        },
    ],
}

export default (state = initialState, {
    type,
    id
}) => {
    switch (type) {

        case "READBYID":
            var newState = JSON.parse(JSON.stringify(state));
            //由于是数组里是对象，所以forEach会改变原值
            newState.data.forEach((item)=>{
                if(item.id===id){
                    item.read = true;
                }
            });
            return newState;

        case "READALL":
            var newState = JSON.parse(JSON.stringify(state));
            //由于是数组里是对象，所以forEach会改变原值
            newState.data.forEach((item)=>{
                item.read = true;
            });
            return newState;
        case "START":
            return {...state,loading:true};
        case "FINISH":
            return {...state,loading:false};
            default:
                return state
    }
}