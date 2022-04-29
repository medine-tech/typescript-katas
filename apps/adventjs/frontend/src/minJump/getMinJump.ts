
export const getMinJump = (obstacles: number[]): number => {
    let jump: number = 1;
    const maxNumber: number = Math.max(...obstacles);

    for (let i = 0; i <= maxNumber; i += jump)
    {
        if (obstacles.includes(i)){
            i = 0;
            jump += 1;
        }
    }

    return jump;
};



