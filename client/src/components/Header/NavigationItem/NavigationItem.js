import style from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return (
        <li className="listItem">
            <a className={style.NavListItem}>{props.children}</a>
        </li>
    );
};

export default NavigationItem;