const getLastWordLength = (str) => {
    str = str.trim();
    const words = str.split(' ');
    let lastWord = words[words.length-1];
    let LastWordLength = lastWord.length;
    return LastWordLength;
}

