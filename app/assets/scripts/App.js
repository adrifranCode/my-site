import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();

new RevealOnScroll($(".feature-item"), "85%");

new RevealOnScroll($(".section-title"), "70%");

new RevealOnScroll($(".testimonials"), "65%");

