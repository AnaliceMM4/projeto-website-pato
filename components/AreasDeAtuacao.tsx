const AreasDeAtuacao = () => {
    return (

        <section className="fixed-text">
            {/* ajustar tamanho pra poder ver */}
            <h1 className="#areas-de-atuacao" id="areas-de-atuacao" data-aos="fade-down"> Áreas de Atuação </h1>
            {/* <div className="bg-gray-100 h-screen"> */}
            {/* <div className="grid grid-cols-2 gap-4 bg-gray-300 h-36"> */}
            {/* <div className="p-4 text-white bg-gradient-to-bl from-yellow-400">
            
                    </div> */}
            <div className="flex flex-col  md:flex-row">

                <div className="md:w-1/2 p-4 flex justify-center items-center content ">
                    <div className="md:w-1/2 p-4 flex items-center flex-col md:flex-row md:items-start">

                        <div className="flex items-center ">

                            {/* <img className="icon" src="reconhecimento.png" alt="" /> */}
                            <div className="md:w-1/2 p-4 flex items-center flex-col md:flex-row md:items-start contexto-areas">
                                <h4>Estrutura</h4>
                                <p className="text-black text-center font-poppins">
                                    Concepção, dimensionamento e detalhamento das estruturas do veículo,
                                    visando segurança, melhor aplicabilidade dos materiais e menor custo, tanto de execução como manutenção.</p>
                            </div>
                            {/* <div className=""> */}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6 icone-area">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 
                                15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 
                                5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 
                                1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5
                                 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909
                                 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                            </svg> */}


                            <button className="botao-com-borda">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 icone-area">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                                </svg>
                            </button>

                        </div>


                    </div>

                    <div className="md:w-1/2 p-4 flex items-center flex-col md:flex-row md:items-start">
                        {/* awuqi */}
                        <div className="flex items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="193" height="181" viewBox="0 0 193 181" fill="none">
                                <path d="M2.36224 47.3229C1.40392 26.0816 17.8428 8.00673 39.0796 6.95165L146.383 1.62064C167.62 0.565568 185.613 16.9298 186.571 38.1711L190.853 133.065C191.811 154.306 175.372 172.381 154.135 173.436L46.8313 178.767C25.5945 179.822 7.60181 163.458 6.64348 142.217L2.36224 47.3229Z" fill="white" stroke="black" stroke-width="3" />
                            </svg>
                            {/* <img className="icon" src="reconhecimento.png" alt="" /> */}
                            <div className="md:w-1/2 p-4 flex items-center flex-col md:flex-row md:items-start contexto-areas">
                                <h4>Powertrain</h4>
                                <p className="text-black text-center font-poppins font-normal">
                                    Estudo e desenvolvimento de melhorias e inovações.
                                    Realização de projetos e manutenções de todos os componentes do motor e transmissão do protótipo.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-between">
                <img src="imagem1.jpg" alt="Imagem 1" className="w-48 mb-4 md:w-auto md:mb-0"/>
                    <img src="imagem2.jpg" alt="Imagem 2" className="w-48 md:w-auto"/>
                    </div>

                </section >

                );
};


                export default AreasDeAtuacao;
