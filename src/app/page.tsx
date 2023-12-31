'use client'

import Image from 'next/image';
import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer'
import NossaHistoria1 from '../../components/NossaHistoria1'
import NossaHistoria2 from '../../components/NossaHistoria2'
import Prototipo from '../../components/Prototipo'
import AreasDeAtuacao from '../../components/AreasDeAtuacao'
import Patrocinadores from '../../components/Patrocinadores'
import Premiacoes from '../../components/Premiacoes';
import Destaques from '../../components/Destaques';
import Contato from '../../components/Contato';
import ImagemPrincipal from '../../components/ImagemPrincipal';

//import { useClient } from 'next/client';

export default function Home() {

  return (
    <>
      {/* <Nav/> */}
      {/* flex min-h-screen flex-col items-center justify-between p-24 */}
      <ImagemPrincipal />

      <NossaHistoria1 />
      <NossaHistoria2 />
      <Prototipo />

      <Destaques /> 
      {/* <AreasDeAtuacao /> */}
      <Patrocinadores />
      <Premiacoes /> 
      {/* <Contato />  */}


      <Footer />
    </>

  )
}


