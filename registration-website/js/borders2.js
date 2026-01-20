function changeBorder(type) {

    var box = document.getElementById("formBox");

    switch(type) {
        case "solid":
            box.style.borderStyle = "solid";
            break;

        case "dashed":
            box.style.borderStyle = "dashed";
            break;

        case "double":
            box.style.borderStyle = "double";
            break;

        default:
            box.style.borderStyle = "solid";
    }
}
