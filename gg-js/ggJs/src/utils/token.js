const TOKEN_KEY = 'user'
const Token_id='id'

const getToken = () => localStorage.getItem(TOKEN_KEY)
const setToken = token => localStorage.setItem(TOKEN_KEY, token)
const clearToken = () => localStorage.removeItem(TOKEN_KEY)

const getId = () => localStorage.getItem(Token_id)
const setId = token => localStorage.setItem(Token_id, token)
const clearId = () => localStorage.removeItem(Token_id)

export { getToken, setToken, clearToken,getId,setId,clearId}