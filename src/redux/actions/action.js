
const addGood = (myID) => {
    return {
        type: 'ADD_GOOD_TO_CART',
        payload: {
            id: myID
        },
    }
}
export default addGood;