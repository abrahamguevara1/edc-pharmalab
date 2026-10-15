'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function HomePage() {
  const secciones = [
    {
      id: 'metodos-analiticos',
      titulo: 'Métodos Analíticos',
      href: '/metodos-analiticos',
      imagen: '/portada-metodos-analiticos.jpeg',
      texto: `Métodos Analíticos: de la teoría a la confiabilidad de los resultados
A lo largo de mis 17 años de experiencia en la industria farmacéutica, he aprendido que un método analítico no es simplemente un procedimiento para obtener resultados: es una herramienta fundamental para garantizar la calidad, la seguridad y la eficacia de los medicamentos.
En esta sección abordaremos los principios, las estrategias y los retos que implica el desarrollo, la validación, la verificación y la optimización de métodos analíticos en el entorno farmacéutico. Exploraremos cómo transformar los conocimientos adquiridos en la formación académica en soluciones prácticas, confiables y técnicamente justificadas, alineadas con los requisitos regulatorios y las necesidades de la industria.
Desde la selección de las condiciones analíticas hasta la evaluación de parámetros de desempeño, profundizaremos en los aspectos científicos y técnicos que permiten demostrar que un método es adecuado para el propósito previsto. Analizaremos también cómo identificar oportunidades de mejora, resolver problemas durante la ejecución de los ensayos y optimizar procedimientos sin comprometer la integridad de los datos ni la confiabilidad de los resultados.
Mi objetivo es compartir conocimientos y experiencias que contribuyan a desarrollar un criterio analítico sólido, indispensable para quienes trabajan o desean incorporarse a las áreas de Control de Calidad, Desarrollo Analítico e Investigación y Desarrollo.
Porque en la industria farmacéutica, obtener un resultado no es suficiente: hay que demostrar que ese resultado es confiable, reproducible y científicamente defendible.`
    },
    {
      id: 'bpf',
      titulo: 'Buenas Prácticas de Fabricación (BPF)',
      href: '/bpf',
      imagen: '/portada-metodos-generales-analisis.jpeg',
      texto: `Buenas Prácticas de Fabricación (BPF): de la normativa a la práctica
En la industria farmacéutica, conocer la normativa es solo el primer paso; el verdadero reto consiste en interpretarla correctamente, comprender sus implicaciones y traducir sus requisitos en prácticas que garanticen la calidad, la seguridad y la eficacia de los medicamentos.
En esta sección abordaremos las Buenas Prácticas de Fabricación (BPF) desde una perspectiva técnica, crítica y aplicada, tomando como referencia la NOM-059-SSA1, las guías del Consejo Internacional para la Armonización (ICH) y las normas internacionales ISO pertinentes para la industria farmacéutica.
A través de la explicación de requisitos, el análisis de casos, el debate técnico y la revisión de situaciones cotidianas de la industria, exploraremos cómo estos marcos normativos influyen en los sistemas de gestión de calidad, la documentación, el control de cambios, la gestión de riesgos, las desviaciones, las acciones correctivas y preventivas (CAPA), la validación de procesos y la integridad de los datos.
También analizaremos las dificultades que surgen durante su implementación, las interpretaciones que pueden generar controversia y los errores que comprometen el cumplimiento regulatorio. El propósito no es limitarse a conocer qué exige una norma, sino entender por qué existe cada requisito, cuándo aplica y cómo demostrar su cumplimiento de manera objetiva y documentada.
Desde mi experiencia de 17 años en la industria farmacéutica, considero que el cumplimiento de las BPF no debe reducirse a preparar documentos para una auditoría o responder a las observaciones de una autoridad sanitaria. Debe formar parte de la cultura de calidad de cada organización y reflejarse en las decisiones, los procesos y las responsabilidades de quienes participan en la fabricación y el control de los medicamentos.
Porque cumplir una norma significa mucho más que satisfacer un requisito: significa comprender su propósito, aplicarlo correctamente y generar evidencia de que la calidad se construye y se mantiene todos los días.`
    },
    {
      id: 'programacion',
      titulo: 'Programación',
      href: '/programacion',
      imagen: '/portada-programacion.jpeg',
      texto: `Programación aplicada a la industria farmacéutica: automatización para un laboratorio más eficiente
La industria farmacéutica requiere procesos cada vez más eficientes, trazables y confiables. Sin embargo, en muchos laboratorios de Control de Calidad, una parte importante del tiempo se destina a tareas repetitivas, cálculos manuales, captura de información, elaboración de registros y actividades administrativas que pueden optimizarse mediante herramientas informáticas.
En esta sección exploraremos cómo utilizar la programación para desarrollar aplicaciones que respondan a necesidades reales del laboratorio farmacéutico. El objetivo es transformar problemas cotidianos en soluciones tecnológicas capaces de simplificar operaciones, reducir tareas manuales, agilizar la gestión de información y mejorar la productividad del personal.
Desarrollaremos aplicaciones mediante código de programación, desde herramientas sencillas para automatizar cálculos, preparar soluciones y gestionar reactivos, hasta sistemas que faciliten la trazabilidad de muestras, el control de inventarios, la generación de reportes y la organización de actividades analíticas.
Abordaremos el desarrollo paso a paso, explicando la lógica de programación, la estructura del código y la implementación de cada herramienta, con ejemplos orientados a las necesidades de los profesionales químicos y farmacéuticos. No se trata únicamente de aprender a programar, sino de identificar oportunidades de mejora y construir soluciones funcionales sin perder de vista los requisitos técnicos y regulatorios del entorno farmacéutico.
Desde mi experiencia de 17 años en la industria farmacéutica, considero que la tecnología debe estar al servicio del profesional: si una actividad repetitiva puede automatizarse de forma segura y confiable, el tiempo recuperado puede dedicarse a tareas de mayor valor, como la investigación de resultados atípicos, la evaluación de riesgos y la mejora continua.
También abordaremos una premisa fundamental: automatizar no significa eliminar controles. Toda aplicación destinada a procesos relevantes para la calidad debe evaluarse de acuerdo con su uso previsto, verificarse mediante pruebas apropiadas y, cuando corresponda, someterse a los controles de validación, gestión de cambios, seguridad y trazabilidad que resulten aplicables.
Porque programar no consiste solamente en escribir código; consiste en convertir un problema operativo en una solución que ahorre tiempo, reduzca errores y aporte valor al laboratorio.`
    },
    {
      id: 'metodos-generales',
      titulo: 'Métodos Generales de Análisis',
      href: '/metodos-generales',
      imagen: '/portada-metodos-generales-analisis.jpeg',
      texto: `Métodos Generales de Análisis: interpretación y aplicación en el laboratorio farmacéutico
La correcta aplicación de los métodos generales de análisis es fundamental para garantizar la confiabilidad de los resultados y la calidad de los medicamentos. Sin embargo, ejecutar un procedimiento no consiste únicamente en seguir instrucciones: requiere comprender sus fundamentos, identificar los puntos críticos y reconocer cómo cada etapa puede influir en el resultado analítico.
En esta sección abordaremos los métodos generales de análisis tomando como referencia la Farmacopea de los Estados Unidos Mexicanos (FEUM), 14.ª edición, con un enfoque orientado a su interpretación y aplicación práctica en el laboratorio farmacéutico.
Desarrollaremos explicaciones técnicas, recomendaciones de cuidado, precauciones durante la ejecución y criterios para identificar errores frecuentes que pueden comprometer la validez de los resultados. Asimismo, incorporaremos guías paso a paso y diagramas de flujo que faciliten la comprensión de los procedimientos, la identificación de sus etapas críticas y la toma de decisiones durante su ejecución.
El objetivo es transformar la información farmacopéica en una herramienta de consulta útil para analistas, químicos, responsables de laboratorio y profesionales en formación, sin perder de vista la importancia de respetar los procedimientos autorizados, los requisitos aplicables y las condiciones establecidas para cada ensayo.
Desde mi experiencia de 17 años en la industria farmacéutica, considero que un análisis correctamente ejecutado comienza mucho antes de realizar la primera medición: inicia con la comprensión del método, la preparación adecuada de los materiales y reactivos, la verificación de los equipos y la identificación de los factores que pueden afectar el resultado.
Porque conocer un método es el primer paso; comprenderlo, ejecutarlo correctamente y reconocer sus puntos críticos es lo que permite obtener resultados confiables.`
    },
    {
      id: 'capacitacion',
      titulo: 'Capacitación y Calificación',
      href: '/capacitacion',
      imagen: '/portada-capacitacion-calificacion.jpeg',
      texto: `Capacitación y Calificación de Personal: desarrollar competencias, garantizar la calidad
En la industria farmacéutica, la calidad no depende únicamente de los equipos, los procedimientos o los sistemas implementados; depende, en gran medida, de las competencias de las personas responsables de ejecutarlos. Un procedimiento correctamente diseñado pierde su efectividad cuando quien lo realiza no comprende su propósito, desconoce los riesgos asociados o carece de las habilidades necesarias para aplicarlo adecuadamente.
En esta sección abordaremos la capacitación y la calificación del personal desde una perspectiva técnica y práctica, considerando su importancia dentro de las Buenas Prácticas de Fabricación (BPF) y de los sistemas de gestión de calidad farmacéutica.
Exploraremos cómo identificar necesidades de capacitación, diseñar programas de formación, establecer objetivos de aprendizaje y evaluar la efectividad de las actividades formativas. También analizaremos la diferencia entre recibir una capacitación, demostrar conocimientos y acreditar la competencia para ejecutar una actividad específica de manera consistente y confiable.
Desarrollaremos herramientas prácticas para la elaboración de matrices de capacitación, planes anuales, evaluaciones teóricas y prácticas, listas de verificación y evidencias documentales. Asimismo, abordaremos la calificación del personal para actividades críticas, la capacitación inicial y continua, la gestión de brechas de competencia y el seguimiento de las acciones necesarias cuando los resultados de una evaluación no son satisfactorios.
Desde mi experiencia de 17 años en la industria farmacéutica, he aprendido que firmar una lista de asistencia no demuestra, por sí solo, que una persona haya adquirido las competencias necesarias. La verdadera efectividad de la capacitación se refleja en la ejecución correcta de las actividades, la comprensión de los riesgos, el cumplimiento de los procedimientos y la capacidad de prevenir errores que puedan comprometer la calidad del producto.
El propósito de esta sección es proporcionar criterios, herramientas y estrategias que permitan transformar la capacitación en un proceso sistemático de desarrollo profesional, con evidencias objetivas de competencia y un enfoque permanente en la mejora continua.
Porque capacitar es transmitir conocimientos; desarrollar competencias es preparar a las personas para aplicar esos conocimientos correctamente, y demostrar su efectividad es una responsabilidad del sistema de calidad.`
    },
    {
      id: 'mapa-interactivo',
      titulo: 'Mapa Interactivo',
      href: '/mapa-interactivo',
      imagen: '/portada-mapas-interactivos.jpeg',
      texto: `Mapas Interactivos: explora, comprende y conecta los procesos de la industria farmacéutica
La industria farmacéutica está integrada por procesos, sistemas y requisitos que se relacionan entre sí. Comprenderlos de manera aislada puede dificultar la identificación de sus conexiones y de las implicaciones que tienen en la calidad de los medicamentos.
En esta sección utilizaremos mapas interactivos como herramientas de aprendizaje visual para desglosar temas complejos, organizar conceptos y mostrar las relaciones entre las distintas áreas de la industria farmacéutica. Desde los sistemas de gestión de calidad y las Buenas Prácticas de Fabricación hasta los métodos analíticos, la validación, la gestión de riesgos y el cumplimiento regulatorio, cada mapa permitirá explorar un tema desde sus fundamentos hasta su aplicación práctica.
A través de diagramas jerárquicos, rutas de decisión, conexiones entre procesos y esquemas paso a paso, podrás identificar los elementos que integran cada sistema, comprender cómo se relacionan y reconocer las consecuencias que puede tener una decisión técnica en otras áreas de la organización.
Cada mapa estará diseñado para facilitar la navegación entre conceptos, requisitos normativos, actividades, responsables y documentos relacionados, incorporando explicaciones y ejemplos que permitan transformar la información técnica en conocimiento aplicable.
Desde mi experiencia de 17 años en la industria farmacéutica, considero que una de las habilidades más importantes de un profesional es comprender no solo su actividad, sino también cómo se conecta con el resto del sistema. Los mapas interactivos buscan desarrollar precisamente esa visión integral, facilitando el aprendizaje, la consulta y la resolución de problemas.
Porque comprender un proceso es importante; visualizar sus conexiones permite entender el sistema completo y tomar mejores decisiones.`
    }
  ];

  const hotmartLink = "#"; // Reemplazar en el futuro con el enlace real de Hotmart

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8 space-y-12">

        {/* 1. TARJETA DE PRESENTACIÓN */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-8 bg-cyan-500 rounded-full inline-block"></span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-[#0A2540]">
              Bienvenido a EDC PharmaLab
            </h1>
          </div>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed text-justify">
            Este blog reúne 17 años de experiencia en la industria farmacéutica para transformar el conocimiento científico en herramientas prácticas y soluciones aplicables. A través de secciones dedicadas a métodos analíticos, buenas prácticas de fabricación, métodos generales de análisis, capacitación y calificación de personal, mapas interactivos y programación, encontrarás información técnica, orientación práctica y recursos para comprender, optimizar y mejorar los procesos farmacéuticos. El objetivo es fortalecer el criterio profesional de estudiantes y especialistas, conectando la teoría con los desafíos reales de la industria y promoviendo una cultura de calidad, innovación y mejora continua.
          </p>
        </section>

        {/* 2. SECCIÓN PUBLICACIONES (EBOOK CÓDIGO PHARMA) */}
        <section className="bg-[#0A2540] text-white rounded-2xl p-6 md:p-10 shadow-xl border border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-8 bg-cyan-400 rounded-full inline-block"></span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">
              Publicaciones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Imagen Ebook */}
            <div className="md:col-span-4 flex justify-center">
              <a href="/portada-codigo-pharma.png" target="_blank" rel="noopener noreferrer" className="block group">
                <img
                  src="/portada-codigo-pharma.png"
                  alt="Portada Código Pharma"
                  className="rounded-xl shadow-2xl max-h-96 object-contain border-2 border-slate-700 group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>

            {/* Texto y Botón de Compra */}
            <div className="md:col-span-8 flex flex-col justify-between h-full space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4">
                  Código Pharma: Manual de Supervivencia
                </h3>
                <p className="text-slate-200 text-xs md:text-sm leading-relaxed text-justify">
                  Abraham Guevara comparte su manual de supervivencia para facilitar la transición de los estudiantes y recién graduados de carreras como Químico Farmacéutico Biólogo hacia la compleja y exigente industria farmacéutica. La obra detalla las realidades operativas de las ocho trincheras estratégicas del sector, que abarcan desde producción y control de calidad hasta investigación clínica y asuntos regulatorios. Asimismo, enfatiza la relevancia crucial de dominar la normatividad como la NOM-059, los procedimientos normalizados de operación y las estrictas prácticas de documentación para garantizar la integridad de los datos. Finalmente, el texto funciona como una guía táctica para la búsqueda de empleo, destacando que el éxito profesional no se sustenta únicamente en el título universitario, sino en la disciplina operativa, el criterio analítico y la capacidad de adaptación en el entorno laboral.
                </p>
              </div>

              <div>
                <a
                  href="https://go.hotmart.com/K108044968M?dp=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#0A2540] font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-all transform hover:scale-105 text-sm"
                >
                  <span>Comprar Ebook en Hotmart</span>
                  <span>➔</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TARJETAS DE SECCIONES CON IMAGEN DE FONDO */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-3 h-8 bg-cyan-500 rounded-full inline-block"></span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2540]">
              Explora las Secciones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secciones.map((sec) => (
              <div
                key={sec.id}
                className="relative group rounded-2xl overflow-hidden shadow-lg border border-slate-200 flex flex-col justify-between min-h-[420px] transition-all duration-300 hover:shadow-2xl"
              >
                {/* Imagen de Fondo con gradiente oscuro para legibilidad */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${sec.imagen})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/90 to-[#0A2540]/60" />

                {/* Contenido de la Tarjeta */}
                <div className="relative p-6 md:p-8 flex flex-col justify-between h-full z-10 text-white space-y-4">
                  <div>
                    <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest bg-cyan-950/80 border border-cyan-800 px-3 py-1 rounded-md inline-block mb-3">
                      Sección Especializada
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">
                      {sec.titulo}
                    </h3>
                    <p className="text-slate-200 text-xs md:text-sm leading-relaxed text-justify line-clamp-6 md:line-clamp-8 whitespace-pre-line">
                      {sec.texto}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={sec.href}
                      className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#0A2540] font-bold text-xs px-5 py-2.5 rounded-xl transition shadow"
                    >
                      <span>Explorar {sec.titulo}</span>
                      <span>➔</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}