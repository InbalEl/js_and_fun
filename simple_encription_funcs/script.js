/******************************************************************************/
/* >>>   q. 1   <<< */

function caesarCipher(text, offset=1) {
    
    offset = offset < 0 ? 1 : offset % 26
    
    let encText = ""
    
    if (typeof text === 'string') {
        
        for (let i = 0; i < text.length; ++i) {
            
            let char_code = text.charCodeAt(i)
            
            if (97 <= char_code && char_code <= 122) {
                char_code = (((char_code - 97) + offset) % 26) + 97
            }
            
            encText += String.fromCharCode(char_code)
        }
    }

    return (encText)
}

function caesarDecipher(text, offset=1) {
    
    offset = offset < 0 ? 1 : offset % 26
    
    let decText = ""
    
    if (typeof text === 'string') {
        
        for (let i = 0; i < text.length; ++i) {
            
            let char_code = text.charCodeAt(i)
            
            if (97 <= char_code && char_code <= 122) {
                
                char_code -= offset
                if (char_code < 97) {
                    char_code += 26
                }
            }
            
            decText += String.fromCharCode(char_code)
        }
    }
    
    return (decText)
}

/******************************************************************************/
/* >>>   q. 2   <<< */

function railFenceCipher(text, levels=1) {

    if (levels < 0) {
        levels = 1
    }

    let enc_text = []
    
    // creating 2d array
    for (let i = 0; i < levels; ++i) {
        enc_text[i] = new Array()
    }
    
    // inserting message into array
    let col = 0, row = 0
    for (let str_i = 0; str_i < text.length; ++str_i) {
        
        if ((/[a-z]/).test(text[str_i])) {
            enc_text[row][col] = text[str_i]
            // console.log("row after insertion: " + enc_text[row])
            
            if (row === 2) {
                row = 0
                ++col
            } else {
                ++row
            }
        }
    }
    
    // // logging 2d array
    // for (let i = 0; i < levels; ++i) {
    //     console.log(enc_text[i])
    // }

    let word_size = 4, char_count = 0
    enc_str = ""

    for (row = 0; row < levels; ++row) {
        for (col = 0; col < enc_text[row].length; ++col) {
            enc_str += enc_text[row][col]
            if (char_count === 3) {
                enc_str += " "
                char_count = 0
            } else {
                ++char_count
            }
        }
    }
    
    return (enc_str)
}
    
function railFenceDecipher(text, levels=1) {
    
    if (levels < 0) {
        levels = 1
    }

    text = text.split(' ').join('')

    let dec_text = []
    let row = 0, col = 0
    
    // creating 2d array
    for (let row = 0; row < levels; ++row) {
        dec_text[row] = new Array()
    }
    
    let text_index = 0
    let cols = Math.ceil(text.length/levels)

    for (row = 0; row < levels; ++row) {
        for (col = 0; col < cols; ++col) {

            dec_text[row][col] = text[text_index]
            ++text_index
        }
    }
    
    // // logging 2d array
    // for (let i = 0; i < levels; ++i) {
    //     console.log(dec_text[i])
    // }

    let decText = ""

    for (col = 0; col < cols; ++col) {
        for (row = 0; row < levels; ++row) {
            if (undefined != dec_text[row][col]) {
                decText += dec_text[row][col]
            }
        }
    }

    return (decText)
}

/******************************************************************************/
/* >>>   q. 3   <<< */

function encript(text, encriptionFunc, option=1) {
    return (encriptionFunc(text, option))
}

function decript(text, decriptionFunc, option=1) {
    return (decriptionFunc(text, option))
}

/******************************************************************************/

// console.log(" >> Caesar Cipher Test << ")
// let msg1 = "The Sisko disapproves"
// console.log("Before encription: " + msg1)
// let msg1Encripted = encript(msg1, caesarCipher, 29)
// console.log("After encription: " + msg1Encripted)
// console.log("After decription: " + decript(msg1Encripted, caesarDecipher, 29))

// console.log(" >> Rail Fence Cipher Test <<")
// // let msg2 = "live long and prosper"
// let msg2 = "dont panic"
// console.log("Before encription: " + msg2)
// let msg2Encripted = encript(msg2, railFenceCipher, 3)
// console.log("After encription: " + msg2Encripted)
// console.log("After decription: " + decript(msg2Encripted, railFenceDecipher, 3))

/******************************************************************************/

function encodeMsg() {

    let str_to_encript = document.getElementById("str_to_encode").value
    console.log("msg received: " + str_to_encript)
    
    let param = document.getElementById("encParam").value;
    let encMethod = document.getElementById("encMethod").value
    let encoded_msg = ""

    if (encMethod === "Caesar") {
        encMethod = encript(str_to_encript, caesarCipher, param)
    }
    
    else if (encMethod === "Rail Fence") {
        encMethod = encript(str_to_encript, railFenceCipher, param)
    }
    alert("Encoded message is: " + encoded_msg)
}
    