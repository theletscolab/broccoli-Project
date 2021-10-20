import axios from 'axios'
const ENDPOINT = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth'

export const postForm = data => {
  return axios
    .post(
      ENDPOINT,
      { name: data.name, email: data.email },
      {
        validateStatus: status => status === 200 || status === 400
      }
    )
    .then(response => (response.status === 200 ? response : response.data.errorMessage))
    .catch(error => error.message)
}
