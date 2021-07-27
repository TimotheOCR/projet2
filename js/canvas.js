
var canvas, ctx;
var mouseX,mouseY,mouseDown=0; 
var touchX,touchY;

let signature = {
    init : function (){
        
        canvas = document.getElementById('newCanvas'); 
        if (canvas.getContext)
            ctx = canvas.getContext('2d');
        if (ctx) {
            canvas.addEventListener('mousedown', function(e){
                signature.mouseDown(e)
            });
            canvas.addEventListener('mousemove', function(e){
                signature.mouseMove(e)
            });
            window.addEventListener('mouseup', function(e){
                signature.mouseUp(e)
            });
            canvas.addEventListener('touchstart',function(e){
                signature.touchStart(e)
            });
            canvas.addEventListener('touchmove',function(e){
                signature.touchMove(e)
            }); 
            canvas.addEventListener('touchend',function(e){
                signature.touchEnd(e)
            })      
            
        }
    },

    dot : function  (ctx,x,y,size){
        ctx = canvas.getContext('2d');
        r=0;g=0;b=0;a=255;
        ctx.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI*2, true); 
        ctx.closePath();
        ctx.fill();
    },

    clear : function (){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    },

    mouseDown : function (e){
        if (!e) {
            e
        }
        
        mouseDown=1;
    },

    mouseUp : function (e){
        mouseDown=0;
        $("#fReserver").attr('disabled', false);
    },

    mouseMove : function(e) {
        e.preventDefault();
        if(mouseDown==1){
            signature.dot(this.ctx, e.offsetX, e.offsetY, 9);
        }
    },

    touchStart : function (e) {
        e.preventDefault();
        if (e.touches.length == 1) {              
            var touch = e.touches[0]; 
            var touchX=touch.clientX-touch.target.getBoundingClientRect().left;
            var touchY=touch.clientY-touch.target.getBoundingClientRect().top;

            signature.dot(this.ctx, touchX,  touchY, 9); // dessin

        } 
    },

    touchEnd : function(e){
        $("#fReserver").attr('disabled', false); // si le doigt quitte l'écran, on débloque la réservation
    },

    touchMove : function (e) {
     signature.touchStart(e);     
    },
}


$("#reserver").click(function(){  
    popUp.init();
    popUp.canvas();
    signature.init();
    signature.dot();
    $('#trans').css({"visibility":"visible"});

});
