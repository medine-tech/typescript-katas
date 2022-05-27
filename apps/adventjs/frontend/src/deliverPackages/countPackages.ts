type Subordinate = Array<string>
type Carrier = Array<Array<string | number | Subordinate>>

export default function countPackages(carriers: Carrier, carrierID: string): number {
    const carrier = carriers.find((carrier) => carrier[0] === carrierID)

    if (!carrier) {
        return 0
    }

    return carrier[1] + carrier[2].reduce(
        (packages: number, subordinate: string) => {
            return packages + countPackages(carriers, subordinate)
        }, 0
    )
}