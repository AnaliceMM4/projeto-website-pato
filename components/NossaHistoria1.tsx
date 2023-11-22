import { useEffect } from "react";
import initAOS from '../Aos';

const NossaHistoria1 = () => {
  useEffect(() => {
    initAOS();
  }, []);
  return (

    <section className="fixed-text">
      <h1 className="#sobre" id="sobre" data-aos="fade-down">Nossa História </h1>
      {/* Aqui terá um imagem ou cards contando a história 
      cards*/}
    </section>
  );
};

export default NossaHistoria1;
