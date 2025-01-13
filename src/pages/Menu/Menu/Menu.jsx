import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const offered = menu.filter(item => item.category === "offered");

    return (
        <div>
            <Helmet>
                <title>Bistro Boss Restaurant | Home</title>
            </Helmet>

            <Cover img={menuImg} title={"Our Menu"}></Cover>
            <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss "}></SectionTitle>

            {/* Offered Menu Itewm  */}
            <MenuCategory items={offered}></MenuCategory>

            {/* Dessert Menu Itewm  */}
            <MenuCategory items={dessert} title={"DESSERTS"} coverImg={dessertImg}></MenuCategory>
            
            {/* Pizzas Menu Itewm  */}
            <MenuCategory items={pizza} title={"pizzas"} coverImg={pizzaImg}></MenuCategory>
            
            {/* Salad Menu Itewm  */}
            <MenuCategory items={salad} title={"salad"} coverImg={saladImg}></MenuCategory>
            
            {/* Soup Menu Itewm  */}
            <MenuCategory items={soup} title={"soup"} coverImg={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;