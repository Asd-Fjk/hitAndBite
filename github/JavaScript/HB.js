"use strict"
{
    const button  = document.getElementById("button");
    const returnButton = document.getElementById("returnButton");
    const result = document.getElementById("result");
    let answer = 0;
    let eat = 0;
    let bite = 0;
    let deleted = 0;
    let counter = 0;
    let howMany = 1000;
    let counterDouble = 0;
    let numbers = [];
    const numberBank = [];
    let backNumber = 0;
    let rest = [];
    resetting();
    
    function resetting() {
        for (let i = 0 ; i < 1000 ; i++) {
            if (i < 10) {
                numbers.push("00" + i);
            } else if (i < 100) {
                numbers.push("0" + i);
            } else {
                numbers.push(String(i));
            }
        }
        // rest = numbers.splice(0, numbers.length);
        // numberBank.push(rest);
        // console.log(numberBank);
        // result.textContent = numberBank[0];
        console.log(numbers);
    }
    //以下ヒットとバイトの具体的な処理
    function e0b0() {
        for (let i = 0 ; i < howMany ; i ++) {
            for (let j = 0 ; j < 3 ; j ++) {
                for (let k = 0 ; k < 3 ; k ++) {
                    if (answer[j] === numbers[i - deleted][k]) {
                        counter++;
                    }
                } 
            }
            if (counter !== 0) {
                numbers.splice(i - deleted, 1);
                deleted++;
                counter = 0;
            }
        }
        counter = 0;
        deleted = 0;
        howMany = numbers.length;
        backNumber++;
        numberBank.push(numbers);
        console.log(numberBank);
    }
    
    function e0b1() {
        for (let i = 0 ; i < howMany ; i ++) {
            if (numbers[i - deleted][0] == answer[0] || numbers[i - deleted][1] == answer[1] || numbers[i - deleted][2] == answer[2]) {
                console.log(numbers[i - deleted] + " deleted by e");
                numbers.splice(i - deleted, 1);
                deleted++;
            } else if (answer[0] !== numbers[i - deleted][0] && answer[0] !== numbers[i - deleted][1] && answer[0] !== numbers[i - deleted][2] && 
                answer[1] !== numbers[i - deleted][0] && answer[1] !== numbers[i - deleted][1] && answer[1] !== numbers[i - deleted][2] && 
                answer[2] !== numbers[i - deleted][0] && answer[2] !== numbers[i - deleted][1] && answer[2] !== numbers[i - deleted][2]) {
                console.log(numbers[i - deleted] + " deleted by none");
                numbers.splice(i - deleted, 1);
                deleted++;
            } else {
                for (let j = 0 ; j < 3 ; j ++) {
                    for (let k = 0 ; k < 3 ; k ++) {
                        if (answer[j] === numbers[i - deleted][k]) {
                            counterDouble++;
                        }
                    }
                }
                if (counterDouble > 1) {
                    console.log(numbers[i - deleted] + " deleted by double" + counterDouble)
                    numbers.splice(i - deleted, 1);
                    deleted++;
                }
                counterDouble = 0;
            }
        }
        howMany = numbers.length;
        deleted = 0;
        numberBank.push(numbers);
        console.log(numberBank);
        backNumber++;
        console.log(numbers);
    }

    function e0b2() {
        for (let i = 0 ; i < howMany ; i ++) {
            if (numbers[i - deleted][0] == answer[0] || numbers[i - deleted][1] == answer[1] || numbers[i - deleted][2] == answer[2]) {
                console.log(numbers[i - deleted] + " deleted by e");
                numbers.splice(i - deleted, 1);
                deleted++;
            } else if (answer[0] !== numbers[i - deleted][0] && answer[0] !== numbers[i - deleted][1] && answer[0] !== numbers[i - deleted][2] && 
                answer[1] !== numbers[i - deleted][0] && answer[1] !== numbers[i - deleted][1] && answer[1] !== numbers[i - deleted][2] && 
                answer[2] !== numbers[i - deleted][0] && answer[2] !== numbers[i - deleted][1] && answer[2] !== numbers[i - deleted][2]) {
                console.log(numbers[i - deleted] + " deleted by none");
                numbers.splice(i - deleted, 1);
                deleted++;
            } else {
                for (let j = 0 ; j < 3 ; j ++) {
                    for (let k = 0 ; k < 3 ; k ++) {
                        if (answer[j] === numbers[i - deleted][k]) {
                            counterDouble++;
                        }
                    }
                }
                if (counterDouble !== 2) {
                    console.log(numbers[i - deleted] + " deleted by double" + counterDouble)
                    numbers.splice(i - deleted, 1);
                    deleted++;
                }
                counterDouble = 0;
            }
        }
        deleted = 0;
        howMany = numbers.length;
    }

    function e0b3() {
        for (let i = 0 ; i < howMany ; i ++) {
            if (numbers[i - deleted][0] == answer[0] || numbers[i - deleted][1] == answer[1] || numbers[i - deleted][2] == answer[2]) {
                console.log(numbers[i - deleted] + " deleted by e");
                numbers.splice(i - deleted, 1);
                deleted++;
            } else if (answer[0] !== numbers[i - deleted][0] && answer[0] !== numbers[i - deleted][1] && answer[0] !== numbers[i - deleted][2] && 
                answer[1] !== numbers[i - deleted][0] && answer[1] !== numbers[i - deleted][1] && answer[1] !== numbers[i - deleted][2] && 
                answer[2] !== numbers[i - deleted][0] && answer[2] !== numbers[i - deleted][1] && answer[2] !== numbers[i - deleted][2]) {
                console.log(numbers[i - deleted] + " deleted by none");
                numbers.splice(i - deleted, 1);
                deleted++;
            } else {
                for (let j = 0 ; j < 3 ; j ++) {
                    for (let k = 0 ; k < 3 ; k ++) {
                        if (answer[j] === numbers[i - deleted][k]) {
                            counterDouble++;
                        }
                    }
                }
                if (counterDouble < 3) {
                    console.log(numbers[i - deleted] + " deleted by double" + counterDouble)
                    numbers.splice(i - deleted, 1);
                    deleted++;
                }
                counterDouble = 0;
            }
        }
        howMany = numbers.length;
    }

    function e1b0() {
        for (let i = 0 ; i < howMany ; i ++) {
            for (let j = 0 ; j < 3 ; j ++) {
                for (let k = 0 ; k < 3 ; k ++) {
                    if (answer[j] === numbers[i - deleted][k]) {
                        counterDouble++;
                    }
                }
            }
            if (counterDouble !== 1) {
                console.log(numbers[i - deleted] + " deleted by double" + counterDouble)
                numbers.splice(i - deleted, 1);
                deleted++;
            } else {
                if (numbers[i - deleted][0] !== answer[0] && numbers[i - deleted][1] !== answer[1] && numbers[i - deleted][2] !== answer[2]) {
                    console.log(numbers[i - deleted] + " deleted by e");
                    numbers.splice(i - deleted, 1);
                    deleted++;
                } else {
                    ;
                }
            }
            counterDouble = 0;
        }
        deleted = 0;
        howMany = numbers.length;
    }
    
    function e1b1() {
        for (let i = 0 ; i < howMany ; i ++) {
            for (let j = 0 ; j < 3 ; j ++) {
                for (let k = 0 ; k < 3 ; k ++) {
                    if (answer[j] === numbers[i - deleted][k]) {
                        counterDouble++;
                    }
                }
            }
            if (counterDouble !== 2) {
                console.log(numbers[i - deleted] + " deleted by counterDouble" + counterDouble)
                numbers.splice(i - deleted, 1);
                deleted++;
                //2bに確定させる
            } else {
                for (let l = 0 ; l < 3 ; l++) {
                    if (answer[l] === numbers[i - deleted][l]) {
                        counter++;
                    }
                }
                if (counter !== 1) {
                    console.log(numbers[i - deleted] + " deleted by eCounter" + counter);
                    numbers.splice(i - deleted, 1);
                    deleted++;
                }
                counter = 0;
                //2e以外を削除する
            }
            counterDouble = 0;
        }
        deleted = 0;
        howMany = numbers.length;
    }

    function e1b2() {
        for (let i = 0 ; i < howMany ; i ++) {
            for (let j = 0 ; j < 3 ; j ++) {
                for (let k = 0 ; k < 3 ; k ++) {
                    if (answer[j] === numbers[i - deleted][k]) {
                        counterDouble++;
                    }
                }
            }
            if (counterDouble !== 3) {
                console.log(numbers[i - deleted] + " deleted by counterDouble" + counterDouble)
                numbers.splice(i - deleted, 1);
                deleted++;
                //3bに確定させる
            } else {
                for (let l = 0 ; l < 3 ; l++) {
                    if (answer[l] === numbers[i - deleted][l]) {
                        counter++;
                    }
                }
                if (counter !== 1) {
                    console.log(numbers[i - deleted] + " deleted by eCounter" + counter);
                    numbers.splice(i - deleted, 1);
                    deleted++;
                }
                counter = 0;
                //1e以外を削除する
            }
            counterDouble = 0;
        }
        deleted = 0;
        howMany = numbers.length;
    }

    function e2b0() {
        for (let i = 0 ; i < howMany ; i ++) {
            for (let j = 0 ; j < 3 ; j ++) {
                for (let k = 0 ; k < 3 ; k ++) {
                    if (answer[j] === numbers[i - deleted][k]) {
                        counterDouble++;
                    }
                }
            }
            if (counterDouble !== 2) {
                console.log(numbers[i - deleted] + " deleted by counterDouble" + counterDouble)
                numbers.splice(i - deleted, 1);
                deleted++;
                //3bに確定させる
            } else {
                for (let k = 0 ; k < 3 ; k ++) {
                    if (numbers[i - deleted][k] === answer[k]){
                        counter++;
                    }
                }
                if (counter !== 2) {
                    console.log("deleted by e2 " + counter);
                    numbers.splice(i - deleted, 1);
                    deleted++;
                }
                counter = 0;
            }
            counterDouble = 0;
        }
        deleted = 0;
        howMany = numbers.length;
    }

    function e3() {
        for (let i = 0 ; i < howMany ; i ++) {
            for (let j = 0 ; j < 3 ; j ++) {
                if (answer[j] === numbers[i - deleted][j]) {
                    counter++;
                }
            }
            if (counter !== 3) {
                console.log(numbers[i - deleted] + " deleted by eCounter" + counter);
                numbers.splice(i - deleted, 1);
                deleted++;
            }
            counter = 0;
        }
        deleted = 0;
        howMany = numbers.length;
    }
    //ボタンクリック後の処理
    button.onclick = function () {
        answer = document.getElementById("answer").value;
        eat = document.getElementById("eat").value;
        bite = document.getElementById("bite").value;
        if (eat == 0 && bite == 0) {
            e0b0();
        } else if (eat == 0 && bite == 1) {
            e0b1();
        } else if (eat == 0 && bite == 2) {
            e0b2();
        } else if (eat == 0 && bite == 3) {
            e0b3();
        } else if (eat == 1 && bite == 0) {
            e1b0();
        } else if (eat == 1 && bite == 1) {
            e1b1();
        } else if (eat == 1 && bite == 2) {
            e1b2();
        } else if (eat == 2 && bite == 0) {
            e2b0();
        } else {
            e3();
        }
        result.textContent = numbers;
        console.log(numbers.length);
    }
    returnButton.onclick = function() {
        numberBank.pop()
        backNumber--;
        result.textContent = numberBank[backNumber];
        console.log(numberBank);
    }
}