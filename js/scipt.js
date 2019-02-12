// 地址
$(".city_list_con li").click(function () {
    $(".city_selected").find("span:eq(0)").html($(this));
})
// movie1-------------------------------------------------------------------------------------------------------------------------------------
var movie_ul1 = document.getElementById("movie_ul1");
var ajax_movie1 = new XMLHttpRequest;
ajax_movie1.open("get", "movie1.php", true);
ajax_movie1.send(null);
ajax_movie1.onreadystatechange = function () {
    if (ajax_movie1.readyState === 4 && ajax_movie1.status === 200) {
        var movie1_data = JSON.parse(ajax_movie1.responseText);
        var movie1_str = "";
        for (var i = 0; i < movie1_data.length; i++) {
            movie1_str += `<li>
            <a href="">
            <i>2DIMAX</i>
            <em>${movie1_data[i].content}</em>
            <img src="${movie1_data[i].imgurl1}" alt="">
            <img class="movie_bg" src="${movie1_data[i].imgurl2}" alt="">
            <b>购 票</b>
            </a>
        </li>`
        }
        movie_ul1.innerHTML = movie1_str;
    }
}
// movie2----------------------------------------------------------------------------------------------------------------
var movie_ul2 = document.getElementById("movie_ul2");
var ajax_movie2 = new XMLHttpRequest;
ajax_movie2.open("get", "movie2.php", true);
ajax_movie2.send(null);
ajax_movie2.onreadystatechange = function () {
    if (ajax_movie2.readyState === 4 && ajax_movie2.status === 200) {
        var movie2_data = JSON.parse(ajax_movie2.responseText);
        var movie2_str = "";
        for (var i = 0; i < movie2_data.length; i++) {
            movie2_str += `<li>
            <a href="">
                            <i>2DIMAX</i>
                            <em>${movie2_data[i].content1}</em>
                            <img src="${movie2_data[i].imgurl1}" alt="">
                            <img class="movie_bg" src="${movie2_data[i].imgurl2}" alt="">
                            <b>${movie2_data[i].content2}</b>
                        </a>
                        <span>预告片</span>
                        <span>预 售</span>
                        <strong>2月5日上映</strong>
            </a>
        </li>`
        }
        movie_ul2.innerHTML = movie2_str;
    }
}
// movie3-----------------------------------------------------------------------------------------------------------------------------------------------
var movie_ul3 = document.getElementById("movie_ul3");
var ajax_movie3 = new XMLHttpRequest;
ajax_movie3.open("get", "movie3.php", true);
ajax_movie3.send(null);
ajax_movie3.onreadystatechange = function () {
    if (ajax_movie3.readyState === 4 && ajax_movie3.status === 200) {
        var movie3_data = JSON.parse(ajax_movie3.responseText);
        var movie3_str = "";
        for (var i = 0; i < movie3_data.length; i++) {
            movie3_str += `<li>
            <a href="">
            <em>${movie3_data[i].content1}</em>
            <img src="${movie3_data[i].imgurl}" alt="">
            <img class="movie_bg" src="img/index_bg.png" alt="">
            <img class="movie_bg2" src="img/index_bg.png" alt="">
            <img class="movie_bg3" src="img/index_bg.png" alt="">
            <b>${movie3_data[i].content2}</b>
        </a>
        </li>`
        }
        movie_ul3.innerHTML = movie3_str;
    }
}