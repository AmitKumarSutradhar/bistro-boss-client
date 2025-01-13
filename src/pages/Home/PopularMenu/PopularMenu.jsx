import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [ menu ] = useMenu();

    const popular = menu.filter(item =>  item.category === "popular");
    console.table(popular);

    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter((item) => item.category === 'popular');
    //             setMenu(popularItems);
    //             console.log(popularItems);
    //         })
    // }, [])

    return (
        <section>
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"Check it out"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {
                    popular.map(item => <MenuItem 
                        key={item._id}
                        item={item}
                        ></MenuItem>)
                }
            </div>

        </section>
    );
};

export default PopularMenu;