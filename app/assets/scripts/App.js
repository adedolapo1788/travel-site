import RevealOnScroll from "./modules/RevealOnScroll";
import MobileMenu from "./modules/MobileMenu";
import $ from "jquery";
import StickyHeader from "./modules/StickyHeader";

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'),"85%");
new RevealOnScroll($('.testimonial'),"60%");
var stickyheader = new StickyHeader();
