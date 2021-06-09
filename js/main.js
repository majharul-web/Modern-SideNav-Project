    /** sideNav code */
      $("#navMenuIcon").click(function () {
        let sidNavID = $("#sidNavID");
        let contentOverlayID = $("#contentOverlayID");
        let menuText = $(".menuText");

        if (sidNavID.hasClass("sidNavClose")) {
          sidNavID.removeClass("sidNavClose");
          sidNavID.addClass("sidNavOpen");

          menuText.removeClass("d-none");

          contentOverlayID.removeClass("contentOverlayClose");
          contentOverlayID.addClass("contentOverlay");
        } else {
          sidNavID.removeClass("sidNavOpen");
          sidNavID.addClass("sidNavClose");

          menuText.addClass("d-none d-none");
          contentOverlayID.removeClass("contentOverlay");
          contentOverlayID.addClass("contentOverlayClose");
        }
      });

     /** overlay code */
      $("#contentOverlayID").click(function () {
        let sidNavID = $("#sidNavID");
        let contentOverlayID = $("#contentOverlayID");

        if (sidNavID.hasClass("sidNavClose")) {
          sidNavID.removeClass("sidNavClose");
          sidNavID.addClass("sidNavOpen");
          contentOverlayID.removeClass("contentOverlayClose");
          contentOverlayID.addClass("contentOverlay");
        } else {
          sidNavID.removeClass("sidNavOpen");
          sidNavID.addClass("sidNavClose");
          contentOverlayID.removeClass("contentOverlay");
          contentOverlayID.addClass("contentOverlayClose");
        }
      });
   