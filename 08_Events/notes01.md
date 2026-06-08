- in the javascript events runs in sequentials order with some exceptions . 
-        <li><img width="200px" id="owl" src="https://images.pexels.com/photos/3532552/pexels-photo-3532552.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" onclick="alert('Hello owl .')" ></li>
- the above apporach is not feasible when we scale the code . 

### bubbling 
'''
Child Element
     ↑
Parent Element
     ↑
Body
     ↑
HTML
     ↑
Document
'''
CAPTURING
Document
   ↓
HTML
   ↓
BODY
   ↓
Grandparent
   ↓
Parent
   ↓
Button

TARGET
Button

BUBBLING
Button
   ↑
Parent
   ↑
Grandparent
   ↑
BODY
   ↑
HTML
   ↑
Document


