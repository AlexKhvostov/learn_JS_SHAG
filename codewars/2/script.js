let str = "hEllo world";

function disemvowel(str) {
    let gl = [`e`,`u`,`i`,`o`,`a`];
    console.log(str);
    str = str.split('').filter(lit=>
         !gl.includes(lit.toLowerCase())
    ).join(``);
    console.log(str);
    return str;
}

disemvowel(str);