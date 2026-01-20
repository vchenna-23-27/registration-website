function showDate() {

    var d = new Date();

    alert(
        "Date: " + d.getDate() + "/" +
        (d.getMonth()+1) + "/" +
        d.getFullYear()
    );
}
