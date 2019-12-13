'use strict';
Vue.component('currency-adder', {
  data: function () {
    return {
      form: {
        name: '',
        rate: '1'
      }
    }
  },
  methods: {
    handleAdd: function (event) {
      event.preventDefault();
      axios({
        method: 'POST',
        url: '/currency',
        json: true,
        data: {
          name: this.form.name,
          rate: parseFloat(this.form.rate)
        }
      });
      this.form.name = '';
      this.form.rate = '';
    }
  },
  template: '<form class="w-auto d-flex justify-content-center form-inline">' +
      '<label>Name:<input class="form-control mr-2" v-model="form.name"></label>' +
      '<label>Rate:<input class="form-control mr-2" v-model="form.rate"></label>' +
      '<button class="btn btn-primary ml-2" v-on:click="handleAdd">Add Currency</button>' +
      '</form>'
});

Vue.component('converter', {
  props: ['currencies'],
  data: function () {
    return {
      form: {
        to: '',
        from: '',
        amount: 0
      }
    }
  },
  methods: {
    handleConvert: function (event) {
      event.preventDefault();
      axios({
        method: 'POST',
        url: '/currency',
        json: true,
        data: {
          name: this.form.name,
          rate: parseFloat(this.form.rate)
        }
      });
      this.form.name = '';
      this.form.rate = '';
    },
    handleFrom: function (event) {
      event.preventDefault();
      this.form.from = event.target.innerText;
    },
    handleTo: function (event) {
      event.preventDefault();
      this.form.to = event.target.innerText;
    }
  },
  template: '<form class="form-inline">' +
      '<div class="input-group">' +
      ' <div class="input-group-btn mr-2">' +
      '<button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
      'Choose' +
      ' </button>' +
      '<div class="dropdown-menu">' +
      ' <a class="dropdown-item" href="#" v-on:click="handleTo" v-for="curr in currencies">{{curr.name}}</a>' +
      '</div>' +
      '</div>' +
      ' <div class="input-group-btn mr-2">' +
      '<button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
      'Choose' +
      ' </button>' +
      '<div class="dropdown-menu">' +
      ' <a class="dropdown-item" href="#" v-on:click="handleFrom" v-for="curr in currencies">{{curr.name}}</a>' +
      '</div>' +
      '</div>' +
      '<input type="text" class="form-control" v-model="form.amount" aria-label="Text input with dropdown button">' +
      '</div>' +
      '</form>'
});

var app = new Vue({
  el: '#app',
  data: {
    isAdmin: false,
    currencies: [{name: 'TEST', rate: 1.6}]
  },
  mounted: function () {
    var uri = window.location.search.substring(1);
    var params = new URLSearchParams(uri);
    this.isAdmin = params.get('admin') === "true";
    const that = this;
    axios({method: 'GET', url: '/currency', json: true}).then(function (res) {
      that.currencies = res.data;
    })
  }
});
