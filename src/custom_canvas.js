class CustomCanvas {
    constructor() {
        this._element = document.createElement("canvas");
        // TODO: Remove
        this._element.width = 1280;
        this._element.height = 720;

        this._context = this._element.getContext("2d");
    }

    getElement() {
        return this._element;
    }

    getContext() {
        return this._context;
    }

    getWidth() {
        return this._element.width;
    }

    getHeight() {
        return this._element.height;
    }

    applyTransforms() {
      
    }

    clearTransforms() {
        this._context.setTransform(1, 0, 0, 1, 0, 0);
    }
}

export default CustomCanvas;