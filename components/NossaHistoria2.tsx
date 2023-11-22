const NossaHistoria2 = () => {
  return (
    // <section className="fixed-text">
    //   <h1 className="#sobre" id="sobre">Projeto diferenciado, inovador e único!</h1>
    //   <div className="flex">
    //     <div className="w-1/2 p-4 content">
    //       <p>A Pato a Jato é uma equipe de eficiência energética da Universidade Tecnológica
    //         Federal do Paraná, Campus Pato Branco.
    //         <br /><br />
    //         Buscamos sempre algo a mais: uma nova maneira de perceber o crescimento educacional,
    //         pessoal e profissional.
    //         <br /><br />
    //         Nosso objetivo é tornar nossos membros profissionais capacitados. Eles não serão
    //         apenas especialistas preparados tecnicamente, mas, da mesma forma,
    //         gestores que terão excelentes habilidades
    //         de comunicação, liderança e capacidade
    //         de trabalhar em grupo.
    //       </p>
    //     </div>

    //     <div className="flex flex-col md:flex-row p-4 images">

    //       {/* <div className="w-1/2 p-4 images">  */}
    //       <img src="/foto-equipe.png" alt="" loading="lazy" className="imageEquipe" />

    //       <img src="/imagem-grupo.png" alt="" loading="lazy" />
    //     </div>
    //   </div>
    // </section>


    <section className="fixed-text bg-gray-200 m-8 p-8 md:p-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" id="sobre">Projeto diferenciado, inovador e único!</h1>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 p-4 flex justify-center items-center content">
          <p className="text-base md:text-lg">
            A Pato a Jato é uma equipe de eficiência energética da Universidade Tecnológica Federal do Paraná, Campus Pato Branco.
            <br /><br />
            Buscamos sempre algo a mais: uma nova maneira de perceber o crescimento educacional, pessoal e profissional.
            <br /><br />
            Nosso objetivo é tornar nossos membros profissionais capacitados. Eles não serão apenas especialistas preparados tecnicamente, mas, da mesma forma, gestores que terão excelentes habilidades de comunicação, liderança e capacidade de trabalhar em grupo.
          </p>
          {/*  md:flex-row  */}
          {/* <div className="md:w-1/2 p-4 flex flex-col items-center images">
            <img src="/foto-equipe.png" alt="" loading="lazy" className="max-w-full h-auto mb-4 md:mr-2" />
            <img src="/imagem-grupo.png" alt="" loading="lazy" className="max-w-full h-auto md:hidden" />
          </div> */}

          {/* <div className="md:w-1/2 p-4 flex md:flex-col items-center"> */}
          <div className="images md:w-1/2 p-4 flex flex-col items-center md:flex-row md:items-start">

            <img src="/foto-equipe.png" alt="" loading="lazy" className="max-w-full h-auto mb-4 md:mb-0 md:mr-4" />
            <img src="/imagem-grupo.png" alt="" loading="lazy" className="max-w-full h-auto" />
          </div>

        </div>
      </div>

    </section>


  );
};

export default NossaHistoria2;
