  // Diâmetro do círculo
  class Cordenadas {
    constructor(x,y,d){
      this.x = x;
      this.y = y;
      this.d = d;
    }
      desenhar(){
        ellipse(circulo.x, circulo.y, circulo.d);
      }
      // Mover círculo
      mover(){
        circulo.x += 1;
        circulo.y += 1;
      // Condições para fazer as formas "quicarem" nas bordas da tela
        if (circulo.x > width || circulo.x < 0) {
        circulo.x = 20;
        circulo.y = 100;
        }
      }
    }
  
  //função para iniciar as configurações e iniciar 
  function setup() {
    createCanvas(400, 400);
  }
  //Criando a constante circulo
  const circulo = new Cordenadas(20,40,30)
  
  //função para desenhar e iniciar a animação
  function draw() {
    background(5,5,0);
    
    //Instancia a class
    circulo.desenhar()
    circulo.mover()
  
  }