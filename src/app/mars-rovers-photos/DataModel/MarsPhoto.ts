import { Camera } from "./Camera";
import { Rover } from "./Rover";


// Photos are organized by the sol (Martian rotation or day) on which they were taken, 
// counting up from the rover's landing date. 
// A photo taken on Curiosity's 1000th Martian sol exploring Mars, 
// for example, will have a sol attribute of 1000. 
export interface MarsPhoto {
    id: string;
    sol: string;
    earth_date: string;

    img_src: string;
    camera: Camera;
    rover: Rover;
}