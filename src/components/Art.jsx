import { goodLists, featureLists } from "../../constants/constants";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";

export const Art = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    useGSAP(() => {
        const start = isMobile ? "top 20%" : "top top";

        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#art",
                start: start,
                end: "bottom center",
                pin: true,
                scrub: 1.5,
            },
        });

        maskTimeline
            .to(".will-fade", {
                opacity: 0,
                stagger: 0.2,
                ease: "power1.out",
                y: 100,
            })
            .to(".masked-img", {
                scale: 1.3,
                maskPosition: "center",
                maskSize: "400%",
                duration: 1,
                ease: "power1.inOut",
            })
            .to("#masked-content", {
                opacity: 1,
                duration: 1,
                ease: "power1.inOut",
            });
    }, []);

    return (
        <section className="min-h-dvh w-full relative pt-20 px-8" id="art">
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:text-[20vw] text-8xl text-nowrap leading-none font-modern-negra text-center text-[#505050] mb-8 will-fade">
                The Art
            </h2>

            <div className="content abolute h-full bottom-0 flex md:flex-row flex-col justify-between md:mb-16 md:mt-0 mt-40 gap-10">
                <ul className="space-y-4 will-fade absolute pt-64 md:pt-0 md:bottom-8 left-8">
                    {goodLists.map((feature, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-2 md:w-64"
                        >
                            <img src="/images/check.png" alt="check" />
                            <p>{feature}</p>
                        </li>
                    ))}
                </ul>

                <div className="cocktail-img">
                    <img
                        src="/images/under-img.jpg"
                        alt="cocktail"
                        className="abs-center masked-img size-full object-contain"
                    />
                </div>

                <ul className="space-y-4 will-fade absolute bottom-8 md:left-auto md:right-8 left-8">
                    {featureLists.map((feature, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-start gap-2 w-64"
                        >
                            <img src="/images/check.png" alt="check" />
                            <p className="md:w-fit w-60">{feature}</p>
                        </li>
                    ))}
                </ul>

                <div className="masked-container">
                    <h2 className="will-fade">Sip-Worthy Perfection</h2>
                    <div id="masked-content">
                        <h3>Made with Craft, Poured with Passion</h3>
                        <p>
                            This isn’t just a drink. It’s a carefully crafted
                            moment made just for you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
