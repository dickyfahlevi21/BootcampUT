let i = 0;
unlimited = () => {
    let input = prompt ()
    if (input === '=') {
        console.log(i)
    } else {
        input = parseInt(input)
        i += input;
        unlimited()
    }
}
unlimited()