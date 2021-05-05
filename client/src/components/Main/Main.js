import Post from '../Post';
import './Main.css';

const Main = ({ posts }) => {
    return (
        <main className="main-container">
            <div className="posts">
                {posts.map(x =>
                    <Post
                        key={x.id}
                        content={x.content}
                        author={x.author}
                    />
                )}
            </div>
        </main >
    );
};

export default Main;