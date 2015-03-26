/*************************************************************
 * This script is developed by JAMET julien, http://www.bac-a-sable.com
 * Feel free to distribute and modify code, but keep reference to its creator
 *
 * Observale class provides a way to define and detect event.
 * You can define your own trigger, by function and evnet name.
**************************************************************/
(function( _global){

    // VERSION 0.1
    var Observable = ( function construct(){

         function init( obj){

            var _oEvent    = {};
            var _aLibEvent = [];

            /**
             * [onEvent link function to event(s)]
             * @param  {[string]} sEvent      [name's event]
             * @param  {[function]} fCallBack [function call back]
             * @return {[boolean]}
             */
            function onEvent( sEvent, fCallBack){

                if( typeof( sEvent) == 'undefined' ||
                    sEvent === '' ||
                    typeof( fCallBack) == 'undefined'
                  ){

                    return false;
                }

                if( sEvent.indexOf( ' ') !== -1){
                    aEvent = sEvent.split( ' ');

                    for(var key in aEvent){
                        var sNewEvent     = aEvent[key];
                        _oEvent[sNewEvent] = fCallBack;
                        _aLibEvent.push( sNewEvent);
                    }

                }else{
                    _oEvent[sEvent] = fCallBack;
                    _aLibEvent.push( sEvent);
                }

                return true;

            }

            /**
             * [triggerEvent launch event with params]
             * @param  {[string]} sEvent [name's event]
             * @param  {[mix]} mArgs  [argument]
             * @return {[boolean]}        []
             */
            function triggerEvent( sEvent, mArgs){

                if( typeof( sEvent) == 'undefined' || sEvent === ''){
                    return false;
                }

                var aArgs = ( Object.prototype.toString.call( mArgs ) === '[object Array]')? mArgs : [mArgs];

                if( _aLibEvent.indexOf(sEvent) !== -1){
                    _oEvent[sEvent].apply( obj, aArgs);
                }

                return true;
            }

            // add function "on"
            Object.defineProperty( obj, 'on', {
                      enumerable   : false,
                      configurable : false,
                      writable     : false,
                      value        : onEvent
            });

            // add function "trigger"
            Object.defineProperty( obj, 'trigger', {
                      enumerable   : false,
                      configurable : false,
                      writable     : false,
                      value        : triggerEvent
            });

         }

        return {
            init : init
        };

    })();

    _global.Observable = Observable;

})( window);