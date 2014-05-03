// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.App = (function(_super) {
    __extends(App, _super);

    function App() {
      return App.__super__.constructor.apply(this, arguments);
    }

    App.prototype.initialize = function() {
      var deck;
      this.set('deck', deck = new Deck());
      this.set('playerHand', deck.dealPlayer());
      this.set('dealerHand', deck.dealDealer());
      this.set('endGameState', false);
      this.get('playerHand').on('endGame', function() {
        return this.set('endGameState', true);
      }, this);
      this.get('dealerHand').on('endGame', function() {
        return this.set('endGameState', true);
      }, this);
      return this.get('playerHand').on('dealerTurn', function() {
        return this.get('dealerHand').dealerPlay();
      }, this);
    };

    return App;

  })(Backbone.Model);

}).call(this);

//# sourceMappingURL=App.map
