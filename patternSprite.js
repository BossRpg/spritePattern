/*:
*@author Dev_With_Coffee
*@plugindesc Define any pose of a sprite

*@help Here's the command:
spritePattern(Event ID, pattern, direction)

Event ID: this or number

pattern: 0, 1, 2
   
Directions:
   Down = 2
   Left = 4
   Right = 6
   Up = 8
   
Example (Event current):
   spritePattern(this, 0, 2)
*/

function spritePattern(t,p,d){
   /* Check number */
   var ev;
   if(typeof(t) == "number"){
      ev=t;
   }
   if(typeof(t) == "object"){
      ev=t._eventId;
   }
   $gameMap._events[ev]._pattern=p;
   $gameMap._events[ev]._originalPattern=p;
   $gameMap._events[ev]._direction=d;
}