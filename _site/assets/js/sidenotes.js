// Making sidenotes instead of footnotes. Code is modification of: https://blog.jkl.gg/jekyll-footnote-tufte-sidenote/

(function() {
  let contentWidth = 1000; // This is the max width of my content
  let minimumWindowWidth = 1.4 * contentWidth; // This is the minimum width width where sidenotes are visisble. After they will be old school footnotes.
  function showSidenote(index, sup, ww, $fnli) {

    let sidenote_start = ww - (ww - contentWidth) / 2;
    let sidenote_width = (ww - contentWidth) / 2.2;
    let position_1 = sup.offset();


    // construct sidenote div
    let text = $fnli.eq(index).text().trim();
    let div = $(document.createElement('div'));
    div.text(text);
    div.addClass("sidenote");


    div.css({
      position: "absolute",
      left: sidenote_start,
      top: position_1["top"],
      width: sidenote_width,
    });

    if (ww > minimumWindowWidth) {
      sup.hover(function() {
        div.addClass("sidenote-hover");
      }, function() {
        div.removeClass("sidenote-hover");
      });
    } else {
      div.addClass("sidenote-hover");
    }

    $(document.body).append(div);
  }

  function loadSidenotes(ww, $fnli, fncount, $fn) {
    $("sup").each(function(index) {
      if (ww > minimumWindowWidth) {
        showSidenote(index, $(this), ww, $fnli);
        $fn.hide();
      } else {
        $fn.show();
      }
    });
  }

  $(window).on("load", function() {
    let $fn = $(".footnotes"),
      $fnli = $fn.find("ol li"),
      fncount = $fnli.length,
      ww = $(window).width(),
      sn = $.find("sidenote");

    // load first time
    if (ww > minimumWindowWidth) {
      loadSidenotes(ww, $fnli, fncount, $fn);
    }

    $(window).resize(function() {
      const new_ww = $(window).width();
      if (new_ww === ww) return;
      // console.log(" XXX -- RESIZE -- XXX ");
      ww = new_ww;
      $(".sidenote").remove();
      loadSidenotes(ww, $fnli, fncount, $fn);
    });
  });
})();