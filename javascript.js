<!DOCTYPE html>
<html>
<head>
<title></title>
</head>
<script type="text/javascript"></script>
<body>
<p id="demo">JavaScript can change HTML content.</p>

<button type="button" onclick='document.getElementById("demo").innerHTML = "Hello JavaScript!"'>Click Me!</button>

<p></p>

 <button type="button" onclick="document.getElementById('demo').style.fontSize='35px'">Click Me!</button>
 
  <h2>JavaScript in Body</h2>
  
  <p id="demo"></p>
  <script>
  document.getElementById("demo").innerHTML = "My First JavaScript";
  </script>
  
  <h2>My First Web Page</h2>
  <p>My First Paragraph.</p>
  
  <p id="demo"></p>
  
  <script>
  document.getElementById("demo").innerHTML = 5 + 6;
  </script>
  
  <h2>The window.print() Method</h2>
  
  <p>Click the button to print the current page.</p>
  
  <button onclick="window.print()">Print this page.</button>
</body>
</html>