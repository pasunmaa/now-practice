function dragon() {
    const type = 'new'

    function show() {
        return type
    }
    console.log(type) //? 
    return { show }
}

const fn = dragon.show
fn() //?
dragon.type //? 