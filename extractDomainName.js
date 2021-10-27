// doesn't work but good for slicing
function slicePractice(url) {
  if (url.slice(0, 7) === "http://") {
    const noHttpStarter = url.slice(7).split("");
    const removedDothttp = noHttpStarter
      .slice(0, noHttpStarter.indexOf("."))
      .join("");
    return removedDothttp;
  } else if (url.slice(0, 4) === "www.") {
    const noWWWstarter = url.slice(4).split("");
    const removedDotwww = noWWWstarter
      .slice(0, noWWWstarter.indexOf("."))
      .join("");
    return removedDotwww;
  } else if (url.slice(0, 8) === "https://") {
    const noHttpStarter = url.slice(8).split("");
    const removedDothttp = noHttpStarter
      .slice(0, noHttpStarter.indexOf("."))
      .join("");
    return removedDothttp;
  }
}

function domainName(url) {
    // replace gets only the first instance
    // split = array, [text, .+othertext]
    //[0] is the text we want
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
}

//://www.7hsusd63fzfb.tv/index.php
console.log(domainName("https://www.7hsusd63fzfb.tv/index.php"), " EXPECTING 7hsusd63fzfb");
console.log(domainName("http://google.com"), " EXPECTING google");
console.log(domainName("http://google.co.jp"), "EXPECTING google");
console.log(domainName("www.xakep.ru"), "EXPECTING xakep");
console.log(domainName("https://youtube.com"), "EXPECTING youtube");
console.log(domainName("https://www.freecodecamp.org/news/lets-clear-up-the-confusion-around-the-slice-splice-split-methods-in-javascript-8ba3266c29ae/"), "EXPECTING freecodecamp");
