// ナビゲーションバーのリンクをクリックしたら
// スムーズにスクロールしながら対象位置に移動
$(".js_inPageLink").click(function() {
  var destination = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(destination).offset().top,
  }, 1400);

  // ハンバーガーメニューが開いている場合は閉じる
  $(".navbar-toggle:visible").click();

  // 本来のクリックイベントは処理しない
  return false;
});

// ボタンの表示／非表示を切り替える関数
function updateButton() {
    if ($(this).scrollTop() >= 300) { // 300px以上スクロールされた
        // ボタンを表示
        $(".bl_btn_BackToTop").fadeIn();
    } else {
        // ボタンを非表示
        $(".bl_btn_BackToTop").fadeOut();
    }
}

$(document).ready(function() {
    updateButton();

    // スクロールされる度にupdateButtonを実行
    $(window).scroll(updateButton);

    // ボタンをクリックしたらページトップにスクロールする
    $(".js_BackToTop").click(function() {
        // 600ミリ秒かけてトップに戻る
        $("html, body").animate({
            scrollTop: 0,
        }, 600);

        // ボタンのhrefに遷移しない
        return false;
    });
});

$(function() {
    $('.bl_slideImg').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
    });
});


//タブ関連
function showTab(selector) {
    // .nav-tabs liのうちselectorに該当するものにだけactiveクラスを付ける
    $(".nav-tabs li").removeClass("active");
    $(".nav-tabs a[href='" + selector + "']").parent("li").addClass("active");

    // .tabs-content > sectionのうちselectorに該当するものだけを表示
    $(".tabs-content > section").hide();
    $(selector).show();
}

$(document).ready(function() {
    // 初期状態として1番目のタブを表示
    showTab("#flow_tabs");

    // タブがクリックされたらコンテンツを表示
    $(".nav-tabs a").click(function() {
        // hrefの値を受け取ってshowTab()関数に渡す
        var selector = $(this).attr("href");
        showTab(selector);

        // hrefにページ遷移しない
        return false;
    });
});
