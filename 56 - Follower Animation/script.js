const followers = document.querySelectorAll(".followers");

followers.forEach((followersCounter) => {
  followersCounter.innerHTML = "0";
  const updateFollowersCounter = () => {
    const target = +followersCounter.getAttribute("data-target");
    const c = +followersCounter.innerText;

    const increment = target / 500;

    if (c < target) {
      followersCounter.innerHTML = `${Math.ceil(c + increment)}`;
      setTimeout(updateFollowersCounter, 1);
    } else {
      followersCounter.innerText = target;
    }
  };

  updateFollowersCounter();
});

const facebookDiv = document.querySelector('.facebook')
const youtubeDiv = document.querySelector('.youtube')

const facebook = document.querySelector(".followers-1");
const youtube = document.querySelector(".followers-2");

const facebookTarget = parseInt(facebook.getAttribute("data-target"));
const youtubeTarget = parseInt(youtube.getAttribute("data-target"));

if (facebookTarget > youtubeTarget) {
  facebook.style.color = "red";
  facebookDiv.style.color = 'white'
  facebookDiv.style.backgroundColor = 'black';
} else if (facebookTarget < youtubeTarget) {
  youtube.style.color = "red";
  youtubeDiv.style.color = 'white'
  youtubeDiv.style.backgroundColor = 'black';
} else if (youtubeTarget === facebookTarget) {
  youtube.style.color = "yellow";
  facebook.style.color = "yellow"; 
}