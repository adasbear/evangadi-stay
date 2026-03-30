console.log('======Question-1=======')

const firstSample = $('#sample1');
//1.1
console.log(firstSample)
//1.2
console.log(firstSample.text());

//Question 2

console.log('======Question-2=======')

//2.1
const Tech_Company = $('#techCompanies');
console.log(Tech_Company);

//2.2
const lists = $('#techCompanies li');
console.log(lists.length);

//2.3

const redClass = $('#techCompanies .red');
console.log(redClass);

//2.4
const newLi = $('<li>FaceBook</li>');
console.log(newLi);

//2.5
newLi.addClass('blue');

//2.6
Tech_Company.append(newLi);

//2.7
const total = $('#techCompanies .blue').length;
$('#blueCompanies').append(total)

//Question 3
console.log('======Question-3=======')

$('form:first').on('submit', function(e){
    e.preventDefault();

    const num1 = $('#in1').val();
    const num2 = $('#in2').val();


    if(num1 === "" || num2 === "" || isNaN(num1) || isNaN(num2)){
         $('.err').html('Please enter numerical values only');
    } else{
        $('.err').text(''); // we have to remove the error msg so that it will not appear on the correct answer!!
        const val1 = Number(num1);
        const val2 = Number(num2);
        const total = val1 + val2;
        const avg = total / 2;

        console.log(total);
        console.log(avg);

        $('#davg').text(avg);
        $('#dsum').text(total);

        // $('#davg').append(avg);
        // $('#dsum').append(total);
    }
})


//Question 4
console.log('======Question-4=======')
$('form').eq(1).on('submit', function(ev){
    ev.preventDefault();

   let  fName = $('#forF').val();
   let lName = $('#forL').val();
   let email = $('#email').val();

    if(fName === '' || lName === '' || email === ''){
        $('.err').text('Please Provide all the fields');
    } else{
        $('.err').text('');

        $(this).hide();

        $('.result').html(
            `<strong>First Name:</strong> ${fName}<br>` +
            `<strong>Last Name:</strong> ${lName}<br>` +
            `<strong>Email:</strong> ${email}`
        )
    }

})