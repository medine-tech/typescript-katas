
const wrapGifts = (gifts: Array<string>) => {

    if(gifts.length === 0)
        return []

    const Giftbox = [];

    Giftbox.push('*'.repeat((gifts[0].length + 2)))

    for(let i = 0;  i < gifts.length; i++ ){
        Giftbox.push('*' + gifts[i] + '*')
    }

    Giftbox.push('*'.repeat((gifts[0].length + 2)))

    return Giftbox;
}

export default wrapGifts;