import { WindowsRender } from "./render/WindowsRender";
import { AndroidRender } from "./render/AndroidRender";
import { LinuxRender } from "./render/LinuxRender";
import { MacOSRender } from "./render/MacOSRender";
import { DesenharVetor } from "./desenho/DesenharVetor";
import { DesenharBitmap } from "./desenho/DesenharBitmap";
import { Desenhar3D } from "./desenho/Desenhar3D";

const windowsRender = new WindowsRender();
const desenharVetor = new DesenharVetor(windowsRender);
desenharVetor.desenhar();

console.log("-----");

const androidRenderer = new AndroidRender();
const desenhar3D = new Desenhar3D(androidRenderer);
desenhar3D.desenhar();

console.log("-----");

const macOSRender = new MacOSRender();
const desenharVetorMac = new DesenharBitmap(macOSRender);
desenharVetorMac.desenhar();

console.log("-----");

const linuxRender = new LinuxRender();
const desenharBitmap = new DesenharBitmap(linuxRender);
desenharBitmap.desenhar();
