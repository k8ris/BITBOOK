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
        if (type === 'video') { url = `${apiUrl}/VideoPosts/${id}` }
        else if (type === 'image') { url = `${apiUrl}/ImagePosts/${id}` }
        else if (type === 'text') { url = `${apiUrl}/TextPosts/${id}` }

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
    sendPost = (data) => {
        return fetch((`${apiUrl}/TextPosts`),
            {
                method: 'POST',
                headers: {
                    'key': apiKey,
                    'SessionId': sessionId,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data),
            })
    } 

    sendComment = (data) => {

        return fetch((`${apiUrl}/Comments`),
        {
            method: 'POST',
            headers: {
                'key': apiKey,
                'SessionId': sessionId,
                'content-type': 'application/json'
            },

            body: JSON.stringify(data),
        })

    }
<<<<<<< HEAD
    GetUsers = (userId) => {
=======


    GetUsers = () => {
>>>>>>> 25932efe05b4f6d6e731df9b9d9cd21801df8c4e
        return fetch((`${apiUrl}/users`),
            {
                method: 'get',
                headers: {
                    'key': apiKey,
                    'SessionId': sessionId
                }
            }).then(response => response.json()).then(data => data)
<<<<<<< HEAD
    }
    logIn = (email, password) => {
=======
    } 

    GetUser = (userId) => {
        return fetch((`${apiUrl}/users/${userId}`),
            {
                method: 'get',
                headers: {
                    'key': apiKey,
                    'SessionId': sessionId
                }
            }).then(response => response.json()).then(data => data)
    } 



    logIn = (data) => {
>>>>>>> 25932efe05b4f6d6e731df9b9d9cd21801df8c4e
        return fetch((`${apiUrl}/login`),
            {
                method: 'POST',
                headers: {
                    'key': '3F8C391',
                    'content-type': 'application/json',

                },

                body: JSON.stringify({
                    username: email,
                    password: password,
                })
                // }).then(response => response.json())
            })
    }
    GetComments = (id) => {
        return fetch((`${apiUrl}/Comments?postId=${id}`),
            {
                method: 'get',
                headers: {
                    'key': apiKey,
                    'SessionId': sessionId
                }
            }).then(response => response.json()).then(data => data)
    }
}
export default new FetchData();