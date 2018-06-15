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
    }

    getUsers = () => {
        return fetch((`${apiUrl}/profile`),
            {
                method: 'get',
                headers: {
                    'key': apiKey,
                    'SessionId': sessionId

                }
            }).then(response => response.json()).then(data => data);

    }


    getPost = (type, id) => {
        let url = ''
        if (type == 'video') { url = `${apiUrl}/VideoPosts/${id}` }
        else if (type == 'image') { url = `${apiUrl}/ImagePosts/${id}` }
        else if (type == 'text') { url = `${apiUrl}/TextPosts/${id}` }

        return fetch((url),
            {
                method: 'get',
                headers: {
                    'key': apiKey,
                    'SessionId': sessionId

                }
            }).then(response => response.json()).then(data => {
                return data
            });

    }

}

export default new FetchData();




// Post = (type, id) => {
//     if (type == 'video') { return `${apiUrl}/VideoPosts/${id}` }
//     else if (type == 'image') { return `${apiUrl}/ImagePosts/${id}` }
//     else if (type == 'text') { return `${apiUrl}/TextPosts/${id}` }
// }