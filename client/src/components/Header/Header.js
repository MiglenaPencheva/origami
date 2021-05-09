import { Link } from 'react-router-dom';
import NavigationItem from './NavigationItem';
import style from './Header.module.css';

const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className="listItem"><img src="/white-origami-bird.png" alt="white origami" /></li>
                <Link to="/"><NavigationItem>Going to 1</NavigationItem></Link>
                <Link to="/"><NavigationItem>Going to 2</NavigationItem></Link>
                <Link to="/"><NavigationItem>Going to 3</NavigationItem></Link>
                <Link to="/"><NavigationItem>Going to 4</NavigationItem></Link>
                <Link to="/"><NavigationItem>Going to 5</NavigationItem></Link>
                <Link to="/"><NavigationItem>Going to 6</NavigationItem></Link>
                <Link to="/"><NavigationItem>Going to 7</NavigationItem></Link>
                <Link to="/"><NavigationItem>Going to 8</NavigationItem></Link>
                <Link to="/"><NavigationItem>Going to 9</NavigationItem></Link>
                <Link to="/"><NavigationItem>Going to 10</NavigationItem></Link>
                <Link to="/"><NavigationItem>Going to 11</NavigationItem></Link>
            </ul>
        </nav>
    );
};

export default Header;