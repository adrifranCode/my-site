import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import Modal from './modules/Modal';
import $ from 'jquery';

var mobileMenu = new MobileMenu();

new RevealOnScroll($(".section-title"), "84%");

new RevealOnScroll($(".testimonials"), "83%");

var modal = new Modal();

