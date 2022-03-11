var x = [600,545,575,50,920,930,485,30,150,50,265,120,746,514,398,630]; // posX dos botões: (iniciar - instrucoes - créditos - seta voltar {SetaP&&SetaV} - botao X {XP&&XV} - botao avançar - fundoWood - IconSong - %damusic - sliderposition - canhao - bau - FechaVe - FechaAma - ChaveVe)
var y = [165,250,335,30,30,450,500,591.5,495,495,640,640,388,156,388,272];// posY dos botões: (iniciar - instrucoes - créditos - seta voltar {SetaP&&SetaV} - botao X {XP&&XV} - botao avançar - fundoWood - iconSong - %music - sliderposition - canhao - bau - FechaVe - FechaAma - ChaveVe)
var larg = [150,245,200,50,48,50,100,100,70];// largura dos botões: (iniciar - instrucoes - créditos - seta voltar {SetaP&&SetaV} - botao X {XP&&XV} - botao avançar - canhao - bau)
var alt = 60;
var tela = 0;
var centx = 970/2; // posX do centro
var centy = 480/2; // posY do centro
var img = [];
var anguloSol = 0;
var desX = [0,450,0,0,0,0,0,0,0,0,0,0,0]
var acre = [1,1,0,0,0,0,0,0,0,0,0,0,0,0]
var add = 0;
var som,fonte,SliderMusica,volume;
var cor = ['red','red']
var numX = 0;
var numY = 1;
var posRealx =[]
var posRealy =[]
var pressBau = false;
var pressCan = false;
var xAleBau,xAleCan,yAleBau,yAleCan,posXCanFinal,posYCanFinal,posXbauFinal,posYbauFinal,XFechadura,YFechadura;
var NumAle1 = []
var NumAle2 = []
var NumAle3 = [10,15,20,25,30]
var operação = []
var nivel = 0;
var tempo = 0;
var att = 0;
var fogo = false;
var xT = 80;
var xA = 80;
var desBau = 0;
var letras = [1,1,1,1,1,1,1,1,1,1]
var anguloBau = 0;
var r = 116
let xRotBau = 0
let yRotBau = 0
var velo = 0;
var BauHit = false;
var ChaveHit = false;
var GaiolaHit = false;
var FechaduraHit = false;
var att = 0
var NivelAtt = 0;
var acertou = false
var errou = false
var cont = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var add1 = 0;
var add = 0
var add2 = 0;
var ChaveDesc = 0;
var gaiolaFechada = true;
var gaiolaFechada1 = true;
var gaiolaFechada2 = true;
var getChave = false
var getChaveVer = false
var getChaveAma = false
var FechaduraAmaHit = false
var FechaduraVerHit = false
var ChaveAmHit = false
var ChaveVeHit = false
var gaiola1Hit = false
var gaiola2Hit = false

function preload(){
  fonte = loadFont('Font.ttf');
  som = loadSound('Som.mp3');
  somAcertou = loadSound('Acertouapergunta.wav');
  somPerdeu = loadSound('Gameover.wav');
  somZerou = loadSound('Zerouojogo.wav');
  somCanhao = loadSound('Baladocanhao.ogg');
  somButton = loadSound('button.wav')
  somOkay = loadSound('okay.wav')
  somHit = loadSound('Hit.wav')
  img[0] = loadImage('Imagens/FundoAtras.jpg');
  img[1] = loadImage('Imagens/FundoFrente.png');
  img[2] = loadImage('Imagens/Sol.png');
  img[3] = loadImage('Imagens/Mar1.jpg');
  img[4] = loadImage('Imagens/Mar2.jpg');
  img[5] = loadImage('Imagens/SetaP.jpg');
  img[6] = loadImage('Imagens/SetaV.jpg');
  img[7] = loadImage('Imagens/XP.jpg');
  img[8] = loadImage('Imagens/XV.png');
  img[9] = loadImage('Imagens/IconSong.png');
  img[10] = loadImage('Imagens/Wood.jpg');
  img[11] = loadImage('Imagens/Botiniciar.jpg')
  img[12] = loadImage('Imagens/BotInstrucoes.jpg');
  img[13] = loadImage('Imagens/BotCreditos.jpg');
  img[14] = loadImage('Imagens/Creditos1.jpg');
  img[15] = loadImage('Imagens/Creditos2.jpg');
  img[16] = loadImage('Imagens/Instrucoes.jpg');
  img[17] = loadImage('Imagens/FundoTeladeacoes.png');
  img[18] = loadImage('Imagens/Canhao.jpg');
  img[19] = loadImage('Imagens/Bau.jpg');
  img[20] = loadImage('Imagens/FundoModoEnivel.jpg')
  img[21] = loadImage('ImagensFASES/AguaUp.png');
  img[22] = loadImage('ImagensFASES/TLEFT.png');
  img[23] = loadImage('ImagensFASES/TRIGHT.png');
  img[24] = loadImage('ImagensFASES/Chave.png');
  img[25] = loadImage('ImagensFASES/Fechadura.png')
  img[26] = loadImage('ImagensFASES/TELADEGAMEOVER.png')
  img[27] = loadImage('ImagensFASES/FechaduraVerm.png')
  img[28] = loadImage('ImagensFASES/ChaveVerm.png')
  img[29] = loadImage('ImagensFASES/TELAFINAL.png')
}
function Sorteio() {
  xAleBau = parseInt(random(9, 14));
  yAleBau = parseInt(random(2, 8));
  xAleCan = parseInt(random(2, 4));
  yAleCan = parseInt(random(2, 8));
  NumAle1[0] = parseInt(random(1, 9));
  NumAle2[0] = parseInt(random(1, 9));
  NumAle1[1] = random(NumAle3)
  NumAle2[1] = parseInt(random(2, 6))
  while (NumAle1[1] % NumAle2[1] != 0) {
    NumAle2[1] = parseInt(random(2, 6));
  }
  NumAle1[2] = parseInt(random(2, 5));
  NumAle2[2] = parseInt(random(2, 5));
  NumAle1[3] = parseInt(random(2, 8));
  NumAle2[3] = parseInt(random(2, 5));
  while (NumAle1[3] % NumAle2[3] != 0) {
    NumAle2[3] = parseInt(random(2, 8));
    NumAle1[3] = parseInt(random(2, 5));
    if (NumAle1[3] == NumAle2[3]) {
      NumAle2[3] = parseInt(random(2, 8));
      NumAle1[3] = parseInt(random(2, 5))
    }
  }
  operação[0] = NumAle1[0] * NumAle2[0];
  operação[1] = NumAle1[1] / NumAle2[1];
  operação[2] = NumAle1[2] * NumAle2[2] + NumAle1[2];
  operação[3] = NumAle1[3] / NumAle2[3] * NumAle1[3] + NumAle2[3]
}

