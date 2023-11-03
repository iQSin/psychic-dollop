
const time1 = prompt("Hur många minuter har du tränat i dag?");
const time = Number(time1);
const maxTime = 120;
const minTime = 30;
if(minTime <= time && time <= maxTime)
{
    console.log("Bra jobbat!");
}
else if( time < minTime && time > 0)
{
    console.log("Bättre kan du!");
}
else if(time == 0)
{
    console.log("Gör bättre!");
}
else
{
    console.log("Det var hurtigt av dig men kom ihåg att chilla lite emellanåt!");
}