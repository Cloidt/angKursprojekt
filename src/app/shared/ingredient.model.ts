export class Ingredient {
    // Das ist eine typescript-Kurzform, erfüllt den gleichen Zweck wie das andere Model
    // nur so spart man sich die Deklaration und Zuweisung im Constructor
    constructor(public name: string, public menge: number; public einheit: string) {
    }
}
