let people=document.getElementById('people');
let people_less=document.getElementById('people_less');
let people_more=document.getElementById('people_more');

let people_index=4;

people_less.addEventListener('click',()=>{
    people_index-=1;
    if(people_index<=0){
        people_index=1;
        people.value=people_index+' People';
    }else{
        people.value=people_index+ ' People';
    }
});

people_more.addEventListener('click',()=>{
    people_index+=1;
    if(people_index>=15){
        people.value=people_index+' People';
    }else{
        people.value=people_index+ ' People';
    }
})

var Checkin_date=document.getElementById('Checkin_date');
var checkin=document.getElementById('fromDate');
checkin.addEventListener('change', ()=>{

    let checkin_value=checkin.value;
    console.log(checkin_value);

    let dates=new Date(checkin_value);
    let dates2=new Date();
    const week=['Sun','Mon','Tues','Wed','Thru','Fri','Sat'];
    let day=week[dates.getDay()];

    let date=dates.getDate();

    var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    let month=months[dates.getMonth()];

    if(dates<dates2){
        console.log('No Date');
    }else{
        Checkin_date.innerText=day+', '+date+' '+month;
    }
});

var Checkout_date=document.getElementById('Checkout_date');
var checkout=document.getElementById('toDate');
checkout.addEventListener('change', ()=>{

    let checkout_value=checkout.value;
    let checkin_value=checkin.value;
    // console.log(checkout_value);

    let dates=new Date(checkout_value);
    let dates2=new Date(checkin_value);
    const week=['Sun','Mon','Tues','Wed','Thru','Fri','Sat'];
    let day=week[dates.getDay()];

    let date=dates.getDate();

    var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    let month=months[dates.getMonth()];

    if(dates<dates2){
        console.log('No Date');
    }else{
        console.log(day+', '+date+' '+month);
        Checkout_date.innerText=day+', '+date+' '+month;
    }
});


let checkin_less=document.getElementById('checkin_less');
let checkin_more=document.getElementById('checkin_more');

checkin_more.addEventListener('click',()=>{
    const week=['Sun','Mon','Tues','Wed','Thru','Fri','Sat'];
    var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let today=new Date();
    let tomorrow=new Date(today);

    tomorrow.setDate(tomorrow.getDate()+1);

    let day=week[tomorrow.getDay()];
    let date=tomorrow.getDate();
    let month=months[tomorrow.getMonth()];

    Checkin_date.innerText=day+', '+date+' '+month;

});


checkin_less.addEventListener('click',()=>{
    const week=['Sun','Mon','Tues','Wed','Thru','Fri','Sat'];
    var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let today=new Date();
    // let tomorrow=new Date(today);

    // tomorrow.setDate(tomorrow.getDate()+1);

    let day=week[today.getDay()];
    let date=today.getDate();
    let month=months[today.getMonth()];

    Checkin_date.innerText=day+', '+date+' '+month;

});


let checkout_less=document.getElementById('checkout_less');
let checkout_more=document.getElementById('checkout_more');

checkout_more.addEventListener('click',()=>{
    const week=['Sun','Mon','Tues','Wed','Thru','Fri','Sat'];
    var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let today=new Date();
    let tomorrow=new Date(today);

    tomorrow.setDate(tomorrow.getDate()+2);

    let day=week[tomorrow.getDay()];
    let date=tomorrow.getDate();
    let month=months[tomorrow.getMonth()];

    Checkout_date.innerText=day+', '+date+' '+month;

});


checkout_less.addEventListener('click',()=>{
    const week=['Sun','Mon','Tues','Wed','Thru','Fri','Sat'];
    var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let today=new Date();
    let tomorrow=new Date(today);

    tomorrow.setDate(tomorrow.getDate()+1);

    let day=week[tomorrow.getDay()];
    let date=tomorrow.getDate();
    let month=months[tomorrow.getMonth()];

    Checkout_date.innerText=day+', '+date+' '+month;

});


const images = [
    "url(/images/dsc_3650_optimized-1-scaled.webp) no-repeat center/cover",
    "url(/images/jaipurwed.jpeg) no-repeat center/cover",
    "url(/images/wed.avif) no-repeat center/cover",
    "url(/images/kerela.jpeg) no-repeat center/cover"
];

let index = 1;
let btn_left = document.getElementById('btn_left');
let btn_right = document.getElementById('btn_right');
let style = document.getElementsByClassName('content')[0].style;

btn_left.addEventListener('click', () => {
    index -= 1;
    if (index < 0) {
        index = images.length - 1;
    }
    style.setProperty('--background', images[index]);
});

btn_right.addEventListener('click', () => {
    index ++;
    if (index >(images.length)-1) {
        index =0;
    }
    style.setProperty('--background', images[index]);
});



var hearts = document.querySelectorAll('.heart');
hearts.forEach(heart => {
    heart.addEventListener('click', () => {
        var currentColor = heart.style.color;
        if (currentColor === 'red') {
            heart.style.color = 'black';
        } else {
            heart.style.color = 'red';
        }
    });
});
