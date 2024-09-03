import React from "react";
import Card from "../../components/Card";
import {StaticImage} from "gatsby-plugin-image";
import Quote from "../../components/Quote";
import Stamp from "../../components/Stamp";

const CakeSection = () => {
    return (
        <div className="lg:flex items-center gap-2 md:gap-5">
            <div className="lg:basis-1/2 text-center py-4 lg:px-8 xl:px-12">
                <Card title={"Art of cakes"} subtitle={"we create delicious memories"}
                      description={"Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed."}>
                    <div className="px-2 md:px-4">
                        <div className="pt-6 md:pt-8 text-lg font-serif md:text-2xl font-bold">
                            Chef Cook
                        </div>
                        <div
                            className="flex flex-row content-center justify-center items-center gap-5 p-6 md:pt-11 text-2xl font-serif">
                            <div className="border-t border-b border-stone-300 my-4 p-2.5 basis-20 grow">Anita</div>
                            <div className="w-24 h-24 rounded-full overflow-hidden">
                                <StaticImage src={"./../../images/chief_avatar.jpg"} alt={"Anita the chief avatar"}/>
                            </div>
                            <div className="border-t border-b border-stone-300 my-4 p-2.5 basis-20 grow">Black-Blake
                            </div>
                        </div>
                        <Quote className="text-stone-500 leading-1">
                            <div className="text-amber-800">Some quote about pies & cakes. Or maybe about vampires?
                            </div>
                        </Quote>
                    </div>
                </Card>
            </div>
            <div className="lg:basis-1/2 relative">
                <div className="grid grid-cols-2 gap-4  py-4">
                    <StaticImage src="../../images/cakes_1.jpg" alt={"image of a cake"}
                                 className="after:absolute after:border-4 after:inset-2 after:border-white shadow shadow-slate-500"/>
                    <StaticImage src="../../images/cakes_2.jpg" alt={"image of a cake"}
                                 className="after:absolute after:border-4 after:inset-2 after:border-white shadow shadow-slate-500"/>
                    <StaticImage src="../../images/cakes_3.jpg" alt={"image of a cake"}
                                 className="after:absolute after:border-4 after:inset-2 after:border-white shadow shadow-slate-500"/>
                    <StaticImage src="../../images/cakes_4.jpg" alt={"image of a cake"}
                                 className="after:absolute after:border-4 after:inset-2 after:border-white shadow shadow-slate-500"/>
                </div>
                <div className="absolute inset-0">
                    <Stamp>
                        <div className="text-amber-500 text-center text-xl font-serif">
                            TASTES SO <br/> GOOD!
                        </div>
                    </Stamp>
                </div>
            </div>

        </div>
    );
};

export default CakeSection;