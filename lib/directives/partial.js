module.exports =  {
  params: ['name'],
  // watch changes to name for dynamic partials
  paramWatchers: {
    name: function (value) {
      Vue.options.directives.if.remove.call(this);
      if (value) {
        this.insert(value)
      }
    }
  },

  bind: function () {
    this.anchor = Vue.util.createAnchor('v-partial');
    Vue.util.replace(this.el, this.anchor);
    this.insert(this.params.name);
  },
  insert (id) {
    var partial = Vue.util.resolveAsset(this.vm.$options, 'partials', id, true);
    if (partial) {
      this.factory = new Vue.FragmentFactory(this.vm, partial);
      Vue.options.directives.if.insert.call(this);
    }
  },
  unbind () {
    if (this.frag) {
      this.frag.destroy()
    }
  }
}