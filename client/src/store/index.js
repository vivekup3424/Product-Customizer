import { proxy } from "valtio";

const state = proxy({
    intro: true, //are we on the homepage
    color: "#EFBD48",
    isLogoTexture: true, //are we currently displaying the logo of the item
    isFullTexture: false,
    logoDecal: "./threejs.png",
    fullDecal: "./threejs.png",
});

export default state;
