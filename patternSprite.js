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
   
Compatibility: RMMV and RMMZ
*/

function spritePattern(t,p){
	var ev, pose, dir;
	/* Object, this or number id */
	if(typeof(t) == "number"){
		ev=t;
	}
	if(typeof(t) == "object"){
		ev=t._eventId;
	}
	
	/* Determines the pose */
	if(p==1 || p==2 || p==3){
		dir=2;
		pose=p-1;
	}	
	if(p==4 || p==5 || p==6){
		dir=4;
		pose=p-4;
	}	
	if(p==7 || p==8 || p==9){
		dir=6;
		pose=p-7;
	}	
	if(p==10 || p==11 || p==12){
		dir=8;
		pose=p-10;
	}
	
	/* Affects the defined map event */
	$gameMap._events[ev]._pattern=pose;
	$gameMap._events[ev]._originalPattern=pose;
	$gameMap._events[ev]._direction=dir;
}
