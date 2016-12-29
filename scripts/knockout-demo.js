'use strict';


(function (ko) {


	function GoogleCustomSearch(){
		this.key = 'API_KEY';
		this.url = 'https://www.googleapis.com/customsearch/v1';
		this.cx = 'SITE_CONTEXT';

		this.lastRequest = null;
	}

	GoogleCustomSearch.prototype.search = function(args, callback){
		var self = this;

		self.lastRequest = $.ajax({
			url: self.url,
			data: {
				key: self.key,
				q: args.q,
				cx: self.cx
			},
			type: 'GET',
			contentType: 'application/json',
			beforeSend: function(){
				if(self.lastRequest != null){
					self.lastRequest.abort();
				}
			},
			success: function(data){
				self.lastRequest = null;
				return callback(null, data);
			},
			error: function(err){
				self.lastRequest = null;
				return callback(err);
			}
		});
	};


	var SearchEngineModel = function(args){

		this.searchKeyword = ko.observable();
		this.searchResult = ko.observableArray([]);
		this.showLoader = ko.observable(false);

		var searchService = new GoogleCustomSearch();

		this.searchKeyword.subscribe(function(newValue){
			if(this.searchKeyword().length > 0){
				var self = this;
				self.showLoader(true);
				
				searchService.search({q: this.searchKeyword()}, function(err, result){

					if(err || !result){
						self.showLoader(false);
						return;
					}
					self.searchResult(result.items);
					self.showLoader(false);
				});

				
			}else{
				this.showLoader(false);	
			}
		}.bind(this));
	};

	ko.applyBindings(new SearchEngineModel(), $('#searchEngine').get()[0]);

})(ko);