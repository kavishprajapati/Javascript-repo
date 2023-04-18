class BaseClass {
    constructor(id) {
        this.element = document.getElementById(id);

    }
    render(renderFun) {
        const childElement = renderFun();
        this.element.innerHTML = '';
        this.element.append(childElement);
    }
    listenEvent() {
        
    }
}
