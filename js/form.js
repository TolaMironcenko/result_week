const postButton = document.querySelector('.post-button')
const studentInput = document.querySelector('.student-input')
const semesterInput = document.querySelector('.semester-input')
const unitInput = document.querySelector('.unit-input')
const offsetIput = document.querySelector('.offset-input')
const resultWeek = document.querySelector('.result-week')
const studentOutput = document.querySelector('.student-output')
const semesterOutput = document.querySelector('.semester-output')
const unitOutput = document.querySelector('.unit-output')
const soffsetOutput = document.querySelector('.offset-output')

const displayOutput = (result_week)=>{
    studentOutput.textContent = result_week.student
    semesterOutput.textContent = result_week.semester
    unitOutput.textContent = result_week.unit
    soffsetOutput.textContent = result_week.offset
}

resultWeek.addEventListener('submit', (event)=>{
    event.preventDefault()
    const result_week = {
        student: studentInput.value,
        semester: semesterInput.value,
        unit: unitInput.value,
        offset: offsetIput.value,
    }

    localStorage.setItem('result_week', JSON.stringify(result_week))
    displayOutput(result_week)
})