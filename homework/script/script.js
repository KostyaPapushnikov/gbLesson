function OpenFunction() {
    document.getElementById("mega_box").style.visibility = "visible"
}

function CloseFunction() {
    document.getElementById("mega_box").style.visibility = "hidden"
    document.getElementById("list_item").style.display = "none"
}

function BoxFunction() {
    document.getElementById("filter_mega_box").style.display = "block"
    document.getElementById("box_function").style.display = "none"
}

function CloseLinkFunction() {
    document.getElementById("filter_mega_box").style.display = "none"
    document.getElementById("box_function").style.display = "block"
}

function ItemFunction() {
    document.getElementById("filter_mega_item1").style.display = "flex"
    document.getElementById("filter_mega_item2").style.display = "none"
    document.getElementById("filter_mega_item3").style.display = "none"
}

function ItemBrandFunction() {
    document.getElementById("filter_mega_item1").style.display = "none"
    document.getElementById("filter_mega_item2").style.display = "flex"
    document.getElementById("filter_mega_item3").style.display = "none"
}

function ItemDesignerFunction() {
    document.getElementById("filter_mega_item1").style.display = "none"
    document.getElementById("filter_mega_item2").style.display = "none"
    document.getElementById("filter_mega_item3").style.display = "flex"
}

function firstPageFunction() {
    document.getElementById("card_box_second").style.display = "none"
    document.getElementById("card_box_first").style.display = "flex"
}

function secondPageFunction() {
    document.getElementById("card_box_second").style.display = "flex"
    document.getElementById("card_box_first").style.display = "none"
}

function clearFunction() {
    document.getElementById("list_item").style.display = "none"
    document.getElementById("list_item_bottom").style.display = "none"
}

function CloseFunctionBottom() {
    document.getElementById("list_item_bottom").style.display = "none"
}