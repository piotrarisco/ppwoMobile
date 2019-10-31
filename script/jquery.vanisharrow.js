var windw = this;
        var h = window.innerHeight;
        var myH = h/6;

$.fn.followTo = function ( pos ) {
    var $this = this,
        $window = $(windw);
    
    $window.scroll(function(e){
        if ($window.scrollTop() > pos) {
            
            $this.css({
                display: 'none'                
            });

        } 
    });
    
    $window.scroll(function(e){
        if ($window.scrollTop() <= pos) {
            
            $this.css({
                display: 'inline'                
            });

        } 
    });
};

$('#arrow').followTo(myH);

