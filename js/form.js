const postButton = document.querySelector('.post-button')
const studentInput = document.querySelector('.student-input')
const semesterInput = document.querySelector('.semester-input')
const unitInput = document.querySelectorAll('.unit-input')
const offsetIput = document.querySelector('.offset-input')
const resultWeek = document.querySelector('.result-week')
const studentOutput = document.querySelector('.student-output')
const semesterOutput = document.querySelector('.semester-output')
var soffsetOutput = document.querySelector('.offset-output')
const formFooter = document.querySelector('.form-footer')
const formFooterTerm = document.querySelectorAll('.form-footer-term')
var selectOffset = document.querySelectorAll('.select-offset')
var unitOutputP = document.querySelectorAll('.unit-output-p')

console.log(selectOffset)
for(var i = 0; i < 5; i++){
    console.log(selectOffset[i].value)
}

const displayOutput = (result_week)=>{
    studentOutput.textContent = result_week.student
    semesterOutput.textContent = result_week.semester
}

var result = (result_week)=>{
    var k = 0
    var res = ""
    if (result_week.semester == 3 || result_week.semester == 7){
        var r = 0
        for(var i = 0; i < 3; i++){
            if (selectOffset[i].value == ': не зачтено'){
                r++
            }
            if (selectOffset[i].value == ': не аттестация'){
                k++
            }
            
            unitOutputP[i].textContent = result_week.unit[i] + selectOffset[i].value
            
        }
        console.log(r)
        if (r > 0){
            res = "не зачтено"
        }else{
            res = "зачтено"
        }
        if (k == 3){
            soffsetOutput.textContent = ''
        }else{
            soffsetOutput.textContent = res
        }
    }else{
        if (result_week.semester == 5 || result_week.semester == 6){
            var r = 0
            for(var i = 0; i < 4; i++){
                if (selectOffset[i].value == ': не зачтено'){
                    r++
                }
                if (selectOffset[i].value == ': не аттестация'){
                    k++
                }
                
                unitOutputP[i].textContent = result_week.unit[i] + selectOffset[i].value
                
            }
            console.log(r)
            if (r > 0){
                res = "не зачтено"
            }else{
                res = "зачтено"
            }
            if (k == 4){
                soffsetOutput.textContent = ''
            }else{
                soffsetOutput.textContent = res
            }
        }else{
            var r = 0
            for(var i = 0; i < 5; i++){
                if (selectOffset[i].value == ': не зачтено'){
                    r++
                }
                if (selectOffset[i].value == ': не аттестация'){
                    k++
                }
                
                unitOutputP[i].textContent = result_week.unit[i] + selectOffset[i].value
                
            }
            console.log(r)
            if (r > 0){
                res = "не зачтено"
            }else{
                res = "зачтено"
            }
            if (k == 5){
                soffsetOutput.textContent = ''
            }else{
                soffsetOutput.textContent = res
            }
        }
    }
}

resultWeek.addEventListener('submit', (event)=>{
    event.preventDefault()
    const result_week = {
        student: studentInput.value,
        semester: semesterInput.value,
        unit: [unitInput[0].value, unitInput[1].value, unitInput[2].value, unitInput[3].value, unitInput[4].value]
    }
    if(result_week.semester == 3 || result_week.semester == 7){
        for(var i = 0; i < 3; i++){
            formFooterTerm[i].style.display = 'block'
            unitOutputP[i].style.display = 'block'
        }
    }else{
        if(result_week.semester == 5 || result_week.semester == 6){
            for(var i = 0; i < 4; i++){
                formFooterTerm[i].style.display = 'block'
                unitOutputP[i].style.display = 'block'
            }
        }else{
            for(var i = 0; i < 5; i++){
                formFooterTerm[i].style.display = 'block'
                unitOutputP[i].style.display = 'block'
            }
        }
    }
    
    result(result_week)

    localStorage.setItem('result_week', JSON.stringify(result_week))
    displayOutput(result_week)
    console.log(result_week)
})
resultWeek.addEventListener('reset', (event)=>{
    event.preventDefault()
    for(var i = 0; i < 5; i++){
        formFooterTerm[i].style.display = 'none'
        unitOutputP[i].style.display = 'none'
        unitInput[i].value = ''
    }
    soffsetOutput.textContent = ''
    for (var i = 0; i < 5; i++){
        selectOffset[i].value = ': не аттестация'
    }
})

// console.log(semesterInput)