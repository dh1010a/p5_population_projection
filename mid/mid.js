let bg;
let mainfont,mainfontsize = 100;
let size = 20;
let year = 1960;
let table;
let arr;
let maxarr;
let namearr;
let count=1;
let rowtemp=3;
let countryfont;
let earth,asia,northa,southa,eu,aust;
let korea;
let korearate;



function preload(){
  table = loadTable('data/data.csv', 'csv', 'header');
  bg = loadImage('backback.png');
  mainfont=loadFont('fonts/NotoSansKR-Bold.otf');
  countryfont=loadFont('fonts/Poppins-Regular.ttf');
  korea = loadImage('korea.png');
  
}
function setup() {
  createCanvas(1500,700);
   textAlign(CENTER, CENTER);
   arr = table.getColumn(count);
   maxarr = table.getColumn(24 + count);
   namearr = table.getColumn(0);
   
}

function writeRank(){
  let i = 6;
  let j;
  let tmp;
  let  num = 0;
  textFont(countryfont);
  textSize(size);
  fill('#FFFFFF');
  maxarr = table.getColumn(24 + count);
  arr = table.getColumn(count);
  while(i < 11)
  {
    
    for(j=0;j < 45;j++)
    {
      
      if(maxarr[i] == arr[j] && num < 5)
      {
        if(i >6){
          if(maxarr[i] == maxarr[i-1])
          {
            break;
          }
        }
        if(num%5 == 0)
        {
          fill('#FC5230');
          text(namearr[j],1330,70);
          text(maxarr[i],1330, 120);
          text('%',1370,120);
        }
        fill('#FFFFFF');
        if(num%5 == 1)
        {
          text(namearr[j],1330,195);
          text(maxarr[i],1330, 245);
          text('%',1370,245);
        }
        if(num%5 == 2)
        {
          text(namearr[j],1330,320);
          text(maxarr[i],1330, 370);
          text('%',1370,370);
        }
        if(num%5 == 3)
        {
          text(namearr[j],1330,440);
          text(maxarr[i],1330, 490);
          text('%',1370,490);
        }
        if(num%5 == 4)
        {
          text(namearr[j],1330,565);
          text(maxarr[i],1330, 615);
          text('%',1370,615);
        }
        num++;
      }
    }
    i++;
    
  }
  
}

function yearWrite()
{
  
  textFont(mainfont);
  textSize(mainfontsize);
  let tmpyear;
  let i = 1,j=1000;
  let letter1,letter2,letter3,letter4;
  tmp = year + (count * 5) - 5;
  fill('#3A4CA8');
  
  while ( i < 5)
  {
    tmpyear = int(tmp / j);
    if (i == 1)
    {
      letter1 = char(48 + tmpyear);
      text(letter1, 500, 40);
    }
    
    if (i == 2)
    {
      letter2 = char(48 + tmpyear);
      text(letter2, 560, 40);
    }
    if (i == 3)
    {
      letter3 = char(48 + tmpyear);
      text(letter3, 620, 40);
    }
    if (i == 4)
    {
      letter4 = char(48 + tmpyear);
      text(letter4, 680, 40);
    }
    i++;
    tmp = int(tmp%j);
    j /= 10;
    
  }

}


function draw_circle(){
  maxarr = table.getColumn(24 + count);
  earth = maxarr[0];
  asia = maxarr[1];
  northa = maxarr[2];
  southa = maxarr[3];
  eu = maxarr[4];
  aust = maxarr[5];
  korearate = arr[2];
  
  noStroke();
  fill('#CFE4FF');
  ellipseMode(RADIUS);
  ellipse(250,310,northa * 2,northa * 2);
  fill('#5A71CA');
  ellipseMode(CENTER);
  ellipse(250,310,northa * 3 * 1.2,northa * 3 * 1.2);
  fill('#CFE4FF');
  fill('#FFFFFF');
  textSize(int(northa * 1.3));
  text(round(northa,2),250,307);
   fill('#CFE4FF');
  
  ellipseMode(RADIUS);
  ellipse(330,510,southa * 2,southa * 2);
  fill('#5A71CA');
  ellipseMode(CENTER);
  ellipse(330,510,southa * 3 * 1.2,southa * 3 * 1.2);
  fill('#FFFFFF');
  textSize(int(southa * 1.3));
  text(round(southa,2),330,507);
  fill('#CFE4FF');
  
  ellipseMode(RADIUS);
  ellipse(590,250,eu * 2,eu * 2);
  fill('#5A71CA');
  ellipseMode(CENTER);
  ellipse(590,250,eu * 3 * 1.2,eu * 3 * 1.2);
  fill('#FFFFFF');
  textSize(int(eu * 1.3));
  text(round(eu,2),590,247);
  fill('#CFE4FF');
  
  ellipseMode(RADIUS);
  ellipse(800,310,asia * 2,asia * 2);
  fill('#5A71CA');
  ellipseMode(CENTER);
  ellipse(800,310,asia * 3 * 1.2,asia * 3 * 1.2);
  fill('#FFFFFF');
  textSize(int(asia * 1.3));
  text(round(asia,2),800,307);
  fill('#CFE4FF');
  
  ellipseMode(RADIUS);
  ellipse(970,550,aust * 2,aust * 2);
  fill('#5A71CA');
  ellipseMode(CENTER);
  ellipse(970,550,aust * 3 * 1.2,aust * 3 * 1.2);
  fill('#FFFFFF');
  textSize(int(aust * 1.3));
  text(round(aust,2),970,547);
  fill('#CFE4FF');
  fill('#FFC5C5');
  
  ellipseMode(RADIUS);
  ellipse(610,615,korearate * 2, korearate * 2);
  fill('#F94A4A');
  ellipseMode(CENTER);
  ellipse(610,615,korearate * 3 * 1.2,korearate * 3 * 1.2);
  fill('#FFFFFF');
  textSize(int(korearate * 1.3));
  text(round(korearate,2),610,610);
  
}



function draw() {
     background(bg); 
  yearWrite();
  writeRank();
  draw_circle();
  print(mouseX,mouseY);
  image(korea, 450,590, 90, 60);
}

function keyPressed() {
  
  if (keyCode === RIGHT_ARROW) {
    if (count < 22){
      count++;
    }
  }
  if (keyCode === LEFT_ARROW) {
    if (count > 1){
      count--;
    }
  }  
}
