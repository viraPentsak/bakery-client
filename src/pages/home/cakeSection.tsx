import React from "react";
import Card from "../../components/Card";
import { StaticImage} from "gatsby-plugin-image";
import Quote from "../../components/Quote";

const cakeImages = [
    "@images/cakes_1.jpg", "./../../images/cakes_1.jpg", "./../../images/cakes_1.jpg", "./../../images/cakes_1.jpg", "@svg/weat_right.svg"];

const CakeSection = () => {
    return (
        <div className="md:grid grid-cols-2 gap-2">
            <div className="text-center px-8 lg:px-14">
                <Card title={"Art of cakes"} subtitle={"we create delicious memories"}
                      description={"Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed."}>
                    <div className="py-6 md:py-11 text-lg font-serif md:text-2xl font-bold">
                        Chef Cook
                    </div>
                    <div className="flex flex-row content-center justify-center items-center gap-5 p-6 text-2xl font-serif">
                        <div className="border-t border-b border-stone-300 my-4 p-2.5 basis-20 grow">Anita</div>
                        <div className="w-24 h-24 rounded-full overflow-hidden">
                            <StaticImage src={"./../../images/chief_avatar.jpg"} alt={"Anita the chief avatar"}/>
                        </div>
                        <div className="border-t border-b border-stone-300 my-4 p-2.5 basis-20 grow">Black-Blake</div>
                    </div>
                    <Quote  className="text-stone-500">
                        <div className="text-amber-800">Some quote about pies & cakes. Or maybe about vampires?</div>
                    </Quote>
                </Card>
            </div>
            <div className="relative">
                <div className="grid grid-cols-2 gap-4 ">
                    <StaticImage src="../../images/cakes_1.jpg" alt={"image of a cake"} className="h-full"/>
                    <StaticImage src="../../images/cakes_2.jpg" alt={"image of a cake"} className="h-full"/>
                    <StaticImage src="../../images/cakes_3.jpg" alt={"image of a cake"} className="h-full"/>
                    <StaticImage src="../../images/cakes_4.jpg" alt={"image of a cake"} className="h-full"/>
                </div>
            </div>

        </div>
    );
};

export default CakeSection;