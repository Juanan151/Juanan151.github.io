const comments = [
  {
    user: "Ana Torres",
    vol: "Attack on Titan Vol 1",
    text: "Nunca me imaginé que el último volumen de 'Attack on Titan' me atraparía tanto. La trama se despliega de una manera tan magistral que cada página te deja queriendo más. Realmente aprecio cómo se han desarrollado los personajes a lo largo de la serie, y este volumen no es una excepción.",
  },
  {
    user: "Carlos Ruiz",
    vol: "Tokyo ghoul Vol 1",
    text: "Sinceramente, este ha sido uno de los mejores volúmenes que he leído este año. La mezcla de misterio y acción es perfecta. Espero con ansias el próximo volumen, porque realmente quiero ver cómo el autor va a resolver los conflictos actuales.",
  },
  {
    user: "Lucía Hernández",
    vol: "bleach Vol 1",
    text: "Este volumen fue un poco lento comparado con los anteriores. Aunque entiendo la necesidad de desarrollar más la historia y dar profundidad a los personajes, me faltó un poco más de acción. No obstante, sigue siendo una serie que recomendaría ampliamente.",
  },
  {
    user: "Miguel Ángel López",
    vol: "One piece Vol 1",
    text: "¡Increíble! Cada nuevo volumen supera el anterior. La intensidad de la trama y el desarrollo continuo de los personajes hacen que esta serie sea imposible de dejar. Además, las ilustraciones son simplemente espectaculares, capturando perfectamente la emoción de cada escena.",
  },
  {
    user: "Laura Martínez",
    vol: "One piece Vol 1",
    text: "Estoy algo decepcionada con la dirección que ha tomado la trama en este último volumen. Parece que el autor está más interesado en prolongar la serie que en ofrecer resoluciones significativas a las líneas argumentales. Aunque la escritura sigue siendo de alta calidad, esperaba más.",
  },
  {
    user: "David Jiménez",
    vol: "Naruto Vol 1",
    text: "¿Alguien más quedó asombrado con la revelación del capítulo cinco? No quiero dar spoilers, pero fue totalmente inesperado y cambió completamente mi percepción de varios personajes. ¡Necesito el próximo volumen ya!",
  },
  {
    user: "Sofía Gómez",
    vol: "Naruto Vol 1",
    text: "Este volumen cerró maravillosamente bien varios arcos argumentales que habían estado en el aire durante mucho tiempo. Me siento completamente satisfecha con los giros que tomó la historia, aunque también un poco triste de que ciertos aspectos hayan concluido.",
  },
  {
    user: "Javier Fernández",
    vol: "Dragon Ball Vol 1",
    text: "Aunque prefiero generalmente series con más acción, debo admitir que la profundidad emocional y el desarrollo del personaje en este volumen fueron excepcionales. Me ha hecho reflexionar sobre varios temas importantes, lo cual es raro en el género.",
  },
  {
    user: "María García",
    vol: "One piece Vol 1",
    text: "Un volumen interesante, aunque el final me dejó queriendo más. Siento que el clímax fue algo precipitado y algunas decisiones de los personajes no fueron del todo coherentes con su desarrollo previo. A pesar de eso, la serie sigue siendo una de mis favoritas.",
  },
];

// Función para renderizar comentarios
function renderComments() {
  const container = document.getElementById("comments");
  comments.forEach((comment) => {
    const commentHtml = `
                    <div class="col-12 comment-container">
                        <div class="card">
                            <div class="card-body ">
                              <div class="user-icon">
                              <i class="bi bi-person-circle" style="font-size: 50px;"></i>
                              </div>
                                <div>
                                    <h5 class="card-title">${comment.user}  -  ${comment.vol}</h5>
                                    <p class="card-text">${comment.text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    container.innerHTML += commentHtml;
  });
}

// Llamada a la función al cargar la página
document.addEventListener("DOMContentLoaded", renderComments);
