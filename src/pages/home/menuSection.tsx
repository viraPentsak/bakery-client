import React from "react";
import Card from "../../components/Card";
import {StaticImage} from "gatsby-plugin-image";
import { GoStar, GoStarFill  } from "react-icons/go";
import Carousel from "../../components/Carousel";

const MenuTimeCard = () => (
    <div
        className="
        sm:absolute right-0 top-0
        bg-white
        w-full
        p-8 font-serif font-bold text-leather-400 text-center
        flex flex-col gap-0.5 bg-mountains bg-right-top	bg-no-repeat
        max-w-[200px]
        shadow-2xl
        ">
        <span className="text-lg/none uppercase">Ready in </span>
        <span className="text-8xl/none text-straw-300">40</span>
        <span className="text-lg/none">min</span>
    </div>
);

const MenuCarousel = () => {
    return (
        <Carousel options={{align: 'start', loop: true}}
                  slideClassName="rounded-full overflow-hidden pb-[100%] sm:pb-[50%] md:pb-[33%] relative sm:basis-1/2 md:basis-1/3"
            slides={[
            <StaticImage src={"./../../images/cakes_1.jpg"} alt="cakes" className="absolute inset-3.5 rounded-full "/>,
            <StaticImage src={"./../../images/cakes_2.jpg"} alt="cakes" className="absolute inset-3.5 rounded-full "/>,
            <StaticImage src={"./../../images/cakes_3.jpg"} alt="cakes" className="absolute inset-3.5 rounded-full "/>,
            <StaticImage src={"./../../images/cakes_4.jpg"} alt="cakes" className="absolute inset-3.5 rounded-full "/>
        ]}/>
    )
}

const MenuSection = () => {
    return (
        <div className="max-w-screen-xl mx-auto md:flex flex-row justify-center">
            <div className="lg:basis-5/6 relative sm:pt-9 sm:pr-28 xl:flex flex-row ">
                <div className="grow bg-straw-950 mask-b-l-corner overflow-hidden relative
                min-h-72
                after:w-[50px] after:h-[50px] after:bg-white after:absolute after:left-0 after:bottom-0 after:shadow after:cursor-pointer">
                    <div className="absolute left-0 top-0 bottom-0 h-full after:absolute after:inset-0 after:bg-gradient-to-r after:from-straw-950/40 after:to-transparent">
                        <StaticImage alt={"Current menu item"}
                                     className="h-full"
                                     src={"./../../images/menu_image_1.jpg"}/>
                    </div>
                    <div className="absolute top-0 bottom-0 left-7 pl-0.5 flex flex-col gap-2 text-white justify-center text-xl" aria-hidden title="Rating: 4 out of 5">
                        <GoStarFill className="drop-shadow-2xl"/>
                        <GoStarFill className="drop-shadow-2xl"/>
                        <GoStarFill className="drop-shadow-2xl"/>
                        <GoStarFill className="drop-shadow-2xl"/>
                        <GoStar className="drop-shadow-2xl"/>
                    </div>
                </div>
                <div className="bg-white bg-windmill bg-no-repeat bg-right-bottom p-6 lg:p-10 2xl:px-12 basis-3/5">
                    <div className="sr-only">Rating: 4 out of 5</div>
                    <Card title="Tasty pancakes"
                          subtitle="season favourite"
                          description="Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus.">
                        <div className="pt-20 -mb-4">
                            <MenuCarousel/>
                        </div>
                    </Card>
                    <MenuTimeCard/>
                </div>

            </div>
        </div>
    );
};

export default MenuSection;