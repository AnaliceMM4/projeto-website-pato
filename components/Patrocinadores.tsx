const Patrocinadores = () => {
    return (

        <section className="fixed-text">
            <h1 className="#patrocinadores" id="patrocinadores"> Patrocinadores </h1>

            {/* <div className="flex justify-center items-center h-screen">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-1/2 lg:w-1/3 p-2 flex justify-center items-center">
                        <img src="/utfpr.png" alt="Logo da UTFPR" className="w-full h-10vh m-4" />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-2 flex justify-center items-center">
                        <img src="/xpert.png" alt="Logo da Xpert" className="w-full h-auto" />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-2 flex justify-center items-center">
                        <img src="/atlasEletrodomesticos.png" alt="Logo da Atlas Eletrodomésticos" className="w-full h-auto" />
                    </div>
                </div>
            </div> */}

            {/* <div className="images md:w-1/2 p-4 flex flex-col items-center md:flex-row md:items-start">
                    <img src="/imagem-grupo.png" alt="" loading="lazy" className="max-w-full h-auto" />
                </div>

                <div className="images md:w-1/2 p-4 flex flex-col items-center md:flex-row md:items-start">
                    <img src="/imagem-grupo.png" alt="" loading="lazy" className="max-w-full h-auto" />
                </div>

                <div className="images md:w-1/2 p-4 flex flex-col items-center md:flex-row md:items-start">
                    <img src="/imagem-grupo.png" alt="" loading="lazy" className="max-w-full h-auto" />
                </div> */}

            {/* </div> */}
            <div className="logos-patrocinadores">
                <div className="flex justify-center items-center h-screen">
                    <div className="flex flex-wrap justify-center mx-4">

                        <div className="w-full md:w-1/2 lg:w-1/3 p-2 flex justify-center items-center  mb-4 lg:mb-0">
                            <img src="/utfpr2.png" alt="Logo da UTFPR" className="w-full h-auto flex-col" />
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-2 flex justify-center items-center  mb-4 lg:mb-0">
                            <img src="/xpert2.png" alt="Logo da Xpert" className="w-full h-auto flex-col" />
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-2 flex justify-center items-center  mb-4 lg:mb-0">
                            <img src="/atlasEletrodomesticos2.png" alt="Logo da Atlas Eletrodomésticos" className="w-full h-auto flex-col" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center h-screen">
                    <div className="flex flex-wrap justify-center mx-4">
                        <div className="w-full md:w-1/2 lg:w-1/3 p-2 flex justify-center items-center">
                            <img src="/injepro2.png" alt="Logo da Injepro" className="w-full h-auto flex-col" />
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-2 flex justify-center items-center">
                            <img src="/dako2.png" alt="Logo da Dako" className="w-full h-auto flex-col" />
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-2 flex justify-center items-center">
                            <img src="/disapar2.png" alt="Logo da Disapar" className="w-full h-auto flex-col" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};


export default Patrocinadores;
