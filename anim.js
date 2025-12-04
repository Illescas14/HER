const texto = `
Hello, happy birthday.

Sé que quizá te sorprenda esto, pero hoy es tu cumpleaños y pensé que valía la pena hacerte algo. Aunque no lo parezca, soy de esas personas a las que les gusta hacer sentir especial a quien de verdad lo merece… Y siento que tú eres una de esas personas.

Sé que suena raro, pero ya me conoces un poquito: así soy, medio espontáneo, loco, raro… y emo también jajaja (ok no, emo no).

La verdad, los días que platicamos en el evento me agradaron bastante. Fueron momentos simples, pero de esos que recuerdas porque te hacen sentir a gusto, y por eso quise darte algo.

Admiro el esfuerzo que le pones a todo. Se nota cuando alguien hace las cosas con corazón, y tú lo haces. Ojalá siempre haya personas que te reconozcan eso; te lo mereces muchísimo.

Espero que hoy estés rodeada de cosas que te hagan sonreír sin darte cuenta. Que lleguen sorpresas buenas, de esas que llegan solitas y aun así iluminan el día. Que este año te traiga pasos firmes, metas cumplidas y momentos que te recuerden lo valiosa que eres.

Y que todo lo que trabajas, cuidas y construyes, regrese a tu vida convertido en cosas bonitas. Porque te lo mereces.

Y bueno… una última cosa: ¿te caigo mal?

𝓘𝓵𝓵𝓮𝓼𝓬𝓪𝓼`;



let i = 0;
const speed = 60; // Velocidad de escritura (más grande = más lento)
const container = document.querySelector("#lyrics");

// Asegurarse de que el contenedor tenga los estilos correctos
container.style.whiteSpace = "pre-line"; // Respeta los saltos de línea
container.textContent = ""; // Limpiar cualquier contenido previo

function escribir() {
    if (i < texto.length) {
        container.textContent += texto.charAt(i);
        i++;
        
        // Auto-scroll suave mientras escribe
        if (container.scrollHeight > container.clientHeight) {
            container.scrollTop = container.scrollHeight;
        }
        
        setTimeout(escribir, speed);
    }
}

// Pequeño delay antes de empezar a escribir
setTimeout(() => {
    escribir();
}, 500);
