describe("function centsToDecimals", () => {
    it("Should convert value from cents to a floating point number with 2 decimals", function () {
        expect(centsToDecimals(105)).toBe(1.05);
        expect(centsToDecimals(23)).toBe(0.23);
        expect(centsToDecimals(70)).toBe(0.70)
    });
    it("Should return `undefined` when the first argument passed is a string", ()=>{
        expect(centsToDecimals('105')).toBeUndefined();
    })
    it("Should return 0 when the first argument is not passed", ()=>{
        expect(centsToDecimals()).toBe(0);
    })
});