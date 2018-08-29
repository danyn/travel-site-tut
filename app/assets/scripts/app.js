import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

const menu = new MobileMenu()

new RevealOnScroll('.feature', '80%');
new RevealOnScroll('.testimonial', '80%');

new StickyHeader();

