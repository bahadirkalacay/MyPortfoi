import * as dat from "dat.gui";

const gui = new dat.GUI();

export default class sinWave {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext("2d");
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.wave = {
            y: this.canvas.height / 2,
            waveLength: 0.01,
            amplitude: 100,
            frequency: 0.01,
        };
        this.strokeColor = {
            h: 200,
            s: 50,
            l: 50,
        };
        this.bgColor = {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0.03,
        };
        this.increment = this.wave.frequency;

        // this.setupGUI();
        this.resizeWindow();
        this.animate();
    }

    resizeWindow(){
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        })
    }

    //  show control bar on the screen
    setupGUI() {
        const waveFolder = gui.addFolder("wave");
        waveFolder.add(this.wave, "y", 0, this.canvas.height);
        waveFolder.add(this.wave, "waveLength", -0.01, 0.01);
        waveFolder.add(this.wave, "amplitude", -300, 300);
        waveFolder.add(this.wave, "frequency", -0.01, 1);
        waveFolder.open(); 

        const strokeColorFolder = gui.addFolder("strokeColor");
        strokeColorFolder.add(this.strokeColor, "h", 0, 255);
        strokeColorFolder.add(this.strokeColor, "s", 0, 100);
        strokeColorFolder.add(this.strokeColor, "l", 0, 100);

        const backgroundColorFolder = gui.addFolder("bgColor");
        backgroundColorFolder.add(this.bgColor, "r", 0, 255);
        backgroundColorFolder.add(this.bgColor, "g", 0, 255);
        backgroundColorFolder.add(this.bgColor, "b", 0, 255);
        backgroundColorFolder.add(this.bgColor, "alpha", 0, 1);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.context.fillStyle = `rgba(${this.bgColor.r}, ${this.bgColor.g}, ${this.bgColor.b}, ${this.bgColor.alpha})`;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.beginPath();

        this.context.moveTo(0, this.canvas.height / 2);
        for (let i = 0; i < this.canvas.width; i++) {
            this.context.lineTo(i, this.sinWaveFun(i, this.increment));
        }
        const strokeColorNew = this.changingStrokeColor();
        this.context.strokeStyle = `hsl(${strokeColorNew}, ${this.strokeColor.s}%, ${this.strokeColor.l}%)`;
        this.context.stroke();
        this.increment += this.wave.frequency;
    }

    changingStrokeColor() {
        return Math.abs(Math.sin(this.increment) * this.strokeColor.h);
    }


    sinWaveFun(x, increment) {
        return (
            Math.sin(x * this.wave.waveLength + increment) *
                this.wave.amplitude *
                Math.sin(increment) +
            this.wave.y
        );
    }
}


