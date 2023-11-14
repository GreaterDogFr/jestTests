function isPalindrom(word) {
    let len = Math.floor(word.length / 2);
    for (let i = 0; i < len; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            return false;
        }
        return true
    }
}

function containForbiddenWords(message) {
    
}

module.exports = {
    isPalindrom
    containForbiddenWords
}