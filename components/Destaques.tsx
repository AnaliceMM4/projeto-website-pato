const Destaques = () => {
    return (
        <section className="bg-cover bg-center h-screen flex items-center">

            <div className="destaque w-full flex text-center space-y-4 ">
                <ul className=" flex flex-row items-center align-item justify-center">
                    <li className="flex flex-col items-center m-36">
                        <h1>13</h1>
                        <p>Anos de História</p>
                    </li>
                    <li className="flex flex-col items-center m-36">
                        <h1>767,9</h1>
                        <p>Km/L de Etanol</p>
                    </li>
                    <li className="flex flex-col items-center m-12">
                        <h1>11</h1>
                        <p>Competições</p>
                    </li>
                    <li className="flex flex-col items-center m-12">
                        <h1>13</h1>
                        <p>Prêmios Conquistados</p>
                    </li>
                </ul>
            </div>
        </section>

    );
};

export default Destaques;
