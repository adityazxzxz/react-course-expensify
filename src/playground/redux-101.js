import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type:'INCREMENT',
        incrementBy
    }
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type:'DECREMENT',
        decrementBy
    }
}

const resetCount = () => {
    return {
        type:'RESET'
    }
}

const setCount = ({ count }) => {
    return {
        type:'SET',
        count
    }
}


//state default count object = 0
const store = createStore((state = {count:0}, action) => {
    switch(action.type){
        case 'INCREMENT' :
            return {
                count:state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count:state.count - action.decrementBy
            }    
        case 'RESET':
            return {
                count:0
            }    
        case 'SET':
            return {
                count:action.count
            }    
        default:
            return state;     
    }
})

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:12}));
store.dispatch(resetCount());
store.dispatch(setCount({ count:200 }));

