const canvas = document.getElementById('span')

// null si no lo encuentra
// HTMLElement si lo encuentra

// ??? cómo sabe TypeScript que realmente estás recuperando un elemento <canvas />?

// es inferencia → TypeScript se da cuenta que dentro del if
// ya solo el canvas va a poder ser un HTMLCanvasElement
if (canvas instanceof HTMLCanvasElement) {
    const ctx = canvas.getContext('2d')
}