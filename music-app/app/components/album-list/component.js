import Component from '@ember/component';

export default Component.extend({
  actions:{
    delete(song){
      if(this.get('delete')){
        this.get('delete')(song);
      }
    }
  }
});
