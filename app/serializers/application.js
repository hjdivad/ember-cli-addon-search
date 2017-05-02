import DS from 'ember-data';

let id = 0;
export default DS.JSONSerializer.extend({
  normalizeResponse(store, type, payload) {
    return payload;
  }
});
