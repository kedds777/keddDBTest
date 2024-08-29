let userSchema = {
    accountId: "string",
    created: "date/time",
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
    videos: ["videoId"],
    subscribers: [User]
}

let videoSchema = {
    thumbnailImg: "BIN",
    public: "bool",
    binData: "BIN",
    uploaded: "date/time",
    uploadedBy: User,
    likes: "int",
    dislikes: "int",
    description: "string",
    channel: Channel,
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