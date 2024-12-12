function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function percentageToDegrees(percentage) {
    return percentage / 100 * 360
}

function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}



percent_field = document.querySelector(".progress-value")
bar_left = document.querySelector(".progress-left .progress-bar")
bar_right = document.querySelector(".progress-right .progress-bar")
piclinks = document.querySelector("#piclinks")
waittig = document.querySelector(".wait")

if (localStorage.getItem("links")){
    links = JSON.parse(localStorage.getItem("links"))
} else {
    links = ['https://piclinks.in/view2?id=464763', 'https://piclinks.in/view2?id=464764', 'https://piclinks.in/view2?id=464765', 'https://piclinks.in/view2?id=464766', 
             'https://piclinks.in/view2?id=464767', 'https://piclinks.in/view2?id=464768', 'https://piclinks.in/view2?id=464769', 'https://piclinks.in/view2?id=464770', 
             'https://piclinks.in/view2?id=464771', 'https://piclinks.in/view2?id=464772', 'https://piclinks.in/view2?id=464773', 'https://piclinks.in/view2?id=464774', 
             'https://piclinks.in/view2?id=464775', 'https://piclinks.in/view2?id=464776', 'https://piclinks.in/view2?id=464777', 'https://piclinks.in/view2?id=464778', 
             'https://piclinks.in/view2?id=464780', 'https://piclinks.in/view2?id=464781', 'https://piclinks.in/view2?id=464782', 'https://piclinks.in/view2?id=464783', 
             'https://piclinks.in/view2?id=464784', 'https://piclinks.in/view2?id=464785', 'https://piclinks.in/view2?id=464786', 'https://piclinks.in/view2?id=464787', 
             'https://piclinks.in/view2?id=464789', 'https://piclinks.in/view2?id=464790', 'https://piclinks.in/view2?id=464791', 'https://piclinks.in/view2?id=464792', 
             'https://piclinks.in/view2?id=464793', 'https://piclinks.in/view2?id=464794', 'https://piclinks.in/view2?id=464795', 'https://piclinks.in/view2?id=464796', 
             'https://piclinks.in/view2?id=464797', 'https://piclinks.in/view2?id=464798', 'https://piclinks.in/view2?id=464799', 'https://piclinks.in/view2?id=464800', 
             'https://piclinks.in/view2?id=464801', 'https://piclinks.in/view2?id=464802', 'https://piclinks.in/view2?id=464804', 'https://piclinks.in/view2?id=464805', 
             'https://piclinks.in/view2?id=464806', 'https://piclinks.in/view2?id=464808', 'https://piclinks.in/view2?id=464809', 'https://piclinks.in/view2?id=464810', 
             'https://piclinks.in/view2?id=464811', 'https://piclinks.in/view2?id=464812', 'https://piclinks.in/view2?id=464813', 'https://piclinks.in/view2?id=464814', 
             'https://piclinks.in/view2?id=464815', 'https://piclinks.in/view2?id=464816', 'https://piclinks.in/view2?id=464817', 'https://piclinks.in/view2?id=464818', 
             'https://piclinks.in/view2?id=464819', 'https://piclinks.in/view2?id=464820', 'https://piclinks.in/view2?id=464821', 'https://piclinks.in/view2?id=464822', 
             'https://piclinks.in/view2?id=464823', 'https://piclinks.in/view2?id=464824', 'https://piclinks.in/view2?id=464825', 'https://piclinks.in/view2?id=464826', 
             'https://piclinks.in/view2?id=464828', 'https://piclinks.in/view2?id=464829', 'https://piclinks.in/view2?id=464830', 'https://piclinks.in/view2?id=464831', 
             'https://piclinks.in/view2?id=464832', 'https://piclinks.in/view2?id=464833', 'https://piclinks.in/view2?id=464834', 'https://piclinks.in/view2?id=464835', 
             'https://piclinks.in/view2?id=464836', 'https://piclinks.in/view2?id=464837', 'https://piclinks.in/view2?id=464838', 'https://piclinks.in/view2?id=464839', 
             'https://piclinks.in/view2?id=464840', 'https://piclinks.in/view2?id=464841', 'https://piclinks.in/view2?id=464842', 'https://piclinks.in/view2?id=464843', 
             'https://piclinks.in/view2?id=464844', 'https://piclinks.in/view2?id=464845', 'https://piclinks.in/view2?id=464846', 'https://piclinks.in/view2?id=464847', 
             'https://piclinks.in/view2?id=464848', 'https://piclinks.in/view2?id=464849', 'https://piclinks.in/view2?id=464850', 'https://piclinks.in/view2?id=464851', 
             'https://piclinks.in/view2?id=464852', 'https://piclinks.in/view2?id=464853', 'https://piclinks.in/view2?id=464854', 'https://piclinks.in/view2?id=464855', 
             'https://piclinks.in/view2?id=464856', 'https://piclinks.in/view2?id=464857', 'https://piclinks.in/view2?id=464858', 'https://piclinks.in/view2?id=464859', 
             'https://piclinks.in/view2?id=464860', 'https://piclinks.in/view2?id=464861', 'https://piclinks.in/view2?id=464862', 'https://piclinks.in/view2?id=464863', 
             'https://piclinks.in/view2?id=464865', 'https://piclinks.in/view2?id=464866', 'https://piclinks.in/view2?id=464867', 'https://piclinks.in/view2?id=464868']
    shuffle(links)
    localStorage.setItem("links", JSON.stringify(links))
}





stop = 0
async function demo(times) {
    if (sessionStorage.getItem("i")){
        icc = parseInt(sessionStorage.getItem("i"))
    } else {
        icc = 0
    }

    for (let i = icc; i < times.length; i++) {
        percent = Math.round((( (i)*100)/times.length )*10)/10
        percent_field.innerText = percent + "%"
        if (percent > 0) {
            if (percent <= 50) {
                bar_right.style.transform = 'rotate(' + percentageToDegrees(percent) + 'deg)'
            } else {
                bar_right.style.transform = 'rotate(180deg)'
                bar_left.style.transform = 'rotate(' + percentageToDegrees(percent -50) + 'deg)'
            }
        }

        if (stop===1){break}
        piclinks.href = links[i]
        if (i !== 0){
            await sleep(5000);
        }
        if (stop===1){break}
        openedWindow = piclinks.click()
    }
    sessionStorage.clear()
}


async function demo1(time) {
    await sleep(time);
    window.location.href = "/ClassOne"
}





if (localStorage.getItem("times")){
    times = JSON.parse(localStorage.getItem("times"))
}else {
    times = []
    last_time = 0
    for (let i=0; i<links.length; i++) {
        if (i===0) {
            times.push(i)
        } else {
            randInt = getRandomInt(60, 100)
            last_time = 65000 + randInt
            times.push(last_time*1000)
        }
    }
    localStorage.setItem("times", JSON.stringify(times))
}


if (waittig) {
    if (sessionStorage.getItem("i")){
        icc = parseInt(sessionStorage.getItem("i"))
    } else {
        icc = 0
    }
    demo1(times[icc] - 65000);
}


btn_start = document.querySelector("#start-btn")
btn_stop = document.querySelector("#stop-btn")

btn_start.addEventListener("click", ()=>{stop = 0; 
                                         bar_right.style.transform = 'rotate(0deg)'
                                         bar_left.style.transform = 'rotate(0deg)'
                                         demo(times);});
btn_stop.addEventListener("click", ()=>{stop = 1})
