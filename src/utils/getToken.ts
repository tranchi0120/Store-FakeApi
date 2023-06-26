import { UserIfo } from "../redux/slice/AuthSlice";

const getToken = () => {
  const token = localStorage.getItem(UserIfo);
  if (token === null) {
    return ''
  }
  return token
}

export default getToken