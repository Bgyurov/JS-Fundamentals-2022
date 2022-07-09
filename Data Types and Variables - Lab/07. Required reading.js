function reading(numOfPages, pageReadForOnehour, numofDaystoReadBook) {

    let totalTimeToReadBook = numOfPages / pageReadForOnehour;

    let needHours = totalTimeToReadBook / numofDaystoReadBook;
    console.log(needHours);
}