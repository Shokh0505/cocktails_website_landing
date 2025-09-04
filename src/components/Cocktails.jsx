import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cocktailLists, mockTailLists } from "../../constants/constants";

export const Cocktails = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true,
            },
        });

        tl.from(".left-leaf-c", { y: 200, x: -100 }, 0).from(".right-leaf-c", {
            x: 100,
            y: 200,
        });
    }, []);
    return (
        <section
            id="cocktails"
            className="flex flex-col justify-between md:flex-row px-8 pt-18 relative pb-[10rem]"
        >
            <div className="noisy" />
            <ul className="z-10 relative min-w-[20rem]">
                <h4 className="text-xl font-medium text-white-100 py-8">
                    Most popular cocktails
                </h4>
                {cocktailLists.map(({ name, country, detail, price }) => (
                    <li
                        key={name}
                        className="flex-between py-4 md:py-8 items-start"
                    >
                        <p>
                            <span className="font-modern-negra text-xl md:text-3xl text-amber-200">
                                {name}
                            </span>{" "}
                            <br /> {country} | {detail}
                        </p>
                        <p className="text:sm md:text-xl font-medium">
                            -{price}
                        </p>
                    </li>
                ))}
            </ul>

            <ul className="z-10 relative min-w-[20rem] md:mt-0 mt-24">
                <h4 className="text-xl font-medium py-4 md:py-8">
                    Most loved mocktails
                </h4>
                {mockTailLists.map(({ name, country, detail, price }) => (
                    <li key={name} className="flex-between items-start py-8">
                        <p>
                            <span className="font-modern-negra text-xl md:text-3xl text-amber-200">
                                {name}
                            </span>
                            <br /> {country} | {detail}
                        </p>
                        <p className="text:sm md:text-xl font-medium">
                            -{price}
                        </p>
                    </li>
                ))}
            </ul>

            <img
                src="/images/cocktail-left-leaf.png"
                alt="left-leaf-c"
                className="absolute left-leaf-c bottom-8 md:bottom-0 left-0 w-[8rem] h-auto md:w-auto"
            />
            <img
                src="/images/cocktail-right-leaf.png"
                alt="right-leaf-c"
                className="absolute right-leaf-c bottom-4 right-0 w-[8rem] h-auto md:w-auto"
            />
        </section>
    );
};
