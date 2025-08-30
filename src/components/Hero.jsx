import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

export const Hero = () => {
    const videoRef = useRef();

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
            .to(".left-leaf", { y: 200, ease: "circ.out" }, 0)
            .to(".right-leaf", { y: -200 }, 0);

        const tlVideo = gsap.timeline({
            scrollTrigger: {
                trigger: videoRef.current,
                start: "top top",
                endTrigger: "#cocktails",
                end: "bottom-=100 bottom",
                scrub: true,
                pin: true,
            },
        });

        videoRef.current.onloadedmetadata = () => {
            tlVideo.to(videoRef.current, {
                currentTime: videoRef.current.duration,
                ease: "none",
            });
        };
    }, []);

    return (
        <>
            <section id="home" className="relative">
                <div className="noisy z-20" />
                <h1 className="main_heading z-20 relative text-white-100">
                    Mojito
                </h1>

                <img
                    src="/images/hero-left-leaf.png"
                    alt="Leaf"
                    className="absolute left-0 top-[9rem] z-20 left-leaf"
                />
                <img
                    src="/images/hero-right-leaf.png"
                    alt="right"
                    className="absolute right-0 top-[4rem] z-20 right-leaf"
                />

                <div className="flex-between px-8 pt-12 z-20">
                    <div className="space-y-5 z-20">
                        <h4>Cool. Crisp. Classic</h4>
                        <p className="font-modern-negra text-6xl text-amber-200 text-p">
                            Sip the spirit <br /> of summer
                        </p>
                    </div>

                    <div className="z-20">
                        <p className="w-[16rem] text-p">
                            Every cocktail on our menu is a blend of premium
                            ingredients, creative flair, and timeless recipes —
                            designed to delight your senses.
                        </p>
                        <p className="text-xl mt-8 font-medium">
                            View Cocktails
                        </p>
                    </div>
                </div>
            </section>
            <div className="absolute inset-0 video w-full">
                <video
                    src="/videos/output.mp4"
                    ref={videoRef}
                    muted
                    playsInline
                    preload="true"
                    className="w-full"
                />
            </div>
        </>
    );
};
export default Hero;
