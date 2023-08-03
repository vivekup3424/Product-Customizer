//make a home page
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import {
    headContentAnimation,
    headContainerAnimation,
    headTextAnimation,
    slideAnimation,
} from "../config/motion";
export default function Home() {
    const snap = useSnapshot(state); //state management
    return (
        <AnimatePresence>
            {/* if on homepage render homepage data */}
            {snap.intro && (
                <motion.section className="home" {...slideAnimation("left")}>
                    <motion.header {...slideAnimation("down")}>
                        <img
                            src="../public/threejs.png"
                            alt="logo"
                            className="w-8 h-8 object-contain"
                        ></img>
                    </motion.header>
                    <motion.div
                        className="home-content"
                        {...headContainerAnimation}
                    >
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">
                                Let's <br className="xl:block hidden" />
                            </h1>
                        </motion.div>
                        <motion.div
                            {...headContentAnimation}
                            className="flex flex-col gap-5"
                        >
                            <p className="max-w-md font-normal text-base text-gray-600">
                                Create your unique and exclusive shirt with your
                                brand-new 3D customization tool.
                                <br className="xl:block hidden" />
                                <strong>Unleash Your Imagination</strong> and
                                define your style.
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    );
}
