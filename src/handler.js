

		//Snake Game Dev
		
	   
		
		function init(){
					//console.log("init");
					
					canvas=document.getElementById("mycanvas");
					drawable=canvas.getContext("2d");
					W=canvas.width;
					H=canvas.height;
                    game_end=false;
                    score=0;
                    name="";
                    food=getRandomFood();
                    document.addEventListener("keydown",pressedKey);     
                                
                snake ={
                    
                    init_length:1,
                    color:"yellow",
                    cells:[],
                    direction:"right",
                    
                    createSnake:function(){
                        
                        for(var i=this.init_length-1;i>=0;i--){
                            this.cells.push({x:i,y:0});
                        }
                        name=prompt("Enter Your Name: ");
                    },
                        
                    drawSnake:function  (){
                        drawable.fillStyle=this.color;
                        for(var i=0;i<this.cells.length;i++){
                            drawable.strokeStyle="black";
                            drawable.strokeRect(this.cells[i].x*10,this.cells[i].y*10,10,10);
                            drawable.fillRect(this.cells[i].x*10,this.cells[i].y*10,10,10);
                        }
                    },
                    
                    updateSnake:function(){
                        
                        var headX=this.cells[0].x;
                        var headY=this.cells[0].y;  
                        
                        
                        
                        var nextX;
                        var nextY;
                        
                        if(headX===food.x && headY==food.y){
                            food=getRandomFood();
                            score++;
                        }
                        else{
                                this.cells.pop();
                        }
                        
                        if(this.direction=="Left"){
                            nextX=headX-1;
                            nextY=headY;
                        }else if(this.direction=="Down"){
                            nextX=headX;
                            nextY=headY+1;
                        }else if(this.direction=="Up"){
                            nextX=headX;
                            nextY=headY-1;
                        }else{
                            nextX=headX+1;
                            nextY=headY;
                        }
                            
                            
                            
                            
                            
                            
                            
                            
                        this.cells.unshift({x:nextX,y:nextY});
                        if((this.cells[0].x)*10>=W){
                            game_end=true;
                        }
                        if ((this.cells[0].y)*10>=H){
                            game_end=true;
                        }//else if((this.cells[0].x)*<=x{}
                        
                        if(this.cells[0].x<0){
                            game_end=true;
                        }
                        if(this.cells[0].y<0){
                                game_end=true;
                        }
                        
                    },
                };
            
         //function pressedKey(e){console.log(e);}
         
           function pressedKey(e){
                console.log("You pressed a key!!!");
                console.log(e);
                if(e.key=="ArrowUp"){
                    snake.direction="Up";
                }else if(e.key=="ArrowDown"){
                    snake.direction="Down";
                }else if(e.key=="ArrowLeft"){
                    snake.direction="Left";
                }else{
                    snake.direction="Right";
                }
                
             
        }
            
			 snake.createSnake();		
           
					
		}
        
          
		
		
        function getRandomFood(){
            var foodX=Math.round((Math.random()*(W-10)/10));
            var foodY=Math.round((Math.random()*(H-10))/10);
            foodColors=["red","aqua","orchid","blue","pink"];
            var i=Math.round(Math.random()*foodColors.length);
            
            var food={
                x:foodX,
                y:foodY,
                color:foodColors[i],
            
            };
            
            return food;
        }



        function draw(){
            var msg=name+" Your Score:"+score;
            
             drawable.clearRect(0,0,W,H);
            snake.drawSnake();
            drawable.fillStyle=food.color;
          
            drawable.fillRect(food.x*10,food.y*10,10,10);
            
            drawable.fillStyle="white";
            drawable.font="10px Roboto";
            drawable.fillText(msg,200,10);
			
			
		}
		

		
		function update(){
           
            snake.updateSnake();
            if(game_end==true){
                clearInterval(f);
                alert(name+" Your game is over!!!");
            }
                        
					
		}
		
		
		function gameLoop(){
            //console.log("gameloop");
			draw();
			update();
		}
		
		init();
		
		
var f=setInterval(gameLoop,100);