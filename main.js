

random_number = Math.floor((Math.random() * quick_draw_data_set.length) + 1);
 console.log(quick_draw_data_set[random_number]);
  sketch = quick_draw_data_set[random_number];
   document.getElementById('sketch_name').innerHTML = 'Sketch To be Drawn: ' + sketch; 
   timer_counter = 0;
    timer_check = "";
     drawn_sketch = ""; 
     answer_holder = ""; 
     score = 0;

     
function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}

function clearCanvas() {

    background("white");
}