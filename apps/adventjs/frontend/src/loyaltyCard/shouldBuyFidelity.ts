export const shouldBuyFidelity = (times: number): boolean => {
    const COSTO_BOLETO_UNITARIO = 12;
    const COSTO_TARJETA_FIDELIDAD = 250;
    const DESCUENTO = 0.75;

    const COSTO_SOLO_CON_BOLETO = times * COSTO_BOLETO_UNITARIO;

    const sumaArray = [COSTO_TARJETA_FIDELIDAD]
    for (let i = 1; i < times; i++) {
        const descuentoTotal = DESCUENTO ** i;
        const auxCosto = descuentoTotal * COSTO_BOLETO_UNITARIO
        sumaArray.push(auxCosto)
    }

    const COSTO_CON_TARJETA = sumaArray.reduce((value, item) => value + item, 0)
    return COSTO_CON_TARJETA < COSTO_SOLO_CON_BOLETO;
}