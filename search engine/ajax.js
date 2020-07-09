window.addEventListener('load',bindevents);
function bindevents(){
    document.querySelector('#loading').classList.toggle('hide');
    document.querySelector('#bt').addEventListener('click',doajax);
}
function printImages(obj) {
    var div = document.querySelector('#result');
    var arr = obj.data;
    arr.forEach(ele=> div.appendChild(createImage(ele.images.original.url)));
   // console.log(obj.data)




}
function createImage(url){
var image = document.createElement('img');
image.src = url;
return image;
}
function doajax() {
    document.querySelector('#loading').classList.remove('hide');
    var txt = document.querySelector('#txt').value;
    var url = `http://api.giphy.com/v1/gifs/search?api_key=kyYMHEWrVDGdfnaD6CqUaoA8xz6FIvri&q= ${txt}&limit=5`;
    console.log('url is ',url);
    var http = new XMLHttpRequest();
    //bind readystate events
    http.onreadystatechange = function(){
        console.log('states are', http.readyState,'status',http.status);
        if(http.readyState==4 && http.status==200){ // ready state is there not httprequest
            console.log('in http response');
            var obj = JSON.parse(http.responseText);
            console.log('Object is ',obj);
            printImages(obj);
        }
        document.querySelector('#loading').classList.add('hide');
    }
    http.open('GET',url);
    http.send();



}