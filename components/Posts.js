import Post from "./Post";

const posts = [
    {
        id: "123",
        username: "ruchip16",
        userImg: "https://links.papareact.com/ocw",
        Img: "https://links.papareact.com/ocw",
        caption: "Woww, insta clone in makinggg",
    },
    {
        id: "123",
        username: "ruchip16",
        userImg: "https://links.papareact.com/ocw",
        Img: "https://links.papareact.com/ocw",
        caption: "Woww, insta clone in makinggg",
    },
];

function Posts() {
    return (
        <div>
            {posts.map((post) => (
                <Post 
                   key={post.id}
                   id={post.id}
                   username={post.username}
                   userImg={post.userImg}
                   Img={post.Img}
                   caption={post.caption}     
                />
            ))}
        </div>
    );
}

export default Posts;
