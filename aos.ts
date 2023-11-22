import AOS from 'aos';
import 'aos/dist/aos.css';

const initAOS = () => {
  AOS.init({
    // Configurações opcionais do AOS
    duration: 800,
    offset: 100,
    easing: 'ease-in-out',
  });
};

export default initAOS;
