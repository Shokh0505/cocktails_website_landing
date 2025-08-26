import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants/constants";

export const Navbar = () => {
    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".nav",
                start: "bottom top",
            },
        });

        tl.fromTo(
            ".nav",
            {
                backgroundColor: "rgba(0, 0, 0, 0)",
                backgroundFilter: "blur(0px)",
            },
            {
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                backgroundFilter: "blur(10px)",
                duration: 0.5,
                ease: "power1.inOut",
            }
        );
    }, []);

    return (
        <nav className="nav py-4 fixed z-50 w-full">
            <a className="navLeft flex-between font-modern-negra">
                <img src="/images/logo.png" alt="logo" />
                <div className="text-3xl">Velvet Pour</div>
            </a>
            <div>
                <ul className="flex-between gap-8 text-lg">
                    {navLinks.map((link) => (
                        <li key={link.id} className="cursor-pointer">
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
