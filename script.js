// fOperand - first operand, act- action, sOperand - second operand
let fOperand = null, action = null, sOrepand = null;

// result - text field with result
let result = document.querySelector('.field');

// function, used when user enter number button
function insertNum(num){
    if (result.value == "0"){ result.value = num;
    }else{
        result.value=result.value+num;
    }
}

// function, used when user enter MATH action and first operand
function setAct(act){
    fOperand = (result.value);
    action = act;
    result.value = 0;
}

// function, return result of math operation, if fst and action aren't Null
function rEsult(){
    sOperand = result.value;
    if (fOperand != null && action != null){
        switch(action){
            case 'plus':
                result.value = Number(fOperand) + Number(sOperand);
                break;
            case 'minus':
                result.value = Number(fOperand) - Number(sOperand);
                break;
            case 'multiple':
                result.value = Number(fOperand) * Number(sOperand);
                break;
            case 'devide':
                result.value = Number(fOperand) / Number(sOperand);
                break;
        }
    }
}

// function, include some switch of NOT MATH actions variations 
function actionDo(action){
    let val;

    switch(action){
        case 'plusminus':
            val = result.value;
            result.value = -val;
            break;

        case 'delete':
            val = Number(result.value);
            val = Math.floor(val/10);
            result.value = val;
            break;

        case 'CE':
            result.value = 0;
            break;

        case 'C':
            result.value = 0;
            if (fOperand != null)
                fOperand = null;
            break;
    }
}