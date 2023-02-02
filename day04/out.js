//함수는 여러절차가 있는 처리를 이름을 부여하여 기능을 정의!
//function
function 빨래하다() {
    console.log("1. 먼지를 털자.")
    console.log("2. 물에 집어 넣는다.")
    console.log("3. 비누를 바른다.")
    console.log("4. 오물조물 비빈다.")
    console.log("5. 물에 여러번 헹군다.")
    console.log("6. 짠다.")
    console.log("7. 넌다.")
}

//청소하다에 대한 함수정의해서 사용해보세요.!
function 청소하다() {
    console.log("1. 로봇청소기를 돌리다.")
    console.log("2. 물걸레로 닦다.")
}

function 여행하다() {
    console.log("1. 계획을 짠다")
    console.log("2. 숙소를 예약한다")
    console.log("3. 잘 다녀온다")
}

function 쉬다() {
    console.log("1. 머리를 비운다")
    console.log("2. 음악을 튼다")
    console.log("3. 누워서 눈을 감는다.")
}

function 밥값계산정하기() {
    food_name = prompt('먹고 싶은 음식은?')
        food_price = prompt('음식의 가격은?')

        // AND 연산자 : &&, OR 연산자 : ||
        if (food_name == "커피" && food_price < 5000) {
                alert('내가 살게요.')
                console.log('내가 살게요.')
            }
        else {
            alert('네가 사세요.')
            console.log('네가 사세요.')
        }

}
