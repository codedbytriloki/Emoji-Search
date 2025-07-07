const emojiList = [
  { emoji: "😀", name: "grinning face" },
  { emoji: "😂", name: "face with tears of joy" },
  { emoji: "😍", name: "smiling face with heart-eyes" },
  { emoji: "🔥", name: "fire" },
  { emoji: "👍", name: "thumbs up" },
  { emoji: "❤", name: "red heart" },
  { emoji: "😎", name: "smiling face with sunglasses" },
  { emoji: "🤔", name: "thinking face" },
  { emoji: "🥺", name: "pleading face" },
  { emoji: "😭", name: "loudly crying face" },
  { emoji: "🤝", name: "friendship"},
  { emoji:  "👏", name:"clap"},
  { emoji:  "😘", name:"kiss"},
  { emoji:  "🥳", name:"party"},
  { emoji:  "☺️", name:"smile"},
];

const searchEmoji = document.getElementById("searchEmoji");
const searchBtn = document.getElementById("searchBtn");
const resultContainer = document.querySelector(".result");

searchBtn.addEventListener("click", () => {
  const inputValue = searchEmoji.value.toLowerCase();
  resultContainer.innerHTML = "";
  // console.log(inputValue);
   if(inputValue == ""){
     resultContainer.innerHTML = `<p>Please enter emoji name 😢 </p>`
       return;
  }

  const filterEmoji = emojiList.filter((item) => 
    item.name.includes(inputValue)
  );

  filterEmoji.forEach((item) => {
    const result = document.createElement('div');
    result.classList.add("resultDisplay");
    const heading = document.createElement('h1');
    heading.innerHTML = item.emoji;
    const para = document.createElement("p");
    para.innerHTML = item.name;

    resultContainer.appendChild(result);
    result.appendChild(heading);
    result.appendChild(para);
  });

  if(filterEmoji.length === 0){
    resultContainer.innerHTML = `<p>No matching emojis found 😢 </p>`;
  }

})