function setup() {
  createCanvas(970,525)
  frameRate(60)
  imageMode(CENTER);
  SliderMusica = createSlider(0,1,0.10,0)
  SliderMusica.position(x[9],y[9])
  som.loop();
  Sorteio();
}

function ParametrosSom() {
  image(img[10], x[6], y[6],970,45)//Wood
  push()
  scale(0.85)
  image(img[9], x[7], y[7])//IconSong
  pop()
  volume = SliderMusica.value()
  som.setVolume(volume)
  vol = parseInt(volume*100)
  noStroke()
  fill(0)
  textFont(fonte)
  textSize(15)
  text(vol+'%',x[8],y[8])
  
  if (tela == 1){
    createCanvas(970, 745)
    background('yellow')
    y[6] = 722.5;
    y[7] = 850;
    y[8] = 722.5;
    image(img[10], x[6], y[6], 970, 45) //Wood
    push()
    scale(0.85)
    image(img[9], x[7], y[7]) //IconSong
    pop()
    volume = SliderMusica.value()
    som.setVolume(volume)
    vol = parseInt(volume * 100)
    noStroke()
    fill(0)
    textFont(fonte)
    textSize(15)
    text(vol + '%', x[8], y[8])
    SliderMusica.position(50, 722.5)
    BotaoX();
  }
}
function BotaoVoltar() {
  image(img[5],x[3],y[3])//SetaP
  if(mouseX >= x[3]-larg[3]/2 && mouseX <= x[3]+larg[3]/2 && mouseY >= y[3]-larg[3]/2 && mouseY <= y[3]+larg[3]/2){
    image(img[6],x[3],y[3])//SetaV
  }
}
function BotaoX() {
  push()
  scale(0.85)
  image(img[7],1115,y[4])//XP
  pop()
  if (mouseX >= x[4] - larg[4] / 2 && mouseX <= x[4] + larg[4] / 2 && mouseY >= y[4] - larg[4] / 2 && mouseY <= y[4] + larg[4] / 2) {
    push()
    scale(0.85)
    image(img[8],1115,y[4])//XV
    pop()
  }
}
function BotaoXClicked() {
  if (mouseX >= x[4] - larg[4] / 2 && mouseX <= x[4] + larg[4] / 2 && mouseY >= y[4] - larg[4] / 2 && mouseY <= y[4] + larg[4] / 2) {
    tela = 0
    somButton.play()
    Reset();
  }
}
function BotaoAvanca() {
  translate(x[5],y[5])
  rotate(PI)
  image(img[5], 0, 0) //SetaP
  if (mouseX >= x[5]-larg[5]/2 && mouseX <= x[5]+larg[5]/2 && mouseY >= y[5]-larg[5]/2 && mouseY <= y[5]+larg[5]/2) {
    image(img[6], 0, 0) //SetaV
  }
}
function Reset(){
  createCanvas(970, 525)
  y[6] = 500;
  y[7] = 591.5;
  y[8] = 495;
  SliderMusica.position(x[9], y[9])
  x[11] = 120;
  y[11] = 640;
  cor[0] = 'red'
  cor[1] = 'red'
  pressBau = false;
  pressCan = false;
  tempo = 0;
  att = 0
  for (m = 2; m <=12;m++){
    desX[m] = 0
  }
  XFechadura = posRealx[7]
  YFechadura = posRealy[4]
  x[10] = 265;
  y[10] = 640;
  nivel = 0
  att = 0
  NivelAtt = 0
  errou = false
  acertou = false
  cont[0] = 0
  for (q = 4; q <= 15; q++){
    cont[q] = 0
  }
  for (l = 0; l <= 9; l++){
    letras[l] = 1;
  }
  add = 0;
  add1 = 0;
  add2 = 0;
  xRotBau = 0;
  yRotBau = 0;
  Sorteio();
  for (w = 3; w<=13; w++){
    acre[w] = 0
  }
  gaiolaFechada = true
  getChave = false
  ChaveDesc = 0
  BauHit = false
  gaiolaFechada1 = true
  gaiolaFechada2 = true
  FechaduraAmaHit = false
  getChaveVer = false
  getChaveAma = false
  x[15] = 630;
  y[15] = 272;
  x[14] = 398;
  y[14] = 388;
}
function ResetNivel(){
  x[10] = 265
  y[10] = 640
  acre[3] = 0
  acre[4] = 0
  x[11] = 120;
  y[11] = 640;
  cor[0] = 'red'
  cor[1] = 'red'
  tempo = 0
  att = 0
  desX[2] = 0
  desX4 = 0
  errou = false
  acertou = false
  BauHit = false
  cont[0] = 0
  for (u = 5; u <= 10; u++ ){
    cont[u] = 0
  }
}
function TeladeRepostas() {
  image(img[20], centx, centy + 30, 870, 464)
  fill(0)
  textSize(50)
  text('Qual é a resposta certa?', 265, 150)
  stroke(0)
  fill(255)
  rect(285, 200, 200, 100, 10)
  rect(500, 200, 200, 100, 10)
  textFont(fonte)
  fill(0)
  noStroke()
  textSize(50)
}
function Perdeu() {
  image(img[26], centx, centy + 90)
  BotaoX();
  cont[6] = cont[6] + 1
  if (cont[6] == 1) {
    som.setVolume(0)
    somPerdeu.play()
  }
}
function Nivel1() {
  for (i=0; i<15; i++){
    image(img[21],xA,475,58,58)
    xA = xA + 58
  }
  xA = 80
  
  //terra do canhao
  image(img[22], posXCanFinal - 29, posYCanFinal + 45, 58, 58)
  image(img[23], posXCanFinal + 29, posYCanFinal + 45, 58, 58)
  //terra do bau
  image(img[22],posXbauFinal-29,posYbauFinal+58+desX[2],58,58)
  image(img[23],posXbauFinal+29,posYbauFinal+58+desX[2],58,58)
  
  att++
  if (att % 60 == 0){
    tempo++
  }
  if (tempo >= 0 && tempo <=1){
    image(img[20],centx,centy+30,870,464)
    fill(0)
    textSize(100)
    text('Quanto é '+ NumAle1[0] +'×'+ NumAle2[0]+' ?',215,300)
  }
}
function Nivel2() {
  for (i = 0; i < 15; i++) {
    image(img[21], xA, 475, 58, 58)
    xA = xA + 58
  }
  xA = 80
  
  //terra do canhao
  image(img[22], posXCanFinal - 29, posYCanFinal + 45+desX[4], 58, 58)
  image(img[23], posXCanFinal + 29, posYCanFinal + 45+desX[4], 58, 58)
  //terra do bau
  image(img[22], posXbauFinal - 29, posYbauFinal + 58 + desX[3], 58, 58)
  image(img[23], posXbauFinal + 29, posYbauFinal + 58 + desX[3], 58, 58)
  
  att++
  if (att % 60 == 0) {
    tempo++
  }
  if (tempo >= 0 && tempo <= 1) {
    fill(255)
    rect(50, 40, 870, 464)
    image(img[20], centx, centy + 30, 870, 464)
    fill(0)
    textSize(100)
    text('Quanto é ' +NumAle1[1] + '÷' + NumAle2[1]+'?', 215, 300)
  }
}
function Nivel3() {
  for (i = 0; i < 15; i++) {
    image(img[21], xA, 475, 58, 58)
    xA = xA + 58
  }
  xA = 80
  image(img[22], posXCanFinal - 29, posYCanFinal + 45, 58, 58)
  image(img[23], posXCanFinal + 29, posYCanFinal + 45, 58, 58)
  
  image(img[22], posXbauFinal - 29+xRotBau, posYbauFinal + 58+yRotBau, 58, 58)
  image(img[23], posXbauFinal + 29 + xRotBau, posYbauFinal + 58+yRotBau, 58, 58)
  
  att++
  if (att % 60 == 0) {
    tempo++
  }
  if (tempo >= 0 && tempo <= 2) {
    fill(255)
    rect(50, 40, 870, 464)
    image(img[20], centx, centy + 30, 870, 464)
    fill(0)
    textSize(100)
    text('quanto é  ' + NumAle1[2] +'×' + NumAle2[2] + '+' + NumAle1[2]+'?', 180, 300)
  }
}
function Nivel4() {
  for (i = 0; i < 15; i++) {
    image(img[21], xA, 475, 58, 58)
    xA = xA + 58
  }
  xA = 80
  
  image(img[22], posXCanFinal - 29, posYCanFinal + 45+desX[5], 58, 58)
  image(img[23], posXCanFinal + 29, posYCanFinal + 45+desX[5], 58, 58)
  image(img[22], posXbauFinal - 29, posYbauFinal + 58, 58, 58)
  image(img[23], posXbauFinal + 29, posYbauFinal + 58, 58, 58)
  
  //chave
  image(img[24],posRealx[14], posRealy[2]-20+ChaveDesc, 70,70)
  
  if (gaiolaFechada == true){
  strokeWeight(5)
  stroke(0)
  noFill()
  rect(posRealx[8], posRealy[7], 232, 232)
  image(img[25],XFechadura+desX[6],YFechadura-29+desX[7],58,58)
  }
  att++
  if (att % 60 == 0) {
    tempo++
  }
  if (tempo >= 0 && tempo <= 2){
    image(img[20], centx, centy + 30, 870, 464)
    fill(0)
    textSize(100)
    noStroke()
    text('Quanto é (2×8)×0 ?', 140, 300)
  }
}
function Nivel5() {
  for (i = 0; i < 15; i++) {
    image(img[21], xA, 475, 58, 58)
    xA = xA + 58
  }
  xA = 80
  
  //gaiola vermelha e fechadura vermelha
  if (gaiolaFechada2 == true){
  push()
  strokeWeight(4)
  stroke(0)
  line(posRealx[12],posRealy[8],posRealx[12],posRealy[0])
  image(img[27],x[12],y[12]+ desX[9],58,58)
  pop()
  }
  //Chave amarela
  image(img[24],x[14],y[14] + desX[11], 70,70)
  //chave vermelha
  image(img[28], x[15], y[15] + desX[12], 70, 70)
  //gaiola amarela e fechadura amarela
  if (gaiolaFechada1 == true){
  push()
   strokeWeight(4)
   stroke(0)
   line(posRealx[8], posRealy[8], posRealx[8], posRealy[0])
   image(img[25],x[13],y[13]+ desX[10],58,58)
  pop()
  }
  image(img[22], posXCanFinal - 29, posYCanFinal + 45 + desX[8], 58, 58)
  image(img[23], posXCanFinal + 29, posYCanFinal + 45 + desX[8], 58, 58)
  image(img[22], posXbauFinal - 29, posYbauFinal + 58, 58, 58)
  image(img[23], posXbauFinal + 29, posYbauFinal + 58, 58, 58)
  
  att++
  if (att % 60 == 0) {
    tempo++
  }
  if (tempo >= 0 && tempo <= 2) {
    fill(255)
    rect(50, 40, 870, 464)
    image(img[20], centx, centy + 30, 870, 464)
    fill(0)
    textSize(100)
    text('Quanto é '+ NumAle1[3] + '÷' + NumAle2[3] + '×' + NumAle1[3] + '+' + NumAle2[3] + ' ?', 140, 300)
  }
}
function draw() {
  if(tela == 0){
    ParametrosSom()
    image(img[0],centx,centy)//FundoAtras
    
//-----------ANIMACOES-MENU-------------
    //animação do sol
    push()
    translate(0,0)
    rotate(anguloSol)
    image(img[2],0,0)//sol
    anguloSol = anguloSol + 0.1;
    pop()
    
    //animações das ondas
    image(img[3],centx+desX[0],centy-5)//Mar1
    if (desX[0] >= 450){
      acre[0] = -1
    }else if (desX[0] <= 0){
      acre[0] = 1
    }
    desX[0] = desX[0] + acre[0]
    
    image(img[4],centx+desX[1],centy+1)//Mar2
     if (desX[1] >= 450) {
       acre[1] = -1
     } else if (desX[1] <= 0) {
       acre[1] = 1
     }
     desX[1] = desX[1] + acre[1]
    
    image(img[1],centx,centy)//FundoFrente
    
//------------BOTÃO INICIAR-------------
    
    if(mouseX >= x[0] && mouseX <= x[0]+ larg[0] && mouseY > y[0] &&mouseY <= y[0] + alt) {
      image(img[11],centx,centy)//botao iniciar
    }
    
//-----------BOTAO INSTRUCOES-----------
    
    if (mouseX >= x[1] && mouseX <= x[1] + larg[1] && mouseY >= y[1] && mouseY <= y[1] + alt){
      image(img[12],centx,centy)//botao instrucao
    }
  
//----------BOTAO CREDITOS--------------
    
    if (mouseX >= x[2] && mouseX <= x[2] + larg[2] && mouseY >= y[2] && mouseY <= y[2] + alt){
      image(img[13],centx,centy)//botao creditos
    }
      
//-----------TELA-DO-JOGO---------------
  }else if (tela == 1){ //JOGO 
    ParametrosSom();
    image(img[17],centx,centy+32,870,464)
  
  //quadro do canhao
  stroke(0)
  strokeWeight(2)
  fill(255)
  rect(200, 550, 140, 140, 10)
  fill(cor[0])
  textFont(fonte)
  noStroke()
  textSize(18)
  text('coloque o Canhão\n   na posição:('+xAleCan+','+yAleCan+') ', 205, 570)
  
  //FOGO!
  fill(0)
  rect(350, 550, 140, 140, 10)
  textFont(fonte)
  noStroke()
  fill(255, 0, 0)
  textSize(40)
  text('FOGO!', 370, 630)
  
  //quadrado do bau
  fill(255)
  stroke(0)
  strokeWeight(2)
  rect(50, 550, 140, 140, 10)
  fill(cor[1])
  noStroke(0)
  textSize(18)
  text('coloque o baú na\n   posição: (' + xAleBau + ',' + yAleBau + ')', 60, 570)
      
  // linhas verticais numeros eixo X
  for (xline = 50; xline <= 870 + 58; xline += 58) {
    strokeWeight(3)
    stroke(255, 0, 0, 50)
    line(xline, 40, xline, 504)
  
    posRealx.push(xline)
  
    noStroke()
    fill('blue')
    textFont(fonte)
    textSize(20)
    text(numX, xline - 5, 530)
    textSize(15)
    text('eixo X', 930, 500)
    numX++
  }
  numX = 0;
  
  //linhas horizontais números eixo Y
  for (yline = 40; yline <= 548; yline += 58) {
    stroke(255, 0, 0, 50)
    line(50, yline, 920, yline)
  
    posRealy.push(yline)
  
    noStroke()
    fill('blue')
    textFont(fonte)
    textSize(20)
    text(numY, 30, 490 - yline)
    textSize(15)
    text('eixo Y', 60, 30)
    numY++
  }
  numY = 1;
  posRealy.reverse();
  posXbauFinal = posRealx[xAleBau]
  posYbauFinal = posRealy[yAleBau]
  posXCanFinal = posRealx[xAleCan]
  posYCanFinal = posRealy[yAleCan]
  
  if (pressBau == true) {
    x[11] = mouseX
    y[11] = mouseY
    if (mouseX >= posXbauFinal - 50 && mouseX <= posXbauFinal + 50 && mouseY >= posYbauFinal - 50 && mouseY <= posYbauFinal + 50) {
      x[11] = posXbauFinal;
      y[11] = posYbauFinal;
      pressBau = false;
      cor[1] = 'green'
      cont[9] = cont[9] + 1
      if(cont[9] == 1){
       somOkay.play()
      }
    }
  }
  if (pressCan == true) {
    x[10] = mouseX
    y[10] = mouseY
    if (mouseX >= posXCanFinal - 50 && mouseX <= posXCanFinal + 50 && mouseY >= posYCanFinal - 50 && mouseY <= posYCanFinal + 50) {
      x[10] = posXCanFinal;
      y[10] = posYCanFinal;
      cor[0] = 'green'
      pressCan = false
      cont[8] = cont[8] + 1
      if (cont[8] == 1){
      somOkay.play()
      }
    }
  }
    
  if (nivel == 1) {
    Nivel1();
    image(img[19],x[11], y[11]+desX[2], 90, 90)
    image(img[18], x[10],y[10])
    
    let somaYBala = y[11] + desX[2]
    
    push()
    //bau andar
    if (cor[1] == 'green' && pressBau == false && letras[0] == 1) {
      if (desX[2] <= posRealy[2]- posYbauFinal) {
        acre[3] = 5
      }else{
        letras[0] = 2
      }
    }
    if (letras[0] == 2){
      acre[3] = -5
    }
    if (somaYBala <= posRealy[7]){
      letras[0] = 1;
    }
  desX[2] = desX[2] + acre[3]
  pop()
  
  if (BauHit) {
    somHit.play()
    x[10] = posXCanFinal
    velo = 0;
    fogo = false
    att = 1;
    if (att == 1){
      tela = 1.1
      ResetNivel()
    }
  
  }
  }else if (nivel == 2){
    Nivel2();
    cont[0]++
    if (cont[0] == 1){
    xAleBau = parseInt(random(9, 14));
    yAleBau = parseInt(random(2, 8));
    
    xAleCan = parseInt(random(2, 4));
    yAleCan = parseInt(random(2, 8));
    }
    image(img[19],x[11], y[11]+desX[3], 90, 90)
    image(img[18],x[10],y[10]+desX[4])
    
    let somaBau = y[11] + desX[3]
    
    //Bau andar
    if (cor[1] == 'green' && pressBau == false && letras[1] == 1) {
      if (desX[3] <= posRealy[2]- posYbauFinal) {
        acre[4] = 5
      }else{
        letras[1] = 2
      }
    }
    if (letras[1] == 2){
      acre[4] = -5
    }
    if (somaBau <= posRealy[7]){
      letras[1] = 1;
    }
  desX[3] = desX[3] + acre[4]
  
 let  somaCan = y[10] + desX[4]
  if (cor[0] == 'green' && pressCan == false && letras[2] == 1){
    if (desX[4] <= posRealy[2]- posYCanFinal){
      acre[5] = 5
    }else{
      letras[2] = 2
    }
  }
  if (letras[2] == 2){
    acre[5] = -5
  }
  if (somaCan <= posRealy[7]){
    letras[2] = 1
  }
  desX[4] = desX[4] + acre[5]
  
  if (BauHit) {
    somHit.play()
    x[10] = posXCanFinal
    velo = 0;
    fogo = false
    att = 1;
    if (att == 1){
      tela = 1.2
    }
  }
  }else if (nivel == 3){
    Nivel3();
    
    xAleBau = 11;
    yAleBau = 4;
    cont[0] = cont[0] + 1
    if (cont[0] == 1){
      xAleCan = parseInt(random(2, 4));
      yAleCan = parseInt(random(2, 6));
    }
    image(img[19],x[11]+xRotBau, y[11]+yRotBau, 90, 90)
    image(img[18],x[10],y[10])
    
    if (cor[1] == 'green' && pressBau == false){
      xRotBau = r*Math.cos(anguloBau)
      yRotBau = r*Math.sin(anguloBau)
    
      anguloBau = anguloBau + Math.PI/50
    }
    if (BauHit) {
      somHit.play()
      x[10] = posXCanFinal
      velo = 0;
      fogo = false
      att = 1;
      if (att == 1) {
        tela = 1.3
      }
    }
  }else if (nivel == 4){
    Nivel4()
    
    image(img[19], x[11], y[11], 90, 90)
    image(img[18], x[10],y[10]+desX[5])
    
    xAleBau = 10;
    yAleBau = 5;
    
    XFechadura = posRealx[8]
    YFechadura = posRealy[7]+29
    
    desX[5] = desX[5] + acre[6]
    desX[6] = desX[6] + acre[7]
    desX[7] = desX[7] + acre[8]
    
    let somaCan = y[10] + desX[5]
    let soma1 = XFechadura + desX[6]
    let soma2 = YFechadura - 29 + desX[7]
      
      if (cor[1] == 'green' && pressBau == false && letras[3] == 1){
        if (soma2 <= posRealy[3]){
          acre[8] = 5
        }else {
          letras[3] = 2
        }
      }if (letras[3] == 2) {
        acre[8] = 0
        acre[7] = 5
        if (soma1 >= posRealx[12]) {
          letras[3] = 3;
        }
      }
      if (letras[3] == 3){
        acre[7] = 0
        acre[8] = -5
        if (soma2 <= posRealy[7] ){
          letras[3] = 4
        }
      }
      if (letras[3] == 4){
        acre[8] = 0
        acre[7] = -5
        if (soma1 <= posRealx[8]){
          letras[3] = 1;
          acre[7] = 0
        }
      }
      if (cor[0] == 'green' && pressCan == false && letras[4] == 1) {
        if (desX[5] <= posRealy[1] - posYCanFinal) {
          acre[6] = 5
        } else {
          letras[4] = 2
        }
      }
      if (letras[4] == 2) {
        acre[6] = -5
      }
      if (somaCan <= posRealy[7]) {
        letras[4] = 1
      }
    if (ChaveHit) {
      somHit.play()
      getChave = true
      ChaveDesc = 300
    }
    if(FechaduraHit){
      cont[10] = cont[10] + 1
      if (cont[10] == 1){
      somHit.play()
      }
      GaiolaHit = false
      gaiolaFechada = false
    }
    if (BauHit){
      somHit.play()
      x[10] = posXCanFinal
      velo = 0;
      fogo = false
      att = 1;
      if (att == 1) {
        tela = 1.4
      }
    }
  }else if (nivel == 5){
    Nivel5();
    
    xAleBau = 14;
    yAleBau = 5;
    
    image(img[19],x[11], y[11], 90, 90)
    image(img[18],x[10],y[10]+desX[8])
    
    desX[8] = desX[8] + acre[9]//canhão 
    desX[9] = desX[9] + acre[10]//FechaVer
    desX[10] = desX[10] + acre[11]//FechaAma
    desX[11] = desX[11] + acre[12]//ChaveAm
    desX[12] = desX[12] + acre[13
    ]//ChaveVer
    
    let somaCanY = y[10]+desX[8]
    let somaFechV = y[12] + desX[9]
    let somaFechA = y[13] + desX[10]
    let somaChavAm = y[14] + desX[11]
    let somaChavVe = y[15] + desX[12]
      
  //movimento Fechadura vermelha
    if (cor[0] == 'green' && cor[1] == 'green' && pressBau == false && letras[5] == 1){
      if (desX[9] <= posRealy[1]-y[12]+20) {
        acre[10] = 5
      } else {
        letras[5] = 2
      }
    }
      if (letras[5] == 2) {
        acre[10] = -5
      }
      if (somaFechV <= posRealy[7] - 20) {
        letras[5] = 1
      }
  //movimento fechadura Amarela
    if (cor[0] == 'green' && cor[1] == 'green' && pressBau == false && letras[6] == 1) {
      if (desX[10] <= posRealy[1] - y[13] + 20) {
        acre[11] = 7
      } else {
        letras[6] = 2
      }
    }
    if (letras[6] == 2) {
      acre[11] = -7
    }
    if (somaFechA <= posRealy[7] - 20) {
      letras[6] = 1
    }
  //Movimento Chave Amarela
    if (cor[0] == 'green' && cor[1] == 'green' && pressBau == false && letras [7] == 1) {
      if (desX[11] <= posRealy[1] - y[14] + 20) {
        acre[12] = 8
      } else {
        letras[7] = 2
      }
    }
    if (letras[7] == 2) {
      acre[12] = -8
    }
    if (somaChavAm <= posRealy[7] - 20) {
      letras[7] = 1
    }
  //Movimento Chave Vermelha
    if (cor[0] == 'green' && cor[1] == 'green' && pressBau == false && letras[8] == 1) {
      if (desX[12] <= posRealy[1] - y[15] + 20) {
        acre[13] = 8
      } else {
        letras[8] = 2
      }
    }
    if (letras[8] == 2) {
      acre[13] = -8
    }
    if (somaChavVe <= posRealy[7] - 20) {
      letras[8] = 1
    }
    //movimento do canhão
    if (cor[0] == 'green' && cor[1] == 'green' && pressBau == false && letras[9] == 1) {
      if (desX[8] <= posRealy[1] - posYCanFinal - 20) {
        acre[9] = 5
      } else {
        letras[9] = 2
      }
    }
    if (letras[9] == 2) {
      acre[9] = -5
    }
    if (somaCanY <= posRealy[7] - 20) {
      letras[9] = 1
    }
    if (ChaveAmHit){
      somHit.play()
      getChaveAma = true
      x[14] = 530
      y[14] = 680
      desX[11] = 0;
      letras[7] = 0
      acre[12] = 0
    }
    if(FechaduraAmaHit){
      cont[11] = cont[11] + 1
      if (cont[11] == 1){
      somHit.play()
      }
      cont[4] = cont[4] + 1
      if (cont[4] == 1){
      gaiolaFechada1 = false
      }
    }
    if (ChaveVeHit){
      somHit.play()
      getChaveVer = true
      x[15] = 580
      y[15] = 680
      desX[12] = 0
      acre[13] = 0
      letras[8] = 0
    }
    if (FechaduraVerHit){
      cont[12] = cont[12] + 1
      if (cont[12] == 1){
      somHit.play()
      }
      gaiolaFechada2 = false
    }
    if (BauHit){
      somHit.play()
      x[10] = posXCanFinal
      velo = 0;
      fogo = false
      att = 1;
      if (att == 1) {
        tela = 1.5
      }
    }
  }
  if (fogo == true) {
    cont[5] = cont[5] + 1
    if(cont[5] == 1){
    somCanhao.setVolume(0.2)
    somCanhao.play()
    }
    if (nivel == 1){
      add1 = desX[2]
      add = 0
      add2 = 0
    }
    velo += 10
    if (nivel == 2){
      add1 = desX[3]
      cont[13] = cont[13] + 1
      if (cont[13] == 1){
        add = desX[4]
      }
    }
    if (nivel == 3){
      add = 0
      add1 = yRotBau
      add2 = xRotBau
    }
    if (nivel == 4){
      add1 = 0
      add2 = 0
      cont[14] = cont[14] + 1
      if (cont[14] == 1){
        add = desX[5]
      } 
    }
    if (nivel == 5){
      add1 = 0
      add2 = 0
      cont[15] = cont[15] + 1
      if (cont[15] == 1){
        add = desX[8]
      }
    }
    fill(0)
    circle(x[10] + 46 + velo, y[10] + add, 15)
    let somaXbala = x[10] + 56 + velo
    if (somaXbala >= posRealx[15] || GaiolaHit == true || FechaduraAmaHit == false && gaiola1Hit == true || FechaduraVerHit == false && gaiola2Hit == true || ChaveHit == true) {
      fogo = false;
      x[10] = posXCanFinal
      velo = 0;
      cont[5] = 0
      cont[13] = 0
      cont[14] = 0
      cont[15] = 0
    }
  }
  if (fogo == true){
  BauHit = collideRectCircle(x[11] - 29+add2, y[11] - 29+add1, 58, 58, x[10] + 46 + velo,y[10]+add, 15)
  }
  if (nivel == 4){
  ChaveHit = collideRectCircle(posRealx[14]-20, posRealy[2]-40,50,50,x[10] + 46 + velo,y[10]+add, 15)
  
  if (gaiolaFechada == true){
  GaiolaHit = collideRectCircle(posRealx[8], posRealy[7], 232, 232,x[10] + 66 + velo,y[10]+add, 15)
  }
  if (getChave == true){
    FechaduraHit = collideRectCircle(XFechadura+desX[6]-29,YFechadura-58+desX[7],58,58,x[10] + 66 + velo,y[10]+add, 15)
  }
  }
  if (nivel == 5){
    if (gaiolaFechada1 == true){
      gaiola1Hit = collideRectCircle(posRealx[8],posRealy[8],50,464,x[10] + 66 + velo,y[10]+add, 15)
      ChaveAmHit = collideRectCircle(x[14]-25,y[14] + desX[11]-15,50,30,x[10] + 66 + velo,y[10]+add,15) 
    }
    if (gaiolaFechada1 == true && getChaveAma == true){
      FechaduraAmaHit = collideRectCircle(x[13]-29,y[13]+ desX[10]-29,58,58,x[10] + 66 + velo,y[10]+add, 15)
    }if (gaiolaFechada1 == false){
      if (gaiolaFechada2 == true){
      gaiola2Hit = collideRectCircle(posRealx[12],posRealy[8],50,464,x[10] + 66 + velo,y[10]+add, 15)}
      ChaveVeHit = collideRectCircle(x[15]-25,y[15] + desX[12]-15,50,30,x[10] + 66 + velo,y[10]+add, 15)
    }if (getChaveVer == true){
      FechaduraVerHit = collideRectCircle(x[12]-29,y[12]+ desX[9]-29,58,58,x[10] + 66 + velo,y[10]+add, 15)
    }
  }
  }else if (tela == 1.1){//pergunta1
    TeladeRepostas();
    text(operação[0], 570, 265)
    text(operação[0]-NumAle1[0], 370, 265)
    if (errou == true) {
      Perdeu();
    }
    if (acertou == true) {
      somAcertou.play()
      nivel = 2;
      tela = 1
      ResetNivel();
    }
  }else if (tela == 1.2){
    TeladeRepostas();
    text(operação[1]*2, 570, 265)
    text(operação[1], 370, 265)
    if (errou == true) {
      Perdeu();
    }
    if (acertou == true) {
      tela = 1
      nivel = 3
      somAcertou.play()
      ResetNivel()
    }
  }else if (tela == 1.3) {
    TeladeRepostas();
    text(operação[2]+1, 570, 265)
    text(operação[2], 370, 265)
    if (errou == true) {
      Perdeu();
    }
    if (acertou == true) {
      tela = 1
      nivel = 4
      somAcertou.play()
      ResetNivel()
    }
  }else if (tela == 1.4) {
      TeladeRepostas();
      text('0', 570, 265)
      text('24', 370, 265)
      if (errou == true) {
        Perdeu();
      }
      if (acertou == true) {
        tela = 1
        nivel = 5
        somAcertou.play()
        ResetNivel()
      }
    }else if (tela == 1.5) {
      TeladeRepostas();
      text(operação[3], 570, 265)
      text(operação[3]+2, 370, 265)
      if (errou == true) {
        Perdeu();
      }
      if (acertou == true) {
        tela = 4
      }
//----------TELA-DAS-INSTRUÇÕES---------
    
  }else if (tela == 2){
    ParametrosSom()
    image(img[16],centx,centy)//1å tela de instruções
    
    //texto
    push()
    fill(0)
    textFont(fonte)
    textSize(25)
    textAlign(LEFT)
    textLeading(35)
    text('Vocês estão prontas crianças? No Quiz do Pirata\n você  terá que ajudar o pirata Miguel à capturar\n os baús do tesouro. Mas para isso, você terá que\n responder algumas cálculos básicos de matemá-\ntica. lembre-se que existem ordens a se seguir nos\n cálculos! primeiro os parênteses, segundo as ope-\nrações de multiplicação e divisão e por último as\n operações de soma e subtração. Caso apareça\n em uma pergunta uma multiplicação e divisão ao...',385,100)
    pop()
    
    BotaoVoltar()
    BotaoAvanca();
  
//--------TELA-DAS-INSTRUÇÕES-1---------
     
  }else if (tela == 2.1){
    ParametrosSom();
    image(img[16],centx,centy)//2å tela de instruções
  
    //texto
    push()
    fill(0)
    textFont(fonte)
    textSize(25)
    textAlign(LEFT)
    textLeading(35)
    text('mesmo tempo, dê prioridade da esquerda para\n direita. Ao dar inicio ao jogo, por alguns isntantes,\n aparecerá uma pergunta, você deve responder o\n cálculo metalmente, logo em seguida você deverá\n posicionar o canhão e o baú em posições especifi-\ncadas pelas cordenadas (x,y). Após o posiciona-\nmento, você deverá acertar o baú com a bala ao\n clicar em "FOGO!", ao acertar o baú, você terá que\n clicar na resposta correta da pergunta que...',385,100)
  pop()
  
    BotaoX();
    BotaoVoltar();
    BotaoAvanca();
    
    
//--------TELA-DAS-INSTRUÇÕES-2---------
    
  }else if (tela == 2.2){
    ParametrosSom();
    image(img[16],centx,centy)//3å tela de instruções
    
    //texto
    push()
    fill(0)
    textFont(fonte)
    textSize(25)
    textAlign(LEFT)
    textLeading(35)
    text('apareceu no início da fase. Este jogo foi desenvol-\nvido para os alunos do 6° ano do ensino fundamen-\ntal. Ele contempla a seguinte norma da base na-\ncional comum curricular (BNCC):\n • EF06MA16: Associar pares ordenados de núme-\nros a pontos do plano cartesiano do 1º quadrante,\n em situações como a localização dos vértices\n de um polígono.', 385, 100)
    pop()
    
    BotaoX();
    BotaoVoltar();

//---------TELA-DE-CREDITOS-------------
    
  }else if (tela == 3){
    //ParametrosSom();
    image(img[0],centx,centy)//fundoAtras
    image(img[14],centx,centy)//Créditos1
    BotaoVoltar();
    BotaoAvanca();
    
//----------TELA-DE-CREDITOS-1----------
      
  }else if(tela == 3.1){    
    ParametrosSom();
    image(img[0],centx,centy)//fundoAtras
    image(img[15],centx,centy)//Creditos2
    BotaoX();
    BotaoVoltar();
    
  }else if(tela == 4){
    cont[7] = cont[7] + 1
    som.setVolume(0)
    if (cont[7] ==1){
    somZerou.play()
    }
    image(img[29],centx,centy+100,970,725)
    BotaoX();
  }
}


