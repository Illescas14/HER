const texto = `
Hello, happy birthday.

Sé que te sorprendera esto pero hoy es tu cumpleaños y pensé que valía la pena hacerte algo. Y es que, aunque no lo parezca, me gusta hacer sentir especial a ciertas personas… pocas, contadas. Y tú, sin buscarlo, entraste en esa lista pequeña.

Sé que suena raro, pero ya me conoces un poquito: así soy, medio espontáneo, loco, raro… y emo también jajaja (ok no, emo no).

La verdad, los días que platicamos en el evento me agradaron bastante. Fueron momentos simples, pero de esos que uno recuerda porque se siente a gusto y sentí que debia darte algo.

Quiero decirte que admiro el esfuerzo que haces para que todo te salga bien. Se nota cuando alguien le mete corazón a lo que hace, y tú lo haces. Ojalá siempre tengas cerca a personas que te reconozcan eso; te lo mereces.

Espero que hoy estés rodeada de cosas que te hagan sonreír sin darte cuenta. Que te lleguen sorpresas buenas, de esas que no piden permiso para entrar y aun así iluminan el día. Que este año traiga pasos firmes, metas cumplidas y momentos que te recuerden lo mucho que vales.

Y que todo lo que trabajas, cuidas y construyes… por fin te regrese en cosas bonitas, porque te lo mereces.

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