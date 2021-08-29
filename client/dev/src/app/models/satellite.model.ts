export class SatelliteModel {
    constructor(
        public satId: number,
        public satName: string,
        public isRendered: boolean,
        public isOrbitRendered: boolean,
        public tleData: string
    ) {}
}