function mouseClicked(){ //(o que é - onde leva)
  if (tela == 0){//TELA MENU
    if(mouseX >= x[0] && mouseX <= x[0]+larg[0] && mouseY >= y[0] && mouseY <= y[0]+alt){//botao iniciar - tela do jogo
       tela = 1
       nivel = 1;
       somButton.play()
      
    }else if(mouseX >= x[1] & mouseX <= x[1]+larg[1] && mouseY >= y[1] && mouseY <= y[1]+alt){// botao instrucoes - tela de instruções
       tela = 2;
       somButton.play()
    }else if(mouseX >= x[2] && mouseX <= x[2]+larg[2] && mouseY >= y[2] && mouseY <= y[2]+alt){//botao creditos - tela de créditos 
       tela = 3;
       somButton.play()
    }
  }else if (tela == 1){//TELA DO JOGO
    BotaoXClicked();
    
    if (mouseX >= x[11]-200 && mouseX <= x[11] +100 && mouseY >= y[11]-100 && mouseY <= y[11] + 100) {
          pressBau = true;
    }else if (mouseX >= x[10] - 100 && mouseX <= x[10] + 100 && mouseY >= y[10] - 100 && mouseY <= y[10] + 100) {
        pressCan = true;
    }else if (mouseX >= 350 && mouseX <= 490 && mouseY >= 550 && mouseY <= 690) {
      if (cor[0] == 'green' && cor[1] == 'green'){
        fogo = true;
      }
    }
  }else if (tela == 1.1){
    
    if (mouseX >= 285 && mouseX <= 485 && mouseY >= 200 && mouseY <= 300) {
        errou = true
    
    }else if (mouseX >= 500 && mouseX <= 700 && mouseY >= 200 && mouseY <= 300) {
        acertou = true
        
    }BotaoXClicked();
  
  }else if (tela == 1.2){
    
    if (mouseX >= 285 && mouseX <= 485 && mouseY >= 200 && mouseY <= 300) {
      acertou = true
      
    } else if (mouseX >= 500 && mouseX <= 700 && mouseY >= 200 && mouseY <= 300) {
      errou = true
    
    }BotaoXClicked();
  
  }else if (tela == 1.3) {
  
    if (mouseX >= 285 && mouseX <= 485 && mouseY >= 200 && mouseY <= 300) {
      acertou = true
  
    } else if (mouseX >= 500 && mouseX <= 700 && mouseY >= 200 && mouseY <= 300) {
      errou = true
  
    }BotaoXClicked();
    
  }else if (tela == 1.4) {
  
    if (mouseX >= 285 && mouseX <= 485 && mouseY >= 200 && mouseY <= 300) {
      errou = true
  
    }else if (mouseX >= 500 && mouseX <= 700 && mouseY >= 200 && mouseY <= 300) {
      acertou = true
  
    }BotaoXClicked();
  
  }else if (tela == 1.5) {
  
    if (mouseX >= 285 && mouseX <= 485 && mouseY >= 200 && mouseY <= 300) {
      errou = true
  
    }else if (mouseX >= 500 && mouseX <= 700 && mouseY >= 200 && mouseY <= 300) {
      acertou = true
  
    }if (mouseX >= x[4] - larg[4] / 2 && mouseX <= x[4] + larg[4] / 2 && mouseY >= y[4] - larg[4] / 2 && mouseY <= y[4] + larg[4] / 2) {
      tela = 0
      somButton.play()
      Reset();
    }
  
  }else if (tela == 2){//TELA DAS INSTRUÇÕES
    
    if (mouseX >= x[3] - larg[3] / 2 && mouseX <= x[3] + larg[3] / 2 && mouseY >= y[3] - larg[3] / 2 && mouseY <= y[3] + larg[3] / 2) {//botão voltar - tela do menu
    somButton.play()
      tela = 0

    }else if (mouseX >= x[5]-larg[5]/2 && mouseX <= x[5]+larg[5]/2 && mouseY >= y[5]-larg[5]/2 && mouseY <= y[5]+larg[5]/2) {// botao avancar - tela 1 das instruções 
    somButton.play()
      tela = 2.1;
    }
  }else if (tela == 2.1){//TELA DAS INSTRUÇÕES 1
    if (mouseX >= x[3]-larg[3]/2 && mouseX <= x[3]+larg[3]/2 && mouseY >= y[3]-larg[3]/2 && mouseY <= y[3]+larg[3]/2){//botao voltar - tela de instruções
    somButton.play(1)
      tela = 2;
    }else if (mouseX >= x[5]-larg[5]/2 && mouseX <= x[5]+larg[5]/2 && mouseY >= y[5]-larg[5]/2 && mouseY <= y[5]+larg[5]/2) {//botao avançar- tela 2 das instruções 
    somButton.play()
      tela = 2.2;

    }BotaoXClicked();
  }else if (tela == 2.2){//TELA DAS INSTRUÇÕES 2
    if(mouseX >= x[3]-larg[3]/2 && mouseX <= x[3]+larg[3]/2 && mouseY >= y[3]-larg[3]/2 && mouseY <= y[3]+larg[3]/2){//botao voltar - tela 1 das instruções 
    somButton.play()
      tela = 2.1;
    }BotaoXClicked();
  }else if (tela == 3){//TELA DE CRÉDITOS 
    if (mouseX >= x[3]-larg[3]/2 && mouseX <= x[3]+larg[3]/2 && mouseY >= y[3]-larg[3]/2 && mouseY <= y[3]+larg[3]/2){//botao voltar - tela do menu
    somButton.play()
      tela = 0;
      
    }else if (mouseX >= x[5]-larg[5]/2 && mouseX <= x[5]+larg[5]/2 && mouseY >= y[5]-larg[5]/2 && mouseY <= y[5]+larg[5]/2) {//botao avancar - tela 1 dos creditos
    somButton.play()
      tela = 3.1;
    }
  }else if (tela == 3.1){//TELA DE CRÉDITOS 1
    if (mouseX >= x[3]-larg[3]/2 && mouseX <= x[3]+larg[3]/2 && mouseY >= y[3]-larg[3]/2 && mouseY <= y[3]+larg[3]/2){//botao voltar - tela de creditos
    somButton.play()
      tela = 3;
    }BotaoXClicked();
  }else if (tela == 4){
    BotaoXClicked();
  }
}
