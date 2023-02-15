import CustomCanvas from "./custom_canvas.js";

// TODO: Remove
const img = new Image();
img.src = "assets/images/848762d6b81259e2fde48e13f4e2511f.jpg";

const renderLoop = (canvas) => {
    canvas.getContext().fillStyle = "#0000F0";
    canvas.getContext().fillRect(0, 0, canvas.getWidth(), canvas.getHeight());

    canvas.applyTransforms();

    canvas.getContext().drawImage(img, 0, 0, img.width, img.height);

    canvas.clearTransforms();

    requestAnimationFrame(() => renderLoop(canvas));
};

const init = () => {
    const canvas = new CustomCanvas();

    document.body.appendChild(canvas.getElement());

    renderLoop(canvas);
};

init();