const Existence_Val_Year = document.getElementsByClassName("existence-year")[0]
const Existence_Val_Month = document.getElementsByClassName("existence-month")[0]
const Existence_Val_Days = document.getElementsByClassName("existence-days")[0]
const Existence_Val_Hours = document.getElementsByClassName("existence-hours")[0]

const Download_CV = document.getElementsByClassName("download-cv")[0];


//Linking my resume for download

Download_CV.addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = './Master_Resume_230834_rahul_singh_bt_ee.pdf'
    link.download = 'Rahul_Singh_Resume.pdf'
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
})

// Calculating my timeline.
const curr_date = new Date()
const birth_date = new Date(2005, 1, 18, 1)
let arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
if(curr_date.getFullYear() % 4 == 0 || curr_date.getFullYear() % 100 == 0){
    arr[1] = 29;
}

const differenceInMilliseconds = curr_date.getTime() - birth_date.getTime();
let hour = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
let day = Math.floor(hour / 24);
let month = 0;
let year = 0;

hour -= day * 24;

let y = 365;
let ctr = 1; // since startng with 2005

while(day > y){
    day -= y;
    year++;
    ctr++;
    if(ctr % 4 == 0)  y = 366;
    else y = 365;
}

ctr = 1;

while(day > arr[ctr]){
    day -= arr[ctr];
    month++;
    ctr++;
    if(ctr == 12) ctr = 0;
}

console.log(hour)
console.log(day)
console.log(month)
console.log(year)

Existence_Val_Year.textContent = year
Existence_Val_Month.textContent = month
Existence_Val_Days.textContent = day
Existence_Val_Hours.textContent = hour
