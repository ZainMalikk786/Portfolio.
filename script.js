```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Animation</title>
<style>
    #box {
        width: 100px;
        height: 100px;
        background-color: red;
        position: absolute;
    }
</style>
</head>
<body>
<div id="box"></div>

<script>
    const box = document.getElementById('box');
    let position = 0;
    let direction = 1;

    function moveBox() {
        position += direction;
        box.style.left = position + 'px';

        if (position >= window.innerWidth - box.offsetWidth || position <= 0) {
            direction *= -1;
        }

        requestAnimationFrame(moveBox);
    }

    moveBox();
</script>
</body>
</html>
```

This code creates a red box that moves horizontally across the screen. The `moveBox` function updates the position of the box each frame and reverses its direction when it reaches the edges of the screen. The animation is achieved using the `requestAnimationFrame` method, which allows for smooth and efficient animations in the browser. Feel free to customize the code to create different types of animations for your website.
