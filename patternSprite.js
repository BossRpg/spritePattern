/*:
*@author Dev_With_Coffee
*@plugindesc Define any pose of a sprite

*@help Here's the command:
spritePattern(Event ID, Pose)

Event ID: this or number

Pose: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12

Example (Event current):
   spritePattern(this, 1)

Example (Other Event by ID):
   spritePattern(2, 1)
*/

function spritePattern(t,p){
	var ev, pose, dir;
	if(typeof(t) == "number"){
		ev=t;
	}
	if(typeof(t) == "object"){
		ev=t._eventId;
	}
	
	if(p==1 || p==2 || p==3){
		dir=2;
		if(p==1){pose=0;}
		if(p==2){pose=1;}
		if(p==3){pose=2;}
	}
	
	if(p==4 || p==5 || p==6){
		dir=4;
		if(p==4){pose=0;}
		if(p==5){pose=1;}
		if(p==6){pose=2;}
	}
	
	if(p==7 || p==8 || p==9){
		dir=6;
		if(p==7){pose=0;}
		if(p==8){pose=1;}
		if(p==9){pose=2;}
	}
	
	if(p==10 || p==11 || p==12){
		dir=8;
		if(p==10){pose=0;}
		if(p==11){pose=1;}
		if(p==12){pose=2;}
	}
	
	$gameMap._events[ev]._pattern=pose;
	$gameMap._events[ev]._originalPattern=pose;
	$gameMap._events[ev]._direction=dir;
}
