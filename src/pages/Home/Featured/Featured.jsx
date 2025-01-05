import SectionTitle from "../../../components/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <section className="featured-image bg-fixed">
            <div className="">
                <SectionTitle
                    heading={"FROM OUR MENU"}
                    subHeading={"Check it out"}
                ></SectionTitle>

                <div className="flex justify-center items-center  px-16 py-20">
                    <div className="">
                        <img src={featuredImg} alt="" />
                    </div>

                    <div className="text-left text-white">
                        <p>20 Aug, 2029</p>
                        <p className="uppercase">Where can i get some</p>
                        <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rem voluptatibus ea quo magnam, necessitatibus ipsum dolor! Beatae sint aliquam quisquam sed vel. Vitae optio maxime est molestias corrupti nulla saepe iusto assumenda explicabo ut incidunt doloremque, numquam quaerat in!</p>
                        <button className="btn btn-outline">Order Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;