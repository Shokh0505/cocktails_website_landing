import { useGSAP } from "@gsap/react";
import gsap, { SplitText } from "gsap/all";

export const About = () => {
    useGSAP(() => {
        const textParagraph = SplitText.create(".text-p-about", {
            type: "words",
        });

        const scrollTriggerTl = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top center",
            },
        });

        scrollTriggerTl
            .from(textParagraph.words, {
                y: 100,
                duration: 1,
                ease: "expo.out",
                opacity: 0,
                stagger: 0.06,
            })
            .from(
                ".top-grid div, .bottom-grid div",
                {
                    duration: 1,
                    ease: "expo.out",
                    opacity: 0,
                    stagger: 0.06,
                },
                "-=0.5"
            );
    }, []);

    return (
        <section className="relative px-8" id="about">
            <div className="py-24 flex items-start justify-between">
                <div className="flex-1/2">
                    <button className="bg-white text-black rounded-full py-2 px-4 font-medium text-md block">
                        Best Cocktails
                    </button>
                    <div className="py-4 pt-12 font-modern-negra text-6xl text-p-about">
                        Where every detail <br /> matters -from muddle to <br />{" "}
                        garnish
                    </div>
                </div>
                <div className="w-[30rem] flex items-end justify-end flex-col">
                    <div className="text-lg leading-8">
                        Every cocktail we serve is a reflection of our obsession
                        with detail — from the first muddle to the final
                        garnish. That care is what turns a simple drink into
                        something truly memorable.
                    </div>
                    <div className="text-3xl mt-12 font-semibold text-start w-full">
                        <span className="text-yellow-400 text-5xl p-1">
                            4.5
                        </span>{" "}
                        /5
                    </div>
                    <div className="text-sm mt-4 w-full">
                        More than +12000 customers
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <div className="grid top-grid grid-cols-12 gap-4">
                    <div className="col-span-3 relative">
                        <img
                            src="/images/abt1.png"
                            className="w-full h-64 object-cover"
                        />
                        <div className="noisy"></div>
                    </div>
                    <div className="col-span-6 relative">
                        <img
                            src="/images/abt2.png"
                            className="w-full h-64 object-cover"
                        />
                        <div className="noisy"></div>
                    </div>
                    <div className="col-span-3 relative">
                        <img
                            src="/images/abt5.png"
                            className="w-full h-64 object-cover"
                        />
                        <div className="noisy"></div>
                    </div>
                </div>
                <div className="grid bottom-grid grid-cols-12 gap-4">
                    <div className="col-span-8 relative">
                        <div className="noisy" />
                        <img
                            src="/images/abt3.png"
                            className="w-full h-64 object-cover"
                            alt="about 4"
                        />
                    </div>
                    <div className="col-span-4 relative">
                        <div className="noisy" />
                        <img
                            src="/images/abt4.png"
                            alt="about 4"
                            className="w-full h-64 object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
