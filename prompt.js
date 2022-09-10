const showAlert = () => {
    const num = Math.random() * 10;
    console.log(num)
    if (num > 5) {
        alert('hello')
    }
}

const question = () => {
    const decision = confirm('Are you sure?');
    console.log(decision);
    if (decision === true) {
        alert('yes damn sure!')
    }
    else {
        console.log('tumi bal jano')
    }
}

const getInfo = () => {
    // , diye parameter dile man default vabe set hobe
    const name = prompt('tell your name', 'Shakib');
    console.log(name);
    if (!!name) {
        alert('ok');
    }
    else {
        alert('hd')
    }
}