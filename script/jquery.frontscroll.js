 var windw = this;
        var h = window.innerHeight;
        var myH = h/3;

$.fn.followTo = function ( pos ) {
    var $this = this,
        $window = $(windw);
    
    $window.scroll(function(e){
        if ($window.scrollTop() > pos) {
            
            $this.css({
                position: 'relative',
                top: myH
                
            });
//            document.getElementById("test").style.position = "absolute";
//            document.getElementById("test").style.top = "550px";
        } else {
            $this.css({
                position: 'fixed',
                top: 0
                
            });
//            document.getElementById("test").style.position = "relative";
//            document.getElementById("test").style.top = "0px";
        }
    });
};

$('.pz-navbar').followTo(myH);