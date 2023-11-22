const Prototipo = () => {
    return (

        <section className="" id="prototipo">
            <h1 className="#prototipo fixed-text" >Protótipo</h1>
            <div className="bg-linear-gradient ">
                <div className="">
                    <div className="flex flex-col md:flex-row md:w-1/2 p-4 justify-center items-center content icones">
                        <img src="prototipo2.png" className="image-popygua" alt="Imagem do Protótipo - Popygua" />
                    </div>

                    <div className="flex  flex-col  md:flex-row">

                        <div className="md:w-1/2 p-4 flex justify-center items-center content icones">

                        <div className="md:w-1/2 p-4 flex items-center flex-col md:flex-row md:items-start">

                            {/* <div className="md:w-1/2 p-4 flex flex-col md:flex-row md:items-start"> */}
                                

                                <div className="flex items-center icones-contexto">
                                    <img className="icon " src="tecnologia.png" alt="" />
                                    <p className="text-base md:text-lg">Tecnologia</p>
                                </div>
                                <div className="flex items-center icones-contexto" >
                                    <img className="icon" src="desempenho.png" alt="" />
                                    <p className="text-base md:text-lg">Desempenho</p>
                                </div>
                                <div className="flex items-center icones-contexto">
                                    <img className="icon" src="eficiencia-energetica.png" alt="" />
                                    <p className="text-base md:text-lg">Eficiência Energética</p>
                                </div>
                                <div className="flex items-center icones-contexto">
                                    <img className="icon" src="combustivel-alternativo.png" alt="" />
                                    <p className="text-base md:text-lg">Combustíveis Alternativos</p>
                                </div>

                                <div className="flex items-center icones-contexto">
                                    <img src="mini-prototipo.png"  className="w-full h-auto" alt="" />
                                </div>

                            </div>

                            <div className="md:w-1/2 p-4 flex items-center flex-col md:flex-row md:items-start">
                                <div className="flex items-center icones-contexto">
                                    <img className="icon" src="reconhecimento.png" alt="" />
                                    <p className="text-base md:text-lg">Prestígio</p>
                                </div>

                                <div className="flex items-center icones-contexto">
                                    <img className="icon" src="materiais-leves.png" alt="" />
                                    <p className="text-base md:text-lg">Materiais Leves</p>
                                </div>

                                <div className="flex items-center icones-contexto">
                                    <img className="icon" src="avanco.png" alt="" />
                                    <p className="text-base md:text-lg">Design Avançado</p>
                                </div>
                                <div className="flex items-center icones-contexto">
                                    <img className="icon" src="solucoes.png" alt="" />
                                    <p className="text-base md:text-lg">Soluções Sustentáveis</p>
                                </div>

                                <div className="flex items-center icones-contexto">
                                    <img src="mini-prototipo2.png" className="w-full h-auto" alt="" />
                                </div>

                            </div>
                            {/* 
                            <div className="md:w-1/2 p-4 flex flex-col md:flex-row md:items-start icones-contexto imgs-prototipo">
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>


        </section>
        // <section className="">
        //     <h1 className="#prototipo fixed-text" id="prototipo"> Protótipo </h1>
        //     <div className="">
        //     <img src="prototipo.png" alt="" />
        //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1279 828" fill="none">
        //             <path d="M0 0H1289V828H0V0Z" fill="url(#paint0_linear_143_2)" />
        //             <defs>
        //                 <linearGradient id="paint0_linear_143_2" x1="644.5" y1="0" x2="644.5" y2="828" gradientUnits="userSpaceOnUse">
        //                     <stop stop-color="#BEA022" />
        //                     <stop offset="1" stop-color="#BEA022" stop-opacity="0" />
        //                 </linearGradient>
        //             </defs>
        //         </svg>
        //     </div>
        //     <p></p>
        // </section>

    );
};


export default Prototipo;
