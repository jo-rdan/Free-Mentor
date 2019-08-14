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
  declineone.style.display = "block";
  acceptone.style.cursor = "auto";
  acceptone.innerText="Accepted";
  declineone.innerText = "Decline";
}
const hide_declineTwo = () => {
  declinetwo.style.display = "block";
  accepttwo.style.cursor = "auto";
  accepttwo.innerText="Accepted";
  declinetwo.innerText = "Decline";
}
const hide_declineThree = () => {
  declinethree.style.display = "block";
  acceptthree.style.cursor = "auto";
  acceptthree.innerText="Accepted";
  declinethree.innerText = "Decline";
}
const hide_declineFour = () => {
  declinefour.style.display = "block";
  acceptfour.style.cursor = "auto";
  acceptfour.innerText="Accepted";
  declinefour.innerText ="Decline";
}
const hide_declineFive = () => {
  declinefive.style.display = "block";
  acceptfive.style.cursor = "auto";
  acceptfive.innerText="Accepted";
  declinefive.innerText = "Decline";
}

const hide_acceptOne = () => {
  acceptone.style.display = "block";
  declineone.style.cursor="auto";
  declineone.innerText = "Declined";
  acceptone.innerText = "Accept";
}
const hide_acceptTwo = () => {
  accepttwo.style.display = "block";
  declinetwo.style.cursor="auto";
  declinetwo.innerText = "Declined";
  accepttwo.innerText ="Accept";
}
const hide_acceptThree = () => {
  acceptthree.style.display = "block";
  declinethree.style.cursor="auto";
  declinethree.innerText = "Declined";
  acceptthree.innerText = "Accept";
}
const hide_acceptFour = () => {
  acceptfour.style.display = "block";
  declinefour.style.cursor="auto";
  declinefour.innerText = "Declined";
  acceptfour.innerText = "Accept";
}
const hide_acceptFive = () => {
  acceptfive.style.display = "block";
  declinefive.style.cursor="auto";
  declinefive.innerText = "Declined";
  acceptfive.innerText = "Accept";
}