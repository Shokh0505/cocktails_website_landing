import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

export const Hero = () => {
    const videoRef = useRef();
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    useGSAP(() => {
        const splitHeading = SplitText.create(".main_heading", {
            type: "chars",
        });

        gsap.from(splitHeading.chars, {
            y: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
        });

        const parLines = SplitText.create(".text-p", {
            type: "lines",
        });

        gsap.from(parLines.lines, {
            y: 100,
            duration: 1,
            opacity: 0,
            ease: "expo.out",
            stagger: 0.06,
            delay: 0.6,
        });

        const tlLeaf = gsap.timeline({
            scrollTrigger: {
                trigger: "#home",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        tlLeaf
            .to(".left-leaf", { y: -200 }, 0)
            .to(".right-leaf", { y: 200 }, 0);

        const end = isMobile ? "bottom bottom" : "bottom 90%";
        const start = isMobile ? "top center" : "top top";

        const tlVideo = gsap.timeline({
            scrollTrigger: {
                trigger: videoRef.current,
                start: start,
                endTrigger: "#cocktails",
                end: end,
                scrub: true,
                pin: true,
            },
        });

        videoRef.current.onloadedmetadata = () => {
            tlVideo.to(videoRef.current, {
                currentTime: videoRef.current.duration,
            });
        };
    }, []);

    return (
        <>
            <section id="home" className="relative min-h-dvh md:h-auto w-full">
                <div className="noisy z-20" />
                <h1 className="main_heading text-8xl md:text-[37vh] z-20 relative text-white-100 pt-[12rem]">
                    Mojito
                </h1>

                <img
                    src="/images/hero-left-leaf.png"
                    alt="Leaf"
                    className="absolute left-0 w-[8rem] h-auto md:w-auto top-[80vh] md:top-[9rem] z-20 left-leaf"
                />
                <img
                    src="/images/hero-right-leaf.png"
                    alt="right"
                    className="absolute right-0 w-32 md:w-auto h-auto top-6 md:top-[4rem] z-20 right-leaf"
                />

                <div className="flex-between px-8 pt-12 z-20">
                    <div className="space-y-5 z-20 hidden md:block">
                        <h4>Cool. Crisp. Classic</h4>
                        <p className="font-modern-negra text-6xl text-amber-200 text-p">
                            Sip the spirit <br /> of summer
                        </p>
                    </div>

                    <div className="z-20">
                        <div className="w-full md:w-[16rem] font-medium text-md text-p">
                            Every cocktail on our menu is a blend of premium
                            ingredients, creative flair, and timeless recipes —
                            designed to delight your senses.
                        </div>
                        <p className="text-xl mt-8 font-medium">
                            View Cocktails
                        </p>
                    </div>
                </div>
            </section>
            <div className="video absolute inset-0">
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    preload="auto"
                    src="/videos/output.mp4"
                    className="w-full md:h-[80%] h-1/2 object-bottom md:object-contain object-cover"
                />
            </div>
        </>
    );
};
export default Hero;
