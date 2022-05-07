export const sledJump = (heights: Array<number>) => {
    let up = true
    let lastValue = heights[0]

    for(let i = 1; i < heights.length; i++){
        if(heights[i] === lastValue){
            return false
        }

        if(!up && heights[i] > lastValue){
            return false
        }

        if(up && heights[i] < lastValue){
            up = false
        }

        lastValue = heights[i]
    }

    return !up
}
