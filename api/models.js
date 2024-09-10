let userSchema = {
    accountId: "string",
    created: "date/time",
    darkMode: "bool",
    searchHistory: ["string"],
    firstName: "string",
    lastName: "string",
    username: "string",
    email: "string",
    watchHistory: [Video],
    playlist: [Playlist],
    likedVideos: [Video],
    yourChannels: [Channel],
    following: [Channel],
    algorithmStuff: "uhhhhh"
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