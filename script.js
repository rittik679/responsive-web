function moveButton() {
    var button = document.getElementById('btn');
    
    // Get the original position of the button
    var originalTop = button.offsetTop;
    var originalLeft = button.offsetLeft;
    
    // Define the radius within which the button can move
    var radius = 50; // Change this value to adjust the radius
    
    // Calculate random angles
    var angle = Math.random() * 2 * Math.PI;
    
    // Calculate random positions within the radius using trigonometry
    var randomTop = originalTop + Math.sin(angle) * radius;
    var randomLeft = originalLeft + Math.cos(angle) * radius;
    
    // Set the new position of the button
    button.style.top = randomTop + 'px';
    button.style.left = randomLeft + 'px';
}