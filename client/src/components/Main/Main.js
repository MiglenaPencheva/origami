import Post from '../Post';
import style from'./Main.module.css';

const Main = ({ posts }) => {
    return (
        <main className={style['main-container']}>
            <div className={style.posts}>
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