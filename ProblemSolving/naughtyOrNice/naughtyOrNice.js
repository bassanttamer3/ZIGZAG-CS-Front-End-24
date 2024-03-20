//https://www.codewars.com/kata/5662b14e0a1fb8320a00005c

function naughtyOrNice(data) {
    let naughtyCount = 0;
    let niceCount = 0;
  
    for (const month in data) {
      const days = data[month];
      for (const day in days) {
        if (days[day] === "Naughty") {
          naughtyCount++;
        } else if (days[day] === "Nice") {
          niceCount++;
        }
      }
    }
  
    if (naughtyCount > niceCount) {
      return "Naughty!";
    } else if (naughtyCount < niceCount) {
      return "Nice!";
    } else {
      return "Nice!";
    }
  }
  const testData = {
    "January": {
      "1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", 
      "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", 
      "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", 
      "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", 
      "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", 
      "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", 
      "31": "Naughty"
    },
    "February": {
      "1": "Nice", "2": "Naughty", "3": "Nice", "4": "Naughty", "5": "Nice", 
      "6": "Naughty", "7": "Nice", "8": "Naughty", "9": "Nice", "10": "Naughty", 
      "11": "Nice", "12": "Naughty", "13": "Nice", "14": "Naughty", "15": "Nice", 
      "16": "Naughty", "17": "Nice", "18": "Naughty", "19": "Nice", "20": "Naughty", 
      "21": "Nice", "22": "Naughty", "23": "Nice", "24": "Naughty", "25": "Nice", 
      "26": "Naughty", "27": "Nice", "28": "Naughty", "29": "Nice"
    },
    "March": {
      "1": "Naughty", "2": "Nice", "3": "Naughty", "4": "Nice", "5": "Naughty", 
      "6": "Nice", "7": "Naughty", "8": "Nice", "9": "Naughty", "10": "Nice", 
      "11": "Naughty", "12": "Nice", "13": "Naughty", "14": "Nice", "15": "Naughty", 
      "16": "Nice", "17": "Naughty", "18": "Nice", "19": "Naughty", "20": "Nice", 
      "21": "Naughty", "22": "Nice", "23": "Naughty", "24": "Nice", "25": "Naughty", 
      "26": "Nice", "27": "Naughty", "28": "Nice", "29": "Naughty", "30": "Nice", 
      "31": "Naughty"
    }
  };
  
  console.log(naughtyOrNice(testData));