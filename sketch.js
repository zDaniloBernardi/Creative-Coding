// Variável para armazenar a textura 2D
let textureGraphics;

function setup() {
    // Cria uma tela 3D usando o renderizador WEBGL
    createCanvas(600, 600, WEBGL);
    
    // Cria um buffer gráfico 2D para desenhar a textura
    textureGraphics = createGraphics(400, 400);
    
    // Gera a textura uma vez
    generateTexture();
}

function draw() {
    // Define o fundo da cena 3D
    background(10);
    
    // Adiciona iluminação à cena para que o objeto 3D seja visível
    ambientLight(60, 60, 60);
    directionalLight(255, 255, 255, 0.5, 0.5, -1);

    // Gira a cena para dar a impressão de que o objeto está girando
    // frameCount é uma variável do p5.js que conta os frames passados
    rotateY(frameCount * 0.005);
    rotateX(frameCount * 0.005);

    // Remove o contorno do objeto 3D
    noStroke();

    // Aplica o gráfico 2D como uma textura
    texture(textureGraphics);
    
    // Desenha a esfera (a nossa semente)
    // Os parâmetros são (raio, detalhes em X, detalhes em Y)
    sphere(180, 24, 24);
}

// Função para gerar o padrão de linhas na textura
function generateTexture() {
    const step = 20; // Tamanho de cada célula do padrão
    const pg = textureGraphics; // Apelido para o nosso buffer gráfico

    pg.colorMode(HSB, 360, 100, 100);
    pg.background(5);
    
    const baseHue = random(360);

    for (let y = 0; y < pg.height; y += step) {
        for (let x = 0; x < pg.width; x += step) {
            const r = random(1);
            if (r < 0.5) {
                pg.stroke(random(baseHue - 20, baseHue + 20), 80, 90);
                pg.strokeWeight(2);
                pg.line(x, y, x + step, y + step);
            } else {
                pg.stroke(random(baseHue, baseHue + 40), 90, 100);
                pg.strokeWeight(2);
                pg.line(x + step, y, x, y + step);
            }
        }
    }
}
