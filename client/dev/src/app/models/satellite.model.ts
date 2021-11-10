import * as Cesium from 'cesium';

export class SatelliteModel {
    public orbitColor: Cesium.Color;
    constructor(
        public satId: number,
        public satName: string,
        public isRendered: boolean,
        public isOrbitRendered: boolean,
        public tleData: string
    ) {
        this.orbitColor = Cesium.Color.fromRandom();
    }
}