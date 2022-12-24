import  { reactive, readonly }  from   'vue' ;
import  { v4 as uuidv4 }  from   'uuid' ;

const state = reactive({ messages: [] })
const actions = {
    addMessage({content, type = 'default', autoClose = true, duration = 5000}) {
        const id = uuidv4();
        const messages = [{ id, content, type, autoClose, duration }, ...state.messages];
        state.messages = messages;
        if(autoClose) {
            let messageTimeOut = setTimeout(() => {
                actions.removeMessage(id),clearTimeout(messageTimeOut);
            }, duration);
        }
    },
    removeMessage(id) {
        state.messages = state.messages.filter(message => message.id !== id);
    }
}

const getters = {
    getMessages() {
        return [...state.messages].slice(0, 5).reverse();
    }
}
const useMessages = () => {
    return {
        ...readonly(state),
        ...actions,
        ...getters
    }
}

export default useMessages;