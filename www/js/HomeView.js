var HomeView = function(store){

    this.initialize = function(){
        this.el = $('<div>');
        this.el.on('keyup','.search-key',this.findByName);
    }  ;

    this.render = function(){
        this.el.html(HomeView.template());
        return this;
    };
     this.findByName = function(){
         store.findByName($('.search-key').val(), function(employees){
             $('.employee-list').html(HomeView.liTempate(employees)) ;
            if(self.iscroll){
                console.log('Refresh iScroll');
                self.iscroll.refresh();
            }
             else{
                console.log('New iScrol');
                self.iscroll = new iScroll($('.scroll', self.el)[0], {hScrollbar: false, vScrollbar: false });
            }
         });
     }  ;
    this.initialize();

}
HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTempate = Handlebars.compile($("#employee-li-tpl").html());
