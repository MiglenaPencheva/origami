/* eslint-disable eqeqeq */
import { useState } from 'react';
import MenuItem from './MenuItem';
import { MENU_ITEMS } from './MenuConstants';

import style from './Menu.module.css';


const Menu = ({ onMenuItemClick }) => {
    const [ currentItem, setCurrentItem ] = useState();

    const menuItemClickHandler = (id) => {
        setCurrentItem(id);
        onMenuItemClick(id);
    };

    return (
        <aside className={style.menu}>
            {MENU_ITEMS.map(x =>
                <MenuItem
                    key={x.id}
                    id={x.id}
                    isSelected={x.id == currentItem}
                    onClick={menuItemClickHandler}
                >
                    {x.text}
                </MenuItem>
            )}
        </aside>
    );
};

export default Menu;