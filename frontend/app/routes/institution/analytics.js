
import Ember from 'ember';


export default Ember.Route.extend({
    
    model() {
        return Ember.RSVP.hash({
            grants: this.get('store').findAll('grant'),
            agencies: this.get('store').findAll('agency'),
        });
    },
    
    actions: {
        didTransition: function() {
            Ember.$(".moderatorHolder").show();
        }
    },

    setupController(controller, model) {
        controller.set('institution', true);
        controller.set('isFileUploaded', "researcher-form");
        controller.set('grants', model.grants.filter(function(grant) {
            return grant.get('institution');
        }));
        //controller.set('document', model.document)
        controller.set('agencies', model.agencies);
    }

});

