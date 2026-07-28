func replaceElements(arr []int) []int {
    n := len(arr)
    // ans := make([]int, n)
    rightMax := -1

    for i := n - 1; i >= 0; i-- {
        // ans[i] = rightMax
        curr := arr[i]
        if i == n -1 {
            arr[i] = -1
        } else {
            arr[i] = rightMax
        }

        if curr > rightMax {
            rightMax = curr
        }
    }

    return arr
}
