const app = require('../app')

describe ('Palindrom', () => {
    it('should be a palindrom', ( )=> {
        expect(app.isPalindrom('kayak')).toEqual(true);
    })
    it('shouldn\'t be a palindrom', ( )=> {
        expect(app.isPalindrom('extra')).toEqual(false)
    })
})

describe ('Moderator', () => {
    if('contient des mots interdits', () => {
        expect(app.containForbiddenWords('Vous êtes des nuls')).toEqual(true)
    });
})