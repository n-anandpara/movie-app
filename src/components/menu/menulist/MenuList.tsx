import React, { useState } from "react";
import { Divider } from '@/components/materialUiComponents/MaterialUiComponents';
import MenuItem from "@/components/menu/menuitem/MenuItem";
import { mainMenuList, userMenuList, likeMenuList } from '@/types/menu_type';

/**
 * 
 * Component renders the navbar menu
 */
export default function MenuList() {
    const [activeMenu, setActiveMenu] = useState(mainMenuList[0].title);

    return (
        <>
            {
                [mainMenuList, likeMenuList, userMenuList].map((menuList, index) => {
                    return (
                        <div key={index} >
                            {
                                menuList.map(element => {
                                    return <MenuItem
                                                Icon={element.Icon}
                                                title={element.title}
                                                key={element.title}
                                                isActive={activeMenu === element.title}
                                                onMenuClick={setActiveMenu}
                                            />  
                                })
                            }
                            <Divider />
                        </div>
                    )
                })  
            }
        </>
    );
}
