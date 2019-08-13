const acceptone = document.querySelector('#acc1 button');
const accepttwo= document.querySelector('#acc2 button');
const acceptthree= document.querySelector('#acc3 button');
const acceptfour = document.querySelector('#acc4 button');
const acceptfive = document.querySelector('#accept button');

const declineone = document.querySelector('#dec1 button');
const declinetwo = document.querySelector('#dec2 button');
const declinethree = document.querySelector('#dec3 button');
const declinefour = document.querySelector('#dec4 button');
const declinefive = document.querySelector('#decline button');


const hide_declineOne = () => {
  declineone.style.display = "none";
  acceptone.style.marginLeft = "90px";
  acceptone.style.cursor = "auto";
  acceptone.innerText="Accepted";
}
const hide_declineTwo = () => {
  declinetwo.style.display = "none";
  accepttwo.style.marginLeft = "90px";
  accepttwo.style.cursor = "auto";
  accepttwo.innerText="Accepted";
}
const hide_declineThree = () => {
  declinethree.style.display = "none";
  acceptthree.style.marginLeft = "90px";
  acceptthree.style.cursor = "auto";
  acceptthree.innerText="Accepted";
}
const hide_declineFour = () => {
  declinefour.style.display = "none";
  acceptfour.style.marginLeft = "90px";
  acceptfour.style.cursor = "auto";
  acceptfour.innerText="Accepted";
}
const hide_declineFive = () => {
  declinefive.style.display = "none";
  acceptfive.style.marginLeft = "90px";
  acceptfive.style.cursor = "auto";
  acceptfive.innerText="Accepted";
}

const hide_acceptOne = () => {
  acceptone.style.display = "none";
  declineone.style.marginLeft="90px";
  declineone.style.transition="0.5s";
  declineone.style.cursor="auto";
  declineone.innerText = "Declined";
}
const hide_acceptTwo = () => {
  accepttwo.style.display = "none";
  declinetwo.style.marginLeft="90px";
  declinetwo.style.transition = "0.5s";
  declinetwo.style.cursor="auto";
  declinetwo.innerText = "Declined";
}
const hide_acceptThree = () => {
  acceptthree.style.display = "none";
  declinethree.style.marginLeft="90px";
  declinethree.style.transition = "0.5s";
  declinethree.style.cursor="auto";
  declinethree.innerText = "Declined";
}
const hide_acceptFour = () => {
  acceptfour.style.display = "none";
  declinefour.style.marginLeft="90px";
  declinefour.style.transition = "0.5s";
  declinefour.style.cursor="auto";
  declinefour.innerText = "Declined";
}
const hide_acceptFive = () => {
  acceptfive.style.display = "none";
  declinefive.style.marginLeft="90px";
  declinefive.style.transition = "0.5s";
  declinefive.style.cursor="auto";
  declinefive.innerText = "Declined";
}