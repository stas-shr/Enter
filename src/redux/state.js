let state = {
    profilePage: {
        posts: [
            {id: 1, post: "Hello there", likesCount: 15},
            {id: 2, post: "I'm here", likesCount: 150},
            {id: 3, post: "I'm there", likesCount: 1500},
            {id: 4, post: "I'm everywhere", likesCount: 15000},
        ]
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: "Stas"},
            {id: 2, name: "Vlad"},
            {id: 3, name: "Lena"},
            {id: 4, name: "Katya"},
            {id: 5, name: "Misha"},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "yo"},
            {id: 4, message: "man, answer please"},
            {id: 5, message: "come on"},
        ]
    }
}

export default state