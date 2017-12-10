import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import Modal from './modules/Modal';
import $ from 'jquery';

var mobileMenu = new MobileMenu();

new RevealOnScroll($(".section-title"), "70%");

new RevealOnScroll($(".testimonials"), "65%");

var modal = new Modal();

