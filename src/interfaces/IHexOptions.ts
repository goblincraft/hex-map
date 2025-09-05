export interface HexOptions {
    radius: number;
    height: number;
    width: number;
    borderSize: number;
    borderColor: string;
    fillColor: string | null;
}

export const DefaultHexOptions: HexOptions = {
    radius: 20,
    height: 0,
    width: 0,
    borderSize: 1,
    borderColor: "#000000",
    fillColor: "#FFFFFF"
};
