export interface HexOptions {
    radius: number;
    borderSize: number;
    borderColor: string;
    fillColor: string | null;
}

export const DefaultHexOptions: HexOptions = {
    radius: 10,
    borderSize: 1,
    borderColor: "#000000",
    fillColor: "#FFFFFF"
};
