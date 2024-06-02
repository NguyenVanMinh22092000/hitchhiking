import {  getFormatDate } from "./DateUtils";

export const genCommonFieldsTblData = (payload, { page = 1, size = 10,}) => {
    return (payload || []).map((item, idx) => {
        const {image,  winningDate, winnerId} = item;
        const newImage = image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqI5RIkJJZaS6S6sGgOPoQft_7GmhyxQUoHw&usqp=CAU';
        const newWinningDate = getFormatDate('default', winningDate || new Date() , {type: 'short'}); 
   
        return {
            ...item,
            id: winnerId,
            image: newImage,
            order: (page - 1) * size + idx + 1,
            winningDate : newWinningDate,
        };
    });
}
