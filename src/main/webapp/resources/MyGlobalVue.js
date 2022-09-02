var vm = new Vue({
    el: '#allBody',
    data: {
        appName: 'Travel Diary'
    }
})

Vue.component('l-map', window.Vue2Leaflet.LMap);

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);