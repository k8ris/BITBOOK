import { apiUrl, apiKey, sessionId } from '../shared/const'

class FetchData {



    getPosts = () => {
        return fetch((`${apiUrl}/Posts`),
            {
                method: 'get',
                headers: {
                    'key': apiKey,
                    'SessionId': sessionId

                }
            }).then(response => response.json()).then(data => data);
        // console.log(data);
    }
}

export default new FetchData()