const learn = (time: number, courses: number[]): number[] | null => {

    let coursesCombination: number[] = []
    let maxTime = 0

    courses.forEach((courseA, i) => {
        courses.forEach((courseB, j) => {
            const timeTwoCourses = courseA + courseB
            if (timeTwoCourses <= time && timeTwoCourses > maxTime && i !== j) {
                maxTime = timeTwoCourses
                coursesCombination = [i, j]
            }
        })
    })

    return coursesCombination.length > 0 ? coursesCombination : null
}

export default learn