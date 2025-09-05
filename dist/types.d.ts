interface HexOptions {
    radius: number;
    height: number;
    width: number;
    borderSize: number;
    borderColor: string;
    fillColor: string | null;
}
export const HexGrid: {
    draw: (id: string, dotOptions?: HexOptions) => void;
};

//# sourceMappingURL=types.d.ts.map
