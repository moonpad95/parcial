import React from 'react';
import swal from 'sweetalert';
import './estilos.css';
import { useEffect } from 'react';

const Conceptos = () => {

  const mostrarAlerta = (concepto) => {
    swal({
      title: 'Conceptos',
      text: concepto,
      buttons: false,
      content: {
        element: "button",
        attributes: {
          text: "Cerrar",
          className: "btn-cerrar"
        }
      },
      closeOnClickOutside: true, // Permitir cerrar haciendo clic fuera de la ventana modal
    }).then(() => {
      // Esto se ejecuta después de que se cierra la ventana modal
    });
  };

  const mostrarAlertaConImagen = ({ imagenUrl }) => {
    useEffect(() => {
      swal({
        content: {
          element: "img",
          attributes: {
            src: imagenUrl,
            alt: "Alerta sin texto",
            height: "200px" // Ajusta la altura de la imagen según sea necesario
          },
        },
        buttons: false // No muestra botones
      });
    }, [imagenUrl]);
  
    return null; // No renderiza nada en el DOM
  };
  

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Conceptos</h2>
      <div>
        <div style={{ display: 'inline-block' }}>
          <button style={{ margin: '5px' }} onClick={() => mostrarAlerta('Concepto 1: La Administración es el empleo de la autoridad para organizar, dirigir y controlar a subordinados responsables (y consiguiente, a los grupos que ellos comandan), con el fin de que todos los servicios que se prestan sean debidamente coordinados en el logro del fin de la empresa.\n\nConcepto 2: Se centra en las organizaciones humanas, así como las técnicas y procedimientos disponibles para su planificación, organización, dirección y control de sus recursos, en pro de obtener de ellos el mayor beneficio posible.\n\nConcepto 3: La administración eficaz se refiere a lograr los objetivos de la organización de manera efectiva y eficiente mediante la coordinación de recursos y procesos.')}>Administración</button>
          <button style={{ margin: '5px' }} onClick={() => mostrarAlerta('Concepto 1: Conjunto de entradas y salidas necesarias para lograr un objetivo concreto. Los proyectos pueden variar de sencillos a complejos y pueden gestionarlos una persona o cien.\n\n Concepto 2:Forma de planear, organizar, dirigir y controlar una serie de actividades realizadas por un grupo de personas que tienen un objetivo específico. ')}>Administración de Proyectos</button>
          <button style={{ margin: '5px' }} onClick={() => mostrarAlerta('Concepto 1: Proceso de comunicación entre al menos dos partes dirigido a alcanzar un acuerdo sobre intereses que se perciben como divergentes. \n\n Concepto 2: Es un procedimiento, en el que dos o más personas que tienen intereses comunes, intentan llegar a un acuerdo sobre aquellos puntos en que no concuerdan, con la intención de resolver las diferencias y lograr un convenio beneficioso para las dos partes. ')}>Negociación</button>
          <button style={{ margin: '5px' }} onClick={() => mostrarAlerta('Concepto: Conjunto de funciones administrativas dentro de una organización u empresa que buscan aprovechar al máximo los recursos existentes de forma correcta, rápida y eficaz. El proceso administrativo se compone de cuatro etapas elementales: planeación, organización, ejecución y control.')}>Proceso Administrativo</button>
        </div>
        <div style={{ display: 'inline-block' }}>
          <button style={{ margin: '5px' }} onClick={() => mostrarAlerta('Concepto 1: Es una práctica comunicativa e interaccional, en la cual el manipulador ejerce control sobre otras personas, generalmente en contra de su voluntad o en contra de sus intereses.\n\n Concepto 2: Acción realizada con las manos sobre un objeto. Control de la conducta de otros por medio de métodos encubiertos y con fines desconocidos para ellos.')}>Manipulación</button>
          <button style={{ margin: '5px' }} onClick={() => mostrarAlerta('Concepto: Grado de consecución de objetivos fijados de antemano que tenga un proceso, una dinámica de trabajo o incluso una persona. Por lo tanto, algo es eficaz cuando obtiene el resultado esperado.')}>Eficacia</button>
          <button style={{ margin: '5px' }} onClick={() => mostrarAlerta('Concepto: Es la capacidad que tiene una persona o un proceso para utilizar adecuadamente las herramientas con el fin de lograr los objetivos marcados; ejecuta solo las acciones necesarias.')}>Eficiencia</button>
          <button style={{ margin: '5px' }} onClick={() => mostrarAlerta('Riesgos en Proyectos\n\n Riegos\n\n Concepto 1: Es la probabilidad de que una amenaza se convierta en un desastre. La vulnerabilidad o las amenazas, por separado, no representan un peligro. Pero si se juntan, se convierten en un riesgo, o sea, en la probabilidad de que ocurra un desastre. \n\n Concepto 2: Se define como la combinación de la probabilidad de que se produzca un evento y sus consecuencias negativas. Los factores que lo componen son la amenaza y la vulnerabilidad. \n\n Conceptos 3: : Proximidad o posibilidad de que suceda un daño o perjuicio y sus posibles consecuencias. Este daño puede afectar a una persona o grupo y es el resultado de un suceso o una acción \n\n Riesgos en Proyectos \n\n Concepto 1: Es todo aquello que pueda afectar al éxito del proyecto, puede ser algo que cause retrasos en el cronograma del proyecto, que haga que se exceda el presupuesto previsto o cualquier cosa que derive en la disminución del rendimiento del equipo de un modo u otro.\n\n Concepto 2: Son los eventos o condiciones inciertas que, en caso de ocurrir, tiene un efecto positivo o negativo sobre los objetivos de un proyecto.')}>Riesgos en Proyectos</button>
        </div>
        <div style={{ display: 'inline-block' }}>
          <button style={{ margin: '5px' }} onClick={() => mostrarAlertaConImagen('./img/riesgos.jpg')}>Modelo de Creación Propia</button>


        </div>
      </div>
      <div>
        
        <a href="https://timetreeapp.com/calendars/G5eiqZxxsAWi">Link directo al administrador de proyectos elegido</a>
      </div>
    </div>
  );
}

export default Conceptos;
