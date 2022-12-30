import  { reactive, readonly }  from   'vue' ;
import  { v4 as uuidv4 }  from   'uuid' ;

const state = reactive({ messages: [] })
const actions = {
    removeMessage(id) {
        state.messages = state.messages.filter(message => message.id !== id);
    },
    addMessage({type = 'default',content, autoClose = true, duration = 5000}) {
        const id = uuidv4();
        const messages = [{ id, content, type, autoClose, duration }, ...state.messages];
        state.messages = messages;
        if(autoClose) {
            let messageTimeOut = setTimeout(() => {
                actions.removeMessage(id),clearTimeout(messageTimeOut);
            }, duration);
        }
    },
    error(content, autoClose = true, duration = 5000) {
        actions.addMessage({ type: 'error', content, autoClose, duration });
    },
    success(content, autoClose = true, duration = 5000) {
        actions.addMessage({ type: 'success', content, autoClose, duration });
    },
    warning(content, autoClose = true, duration = 5000) {
        actions.addMessage({ type: 'warning', content, autoClose, duration });
    },
    info(content, autoClose = true, duration = 5000) {
        actions.addMessage({ type: 'info', content, autoClose, duration });
    },
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