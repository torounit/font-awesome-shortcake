(function () {
  'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  //
  // import jQuery from 'jquery';
  // var $ = jQuery;

  var _class = function () {
  	function _class(jQuery) {
  		classCallCheck(this, _class);

  		this.jQuery = jQuery;
  	}

  	createClass(_class, [{
  		key: 'replace',
  		value: function replace(content) {
  			var _this = this;

  			return content.replace(/\[fa([^\]]*)\]/g, function (match, attr) {

  				var dummyHTHL = match.replace('[fa', '<i').replace(']', '/>');
  				console.log(_this.renderHTML(_this.jQuery(dummyHTHL)));
  				return _this.renderHTML(_this.jQuery(dummyHTHL));
  			});
  		}
  	}, {
  		key: 'renderHTML',
  		value: function renderHTML(shortcodeHTML) {
  			var icon = shortcodeHTML.attr('icon');
  			var size = shortcodeHTML.attr('size');
  			return '<span class="fa fa-' + icon + ' fa-' + size + '" data-fa-icon="' + icon + '" data-fa-size="' + size + '"><!-- fa-' + icon + ' --></span>';
  		}
  	}, {
  		key: 'restore',
  		value: function restore(content) {
  			var _this2 = this;

  			console.log(content);
  			return content.replace(/(?:<span( [^>]+)?>)\s*(?:<\/span>)/g, function (match, attr) {
  				if (typeof attr != 'undefined' && attr.indexOf('data-fa') > -1) {
  					var shortcodeHTML = _this2.jQuery(match);
  					var icon = shortcodeHTML.attr('data-fa-icon');
  					var size = shortcodeHTML.attr('data-fa-size');
  					return '[fa icon="' + icon + '" size="' + size + '"]';
  				}

  				return match;
  			});
  		}
  	}]);
  	return _class;
  }();

  /* global tinymce */
  tinymce.PluginManager.add('fa', function (editor) {

  	var shortcode = new _class(window.jQuery);

  	editor.on('BeforeSetContent', function (event) {
  		event.content = shortcode.replace(event.content);
  	});

  	editor.on('PostProcess', function (event) {
  		if (event.get) {
  			event.content = shortcode.restore(event.content);
  		}
  	});
  });

}());