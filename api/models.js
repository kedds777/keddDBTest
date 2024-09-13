let userSchema = {
    accountId: "string",
    created: "date/time",
    firstName: "string",
    lastName: "string",
    username: "string",
    email: "string",
    password: "string",
    authToken: "string",
    refreshToken: "string",
    preferences: {
        darkMode: "bool",
        searchHistory: ["string"],
        watchHistory: ["string"],
        likedVideos: ["string"],
        yourChannels: ["string"],
        subscriptions: ["string"],
        algorithmStuff: "string"
    }
};

let playlistSchema = {
    
}

let channelSchema ={
    created: "date/time",
    name: "string",
    videos: [Video],
    subscribers: [User],
    channelName: "string",
}

let videoSchema = {
    thumbnailImg: "BIN", //
    public: "bool", //
    binData: "BIN", //
    uploaded: "date/time",
    likes: "int",
    dislikes: "int",
    description: "string",
    channel: Channel, //
    comments: [Comments],
    views: "int",
    tags: [Tags]
};

let tagsSchema = {
    
}

let commentSchema = {
    commentId: "string",
    created: "date/time",
    comment: "string",
    commentedBy: User,
    replies: [Comments],
    likes: "int",
    dislikes: "int"
}